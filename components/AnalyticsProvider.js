'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CONSENT_KEY, createMeasurement, readConsent, saveConsent } from '@/lib/measurement.mjs';
import { createGoogleTransport } from '@/lib/googleAnalytics.mjs';

const AnalyticsContext = createContext(null);

export default function AnalyticsProvider({ catalog, children }) {
  const pathname = usePathname();
  const engine = useRef(null);
  const [consent, setConsent] = useState(null);
  const [open, setOpen] = useState(false);
  const [focusSettings, setFocusSettings] = useState(false);

  useEffect(() => {
    if (!engine.current) {
      engine.current = createMeasurement({ catalog, measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, transport: createGoogleTransport(), referrer: document.referrer });
      engine.current.enter(window.location.pathname);
      let stored = null;
      try { stored = readConsent(window.localStorage); } catch { /* Storage can be blocked. */ }
      engine.current.consent(stored);
      setConsent(stored);
      setOpen(stored === null);
    }
    const synchronize = (event) => {
      if (event?.type === 'storage' && event.key !== CONSENT_KEY && event.key !== null) return;
      if (event?.type === 'visibilitychange' && document.visibilityState !== 'visible') return;
      let stored = null;
      try { stored = readConsent(window.localStorage); } catch { /* Fail closed. */ }
      // A choice in another tab also stops the SDK in this document.
      if (stored !== 'granted') {
        const reload = engine.current.consent(stored);
        setConsent(stored);
        setOpen(stored === null);
        if (reload) window.location.reload();
      }
    };
    window.addEventListener('storage', synchronize);
    window.addEventListener('pageshow', synchronize);
    document.addEventListener('visibilitychange', synchronize);
    return () => {
      window.removeEventListener('storage', synchronize);
      window.removeEventListener('pageshow', synchronize);
      document.removeEventListener('visibilitychange', synchronize);
    };
  }, [catalog]);

  useEffect(() => { engine.current?.enter(pathname); }, [pathname]);

  useEffect(() => {
    const click = (event) => {
      if (event.button !== 0 && event.button !== 1) return;
      const anchor = event.target instanceof Element ? event.target.closest('[data-analytics-links] a[href]') : null;
      if (!anchor || event.defaultPrevented || anchor.hasAttribute('download')) return;
      // Read the declared href, not tool content or an arbitrary event payload.
      engine.current?.click(anchor.getAttribute('href'), event.isTrusted, anchor.hasAttribute('data-analytics-resource'));
    };
    // Capture before Next Link prevents the browser's default navigation.
    document.addEventListener('click', click, true);
    document.addEventListener('auxclick', click, true);
    return () => { document.removeEventListener('click', click, true); document.removeEventListener('auxclick', click, true); };
  }, []);

  const choose = (value) => {
    // Set the in-memory gate first, then remember only the preference.
    const reload = engine.current?.consent(value);
    try { saveConsent(window.localStorage, value); } catch { /* Current-page choice still applies. */ }
    setConsent(value);
    setOpen(false);
    if (reload) window.location.reload();
  };
  return <AnalyticsContext.Provider value={{ engine, consent, open, focusSettings, choose, settings: () => { setFocusSettings(true); setOpen(true); } }}>
    {children}
  </AnalyticsContext.Provider>;
}

export function AnalyticsConsent() {
  const analytics = useContext(AnalyticsContext);
  const heading = useRef(null);
  useEffect(() => {
    if (analytics?.open && analytics.focusSettings) heading.current?.focus();
  }, [analytics?.open, analytics?.focusSettings]);
  if (!analytics?.open) return null;
  return <aside className="analytics-consent" aria-labelledby="analytics-consent-title">
    <div className="wrap">
      <h2 id="analytics-consent-title" ref={heading} tabIndex={-1}>Optional analytics</h2>
      <p>With your permission, Google Analytics uses cookies and browser identifiers to help us understand site visits, tool use and navigation. Your calculator inputs and written content are not sent as analytics events. All tools work if you reject analytics. <Link className="content-link" href="/privacy">Privacy and cookie details</Link>.</p>
      {analytics.consent && <p className="analytics-preference">Current choice: analytics {analytics.consent === 'granted' ? 'accepted' : 'rejected'}. {analytics.consent === 'granted' && 'Withdrawing reloads this page to stop Analytics; save any entries you need first.'}</p>}
      <div className="analytics-choices">
        <button type="button" onClick={() => analytics.choose('granted')}>Accept analytics</button>
        <button type="button" onClick={() => analytics.choose('denied')}>Reject analytics</button>
      </div>
    </div>
  </aside>;
}

export function AnalyticsSettingsButton() {
  const analytics = useContext(AnalyticsContext);
  return <button className="analytics-settings" type="button" onClick={() => analytics?.settings()}>Analytics settings</button>;
}

export function useToolMeasurement(toolName, validResult) {
  const analytics = useContext(AnalyticsContext);
  const [action, setAction] = useState(null);
  useEffect(() => {
    if (action?.eligible && validResult === true) analytics?.engine.current?.toolUse(toolName, true);
  }, [action, validResult, toolName, analytics?.engine]);
  return (event) => {
    const trusted = event.nativeEvent?.isTrusted === true || event.isTrusted === true;
    const eligible = analytics?.engine.current?.toolStart(toolName, trusted) === true;
    setAction({ eligible });
  };
}
