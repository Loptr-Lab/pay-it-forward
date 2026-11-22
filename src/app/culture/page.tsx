import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cultural Rabbit Hole | PLAY IT FORWARD",
  description: "Explore the stories, journalism, video essays, games, science fiction and underground culture connected to NOT A TOY, FILTHY YUCK!, and the tour.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/culture/" },
};

const sources = [
  { category: "GAMES · CULTURE", title: "Grand Theft Auto VI", description: "A cultural event whose conversation reaches beyond gaming: satire, spectacle, social media, music, crime, consumerism, and the world around us.", href: "https://www.rockstargames.com/VI", label: "OFFICIAL GAME SITE" },
  { category: "SCI-FI · DYSTOPIA", title: "Altered Carbon: brutal moments & moral questions", description: "GameSpot Universe's scene-by-scene discussion offers a model for accessible retrospective journalism: memorable moments, brutality, and the ethical questions beneath the spectacle.", href: "https://www.youtube.com/watch?v=-DbH9aMJ954", label: "WATCH THE VIDEO" },
  { category: "UNDERGROUND · MUSIC", title: "NOT A TOY: interviews, reviews & profiles", description: "Explore existing coverage of the collective's music, creative process, art, touring, and independent approach.", href: "/adventure/#press", label: "EXPLORE EXISTING PRESS" },
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
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Visitor pathways"><Link href="/adventure/">Fan adventure</Link><Link href="/tour-side-quests/">Tour side quests</Link><Link href="/culture/">Cultural rabbit hole</Link><Link href="/every-day/#makers">Production</Link><Link href="/">Home</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cultural Rabbit Hole", href: "/culture/" }]} />
    <section className="experience-hero">
      <p className="eyebrow">NOT A TOY · FILTHY YUCK! · PLAY IT FORWARD</p>
      <h1>THE CULTURAL<br/><em>RABBIT HOLE.</em></h1>
      <p className="experience-lede">Games, science fiction, music, satire, journalism, and the strange real world that connects them. Follow a story because it interests you—not because it is an ad.</p>
      <div className="hero-actions"><a className="button primary" href="#stories">FOLLOW A STORY ↓</a><Link className="button secondary" href="/adventure/#press">EXPLORE NOT A TOY PRESS ↗</Link></div>
      <p className="disclaimer">Independent editorial discovery by PLAY IT FORWARD. No affiliation or endorsement by the referenced properties or publications is implied.</p>
    </section>
    <section className="quest-intro" id="stories"><p className="eyebrow">START WITH THE SUBJECT</p><h2>THE STORY IS<br/><em>BIGGER THAN THE GAME.</em></h2><p>Explore cultural conversations that intersect with underground music, independent art, comics, and the live experience. Links are starting points—not endorsements or claims of partnership.</p></section>
    <section className="quest-grid">{sources.map((s,i)=><article className="quest-card" key={s.title}><div className="quest-card-head"><span>{s.category}</span><span className="quest-number">0{i+1}</span></div><h3>{s.title}</h3><p>{s.description}</p><a className="quest-link" href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noreferrer" : undefined}>{s.label} ↗</a></article>)}</section>
    <section className="quest-intro"><p className="eyebrow">THE THEMES</p><h2>FICTION.<br/>REALITY.<br/><em>NO CLEAN EXIT.</em></h2><p>Cyberpunk and dystopia often ask who benefits from technology, who gets access, and who pays the price. Punk and underground art have long explored power, inequality, absurdity, and the people outside the polished mainstream. This page connects those conversations without flattening them into a sales pitch.</p></section>
    <section className="route-stops"><p className="eyebrow">PUBLICATION & PLATFORM DISCOVERY</p><h2>FOLLOW THE PEOPLE<br/>COVERING THE CULTURE.</h2><p className="route-note">These are relevant editorial platforms to explore—not a claim that a particular writer has covered NOT A TOY, GTA VI, or Altered Carbon. Individual writers, recent articles, Bluesky posts, and professional contact channels will be researched and verified before outreach.</p><div className="route-cards">{platforms.map(([name,desc,url])=><article className="route-card" key={name}><span className="route-num">MEDIA / CREATOR DISCOVERY</span><h3>{name}</h3><p>{desc}</p><a className="text-link" href={url} target="_blank" rel="noreferrer">VISIT PUBLICATION ↗</a></article>)}</div></section>
    <section className="adventure-map-cta"><p className="eyebrow">FOLLOW THE RABBIT HOLE · THEN FIND THE SHOW</p><h2>FROM THE SCREEN<br/><em>TO THE REAL WORLD.</em></h2><p>Explore the NOT A TOY press library, discover FILTHY YUCK!, listen to the music, or make a city side quest part of your concert day.</p><div className="hero-actions"><Link className="button primary" href="/adventure/#press">EXISTING PRESS & VIDEO ↗</Link><Link className="button secondary" href="/tour-side-quests/">TOUR SIDE QUESTS ↗</Link><Link className="button secondary" href="/filthy-yuck/">FILTHY YUCK! ↗</Link></div></section>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · SELF-PACED" />
  </main>;
}
