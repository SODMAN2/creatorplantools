import assert from 'node:assert/strict';
import test from 'node:test';
import { CONSENT_KEY, SITE_ORIGIN, createMeasurement, linkDetails, pagePath, readConsent, referralOrigin, saveConsent } from '../lib/measurement.mjs';

const apv = '/tools/average-percentage-viewed-calculator';
const watch = '/tools/watch-time-calculator';
const guide = '/guides/how-to-improve-video-retention-with-better-structure';
const tool = 'Average Percentage Viewed Calculator';
const catalog = {
  '/': { title: 'CreatorPlanTools' },
  [apv]: { title: tool, tool },
  [watch]: { title: 'Watch Time Calculator', tool: 'Watch Time Calculator' },
  [guide]: { title: 'Retention guide' },
};
function fixture(id = 'G-TEST123') {
  const events = [], starts = [], stops = [];
  const transport = { start: (...args) => { starts.push(args); return true; }, emit: (...args) => { events.push(args); return true; }, stop: (...args) => { stops.push(args); return starts.length > 0; }, pause: () => {} };
  const engine = createMeasurement({ catalog, measurementId: id, transport, referrer: 'https://www.google.com/search?q=private' });
  return { engine, transport, events, starts, stops };
}

test('prior opt-in: no tag or events, rejected tools still callable, no replay after acceptance', () => {
  const { engine, events, starts } = fixture();
  engine.enter(apv);
  engine.toolStart(tool, true);
  engine.toolUse(tool, true);
  engine.click(watch, true);
  assert.equal(starts.length, 0);
  assert.equal(events.length, 0);
  engine.consent('denied');
  assert.equal(engine.toolStart(tool, true), false);
  assert.equal(events.length, 0);
  engine.consent('granted');
  assert.deepEqual(events.map(([name]) => name), ['page_view']);
  engine.toolUse(tool, true);
  assert.equal(events.length, 1, 'prefilled valid result and pre-consent interaction are not replayed');
});

test('one page view per route entry, query/hash/strict effects do not duplicate, return visits do count', () => {
  const { engine, events } = fixture();
  engine.enter(apv);
  engine.consent('granted');
  engine.enter(apv);
  engine.consent('granted');
  engine.enter(`${apv}?email=private@example.com#secret`);
  assert.equal(events.length, 1);
  engine.enter(watch);
  engine.enter(apv);
  assert.deepEqual(events.map(([, p]) => p.page_path), [apv, watch, apv]);
  assert.equal(events[0][2].page_referrer, 'https://www.google.com');
  assert.equal(events[2][2].page_referrer, SITE_ORIGIN + watch);
});

test('trusted changes only; invalid result never counts, first valid result once per visit', () => {
  const { engine, events } = fixture();
  engine.enter(apv);
  engine.consent('granted');
  assert.equal(engine.toolStart(tool, false), false);
  assert.equal(engine.toolUse(tool, true), false);
  assert.equal(engine.toolStart('invented tool', true), false);
  assert.equal(engine.toolStart(tool, true), true);
  assert.equal(engine.toolUse(tool, false), false);
  assert.equal(engine.toolStart(tool, true), true);
  assert.equal(engine.toolUse(tool, true), true);
  engine.toolStart(tool, true);
  engine.toolUse(tool, true);
  assert.deepEqual(events.map(([name]) => name), ['page_view', 'tool_start', 'tool_use']);
  assert.deepEqual(events[2][1], { tool_name: tool, page_path: apv });
  engine.enter(watch);
  engine.enter(apv);
  engine.toolStart(tool, true);
  engine.toolUse(tool, true);
  assert.equal(events.filter(([name]) => name === 'tool_use').length, 2);
});

test('withdrawal closes all event gates; unknown pages are excluded', () => {
  const { engine, events } = fixture();
  engine.enter(apv);
  engine.consent('granted');
  assert.equal(engine.consent('denied'), true, 'loaded SDK requires reload');
  engine.toolStart(tool, true);
  engine.toolUse(tool, true);
  engine.click(watch, true);
  engine.enter(watch);
  assert.equal(events.length, 1);
  engine.consent('granted');
  engine.enter('/someone/private@example.com');
  engine.click(apv, true);
  engine.toolStart(tool, true);
  assert.equal(events.length, 2);
  assert(!JSON.stringify(events).includes('private'));
});

