import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import TourStopGroups from "../components/TourStopGroups";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "NOT A TOY Tour Map", description: "Explore tour cities for local music, art, tattoo culture, food, quiet places, and public transit to venues.", alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/route/" } };


export type TourStop = {
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

export default function RoutePage() {

  return (
    <main className="experience-page">
      <header className="experience-nav">
        <Link href="/" className="wordmark">PIF<span>✳</span></Link>
        <nav aria-label="Visitor pathways"><Link href="/adventure/">Fan adventure</Link><Link href="/tour-side-quests/">Tour side quests</Link><Link href="/every-day/#makers">Production</Link><Link href="/">Home</Link></nav>
      </header>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tour Map", href: "/route/" }]} />
      <section className="experience-hero route-hero">
        <p className="eyebrow">NOT A TOY · TOUR PILOT MAP</p>
        <h1>THE TOUR.<br/><em>THE MAP.</em></h1>
        <p className="experience-lede">The tour overview is your starting point. Open a city to find music, art, tattoo culture, food, a quiet reset, or a way to get to the venue.</p>
        <p className="disclaimer">Dates and venues cross-checked against the artist&apos;s tour listing. Confirm event details, venue address, accessibility, transit service and hours with official sources before travelling.</p>
        <div className="hero-actions">
          <a className="button primary" href="#europe">EUROPE STOPS ↓</a>
          <a className="button secondary" href="#north-america">NORTH AMERICA ↓</a>
        </div>
        <p><a className="text-link" href="https://concord.com/artist/not-a-toy/" target="_blank" rel="noreferrer">CHECK THE ARTIST&apos;S TOUR LISTING ↗</a></p>
        <p><Link className="text-link" href="/tour-side-quests/">EXPLORE TOUR SIDE QUESTS ↗</Link></p>
      </section>
      <TourStopGroups stops={tourStops}/>
      <section className="route-bottom">
        <p className="eyebrow">CITY QUEST</p>
        <h2>FOLLOW A SOUND.<br/><em>NOT A CHECKLIST.</em></h2>
        <p>Pick one city and one thing to explore. Map searches are centered around the venue area. No GPS tracking, check-ins, uploads, or spending required.</p>
        <Link className="button primary" href="/adventure/">BUILD YOUR OWN ADVENTURE ↗</Link>
      </section>
        <p><Link className="text-link" href="/tour-resilience/">TOUR RESILIENCE + LOCAL CREATOR PLAN ↗</Link></p>
      <SiteDirectoryFooter tagline="FAN-LED · ACCESSIBLE · SELF-PACED" />
    </main>
  );
}
