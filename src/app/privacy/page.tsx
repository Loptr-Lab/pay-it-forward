import Link from "next/link";
import SiteDirectoryFooter from "../components/SiteDirectoryFooter";

export const metadata = { title: "Privacy & Data | PLAY IT FORWARD", description: "Privacy information for the PLAY IT FORWARD project website." };

export default function PrivacyPage() {
  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Site navigation"><Link href="/">Home</Link><Link href="/adventure/">Fan adventure</Link><Link href="/route/">Tour map</Link></nav></header>
    <article className="quest-intro">
      <p className="eyebrow">LEGAL · PRIVACY · TRANSPARENCY</p><h1>PRIVACY<br/><em>&amp; DATA.</em></h1>
      <p><strong>Last updated: November 22, 2026.</strong> PLAY IT FORWARD is an independent, experimental fan-adventure project. This page describes the site&apos;s current data practices; it is not legal advice or a compliance certification.</p>
      <h2>What the site collects</h2><p>The site does not provide user accounts, checkout, or a server-side submission system. The Radio Builder processes tracklists and DJ notes in the browser. Optional draft saving stores one show in local browser storage until deleted or replaced. CSV and JSON downloads stay on your device; share links encode show content and anyone holding the link can read it. The builder is marked for Clarity masking, but masking configuration has not been independently verified. PIXIE is a local page-navigation helper—not a live AI chat. Its prompts are not sent to a service or saved by this site.</p>
      <h2>Hosting and analytics</h2><p>The site is published through GitHub Pages. The project currently includes Microsoft Clarity analytics code. Clarity may collect interaction, device, browser, and usage information, including session recordings or heatmaps depending on its configuration. Microsoft and hosting providers may process technical data under their own policies. We have not independently audited the current Clarity settings or retention configuration. See Microsoft&apos;s privacy information for details.</p>
      <h2>External links and embeds</h2><p>Links to maps, music services, social platforms, ticketing, publications, and other sites take you to third-party services with their own privacy practices. Opening those services may disclose connection information to them. Embedded or optional third-party content may also load their own resources.</p>
      <h2>Choices</h2><p>You can browse without signing in, buying anything, posting, or using PIXIE. You can use browser privacy controls and block analytics scripts, though some features or measurements may not work as intended.</p>
      <h2>Contact and corrections</h2><p>For privacy questions or correction requests, contact the project through the public repository. Do not include sensitive personal information in public issues.</p>
      <p><a href="https://www.microsoft.com/en-us/privacy/privacystatement" target="_blank" rel="noreferrer">Microsoft Privacy Statement ↗</a> · <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages ↗</a></p>
      <p className="disclaimer">Independent project. No artist, label, venue, platform, or service endorsement is implied.</p>
    </article><SiteDirectoryFooter tagline="PRIVACY · INDEPENDENT · FAN-LED" />
  </main>;
}