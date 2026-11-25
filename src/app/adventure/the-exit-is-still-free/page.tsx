import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Pilot from "./pilot";

export const metadata = {
  title: "The Exit Is Still Free",
  description: "Room #5, a secret garden, and one playable way to leave another.",
};

export default function PilotPage() {
  const source = readFileSync(join(process.cwd(), "src/app/adventure/the-exit-is-still-free/pilot.ink"), "utf8");
  // This pilot uses Ink knots, text, and direct choice diverts. Read that subset
  // at build time so the static preview and the Ink source share the same script.
  const [entry, ...knots] = source.trim().split(/^=== (\w+) ===\n/gm);
  const start = entry.trim().match(/^-> (\w+)$/)?.[1];
  const scenes: Record<string, { title: string; text: string; choices: { label: string; next: string }[] }> = {};
  for (let i = 0; i < knots.length; i += 2) {
    const [title, text, ...lines] = knots[i + 1].trim().split("\n");
    const choices = lines.flatMap((line) => {
      if (line === "-> END") return [];
      const choice = line.match(/^\* \[(.+)\] -> (\w+)$/);
      if (!choice) throw new Error(`Unsupported pilot Ink line: ${line}`);
      return [{ label: choice[1], next: choice[2] }];
    });
    scenes[knots[i]] = { title, text, choices };
  }
  if (!start || !scenes[start] || Object.values(scenes).some((scene) => scene.choices.some(({ next }) => !scenes[next]))) {
    throw new Error("The pilot contains an unresolved Ink divert.");
  }

  return <main className="experience-page fy-page">
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Fan Adventure", href: "/adventure/" }, { label: "The Exit Is Still Free", href: "/adventure/the-exit-is-still-free/" }]} />
    <section className="fy-hero">
      <p className="eyebrow">50 Ways to Leave Another · Play It Forward pilot</p>
      <h1>The Exit Is Still Free</h1>
      <p className="experience-lede">Start in Room #5. Follow the clues. Decide when to leave.</p>
      <p>Room #5 and the Secret Garden come from a real stay. The portal and everything beyond it are fiction. Play the full route here, or use the <Link href="/tour-resilience/london/">London side quest</Link> to explore the area in person. No booking, purchase or venue access is needed to finish.</p>
    </section>
    <Pilot start={start} scenes={scenes} />
  </main>;
}
