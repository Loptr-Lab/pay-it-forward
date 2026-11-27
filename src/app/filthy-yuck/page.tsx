"use client";

import Link from "next/link";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";
import { story, storyStart } from "./story";

export default function FilthyYuckPage() {
  const [nodeId, setNodeId] = useState(storyStart);
  const [history, setHistory] = useState<string[]>([]);
  const [showProcess, setShowProcess] = useState(false);
  const node = story[nodeId];

  function choose(next: string) {
    setHistory((current) => [...current, nodeId]);
    setNodeId(next);
  }
  function restart() {
    setNodeId(storyStart);
    setHistory([]);
  }

  return <main className="experience-page fy-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Visitor pathways"><Link href="/adventure/">Fan adventure</Link><Link href="/tour-side-quests/">Tour side quests</Link><Link href="/every-day/#makers">Production</Link><Link href="/">Home</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Fan Adventure", href: "/adventure/" }, { label: "FILTHY YUCK! Story", href: "/filthy-yuck/" }]} />
    <section className="fy-hero">
      <p className="eyebrow">FILTHY YUCK! · INTERACTIVE COMIC SIDE QUEST</p>
      <h1>NOT A SLAVE<br/><em>TO THE MACHINE.</em></h1>
      <p className="experience-lede">A tiny interactive experiment about creative agency. Tools can help. You decide what to make, what to keep, what to reject, and what to pass forward.</p>
      <p className="fy-disclaimer">Independent fan-made prototype—not official comic canon, band activation, or endorsement. Uses no comic artwork; the official comic remains the source of truth.</p>
    </section>
    <section className="fy-story-wrap" aria-label="Interactive story">
      <div className="fy-story-panel">
        <div className="fy-story-meta"><span>CHOICE STORY · PROTOTYPE</span><span>{history.length ? `STEP ${history.length + 1}` : "START"}</span></div>
        <h2>{node.title}</h2>
        <p>{node.text}</p>
        {!node.ending && <div className="fy-choices" role="group" aria-label="Choose what happens next">{node.choices?.map((choice,index)=><button key={choice.next+index} onClick={()=>choose(choice.next)}>{choice.label}<span aria-hidden="true">↗</span></button>)}</div>}
        {node.ending && <div className="fy-ending-actions"><p className="fy-ending-note">THE END OF THIS THREAD. YOUR NEXT MOVE IS YOURS.</p><button className="fy-restart" onClick={restart}>RESTART · EXPLORE ANOTHER CHOICE ↻</button><a className="fy-official-link" href="https://notatoymerch.myshopify.com/products/filthy-yuck-comic" target="_blank" rel="noreferrer">EXPLORE THE OFFICIAL COMIC ↗</a></div>}
        <div className="fy-story-footer"><span>{history.length} choice{history.length===1?"":"s"} made</span><button onClick={restart} className="fy-small-reset">Reset story</button></div>
      </div>
      <aside className="fy-principles">
        <p className="eyebrow">THE HUMAN IS THE CREATIVE DIRECTOR</p>
        <ul><li>Choose the goal.</li><li>Question machine output.</li><li>Keep, change, or reject.</li><li>Respect source IP and permissions.</li><li>Credit collaborators.</li><li>Decide what is worth sharing.</li></ul>
        <button className="fy-process-toggle" onClick={()=>setShowProcess((v)=>!v)} aria-expanded={showProcess}>{showProcess?"HIDE":"SHOW"} THE PRODUCTION NOTES {showProcess?"−":"+"}</button>
        {showProcess && <div className="fy-process-notes"><strong>How this demo was made</strong><p>Human-authored story beats and choices; React state handles branching. No generative model runs in the experience. AI may assist a creator during development, but it is optional and is not the author or authority.</p><p>This is an Ink-inspired branching prototype, not yet compiled with the Ink runtime. The story source is kept separate so it can be ported to Ink and tested as a true Ink project next.</p></div>}
      </aside>
    </section>
    <section className="fy-world-links">
      <p className="eyebrow">FOLLOW YOUR OWN THREAD</p><h2>STORY → SOUND →<br/><em>COMIC / MERCH.</em></h2>
      <p>Choose what you want to explore. Listening and shopping are separate, optional actions—not the price of finishing the story.</p>
      <div className="hero-actions"><a className="button primary" href="https://music.apple.com/us/album/filthy-yuck/6803206084" target="_blank" rel="noreferrer">LISTEN TO FILTHY YUCK! ↗</a><a className="button secondary" href="https://notatoymerch.myshopify.com/products/filthy-yuck-comic" target="_blank" rel="noreferrer">OFFICIAL COMIC ↗</a><a className="button secondary" href="https://notatoymerch.myshopify.com/" target="_blank" rel="noreferrer">MERCH STORE ↗</a></div>
      <p className="fy-note">Official destinations open in a new tab. This prototype does not track clicks, collect personal data, or claim sales/conversion.</p>
    </section>
    <section className="fy-review fy-review-split">
      <div className="fy-review-copy">
        <p className="eyebrow">PUBLIC REVIEW · HELP SHAPE THE NEXT VERSION</p><h2>WHAT SHOULD<br/><em>STAY HUMAN?</em></h2><p>Does this make the creative choices visible? Is the story fun enough to explore? What should be improved before the Ink runtime, comic-specific canon, or additional media are added?</p><a className="button primary" href="https://github.com/Loptr-Lab/pay-it-forward/issues" target="_blank" rel="noreferrer">LEAVE PUBLIC FEEDBACK ↗</a><Link className="button secondary" href="/every-day/#fans">BACK TO THE STORY LIST ↗</Link>
      </div>
      <aside className="fy-review-source" aria-label="Original FILTHY YUCK! Facebook source">
        <p className="eyebrow">ORIGINAL SOURCE · FILTHY YUCK!</p>
        <div className="fy-facebook-placeholder"><p>Original Facebook source embed will appear here.</p><p>Source link needed to embed the correct post without guessing or substituting unrelated content.</p></div>
      </aside>
    </section>
    <SiteDirectoryFooter tagline="INDEPENDENT · ACCESSIBLE · SELF-PACED" />
  </main>;
}
