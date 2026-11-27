/* eslint react/no-unescaped-entities: off */
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";
import type { Metadata } from "next";

const canonical = "https://loptr-lab.github.io/pay-it-forward/field-notes/one-billion-mission/";

export const metadata: Metadata = {
  title: "A Number I Lost, A Mission I Found | Play It Forward",
  description: "A lost signup email from Chris Do's 1 Billion Mission becomes a lens for the journey from creative education to ownership, independence, and infrastructure.",
  alternates: { canonical },
  openGraph: {
    title: "A Number I Lost, A Mission I Found",
    description: "The mission to help creatives make a living doing what they love—without losing their soul—keeps coming into focus.",
    url: canonical,
    type: "article",
  },
};

export default function Page() {
  return <main>
    <header className="topbar"><Link className="wordmark" href="/">PIF<span>✳</span></Link><nav><Link href="/field-notes/">Field Notes</Link><Link href="/adventure/">Explore</Link></nav></header>
    <article className="editorial-article">
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"},{label:"A Number I Lost, A Mission I Found",href:"/field-notes/one-billion-mission/"}]}/>
      <p className="eyebrow">FIELD NOTES 012 · CREATIVE INDEPENDENCE · THE JOURNEY</p>
      <h1 className="editorial-title">A NUMBER I LOST.<br/><em>A MISSION I FOUND.</em></h1>
      <p className="editorial-lede">Years ago, I signed up for Chris Do and <a href="https://thefutur.com/our-story">The Futur&apos;s 1 Billion Mission</a>. Somewhere in Gmail is the confirmation—and, apparently, my number. I can't find either. But the idea has become clearer with time.</p>

      <p>The mission was simple to say and difficult to accomplish: help one billion people make a living doing what they love, without losing their soul. The work around it—creative business, pricing, positioning, marketing, finding clients, and learning to value creative labor—was never just about getting better at selling. It was about making creative work sustainable.</p>

      <p>I remember signing up. I remember believing in the premise. I don't remember my participant number, and the email has disappeared into years of Gmail. That's a small mystery, not the point. The point is that the question has stayed with me while the shape of the answer has changed.</p>

      <h2>Making a living is only part of the equation</h2>
      <p>Learning to price work, find clients, communicate value, and build an audience matters. But a creative can learn all of those skills and still be dependent on systems they don't control: the platform that hosts their portfolio, the marketplace that sets the rules, the distributor that holds the relationship, the algorithm that determines visibility, or the service that can change its terms overnight.</p>
      <p>Creative independence is not simply a revenue target. It is also a question of ownership, agency, and resilience. What do you own when the work is finished? Can you move your audience relationship? Can you publish without permission from a gatekeeper? Can you choose the tools and services you need without surrendering the underlying work?</p>

      <h2>From education to infrastructure</h2>
      <p>That is where the journey we're documenting through Play It Forward and Loptr Lab has led. We are connecting the dots between learning a craft, making something worth sharing, understanding rights and ownership, building a home for the work, publishing it, finding audiences, and getting paid.</p>
      <p>Training is one part of that system. Creative business knowledge is another. So are open publishing standards, creator-controlled infrastructure, portable identity, direct relationships with listeners and fans, and the practical tools that help someone move from an idea to a sustainable practice.</p>
      <p>We are not trying to build another course that teaches someone how to become a better tenant of somebody else's platform. We want to help people become capable creators who can choose the platforms and services they use—and leave when those choices stop serving them.</p>

      <h2>Ownership is not isolation</h2>
      <p>Independence does not mean doing everything alone. Artists need collaborators, educators, administrators, distributors, communities, audiences, and sometimes labels or service providers. The question is whether those relationships support the creator's agency or quietly replace it.</p>
      <p>A good service earns its place by doing something useful. A good infrastructure layer makes it easier to create, protect, publish, distribute, and sustain the work. A healthy ecosystem makes those pieces interoperable and replaceable, so one relationship does not become a single point of failure.</p>

      <h2>The mission, in practical terms</h2>
      <p>One billion people making a living doing what they love, without losing their soul, is an enormous human ambition. Our contribution is smaller and more concrete: document the real steps, costs, tradeoffs, and experiments that help a creative person move toward independence.</p>
      <ul>
        <li><strong>Learn:</strong> develop the craft and the business skills needed to make work and communicate its value.</li>
        <li><strong>Create and own:</strong> retain the files, rights, identity, and records that make the work yours.</li>
        <li><strong>Host and publish:</strong> establish a durable home that is not tied to one platform's permission.</li>
        <li><strong>Connect and distribute:</strong> reach people through multiple networks, communities, and channels.</li>
        <li><strong>Sustain:</strong> build revenue and relationships without sacrificing creative agency.</li>
      </ul>
      <p>Our independent contribution focuses on music: help DIY artists sustain a livelihood while retaining creative control. <Link href="/field-notes/the-art-of-staying-independent/">The Art of Staying Independent</Link> examines different artist choices; <Link href="/music/devour/">DEVOUR</Link> demonstrates how small, organic acts of discovery can support complementary audiences. This is not a finished blueprint. It's the direction our field notes, pilots, and projects are helping us test in public. The point is to turn philosophy into working paths—and to be honest about where the path is still rough.</p>

      <h2>And the number?</h2>
      <p>Maybe the email will turn up. Maybe someone at The Futur can find the record. I would love to recover the number—not as a credential, but as a breadcrumb connecting an old commitment to the work happening now.</p>
      <p>In the meantime, the mission is no longer just something I signed up to hear about. It has become a design constraint for what we're building: creative independence should be practical, accessible, and supported by infrastructure that respects the person doing the work.</p>
      <p><strong>Make a living doing what you love. Keep your soul. And, where possible, own the means by which your work reaches the world.</strong></p>

      <aside className="editorial-callout">
        <strong>Continue the journey</strong>
        <p>Explore the <Link href="/field-notes/">Play It Forward Field Notes</Link> and the wider <a href="https://atmosphere.loptrlab.com/">Loptr Lab Atmosphere</a> work on creative ownership, open infrastructure, and independent publishing.</p>
      </aside>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES"/>
  </main>;
}
