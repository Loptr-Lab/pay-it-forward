import type { Metadata } from "next";
import Link from "next/link";

const site = "https://loptr-lab.github.io/pay-it-forward";
const pageUrl = `${site}/music/devour/`;

export const metadata: Metadata = {
  title: "Devour — VOILÀ × NOT A TOY | PLAY IT FORWARD",
  description: "Discover Devour, the theatrical lyric film and collaboration by VOILÀ and NOT A TOY. Explore VOILÀ on Bandcamp, then follow a curated path into NOT A TOY's discography.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Devour — VOILÀ × NOT A TOY",
    description: "A siren's song, a cinematic lyric film, VOILÀ on Bandcamp, and a route into NOT A TOY's discography.",
    url: pageUrl,
    type: "article",
  },
};

const playlist = [
  { title: "DEVOUR", detail: "VOILÀ × NOT A TOY · the collaboration that opens this path", search: "Devour VOILA Not A Toy" },
  { title: "DEAD EYES", detail: "A strong current-era entry point", search: "NOT A TOY DEAD EYES" },
  { title: "UNALIVE ME", detail: "Follow the darker, dramatic edge", search: "NOT A TOY UNALIVE ME" },
  { title: "KAMIKAZE", detail: "From FILTHY YUCK!", search: "NOT A TOY KAMIKAZE FILTHY YUCK" },
  { title: "PLAYING W/ DEATH", detail: "A high-energy entry from the recent catalog", search: "NOT A TOY PLAYING W DEATH" },
  { title: "NPC", detail: "A concise single from the recent run", search: "NOT A TOY NPC" },
  { title: "THE MAZE", detail: "From the 2025 singles", search: "NOT A TOY THE MAZE" },
  { title: "DOOMSDAY HOLIDAY", detail: "A 2025 EP title track", search: "NOT A TOY DOOMSDAY HOLIDAY" },
  { title: "SIMP", detail: "From PRBLMS — turn toward the band's earlier catalog", search: "NOT A TOY SIMP PRBLMS" },
  { title: "QUIT QUITTING", detail: "Close with the 2020 self-titled release", search: "NOT A TOY QUIT QUITTING" },
];

const services = [
  { name: "Spotify", href: "https://open.spotify.com/search/NOT%20A%20TOY" },
  { name: "Apple Music", href: "https://music.apple.com/us/artist/not-a-toy/1510814882" },
  { name: "YouTube Music", href: "https://music.youtube.com/search?q=NOT+A+TOY" },
  { name: "Amazon Music", href: "https://music.amazon.com/search/NOT+A+TOY" },
  { name: "Deezer", href: "https://www.deezer.com/search/NOT%20A%20TOY" },
  { name: "Tidal", href: "https://listen.tidal.com/search?q=NOT%20A%20TOY" },
];

