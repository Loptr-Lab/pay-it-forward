import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RoutingReview from "./RoutingReview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Resilience & Local Creators | PLAY IT FORWARD",
  description: "A practical tour contingency, fan travel, and local creator framework for PLAY IT FORWARD: verified updates, alternatives, creator sustainability, and rights-cleared storytelling.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/tour-resilience/" },
};

const routePressure = [
  { endDate: "2026-11-24", dates: "NOV 23 → 24", route: "Glasgow → Manchester", flag: "CONSECUTIVE SHOW DAYS", note: "No show-day travel buffer. Confirm the overnight, transport mode, load-in, soundcheck and crew call." },
  { endDate: "2026-11-30", dates: "NOV 29 → 30", route: "Paris → Brussels", flag: "CONSECUTIVE SHOW DAYS", note: "Cross-border move with no calendar day between shows. Confirm transport and border/document requirements for the full party and equipment." },
  { endDate: "2026-12-05", dates: "DEC 4 → 5", route: "Prague → Vienna", flag: "CONSECUTIVE SHOW DAYS", note: "Validate the actual travel plan, venue access and production schedule before treating the route as feasible." },
  { endDate: "2026-12-10", dates: "DEC 7 → 10", route: "Berlin → Hamburg → Utrecht → Hamburg", flag: "FOUR CONSECUTIVE SHOW DAYS", note: "Repeated travel and performance load. Consider local crews, content hand-offs, protected rest and contingency coverage." },
  { endDate: "2026-12-07", dates: "DEC 5 → 7", route: "Vienna → Berlin", flag: "ONE CALENDAR DAY BETWEEN", note: "A nominal buffer is not automatically recovery time. Verify travel, sleep, work calls and equipment movement." },
];

const steps = [
  ["1 · VERIFY", "Confirm disruption with the carrier, railway, official venue, promoter or tour manager. Capture timestamp, source and what is confirmed versus uncertain."],
  ["2 · PROTECT PEOPLE", "Check immediate safety, accessibility, medication, food, rest, lodging and document requirements. Do not expose private itinerary or live location publicly."],
  ["3 · CHECK THE DEADLINE", "Identify the critical arrival time: crew call, soundcheck, doors, support, show, equipment hand-off or next departure. Assign one decision owner."],
  ["4 · COMPARE ALTERNATIVES", "Evaluate rebooking, rail, coach, ground transport, alternate airport, split-party travel or a local production substitute. Compare total cost, arrival reliability, safety and fatigue—not just speed."],
  ["5 · ACT + ESCALATE", "Use the authorized booking/production contact. Record decision, costs, confirmation numbers and who has been notified. Do not promise a workaround until confirmed."],
  ["6 · COMMUNICATE", "Publish only verified changes through official channels. Give fans clear choices: updated timing, ticket guidance, local alternatives or remote participation. Never speculate."],
];

