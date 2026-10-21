export function clearAnalyticsCookies() {
  const names = document.cookie.split(';').map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`];
  if (host === 'www.creatorplantools.com') domains.push('creatorplantools.com', '.creatorplantools.com');
  for (const name of names) for (const domain of domains) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax${domain ? `; domain=${domain}` : ''}`;
  }
}

export function createGoogleTransport() {
  let id;
  let script;
  let blocked = false;
  let initialized = false;
  let enabled = false;
  const disable = () => { if (id) window[`ga-disable-${id}`] = true; enabled = false; };
  const command = (...args) => {
    if (blocked || !enabled || typeof window.gtag !== 'function') return false;
    window.gtag(...args);
    return true;
  };
  return {
    start(measurementId, page) {
      if (blocked) return false;
      id = measurementId;
      window[`ga-disable-${id}`] = false;
      enabled = true;
      if (initialized) {
        command('set', page);
        command('config', id, { ...page, send_page_view: false, update: true });
        return true;
      }
      initialized = true;
      window.dataLayer = [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      command('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      command('consent', 'update', { analytics_storage: 'granted' });
      command('js', new Date());
      command('set', { ...page, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      command('config', id, {
        ...page,
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_domain: window.location.hostname,
        cookie_expires: 60 * 60 * 24 * 90,
        cookie_update: false,
        cookie_flags: 'SameSite=Lax;Secure',
        ...(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? { debug_mode: true } : {}),
      });
      // No script, preconnect, consent ping or Google queue exists before opt-in.
      script = document.createElement('script');
      script.id = 'cpt-google-analytics';
      script.async = true;
      script.referrerPolicy = 'origin';
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      script.onerror = () => { blocked = true; disable(); window.dataLayer = []; };
      document.head.appendChild(script);
      return true;
    },
    emit(name, parameters, page) {
      if (!enabled) return false;
      return command('event', name, { ...parameters, ...page, send_to: id });
    },
    pause: disable,
    stop() {
      disable();
      script?.remove();
      if (initialized) {
        blocked = true;
        window.gtag = () => {};
        window.dataLayer = [];
      }
      clearAnalyticsCookies();
      // A reload discards any SDK timers/listeners as well as its script element.
      return initialized;
    },
  };
}
