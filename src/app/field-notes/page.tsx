import Link from "next/link";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes | PLAY IT FORWARD",
  description: "Independent observations and case discussions on music discovery, touring, artist sustainability, audience participation, and creative infrastructure.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/field-notes/" },
};

export default function FieldNotes() {
  return <main>
    <header className="topbar"><Link className="wordmark" href="/">PIF<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/adventure/">Explore</Link><Link href="/tour-side-quests/">Tour side quests</Link><Link href="/every-day/#makers">Production</Link><Link href="/field-notes/">Field notes</Link></nav></header>
    <section className="section" style={{maxWidth:1100,margin:"0 auto"}}>
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"}]}/>
      <p className="eyebrow">PLAY IT FORWARD · EDITORIAL</p>
      <h1 style={{fontSize:"clamp(3rem,9vw,7rem)",lineHeight:.9,letterSpacing:"-.07em"}}>FIELD<br/><em>NOTES.</em></h1>
      <p style={{maxWidth:700,color:"var(--muted)",fontSize:"1.2rem",lineHeight:1.7}}>Independent observations, case discussions, and practical questions about music discovery, touring, artist sustainability, audience participation, and creative infrastructure. These are explorations—not endorsements, insider reports, or claims of affiliation.</p>
      <div style={{border:"1px solid var(--line)",padding:24,marginTop:40,background:"var(--surface)"}}>
        <p className="eyebrow">001 · INDEPENDENT MUSIC · TOURING</p>
        <h2>AFTER THE MOMENTUM.</h2>
        <p style={{color:"var(--muted)",lineHeight:1.7}}>What does an independent artist build when the audience is already there—and the next move is bigger than another release? A case discussion prompted by Token / Never Too Different and the question of what touring can become.</p>
        <Link className="button primary" href="/field-notes/after-the-momentum/">READ THE CASE DISCUSSION ↗</Link>
      </div>
      <p style={{marginTop:32,color:"var(--muted)"}}>Follow the editorial feed or share discussions on Bluesky. Participation is welcome; the work is independent and open to correction.</p>
      <a className="text-link" href="/field-notes/feed.xml">RSS FEED ↗</a>
    </section>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES"/>
  </main>;
}
