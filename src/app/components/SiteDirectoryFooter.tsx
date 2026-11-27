import Link from "next/link";

const groups = [
  { title: "EXPLORE", links: [
    { label: "Home", href: "/" },
    { label: "Build an Adventure", href: "/adventure/" },
    { label: "Radio · Your Week on Air", href: "/radio/" },
    { label: "Tour Map", href: "/route/" },
    { label: "Cultural Rabbit Hole", href: "/culture/" },
    { label: "Creative Routes · The Unwritten Sister", href: "/culture/unwritten-sister/#creative-routes" },
  ]},
  { title: "MUSIC & STORIES", links: [
    { label: "DEVOUR · VOILÀ × NOT A TOY", href: "/music/devour/" },
    { label: "FILTHY YUCK! Interactive Story", href: "/filthy-yuck/" },
    { label: "Every Day · Ink Adventures", href: "/every-day/" },
    { label: "Field Notes · Independent Music", href: "/field-notes/" },
  ]},
  { title: "PILOT & PROCESS", links: [
    { label: "Production / Maker Path", href: "/every-day/#makers" },
    { label: "Music Pilots", href: "/every-day/#pilots" },
    { label: "Tour Resilience · Plan B", href: "/tour-resilience/" },
  ]},
];

export default function SiteDirectoryFooter({ tagline = "INDEPENDENT · FAN-LED · ACCESSIBLE" }: { tagline?: string }) {
  return <footer className="experience-footer site-directory-footer">
    <div className="site-directory-brand"><Link href="/" className="footer-wordmark">PLAY IT FORWARD ✳</Link><p>{tagline}</p><p className="footer-note">Independent concept · self-paced · no purchase required</p></div>
    <nav className="footer-directory" aria-label="Site directory">
      {groups.map(group => <section key={group.title}><h2>{group.title}</h2><ul>{group.links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></section>)}
    </nav>
    <nav className="footer-legal" aria-label="Legal and project information">
      <h2>LEGAL &amp; TRANSPARENCY</h2>
      <Link href="/privacy/">Privacy &amp; Data</Link>
      <Link href="/disclosures/">Project &amp; AI Disclosure</Link>
      <a href="https://50ways.loptrlab.com/AI-DISCLOSURE.html" target="_blank" rel="noreferrer">AI Disclosure Framework ↗</a>
      <a href="https://github.com/ibloud/ibloud.github.io/blob/main/MISSION.md" target="_blank" rel="noreferrer">Mission &amp; Participation Principles ↗</a>
      <a href="https://github.com/Loptr-Lab/pay-it-forward/blob/main/LICENSE" target="_blank" rel="noreferrer">Code License ↗</a>
    </nav>
    <div className="footer-meta"><Link href="/sitemap.xml">XML SITEMAP ↗</Link><Link href="/#hero-title">BACK TO TOP ↑</Link><Link href="/">HOME</Link><a href="https://github.com/Loptr-Lab/pay-it-forward" target="_blank" rel="noreferrer">SOURCE &amp; PROJECT ↗</a></div>
  </footer>;
}
