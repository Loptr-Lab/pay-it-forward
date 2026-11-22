/* eslint react/no-unescaped-entities: off */
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";
import type { Metadata } from "next";

const articleUrl = "https://loptr-lab.github.io/pay-it-forward/field-notes/from-plan-b-to-plan-a/";

export const metadata: Metadata = {
  title: "From Plan B to Plan A: Letting Fans Help Build the Tour | PLAY IT FORWARD",
  description: "How Plan B Tour, Build Your Adventure, venue voting, and Bandsintown fan opt-ins could help independent artists measure local demand and plan more resilient tours.",
  alternates: { canonical: articleUrl },
  openGraph: { title: "From Plan B to Plan A", description: "Letting fans help build the tour—with transparent demand signals and consent-based opt-ins.", url: articleUrl, type: "article" },
  twitter: { card: "summary", title: "From Plan B to Plan A", description: "Fan-powered tour discovery and resilient planning." },
};

export default function FromPlanBToPlanA() {
  return <main className="field-notes">
    <header className="topbar"><Link className="wordmark" href="/">PIF<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/adventure/">Explore</Link><Link href="/tour-resilience/">Plan B Tour</Link><Link href="/field-notes/">Field Notes</Link></nav></header>
    <article style={{maxWidth:900,margin:"0 auto",padding:"clamp(28px,6vw,80px) 5vw"}}>
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"},{label:"From Plan B to Plan A",href:"/field-notes/from-plan-b-to-plan-a/"}]}/>
      <p className="eyebrow">PLAY IT FORWARD · FIELD NOTES 006</p>
      <p style={{color:"var(--muted)",letterSpacing:".12em",fontSize:".8rem"}}>TOURING · FAN PARTICIPATION · CREATOR INFRASTRUCTURE</p>
      <h1 style={{fontSize:"clamp(3rem,9vw,7rem)",lineHeight:.9,letterSpacing:"-.07em"}}>FROM PLAN B<br/><em style={{color:"var(--accent)"}}>TO PLAN A.</em></h1>
      <p style={{fontSize:"clamp(1.2rem,3vw,1.8rem)",lineHeight:1.5,color:"var(--muted)"}}>What if fans could help an artist make the case for the next tour stop—before the dates are booked?</p>
      <aside style={{border:"1px solid var(--line)",padding:20,margin:"32px 0",background:"var(--surface)"}}><strong>STATUS · RESEARCH AND PRODUCT PROPOSAL</strong><p style={{color:"var(--muted)",lineHeight:1.7}}>Plan B Tour and Build Your Adventure are existing Play It Forward experiences. The artist-led city demand campaign, venue voting, demand reports, and Bandsintown connection described here are proposed extensions—not a live artist campaign or completed integration.</p></aside>
      <h2>Why we made these features</h2>
      <p style={{lineHeight:1.8}}>A plan can fail for ordinary reasons: a show is cancelled, a connection changes, the budget tightens, a venue is inaccessible, or the route no longer makes sense. Plan B Tour approaches that uncertainty from the fan's side. It helps people think through alternatives instead of treating a disrupted plan as the end of the experience.</p>
      <p style={{lineHeight:1.8}}>Build Your Adventure takes a complementary approach. It gives people a way to shape a music-led outing around their own time, budget, interests, accessibility needs, and practical constraints. Both features start from the same belief: participation should be flexible, useful, and accessible—not another obligation.</p>
      <p style={{lineHeight:1.8}}>The next question is whether those principles can work upstream, while an artist and their team are still deciding where to tour.</p>
      <h2>What the road asks of an independent artist</h2>
      <p style={{lineHeight:1.8}}>A road update supplied for this editorial review describes a 22-show run across the United States, two music videos filmed while travelling, and recording during a ten-hour drive home. It is a useful reminder that touring momentum is not only a chart position or a stream count: it also depends on the work artists and crews sustain between cities, the content created on the road, and the ability to keep making music while moving.</p>
      <p style={{lineHeight:1.8}}>For a future artist-authorized pilot, Play It Forward could help connect those parts of the story: verified announced dates, local fan discovery, optional city-interest signals, and practical pre-show adventures. The campaign should help fans understand and support a real touring cycle—not imply that a vote books a show or that the project has access to an artist's private analytics.</p>
      <p style={{lineHeight:1.8,color:"var(--muted)",fontSize:".9rem"}}>Editorial sourcing note: the road details above come from a user-supplied social-story video and have not been independently verified. A separate supplied streaming screenshot displays large Spotify figures, but the visible track/title artwork does not clearly establish Token as the credited artist; those numbers are therefore not attributed to Token here.</p>
      <h2>From helping fans adapt to helping artists plan</h2>
      <p style={{lineHeight:1.8}}>An artist can announce a proposed tour campaign before any dates are confirmed. Fans nominate cities, indicate where they could realistically travel, and vote among suitable venue options. The campaign can surface geographic clusters and local enthusiasm that may help a booking team decide which conversations are worth pursuing.</p>
      <ol style={{lineHeight:1.9}}><li><strong>Discover:</strong> invite fans to nominate cities and nearby alternatives.</li><li><strong>Compare:</strong> publish vetted venue choices with capacity bands, accessibility notes, location, and age restrictions where known.</li><li><strong>Participate:</strong> let fans vote and separately state whether they might attend at a clearly stated price range.</li><li><strong>Share:</strong> publish transparent city summaries that fans can circulate to local communities.</li><li><strong>Plan:</strong> help the artist's team compare demand clusters, travel distances, venue fit, and possible routing scenarios.</li></ol>
      <p style={{lineHeight:1.8}}>A vote is not a ticket sale, a binding commitment, or a guarantee that a show will happen. A useful report keeps those signals separate: unique participants, raw votes, opt-in subscriptions, stated attendance intent, and completed ticket purchases are different measures.</p>
      <h2>Why Bandsintown belongs in the picture</h2>
      <p style={{lineHeight:1.8}}>Bandsintown's artist API can return artist information and event listings, including dates, venue and location details, and ticket or event links. Its documented calls to action connect fans to artist and event actions such as Follow, RSVP, and Notify Me.</p>
      <p style={{lineHeight:1.8}}>Its separate fan opt-in documentation describes five actions: Follow, Request a Show, Set Reminder, Notify Me, and Waitlist. Most relevant to this proposal is <strong>Play My City</strong>: fans can tell an artist where they'd like to see them perform and subscribe to updates about new shows. This offers a native, permission-based destination for an artist's city-interest campaign.</p>
      <p style={{lineHeight:1.8}}>Play It Forward should not recreate or collect Bandsintown's opt-in contact data. Instead, it can explain the campaign, host its own clearly disclosed city and venue participation, and link to the artist's Bandsintown opt-in flow when the artist has configured it. The fan chooses whether to follow or subscribe; voting alone must never silently subscribe someone.</p>
      <ul style={{lineHeight:1.9}}><li><strong>Play It Forward:</strong> city nominations, venue voting, accessibility and local context, scenario planning, and public demand summaries.</li><li><strong>Bandsintown:</strong> artist identity and event data, artist following, Play My City, reminders, Notify Me, RSVP, and Waitlist links.</li><li><strong>Artist and booking team:</strong> venue availability, capacity, costs, promoter relationships, routing decisions, and final show confirmation.</li></ul>
      <h2>What the negotiation report could show</h2>
      <p style={{lineHeight:1.8}}>A useful artist-facing report would summarize participating cities, unique and repeat participation, venue preferences, price-range interest, nearby-city overlap, and opt-in conversion only where the artist or platform provides an aggregate, authorized measure. It should show the collection period, methodology, and limitations beside the numbers.</p>
      <p style={{lineHeight:1.8}}>This evidence can make a conversation with a promoter or venue more informed. It cannot replace a proper offer, venue hold, capacity assessment, ticketing forecast, or the artist's own financial model. Public poll counts should never be presented as verified demand.</p>
      <h2>Build it in stages</h2>
      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
        <div style={{border:"1px solid var(--line)",padding:20}}><h3>01 · Foundation</h3><p style={{lineHeight:1.7,color:"var(--muted)"}}>Document the data model, privacy rules, voting integrity, moderation, accessible venue fields, and static campaign prototype.</p></div>
        <div style={{border:"1px solid var(--line)",padding:20}}><h3>02 · Bandsintown links</h3><p style={{lineHeight:1.7,color:"var(--muted)"}}>Add artist-configured Follow and Play My City links, then event-specific RSVP, Notify Me, and Waitlist links where valid IDs exist.</p></div>
        <div style={{border:"1px solid var(--line)",padding:20}}><h3>03 · Demand pilot</h3><p style={{lineHeight:1.7,color:"var(--muted)"}}>Run an artist-neutral demonstration with sample data, city nominations, venue voting, and an exportable report.</p></div>
        <div style={{border:"1px solid var(--line)",padding:20}}><h3>04 · Verified integration</h3><p style={{lineHeight:1.7,color:"var(--muted)"}}>After an artist authorizes access and credentials are configured, test live artist and event data, attribution, opt-in destinations, and reporting.</p></div>
      </section>
      <h2>What remains unresolved</h2>
      <ul style={{lineHeight:1.9}}><li>Bandsintown's documented public flows do not establish that Play It Forward can read individual opt-in records or export a fan contact list.</li><li>Venue availability, rental costs, capacity, and booking terms need independent sources or direct venue confirmation.</li><li>Voting needs rate limits, abuse controls, transparent eligibility, and a clear policy for duplicate or coordinated participation.</li><li>Price-intent questions must be framed as estimates, not deposits or purchase commitments.</li><li>Artist-specific API keys and any phone opt-in signature material must not be committed to a public repository. The current GitHub Pages deployment is static, so it cannot safely hold private credentials or run a secret-backed API proxy.</li></ul>
      <aside style={{borderLeft:"4px solid var(--accent)",padding:"12px 20px",margin:"40px 0",background:"var(--surface)"}}><strong>THE PRINCIPLE</strong><p style={{lineHeight:1.7}}>Fans can help demonstrate where a show might matter. Artists retain control over whether to tour, where to play, what data to use, and how to negotiate. Participation is voluntary, accessible, transparent, and never a promise of a performance.</p></aside>
      <h2>Sources and implementation notes</h2>
      <ul style={{lineHeight:1.9}}><li><a href="https://help.artists.bandsintown.com/en/articles/9186477-api-documentation" target="_blank" rel="noreferrer">Bandsintown for Artists · API documentation</a></li><li><a href="https://help.artists.bandsintown.com/en/articles/9186761-api-for-fan-opt-ins" target="_blank" rel="noreferrer">Bandsintown for Artists · API for fan opt-ins</a></li><li><Link href="/tour-resilience/">Play It Forward · Plan B Tour</Link></li><li><Link href="/adventure/">Play It Forward · Build Your Adventure</Link></li></ul>
      <p style={{color:"var(--muted)",fontSize:".9rem"}}>Editorial note: Token / Never Too Different may serve as an illustrative case discussion, but this article does not imply contact, endorsement, affiliation, access to private data, or an active campaign. Any artist example requires their authorization before use as a live pilot.</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:32}}><a className="button primary" href="/tour-resilience/">EXPLORE PLAN B TOUR ↗</a><Link className="button secondary" href="/adventure/">BUILD AN ADVENTURE ↗</Link></div>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES"/>
  </main>;
}
