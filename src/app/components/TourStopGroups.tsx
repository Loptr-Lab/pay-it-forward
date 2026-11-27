"use client";
import type { TourStop } from "../route/page";
import { useEffect } from "react";
import { useTourDay, tourStatus, showCardId, PostShowLinks } from "./TourStatus";
import Link from "next/link";
const venueSearch = (stop: TourStop, category: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${category} near ${stop.venue}, ${stop.area}, ${stop.city}, ${stop.country}`)}`;

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function GlasgowQuest({past}: {past: boolean}) {
  return <section>
      <p className="eyebrow">{past ? "ARCHIVED CITY QUEST" : "CITY QUEST"} · NOV 23, 2026</p>
      <h4>Glasgow city quest</h4>
      <p className="route-note">The November 23 listing is Voilà + NOT A TOY + Austin Giorgio at The Garage, 490 Sauchiehall Street. These are optional nearby cultural stops; check opening hours and travel details before heading out.</p>
      <p className="route-note"><strong>Access note:</strong> The Garage&apos;s main entrance to the show hall includes stairs (40 in total after security). The venue lists a limited-access wheelchair entrance on Renfrew Street; contact its access team in advance for instructions and arrangements. <a href="https://garageglasgow.co.uk/accessibility/" target="_blank" rel="noreferrer">Official accessibility information ↗</a></p>
      <div className="quest-prompt">
        <article >
          <span className="eyebrow">01 · COMICS / COLLECTIBLES</span><h5>Forbidden Planet Glasgow</h5>
          <p className="route-address">122–126 Sauchiehall Street, Glasgow G2 3DH</p>
          <p>Comic books, graphic novels, manga, toys, and pop-culture collectibles. The shop is on Sauchiehall Street, the same street as the venue.</p>
          <a className="text-link" href={maps("Forbidden Planet Glasgow 122 Sauchiehall Street")} target="_blank" rel="noreferrer">MAP & DIRECTIONS ↗</a>
          <a className="text-link" href="https://forbiddenplanet.com/" target="_blank" rel="noreferrer">SHOP WEBSITE ↗</a>
          <p className="route-note">Listed Monday hours: 10:00–18:00. Confirm before visiting.</p>
        </article>
        <article >
          <span className="eyebrow">02 · PHOTO / STREET ART</span><h5>Glasgow Nightlife mural</h5>
          <p className="route-address">The lane beside Lord of Fries, Sauchiehall Street</p>
          <p>A street mural in the lane by the G2 entrance, near Lord of Fries. It is a free photo stop before or after the show; respect venue access and pedestrian space.</p>
          <a className="text-link" href={maps("Glasgow Nightlife mural The Garage G2 lane Lord of Fries")} target="_blank" rel="noreferrer">FIND THE MURAL ↗</a>
          <a className="text-link" href="https://garageglasgow.co.uk/accessibility/" target="_blank" rel="noreferrer">VENUE ACCESSIBILITY & ENTRY ↗</a>
        </article>
        <article >
          <span className="eyebrow">03 · CITY ART</span><h5>Glasgow City Centre Mural Trail</h5>
          <p>A free, self-guided public-art trail. Pick one mural that catches your eye and make it your own pre-show discovery—no checklist required.</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Glasgow+City+Centre+Mural+Trail" target="_blank" rel="noreferrer">OPEN MURAL TRAIL MAP ↗</a>
        </article>
      </div>
      <div className="discovery-prompt"><span>THE FILTHY YUCK! SIDE QUEST</span><strong>Find a comic, character, toy, mural, or object that feels like it belongs in a world of your own. Take a photo or make a sketch. Share only if you want. No purchase required.</strong></div>
    </section>;
}

const directions = (stop: TourStop, mode?: "transit" | "walking") => {
  const destination = encodeURIComponent(`${stop.venue}, ${stop.area}, ${stop.city}, ${stop.country}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}${mode ? `&travelmode=${mode}` : ""}`;
};

function StopCard({ stop, past, today }: { stop: TourStop; past: boolean; today: boolean }) {
  return (
    <article className="route-card" id={showCardId(stop.city,stop.date)}>
      <span className="route-num">{stop.date}{past ? " · PAST SHOW" : today ? " · SHOW DAY" : ""}</span>
      <p className="eyebrow">{stop.region}</p>
      <h3>{stop.city}</h3>{stop.city === "London" && <section><p className="eyebrow">LONDON · {past ? "ARCHIVED SIDE QUEST" : "SECRET SIDE QUEST"}</p><h4>THE WOLF&apos;S GAMBIT.</h4><p>Explore Deptford, darts, chess and a budgeted public transit route using the devices you already have.</p><Link className="text-link" href="/tour-resilience/london/">EXPLORE THE LONDON CITY GUIDE ↗</Link></section>}
      <p className="route-address">{stop.venue} · {stop.area}</p>{(past || today) && <Link className="text-link" href={`/radio/#${showCardId(stop.city,stop.date)}`}>FIND THIS SHOW&apos;S MUSIC ↗</Link>}
      {past && stop.city === "Glasgow" && <p>The scheduled date has passed; a detailed performance review and song list have not been verified.</p>}{past && stop.city === "Manchester" && <p>As reviewed on 25 November 2026, the community-edited setlist recorded performance times but no songs. This is not an official performance report.</p>}{stop.city === "Glasgow" && <details id="glasgow"><summary>Glasgow city quest and accessibility</summary><GlasgowQuest past={past}/></details>}<details><summary>Explore local places and venue directions</summary><p>Explore around the venue instead of searching the whole city. Map results are discovery links—not vetted recommendations or official tour partners.</p>
      <a className="text-link" href={maps(`comic shops toy shops street art near ${stop.venue}, ${stop.city}`)} target="_blank" rel="noreferrer">COMICS · TOYS · ART MAP ↗</a><a className="text-link" href={maps(`${stop.venue}, ${stop.city}`)} target="_blank" rel="noreferrer">VENUE MAP ↗</a><a className="text-link" href={venueSearch(stop, "comic book shops comic stores manga")} target="_blank" rel="noreferrer">COMIC BOOK SHOPS ↗</a>
      <a className="text-link" href={venueSearch(stop, "toy stores collectible toys action figures")} target="_blank" rel="noreferrer">TOY SHOPS & COLLECTIBLES ↗</a>
      <a className="text-link" href={venueSearch(stop, "cosplay costume shops")} target="_blank" rel="noreferrer">COSPLAY & COSTUME SHOPS ↗</a>
      <a className="text-link" href={venueSearch(stop, "parks scenic photography locations")} target="_blank" rel="noreferrer">PARKS & PHOTO SPOTS ↗</a>
      <a className="text-link" href={venueSearch(stop, "independent record shops music venues")} target="_blank" rel="noreferrer">LOCAL MUSIC & RECORD SHOPS ↗</a>
      <a className="text-link" href={venueSearch(stop, "street art murals galleries")} target="_blank" rel="noreferrer">ART, MURALS & GALLERIES ↗</a>
      <a className="text-link" href={venueSearch(stop, "tattoo studios tattoo flash artists")} target="_blank" rel="noreferrer">TATTOO / FLASH ART ↗</a>
      <a className="text-link" href={venueSearch(stop, "cafes bakeries local restaurants")} target="_blank" rel="noreferrer">FOOD & CAFÉS ↗</a>
      <a className="text-link" href={venueSearch(stop, "parks quiet spaces")} target="_blank" rel="noreferrer">QUIET PLACES / RESET ↗</a>
      {!past && <><a className="text-link" href={directions(stop, "transit")} target="_blank" rel="noreferrer">PUBLIC TRANSIT TO VENUE ↗</a>
      <a className="text-link" href={directions(stop, "walking")} target="_blank" rel="noreferrer">WALKING DIRECTIONS ↗</a>
      <a className="text-link" href={directions(stop)} target="_blank" rel="noreferrer">ALL DIRECTIONS & VENUE PIN ↗</a></>}
    </details></article>
  );
}


export default function TourStopGroups({stops}: {stops: TourStop[]}) {
 const now = useTourDay();
 const ready = now !== null;
 useEffect(() => { if (!ready) return; const hash = window.location.hash.slice(1); if (hash === "glasgow" || hash.startsWith("show-")) { const el = document.getElementById(hash); if (el instanceof HTMLDetailsElement) el.open = true; el?.scrollIntoView(); } }, [ready]);
 const past = stops.filter(s => tourStatus(s.date,s.city,now)==="past");
 const scheduled = stops.filter(s => tourStatus(s.date,s.city,now)!=="past");
 return <><div id="tour-cities"/>{(["EUROPE","NORTH AMERICA"] as const).map(region => <section key={region} className="route-stops" id={region==="EUROPE"?"europe":"north-america"}><p className="eyebrow">{region} · {now ? "UPCOMING / SHOW DAY" : "TOUR SCHEDULE"}</p><h2>CHOOSE YOUR CITY.</h2><div className="route-cards">{scheduled.filter(s=>s.region===region).map(stop=><StopCard key={stop.date+stop.city} stop={stop} past={false} today={tourStatus(stop.date,stop.city,now)==="today"}/>)}</div></section>)}<section className="route-stops" id="post-show"><p className="eyebrow">AFTER THE SHOW</p><h2>KEEP THE PARTY GOING.</h2><PostShowLinks /><p className="route-note"><strong>Discoverability snapshot · 25 November 2026:</strong> Bandsintown displayed approximately 6,900 followers and 12 upcoming shows. These are platform-wide indicators, not attendance counts or proof of impact from Play It Forward.</p></section><section className="route-stops" id="past-shows"><p className="eyebrow">TOUR ARCHIVE</p><h2>THE ADVENTURE CONTINUES.</h2><p>Past scheduled dates are retained for discovery, not presented as upcoming events. Check official sources for changes or cancellations.</p><a className="text-link" href="#post-show">AFTER THE SHOW · SHARED ACTIVITIES ↑</a><div className="route-cards">{past.map(stop=><StopCard key={stop.date+stop.city} stop={stop} past={true} today={false}/>)}</div></section></>;
}
