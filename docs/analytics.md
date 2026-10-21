# Optional site measurement

GA4 is gated by a global prior opt-in. No Google script, preconnect, consent ping,
event queue or analytics cookie is created before acceptance. A missing or invalid
`NEXT_PUBLIC_GA_MEASUREMENT_ID` leaves collection off. The identifier is public;
credentials and Measurement Protocol secrets are not required.

Set the public variable in the authoritative Vercel **creatorplantools** project's
Production environment. Leave previews unconfigured to avoid mixing preview
traffic into production. For deliberate local QA, use an ignored `.env.local`.
Next.js embeds public variables at build time, so build again after changing one.

## Required GA4 stream configuration

Use one Standard property and one Web stream for `https://creatorplantools.com`.
Turn **Enhanced measurement off**, including history-based page views, forms,
searches and automatic outbound links. The application owns its page views and
editorial clicks. `send_page_view: false` alone does not stop Enhanced Measurement
history events. Do not install GTM or additional tags.

Keep Google Signals, user-provided data collection, advertising integrations and
optional account data sharing off. Prefer the minimum event/user retention
(2 months); browser analytics cookies are capped at 90 days without rolling renewal.
Register event-scoped custom dimensions only for the schema below if required
for reporting. Do not register user-scoped dimensions or custom visitor IDs.

## Event definitions

| Event | Trigger | Custom parameters |
| --- | --- | --- |
| `page_view` | Current known route on acceptance, then once per actual pathname entry | `page_path` |
| `tool_start` | First trusted input change in an instrumented tool during this visit | `tool_name`, `page_path` |
| `tool_use` | First valid result render following a trusted change in this visit | `tool_name`, `page_path` |
| `internal_click` | Click on a known internal destination in main content | `source_path`, `destination_path`, `link_type` |
| `outbound_click` | Click on an explicitly marked editorial resource on an allowed domain | `source_path`, `destination_domain`, `link_type` |

Internal link types are `guide_to_tool`, `tool_to_tool`, `tool_to_guide`, and
`other_internal`. External type is `editorial_resource`. Query-only and same-page
fragment navigation do not create another visit or an internal navigation event.
Returning to a pathname after leaving it starts a new visit. Reloads are real entries.

The five instrumented tools use `useToolMeasurement` with a local validity boolean:
Watch Time, Average Percentage Viewed, Voiceover Duration, YouTube Description
Length Checker, and Engagement Rate. Existing arithmetic is unchanged. The
description check counts as use when nonblank and within the 5,000-character limit.
Blank, negative/malformed or nonfinite calculator inputs do not count as valid use.
Zero is allowed when the underlying calculator permits it; a denominator must
remain positive. Defaults, mount, hydration and focus do not count as tool use.
Further edits do not produce additional starts/uses until another page visit.

No pre-consent actions are replayed. Only the in-memory visit state is kept; the
application creates no custom visitor ID. GA4 may also produce its standard
consented session/first-visit/engagement events. Returning-user counts are limited
to consenting, unblocked browsers within their cookie lifetime, not people or
cross-device identities. Metrics exclude rejected/blocked traffic and are not
complete site totals.

## Data and consent boundary

The adapter accepts a fixed event schema, not caller-supplied analytics payloads.
Titles and paths come from the server's static page catalog. URLs passed to GA4
contain no query or fragment; external referral information is limited to origin.
Outbound events contain an allowed resource domain, never its full URL. No input,
result, script, caption, description, email, User-ID or user property is sent.
Acquisition uses the sanitized referral origin; arbitrary UTM query values are
not preserved. Do not add user data to URLs or expand automatic measurement.

Only `cpt-analytics-consent-v1=granted|denied` is stored in local storage. All tools
remain available without it. Analytics settings in the footer/privacy page reopen
the equal-choice notice. Rejection closes the event gate, sets Google's disable
flag, removes the tag and accessible `_ga`/`_ga_*` cookies, and reloads if the tag
was initialized so no SDK timers survive. A denial/cleared preference from another
tab is applied through the storage event. Save entries before withdrawal reloads.
Clearing storage causes another consent prompt. Previously received events cannot
be recalled by this browser control.

## Verification

Run `node --test tests/*.test.mjs` and `pnpm build`, then check consent, route
navigation, all five tools and invalid inputs in the production preview. The pure
controller and mocked browser adapter tests never contact Google. A deliberate
local QA session with the real ID uses `debug_mode` only on localhost/127.0.0.1;
verify event names/parameters in GA4 DebugView. Do not manufacture traffic.

Sources: [Google Basic consent mode](https://developers.google.com/tag-platform/security/concepts/consent-mode),
[manual page views](https://developers.google.com/analytics/devguides/collection/ga4/views),
and [configuration reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/config).
