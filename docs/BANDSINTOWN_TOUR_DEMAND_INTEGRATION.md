# Bandsintown + Play It Forward: Tour Demand Integration

**Status:** Proposed integration; documentation and product boundaries recorded. No live Bandsintown connection is enabled.

## Purpose

Connect Play It Forward's fan participation tools with Bandsintown's existing artist/event and fan opt-in infrastructure. The goal is to help artists understand where fans would like to see them, then provide an authorized path to follow the artist and receive updates.

## Existing Play It Forward capabilities

- **Plan B Tour** (\`/tour-resilience/\`): helps fans adapt when a live plan changes.
- **Build Your Adventure** (\`/adventure/\`): supports flexible, self-directed music and place-based participation.

## Bandsintown documented capabilities

Sources:
- https://help.artists.bandsintown.com/en/articles/9186477-api-documentation
- https://help.artists.bandsintown.com/en/articles/9186761-api-for-fan-opt-ins

The artist API documents artist information and event data, including event dates, venue/location details, event URLs, and ticket offers. It documents Track/Follow, RSVP, and Notify Me link patterns.

The fan opt-in article (dated October 6, 2026) documents:
- Follow
- Request a Show
- Set Reminder
- Notify Me
- Waitlist
- Play My City (a city-level show request plus subscription to future artist updates)

The docs describe hosted Bandsintown CTA destinations. They do **not** establish a public API for Play It Forward to retrieve individual fan contact records or export opt-in lists. Do not build around that assumption.

## Illustrative touring context (editor-supplied; not independently verified)

A social-story video supplied for editorial review describes a 22-show United States run, two music videos filmed on the road, and recording during a ten-hour drive home. This is useful qualitative context for explaining the operational workload behind touring momentum; it is not a verified itinerary, booking record, or third-party endorsement.

A separate supplied Spotify screenshot shows 100,010,324 all-time streams and 5,101,835 streams in the displayed last-28-days view. The visible track/title artwork does not clearly establish Token as the credited artist. Do not publish or attribute those figures to Token until the underlying Spotify artist/track source is confirmed. Streaming totals must remain distinct from city-level fan intent, RSVPs, ticket transactions, and attendance.

## Product responsibility split

| Play It Forward | Bandsintown | Artist / booking team |
|---|---|---|
| City nominations and polls | Artist profile and event data | Venue holds and availability |
| Venue voting and context | Follow / Play My City | Venue capacity, costs, deal terms |
| Accessibility and local notes | RSVP / Notify Me / Waitlist | Routing and show confirmation |
| Aggregated participation report | Hosted fan opt-in flow | Negotiation and ticket forecasts |

## Proposed user journey

1. Artist or authorized representative creates a campaign and supplies an artist identity.
2. Fans nominate cities and optionally suggest venues.
3. Campaign owner vets venue choices; show capacity, access, location, age restrictions, and evidence status are visible.
4. Fans vote. Optional attendance-intent questions use explicit price bands and are clearly not purchase commitments.
5. A separate, clearly labeled Follow / Play My City CTA sends interested fans to Bandsintown's hosted opt-in flow.
6. The campaign publishes an aggregate report with methodology, collection window, and caveats.
7. Once shows are confirmed and returned by the artist events API, the page can link to event, ticket, RSVP, Notify Me, or Waitlist actions as appropriate.

## Demand signal definitions

Never combine these into one "demand" number:
- Page views
- Unique campaign participants (subject to the campaign's deduplication method)
- Raw votes
- Venue preferences
- Stated attendance intent at a displayed price band
- Bandsintown opt-in conversions (only if aggregate data is legitimately available)
- RSVPs
- Ticket transactions (only when supported by a reliable ticketing source)

Poll participation is not a ticket sale, verified attendance, or a guarantee of a show.

## Security, consent, and deployment constraints

- Do not collect Bandsintown opt-in email/phone data in Play It Forward unless a separate, explicit, reviewed integration and consent model authorizes it.
- Voting and subscription are separate actions. A vote must never silently subscribe a fan.
- Never commit an artist's API key, private credentials, phone opt-in signature, or other secret to the public repository.
- Bandsintown's phone opt-in instructions require an artist-side setting and a signature parameter. Treat that signature as sensitive; never hard-code the documentation's illustrative signature.
- The current GitHub Pages deployment is static. It can host public campaign pages and links, but cannot safely store private secrets or run a private server-side proxy. A future live integration requiring secrets or authenticated reporting needs an approved backend and secret manager.
- Use artist-authorized IDs and credentials only. A public example or demonstration must use clearly labeled sample data.
- Provide moderation, rate limiting, anti-abuse controls, accessibility, retention/deletion rules, and a clear privacy notice before collecting campaign data.

## Implementation phases

### Phase 1 — Documentation and editorial
- Publish the Field Notes article "From Plan B to Plan A".
- Add this integration specification to repository docs.
- Link the article from the Field Notes index, RSS feed, and sitemap.

### Phase 2 — Static demonstration
- Build an artist-neutral, sample-data tour-demand campaign.
- Include city nomination, venue shortlist/voting, methodology, and sample report.
- Label all sample data and avoid representing it as real fan demand.
- Provide placeholder integration slots rather than fake working Bandsintown links.

### Phase 3 — Bandsintown CTA integration
- Configure an artist-authorized artist ID and public API app ID.
- Add Follow and Play My City links.
- Add event-specific RSVP, Notify Me, and Waitlist only when event identifiers and ticket state are confirmed.
- Verify link behavior, attribution parameters, and artist-side settings.
- Do not claim access to fan-level opt-in records.

### Phase 4 — Live data and reporting
- Determine whether a backend is required for current artist/event data, caching, campaign persistence, and reporting.
- Move any private credentials or signatures to a server-side secret manager.
- Obtain artist authorization and verify API terms, rate limits, and data-use permissions.
- Add auditability and aggregate-only reporting unless a stronger permission model is explicitly approved.

## Acceptance criteria

- Article is discoverable from Field Notes and included in RSS and sitemap.
- Source links point to both official Bandsintown documentation pages.
- No API key, phone signature, or personal fan data is committed.
- Documentation distinguishes existing features, proposed capabilities, and unavailable API access.
- No live integration is claimed until artist authorization, credentials, and an end-to-end test exist.
