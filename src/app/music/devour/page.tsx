import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";

const site = "https://loptr-lab.github.io/pay-it-forward";
const pageUrl = `${site}/music/devour/`;

export const metadata: Metadata = {
  title: "Devour — VOILÀ × NOT A TOY | PLAY IT FORWARD",
  description: "DEVOUR by VOILÀ and NOT A TOY illustrates how shared releases, touring and small digital touchpoints can help independent artists introduce audiences to one another.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Devour — VOILÀ × NOT A TOY",
    description: "A practical music discovery example for promoters, managers and DIY artists: connect collaborations, catalogs, tour stops and fan participation.",
    url: pageUrl,
    type: "article",
  },
};

import { playlist } from "../catalog";

const services = [
  { name: "Spotify", href: "https://open.spotify.com/search/NOT%20A%20TOY" },
  { name: "Apple Music", href: "https://music.apple.com/us/artist/not-a-toy/1510814882" },
  { name: "YouTube Music", href: "https://music.youtube.com/search?q=NOT+A+TOY" },
  { name: "Amazon Music", href: "https://music.amazon.com/search/NOT+A+TOY" },
  { name: "Deezer", href: "https://www.deezer.com/search/NOT%20A%20TOY" },
  { name: "Tidal", href: "https://listen.tidal.com/search?q=NOT%20A%20TOY" },
];

