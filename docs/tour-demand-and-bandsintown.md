# Tour Demand Pilot + Bandsintown Integration

**Status:** Proposed foundation / not connected to a live artist account  
**Project:** PLAY IT FORWARD  
**Public article:** https://loptr-lab.github.io/pay-it-forward/field-notes/from-plan-b-to-plan-a/

## Product intent

Connect the existing Plan B Tour resilience framework and Build Your Adventure participation experience to a future artist-led tour-demand workflow.

The campaign would let fans voluntarily:
- nominate cities or regions;
- compare venues only after the artist/booking team has vetted suitable options;
- indicate whether they would consider attending;
- optionally indicate a ticket-price range;
- opt into future updates.

The artist/manager receives an aggregate report to inform—not automate—routing and promoter conversations.

## Existing vs proposed

### Existing in the repository
- `/tour-resilience/`: tour resilience guidance and disruption playbook.
- `/adventure/`: self-paced fan adventure and city discovery.
- `/route/` and `/tour-side-quests/`: tour map and city discovery foundation.
- Field Notes: independent editorial context on touring economics and fan participation.

### Proposed, not live
- Artist campaign creation and campaign lifecycle.
- City nominations and venue preference voting.
- Attendance/price-range intent signals.
- Aggregated demand dashboard/export.
- Bandsintown artist and event data connection.
- RSVP / Notify Me / Track links on confirmed artist/event records.

No votes are currently submitted, persisted, aggregated or delivered to an artist. No artist campaign is active.

## Bandsintown API: intended scope

The official artist help documentation:
https://help.artists.bandsintown.com/en/articles/9186477-api-documentation

The documentation describes:
1. Artist information: artist page URL, artist photo, follower count and related profile information.
2. Artist events: date/time, venue and location, ticket links, lineup, description, title and Bandsintown event URL. It supports upcoming, past, all events or date-range selection.
3. Event and artist calls to action:
   - RSVP: append the documented `trigger=rsvp_going` parameter to an event URL.
   - Notify Me: when the event has no ticket offer, append `trigger=notify_me`.
   - Track: append `trigger=track` to the artist page URL.

The API documentation does **not** describe venue polls, proposed event creation, venue availability, rental/guarantee costs, verified ticket intent, promoter negotiation or a fan-demand analytics product. Those are separate PIF features or partner-supplied information.

### Integration principle

Start with a **read-only, link-based integration**:
- retrieve the public artist profile and existing events after confirming access and permitted use;
- render official Bandsintown artist/event/ticket links;
- show RSVP when appropriate;
- show Notify Me only when the event has no ticket offer, following the documented behavior;
- never create, edit or imply a confirmed event from a fan vote.

Before a live connection, confirm API access requirements, app ID registration, attribution, permitted use, rate limits, caching and terms with Bandsintown. The help article includes an app ID in endpoint examples. No app ID or credential is configured in this repository. Never place private credentials in client-side code. If a server-side proxy is required, keep credentials server-side and limit returned fields.

## Proposed system boundaries

| Concern | Owner |
|---|---|
| Artist profile and existing event records | Bandsintown (subject to API access/terms) |
| Official event, ticket, RSVP, Notify Me, Track destinations | Bandsintown |
| Campaign brief, cities, vetted venue options | Artist / authorized campaign owner |
| Fan nominations and preference signals | Play It Forward |
| Consent, privacy, moderation and anti-abuse | Play It Forward |
| Capacity, costs, venue availability, routing and break-even assumptions | Artist / manager / agent / promoter / venue |
| Booking and final announcement | Artist's authorized team |

## Demand signal definitions

Keep each signal distinct in the data model and reports:
- `city_interest`: voluntary interest in a city/region.
- `venue_preference`: preference among vetted venue options.
- `attendance_consideration`: self-reported consideration, not a commitment.
- `price_band_interest`: stated interest at a displayed range, not a purchase offer.
- `notification_opt_in`: permission for a defined future update.

Reports must include campaign dates, exact question wording, geographic granularity, deduplication method, participation counts, known limitations and an explicit statement that votes are not ticket sales or guaranteed attendance.

## Suggested phased delivery

### Phase 0 — Foundation (this PR)
- Publish the Field Notes article.
- Document the integration boundary and feature roadmap.
- Add navigation, sitemap and RSS discovery.
- Do not add credentials, network calls, fake vote totals or a non-persistent poll that looks live.

### Phase 1 — Read-only artist/event connection
- Confirm API access and terms.
- Add a server-side data adapter only if needed and approved.
- Cache public artist/event data according to permitted policy.
- Render source attribution and official links.
- Handle missing artist, empty events, no ticket offer and API errors gracefully.

### Phase 2 — Campaign and fan participation
- Artist-authorized campaign configuration and expiry.
- Vetted city/venue choices with accessible descriptions.
- Privacy notice, consent, retention/deletion and moderation workflow.
- Backend persistence, rate limiting, abuse prevention and deduplication.
- No public live location or home-address collection.

### Phase 3 — Decision support
- Aggregate demand report with transparent methodology.
- Exportable summary for artist/manager/booking team.
- Compare interest against verified venue/routing/cost inputs.
- Show uncertainty; never auto-book or promise a show.

### Phase 4 — Confirmed event hand-off
- Match announced events to the campaign.
- Link to Bandsintown event/ticket pages.
- Use RSVP / Notify Me / Track links only in the documented conditions.
- Close the loop with fans when a city is selected, deferred or declined.

## Pilot acceptance criteria

A real pilot is not ready until:
- an artist or authorized manager has approved the campaign;
- Bandsintown access and permitted use are confirmed;
- campaign scope, dates and venue shortlist are approved;
- fan data is stored with explicit consent and a deletion path;
- unique participation and anti-abuse rules are documented;
- the report labels interest as self-reported and non-binding;
- accessibility, privacy and security checks are complete;
- a named person owns moderation, updates and campaign closure.

## Example use

A Token-style scenario may be used in a design walkthrough only as a hypothetical. It must not imply Token, management, promoters, venues or Bandsintown have partnered with or endorsed Play It Forward. No live artist campaign should be launched without permission.
