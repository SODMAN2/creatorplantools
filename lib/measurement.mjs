export const CONSENT_KEY = 'cpt-analytics-consent-v1';
export const SITE_ORIGIN = 'https://creatorplantools.com';

export function readConsent(storage) {
  try {
    const value = storage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch { return null; }
}

export function saveConsent(storage, value) {
  if (value !== 'granted' && value !== 'denied') return false;
  try { storage.setItem(CONSENT_KEY, value); return true; } catch { return false; }
}

export function pagePath(value, catalog) {
  try {
    const url = new URL(value, SITE_ORIGIN);
    if (url.origin !== SITE_ORIGIN || url.username || url.password) return null;
    const path = url.pathname.replace(/\/+$/, '') || '/';
    return Object.hasOwn(catalog, path) ? path : null;
  } catch { return null; }
}

// Retain a referral origin, never a search term, URL path, query or fragment.
export function referralOrigin(value) {
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.origin : '';
  } catch { return ''; }
}

export function linkDetails(source, href, catalog, editorialResource = false) {
  if (!pagePath(source, catalog)) return null;
  try {
    const url = new URL(href, SITE_ORIGIN + source);
    if (url.username || url.password || !['https:', 'http:'].includes(url.protocol)) return null;
    if (url.origin === SITE_ORIGIN) {
      const destination = pagePath(url.href, catalog);
      if (!destination || destination === source) return null;
      const fromTool = source.startsWith('/tools/');
      const toTool = destination.startsWith('/tools/');
      const linkType = source.startsWith('/guides/') && toTool ? 'guide_to_tool'
        : fromTool && toTool ? 'tool_to_tool'
          : fromTool && destination.startsWith('/guides/') ? 'tool_to_guide' : 'other_internal';
      return { name: 'internal_click', parameters: { source_path: source, destination_path: destination, link_type: linkType } };
    }
    // Only explicitly marked, static editorial links on these resource domains.
    if (editorialResource && ['support.google.com', 'developers.google.com'].includes(url.hostname)) {
      return { name: 'outbound_click', parameters: { source_path: source, destination_domain: url.hostname, link_type: 'editorial_resource' } };
    }
  } catch { /* Ignore malformed links. */ }
  return null;
}

// The transport receives only the fixed schema below, never arbitrary event data.
export function createMeasurement({ catalog, measurementId, transport, referrer = '' }) {
  let consent = null;
  let current = null;
  let active = false;
  let viewed = false;
  let previous = '';
  const started = new Set();
  const used = new Set();
  const validId = /^G-[A-Z0-9]+$/.test(measurementId || '');
  const context = () => ({
    page_location: SITE_ORIGIN + current,
    page_title: catalog[current].title,
    page_referrer: previous || referralOrigin(referrer),
  });
  const send = (name, parameters) => {
    if (!active || consent !== 'granted' || !current) return false;
    try { return transport.emit(name, parameters, context()) !== false; } catch { return false; }
  };
  const view = () => {
    if (!viewed && send('page_view', { page_path: current })) viewed = true;
  };
  const startTransport = () => {
    if (!current || !validId || consent !== 'granted') return;
    try { active = transport.start(measurementId, context()) !== false; } catch { active = false; }
    view();
  };
  return {
    enter(value) {
      const next = pagePath(value, catalog);
      if (next === current) return;
      previous = active && current ? SITE_ORIGIN + current : '';
      current = next;
      viewed = false;
      started.clear();
      used.clear();
      if (!current) {
        active = false;
        transport.pause?.();
      } else startTransport();
    },
    consent(value) {
      consent = value === 'granted' ? 'granted' : value === 'denied' ? 'denied' : null;
      if (consent === 'granted') { startTransport(); return false; }
      active = false;
      try { return Boolean(transport.stop(measurementId)); } catch { return false; }
    },
    toolStart(tool, trusted) {
      if (!trusted || !active || catalog[current]?.tool !== tool) return false;
      if (started.has(tool)) return true;
      if (!send('tool_start', { tool_name: tool, page_path: current })) return false;
      started.add(tool);
      return true;
    },
    toolUse(tool, valid) {
      if (valid !== true || !started.has(tool) || used.has(tool) || catalog[current]?.tool !== tool) return false;
      if (!send('tool_use', { tool_name: tool, page_path: current })) return false;
      used.add(tool);
      return true;
    },
    click(href, trusted, editorialResource = false) {
      if (!trusted || !active) return false;
      const event = linkDetails(current, href, catalog, editorialResource);
      return event ? send(event.name, event.parameters) : false;
    },
  };
}
