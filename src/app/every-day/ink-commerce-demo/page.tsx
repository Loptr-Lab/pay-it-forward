"use client";

import { useState } from "react";
import Link from "next/link";

type Scene = "start" | "music" | "art" | "discovery" | "support";

export default function InkCommerceDemo() {
  const [scene, setScene] = useState<Scene>("start");
  const [history, setHistory] = useState<string[]>([]);
  const choose = (next: Scene) => { setHistory((items) => [...items, scene]); setScene(next); };
  const restart = () => { setScene("start"); setHistory([]); };

  const copy: Record<Scene, { title: string; body: string }> = {
    start: { title: "THE YELLOW DOOR", body: "A door appears at the end of a corridor. Behind it: a creative world. What catches your attention first?" },
    music: { title: "FOLLOW THE SOUND", body: "A song leads you to an independent artist. You explore their catalog, learn their story, and find a direct way to support their work." },
    art: { title: "FOLLOW THE ART", body: "A visual clue leads you into a comic universe. The story, characters, and art invite you to explore what the creator made beyond the first encounter." },
    discovery: { title: "THE WORLD OPENS UP", body: "You came for one thing and discovered another. The next step is an invitation—not a forced checkout. Listen, read, share, or explore the creator's shop." },
    support: { title: "PASS VALUE FORWARD", body: "Direct support could mean listening, sharing an official link, buying music, or choosing a physical product. The story creates discovery; the creator's shop makes the purchase possible." },
  };
  const current = copy[scene];

  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav><Link href="/every-day/">Hello, Every Day</Link><Link href="/adventure/">Adventure</Link><Link href="/">Home</Link></nav></header>
    <section className="experience-hero">
      <p className="eyebrow">INK · INTERACTIVE STORYTELLING · CREATIVE COMMERCE</p>
      <h1>THE YELLOW<br/><em>DOOR.</em></h1>
      <p className="experience-lede">A tiny branching-story prototype: discovery can lead to a creative world, and that world can lead to direct support.</p>
      <p className="disclaimer">Original demonstration. Inspired by branching narrative and Ink workflows; not a reproduction of Inpatient Corridors or its story.</p>
    </section>
    <section className="quest-intro"><p className="eyebrow">YOUR CHOICES CHANGE THE PATH</p><h2>{current.title}</h2><p>{current.body}</p>
      {scene === "start" && <div className="hero-actions"><button className="button primary" onClick={() => choose("music")}>FOLLOW THE MUSIC ↗</button><button className="button secondary" onClick={() => choose("art")}>FOLLOW THE ART ↗</button></div>}
      {(scene === "music" || scene === "art") && <div className="hero-actions"><button className="button primary" onClick={() => choose("discovery")}>EXPLORE THIS WORLD ↗</button><button className="button secondary" onClick={() => choose("support")}>SUPPORT THE CREATOR ↗</button></div>}
      {scene === "discovery" && <div className="hero-actions"><button className="button primary" onClick={() => choose("support")}>SEE HOW SUPPORT WORKS ↗</button><button className="button secondary" onClick={restart}>TRY ANOTHER PATH ↻</button></div>}
      {scene === "support" && <div className="hero-actions"><a className="button primary" href="https://theskinnerbrothers.bandcamp.com/" target="_blank" rel="noreferrer">EXAMPLE · ARTIST BANDCAMP ↗</a><a className="button secondary" href="https://notatoymerch.myshopify.com/products/filthy-yuck-comic" target="_blank" rel="noreferrer">FILTHY YUCK! COMIC SHOP ↗</a><button className="button secondary" onClick={restart}>RESTART THE STORY ↻</button></div>}
      <div className="discovery-prompt"><span>THE DEMONSTRATION</span><strong>Story → discovery → creative identity → optional direct support → measurable commerce.</strong><p>Track visits and purchases separately. A click is not a sale, and the story should never promise a conversion.</p></div>
    </section>
    <section className="quest-intro"><p className="eyebrow">THE INK SOURCE</p><h2>THE STORY IS DATA.</h2><p>Branching narrative can be authored in Ink, then compiled and played with a runtime such as inkjs. This prototype uses React state for the playable choice flow; the accompanying .ink file is the authored story outline. It is a teaching demo, not yet wired to the Ink runtime.</p><p><a href="https://www.inklestudios.com/ink/" target="_blank" rel="noreferrer">Learn Ink from Inkle Studios ↗</a> · <a href="https://50ways.loptrlab.com/CURRICULUM.html" target="_blank" rel="noreferrer">See the interactive narrative curriculum ↗</a></p></section>
    <section className="adventure-map-cta"><p className="eyebrow">APPLY THE IDEA</p><h2>MAKE YOUR OWN<br/><em>DISCOVERY PATH.</em></h2><p>Use music, a short story, a comic, a game, or an interactive experience to connect an audience with a creator's work—then evaluate whether it actually helps them find the artist and products.</p><Link className="button primary" href="/every-day/">BACK TO THE CREATIVE CHALLENGE ↗</Link></section>
    <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>MAKE · OWN · PASS IT ON</span><Link href="/">HOME ↑</Link></footer>
  </main>;
}
