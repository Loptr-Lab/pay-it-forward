"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";

import { listeningRoutes } from "../music/catalog";

type Track = { title: string; artist: string; url: string };
const starter: Track[] = [
  { title: "Your opening track", artist: "An artist you love", url: "" },
  { title: "A new discovery", artist: "Someone to pass forward", url: "" },
];

type Show = { title: string; note: string; tracks: Track[] };
const storageKey = "pif-radio-draft-v1";
function validShow(value: unknown): Show | null {
  if (!value || typeof value !== "object") return null;
  const show = value as Partial<Show>;
  if (typeof show.title !== "string" || typeof show.note !== "string" || !Array.isArray(show.tracks) || show.tracks.length > 500) return null;
  if (!show.tracks.every(t => t && typeof t.title === "string" && typeof t.artist === "string" && typeof t.url === "string")) return null;
  return { title: show.title.slice(0,90), note: show.note.slice(0,280), tracks: show.tracks.map(t => ({title:t.title.slice(0,500),artist:t.artist.slice(0,500),url:t.url.slice(0,4000)})) };
}
function decodeShow(): { title: string; note: string; tracks: Track[] } | null {
  if (typeof window === "undefined" || !window.location.hash.startsWith("#show=")) return null;
  try {
    const raw = window.location.hash.slice(6);
    if (raw.length > 60000) return null;
    return validShow(JSON.parse(decodeURIComponent(escape(atob(raw)))));
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
  const [catalogIndex, setCatalogIndex] = useState("0");
  const [routeIndex, setRouteIndex] = useState("0");
  const selectedRoute = listeningRoutes[Number(routeIndex)];

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

  function addTrack() { setTracks(items => [...items, { title: "", artist: "", url: "" }]); }
  function loadShow(show: Show) {
    setTitle(show.title); setNote(show.note); setTracks(show.tracks); setReadOnly(false); setShared(false);
    window.history.replaceState(null, "", window.location.pathname);
  }
  function saveDraft() {
    try { localStorage.setItem(storageKey, JSON.stringify({title,note,tracks})); setImportMessage("Draft saved on this browser only."); }
    catch { setImportMessage("Could not save locally. Download the show JSON instead."); }
  }
  function restoreDraft() {
    try {
      const show = validShow(JSON.parse(localStorage.getItem(storageKey) || "null"));
      if (!show) { setImportMessage("No valid saved draft."); return; }
      if (window.confirm("Replace the current show with your saved draft?")) loadShow(show);
    } catch { setImportMessage("Could not restore the draft."); }
  }
  function deleteDraft() {
    try { localStorage.removeItem(storageKey); setImportMessage("Local draft deleted."); }
    catch { setImportMessage("Could not delete the local draft."); }
  }
  function download(content: string, type: string, filename: string) {
    const url = URL.createObjectURL(new Blob([content], {type}));
    const link = document.createElement("a"); link.href=url; link.download=filename;
    document.body.appendChild(link); link.click(); link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function exportShow() { download(JSON.stringify({title,note,tracks},null,2), "application/json", "play-it-forward-show.json"); }
  async function importShow(file?: File) {
    if (!file) return;
    try {
      if(file.size > 4000000) throw Error("File too large");
      const show = validShow(JSON.parse(await file.text()));
      if (!show) throw Error("Invalid show");
      if (window.confirm("Replace the current show with this file?")) { loadShow(show); setImportMessage("Show imported."); }
    } catch { setImportMessage("Could not import this show JSON."); }
  }
  function moveTrack(index: number, direction: number) {
    setTracks(items => { const next = [...items]; const target = index + direction;
      if(target >= 0 && target < next.length) [next[index],next[target]] = [next[target],next[index]];
      return next;
    });
  }

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
      if (!window.confirm("Replace the current tracklist with the imported CSV?")) return;
      setTracks(imported.slice(0,500));
      setImportMessage(`Imported ${imported.length} tracks. Review the list before sharing.`);
    } catch {
      setImportMessage("We couldn't read that file. Please try a UTF-8 CSV file.");
    }
  }

  function exportTracklist() {
    const quote = (value: string) => '"' + (/^[\s]*[=+@-]|^[\t\r\n]/.test(value) ? "'" + value : value).replace(/"/g, '""') + '"';
    const csv = ["title,artist,url", ...tracks.map((track) => [track.title, track.artist, track.url].map(quote).join(","))].join("\n");
    download(csv, "text/csv;charset=utf-8", "play-it-forward-tracklist.csv");
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
    if (encoded.length > 60000 || !validShow({title,note,tracks})) { setImportMessage("Show too large for a share link. Download JSON instead."); return; }
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
        <p className="experience-lede">A little broadcast of what moved you. Build a post-show playlist or pass your weekly listening experience forward.</p>
        <p className="radio-status">WEEKLY LISTENING SHOW · MADE BY YOU</p>
      </header>
      <section className="radio-builder" data-clarity-mask="true" aria-labelledby="radio-builder-title">
        <div className="radio-builder-heading">
          <div><p className="eyebrow">MAKE A SHOW / BUILD A PLAYLIST</p><h2 id="radio-builder-title">{readOnly ? "YOU'RE TUNED IN." : "WHAT HAVE YOU BEEN PLAYING?"}</h2></div>
          <span className="radio-onair">{readOnly ? "SHARED SHOW" : "DRAFT"}</span>
        </div>
        <label className="radio-field">SHOW TITLE<input value={title} onChange={(e) => setTitle(e.target.value)} readOnly={readOnly} maxLength={90}/></label>
        <label className="radio-field">A NOTE FROM THE DJ<textarea value={note} onChange={(e) => setNote(e.target.value)} readOnly={readOnly} rows={3} maxLength={280}/></label>
        {!readOnly && <section className="radio-import" aria-labelledby="catalog-title">
          <h3 id="catalog-title">START WITH THE MUSIC.</h3>
          <p>Choose a curated listening route, not a complete discography. Release discovery entries link to an EP or album; replace them with individual songs as you listen. No artist participation is implied.</p>
          <label className="radio-field">CHOOSE A LISTENING ROUTE<select value={routeIndex} onChange={e=>{setRouteIndex(e.target.value);setCatalogIndex("0");}}>{listeningRoutes.map((route,i)=><option key={route.title} value={i}>{route.title}</option>)}</select></label><label className="radio-field">CHOOSE A TRACK OR RELEASE<select value={catalogIndex} onChange={e=>setCatalogIndex(e.target.value)}>{selectedRoute.tracks.map((t,i)=><option key={i} value={i}>{t.title} — {t.artist}</option>)}</select></label>
          <div className="radio-actions">
            <button className="button secondary" type="button" onClick={()=>setTracks(items=>[...items,{...selectedRoute.tracks[Number(catalogIndex)]}])}>ADD SELECTED TRACK</button>
            <button className="button secondary" type="button" onClick={()=>{if(window.confirm("Replace the current show with the curated route?")) loadShow({title:selectedRoute.title,note:selectedRoute.note,tracks:selectedRoute.tracks.map(t=>({...t}))});}}>LOAD SELECTED ROUTE</button>
            <Link className="button secondary" href={selectedRoute.href}>EXPLORE THE SOURCE ROUTE</Link>
          </div>
        </section>}
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
            <label className="button secondary radio-file-button">IMPORT SHOW JSON<input aria-label="Import show JSON" type="file" accept=".json,application/json" onChange={e=>{void importShow(e.target.files?.[0]);e.target.value="";}} /></label>
          </div>
          <p className="radio-import-note">Soundiiz opens in a separate site; it does not connect to this form or automatically import a playlist here. Transfer your playlist there if useful, then export a tracklist file and bring it back here. CSV and JSON import/export happen in this browser only.</p>
          
        </section>}
        <div className="radio-track-heading"><h3>THE TRACKLIST</h3><span>{tracks.length} TRACKS</span></div>
        <ol className="radio-tracklist">
          {tracks.map((track, index) => <li key={index}>
            <span className="radio-track-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="radio-track-fields">
              <label>TRACK<input value={track.title} readOnly={readOnly} placeholder="Song title" onChange={(e) => updateTrack(index, "title", e.target.value)}/></label>
              <label>ARTIST<input value={track.artist} readOnly={readOnly} placeholder="Artist name" onChange={(e) => updateTrack(index, "artist", e.target.value)}/></label>
              <label>APPLE MUSIC / LISTEN LINK<input value={track.url} readOnly={readOnly} placeholder="https://music.apple.com/…" onChange={(e) => updateTrack(index, "url", e.target.value)}/></label>
              {!readOnly && <div className="radio-actions"><button className="button secondary" type="button" disabled={index===0} onClick={()=>moveTrack(index,-1)} aria-label={`Move track ${index+1} up`}>MOVE UP</button><button className="button secondary" type="button" disabled={index===tracks.length-1} onClick={()=>moveTrack(index,1)} aria-label={`Move track ${index+1} down`}>MOVE DOWN</button><button className="button secondary" type="button" onClick={()=>setTracks(items=>items.filter((_,i)=>i!==index))} aria-label={`Remove track ${index+1}`}>REMOVE</button></div>}
              {isSafeListenUrl(track.url) && <a className="radio-listen-link" href={track.url} target="_blank" rel="noreferrer">OPEN TRACK ↗</a>}
            </div>
          </li>)}
        </ol>
        {!readOnly && <div className="radio-actions"><button className="button secondary" type="button" onClick={addTrack}>+ ADD A TRACK</button><button className="button primary" type="button" onClick={shareShow}>COPY SHARE LINK ↗</button></div>}
        {shared && <p className="radio-confirmation" role="status">Share link copied. Anyone with the link can view this show.</p>}
        <div className="radio-actions">
          <button className="button secondary" type="button" onClick={exportTracklist}>DOWNLOAD TRACKLIST CSV ↓</button>
          <button className="button secondary" type="button" onClick={exportShow}>DOWNLOAD FULL SHOW JSON ↓</button>
          {readOnly ? <><button className="button secondary" type="button" onClick={()=>loadShow({title:("Inspired by: "+title).slice(0,90),note:("Source show: "+title).slice(0,280),tracks})}>BUILD FROM THIS SHOW</button><button className="button secondary" type="button" onClick={resetShow}>MAKE YOUR OWN SHOW</button></> : <>
          <button className="button secondary" type="button" onClick={saveDraft}>SAVE DRAFT ON THIS DEVICE</button>
          <button className="button secondary" type="button" onClick={restoreDraft}>RESTORE SAVED DRAFT</button>
          <button className="button secondary" type="button" onClick={deleteDraft}>DELETE SAVED DRAFT</button></>}
        </div>
        <p className="radio-small">Saving a draft is optional and replaces the previous saved draft in this browser. Shared links are public-by-link, not encrypted. Downloads stay on your device.</p>
        {importMessage && <p className="radio-confirmation" role="status">{importMessage}</p>}
      </section>
      <section className="radio-how" aria-labelledby="radio-status-details">
        <p className="eyebrow">THE FIRST EDITION</p><h2>YOUR TASTE.<br/><em>YOUR AIRWAVES.</em></h2>
        <p>Add tracks you played this week, import a CSV tracklist, or use a separate playlist-transfer service before bringing a tracklist here. Give the show a title and share the link. This is a link-based show builder: the tracklist is encoded into the link and is not uploaded to a server.</p>
        <div className="radio-boundary"><strong>WHAT WORKS NOW</strong><ul><li>Manually add, remove and reorder tracks, or start from a curated listening route.</li><li>Import CSV or full-show JSON; download CSV or JSON from both editable and shared shows. Save, restore or delete an optional local draft.</li><li>Open Soundiiz separately as an optional playlist-transfer tool; it is not a direct Play It Forward integration.</li><li>Copy a share link; anyone with the link can view the read-only show.</li><li>Open music links in the relevant listening service. This site does not host audio.</li></ul></div>
        <div className="radio-boundary"><strong>PLANNED — NOT LIVE</strong><ul><li>DJ/station profiles, persistent public community archives, follows, discovery feeds, recommendations, and community submissions.</li><li>Native playlist search and provider-connected imports, including Apple Music authorization and a verified listening-history archive.</li><li>AT Protocol identity/publishing, moderation tools, and live audio.</li></ul></div>
        <div className="radio-boundary"><strong>WHAT DEVELOPMENT NEEDS</strong><ul><li>Apple developer configuration, MusicKit setup, explicit opt-in, privacy/retention controls, and tests of the actual API data.</li><li>A backend and operational plan for persistent profiles, archives, follows, feeds, reports, and deletion/export.</li><li>AT Protocol/PDS and existing Lexicon review, authorization, publishing adapter, and moderation model.</li><li>Music-rights review before any hosting or rebroadcast, plus accessibility, security, and release testing.</li></ul></div>
        <div className="radio-boundary"><strong>APPLE MUSIC CONNECTION — NOT CONNECTED</strong><p>Apple Music authorization needs an Apple Music developer token and a MusicKit setup. The recently played endpoint is limited and does not provide reliable per-play timestamps for proving an exact seven-day window. Until an authorized integration is configured and tested, add tracks and links yourself. We will not label a manually assembled list as verified listening history.</p></div>
        <p className="radio-small">No audio is hosted here. Listening links open the music service. Anyone with the share link can view the show, so share only content and notes you are comfortable making public. A tracklist is not proof of a play event or permission to rebroadcast copyrighted audio.</p>
        <p><a className="radio-listen-link" href="https://ibloud.github.io/pixie-creator-os/digital-jockey.html">Want to build a radio project of your own? Open PIXIE Creator OS Digital Jockey Studio ↗</a></p>
      </section>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · MUSIC PASSED FORWARD" />
  </main>;
}
