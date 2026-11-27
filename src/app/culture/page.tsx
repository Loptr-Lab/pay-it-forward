import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cultural Rabbit Hole | PLAY IT FORWARD",
  description: "Explore the stories, journalism, video essays, games, science fiction and underground culture connected to NOT A TOY, FILTHY YUCK!, and the tour.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/culture/" },
};

const [featured, ...sources] = [
  { title: "The Unwritten Sister", description: "Trace dated music releases and visual storytelling, distinguish public evidence from interpretation, and return to an original story.", href: "/culture/unwritten-sister/" },
  { title: "Grand Theft Auto VI", description: "A cultural event whose conversation reaches beyond gaming: satire, spectacle, social media, music, crime, consumerism, and the world around us.", href: "https://www.rockstargames.com/VI" },
  { title: "Altered Carbon: brutal moments & moral questions", description: "GameSpot Universe's scene-by-scene discussion offers a model for accessible retrospective journalism: memorable moments, brutality, and the ethical questions beneath the spectacle.", href: "https://www.youtube.com/watch?v=-DbH9aMJ954" },
  { title: "NOT A TOY: interviews, reviews & profiles", description: "Explore existing coverage of the collective's music, creative process, art, touring, and independent approach.", href: "/adventure/#press" },
];

const platforms = [
  ["GameSpot", "Gaming news, video, culture and commentary", "https://www.gamespot.com/"],
  ["IGN", "Games and entertainment coverage", "https://www.ign.com/"],
  ["Polygon", "Gaming, culture, entertainment and criticism", "https://www.polygon.com/"],
  ["Eurogamer", "Games journalism and cultural coverage", "https://www.eurogamer.net/"],
  ["The Verge", "Technology, culture and entertainment", "https://www.theverge.com/"],
  ["WIRED", "Technology, culture, science and ideas", "https://www.wired.com/"],
  ["Kotaku", "Gaming culture and commentary", "https://kotaku.com/"],
  ["GamesRadar+", "Games, entertainment and pop culture", "https://www.gamesradar.com/"],
  ["Rock Paper Shotgun", "PC games, criticism and culture", "https://www.rockpapershotgun.com/"],
  ["Vulture", "Film, television, culture and criticism", "https://www.vulture.com/"],
];

export default function CulturePage() {
  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Visitor pathways"><Link href="/every-day/#fans">Ink adventures</Link><Link href="/route/">Tour side quests</Link><Link href="/">Home</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cultural Rabbit Hole", href: "/culture/" }]} />
    <section className="experience-hero">
      <p className="eyebrow">NOT A TOY · FILTHY YUCK! · PLAY IT FORWARD</p>
      <h1>THE CULTURAL<br/><em>RABBIT HOLE.</em></h1>
      <p className="experience-lede">Games, science fiction, music, satire, journalism, and the strange real world that connects them. Follow a story because it interests you—not because it is an ad.</p>
      <p className="disclaimer">Independent editorial discovery by PLAY IT FORWARD. No affiliation or endorsement by the referenced properties or publications is implied.</p>
    </section>
    <div className="adventure-info-row">
      <section className="quest-intro compact-section">
        <h2>Music, games, and fiction</h2>
        <p>Follow how underground music, satire and science fiction explore power, technology and who gets left out.</p>
        <ul>
          {sources.map(source => <li key={source.href}>
            <Link className="text-link" href={source.href}>{source.title} ↗</Link>
            <p>{source.description}</p>
          </li>)}
        </ul>
        <details>
          <summary>Publication directory</summary>
          <p>Explore publications that cover these themes. Check individual coverage and public contact details before outreach.</p>
          <ul>{platforms.map(([name, description, url]) => <li key={url}><a className="text-link" href={url}>{name} ↗</a> · {description}</li>)}</ul>
        </details>
      </section>
      <section className="quest-intro compact-section">
        <h2>Keep exploring</h2>
        <ul>
          <li><Link className="text-link" href="/filthy-yuck/">Play the FILTHY YUCK! story ↗</Link></li>
          <li><Link className="text-link" href="/every-day/#fans">Choose an Ink adventure ↗</Link></li>
          <li><Link className="text-link" href="/route/">Explore tour side quests ↗</Link></li>
        </ul>
        <div id="stories">
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <Link className="button primary" href={featured.href}>BEGIN THE OBSERVER QUEST ↗</Link>
        </div>
      </section>
    </div>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · SELF-PACED" />
  </main>;
}
