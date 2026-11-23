/* eslint react/no-unescaped-entities: off */
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import SiteDirectoryFooter from "../../components/SiteDirectoryFooter";
import type { Metadata } from "next";

const canonical = "https://loptr-lab.github.io/pay-it-forward/field-notes/your-pds-your-terms/";

export const metadata: Metadata = {
  title: "Your PDS, Your Terms: Owning an AT Protocol Identity | Play It Forward",
  description: "A practical, people-first look at hosting your own AT Protocol Personal Data Server, creating a portable identity, and moving an existing account—with risks, costs, and no sponsored recommendations.",
  alternates: { canonical },
  openGraph: {
    title: "Your PDS, Your Terms",
    description: "Your identity should not depend on one hosting provider. A people-first guide to self-hosting and PDS migration.",
    url: canonical,
    type: "article",
  },
};

export default function Page() {
  return <main>
    <header className="topbar"><Link className="wordmark" href="/">PIF<span>✳</span></Link><nav><Link href="/field-notes/">Field Notes</Link><Link href="/adventure/">Explore</Link></nav></header>
    <article style={{maxWidth:900,margin:"auto",padding:"5vw"}}>
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Field Notes",href:"/field-notes/"},{label:"Your PDS, Your Terms",href:"/field-notes/your-pds-your-terms/"}]}/>
      <p className="eyebrow">FIELD NOTES 011 · OPEN SOCIAL INFRASTRUCTURE · ARTIST OWNERSHIP</p>
      <h1 style={{fontSize:"clamp(3rem,8vw,6.5rem)",lineHeight:.9}}>YOUR PDS.<br/><em>YOUR TERMS.</em></h1>
      <p style={{fontSize:"1.3rem",color:"var(--muted)",lineHeight:1.6}}>What would it take to give an independent artist a home for their Atmosphere identity that they control—and a documented path to bring an existing account with them?</p>

      <p>We reserved <strong>daddyslittlemortis.com</strong> for a deliberate experiment: establish an artist's custom AT Protocol identity on a self-hosted Personal Data Server (PDS), rather than first assigning the domain to a centralized social platform. This is a pilot, not a claim that self-hosting is effortless or that the migration tooling is already finished.</p>

      <h2>What a PDS actually owns</h2>
      <p>A Personal Data Server stores an account's repository and media blobs, supports authentication and account management, and serves the account's data to compatible apps. The account's permanent identifier is its DID; a custom domain handle is a human-readable name that resolves to that identity. Hosting, identity and the app people use to view posts are related, but they are not the same thing.</p>
      <p>Self-hosting can put the server, its data and its maintenance decisions in your hands. It does not guarantee reach, moderation outcomes, recommendations, or visibility in any particular app. Nor does it remove the responsibility to keep the server secure, backed up and available.</p>

      <h2>Start with a new identity—or plan a migration?</h2>
      <p>Creating a new account on your own PDS is the lower-risk first step. Choose a host, install the official PDS, set up DNS and TLS, create the account, and verify that its handle and public records resolve across the network. We are documenting this as a repeatable process rather than recommending that someone immediately move their main account.</p>
      <p>Moving an existing account is a different operation. The AT Protocol migration guide describes creating an account on the destination PDS, transferring repository data and blobs, updating the DID document to point at the new host, then finalizing account activation on the new PDS and deactivation on the old one. That identity update is consequential. If it is mishandled, an account can become inaccessible.</p>

      <h2>How to bridge from another PDS</h2>
      <ol>
        <li><strong>Prepare and verify the destination.</strong> Deploy the new PDS, confirm its hostname, TLS, account creation and health, and make sure the destination has enough storage.</li>
        <li><strong>Keep the source account available.</strong> Confirm that you can authenticate to the current PDS and access the email or recovery mechanisms it requires. Do not delete or deactivate the source account first.</li>
        <li><strong>Export and import the repository.</strong> The protocol uses a repository CAR export/import. The migration also needs media blobs and app-specific private preferences where supported; not every external app stores its state in the PDS.</li>
        <li><strong>Update the identity carefully.</strong> The DID document must point to the new PDS and its signing key. PLC-managed identities can require authorization from the old PDS and a time-limited security token. Self-controlled rotation keys can provide an independent recovery path, but must be secured before a crisis.</li>
        <li><strong>Finalize and verify.</strong> Activate the account at the new PDS, deactivate it at the source, check repository and blob completeness, test login in compatible apps, and retain backups and recovery notes.</li>
      </ol>
      <p>For a working account, we recommend first testing the process with a disposable identity and reading the official migration and recovery guides. Migration tools such as <a href="https://github.com/bluesky-social/goat">goat</a> and <a href="https://pdsmoover.com/">PDS MOOver</a> exist, but tool interfaces and migration procedures can change. We will link to maintained tools and record what we actually test; we will not pretend the identity transition is a harmless one-click transfer.</p>

      <h2>Our process, in public</h2>
      <p>The <a href="https://atmosphere.loptrlab.com/">Loptr Lab Atmosphere field guide</a> is where we are developing a plain-language path and reusable code for creating an identity on an artist-owned PDS and bridging from another host. The repository includes the evolving implementation, provider-neutral notes, preflight checks, migration checklist, backup and recovery guidance, and a record of the pilot's verified steps.</p>
      <p>We are using Daddy's Little Mortis as the first reference deployment because its domain has intentionally been held back for this identity. The real setup will expose the practical costs, DNS work, accessibility barriers and steps that still require human judgment.</p>

      <h2>People over profit—and no sponsorship</h2>
      <p><strong>This project is not sponsored.</strong> We have no paid relationship, affiliate arrangement, referral commission or promotional obligation to any hosting provider or migration-tool author mentioned in our research. We are not accepting sponsorship for this process. A commercial sponsorship would compromise the independence and people-over-profit, accessibility-first approach that Play It Forward is meant to practice.</p>
      <p>Provider links are offered as starting points for readers to compare—not endorsements. We will evaluate cost, transparent billing, privacy, accessibility, cancellation, support, portability and maintenance burden. Where we publish prices or provider experiences, we will date them and distinguish verified facts from estimates.</p>
      <p>The kit is intended to remain free to use, open to review, and useful even if readers choose a different provider. You should not have to buy our services, join a mailing list, or use a specific company to benefit from the documentation.</p>

      <h2>Read the source; help improve it</h2>
      <ul>
        <li><a href="https://github.com/ibloud/atmosphere-field-guide">Atmosphere field guide and implementation repository</a> — source, code and the public deployment.</li>
        <li><a href="https://atproto.com/guides/self-hosting">Official AT Protocol self-hosting guide</a> — PDS deployment fundamentals.</li>
        <li><a href="https://atproto.com/guides/account-migration">Official account migration guide</a> — migration stages and technical details.</li>
        <li><a href="https://atproto.com/guides/account-recovery">Official account recovery guide</a> — identity recovery and rotation keys.</li>
        <li><a href="https://github.com/bluesky-social/pds">Official PDS software</a> — maintained implementation.</li>
      </ul>
      <aside style={{borderLeft:"4px solid var(--accent)",padding:20,background:"var(--surface)"}}>
        <strong>Field Notes disclosure</strong>
        <p>This is an independent research and implementation project. No hosting company or software vendor paid for, reviewed, approved or sponsored this entry. Our provider comparisons and deployment notes are subject to change as we test the process.</p>
      </aside>
    </article>
    <SiteDirectoryFooter tagline="INDEPENDENT · FAN-LED · ACCESSIBLE · FIELD NOTES"/>
  </main>;
}
