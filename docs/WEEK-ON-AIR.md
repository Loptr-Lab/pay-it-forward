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
