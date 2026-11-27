import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import TourStopGroups from "../components/TourStopGroups";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "NOT A TOY Tour Map", description: "Explore tour cities for local music, art, tattoo culture, food, quiet places, and public transit to venues.", alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/route/" } };


import { tourStops } from "../music/tour-stops";
export type { TourStop } from "../music/tour-stops";

export default function RoutePage() {

  return (
    <main className="experience-page">
      <header className="experience-nav">
        <Link href="/" className="wordmark">PIF<span>✳</span></Link>
        <nav aria-label="Visitor pathways"><Link href="/adventure/">Fan adventure</Link><Link href="/every-day/#makers">Production</Link><Link href="/">Home</Link></nav>
      </header>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tour Map", href: "/route/" }]} />
      <section className="experience-hero route-hero">
        <p className="eyebrow">NOT A TOY · TOUR PILOT MAP</p>
        <h1>THE TOUR.<br/><em>THE MAP.</em></h1>
        <p className="experience-lede">Follow <Link href="/music/devour/">DEVOUR by VOILÀ × NOT A TOY</Link> from the shared release into the tour. The tour overview is your starting point. Open a city to find music, art, tattoo culture, food, a quiet reset, or a way to get to the venue.</p>
        <p className="disclaimer">Dates and venues cross-checked against the artist&apos;s tour listing. Confirm event details, venue address, accessibility, transit service and hours with official sources before travelling.</p>
        <div className="hero-actions">
          <a className="button primary" href="#europe">EUROPE STOPS ↓</a>
          <a className="button secondary" href="#north-america">NORTH AMERICA ↓</a><a className="button secondary" href="#post-show">AFTER THE SHOW ↓</a><a className="button secondary" href="#past-shows">PAST SHOWS ↓</a>
        </div>
        <p><a className="text-link" href="https://concord.com/artist/not-a-toy/" target="_blank" rel="noreferrer">CHECK THE ARTIST&apos;S TOUR LISTING ↗</a></p>
        
      </section>
      <TourStopGroups stops={tourStops}/>
      <section className="route-bottom">
        <p className="eyebrow">CITY QUEST</p>
        <h2>FOLLOW A SOUND.<br/><em>NOT A CHECKLIST.</em></h2>
        <p>A concert can be the centre of a day—not the whole day. Pick one city and one thing to explore. Map searches are centered around the venue area. No GPS tracking, check-ins, uploads, or spending required.</p>
        <div className="hero-actions"><Link className="button primary" href="/adventure/">BUILD YOUR OWN ADVENTURE ↗</Link><Link className="button secondary" href="/culture/">EXPLORE CULTURE ↗</Link><Link className="button secondary" href="/every-day/#fans">CHOOSE AN INK ADVENTURE ↗</Link></div>
      </section>
        <p><Link className="text-link" href="/tour-resilience/">TOUR RESILIENCE + LOCAL CREATOR PLAN ↗</Link></p>
      <SiteDirectoryFooter tagline="FAN-LED · ACCESSIBLE · SELF-PACED" />
    </main>
  );
}
