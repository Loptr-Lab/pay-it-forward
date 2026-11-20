import Link from "next/link";

type TourStop = {
  region: "EUROPE" | "NORTH AMERICA";
  city: string;
  country: string;
  date: string;
  venue: string;
  area: string;
};

const tourStops: TourStop[] = [
  { region: "EUROPE", city: "Glasgow", country: "UK", date: "NOV 23, 2026", venue: "The Garage", area: "Sauchiehall Street" },
  { region: "EUROPE", city: "Manchester", country: "UK", date: "NOV 24, 2026", venue: "Academy 2", area: "Oxford Road" },
  { region: "EUROPE", city: "London", country: "UK", date: "NOV 26, 2026", venue: "O2 Shepherd's Bush Empire", area: "Shepherd's Bush Green" },
  { region: "EUROPE", city: "Paris", country: "France", date: "NOV 29, 2026", venue: "Le Trianon", area: "Pigalle / Montmartre" },
  { region: "EUROPE", city: "Brussels", country: "Belgium", date: "NOV 30, 2026", venue: "Ancienne Belgique", area: "Central Brussels" },
  { region: "EUROPE", city: "Cologne", country: "Germany", date: "DEC 2, 2026", venue: "Carlswerk Victoria", area: "Mülheim" },
  { region: "EUROPE", city: "Prague", country: "Czechia", date: "DEC 4, 2026", venue: "ROXY Prague", area: "Old Town" },
  { region: "EUROPE", city: "Vienna", country: "Austria", date: "DEC 5, 2026", venue: "Flex", area: "Donaukanal" },
  { region: "EUROPE", city: "Berlin", country: "Germany", date: "DEC 7, 2026", venue: "ASTRA Kulturhaus", area: "Friedrichshain" },
  { region: "EUROPE", city: "Hamburg", country: "Germany", date: "DEC 8, 2026", venue: "Fabrik", area: "Altona" },
  { region: "EUROPE", city: "Utrecht", country: "Netherlands", date: "DEC 9, 2026", venue: "TivoliVredenburg", area: "Utrecht Centraal / city centre" },
  { region: "EUROPE", city: "Hamburg", country: "Germany", date: "DEC 10, 2026", venue: "Fabrik", area: "Altona" },
  { region: "NORTH AMERICA", city: "Los Angeles", country: "USA", date: "JAN 29, 2027", venue: "Moroccan Lounge", area: "Arts District" },
  { region: "NORTH AMERICA", city: "Denver", country: "USA", date: "FEB 13, 2027", venue: "Globe Hall", area: "Globeville" },
];

