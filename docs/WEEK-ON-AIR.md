# Your Week on Air

A Play It Forward community-radio feature: a listener-curated weekly show with a title, DJ note, tracklist, and shareable URL.

## Current MVP

- Static Next.js route at `/radio/`.
- Listener adds track title, artist, and an optional Apple Music or other listening URL.
- Share link encodes the show in the URL fragment. The payload is not sent to the server.
- Public-by-link semantics: anyone holding the link can read its tracklist. Do not put private notes or sensitive listening data in it.
- No audio hosting or playback; external links open the relevant music service.
- Read-only shared-show view.

## Apple Music integration boundary

The Apple Music API requires a developer token and user authorization (MusicKit JS / Music User Token). The recently played endpoint is limited and does not expose reliable per-play timestamps, so it cannot substantiate an exact rolling seven-day history. Do not call this verified "last seven days" unless an authorized source supplies timestamped play events.

Next integration phase:
1. Register/configure the MusicKit JS identifier and developer token securely as intended by Apple.
2. Add explicit opt-in and explain what profile/listening data is requested.
3. Import only the data the API actually returns; label it "recently played" rather than exact seven-day history.
4. For an exact weekly archive, begin opt-in timestamped snapshots going forward, with retention and delete/export controls.
5. Keep show publishing explicit and user-confirmed.

## Static hosting

This project is deployed as a GitHub Pages static site. Do not add server-only API assumptions without a separate backend/hosting decision. The current share links use URL fragments so show content is not sent in ordinary HTTP requests.


## Creator-side project builder

**Breadcrumb:** Play It Forward → Your Week on Air → [PIXIE Creator OS / Digital Jockey Studio](https://ibloud.github.io/pixie-creator-os/digital-jockey.html) → [Digital Jockey Network architecture](https://github.com/ibloud/pixie-creator-os/blob/main/docs/digital-jockey-network.md).

Play It Forward is the audience-facing reference experience. PIXIE Creator OS provides the creator-side workspace and local prompt generator for people who want to build a similar station, listening club, or digital-jockey project. These remain separate apps and data stores; the link is a product breadcrumb, not an account or data integration.


## Capability disclosure — works / planned / needed

### Works now

- A person manually enters a show title, DJ note, track title, artist, and optional external listening link.
- The show is encoded in the URL fragment, not uploaded to the application server. Anyone with the resulting link can read the show.
- Shared shows are read-only. Listening links open external services; Play It Forward does not host or play the audio.
- A creator can follow the breadcrumb to PIXIE Creator OS and use its local project-prompt generator to plan a separate radio/community project.

### Planned — not currently available

- Apple Music account authorization or automatic listening-history import.
- DJ/station accounts, persistent profiles and archives, follows, feeds, discovery, recommendations, submissions, comments, and moderation.
- AT Protocol authentication/publishing or cross-app identity.
- Audio hosting, live broadcasts, or scheduled programming.

### Needed before those features can ship

- **Apple Music:** developer identifier/token, MusicKit setup, explicit opt-in, secure token handling, API capability validation, and privacy/retention/export/delete controls. The current recently played endpoint cannot establish a timestamped exact seven-day listening history.
- **Social features:** product decisions for identity, visibility, ownership, deletion, blocking/reporting, moderation and community rules; backend/database/hosting; security and abuse controls.
- **AT Protocol:** review authentication, PDS and existing Lexicons, then implement a narrowly scoped adapter with authorization, record ownership, moderation, and deletion tests.
- **Broadcasting:** rights and licensing review, provider permissions, hosting/distribution architecture, and operational moderation before any audio is hosted or rebroadcast.
- **Release quality:** acceptance criteria, keyboard/screen-reader/mobile checks, consent and denial tests, privacy leakage tests, recovery/export, monitoring, and rollback.

A manual tracklist is not evidence of a play event. A share link is not private storage. External listening links are not permission to rebroadcast. Do not add private listening history to a public show without a separate, explicit user action.
