"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

type HelpLink = { label: string; href: string };
type HelpContext = { title: string; message: string; links: HelpLink[] };

const contexts: Array<{ match: (path: string) => boolean; help: HelpContext }> = [
  {
    match: (path) => path.startsWith("/tour-side-quests"),
    help: {
      title: "Make the city part of the show",
      message: "These are optional, self-paced ideas around tour stops. Start with Glasgow, check the practical details, and skip anything that does not work for your day.",
      links: [{ label: "Glasgow side quests", href: "/tour-side-quests/#glasgow" }, { label: "All tour stops", href: "/route/" }],
    },
  },
  {
    match: (path) => path.startsWith("/adventure"),
    help: {
      title: "Choose your own adventure",
      message: "You can explore music, stories, local places and creative prompts at your own pace. You do not need to buy, post, sign in or complete every quest.",
      links: [{ label: "Choose a quest", href: "/adventure/#quests" }, { label: "Discover music", href: "/adventure/#discover" }],
    },
  },
  {
    match: (path) => path.startsWith("/culture"),
    help: {
      title: "Follow the cultural rabbit hole",
      message: "Explore the stories and conversations around music, gaming, science fiction and creative culture. Treat each source as a doorway, not an instruction to agree.",
      links: [{ label: "Explore the tour experience", href: "/tour-side-quests/" }, { label: "Back to PLAY IT FORWARD", href: "/" }],
    },
  },
  {
    match: (path) => path.startsWith("/every-day"),
    help: {
      title: "Explore the creative practice",
      message: "This area explains the experiments behind sustainable creative work, audience relationships and production. You can browse without joining or making a commitment.",
      links: [{ label: "Creator pathways", href: "/every-day/#pilots" }, { label: "How it is made", href: "/every-day/#makers" }],
    },
  },
  {
    match: (path) => path.startsWith("/route"),
    help: {
      title: "Plan a route that fits your day",
      message: "Use the city and venue links as starting points. Check current opening hours, transport, accessibility and your route before you travel.",
      links: [{ label: "Tour side quests", href: "/tour-side-quests/" }, { label: "Fan adventure", href: "/adventure/" }],
    },
  },
];

const defaultHelp: HelpContext = {
  title: "Where would you like to begin?",
  message: "I’m PIXIE, the PLAY IT FORWARD guide. I can point you toward the music, fan adventures, tour side quests or the creative work behind the project. You set the pace.",
  links: [
    { label: "Discover music and stories", href: "/adventure/" },
    { label: "Explore tour side quests", href: "/tour-side-quests/" },
    { label: "Meet the creative process", href: "/every-day/#makers" },
  ],
};

export default function PixieHelper() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const context = contexts.find(({ match }) => match(pathname))?.help ?? defaultHelp;

  return (
    <div className="pixie-helper">
      {open && (
        <section className="pixie-panel" id="pixie-panel" aria-label="PIXIE help">
          <div className="pixie-panel-head">
            <div className="pixie-avatar" aria-hidden="true"><span /><span /><i /></div>
            <div>
              <p className="pixie-kicker">YOUR PLAY IT FORWARD GUIDE</p>
              <h2>Hi, I’m PIXIE.</h2>
            </div>
            <button className="pixie-close" type="button" onClick={() => setOpen(false)} aria-label="Close PIXIE help">×</button>
          </div>
          <div className="pixie-panel-body" aria-live="polite">
            <h3>{context.title}</h3>
            <p>{context.message}</p>
            <p className="pixie-prompt">A few useful places to go next:</p>
            <div className="pixie-links">
              {context.links.map((item) => (
                <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>
              ))}
            </div>
            <p className="pixie-boundary">I’m a page guide in this prototype, not a live AI chat or an account-connected assistant. No message is sent or saved.</p>
          </div>
        </section>
      )}
      <button
        className="pixie-launcher"
        type="button"
        aria-expanded={open}
        aria-controls="pixie-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="pixie-launcher-avatar" aria-hidden="true"><i /><i /><b /></span>
        <span>{open ? "CLOSE PIXIE" : "ASK PIXIE"}</span>
      </button>
    </div>
  );
}
