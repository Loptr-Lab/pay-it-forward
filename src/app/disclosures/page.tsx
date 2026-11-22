import Link from "next/link";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";

export const metadata = { title: "Project & AI Disclosure | PLAY IT FORWARD", description: "Project status, independence, AI assistance, rights and participation boundaries." };

export default function DisclosuresPage() {
  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Site navigation"><Link href="/">Home</Link><Link href="/adventure/">Fan adventure</Link><Link href="/route/">Tour map</Link></nav></header>
    <article className="quest-intro">
      <p className="eyebrow">PROJECT STATUS · INDEPENDENCE · AI TRANSPARENCY</p><h1>WHAT THIS<br/><em>IS &amp; ISN'T.</em></h1>
      <p><strong>PLAY IT FORWARD</strong> is an independent, fan-led prototype and creative experiment. Artist participation, permissions, partnerships, tour details, and official integrations are not implied by the presence of an artist, song, or link.</p>
      <h2>AI-assisted development</h2><p>ChatGPT/Codex has assisted with research, planning, writing, code implementation, documentation, and review. Human direction, verification, and approval remain responsible for project decisions. PIXIE on this site is a static navigation helper, not an autonomous or conversational AI service.</p>
      <h2>Rights and attribution</h2><p>Artist names, music, images, logos, event details, and third-party materials belong to their respective rights holders. This project does not grant rights to those materials. Links are for discovery and reference; no endorsement or affiliation is claimed.</p>
      <h2>Participation and purchases</h2><p>All activities are optional and self-paced. No purchase, account, ticket, post, location tracking, or completion is required. Support or purchase links are not prerequisites for using the experience.</p>
      <h2>Prototype status</h2><p>Information may be incomplete, change, or become outdated. Check official sources for current event, venue, accessibility, safety, and travel details. This is not legal, medical, safety, or travel advice.</p>
      <h2>Corrections</h2><p>Help improve the project through the <a href="https://github.com/Loptr-Lab/pay-it-forward/issues" target="_blank" rel="noreferrer">public repository issue tracker ↗</a>. Avoid posting personal or sensitive information.</p>
      <p>Read the <a href="https://50ways.loptrlab.com/AI-DISCLOSURE.html" target="_blank" rel="noreferrer">Loptr Lab AI disclosure framework ↗</a> for broader project documentation.</p>
    </article><SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · PROTOTYPE" />
  </main>;
}