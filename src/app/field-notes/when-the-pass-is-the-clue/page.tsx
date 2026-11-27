import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";

const title = "When the Pass Is the Clue";
const published = "2026-11-26T09:00:00-06:00";
const path = "/field-notes/when-the-pass-is-the-clue/";
const canonical = "https://loptr-lab.github.io/pay-it-forward" + path;
const description = "What two Hunger Games passes taught me about making a souvenir that opens a story.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "article", publishedTime: published },
};

export default function Page() {
  return <main className="field-notes">
    <header className="topbar"><Link className="wordmark" href="/">PIF<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/adventure/">Explore</Link><Link href="/field-notes/">Field notes</Link></nav></header>
    <article className="editorial-article editorial-article-spaced">
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"},{label:title,href:path}]}/>
      <p className="eyebrow">PLAY IT FORWARD · FIELD NOTES 015</p>
      <h1>{title}</h1>
      <p>Dominique Devereaux / I. B. Loud · <time dateTime={published}>November 26, 2026</time></p>
      <p>I still have two Hunger Games passes. The same person got two assignments. I.B. Loud was a mechanic in District 6. Nique Devereaux was a furrier in District 1. These are receipts from the creative history I trace back through Gods of Mayhem. What stuck with me was how quickly a name, a place, and a job gave me something to do in a world I already wanted to enter.</p>
      <h2>Give people a part to play</h2>
      <p>Lionsgate and CafePress connected that experience to print on demand. Their 2012 announcement described a Facebook app that let fans register or claim a physical version of their District ID. The card was free and shipping was separate. The shop also sold licensed merchandise and let fans make their own designs. The clever part was the order of operations. By the time there was a physical object to claim, the fan already had a place in the story.</p>
      <h2>Give the pass a second job</h2>
      <p>Ryan Kazanciyan’s account of designing a <em>Mr. Robot</em> scene describes how a familiar game could carry a deeper puzzle. A viewer could follow the scene immediately, and someone looking closer had more to discover. I wanted the same experience from a transit sticker. It should read as a map from across the table. Pick it up and you might notice that the mark on Room #5 repeats at the Secret Garden.</p>
      <p>Room #5 and the garden come from my stay at the Wolf’s Tavern. The repeated mark belongs to the fiction. In the Ink pilot it becomes the sigil into the Obsidian Realm. PIXIE can point out the repeat if you ask. You decide whether to follow it.</p>
      <h2>The role is yours to write</h2>
      <p>Our proposed Obsidian Transit Pass starts with a name you choose and a role you write. The pass can be a free digital keepsake. A printed sticker would be optional. The pilot is already playable without buying anything. For a personalized physical edition, we still need to verify that the print workflow sends the right artwork with each order and see what fulfillment actually costs.</p>
      <p>That matters on Thanksgiving, with Black Friday around the corner. In the story, the departure board wants to sell you a deadline for becoming yourself. The pass has one line of fine print: <strong>Access revoked. Exit still open.</strong> The test is simple. Can the sticker make you curious even if you never buy one?</p>
      <p><Link className="button primary" href="/adventure/the-exit-is-still-free/">Play The Exit Is Still Free</Link></p>
      <h2>Sources</h2>
      <ul>
        <li><a href="https://www.prnewswire.com/news-releases/cafepress-and-lionsgate-partner-on-official-hunger-games-store-139295238.html">Lionsgate and CafePress announcement, February 2012</a></li>
        <li><a href="https://medium.com/@ryankazanciyan/mr-robot-disassembled-eps3-0-power-saver-mode-h-1f8a3ba101d6">Ryan Kazanciyan, Mr. Robot Disassembled</a></li>
      </ul>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES"/>
  </main>;
}
