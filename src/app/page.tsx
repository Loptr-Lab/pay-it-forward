import Link from "next/link";
import BandcampFridayHero from "./components/BandcampFridayHero";

const heroPhotoSrc = `${process.env.GITHUB_PAGES ? "/pay-it-forward" : ""}/not-a-toy-film.webp`;

const adventures = [
  { number: "01", title: "THE TOUR", text: "Follow the music. Find a city. Make the night your own.", href: "/route" },
  { number: "02", title: "CITY QUEST", text: "Explore with music in your headphones and curiosity in your pocket.", href: "/adventure" },
  { number: "03", title: "DISCOVER", text: "Find a sound you have never heard. Play it forward.", href: "/adventure#discover" },
  { number: "04", title: "THE FAN EVENT", text: "A proposed Bandcamp Friday adventure for music lovers.", href: "#event" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="wordmark" href="/" aria-label="Play It Forward home">PIF<span>✳</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/adventure">Adventure</Link>
          <Link href="#discover">Discover</Link>
          <Link href="#event">Fan event</Link>
          <Link href="/route">Tour map</Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">A MUSIC-LED FAN ADVENTURE</p>
          <h1 id="hero-title">PLAY IT<br /><em>FORWARD.</em></h1>
          <p className="hero-copy">Music is a map. The city is a playground. The next discovery is yours.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/adventure">START EXPLORING <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/route">OPEN THE TOUR MAP <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="#event">THE FAN EVENT</Link>
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
          <p>PLAY IT FORWARD is exploring a fan-led companion to NOT A TOY’s current tour: a self-paced adventure built around the band's world, new music, local discovery, and accessible prompts—without requiring a ticket, account, purchase, or official venue participation.</p>
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


      <section className="intro section" id="adventure">
        <p className="eyebrow">NO RULES. NO RUSH.</p>
        <h2>YOUR MUSIC.<br />YOUR ADVENTURE.</h2>
        <p>Discover. Explore. Create. Connect. Follow a tour, wander into a city quest, find your next favorite artist, or join a shared fan event. There is no wrong way to play.</p>
        <div className="adventure-grid">
          {adventures.map((item) => (
            <Link className="adventure-card" href={item.href} key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="split-section" id="tour">
        <div>
          <p className="eyebrow">FOLLOW THE SOUND</p>
          <h2>THE TOUR<br />IS THE MAP.</h2>
          <p>Every city holds a story. Build your own tour-day adventure with optional discoveries, creative prompts, and places to explore.</p>
          <Link className="text-link" href="/route">Explore the tour map ↗</Link>
        </div>
        <div className="tour-map-overview">
          <p className="eyebrow">NOT A TOY · TOUR PILOT</p>
          <div className="tour-map-regions">
            <div className="tour-map-region">
              <strong>EUROPE</strong>
              <span>Manchester · London · Cologne · Berlin · Hamburg · Utrecht</span>
              <Link href="/route#europe">EXPLORE EUROPE STOPS ↗</Link>
            </div>
            <div className="tour-map-region">
              <strong>NORTH AMERICA</strong>
              <span>Los Angeles · Denver</span>
              <Link href="/route#north-america">EXPLORE US STOPS ↗</Link>
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
          <a href="https://bandcamp.com/" target="_blank" rel="noreferrer" className="text-link">Explore Bandcamp ↗</a>
        </div>
      </section>

      <section className="event-section" id="event">
        <p className="eyebrow">PROPOSED FAN ACTIVATION</p>
        <h2>PLAY IT<br /><em>FORWARD.</em></h2>
        <p className="event-date">BANDCAMP FRIDAY · DECEMBER 4, 2026</p>
        <p>Discover music. Create something. Support artists if you choose. Connect with fans. A self-paced digital adventure celebrating independent music.</p>
        <a className="button primary" href="https://bandcamp.com/" target="_blank" rel="noreferrer">DISCOVER MUSIC ↗</a>
        <p className="disclaimer">Independent concept. Not affiliated with or endorsed by NOT A TOY, Songkick, or Bandcamp. Event and partnerships are proposed.</p>
      </section>

      <footer>
        <span>PLAY IT FORWARD ✳</span>
        <span>ACCESSIBLE · SELF-PACED · FAN-LED</span>
        <a href="#hero-title">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
