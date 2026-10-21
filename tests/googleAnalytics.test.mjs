import assert from 'node:assert/strict';
import test from 'node:test';
import { createGoogleTransport } from '../lib/googleAnalytics.mjs';
import { createMeasurement } from '../lib/measurement.mjs';

test('browser adapter creates no Google objects until opt-in, config precedes tag, blocking/withdrawal stop collection', () => {
  const originalWindow = globalThis.window, originalDocument = globalThis.document;
  const scripts = [], cookieWrites = [];
  globalThis.window = { location: { hostname: 'creatorplantools.com' } };
  globalThis.document = {
    createElement: (tag) => ({ tag, remove() { this.removed = true; } }),
    head: { appendChild: (script) => scripts.push(script) },
    get cookie() { return '_ga=old; _ga_TEST123=old; essential=keep'; },
    set cookie(value) { cookieWrites.push(value); },
  };
  try {
    const transport = createGoogleTransport();
    const path = '/tools/average-percentage-viewed-calculator';
    const tool = 'Average Percentage Viewed Calculator';
    const catalog = { [path]: { title: tool, tool } };
    const engine = createMeasurement({ catalog, measurementId: 'G-TEST123', transport });
    engine.enter(path);
    assert.equal(scripts.length, 0); assert.equal(window.gtag, undefined); assert.equal(window.dataLayer, undefined);
    engine.consent('denied'); engine.toolStart(tool, true); engine.toolUse(tool, true);
    assert.equal(scripts.length, 0); assert.equal(window.dataLayer, undefined);
    assert(!cookieWrites.some((value) => value.startsWith('essential=')));
    engine.consent('granted');
    assert.equal(scripts.length, 1);
    assert.equal(scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-TEST123');
    assert.equal(scripts[0].referrerPolicy, 'origin');
    const queue = window.dataLayer.map((args) => [...args]);
    assert.deepEqual(queue[0], ['consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }]);
    assert.deepEqual(queue[1], ['consent', 'update', { analytics_storage: 'granted' }]);
    const config = queue.find(([command]) => command === 'config')[2];
    assert.equal(config.send_page_view, false); assert.equal(config.allow_google_signals, false);
    assert.equal(config.cookie_update, false); assert.equal(config.cookie_expires, 7776000);
    assert.equal(config.debug_mode, undefined);
    engine.enter(path); engine.consent('granted');
    assert.equal(scripts.length, 1);
    assert.equal(window.dataLayer.filter((args) => args[0] === 'event').length, 1, 'one manual page view');
    engine.toolStart(tool, true); engine.toolUse(tool, false); engine.toolUse(tool, true);
    assert.deepEqual(window.dataLayer.filter((args) => args[0] === 'event').map((args) => args[1]), ['page_view', 'tool_start', 'tool_use']);
    assert.equal(engine.consent('denied'), true);
    assert.equal(window['ga-disable-G-TEST123'], true); assert.equal(scripts[0].removed, true);
    assert.equal(window.dataLayer.length, 0);
    engine.toolStart(tool, true); engine.toolUse(tool, true); engine.consent('granted');
    assert.equal(scripts.length, 1); assert.equal(window.dataLayer.length, 0, 'stopped document stays stopped until reload');
    assert(cookieWrites.filter((value) => value.startsWith('_ga=')).every((value) => value.includes('Max-Age=0')));

    const blocked = createGoogleTransport();
    blocked.start('G-TEST123', { page_location: 'https://creatorplantools.com/', page_title: 'CreatorPlanTools', page_referrer: '' });
    scripts[1].onerror();
    assert.equal(blocked.emit('page_view', {}, {}), false);
    assert.equal(blocked.start('G-TEST123', {}), false);
    assert.equal(window['ga-disable-G-TEST123'], true);
  } finally {
    globalThis.window = originalWindow; globalThis.document = originalDocument;
  }
});
