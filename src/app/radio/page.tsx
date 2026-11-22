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
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [importMessage, setImportMessage] = useState("");

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

  function isSafeListenUrl(value: string): boolean {
    if (!value) return false;
    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" || parsed.protocol === "http:";
    } catch (error) {
      void error;
      return false;
    }
  }

  function addTrack() { setTracks((items) => [...items, { title: "", artist: "", url: "" }]); }

  function parseCsv(text: string): Track[] {
    const rows: string[][] = [];
    let row: string[] = [];
    let cell = "";
    let quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"' && quoted && text[i + 1] === '"') { cell += '"'; i++; }
      else if (char === '"') quoted = !quoted;
      else if (char === "," && !quoted) { row.push(cell.trim()); cell = ""; }
      else if ((char === "\n" || char === "\r") && !quoted) {
        if (char === "\r" && text[i + 1] === "\n") i++;
        row.push(cell.trim()); cell = "";
        if (row.some(Boolean)) rows.push(row);
        row = [];
      } else cell += char;
    }
    row.push(cell.trim());
    if (row.some(Boolean)) rows.push(row);
    if (!rows.length) return [];
    const header = rows[0].map((value) => value.toLowerCase().replace(/[^a-z]/g, ""));
    const titleIndex = header.findIndex((value) => ["title", "track", "song", "trackname", "songtitle"].includes(value));
    const artistIndex = header.findIndex((value) => ["artist", "artistname", "performer"].includes(value));
    const urlIndex = header.findIndex((value) => ["url", "link", "listenlink", "trackurl"].includes(value));
    const hasHeader = titleIndex >= 0 || artistIndex >= 0 || urlIndex >= 0;
    const data = hasHeader ? rows.slice(1) : rows;
    return data.map((values) => ({
      title: values[hasHeader ? Math.max(titleIndex, 0) : 0] || "",
      artist: values[hasHeader ? (artistIndex >= 0 ? artistIndex : 1) : 1] || "",
      url: values[hasHeader ? (urlIndex >= 0 ? urlIndex : 2) : 2] || "",
    })).filter((track) => track.title || track.artist || track.url);
  }

  async function importTrackFile(file?: File) {
    if (!file) return;
    try {
      const imported = parseCsv(await file.text());
      if (!imported.length) {
        setImportMessage("No tracks found. Use a CSV with title, artist, and optional url columns.");
        return;
      }
      setTracks(imported);
      setImportMessage(`Imported ${imported.length} tracks. Review the list before sharing.`);
    } catch {
      setImportMessage("We couldn't read that file. Please try a UTF-8 CSV file.");
    }
  }

  function exportTracklist() {
    const quote = (value: string) => '"' + value.replace(/"/g, '""') + '"';
    const csv = ["title,artist,url", ...tracks.map((track) => [track.title, track.artist, track.url].map(quote).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = "play-it-forward-tracklist.csv";
    link.click();
    URL.revokeObjectURL(objectUrl);
  }

  function openSoundiiz() {
    if (playlistUrl.trim()) {
      try {
        const parsed = new URL(playlistUrl.trim());
        if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("Invalid URL");
      } catch {
        setImportMessage("Enter a valid public playlist URL, then open Soundiiz.");
        return;
      }
    }
    window.open("https://soundiiz.com/", "_blank", "noopener,noreferrer");
  }
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
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/adventure/">Explore</Link><Link href="/radio/">Radio</Link><Link href="/field-notes/">Field Notes</Link><Link href="/music/devour/">Music stories</Link><Link href="/route/">Tour map</Link></nav></header>
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
        {!readOnly && <section className="radio-import" aria-labelledby="radio-import-title">
          <p className="eyebrow">BRING YOUR LISTENING WITH YOU</p>
          <h3 id="radio-import-title">IMPORT OR BUILD YOUR TRACKLIST.</h3>
          <p>Already have a playlist? Export its tracklist as a CSV from a service that supports it, then import that file here. You can also start with a public playlist URL and use Soundiiz as a separate transfer tool.</p>
          <label className="radio-field">PUBLIC PLAYLIST URL (OPTIONAL)
            <input type="url" value={playlistUrl} onChange={(e) => setPlaylistUrl(e.target.value)} placeholder="https://open.spotify.com/playlist/…" />
          </label>
          <div className="radio-actions">
            <button className="button secondary" type="button" onClick={openSoundiiz}>OPEN SOUNDIIZ ↗</button>
            <label className="button secondary radio-file-button">IMPORT CSV FILE
              <input type="file" accept=".csv,text/csv" onChange={(e) => importTrackFile(e.target.files?.[0])} />
            </label>
            <button className="button secondary" type="button" onClick={exportTracklist}>EXPORT TRACKLIST CSV ↓</button>
          </div>
          <p className="radio-import-note">Soundiiz opens in a separate site; it does not connect to this form or automatically import a playlist here. Transfer your playlist there if useful, then export a tracklist file and bring it back here. CSV import/export happens in this browser only.</p>
          {importMessage && <p className="radio-confirmation" role="status">{importMessage}</p>}
        </section>}
        <div className="radio-track-heading"><h3>THE TRACKLIST</h3><span>{tracks.length} TRACKS</span></div>
        <ol className="radio-tracklist">
          {tracks.map((track, index) => <li key={index}>
            <span className="radio-track-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="radio-track-fields">
              <label>TRACK<input value={track.title} readOnly={readOnly} placeholder="Song title" onChange={(e) => updateTrack(index, "title", e.target.value)}/></label>
              <label>ARTIST<input value={track.artist} readOnly={readOnly} placeholder="Artist name" onChange={(e) => updateTrack(index, "artist", e.target.value)}/></label>
              <label>APPLE MUSIC / LISTEN LINK<input value={track.url} readOnly={readOnly} placeholder="https://music.apple.com/…" onChange={(e) => updateTrack(index, "url", e.target.value)}/></label>
              {isSafeListenUrl(track.url) && <a className="radio-listen-link" href={track.url} target="_blank" rel="noreferrer">OPEN TRACK ↗</a>}
            </div>
          </li>)}
        </ol>
        {!readOnly && <div className="radio-actions"><button className="button secondary" type="button" onClick={addTrack}>+ ADD A TRACK</button><button className="button primary" type="button" onClick={shareShow}>COPY SHARE LINK ↗</button></div>}
        {shared && <p className="radio-confirmation" role="status">Share link copied. Anyone with the link can view this show.</p>}
        {readOnly && <button className="button secondary" type="button" onClick={resetShow}>MAKE YOUR OWN SHOW</button>}
      </section>
      <section className="radio-how" aria-labelledby="radio-status-details">
        <p className="eyebrow">THE FIRST EDITION</p><h2>YOUR TASTE.<br/><em>YOUR AIRWAVES.</em></h2>
        <p>Add tracks you played this week, import a CSV tracklist, or use a separate playlist-transfer service before bringing a tracklist here. Give the show a title and share the link. This is a link-based show builder: the tracklist is encoded into the link and is not uploaded to a server.</p>
        <div className="radio-boundary"><strong>WHAT WORKS NOW</strong><ul><li>Manually add a show title, DJ note, track names, artist names, and external listening links.</li><li>Import a UTF-8 CSV/text tracklist in this browser and export the current tracklist as CSV.</li><li>Open Soundiiz separately as an optional playlist-transfer tool; it is not a direct Play It Forward integration.</li><li>Copy a share link; anyone with the link can view the read-only show.</li><li>Open music links in the relevant listening service. This site does not host audio.</li></ul></div>
        <div className="radio-boundary"><strong>PLANNED — NOT LIVE</strong><ul><li>DJ/station profiles, persistent show archives, follows, discovery feeds, recommendations, and community submissions.</li><li>Native playlist search and provider-connected imports, including Apple Music authorization and a verified listening-history archive.</li><li>AT Protocol identity/publishing, moderation tools, and live audio.</li></ul></div>
        <div className="radio-boundary"><strong>WHAT DEVELOPMENT NEEDS</strong><ul><li>Apple developer configuration, MusicKit setup, explicit opt-in, privacy/retention controls, and tests of the actual API data.</li><li>A backend and operational plan for persistent profiles, archives, follows, feeds, reports, and deletion/export.</li><li>AT Protocol/PDS and existing Lexicon review, authorization, publishing adapter, and moderation model.</li><li>Music-rights review before any hosting or rebroadcast, plus accessibility, security, and release testing.</li></ul></div>
        <div className="radio-boundary"><strong>APPLE MUSIC CONNECTION — NOT CONNECTED</strong><p>Apple Music authorization needs an Apple Music developer token and a MusicKit setup. The recently played endpoint is limited and does not provide reliable per-play timestamps for proving an exact seven-day window. Until an authorized integration is configured and tested, add tracks and links yourself. We will not label a manually assembled list as verified listening history.</p></div>
        <p className="radio-small">No audio is hosted here. Listening links open the music service. Anyone with the share link can view the show, so share only content and notes you are comfortable making public. A tracklist is not proof of a play event or permission to rebroadcast copyrighted audio.</p>
        <p><a className="radio-listen-link" href="https://ibloud.github.io/pixie-creator-os/digital-jockey.html">Want to build a radio project of your own? Open PIXIE Creator OS Digital Jockey Studio ↗</a></p>
      </section>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · MUSIC PASSED FORWARD" />
  </main>;
}
