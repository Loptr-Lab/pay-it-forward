import Link from "next/link";

type TourStop = {
  region: "EUROPE" | "NORTH AMERICA";
  city: string;
  date: string;
  venue: string;
  neighborhood?: string;
};

const tourStops: TourStop[] = [
  { region: "EUROPE", city: "Manchester", date: "NOV 24, 2026", venue: "Academy 2" },
  { region: "EUROPE", city: "London", date: "NOV 26, 2026", venue: "O2 Shepherd's Bush Empire", neighborhood: "Shepherd's Bush" },
  { region: "EUROPE", city: "Cologne", date: "DEC 2, 2026", venue: "Carlswerk Victoria" },
  { region: "EUROPE", city: "Berlin", date: "DEC 7, 2026", venue: "ASTRA Kulturhaus", neighborhood: "Friedrichshain" },
  { region: "EUROPE", city: "Hamburg", date: "DEC 8, 2026", venue: "Fabrik" },
  { region: "EUROPE", city: "Utrecht", date: "DEC 9, 2026", venue: "TivoliVredenburg" },
  { region: "NORTH AMERICA", city: "Los Angeles", date: "JAN 29, 2027", venue: "Moroccan Lounge" },
  { region: "NORTH AMERICA", city: "Denver", date: "FEB 13, 2027", venue: "Globe Hall" },
];

const mapSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const directions = (stop: TourStop, mode?: "transit" | "walking") => {
  const destination = encodeURIComponent(`${stop.venue}, ${stop.city}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}${mode ? `&travelmode=${mode}` : ""}`;
};

function StopCard({ stop }: { stop: TourStop }) {
  const cityArea = stop.neighborhood ? `${stop.neighborhood}, ${stop.city}` : stop.city;
  return (
    <article className="route-card">
      <span className="route-num">{stop.date}</span>
      <p className="eyebrow">{stop.region}</p>
      <h3>{stop.city}</h3>
      <p className="route-address">{stop.venue}</p>
      <p>Choose one detour—or go straight to the show. These map searches are starting points, not curated or verified partner recommendations.</p>
      <a className="text-link" href={mapSearch(`independent record shops music venues ${cityArea}`)} target="_blank" rel="noreferrer">LOCAL MUSIC & RECORD SHOPS ↗</a>
      <a className="text-link" href={mapSearch(`street art murals galleries ${cityArea}`)} target="_blank" rel="noreferrer">ART, MURALS & GALLERIES ↗</a>
      <a className="text-link" href={mapSearch(`tattoo studios tattoo flash artists ${cityArea}`)} target="_blank" rel="noreferrer">TATTOO / FLASH ART ↗</a>
      <a className="text-link" href={mapSearch(`cafes bakeries local restaurants ${cityArea}`)} target="_blank" rel="noreferrer">FOOD & CAFÉS ↗</a>
      <a className="text-link" href={mapSearch(`parks quiet places ${cityArea}`)} target="_blank" rel="noreferrer">QUIET PLACES / RESET ↗</a>
      <a className="text-link" href={directions(stop, "transit")} target="_blank" rel="noreferrer">PUBLIC TRANSIT TO VENUE ↗</a>
      <a className="text-link" href={directions(stop, "walking")} target="_blank" rel="noreferrer">WALKING DIRECTIONS ↗</a>
      <a className="text-link" href={directions(stop)} target="_blank" rel="noreferrer">ALL DIRECTIONS & VENUE PIN ↗</a>
    </article>
  );
}

export default function RoutePage() {
  const europe = tourStops.filter((stop) => stop.region === "EUROPE");
  const northAmerica = tourStops.filter((stop) => stop.region === "NORTH AMERICA");

  return (
    <main className="experience-page">
      <header className="experience-nav">
        <Link href="/" className="wordmark">PIF<span>✳</span></Link>
        <nav><Link href="/adventure">Adventure</Link><Link href="/route">Tour map</Link><Link href="/">Home</Link></nav>
      </header>
      <section className="experience-hero route-hero">
        <p className="eyebrow">NOT A TOY · TOUR PILOT MAP</p>
        <h1>THE TOUR.<br/><em>THE MAP.</em></h1>
        <p className="experience-lede">The tour overview is your starting point. Open a city to find music, art, tattoo culture, food, a quiet reset, or a way to get to the venue.</p>
        <p className="disclaimer">Dates and venue names are presented as pilot information. Confirm the show, venue address, accessibility, transit service and hours through official sources before travelling.</p>
        <div className="hero-actions">
          <a className="button primary" href="#europe">EUROPE STOPS ↓</a>
          <a className="button secondary" href="#north-america">NORTH AMERICA ↓</a>
        </div>
      </section>
      <section className="route-stops" id="europe">
        <p className="eyebrow">EUROPE · 2026</p>
        <h2>CHOOSE YOUR CITY.</h2>
        <div className="route-cards">{europe.map((stop) => <StopCard key={stop.city} stop={stop}/>)}</div>
      </section>
      <section className="route-stops" id="north-america">
        <p className="eyebrow">NORTH AMERICA · 2027</p>
        <h2>KEEP IT MOVING.</h2>
        <div className="route-cards">{northAmerica.map((stop) => <StopCard key={stop.city} stop={stop}/>)}</div>
      </section>
      <section className="route-bottom">
        <p className="eyebrow">CITY QUEST</p>
        <h2>FOLLOW A SOUND.<br/><em>NOT A CHECKLIST.</em></h2>
        <p>Pick one city and one thing to explore. Search for record shops, murals, local artists, food, quiet spaces—or whatever catches your attention. No GPS tracking, check-ins, uploads, or spending required.</p>
        <Link className="button primary" href="/adventure">BACK TO THE QUESTS ↗</Link>
      </section>
      <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>FAN-LED · ACCESSIBLE · SELF-PACED</span><Link href="/">HOME ↑</Link></footer>
    </main>
  );
}