export default function DevourPage() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: "Devour",
    byArtist: [
      { "@type": "MusicGroup", name: "VOILÀ" },
      { "@type": "MusicGroup", name: "NOT A TOY" },
    ],
    datePublished: "2026-11-20",
    url: pageUrl,
    video: "https://www.youtube.com/watch?v=QS9RtfARHBc",
    inAlbum: { "@type": "MusicAlbum", name: "The Wilt to Live (Part II)", byArtist: { "@type": "MusicGroup", name: "VOILÀ" } },
  };
  return <main className="experience-page music-story-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav><Link href="/adventure/">Adventure</Link><Link href="/#next-track">Music discovery</Link><Link href="/route/">Tour map</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Music Discovery", href: "/#next-track" }, { label: "DEVOUR", href: pageUrl }]} />
    <article>
      <header className="music-story-hero">
        <p className="eyebrow">PLAY IT FORWARD · MUSIC DISCOVERY</p>
        <h1>DEVOUR.<br/><em>FOLLOW THE SOUND.</em></h1>
        <p className="experience-lede">VOILÀ × NOT A TOY · THEATRICAL LYRIC FILM</p>
        <p className="music-story-release">RELEASED NOVEMBER 20, 2026</p>
        <p className="music-story-intro">Two artists, one shared release and a touring connection. DEVOUR illustrates how a collaboration can become a doorway into both artists&apos; worlds. This independent demonstration is for promoters, managers and DIY artists who want to turn existing creative work into lasting, reciprocal discovery.</p>
      </header>
      <section className="music-story-editorial" aria-labelledby="growth-title">
        <p className="eyebrow">PLAY IT FORWARD · A PRACTICAL GROWTH EXAMPLE</p>
        <h2 id="growth-title">RAISE THE TIDE.<br/><em>TOGETHER.</em></h2>
        <p>Growth does not have to begin with another advertising campaign. Artists may have complementary audiences in different cities or countries; the opportunity is reciprocal discovery, not a sales pitch. A shared song gives each audience a reason to discover the other artist. A shared tour gives that discovery a real-world setting. Thoughtful links, credits and invitations can help keep those connections alive after the show.</p>
        <div className="music-story-themes">
          <section><h3>01 · RELEASE</h3><p>Credit both artists and link their catalogs from the collaboration. Make the next discovery easy, in either direction.</p></section>
          <section><h3>02 · TOUR</h3><p>Give fans one useful city guide and a way to explore the music before the concert, including the artists they have not heard yet.</p></section>
          <section><h3>03 · AFTER THE SHOW</h3><p>Invite fans to revisit setlists, build and exchange playlists, share permitted footage, review the experience and request future cities.</p></section>
          <section><h3>04 · LEARN</h3><p>Review permitted aggregate signals, such as catalog referrals or city interest, without confusing clicks with listening, ticket sales or confirmed demand. Use what the team learns to improve the next release or tour.</p></section>
        </div>
        <p className="music-story-visual-note">These are proposed organic growth practices, not a claim that either artist has adopted this workflow or that Play It Forward has produced measurable growth for them. The collaboration is the example; the implementation is independent.</p>
        <div className="music-story-links"><Link href="/route/">EXPLORE THE TOUR ↗</Link><Link href="/route/#post-show">AFTER THE SHOW ↗</Link></div>
      </section>
      <section className="music-story-video" aria-labelledby="film-title">
        <h2 id="film-title">THE THEATRICAL LYRIC FILM</h2>
        <div className="music-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/QS9RtfARHBc" title="Devour — VOILÀ featuring NOT A TOY, official theatrical lyric film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        <p className="music-story-caption">Watch on YouTube: <a href="https://www.youtube.com/watch?v=QS9RtfARHBc" target="_blank" rel="noreferrer">Devour — VOILÀ featuring NOT A TOY ↗</a></p>
      </section>
      <section className="music-story-editorial">
        <p className="eyebrow">THE STORY · MYTH · VISUALS</p>
        <h2>THE SIREN&apos;S<br/><em>CALL.</em></h2>
        <p>The song draws on the Sirens of Greek mythology and the story of Odysseus: a voice so compelling that ordinary restraint cannot keep a sailor from the danger ahead. Here, the metaphor turns into a willing surrender to an irresistible, all-consuming attraction.</p>
        <div className="music-story-themes">
          <section><h3>THE MAST</h3><p>A symbol of attempted resistance—knowing the danger, yet discovering that willpower may not be enough.</p></section>
          <section><h3>THE DEEP</h3><p>Ocean imagery becomes emotional submersion: losing the surface, the breath, and the sense of distance from the pull.</p></section>
          <section><h3>THE TIDE</h3><p>The moon and sea suggest an attraction that feels like a force of nature, moving beyond simple choice.</p></section>
          <section><h3>THE SHIP</h3><p>The captain&apos;s fatalistic devotion frames a relationship as a voyage that may not survive—but is pursued anyway.</p></section>
        </div>
        <p className="music-story-visual-note"><strong>Visual language:</strong> the lyric film combines black-and-white maritime imagery—sailors, sirens, and a sinking vessel—with striking neon-green and crimson kinetic typography. Its theatrical contrast makes the song&apos;s mythology tangible.</p>
      </section>
      <section className="music-story-collab">
        <p className="eyebrow">FOLLOW THE COLLABORATION</p>
        <h2>DISCOVER VOILÀ.<br/><em>THEN FOLLOW THE THREAD.</em></h2>
        <p>Start with either artist. The collaboration is a bridge, not a funnel that only benefits one band. Explore VOILÀ&apos;s catalog and official videos or discover NOT A TOY&apos;s releases, then pass a recommendation forward.</p>
        <div className="music-story-links">
          <a href="https://voilamusic.bandcamp.com/music" target="_blank" rel="noreferrer">VOILÀ · BANDCAMP CATALOG ↗</a>
          <a href="https://www.youtube.com/@wearevoila" target="_blank" rel="noreferrer">VOILÀ · OFFICIAL YOUTUBE ↗</a><a href="https://notatoy.bandcamp.com/album/not-a-toy" target="_blank" rel="noreferrer">NOT A TOY · BANDCAMP ↗</a><a href="https://music.apple.com/us/artist/not-a-toy/1510814882" target="_blank" rel="noreferrer">NOT A TOY · APPLE MUSIC ↗</a>
        </div>
        <details><summary>Artist catalogs and professional contacts</summary><p>VOILÀ: <a href="https://www.wearevoila.com/home">official music and merchandise</a> · <a href="https://linktr.ee/wearevoila">official channel directory</a> · <a href="https://www.itb.co.uk/artists/voila">ITB booking contact</a> (kara@itb.co.uk, published by agency). NOT A TOY: <a href="https://fearlessrecords.com/artists/not-a-toy/">Fearless Records artist page</a> · <a href="https://concord.com/artist/not-a-toy/">Concord artist and tour page</a> · <a href="https://music.apple.com/us/artist/not-a-toy/1510814882">Discography</a>. Direct booking contact not confirmed. These are public professional routes, not personal contacts.</p></details>
      </section>
      <section className="music-story-playlist" aria-labelledby="playlist-title">
        <p className="eyebrow">CURATED LISTENING ROUTE · NOT A TOY</p>
        <h2 id="playlist-title">START HERE.<br/><em>KEEP GOING.</em></h2>
        <p className="playlist-note">A focused ten-track path designed to move from the collaboration through current releases, then back into the band&apos;s earlier catalog. This is a playlist blueprint—not an already-created playlist on any service. Use the service links below to find and save the tracks in this order.</p>
        <div className="playlist-services" aria-label="Find NOT A TOY on streaming services">
          {services.map(service => <a key={service.name} href={service.href} target="_blank" rel="noreferrer">{service.name} ↗</a>)}
        </div>
        <ol className="playlist-tracklist">
          {playlist.map((track, index) => <li key={track.title}><span className="playlist-index">{String(index + 1).padStart(2, "0")}</span><div><strong>{track.title}</strong><p>{track.detail}</p></div><a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(track.search)}`} target="_blank" rel="noreferrer" aria-label={`Search YouTube for ${track.title}`}>FIND ↗</a></li>)}
        </ol>
        <div className="playlist-albums">
          <a href="https://music.apple.com/us/album/filthy-yuck/6803206084" target="_blank" rel="noreferrer"><strong>FILTHY YUCK!</strong><span>2026 · 17 tracks</span><b>OPEN ALBUM ↗</b></a>
          <a href="https://notatoy.bandcamp.com/album/not-a-toy" target="_blank" rel="noreferrer"><strong>NOT A TOY</strong><span>2020 · debut release</span><b>OPEN BANDCAMP ↗</b></a>
          <a href="https://music.apple.com/us/artist/not-a-toy/1510814882" target="_blank" rel="noreferrer"><strong>FULL DISCOGRAPHY</strong><span>Singles, EPs, albums and videos</span><b>EXPLORE ↗</b></a>
        </div>
      </section>
      <section className="music-story-editorial" aria-labelledby="tech-team-title">
        <p className="eyebrow">FOR PROMOTERS · MANAGERS · DIY ARTISTS</p>
        <h2 id="tech-team-title">TECH SUPPORT.<br/><em>PART OF THE TEAM.</em></h2>
        <p>PIXIE Companion is designed to support the artist’s creative lifestyle. Good technology support connects the work artists already do. It should reduce administrative friction, protect creative ownership and make participation accessible, rather than demand more content or replace the people making it.</p>
        <div className="music-story-themes">
          <section><h3>PROMOTERS</h3><p>Maintain accurate event links and city information, accessible visitor journeys and clear handoffs to official ticketing and show-request services.</p></section>
          <section><h3>MANAGERS</h3><p>Coordinate reciprocal credits, release links, permissions and consent; review meaningful aggregate signals with the artists and booking team.</p></section>
          <section><h3>DIY ARTISTS</h3><p>Keep a portable catalog, reuse a simple release and tour template, and give listeners a way to share music without surrendering their personal data.</p></section>
          <section><h3>TECH SUPPORT</h3><p>Keep links, shared data, accessibility, exports and deployments working. Verify what is live, document rights and integration limits, and avoid unnecessary paid services or duplicate systems.</p></section>
        </div>
        <p>Start small: a shared release, accurate links, a reusable listening route and one post-show destination. No streaming API credentials are required for these steps.</p>
        <div className="music-story-links"><Link href="/radio/#radio-builder-title">TRY THE PORTABLE RADIO BUILDER ↗</Link><Link href="/field-notes/from-plan-b-to-plan-a/">READ THE TOUR DEMAND FIELD NOTES ↗</Link><Link href="/field-notes/the-art-of-staying-independent/">THE ART OF STAYING INDEPENDENT ↗</Link></div>
      </section>
      <section className="music-story-quest">
        <p className="eyebrow">YOUR MUSIC QUEST</p>
        <h2>WHAT DOES THE<br/><em>SONG BECOME?</em></h2>
        <p>Make a connection between the song and something outside your headphones: a myth, an image, a film, a place near you, or another artist. Share a recommendation if you want—or keep it to yourself.</p>
        <Link className="button primary" href="/route/">EXPLORE THE CITY THROUGH MUSIC ↗</Link>
        <Link className="button secondary" href="/adventure/">RETURN TO THE ADVENTURE ↗</Link>
      </section>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · SELF-PACED" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
  </main>;
}
