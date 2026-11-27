"use client";
import { useEffect } from "react";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import { useTourDay, tourStatus, showCardId } from "../components/TourStatus";
import { tourStops } from "../music/tour-stops";

const artists = [
  { name: "NOT A TOY", directory: "https://www.setlist.fm/setlists/not-a-toy-23fc64df.html", catalog: "https://notatoy.bandcamp.com/album/not-a-toy" },
  { name: "VOILÀ", directory: "https://www.setlist.fm/setlists/voila-6bccee4a.html", catalog: "https://voilamusic.bandcamp.com/music" },
];
export default function RadioPage() {
  const now = useTourDay();
  const ready = now !== null;
  const shows = tourStops.filter(stop => ["past","today"].includes(tourStatus(stop.date,stop.city,now))).reverse();
  useEffect(() => {
    if (!ready) return;
    const id = window.location.hash.slice(1);
    if (id.startsWith("show-")) document.getElementById(id)?.scrollIntoView();
  }, [ready]);
  return <main className="experience-page radio-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/route/">Tour Map</Link><Link href="/route/#past-shows">Past Shows</Link><Link href="/field-notes/">Field Notes</Link></nav></header>
    <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Your Week on Air",href:"/radio/"}]}/>
    <article>
      <header className="radio-hero"><p className="eyebrow">PLAY IT FORWARD · CONCERT DISCOVERY</p><h1>YOUR WEEK<br/><em>ON AIR.</em></h1><p className="experience-lede">What was that song you heard at the show? Find your concert, revisit the music and take the playlist to your favorite listening service.</p></header>
      <section className="route-stops" id="radio-builder-title">
        <p className="eyebrow">01 · FIND YOUR CONCERT</p><h2>CHOOSE YOUR SHOW.</h2>
        <p>These are scheduled tour dates, not confirmation that every performance took place or that a setlist exists. Setlist.fm entries are community-edited.</p>
        {!ready ? <p role="status">Loading concert dates…</p> : shows.length===0 ? <p>No past or show-day dates yet.</p> : <div className="route-cards">{shows.map(stop=><article className="route-card" id={showCardId(stop.city,stop.date)} key={showCardId(stop.city,stop.date)}>
          <p className="eyebrow">{stop.date} · {tourStatus(stop.date,stop.city,now)==="today"?"SHOW DAY":"PAST SCHEDULED DATE"}</p><h3>{stop.city}</h3><p>{stop.venue} · {stop.country}</p>
          <p>Song list not verified here. Search each artist’s record for this date and venue.</p>
          {artists.map(artist=><p key={artist.name}><a className="text-link" href={"https://www.setlist.fm/search?query="+encodeURIComponent(artist.name+" "+stop.city+" "+stop.date)} target="_blank" rel="noreferrer">FIND {artist.name} SETLIST ↗</a></p>)}
          <Link className="text-link" href={"/route/#"+showCardId(stop.city,stop.date)}>CITY GUIDE ↗</Link>
        </article>)}</div>}
        <p className="route-note">Cannot find your show? Browse the artist directories: {artists.map(artist=><span key={artist.name}> <a href={artist.directory} target="_blank" rel="noreferrer">{artist.name} ↗</a> · </span>)}</p>
      </section>
      <div className="radio-discovery-row">
      <section className="route-stops" id="transfer"><p className="eyebrow">02 · TAKE THE MUSIC WITH YOU</p><h2>MAKE IT A PLAYLIST.</h2>
        <p>Open a concert’s individual Setlist.fm record, check the songs and copy its URL. Follow the Soundiiz instructions for your chosen service, authorize your own account there and review the matched songs before creating the playlist.</p>
        <div className="hero-actions"><a className="button primary" href="https://soundiiz.com/tutorial/setlist-to-spotify" target="_blank" rel="noreferrer">SPOTIFY ↗</a><a className="button secondary" href="https://soundiiz.com/tutorial/setlist-to-apple-music" target="_blank" rel="noreferrer">APPLE MUSIC ↗</a><a className="button secondary" href="https://soundiiz.com/" target="_blank" rel="noreferrer">OTHER SERVICES ↗</a></div>
        <p className="route-note">No songs listed? Check back or contribute a firsthand correction on Setlist.fm. We do not offer a concert download without a song list. Soundiiz may require an account or paid plan; availability and matching depend on the destination service. Play It Forward does not collect credentials or store playlists.</p>
      </section>
      <section className="route-stops"><p className="eyebrow">03 · KEEP DISCOVERING</p><h2>FOLLOW THE ARTISTS.</h2><p>These are curated release discoveries, not concert setlists.</p><div className="route-cards"><article className="route-card"><h3>DEVOUR · VOILÀ × NOT A TOY</h3><Link className="text-link" href="/music/devour/">EXPLORE THE LISTENING ROUTE ↗</Link>{artists.map(artist=><p key={artist.name}><a href={artist.catalog}>{artist.name} · Bandcamp ↗</a></p>)}</article><article className="route-card"><h3>Independent collaborations</h3><Link className="text-link" href="/field-notes/the-art-of-staying-independent/">REN · THE SKINNER BROTHERS · CHRIS WEBBY ↗</Link><p><a href="https://renmakesmusic.bandcamp.com/album/asylum">Asylum ↗</a> · <a href="https://app.grouped.com/webbysworld/">Webby’s World ↗</a></p></article></div><p><Link className="text-link" href="/route/#post-show">KEEP THE PARTY GOING ↗</Link></p></section>
      </div>
      <p className="radio-small">Independent fan discovery. No artist affiliation, audio hosting or purchase required. <a href="https://ibloud.github.io/pixie-creator-os/digital-jockey.html">For creator tools, visit PIXIE Creator OS ↗</a>.</p>
    </article><SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · MUSIC PASSED FORWARD"/>
  </main>;
}
