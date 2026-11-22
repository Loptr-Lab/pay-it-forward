import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOT A TOY Tour Side Quests | PLAY IT FORWARD",
  description: "Turn the NOT A TOY tour into a city-by-city fan adventure. Start in Glasgow with verified comic, pop-culture, and street-art stops.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/tour-side-quests/" },
};

const cities = [
  ["Glasgow", "Nov 23, 2026", "The Garage"],
  ["Manchester", "Nov 24, 2026", "Academy 2"],
  ["London", "Nov 26, 2026", "O2 Shepherd's Bush Empire"],
  ["Paris", "Nov 29, 2026", "Le Trianon"],
  ["Brussels", "Nov 30, 2026", "Ancienne Belgique"],
  ["Cologne", "Dec 2, 2026", "Carlswerk Victoria"],
  ["Prague", "Dec 4, 2026", "ROXY"],
  ["Vienna", "Dec 5, 2026", "Flex"],
  ["Berlin", "Dec 7, 2026", "Astra Kulturhaus"],
  ["Hamburg", "Dec 8, 2026", "Fabrik"],
  ["Utrecht", "Dec 9, 2026", "TivoliVredenburg"],
  ["Hamburg", "Dec 10, 2026", "Fabrik"],
  ["Los Angeles", "Jan 29, 2027", "Moroccan Lounge"],
  ["Denver", "Feb 13, 2027", "Globe Hall"],
];

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export default function TourSideQuestsPage() {
  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav aria-label="Visitor pathways"><Link href="/adventure/">Fan adventure</Link><Link href="/tour-side-quests/">Tour side quests</Link><Link href="/culture/">Cultural rabbit hole</Link><Link href="/every-day/#makers">Production</Link><Link href="/">Home</Link></nav></header>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tour Map", href: "/route/" }, { label: "Side Quests", href: "/tour-side-quests/" }]} />
    <section className="experience-hero">
      <p className="eyebrow">NOT A TOY · FILTHY YUCK! · PLAY IT FORWARD</p>
      <h1>THE SHOW.<br/><em>THE SIDE QUEST.</em></h1>
      <p className="experience-lede">A concert can be the centre of a day—not the whole day. Explore a comic shop, street art, a local creative space, or a new corner of the city before the music.</p>
      <p>Start with Glasgow. The recommendations below were checked against current business and venue listings. Other city links are map searches for discovery—not vetted recommendations. No official artist, venue, shop, or GTA affiliation is implied.</p>
      <div className="hero-actions"><a className="button primary" href="#glasgow">GLASGOW QUEST ↓</a><Link className="button secondary" href="/route/">ALL TOUR STOPS ↗</Link></div>
    </section>

    <section className="route-stops" id="glasgow">
      <p className="eyebrow">VERIFIED CITY QUEST · NOV 23, 2026</p>
      <h2>GLASGOW.</h2>
      <p className="route-note">The November 23 listing is Voilà + NOT A TOY + Austin Giorgio at The Garage, 490 Sauchiehall Street. These are optional nearby cultural stops; check opening hours and travel details before heading out.</p>
      <p className="route-note"><strong>Access note:</strong> The Garage&apos;s main entrance to the show hall includes stairs (40 in total after security). The venue lists a limited-access wheelchair entrance on Renfrew Street; contact its access team in advance for instructions and arrangements. <a href="https://garageglasgow.co.uk/accessibility/" target="_blank" rel="noreferrer">Official accessibility information ↗</a></p>
      <div className="route-cards">
        <article className="route-card">
          <span className="route-num">01 · COMICS / COLLECTIBLES</span><h3>Forbidden Planet Glasgow</h3>
          <p className="route-address">122–126 Sauchiehall Street, Glasgow G2 3DH</p>
          <p>Comic books, graphic novels, manga, toys, and pop-culture collectibles. The shop is on Sauchiehall Street, the same street as the venue.</p>
          <a className="text-link" href={maps("Forbidden Planet Glasgow 122 Sauchiehall Street")} target="_blank" rel="noreferrer">MAP & DIRECTIONS ↗</a>
          <a className="text-link" href="https://forbiddenplanet.com/" target="_blank" rel="noreferrer">SHOP WEBSITE ↗</a>
          <p className="route-note">Listed Monday hours: 10:00–18:00. Confirm before visiting.</p>
        </article>
        <article className="route-card">
          <span className="route-num">02 · PHOTO / STREET ART</span><h3>Glasgow Nightlife mural</h3>
          <p className="route-address">The lane beside Lord of Fries, Sauchiehall Street</p>
          <p>A street mural in the lane by the G2 entrance, near Lord of Fries. It is a free photo stop before or after the show; respect venue access and pedestrian space.</p>
          <a className="text-link" href={maps("Glasgow Nightlife mural The Garage G2 lane Lord of Fries")} target="_blank" rel="noreferrer">FIND THE MURAL ↗</a>
          <a className="text-link" href="https://garageglasgow.co.uk/accessibility/" target="_blank" rel="noreferrer">VENUE ACCESSIBILITY & ENTRY ↗</a>
        </article>
        <article className="route-card">
          <span className="route-num">03 · CITY ART</span><h3>Glasgow City Centre Mural Trail</h3>
          <p>A free, self-guided public-art trail. Pick one mural that catches your eye and make it your own pre-show discovery—no checklist required.</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Glasgow+City+Centre+Mural+Trail" target="_blank" rel="noreferrer">OPEN MURAL TRAIL MAP ↗</a>
        </article>
      </div>
      <div className="discovery-prompt"><span>THE FILTHY YUCK! SIDE QUEST</span><strong>Find a comic, character, toy, mural, or object that feels like it belongs in a world of your own. Take a photo or make a sketch. Share only if you want. No purchase required.</strong></div>
    </section>

    <section className="adventure-map-cta">
      <p className="eyebrow">FILTHY YUCK! · COMIC · ART · MERCH</p>
      <h2>EXPLORE THE<br/><em>OTHER WORLD.</em></h2>
      <p>FILTHY YUCK! is a separate NOT A TOY creative property with a comic and official merchandise. The side quest connects the tour to the IP without requiring a purchase or implying the band has organized these local activities.</p>
      <div className="hero-actions">
        <a className="button primary" href="https://notatoymerch.myshopify.com/products/filthy-yuck-comic" target="_blank" rel="noreferrer">FILTHY YUCK! COMIC ↗</a>
        <a className="button secondary" href="https://notatoymerch.myshopify.com/" target="_blank" rel="noreferrer">OFFICIAL MERCH STORE ↗</a>
        <Link className="button secondary" href="/adventure/#filthy-yuck">PLAY THE FILTHY YUCK! QUEST ↗</Link>
      </div>
    </section>

    <section className="route-stops" id="tour-cities">
      <p className="eyebrow">THE TOUR · CITY BY CITY</p><h2>CHOOSE YOUR STOP.</h2>
      <p className="route-note">Tour dates and venues below match the current Concord artist listing. Local links open map searches so visitors can verify businesses, hours, and routes. We will replace discovery searches with curated, checked city quests as each stop is researched.</p>
      <div className="route-cards">{cities.map(([city, date, venue]) => <article className="route-card" key={city + date}>
        <span className="route-num">{date}</span><h3>{city}</h3><p className="route-address">{venue}</p><p>Explore comic shops, toys, art, and local creative places around the venue.</p>
        <a className="text-link" href={maps(`comic shops toy shops street art near ${venue}, ${city}`)} target="_blank" rel="noreferrer">COMICS · TOYS · ART MAP ↗</a>
        <a className="text-link" href={maps(`${venue}, ${city}`)} target="_blank" rel="noreferrer">VENUE MAP ↗</a>
      </article>)}</div>
      <p className="route-note"><a className="text-link" href="https://concord.com/artist/not-a-toy/" target="_blank" rel="noreferrer">VERIFY TOUR LISTING WITH CONCORD ↗</a></p>
    </section>

    <section className="route-bottom"><p className="eyebrow">CULTURAL DISCOVERY</p><h2>FOLLOW THE<br/><em>RABBIT HOLE.</em></h2><p>Gaming, dystopian fiction, satire, underground music, and the journalism connecting them. Explore the cultural stories behind the tour.</p><Link className="button secondary" href="/culture/">EXPLORE CULTURAL MEDIA ↗</Link></section><section className="route-bottom">
      <p className="eyebrow">PLAY IT FORWARD · REAL-WORLD EXPLORATION</p>
      <h2>DISCOVER.<br/><em>EXPERIENCE.</em><br/>PASS IT ON.</h2>
      <p>The point is not to turn fans into customers at every step. Make the city, story, music, and local creative places worth exploring. Direct support remains optional.</p>
      <Link className="button primary" href="/every-day/">WHY PLAY IT FORWARD? ↗</Link>
    </section>
    <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>INDEPENDENT · FAN-LED · NO PURCHASE REQUIRED</span><Link href="/">HOME ↑</Link></footer>
  </main>;
}
