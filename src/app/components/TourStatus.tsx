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

export function showCardId(city: string, date: string) {
  return "show-" + (city + "-" + date).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function PostShowLinks() {
  return <article className="route-card" aria-labelledby="after-show-tasks">
    <p className="eyebrow">ALL TOUR STOPS · OPTIONAL ACTIVITIES</p>
    <h3 id="after-show-tasks">Keep the party going.</h3>
    <p>Choose one activity or come back later. You can discover the music even if you did not attend.</p>
    <ol>
      <li><strong>Remember the music.</strong> Explore community-edited setlists or contribute firsthand corrections: <a href="https://www.setlist.fm/setlists/not-a-toy-23fc64df.html">NOT A TOY</a> · <a href="https://www.setlist.fm/setlists/voila-6bccee4a.html">VOILÀ</a>. <Link href="/radio/#radio-builder-title">Find your concert and transfer its available setlist to your music service.</Link></li>
      <li><strong>Review the show.</strong> Record firsthand highlights, opening acts, sound, lighting and accessibility. Keep venue feedback separate from artist feedback. Find your concert in the <a href="https://www.concertarchives.org/bands/not-a-toy">NOT A TOY Concert Archives</a> and use its available contribution options. Play It Forward does not collect reviews.</li>
      <li><strong>Preserve a moment.</strong> <a href="https://notatoy.fanvids.io/">Share permitted footage through NOT A TOY FanVids.</a> FanVids manages its own submissions, terms and privacy.</li>
      <li><strong>Stay connected.</strong> <a href="https://discord.com/invite/TfAFU9rhNn">Join Toys Aren&apos;t Us on Discord</a> or <a href="https://www.bandsintown.com/a/15507516-not-a-toy">follow NOT A TOY on Bandsintown.</a></li>
      <li><strong>Bring the music to your city.</strong> Use the Request a Show / Play My City option on the Bandsintown artist profile when available. Requests are not bookings or ticket commitments.</li>
    </ol>
    <p className="route-note">Independent fan participation. No purchase required. Share only material you have permission to publish. No artist endorsement is implied.</p>
  </article>;
}
