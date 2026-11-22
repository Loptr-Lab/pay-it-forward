/* eslint react/no-unescaped-entities: off */
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Plan B to Plan A: Letting Fans Help Build the Tour | Play It Forward",
  description: "How fan-led city and venue discovery, tour resilience, and a Bandsintown event-data integration could help artists test demand before committing to the road.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/field-notes/from-plan-b-to-plan-a/" },
  openGraph: {
    title: "From Plan B to Plan A: Letting Fans Help Build the Tour",
    description: "A practical proposal for fan-powered tour discovery and independent artist planning.",
    url: "https://loptr-lab.github.io/pay-it-forward/field-notes/from-plan-b-to-plan-a/",
    type: "article",
  },
  twitter: { card: "summary", title: "From Plan B to Plan A", description: "Letting fans help artists build a smarter tour." },
};

export default function Page() {
  return <main>
    <header className="topbar"><Link className="wordmark" href="/">PIF<span>✳</span></Link><nav><Link href="/field-notes/">Field Notes</Link><Link href="/tour-resilience/">Plan B Tour</Link><Link href="/adventure/">Build Your Adventure</Link></nav></header>
    <article style={{maxWidth:900,margin:"auto",padding:"5vw"}}>
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"},{label:"From Plan B to Plan A",href:"/field-notes/from-plan-b-to-plan-a/"}]}/>
      <p className="eyebrow">FIELD NOTES 007 · LIVE MUSIC · FAN PARTICIPATION · TOUR INFRASTRUCTURE</p>
      <h1 style={{fontSize:"clamp(3rem,8vw,6.5rem)",lineHeight:.9}}>FROM PLAN B<br/>TO <em>PLAN A.</em></h1>
      <p style={{fontSize:"1.35rem",lineHeight:1.6,color:"var(--muted)"}}>What if fans could help an artist make the case for a city before the tour is booked—and help everyone adapt when the plan changes?</p>

      <p>Tour planning is usually invisible to the audience until dates are announced. Artists, managers, agents, promoters and venues weigh routing, capacity, guarantees, travel, production, local demand and risk. Fans are often asked to react after the decisions have been made. Play It Forward is exploring a complementary approach: invite fans into the discovery stage, turn that interest into transparent planning signals, and keep a flexible Plan B when circumstances change.</p>

      <h2>Two existing ideas, one larger system</h2>
      <p><Link href="/tour-resilience/">Plan B Tour</Link> began as a resilience framework: when travel, production, timing or a show changes, help artists, crews and fans understand verified updates and practical alternatives. It is a planning guide, not a live travel-monitoring or emergency service.</p>
      <p><Link href="/adventure/">Build Your Adventure</Link> is the fan-facing participation side: a self-paced way to explore music, cities and creative experiences at a person's own pace. It does not require a ticket, purchase or official artist participation.</p>
      <p>Together, they suggest a broader possibility. Plan B helps people adapt after a decision or disruption. A fan-powered Plan A could help artists understand where interest exists before they commit.</p>

      <h2>From social poll to useful demand signals</h2>
      <p>A single “Which city should we play?” poll is easy to share but weak evidence on its own. A useful pilot would distinguish several voluntary signals:</p>
      <ul>
        <li><strong>City interest:</strong> I would like this artist to play in this city or region.</li>
        <li><strong>Venue preference:</strong> Of the suitable options presented, this is where I would prefer to attend.</li>
        <li><strong>Attendance consideration:</strong> I would seriously consider attending if a date were announced.</li>
        <li><strong>Price-range interest:</strong> I would consider a ticket within a clearly stated price band.</li>
        <li><strong>Notification opt-in:</strong> I want an update if a real event is announced.</li>
      </ul>
      <p>These are not ticket sales, deposits, verified purchase commitments or guarantees of attendance. Reports should show the question asked, collection window, geography, unique-participant methodology and limitations. Avoid double-counting, bots, misleading totals and the suggestion that a fan vote obligates an artist or venue.</p>

      <h2>How a fan-powered tour campaign could work</h2>
      <ol>
        <li><strong>Open a campaign.</strong> The artist or authorized team defines the geographic scope, dates, participation window and what decisions are genuinely open.</li>
        <li><strong>Collect city nominations.</strong> Fans select a city or region, with nearby alternatives where practical. Do not request public home addresses or precise live locations.</li>
        <li><strong>Shortlist appropriate venues.</strong> The team checks capacity, accessibility, age restrictions, production, costs, availability and local promoter relationships before asking fans to compare options.</li>
        <li><strong>Gather intent, not just likes.</strong> Offer optional attendance and price-range questions, clearly separated from a vote. Explain that no show or ticket offer is confirmed.</li>
        <li><strong>Build a decision report.</strong> Summarize interest by city and venue, note data quality and uncertainty, and compare demand with routing and break-even assumptions supplied by the artist's team.</li>
        <li><strong>Close the loop.</strong> Publish what was decided, what was not possible and why. If a show is confirmed, link to the official event and ticket source. If plans change, Plan B provides the resilience path.</li>
      </ol>

      <h2>Where Bandsintown fits</h2>
      <p><a href="https://help.artists.bandsintown.com/en/articles/9186477-api-documentation" target="_blank" rel="noreferrer">Bandsintown's artist API documentation</a> describes two useful read-oriented data sets: artist information (including the artist page, photo and follower count) and artist events (including date/time, venue and location, ticket links, lineup, description, title and event-page link). The API can return upcoming events, past events, all events or a date range.</p>
      <p>Its documented fan calls to action are also relevant. Event URLs can be used for RSVP; when an event has no ticket offer, the documented Notify Me link lets a fan request an update when ticket links are added. Artist pages can link to Track. These actions can connect the Play It Forward experience to an artist's existing Bandsintown presence instead of rebuilding event reminders.</p>
      <p><strong>Important boundary:</strong> the documentation does not describe a fan venue-polling system, creation of proposed tour dates, venue availability or rental pricing, verified willingness to buy, or promoter negotiation workflows. Those would be Play It Forward capabilities or data supplied by authorized partners—not Bandsintown API features.</p>

      <h2>Proposed integration boundary</h2>
      <ul>
        <li><strong>Bandsintown:</strong> artist identity and public profile, existing event data, official event links, ticket links, and the documented Track / RSVP / Notify Me destinations.</li>
        <li><strong>Play It Forward:</strong> campaign configuration, city nominations, venue shortlists, preference collection, consent, aggregate reporting, and resilience scenarios.</li>
        <li><strong>Artist / booking team:</strong> approval of campaign scope, venue suitability, capacity and cost data, routing constraints, commercial assumptions, and final booking decisions.</li>
      </ul>
      <p>The first integration should be read-only and link-based. Before connecting a live account, confirm current API access requirements, permitted use, attribution, rate limits, caching rules and any applicable terms with Bandsintown. The public documentation shows an app ID in its examples; no app ID, API key or account credential is configured in this prototype. Do not put private credentials in browser code. If a server-side proxy becomes necessary, keep secrets server-side and request only the data needed.</p>

      <h2>What exists, what is proposed, what is needed</h2>
      <div style={{border:"1px solid var(--line)",padding:20,background:"var(--surface)",margin:"24px 0"}}>
        <p className="eyebrow">EXISTS IN PLAY IT FORWARD TODAY</p>
        <ul><li>Plan B Tour resilience framework and disruption playbook.</li><li>Build Your Adventure fan experience and self-paced city discovery concept.</li><li>Tour map, city side quests and Field Notes editorial foundation.</li></ul>
        <p className="eyebrow">PROPOSED — NOT YET LIVE</p>
        <ul><li>Artist campaign pages, city nominations and venue voting.</li><li>Attendance and price-range intent signals.</li><li>Aggregated demand reports and tour-routing scenarios.</li><li>Bandsintown artist/event data connection and event CTA links.</li></ul>
        <p className="eyebrow">REQUIRED BEFORE A REAL PILOT</p>
        <ul><li>Artist/management permission and an identified campaign owner.</li><li>Bandsintown API access confirmation and compliant integration setup.</li><li>Backend storage, anti-abuse controls, privacy notice, retention/deletion rules and moderation.</li><li>Venue shortlist and operational facts verified by the artist's team.</li><li>Accessible user testing and clear reporting methodology.</li></ul>
      </div>

      <h2>A Token-shaped example, not an endorsement</h2>
      <p>Consider an artist with an established audience but an uncertain next routing plan. A hypothetical campaign could invite fans to nominate cities, compare a vetted shortlist of venues and opt into updates. The resulting report might help the artist's team prioritize conversations with local promoters. Token is an illustrative case for the question—not a partner, participant or endorsed user of this concept. No campaign, relationship or tour plan is being represented as real.</p>

      <h2>Make the evidence useful—and honest</h2>
      <p>A demand report can support a conversation; it cannot replace a promoter's market knowledge, a venue's calendar, a tour budget or actual ticket transactions. A strong product would make uncertainty visible, give fans meaningful but bounded participation, protect their data, and return value to the community with a clear account of what happened.</p>
      <p>The point is not to turn fans into unpaid booking agents. It is to give them a voluntary way to express where they want the music to travel—and give artists a better-informed starting point for deciding whether the road makes sense.</p>

      <aside style={{borderLeft:"4px solid var(--accent)",padding:20,background:"var(--surface)",marginTop:32}}>
        <strong>Explore the working foundations</strong>
        <p><Link href="/tour-resilience/">Plan B Tour ↗</Link> · <Link href="/adventure/">Build Your Adventure ↗</Link> · <Link href="/field-notes/touring-gap/">The Touring Gap ↗</Link> · <Link href="/field-notes/fan-participation/">From Audience to Participant ↗</Link></p>
        <p><a href="https://help.artists.bandsintown.com/en/articles/9186477-api-documentation" target="_blank" rel="noreferrer">Bandsintown API documentation ↗</a></p>
      </aside>
      <p style={{color:"var(--muted)",fontSize:".9rem",marginTop:28}}>Editorial note: This is an independent product proposal and research discussion. Play It Forward is not affiliated with or endorsed by Bandsintown or Token. API capabilities and terms should be reconfirmed before implementation.</p>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES"/>
  </main>;
}
