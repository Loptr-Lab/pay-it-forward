"use client";
import type { TourStop } from "../route/page";
import { useTourDay, tourStatus, PostShowLinks } from "./TourStatus";
const venueSearch = (stop: TourStop, category: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${category} near ${stop.venue}, ${stop.area}, ${stop.city}, ${stop.country}`)}`;

const directions = (stop: TourStop, mode?: "transit" | "walking") => {
  const destination = encodeURIComponent(`${stop.venue}, ${stop.area}, ${stop.city}, ${stop.country}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}${mode ? `&travelmode=${mode}` : ""}`;
};

function StopCard({ stop, past, today }: { stop: TourStop; past: boolean; today: boolean }) {
  return (
    <article className="route-card">
      <span className="route-num">{stop.date} · {past ? "PAST SHOW" : today ? "SHOW DAY" : "SCHEDULED"}</span>
      <p className="eyebrow">{stop.region}</p>
      <h3>{stop.city}</h3>{stop.city === "London" && <a className="text-link" href="/pay-it-forward/tour-resilience/london/">{past ? "ARCHIVED SIDE QUEST" : "SECRET SIDE QUEST"} · THE WOLF&apos;S GAMBIT ↗</a>}
      <p className="route-address">{stop.venue} · {stop.area}</p>
      {past && <PostShowLinks />}<p>Explore around the venue instead of searching the whole city. Map results are discovery links—not vetted recommendations or official tour partners.</p>
      <a className="text-link" href={venueSearch(stop, "comic book shops comic stores manga")} target="_blank" rel="noreferrer">COMIC BOOK SHOPS ↗</a>
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
    </article>
  );
}


export default function TourStopGroups({stops}: {stops: TourStop[]}) {
 const now = useTourDay();
 const past = stops.filter(s => tourStatus(s.date,s.city,now)==="past");
 const scheduled = stops.filter(s => tourStatus(s.date,s.city,now)!=="past");
 return <>{(["EUROPE","NORTH AMERICA"] as const).map(region => <section key={region} className="route-stops" id={region==="EUROPE"?"europe":"north-america"}><p className="eyebrow">{region} · {now ? "UPCOMING / SHOW DAY" : "TOUR SCHEDULE"}</p><h2>CHOOSE YOUR CITY.</h2><div className="route-cards">{scheduled.filter(s=>s.region===region).map(stop=><StopCard key={stop.date+stop.city} stop={stop} past={false} today={tourStatus(stop.date,stop.city,now)==="today"}/>)}</div></section>)}<section className="route-stops" id="past-shows"><p className="eyebrow">TOUR ARCHIVE</p><h2>THE ADVENTURE CONTINUES.</h2><p>Past scheduled dates are retained for discovery, not presented as upcoming events. Check official sources for changes or cancellations.</p><div className="route-cards">{past.map(stop=><StopCard key={stop.date+stop.city} stop={stop} past={true} today={false}/>)}</div></section></>;
}
