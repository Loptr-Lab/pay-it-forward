"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function useTourDay() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const refresh = () => setNow(new Date());
    refresh();
    const timer = window.setInterval(refresh, 30000);
    window.addEventListener("focus", refresh);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, []);
  return now;
}

export function tourStatus(date: string, city: string, now: Date | null) {
  if (!now) return "pending";
  const zone = city === "Los Angeles" ? "America/Los_Angeles" : city === "Denver" ? "America/Denver" : ["Glasgow", "Manchester", "London"].includes(city) ? "Europe/London" : "Europe/Paris";
  const parts = new Intl.DateTimeFormat("en-GB", {timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit"}).formatToParts(now);
  const local = ["year", "month", "day"].map(key => parts.find(p => p.type === key)?.value).join("-");
  const match = date.match(/^([A-Za-z]{3}) (\d{1,2}), (\d{4})$/);
  if (!match) return "pending";
  const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].indexOf(match[1].toUpperCase()) + 1;
  if (!month) return "pending";
  const event = match[3] + "-" + String(month).padStart(2,"0") + "-" + match[2].padStart(2,"0");
  return local > event ? "past" : local === event ? "today" : "upcoming";
}

export function PostShowLinks() {
  return <><div className="hero-actions"><a className="button primary" href="https://notatoy.fanvids.io/" target="_blank" rel="noreferrer">VISIT NOT A TOY FANVIDS · EXTERNAL ↗</a><Link className="button secondary" href="/radio/#radio-builder-title">BUILD YOUR POST-SHOW PLAYLIST ↗</Link></div><p className="route-note">Optional: share only footage you have permission to submit. FanVids controls its own availability, terms and privacy. Play It Forward does not collect footage or imply artist endorsement.</p></>;
}