const venueSearch = (stop: TourStop, category: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${category} near ${stop.venue}, ${stop.area}, ${stop.city}, ${stop.country}`)}`;

const directions = (stop: TourStop, mode?: "transit" | "walking") => {
  const destination = encodeURIComponent(`${stop.venue}, ${stop.area}, ${stop.city}, ${stop.country}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}${mode ? `&travelmode=${mode}` : ""}`;
};

function StopCard({ stop }: { stop: TourStop }) {
  return (
    <article className="route-card">
      <span className="route-num">{stop.date}</span>
      <p className="eyebrow">{stop.region}</p>
      <h3>{stop.city}</h3>
      <p className="route-address">{stop.venue} · {stop.area}</p>
      <p>Explore around the venue instead of searching the whole city. Map results are discovery links—not vetted recommendations or official tour partners.</p>
      <a className="text-link" href={venueSearch(stop, "comic book shops comic stores manga")} target="_blank" rel="noreferrer">COMIC BOOK SHOPS ↗</a>
      <a className="text-link" href={venueSearch(stop, "toy stores collectible toys action figures")} target="_blank" rel="noreferrer">TOY SHOPS & COLLECTIBLES ↗</a>
      <a className="text-link" href={venueSearch(stop, "cosplay costume shops")} target="_blank" rel="noreferrer">COSPLAY & COSTUME SHOPS ↗</a>
      <a className="text-link" href={venueSearch(stop, "parks scenic photography locations")} target="_blank" rel="noreferrer">PARKS & PHOTO SPOTS ↗</a>
      <a className="text-link" href={venueSearch(stop, "independent record shops music venues")} target="_blank" rel="noreferrer">LOCAL MUSIC & RECORD SHOPS ↗</a>
      <a className="text-link" href={venueSearch(stop, "street art murals galleries")} target="_blank" rel="noreferrer">ART, MURALS & GALLERIES ↗</a>
      <a className="text-link" href={venueSearch(stop, "tattoo studios tattoo flash artists")} target="_blank" rel="noreferrer">TATTOO / FLASH ART ↗</a>
      <a className="text-link" href={venueSearch(stop, "cafes bakeries local restaurants")} target="_blank" rel="noreferrer">FOOD & CAFÉS ↗</a>
      <a className="text-link" href={venueSearch(stop, "parks quiet spaces")} target="_blank" rel="noreferrer">QUIET PLACES / RESET ↗</a>
      <a className="text-link" href={directions(stop, "transit")} target="_blank" rel="noreferrer">PUBLIC TRANSIT TO VENUE ↗</a>
      <a className="text-link" href={directions(stop, "walking")} target="_blank" rel="noreferrer">WALKING DIRECTIONS ↗</a>
      <a className="text-link" href={directions(stop)} target="_blank" rel="noreferrer">ALL DIRECTIONS & VENUE PIN ↗</a>
    </article>
  );
}

function Breadcrumbs({ current, path }: { current: string; path: string }) {
  const items = [
    { name: "Home", url: "https://loptr-lab.github.io/pay-it-forward/" },
    { name: current, url: `https://loptr-lab.github.io/pay-it-forward/${path}/` },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
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
      <Breadcrumbs current="Tour Map" path="route" />
      <section className="experience-hero route-hero">
        <p className="eyebrow">NOT A TOY · TOUR PILOT MAP</p>
        <h1>THE TOUR.<br/><em>THE MAP.</em></h1>
        <p className="experience-lede">The tour overview is your starting point. Open a city to find music, art, tattoo culture, food, a quiet reset, or a way to get to the venue.</p>
        <p className="disclaimer">Dates and venues cross-checked against the artist's tour listing. Confirm event details, venue address, accessibility, transit service and hours with official sources before travelling.</p>
        <div className="hero-actions">
          <a className="button primary" href="#europe">EUROPE STOPS ↓</a>
          <a className="button secondary" href="#north-america">NORTH AMERICA ↓</a>
        </div>
        <p><a className="text-link" href="https://concord.com/artist/not-a-toy/" target="_blank" rel="noreferrer">CHECK THE ARTIST'S TOUR LISTING ↗</a></p>
      </section>
      <section className="route-stops" id="europe">
        <p className="eyebrow">EUROPE · NOVEMBER–DECEMBER 2026</p>
        <h2>CHOOSE YOUR CITY.</h2>
        <div className="route-cards">{europe.map((stop) => <StopCard key={stop.date + stop.city} stop={stop}/>)}</div>
      </section>
      <section className="route-stops" id="north-america">
        <p className="eyebrow">NORTH AMERICA · 2027</p>
        <h2>KEEP IT MOVING.</h2>
        <div className="route-cards">{northAmerica.map((stop) => <StopCard key={stop.city} stop={stop}/>)}</div>
      </section>
      <section className="route-bottom">
        <p className="eyebrow">CITY QUEST</p>
        <h2>FOLLOW A SOUND.<br/><em>NOT A CHECKLIST.</em></h2>
        <p>Pick one city and one thing to explore. Map searches are centered around the venue area. No GPS tracking, check-ins, uploads, or spending required.</p>
        <Link className="button primary" href="/adventure">BACK TO THE QUESTS ↗</Link>
      </section>
      <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>FAN-LED · ACCESSIBLE · SELF-PACED</span><Link href="/">HOME ↑</Link></footer>
    </main>
  );
}
