/* eslint react/no-unescaped-entities: off */
import Link from "next/link";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";
import Breadcrumbs from "../../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "After the Momentum: What an Independent Tour Can Build | PLAY IT FORWARD",
  description: "Field notes on artist momentum, touring, direct audience relationships, and the next tier of independent infrastructure—using Token and Never Too Different as a discussion case, not a pitch.",
  openGraph: { title: "After the Momentum", description: "What an independent touring artist can build beyond the next release.", url: "https://loptr-lab.github.io/pay-it-forward/field-notes/after-the-momentum/", type: "article" },
  twitter: { card: "summary", title: "After the Momentum", description: "Independent artist touring and audience infrastructure." },
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/field-notes/after-the-momentum/" },
};

const articleUrl = "https://loptr-lab.github.io/pay-it-forward/field-notes/after-the-momentum/";

export default function AfterTheMomentum() {
  return <main className="field-notes">
    <header className="topbar">
      <Link className="wordmark" href="/">PIF<span>✳</span></Link>
      <nav aria-label="Main navigation"><Link href="/adventure/">Explore</Link><Link href="/tour-side-quests/">Tour side quests</Link><Link href="/every-day/#makers">Production</Link><Link href="/field-notes/">Field notes</Link></nav>
    </header>
    <article className="editorial-article editorial-article-spaced">
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"},{label:"After the Momentum",href:"/field-notes/after-the-momentum/"}]} />
      <p className="eyebrow">PLAY IT FORWARD · FIELD NOTES 001</p>
      <p className="editorial-kicker">INDEPENDENT MUSIC · TOURING · AUDIENCE INFRASTRUCTURE</p>
      <h1 className="editorial-title-wide">AFTER THE<br/><em className="editorial-accent">MOMENTUM.</em></h1>
      <p className="editorial-lede-fluid">What does an independent artist build when the audience is already there—and the next move is bigger than another release?</p>
      <div className="editorial-card editorial-card-surface editorial-card-spaced">
        <strong>CASE DISCUSSION · TOKEN / NEVER TOO DIFFERENT</strong>
        <p className="editorial-muted editorial-line-relaxed">A point-in-time strategic thought experiment prompted by the artist's touring and release cycle. This is independent commentary—not a verified campaign audit, insider information, affiliation, endorsement, or proposal sent to the artist or label.</p>
      </div>
      <h2>Two artists. Different starting lines.</h2>
      <p className="editorial-line-open">An emerging touring artist may need to turn first-time discovery into repeat listeners, direct relationships, and a reason to come back. An established independent artist can face a different question: how does existing momentum compound—and how does the infrastructure around the artist become more valuable over time?</p>
      <p className="editorial-line-open">That distinction matters. The same playbook should not be handed to artists at different stages. Touring is not only a performance schedule; it can be a recurring opportunity to learn what fans respond to, strengthen local connections, and create durable assets from each city.</p>
      <h2>The tour as a platform—not just a route</h2>
      <ul className="editorial-line-loose">
        <li><strong>Before each city:</strong> give fans a reason to discover the music, share local recommendations, and opt into updates.</li>
        <li><strong>At the show:</strong> create accessible, voluntary ways to participate beyond buying a ticket or merch.</li>
        <li><strong>After the show:</strong> publish a city chapter—recap, fan-created work (with permission), live moments, and the next stop.</li>
        <li><strong>Between releases:</strong> keep the story alive with behind-the-scenes material, collaborations, and the creative process.</li>
        <li><strong>Across the label:</strong> let the infrastructure introduce other artists when it genuinely fits, without turning every fan interaction into an ad.</li>
      </ul>
      <h2>Three possible directions</h2>
      <section className="editorial-grid editorial-grid-cards">
        <div className="editorial-card"><h3>Reach outward</h3><p className="editorial-muted editorial-line-relaxed">Broader press, festival opportunities, strategic collaborations, and distribution partnerships. Expansion can help—but protect the direct connection and creative control that made the audience.</p></div>
        <div className="editorial-card"><h3>Build the independent ecosystem</h3><p className="editorial-muted editorial-line-relaxed">A label identity supported by releases, touring, merch, community, and artist-to-artist discovery. The comparison is structural, not a suggestion to copy another label.</p></div>
        <div className="editorial-card"><h3>Invite participation</h3><p className="editorial-muted editorial-line-relaxed">Fan creativity, city chapters, opt-in community and an archive that lets people contribute to the culture—not just consume campaign content.</p></div>
      </section>
      <h2>What Play It Forward is exploring</h2>
      <p className="editorial-line-open">Play It Forward is testing a small version of this idea from the fan side: music-led discovery, self-paced city adventures, creative participation, and accessible alternatives. It is a prototype and research practice—not a finished touring service, label tool, or official artist integration.</p>
      <p className="editorial-line-open">The useful question for any artist is not “Should you use our platform?” It is: <strong>What would make the next tour stop keep creating value for the artist, the fans, and the local creative community after the van leaves?</strong></p>
      <h2>What we would measure</h2>
      <ul className="editorial-line-loose"><li>Opt-in direct audience growth, with consent and transparent data practices.</li><li>Repeat engagement between tour dates—not just a one-day spike.</li><li>Fan participation and creator credit, not volume extracted from unpaid labor.</li><li>Accessible participation options and meaningful remote paths.</li><li>Evidence of artist benefit: audience retention, useful content, local relationships, and sustainable workload.</li></ul>
      <aside className="editorial-callout editorial-callout-spaced"><strong>OUR POSITION</strong><p className="editorial-line-relaxed">Independent artists do not owe fans an always-on machine. Participation should be optional, accessible, rights-aware, and designed to serve the artist's goals—not create another burden.</p></aside>
      <p className="editorial-note">Research note: this article is a strategic framework, not a live chart comparison, tour audit, or claim about Token's business decisions. Specific chart positions, ticket sales, label arrangements, and campaign performance require dated, independently verified sources.</p>
      <div className="editorial-actions">
        <a className="button secondary" href={`https://bsky.app/intent/compose?text=${encodeURIComponent("Field Notes from Play It Forward: After the Momentum—what can an independent tour build beyond the show? "+articleUrl)}`} target="_blank" rel="noreferrer">DISCUSS ON BLUESKY ↗</a>
        <Link className="button secondary" href="/every-day/">EXPLORE THE PILOT LAB ↗</Link>
        <Link className="button primary" href="/tour-side-quests/">TRY A FAN ADVENTURE ↗</Link>
      </div>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES" />
  </main>;
}