function Breadcrumbs() {
  const items = [
    { name: "Home", url: `${site}/` },
    { name: "Music Discovery", url: `${site}/#next-track` },
    { name: "Devour", url: pageUrl },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  </>;
}

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
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav><Link href="/adventure">Adventure</Link><Link href="/#next-track">Music discovery</Link><Link href="/route">Tour map</Link></nav></header>
    <Breadcrumbs />
    <article>
      <header className="music-story-hero">
        <p className="eyebrow">PLAY IT FORWARD · MUSIC DISCOVERY</p>
        <h1>DEVOUR.<br/><em>FOLLOW THE SOUND.</em></h1>
        <p className="experience-lede">VOILÀ × NOT A TOY · THEATRICAL LYRIC FILM</p>
        <p className="music-story-release">RELEASED NOVEMBER 20, 2026</p>
        <p className="music-story-intro">A siren's song, a ship heading into the deep, and a collaboration that opens a door into another artist's world. Start with the film—then follow a focused listening route through NOT A TOY.</p>
      </header>
      <section className="music-story-video" aria-labelledby="film-title">
        <h2 id="film-title">THE THEATRICAL LYRIC FILM</h2>
        <div className="music-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/QS9RtfARHBc" title="Devour — VOILÀ featuring NOT A TOY, official theatrical lyric film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        <p className="music-story-caption">Watch on YouTube: <a href="https://www.youtube.com/watch?v=QS9RtfARHBc" target="_blank" rel="noreferrer">Devour — VOILÀ featuring NOT A TOY ↗</a></p>
      </section>
      <section className="music-story-editorial">
        <p className="eyebrow">THE STORY · MYTH · VISUALS</p>
        <h2>THE SIREN'S<br/><em>CALL.</em></h2>
        <p>The song draws on the Sirens of Greek mythology and the story of Odysseus: a voice so compelling that ordinary restraint cannot keep a sailor from the danger ahead. Here, the metaphor turns into a willing surrender to an irresistible, all-consuming attraction.</p>
        <div className="music-story-themes">
          <section><h3>THE MAST</h3><p>A symbol of attempted resistance—knowing the danger, yet discovering that willpower may not be enough.</p></section>
          <section><h3>THE DEEP</h3><p>Ocean imagery becomes emotional submersion: losing the surface, the breath, and the sense of distance from the pull.</p></section>
          <section><h3>THE TIDE</h3><p>The moon and sea suggest an attraction that feels like a force of nature, moving beyond simple choice.</p></section>
          <section><h3>THE SHIP</h3><p>The captain's fatalistic devotion frames a relationship as a voyage that may not survive—but is pursued anyway.</p></section>
        </div>
        <p className="music-story-visual-note"><strong>Visual language:</strong> the lyric film combines black-and-white maritime imagery—sailors, sirens, and a sinking vessel—with striking neon-green and crimson kinetic typography. Its theatrical contrast makes the song's mythology tangible.</p>
      </section>
      <section className="music-story-collab">
        <p className="eyebrow">FOLLOW THE COLLABORATION</p>
        <h2>DISCOVER VOILÀ.<br/><em>THEN FOLLOW THE THREAD.</em></h2>
        <p>Start with the artist behind the collaboration. Explore VOILÀ&apos;s catalog on Bandcamp, then follow “Devour” back to NOT A TOY—the artist this discovery path invites you to find next.</p>
        <div className="music-story-links">
          <a href="https://voilamusic.bandcamp.com/music" target="_blank" rel="noreferrer">VOILÀ · BANDCAMP CATALOG ↗</a>
          <a href="https://www.youtube.com/@wearevoila" target="_blank" rel="noreferrer">VOILÀ · OFFICIAL YOUTUBE ↗</a>
          <a href="https://music.apple.com/us/artist/not-a-toy/1510814882" target="_blank" rel="noreferrer">DISCOVER NOT A TOY · APPLE MUSIC ↗</a>
          <a href="https://notatoy.bandcamp.com/" target="_blank" rel="noreferrer">DISCOVER NOT A TOY · BANDCAMP ↗</a>
        </div>
      </section>
      <section className="music-story-playlist" aria-labelledby="playlist-title">
        <p className="eyebrow">CURATED LISTENING ROUTE · NOT A TOY</p>
        <h2 id="playlist-title">START HERE.<br/><em>KEEP GOING.</em></h2>
        <p className="playlist-note">A focused ten-track path designed to move from the collaboration through current releases, then back into the band's earlier catalog. This is a playlist blueprint—not an already-created playlist on any service. Use the service links below to find and save the tracks in this order.</p>
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
      <section className="music-story-quest">
        <p className="eyebrow">YOUR MUSIC QUEST</p>
        <h2>WHAT DOES THE<br/><em>SONG BECOME?</em></h2>
        <p>Make a connection between the song and something outside your headphones: a myth, an image, a film, a place near you, or another artist. Share a recommendation if you want—or keep it to yourself.</p>
        <Link className="button primary" href="/route">EXPLORE THE CITY THROUGH MUSIC ↗</Link>
        <Link className="button secondary" href="/adventure">RETURN TO THE ADVENTURE ↗</Link>
      </section>
    </article>
    <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>DISCOVERY · ACCESSIBLE · SELF-PACED</span><Link href="/">HOME ↑</Link></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
  </main>;
}
