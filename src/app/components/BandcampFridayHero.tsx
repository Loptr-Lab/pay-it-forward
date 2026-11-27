"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const EVENT_START = new Date("2026-11-20T08:00:00Z");
const EVENT_END = new Date("2026-12-05T08:00:00Z");
const EVENT_DATE = "December 4, 2026";

export default function BandcampFridayHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const check = () => {
      const now = new Date();
      setVisible(now >= EVENT_START && now < EVENT_END);
    };
    check();
    const timer = window.setInterval(check, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!visible) return null;
  return (
    <Link className="bandcamp-hero" href="#event" aria-label="Learn about the final Bandcamp Friday of 2026, December 4">
      <span className="event-kicker">LAST BANDCAMP FRIDAY OF 2026</span>
      <strong>SUPPORT INDEPENDENT MUSIC</strong>
      <span className="event-date">{EVENT_DATE}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function BandcampFridayEvent() {
  const [phase, setPhase] = useState<"dated" | "active" | "archived">("dated");
  useEffect(() => {
    const check = () => setPhase(new Date() >= EVENT_END ? "archived" : new Date() >= EVENT_START ? "active" : "dated");
    check();
    const timer = window.setInterval(check, 60_000);
    window.addEventListener("focus", check);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", check); };
  }, []);
  return <section className="event-section" id="event">
    <p className="eyebrow">{phase === "archived" ? "ARCHIVED · DECEMBER 4, 2026" : "PROPOSED FAN ACTIVATION · FINAL BANDCAMP FRIDAY OF 2026"}</p>
    <h2>GOODBYE BANDCAMP FRIDAY?<br/><em>HELLO, EVERY DAY.</em></h2>
    <p className="event-date">BANDCAMP FRIDAY · {EVENT_DATE}</p>
    <p>{phase === "archived" ? "Our December 4 discovery window has ended. Keep following the music and supporting artists on your own schedule." : "Discover music through collaboration. Support artists directly if you choose, and keep the connections going after December 4."} Bandcamp has announced further Fridays in 2027; this is about support between promotional days.</p>
    <div className="hero-actions"><Link className="button primary" href="/every-day/">HELLO, EVERY DAY ↗</Link><Link className="button secondary" href="/field-notes/the-art-of-staying-independent/">FOLLOW THE ARTIST CONNECTIONS ↗</Link></div>
    <ul>
      <li>Ren × The Skinner Brothers · <a href="https://renmakesmusic.bandcamp.com/">Ren on Bandcamp</a> · <a href="https://theskinnerbrothers.bandcamp.com/">The Skinner Brothers on Bandcamp</a></li>
      <li>Ren × Chris Webby × Inpatient × JP On Da Track · <a href="https://renmakesmusic.bandcamp.com/album/asylum">Asylum</a> · <a href="https://app.grouped.com/webbysworld/">Webby’s World</a></li>
      <li>VOILÀ × NOT A TOY · <Link href="/music/devour/">DEVOUR</Link> · <a href="https://voilamusic.bandcamp.com/music">VOILÀ catalog</a> · <a href="https://notatoy.bandcamp.com/album/not-a-toy">NOT A TOY on Bandcamp</a></li>
    </ul>
    <p><a className="text-link" href="https://bandcamp.com/">Explore Bandcamp ↗</a></p>
    <p className="disclaimer">Independent editorial discovery; no artist or platform partnership, purchase or participation required.</p>
  </section>;
}
