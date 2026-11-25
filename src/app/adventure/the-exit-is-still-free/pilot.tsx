"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

type Scene = {
  title: string;
  text: string;
  choices: { label: string; next: string }[];
};

export default function Pilot({ start, scenes }: { start: string; scenes: Record<string, Scene> }) {
  const [current, setCurrent] = useState(start);
  const heading = useRef<HTMLHeadingElement>(null);
  const scene = scenes[current];

  function move(next: string) {
    flushSync(() => setCurrent(next));
    heading.current?.focus();
  }

  return <section className="fy-story-wrap" aria-label="Play the pilot">
    <div className="fy-story-panel">
      <h2 ref={heading} tabIndex={-1}>{scene.title}</h2>
      <p>{scene.text}</p>
      {current === "garden" && <details>
        <summary>Ask PIXIE to repeat the clue</summary>
        <p>The mark on the Room #5 key is the same mark in the garden. Touch the sigil to see where it leads.</p>
      </details>}
      {current === "rebel" && <p><a className="fy-official-link" href="https://www.daddyslittlemortis.com/shop/p/glass-jar-soy-wax-candle">Visit The Rebel’s shop</a></p>}
      <div className="fy-choices">
        {scene.choices.map(({ label, next }) => <button key={label} type="button" onClick={() => move(next)}>{label}</button>)}
      </div>
      {scene.choices.length === 0 && <div className="fy-ending-actions">
        <p>One way to leave another. Walk away from unfinished work and follow what still feels like yours.</p>
        <Link className="button primary" href="/filthy-yuck/">Continue to NOT A TOY and FILTHY YUCK!</Link>
        <Link className="button secondary" href="/adventure/#make-an-adventure">Build your own adventure</Link>
      </div>}
      <div className="fy-story-footer">
        <button type="button" className="fy-small-reset" onClick={() => move(start)}>Restart the pilot</button>
      </div>
    </div>
  </section>;
}
