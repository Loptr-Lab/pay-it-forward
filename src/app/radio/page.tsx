"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";

type Track = { title: string; artist: string; url: string };
const starter: Track[] = [
  { title: "Your opening track", artist: "An artist you love", url: "" },
  { title: "A new discovery", artist: "Someone to pass forward", url: "" },
];

function decodeShow(): { title: string; note: string; tracks: Track[] } | null {
  if (typeof window === "undefined" || !window.location.hash.startsWith("#show=")) return null;
  try {
    const raw = window.location.hash.slice(6);
    return JSON.parse(decodeURIComponent(escape(atob(raw)))) as { title: string; note: string; tracks: Track[] };
  } catch { return null; }
}

export default function WeekOnAirPage() {
  const [title, setTitle] = useState("Your Week on Air");
  const [note, setNote] = useState("A few sounds I want to pass along.");
  const [tracks, setTracks] = useState<Track[]>(starter);
  const [shared, setShared] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    const show = decodeShow();
    if (show) {
      setTitle(show.title || "Your Week on Air");
      setNote(show.note || "");
      setTracks(Array.isArray(show.tracks) ? show.tracks : []);
      setReadOnly(true);
    }
  }, []);

  const encoded = useMemo(() => {
    const payload = JSON.stringify({ title, note, tracks });
    return btoa(unescape(encodeURIComponent(payload)));
  }, [title, note, tracks]);

  function addTrack() { setTracks((items) => [...items, { title: "", artist: "", url: "" }]); }
  function updateTrack(index: number, key: keyof Track, value: string) {
    setTracks((items) => items.map((item, i) => i === index ? { ...item, [key]: value } : item));
  }
  async function shareShow() {
    const url = new URL(window.location.href);
    url.hash = "show=" + encoded;
    try {
      await navigator.clipboard.writeText(url.toString());
      setShared(true);
    } catch {
      window.location.hash = "show=" + encoded;
      setShared(false);
    }
  }
  function resetShow() {
    window.history.replaceState(null, "", window.location.pathname);
    setTitle("Your Week on Air"); setNote("A few sounds I want to pass along.");
    setTracks(starter); setReadOnly(false); setShared(false);
  }

  return <main className="experience-page radio-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav><Link href="/adventure/">Explore</Link><Link href="/music/devour/">Music stories</Link><Link href="/route/">Tour map</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Music Discovery", href: "/#next-track" }, { label: "Your Week on Air", href: "/radio/" }]} />
    <article>
      <header className="radio-hero">
        <p className="eyebrow">PLAY IT FORWARD · COMMUNITY RADIO</p>
        <h1>YOUR WEEK<br/><em>ON AIR.</em></h1>
        <p className="experience-lede">A little broadcast of what moved you. Pass the listening experience forward.</p>
        <p className="radio-status">WEEKLY LISTENING SHOW · MADE BY YOU</p>
      </header>
      <section className="radio-builder" aria-labelledby="radio-builder-title">
        <div className="radio-builder-heading">
          <div><p className="eyebrow">MAKE A SHOW</p><h2 id="radio-builder-title">{readOnly ? "YOU'RE TUNED IN." : "WHAT HAVE YOU BEEN PLAYING?"}</h2></div>
          <span className="radio-onair">● ON AIR</span>
        </div>
        <label className="radio-field">SHOW TITLE<input value={title} onChange={(e) => setTitle(e.target.value)} readOnly={readOnly} maxLength={90}/></label>
        <label className="radio-field">A NOTE FROM THE DJ<textarea value={note} onChange={(e) => setNote(e.target.value)} readOnly={readOnly} rows={3} maxLength={280}/></label>
        <div className="radio-track-heading"><h3>THE TRACKLIST</h3><span>{tracks.length} TRACKS</span></div>
        <ol className="radio-tracklist">
          {tracks.map((track, index) => <li key={index}>
            <span className="radio-track-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="radio-track-fields">
              <label>TRACK<input value={track.title} readOnly={readOnly} placeholder="Song title" onChange={(e) => updateTrack(index, "title", e.target.value)}/></label>
              <label>ARTIST<input value={track.artist} readOnly={readOnly} placeholder="Artist name" onChange={(e) => updateTrack(index, "artist", e.target.value)}/></label>
              <label>APPLE MUSIC / LISTEN LINK<input value={track.url} readOnly={readOnly} placeholder="https://music.apple.com/…" onChange={(e) => updateTrack(index, "url", e.target.value)}/></label>
              {track.url && <a className="radio-listen-link" href={track.url} target="_blank" rel="noreferrer">OPEN TRACK ↗</a>}
            </div>
          </li>)}
        </ol>
        {!readOnly && <div className="radio-actions"><button className="button secondary" type="button" onClick={addTrack}>+ ADD A TRACK</button><button className="button primary" type="button" onClick={shareShow}>COPY SHARE LINK ↗</button></div>}
        {shared && <p className="radio-confirmation" role="status">Share link copied. Anyone with the link can view this show.</p>}
        {readOnly && <button className="button secondary" type="button" onClick={resetShow}>MAKE YOUR OWN SHOW</button>}
      </section>
      <section className="radio-how" aria-labelledby="radio-status-details">
        <p className="eyebrow">THE FIRST EDITION</p><h2>YOUR TASTE.<br/><em>YOUR AIRWAVES.</em></h2>
        <p>Add tracks you played this week, give the show a title, and share the link. This first version is a link-based show builder: the tracklist is encoded into the link and is not uploaded to a server.</p>
        <div className="radio-boundary"><strong>WHAT WORKS NOW</strong><ul><li>Manually add a show title, DJ note, track names, artist names, and external listening links.</li><li>Copy a share link; anyone with the link can view the read-only show.</li><li>Open music links in the relevant listening service. This site does not host audio.</li></ul></div>
        <div className="radio-boundary"><strong>PLANNED — NOT LIVE</strong><ul><li>DJ/station profiles, persistent show archives, follows, discovery feeds, recommendations, and community submissions.</li><li>Apple Music authorization/import and a verified listening-history archive.</li><li>AT Protocol identity/publishing, moderation tools, and live audio.</li></ul></div>
        <div className="radio-boundary"><strong>WHAT DEVELOPMENT NEEDS</strong><ul><li>Apple developer configuration, MusicKit setup, explicit opt-in, privacy/retention controls, and tests of the actual API data.</li><li>A backend and operational plan for persistent profiles, archives, follows, feeds, reports, and deletion/export.</li><li>AT Protocol/PDS and existing Lexicon review, authorization, publishing adapter, and moderation model.</li><li>Music-rights review before any hosting or rebroadcast, plus accessibility, security, and release testing.</li></ul></div>
        <div className="radio-boundary"><strong>APPLE MUSIC CONNECTION — NOT CONNECTED</strong><p>Apple Music authorization needs an Apple Music developer token and a MusicKit setup. The recently played endpoint is limited and does not provide reliable per-play timestamps for proving an exact seven-day window. Until an authorized integration is configured and tested, add tracks and links yourself. We will not label a manually assembled list as verified listening history.</p></div>
        <p className="radio-small">No audio is hosted here. Listening links open the music service. Anyone with the share link can view the show, so share only content and notes you are comfortable making public. A tracklist is not proof of a play event or permission to rebroadcast copyrighted audio.</p>
        <p><a className="radio-listen-link" href="https://ibloud.github.io/pixie-creator-os/digital-jockey.html">Want to build a radio project of your own? Open PIXIE Creator OS Digital Jockey Studio ↗</a></p>
      </section>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · MUSIC PASSED FORWARD" />
  </main>;
}
