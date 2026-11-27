import Link from "next/link";
import BandcampFridayHero from "./components/BandcampFridayHero";
import SiteDirectoryFooter from "./components/SiteDirectoryFooter";

const heroPhotoSrc = `${process.env.GITHUB_PAGES ? "/pay-it-forward" : ""}/not-a-toy-film.webp`;

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="wordmark" href="/" aria-label="Play It Forward home">PIF<span>✳</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/adventure/">Build an Adventure</Link>
          <Link href="/route/">Tour map</Link>
          <Link href="/every-day/#makers">Production</Link>
          <Link href="/radio/">Your Week on Air</Link>
          <Link href="/field-notes/">Field Notes</Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">A MUSIC-LED FAN ADVENTURE</p>
          <h1 id="hero-title">PLAY IT<br /><em>FORWARD.</em></h1>
          <p className="hero-copy">Music is a map. The city is a playground. The next discovery is yours.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/every-day/#fans">PLAY A STORY <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/route/">EXPLORE THE TOUR <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/music/devour/">LISTEN &amp; DISCOVER</Link>
          </div>
          <p className="hero-note">An independent concept prototype · Choose your own pace</p>
        </div>
        <aside className="hero-sidecar" aria-label="Featured NOT A TOY imagery and Bandcamp Friday">
          <img className="hero-photo" src={heroPhotoSrc} alt="NOT A TOY portraits arranged in a dark film-strip collage" />
          <BandcampFridayHero />
        </aside>
      </section>


      <section className="pilot-feature" id="pilot" aria-labelledby="pilot-title">
        <div className="pilot-visual">
          <img className="pilot-band" src="https://i.scdn.co/image/ab6761610000e5eb357c40c391323d2f7b2c9cf2" alt="NOT A TOY band portrait" />
          <img className="pilot-album" src="https://api.arktide.com/api/v1/public/credits/art/AcWs0NtS5WAce5fezvcfqGbI89H7sxcprqYHidDH-iLYohSSR4GPitcpHEf9rEfGX-5jvV4p3zF_Fovtk2jO-oMo6m-N3SCTgs5birR6JlpT" alt="FILTHY YUCK! album cover" />
        </div>
        <div className="pilot-copy">
          <p className="eyebrow">FEATURED PILOT · LIVE MUSIC × FAN ADVENTURE</p>
          <h2 id="pilot-title">NOT A TOY<br /><em>ON TOUR.</em></h2>
          <p className="pilot-lede">The music is the starting point. The city becomes part of the experience.</p>
          <p>PLAY IT FORWARD is exploring a fan-led companion to NOT A TOY’s current tour: a self-paced adventure built around the band&apos;s world, new music, local discovery, and accessible prompts—without requiring a ticket, account, purchase, or official venue participation.</p>
          <div className="pilot-album-detail">
            <strong>NEW ALBUM</strong>
            <span>FILTHY YUCK! · 17 tracks · October 16, 2026</span>
            <a className="text-link" href="https://music.apple.com/us/album/filthy-yuck/6803206084" target="_blank" rel="noreferrer">Listen / explore the album ↗</a>
          </div>
          <div className="pilot-actions">
            <a className="button primary" href="https://www.songkick.com/artists/10220776-not-a-toy/calendar" target="_blank" rel="noreferrer">FOLLOW THE TOUR ↗</a>
            <a className="button secondary" href="https://music.apple.com/us/album/filthy-yuck/6803206084" target="_blank" rel="noreferrer">LATEST ALBUM ↗</a>
          </div>
          <p className="disclaimer">Independent pilot proposal—not an official NOT A TOY activation. Artist, management, venue, and tour permissions or participation have not been confirmed.</p>
        </div>
      </section>


      <section className="next-track-section" id="next-track" aria-labelledby="next-track-title">
        <p className="eyebrow">FEATURE PRESENTATION · MUSIC DISCOVERY</p>
        <h2 id="next-track-title">THE NEXT TRACK<br/><em>IS OUT THERE.</em></h2>
        <p>Follow a collaboration beyond the credits. Discover a new artist, trace the sound back through their catalog, and build a listening path of your own.</p>
        <Link className="button primary" href="/music/devour/">EXPLORE DEVOUR · VOILÀ × NOT A TOY ↗</Link>
        <Link className="button secondary" href="/radio/">MAKE YOUR WEEKLY RADIO SHOW ↗</Link>
      </section>

      <section className="split-section" id="tour">
        <div>
          <p className="eyebrow">FOLLOW THE SOUND</p>
          <h2>THE TOUR<br />IS THE MAP.</h2>
          <p>Every city holds a story. Build your own tour-day adventure with optional discoveries, creative prompts, and places to explore.</p>
          <Link className="text-link" href="/route/">Explore the tour map ↗</Link>
        </div>
        <div className="tour-map-overview">
          <p className="eyebrow">NOT A TOY · TOUR PILOT</p>
          <div className="tour-map-regions">
            <div className="tour-map-region">
              <strong>EUROPE</strong>
              <span>Manchester · London · Cologne · Berlin · Hamburg · Utrecht</span>
              <Link href="/route/#europe">EXPLORE EUROPE STOPS ↗</Link>
            </div>
            <div className="tour-map-region">
              <strong>NORTH AMERICA</strong>
              <span>Los Angeles · Denver</span>
              <Link href="/route/#north-america">EXPLORE US STOPS ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section discovery" id="discover">
        <p className="eyebrow">THE NEXT TRACK IS OUT THERE</p>
        <h2>PASS IT ON.</h2>
        <p>Listen beyond your usual rotation. Discover independent artists. Share a sound that moved you. Buying music is always optional; discovery is the adventure.</p>
        <div className="discovery-prompt">
          <span>YOUR FIRST QUEST</span>
          <strong>Find a song from an artist you have never heard before.</strong>
          <p>What surprised you? What will you remember?</p>
          <a href="https://bandcamp.com/" target="_blank" rel="noreferrer" className="bandcamp-brand-link"><span className="bandcamp-mark" aria-hidden="true">bc</span><span className="bandcamp-wordmark">Bandcamp</span><span className="bandcamp-link-label">EXPLORE MUSIC ↗</span></a>
        </div>
      </section>

      <section className="music-feature-home" aria-labelledby="music-feature-title">
        <div className="music-feature-copy">
          <p className="eyebrow">FEATURED COLLABORATION · MUSIC STORY</p>
          <h2 id="music-feature-title">VOILÀ × NOT A TOY<br/><em>DEVOUR.</em></h2>
          <p>A theatrical lyric film inspired by sirens, mythology, and the pull of the deep. Start with the collaboration, then follow a focused path into NOT A TOY&apos;s discography.</p>
          <Link className="button primary" href="/music/devour/">WATCH · EXPLORE · LISTEN ↗</Link>
        </div>
        <div className="music-feature-art">
          <a href="https://youtu.be/QS9RtfARHBc" target="_blank" rel="noreferrer" aria-label="Watch the Devour lyric film on YouTube">
            <img src="https://img.youtube.com/vi/QS9RtfARHBc/hqdefault.jpg" alt="Devour theatrical lyric film thumbnail" loading="lazy"/>
          </a>
        </div>
      </section>

      <section className="event-section" id="event">
        <p className="eyebrow">PROPOSED FAN ACTIVATION</p>
        <h2>PLAY IT<br /><em>FORWARD.</em></h2>
        <p className="event-date">BANDCAMP FRIDAY · DECEMBER 4, 2026</p>
        <p>Discover music. Create something. Support artists if you choose. Connect with fans. A self-paced digital adventure celebrating independent music.</p>
        <div className="hero-actions"><a className="button primary" href="https://bandcamp.com/" target="_blank" rel="noreferrer"><span className="bandcamp-mark bandcamp-mark-small" aria-hidden="true">bc</span> DISCOVER MUSIC ON BANDCAMP ↗</a><Link className="button secondary" href="/every-day/">GOODBYE BANDCAMP FRIDAY? HELLO, EVERY DAY. ↗</Link></div>
        <p className="disclaimer">Independent concept. Not affiliated with or endorsed by NOT A TOY, Songkick, or Bandcamp. Event and partnerships are proposed.</p>
      </section>

      <SiteDirectoryFooter tagline="ACCESSIBLE · SELF-PACED · FAN-LED" />
    </main>
  );
}