export default function TourResiliencePage() {
  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Visitor pathways"><Link href="/adventure/">Fan adventure</Link><Link href="/route/">Tour map</Link><Link href="/tour-side-quests/">Side quests</Link><Link href="/every-day/#makers">Production</Link><Link href="/">Home</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tour Map", href: "/route/" }, { label: "Plan B Tour", href: "/tour-resilience/" }]} />
    <section className="experience-hero">
      <p className="eyebrow">PLAY IT FORWARD · TOUR OPERATIONS + FAN EXPERIENCE</p>
      <h1>THE TOUR.<br/><em>PLAN B.</em></h1>
      <p className="experience-lede">Tour schedules are human systems—not just pins on a map. Resilience means helping the crew, artist, fans and local creators adapt when travel, production, health or timing changes.</p>
      <p className="disclaimer">This is a planning framework, not a live travel-monitoring service or a statement that any listed routing is impossible. Dates are based on the current public tour schedule; routing feasibility must be verified by authorized tour staff.</p>
      <div className="hero-actions"><Link className="button primary" href="/route/">VIEW TOUR MAP ↗</Link><Link className="button secondary" href="/tour-side-quests/">CITY SIDE QUESTS ↗</Link><Link className="button secondary" href="/adventure/#make-an-adventure">BUILD YOUR ADVENTURE ↗</Link></div>
    </section>

    <section className="route-stops"><p className="eyebrow">LONDON · SECRET TRIP</p><h2>THE WOLF&apos;S GAMBIT.</h2><p>Explore Deptford, darts, chess and a budgeted public transit route using the devices you already have.</p><Link className="button primary" href="/tour-resilience/london/">REVEAL THE LONDON PLAN B ↗</Link></section><section className="route-stops">
      <p className="eyebrow">ROUTING REVIEW · ADVISORY FLAGS</p><h2>WHERE THE SCHEDULE<br/>NEEDS A HUMAN CHECK.</h2>
      <p className="route-note">Calendar spacing alone cannot establish feasibility. These flags identify transitions that deserve a routing review—not a prediction of missed flights or a claim that the tour is overbooked.</p>
      <RoutingReview items={routePressure} />
    </section>

    <section className="route-stops">
      <p className="eyebrow">DISRUPTION PLAYBOOK</p><h2>IF THE CONNECTION<br/>DOESN&apos;T HAPPEN.</h2>
      <div className="route-cards">{steps.map(([title, body]) => <article className="route-card" key={title}><p className="eyebrow">{title}</p><p>{body}</p></article>)}</div>
      <p className="route-note"><strong>Pre-tour setup:</strong> assign a decision owner and backup; document traveler/equipment dependencies; identify authorized booking contacts; define arrival deadlines and escalation thresholds; keep emergency, medical and accessibility information private and access-limited.</p>
    </section>

    <section className="route-stops">
      <p className="eyebrow">FAN + CREATOR CONTINGENCY</p><h2>THE SHOW MAY CHANGE.<br/>THE CITY IS STILL HERE.</h2>
      <div className="route-cards">
        <article className="route-card"><h3>Official update</h3><p>One source of truth with timestamp, verified status, ticket/venue instructions and next update time. No rumor amplification.</p></article>
        <article className="route-card"><h3>Local adventure</h3><p>Optional nearby art, record shops, comics, food, quiet spaces or accessible city discovery. No purchase, check-in or pressure to chase the next date.</p></article>
        <article className="route-card"><h3>Remote participation</h3><p>Listen, follow the story, share a rights-cleared local recommendation, or participate asynchronously. A missed show must not make fans feel they failed.</p></article>
        <article className="route-card"><h3>Ticket-holder clarity</h3><p>Link to official ticket and venue guidance. PIF does not invent refund, transfer, rescheduling or entry policies.</p></article>
      </div>
    </section>

    <section className="route-stops">
      <p className="eyebrow">DISCOVERY STRATEGY · NOT A TOY / FILTHY YUCK!</p><h2>DON&apos;T COPY THE<br/>REN PLAYBOOK.</h2>
      <p className="route-note">Reaction-led discovery is not a universal artist-growth formula. The approach developed around REN benefits from an existing YouTube reactor community and a substantial body of reaction, analysis and discussion that can introduce new viewers through trusted creator channels. NOT A TOY currently presents a different discovery landscape: the supplied research indicates that viewership is concentrated in official releases, visualizers, mashups and fan edits, with comparatively few prominent independent reaction/review videos dedicated to the collective. Verify this baseline before outreach; channel counts and view totals change.</p>
      <div className="route-cards">
        <article className="route-card"><h3>REN · Existing reactor ecosystem</h3><p>Reactors are an established audience pathway. Discovery work can identify relevant channels, deepen relationships with creators who already cover the music, and make participation easy without treating every reactor as a cold lead.</p></article>
        <article className="route-card"><h3>NOT A TOY · Build the pathway</h3><p>Do not assume there is a ready-made reactor community waiting. Start from the music and story hooks, identify adjacent creators who cover alternative music, industrial, metal, genre-crossing videos, visual art and music discovery, then test small and measure response.</p></article>
        <article className="route-card"><h3>Official videos are the current anchor</h3><p>Use official releases such as DOOMSDAY HOLIDAY, FILTHY YUCK! tracks and visualizers as the canonical listening/watch destinations. Treat mashups and fan edits as signals of audience crossover—not assets to repost without permission.</p></article>
        <article className="route-card"><h3>Earn the first reactions</h3><p>Offer a concise, honest creator brief: what the collective is, why this release is distinctive, relevant official links, context they may want, and no script or demand for a positive reaction. Prioritize fit and genuine editorial interest over subscriber count.</p></article>
      </div>
      <div className="discovery-prompt"><span>NOT A TOY · REACTOR OUTREACH EXPERIMENT</span><strong>Seed discovery without pretending the community already exists.</strong><p>1. Map a small set of creators who already cover adjacent sounds or visual culture. 2. Review their recent uploads and audience fit manually. 3. Send personalized, low-pressure outreach with one relevant official track and a clear story angle. 4. Track replies, coverage, qualified views, audience comments and downstream visits. 5. Stop or refine based on evidence; do not mass-blast or pay for manufactured reactions.</p><p><strong>Content angles:</strong> genre and sound design; the FILTHY YUCK! visual world; DOOMSDAY HOLIDAY as a gateway; lyric/theme analysis; cross-genre comparisons; and the collective&apos;s independent identity. Creators retain editorial control. Any paid or sponsored placement must be disclosed.</p></div>
      <p className="route-note">PIF&apos;s role is discovery infrastructure and context—not a reaction farm. The tour/local creator program adds city-based storytelling and rights-cleared media while reactor outreach is tested as one channel among several. Do not rely on reactors as the sole strategy or assume the REN model transfers unchanged.</p>
      <p><a className="text-link" href="https://notatoy.komi.io/" target="_blank" rel="noreferrer">NOT A TOY · OFFICIAL LINK ↗</a></p>

      <p className="eyebrow">COLLABORATION · BUILD IN PUBLIC</p><h2>SHARE THE PROCESS.<br/>INVITE PEOPLE IN.</h2>
      <p className="route-note">Make the work visible in useful, bounded stages: what we are testing, what changed, what we learned, what needs local knowledge and how someone can contribute. Build in public should invite collaboration—not expose private travel details, personal information, unfinished rights-sensitive material or operational vulnerabilities.</p>
      <div className="route-cards">
        <article className="route-card"><h3>Public progress notes</h3><p>Publish concise checkpoints: the problem, hypothesis, experiment, outcome, next step and credit. Share sanitized route lessons after decisions—not live itineraries, booking references, lodging or crew movements.</p></article>
        <article className="route-card"><h3>Open calls with clear scope</h3><p>Invite city recommendations, accessibility corrections, creator leads, story angles and feedback. State what is needed, deadline, compensation (if commissioned), attribution and how submissions will be used.</p></article>
        <article className="route-card"><h3>Co-create, don&apos;t extract</h3><p>Offer contributors a choice: suggest, review, co-author, create or simply follow along. Credit contributions, close the loop with what changed, and do not treat public feedback as free labor for commercial deliverables.</p></article>
        <article className="route-card"><h3>Small experiments, public learnings</h3><p>Report aggregate results and what did not work. Keep creator outreach private unless they opt in to public recognition. Do not publish sensitive personal, medical, financial or travel information.</p></article>
      </div>
      <div className="discovery-prompt"><span>BUILD-IN-PUBLIC CHECKPOINT</span><strong>What are we trying? What did we learn? What is open for collaboration?</strong><p>Each update should include a dated status, evidence or source, decision, next action, and a specific invitation. Link to the relevant project page or issue so the public record is useful—not a stream of vague announcements.</p></div>

      <p className="eyebrow">PROPOSED FAN INTERFACE · BUILD YOUR ADVENTURE</p><h2>IF THE TOUR PLAN<br/>GETS STUCK, FIND<br/>YOUR OWN STORY.</h2>
      <p className="route-note">If a show, connection or travel plan changes, use the existing Build Your Adventure tool to turn your city, time, budget, interests and practical needs into an alternative plan. It is a lightweight, self-paced prompt builder—not a travel booking engine or emergency dispatch tool—and works even if you are not attending the show.</p><div className="hero-actions"><Link className="button primary" href="/adventure/#make-an-adventure">BUILD AN ALTERNATIVE PLAN ↗</Link><Link className="button secondary" href="/route/">CHOOSE A TOUR CITY ↗</Link></div>
      <div className="route-cards">
        <article className="route-card"><h3>Start with your situation</h3><p>City or neighborhood, available time, budget (including free), interests, accessibility needs, energy level and whether the show is happening, delayed or uncertain. Avoid collecting precise location or sensitive details unless truly necessary.</p></article>
        <article className="route-card"><h3>Choose an adventure</h3><p>Offer self-guided paths such as music history, street art, games/comics, local food, quiet/low-sensory spaces, free community events or a short walk. Make options conditional on verified hours and availability.</p></article>
        <article className="route-card"><h3>Get a flexible plan</h3><p>Return a few options with estimated cost, duration, accessibility notes, source links, a fallback and an easy way to shorten or skip. Never promise open hours, safety, transit or availability without current verification.</p></article>
        <article className="route-card"><h3>Share or keep it private</h3><p>Let people save, adapt or optionally share their route/story. Sharing is opt-in; no forced check-ins, public live location, purchase requirement or gamified pressure to chase venues.</p></article>
      </div>
      <div className="discovery-prompt"><span>MVP · NOT A LIVE TRAVEL ASSISTANT</span><strong>Prototype a simple form + curated city guide first.</strong><p>Phase 1: test one or two tour cities with a static, source-linked guide and a short preference form. Phase 2: evaluate whether a rules-based adventure generator improves usefulness. Phase 3: only consider AI or live data after user testing, accessibility review, privacy safeguards and a clear maintenance owner. For urgent disruption, direct users to official venue, ticket, carrier and local services.</p></div>

      <p className="eyebrow">LOCAL CREATOR NETWORK</p><h2>LOCAL KNOWLEDGE.<br/>NOT ONE CREATOR<br/>CHASING EVERY DATE.</h2>
      <p className="route-note">Recruit and compensate creators in each tour city for independent, reusable city storytelling. This reduces repeated long-distance travel and gives the project a local voice—even when the tour schedule changes.</p>
      <div className="route-cards route-cards-balanced">
        <article className="route-card"><h3>City story</h3><p>Local music history, art, comics, games, neighborhood context, food, independent venues and creative communities—reported by people who live there.</p></article>
        <article className="route-card"><h3>Before / after the show</h3><p>Short optional guides with transit, accessibility notes, quiet breaks and low-cost or free discoveries. Update when conditions change.</p></article>
        <article className="route-card"><h3>Creator assignments</h3><p>Define deliverable, scope, deadline, compensation, usage, attribution and revisions before work starts. No speculative unpaid labor.</p></article>
        <article className="route-card"><h3>Creator wellbeing</h3><p>Flexible deadlines, async hand-offs, workload limits, clear cancellation fees and no obligation to attend a concert or film a performance.</p></article>
      </div>
      <div className="discovery-prompt discovery-prompt-wide"><span>LOCAL CREATOR BRIEF</span><strong>Make one useful, distinct city story. It should remain valuable even if the show is delayed, moved, cancelled or the audience never attends.</strong><p>Suggested deliverables: a short original video or photo essay, a concise city guide, source links, accessibility/cost notes, creator credit, and optional follow-up. Scope and compensation are agreed in advance.</p></div>
    </section>

    <section className="route-stops route-stops-compact">
      <p className="eyebrow">RIGHTS + TRUST</p><h2>LICENSED.<br/>ATTRIBUTED.<br/>CLEAR.</h2>
      <div className="route-cards">
        <article className="route-card"><h3>Original local work</h3><p>Creator retains ownership. PIF receives only a written, defined license for agreed platforms, term, editing, attribution and compensation.</p></article>
        <article className="route-card"><h3>Official tour footage</h3><p>Use only after permissions are confirmed for artist, venue, production, music, performers and any other applicable rights.</p></article>
        <article className="route-card"><h3>Fan submissions</h3><p>Opt-in consent, clear license scope, removal process and appropriate permission for identifiable people. No automatic rights from tagging or uploading.</p></article>
        <article className="route-card"><h3>Concert audio / video</h3><p>Filming a performance does not automatically authorize publishing copyrighted songs, performance footage or venue material. Rights review before posting.</p></article>
      </div>
      <p className="route-note">Rights status should be tracked as pending, approved, licensed, expired or withdrawn. Never publish an asset whose required permissions are unresolved.</p>
    </section>

    <section className="route-bottom">
      <p className="eyebrow">PIF PRINCIPLE</p><h2>DON&apos;T MAKE PEOPLE<br/><em>CHASE THE TOUR.</em></h2>
      <p>Build an experience that travels through local knowledge, licensed stories and self-paced discovery. Fans can participate without spending, creators can work without burnout, and the tour can change without making the whole project collapse.</p>
      <div className="hero-actions"><Link className="button primary" href="/route/">RETURN TO TOUR MAP ↗</Link><Link className="button secondary" href="/every-day/#makers">CREATOR SUSTAINABILITY ↗</Link></div>
    </section>
    <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>FAN-LED · ACCESSIBLE · SELF-PACED</span><Link href="/">HOME ↑</Link></footer>
  </main>;
}
