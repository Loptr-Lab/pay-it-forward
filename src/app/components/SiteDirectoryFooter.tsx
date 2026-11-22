import Link from "next/link";

const groups = [
  { title: "EXPLORE", links: [
    { label: "Home", href: "/" },
    { label: "Fan Adventure", href: "/adventure/" },
    { label: "Tour Map", href: "/route/" },
    { label: "Tour Side Quests", href: "/tour-side-quests/" },
    { label: "Cultural Rabbit Hole", href: "/culture/" },
  ]},
  { title: "MUSIC & STORIES", links: [
    { label: "DEVOUR · VOILÀ × NOT A TOY", href: "/music/devour/" },
    { label: "FILTHY YUCK! Interactive Story", href: "/filthy-yuck/" },
    { label: "Every Day · Creator & Sustainability", href: "/every-day/" },
  ]},
  { title: "PILOT & PROCESS", links: [
    { label: "Fan Adventure & Pilot", href: "/adventure/#quests" },
    { label: "Production / Maker Path", href: "/every-day/#makers" },
    { label: "Creator Pilots", href: "/every-day/#pilots" },
    { label: "Public Review", href: "/filthy-yuck/" },
  ]},
];

export default function SiteDirectoryFooter({ tagline = "INDEPENDENT · FAN-LED · ACCESSIBLE" }: { tagline?: string }) {
  return <footer className="experience-footer site-directory-footer">
    <div className="site-directory-brand"><Link href="/" className="footer-wordmark">PLAY IT FORWARD ✳</Link><p>{tagline}</p><p className="footer-note">Independent concept · self-paced · no purchase required</p></div>
    <nav className="footer-directory" aria-label="Site directory">
      {groups.map(group => <section key={group.title}><h2>{group.title}</h2><ul>{group.links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></section>)}
    </nav>
    <div className="footer-meta"><Link href="/#hero-title">BACK TO TOP ↑</Link><Link href="/">HOME</Link><a href="https://github.com/Loptr-Lab/pay-it-forward" target="_blank" rel="noreferrer">SOURCE &amp; PROJECT ↗</a></div>
  </footer>;
}
