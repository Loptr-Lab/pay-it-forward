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