test('missing/invalid IDs, blocked or throwing transport fail closed', () => {
  for (const id of ['', null, 'G-abc', 'GTM-123', 'private@example.com']) {
    const { engine, events, starts } = fixture(id);
    engine.enter(apv); engine.consent('granted'); engine.toolStart(tool, true);
    assert.equal(events.length, 0); assert.equal(starts.length, 0);
  }
  for (const action of [() => false, () => { throw new Error('blocked'); }]) {
    const { engine, events, transport } = fixture();
    transport.start = action;
    engine.enter(apv); assert.doesNotThrow(() => engine.consent('granted'));
    engine.toolStart(tool, true); assert.equal(events.length, 0);
  }
  const { engine, transport } = fixture();
  transport.emit = () => { throw new Error('blocked'); };
  engine.enter(apv); assert.doesNotThrow(() => engine.consent('granted'));
  assert.equal(engine.toolStart(tool, true), false);
});

test('internal links have fixed types, no queries; outbound is opt-in domain-only', () => {
  assert.equal(linkDetails(guide, apv, catalog).parameters.link_type, 'guide_to_tool');
  assert.equal(linkDetails(apv, watch, catalog).parameters.link_type, 'tool_to_tool');
  assert.equal(linkDetails(apv, guide, catalog).parameters.link_type, 'tool_to_guide');
  assert.equal(linkDetails('/', apv, catalog).parameters.link_type, 'other_internal');
  assert.equal(linkDetails(apv, `${watch}?secret=hello#private`, catalog).parameters.destination_path, watch);
  assert.equal(linkDetails(apv, '#private', catalog), null);
  assert.equal(linkDetails(apv, '/unknown/private', catalog), null);
  for (const href of ['mailto:private@example.com', 'javascript:alert(1)', 'https://example.com/private', 'https://support.google.com@evil.example/']) {
    assert.equal(linkDetails(apv, href, catalog, true), null);
  }
  const resource = 'https://support.google.com/youtube/answer/12220281?email=private@example.com#personal';
  assert.equal(linkDetails(apv, resource, catalog), null);
  assert.deepEqual(linkDetails(apv, resource, catalog, true), { name: 'outbound_click', parameters: { source_path: apv, destination_domain: 'support.google.com', link_type: 'editorial_resource' } });
  const { engine, events } = fixture();
  engine.enter(apv); engine.consent('granted');
  engine.click(watch, false); engine.click(resource, true, true);
  assert.deepEqual(events.map(([name]) => name), ['page_view', 'outbound_click']);
  assert(!JSON.stringify(events).includes('private'));
});

test('consent storage remembers only choice; corrupted/blocked storage fails closed', () => {
  const data = new Map();
  const storage = { getItem: (key) => data.get(key), setItem: (key, value) => data.set(key, value) };
  assert.equal(readConsent(storage), null);
  assert.equal(saveConsent(storage, 'granted'), true);
  assert.deepEqual([...data], [[CONSENT_KEY, 'granted']]);
  assert.equal(readConsent(storage), 'granted');
  saveConsent(storage, 'denied'); assert.equal(readConsent(storage), 'denied');
  data.set(CONSENT_KEY, 'corrupt'); assert.equal(readConsent(storage), null);
  const blocked = { getItem: () => { throw new Error(); }, setItem: () => { throw new Error(); } };
  assert.equal(readConsent(blocked), null); assert.equal(saveConsent(blocked, 'granted'), false);
});

test('sanitization rejects arbitrary paths, origins and credentials', () => {
  assert.equal(pagePath(apv + '/?secret=123#x', catalog), apv);
  assert.equal(pagePath('https://evil.example' + apv, catalog), null);
  assert.equal(pagePath('https://private:secret@creatorplantools.com' + apv, catalog), null);
  assert.equal(referralOrigin('https://www.google.com/search?q=private#secret'), 'https://www.google.com');
  assert.equal(referralOrigin('javascript:alert(1)'), '');
  assert.equal(referralOrigin('https://private:secret@example.com/path'), '');
});
