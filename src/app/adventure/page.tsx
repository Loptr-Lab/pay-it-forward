import Link from "next/link";

const quests = [
  { tag: "01 · LISTEN", title: "SET THE SCENE", body: "Pick three tracks from FILTHY YUCK! or the NOT A TOY catalog. Build a pre-show playlist that starts where you are and ends at full concert energy.", action: "Make your setlist", prompt: "What track would you play as the opening credits to tonight?", link: "https://music.apple.com/us/album/filthy-yuck/6803206084", linkLabel: "OPEN THE ALBUM ↗" },
  { tag: "02 · DISCOVER", title: "THE SOUND YOU DON'T KNOW", body: "Find a local artist, record shop, radio show or playlist in the city you're visiting. Listen to one track outside your usual lane.", action: "Take a sonic detour", prompt: "Save one discovery to share after the show. No purchase required.", link: "https://loptr-lab.github.io/pay-it-forward/route/", linkLabel: "FIND LOCAL MUSIC STOPS ↗" },
  { tag: "03 · CITY QUEST", title: "LOOK UP / LOOK AROUND", body: "Explore street art, galleries, murals, creative neighborhoods—or tattoo studios and flash art. Look for a visual that feels like a lyric, album, or mood. Admire the art; getting tattooed is never the assignment.", action: "Find the art in the city", prompt: "Choose a mural, gallery, tattoo artist, flash sheet, or storefront. No purchase or tattoo required.", link: "/route", linkLabel: "EXPLORE ART & TATTOO STOPS ↗" },
  { tag: "04 · MAKE", title: "BRANSON'S FLASH CHALLENGE", body: "Inspired by Branson Hoog's graphic-art and tattoo background: design a tiny flash piece based on a song. Three shapes, one color, one lyric fragment—or make it abstract. No tattoo or art skills required.", action: "Make your own flash", prompt: "Doodle it, collage it, or use your phone notes. Keep it or share it.", link: "https://www.xsnoize.com/interview-not-a-toy-on-new-music-their-highlights-of-2022/", linkLabel: "READ ABOUT BRANSON'S TOUR TATTOOS ↗" },
  { tag: "05 · CONNECT", title: "PASS THE AUX", body: "Ask a friend or another fan for one song that should be on your pre-show playlist. Trade recommendations—no pressure to post or meet strangers.", action: "Trade one track", prompt: "What did someone else hear in the music that you missed?", link: "https://music.apple.com/us/artist/not-a-toy/1510814882", linkLabel: "EXPLORE NOT A TOY'S MUSIC ↗" },
  { tag: "06 · SHOW DAY", title: "YOUR NIGHT, YOUR PACE", body: "Choose a meetup point, check the venue's own access information, plan your transport and leave room for rest. Arrive early, arrive at doors, or skip a prompt. The adventure works either way.", action: "Make a low-stress plan", prompt: "Tickets, spending, venue participation and every activity are optional.", link: "/route", linkLabel: "CHOOSE YOUR TOUR CITY ↗" },
];

function Breadcrumbs({ current, path }: { current: string; path: string }) {
  const items = [
    { name: "Home", url: "https://loptr-lab.github.io/pay-it-forward/" },
    { name: current, url: `https://loptr-lab.github.io/pay-it-forward/${path}/` },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">{current}</li>
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}

export default function AdventurePage() {
  return <main className="experience-page">
    <header className="experience-nav"><Link href="/" className="wordmark">PIF<span>✳</span></Link><nav><Link href="/adventure">Adventure</Link><Link href="/route">Your route</Link><Link href="/">Home</Link></nav></header>
    <Breadcrumbs current="Adventure" path="adventure" />
    <section className="experience-hero adventure-hero"><p className="eyebrow">NOT A TOY · PRE-SHOW ADVENTURE</p><h1>GET AMPED.<br/><em>YOUR WAY.</em></h1><p className="experience-lede">The concert starts before the doors. Build a soundtrack, find a clue in the city, discover something new and make the night yours.</p><div className="hero-actions"><a className="button primary" href="#quests">CHOOSE YOUR QUEST ↓</a><Link className="button secondary" href="/route">BUILD A CITY ROUTE ↗</Link></div><p className="disclaimer">An independent fan concept. Not an official artist activity. No ticket, purchase, account, posting or participation required.</p></section>
    <section className="quest-intro" id="quests"><p className="eyebrow">PICK ONE · OR MAKE YOUR OWN</p><h2>THE PRE-SHOW<br/>SIDE QUESTS.</h2><p>There is no sequence and no score. Start anywhere. Do one activity on the way to the show, do all six at home, or simply listen.</p></section>
    <section className="quest-grid">{quests.map((q,i)=><article className="quest-card" key={q.tag}><div className="quest-card-head"><span>{q.tag}</span><span className="quest-number">0{i+1}</span></div><h3>{q.title}</h3><p>{q.body}</p><div className="quest-prompt"><strong>{q.action}</strong><span>{q.prompt}</span><a className="quest-link" href={q.link} target={q.link.startsWith("/") ? undefined : "_blank"} rel={q.link.startsWith("/") ? undefined : "noreferrer"}>{q.linkLabel}</a></div></article>)}</section>
    <section className="quest-intro"><p className="eyebrow">07 · EAT</p><h2>LOCAL FLAVOR.<br/>YOUR BUDGET.</h2><p>Find a neighborhood café, food stall, bakery, diner, or local favorite near your route. Check menus and hours; keep it flexible. Bring your own snack or eat wherever feels right.</p><Link className="button secondary" href="/route">FIND FOOD BY CITY ↗</Link></section><section className="quest-intro"><p className="eyebrow">08 · GET THERE</p><h2>HOW DO YOU<br/>GET TO THE VENUE?</h2><p>Check public transit first—bus, train, metro, or tram—then compare walking, rideshare, taxi, bike, or driving. Check accessibility, service changes, and the last ride home before showtime.</p><Link className="button secondary" href="/route">PLAN VENUE TRANSPORT ↗</Link></section><section className="music-thread" id="discover"><div><p className="eyebrow">MUSIC THREAD</p><h2>FILTHY YUCK!<br/><em>ON REPEAT.</em></h2><p>Start with the new album. Choose a track, follow a feeling, then branch out into a local artist or a song someone recommends.</p><a className="button primary" href="https://music.apple.com/us/album/filthy-yuck/6803206084" target="_blank" rel="noreferrer">LISTEN TO THE ALBUM ↗</a></div><div className="music-thread-art"><img src="https://api.arktide.com/api/v1/public/credits/art/AcWs0NtS5WAce5fezvcfqGbI89H7sxcprqYHidDH-iLYohSSR4GPitcpHEf9rEfGX-5jvV4p3zF_Fovtk2jO-oMo6m-N3SCTgs5birR6JlpT" alt="FILTHY YUCK! album artwork"/></div></section>
    <section className="bandcamp-friday" id="bandcamp-friday"><p className="eyebrow">BANDCAMP FRIDAY · PLAY IT FORWARD</p><h2>SUPPORT THE MUSIC.<br/><em>DIRECTLY.</em></h2><p>When Bandcamp Friday rolls around, explore NOT A TOY's Bandcamp catalog and support the artists directly. Buying is optional—listening and sharing the link count, too.</p><a className="button primary" href="https://notatoy.bandcamp.com/album/not-a-toy" target="_blank" rel="noreferrer">VISIT NOT A TOY ON BANDCAMP ↗</a></section>
    <section className="press-library" id="press"><p className="eyebrow">FROM THE PRESS · INTERVIEWS · REVIEWS</p><h2>READ THE<br/><em>CREATIVE STORY.</em></h2><p className="press-intro">NOT A TOY's world extends beyond the tracks. Explore interviews, album reviews and stories about the collective's music, tattoos, art and DIY approach.</p><div className="press-grid">
      <a className="press-card" href="https://www.xsnoize.com/interview-not-a-toy-on-new-music-their-highlights-of-2022/" target="_blank" rel="noreferrer"><span>INTERVIEW · 2022</span><h3>Touring, tattoos and the creative collective</h3><p>XS Noize talks to NOT A TOY about their music, fan interaction and Branson tattooing fans on tour.</p><b>READ THE INTERVIEW ↗</b></a>
      <a className="press-card" href="https://ascribemagazine.com/fresh-faces-and-fresh-sound-getting-to-know-not-a-toy/" target="_blank" rel="noreferrer"><span>ARTIST PROFILE</span><h3>Fresh Faces and Fresh Sound</h3><p>Getting to know the four creatives, their inspirations, process, and art beyond music.</p><b>READ THE PROFILE ↗</b></a>
      <a className="press-card" href="https://dailytrojan.com/2020/11/11/not-a-toy-represents-a-new-generation-of-artists-and-creatives/" target="_blank" rel="noreferrer"><span>FEATURE · 2020</span><h3>A new generation of artists and creatives</h3><p>Daily Trojan explores the collective's genre-free approach and creative interests.</p><b>READ THE FEATURE ↗</b></a>
      <a className="press-card" href="https://www.crucialrhythm.com/not-a-toy-self-titled-ep-review" target="_blank" rel="noreferrer"><span>EP REVIEW · 2020</span><h3>NOT A TOY — Self-Titled EP</h3><p>Review of the debut EP's pop, hip-hop and rock mix and independent creative process.</p><b>READ THE REVIEW ↗</b></a>
      <a className="press-card" href="https://bandwagmag.com/2023/08/not-a-toy-new-album-prblms/" target="_blank" rel="noreferrer"><span>ALBUM REVIEW · 2023</span><h3>PRBLMS</h3><p>BandWagon Magazine's album coverage.</p><b>READ THE REVIEW ↗</b></a>
      <a className="press-card" href="https://www.wepluggoodmusic.com/wpgm-interviews-not-a-toy-kingkiller-touring-voila-not-having-a-process/" target="_blank" rel="noreferrer"><span>INTERVIEW</span><h3>Kingkiller, touring and not having a process</h3><p>Conversation about creative freedom and making music without rules.</p><b>READ THE INTERVIEW ↗</b></a>
      <a className="press-card" href="https://www.frontrowamplified.com/podcast-episodes/2020/interview-with-not-a-toy" target="_blank" rel="noreferrer"><span>PODCAST · 2020</span><h3>Creative workflow and the NOT A TOY project</h3><p>Interview with Benji Spoliansky on their process and sound.</p><b>LISTEN TO THE INTERVIEW ↗</b></a>
      <a className="press-card" href="https://www.hazzemedia.com/post/not-a-toy-latest-single-gutter-kid-future-goals" target="_blank" rel="noreferrer"><span>INTERVIEW</span><h3>Gutter Kid & future goals</h3><p>Exploring the group's genre-blending ambitions and future creative plans.</p><b>READ THE INTERVIEW ↗</b></a>
    </div><p className="press-note">Links lead to independent publications. PLAY IT FORWARD is not affiliated with these outlets.</p><div className="press-contact" id="press-contact"><p className="eyebrow">PRESS · MEDIA · INTERVIEW INQUIRIES</p><h3>GET IN TOUCH WITH NOT A TOY</h3><p>For press requests, interviews, coverage, or artist-related inquiries, use the band’s official channels or management contact listed by Fearless Records. We could not verify a publicly listed press email, so we are not publishing an unconfirmed address.</p><div className="hero-actions"><a className="button primary" href="https://fearlessrecords.com/artists/not-a-toy/" target="_blank" rel="noreferrer">OFFICIAL ARTIST / MANAGEMENT INFO ↗</a><a className="button secondary" href="https://www.instagram.com/notatoy/" target="_blank" rel="noreferrer">NOT A TOY SOCIAL ↗</a></div><p className="press-note">PLAY IT FORWARD is an independent fan concept and is not an official representative or press contact for NOT A TOY.</p></div></section>
    <section className="adventure-map-cta"><p className="eyebrow">MAKE THE CITY PART OF IT</p><h2>YOUR ROUTE.<br/><em>YOUR RULES.</em></h2><p>Choose a record store, a mural, a coffee stop or a quiet reset. Explore local places around the show, make your own map and skip anything that doesn't fit your day.</p><Link className="button primary" href="/route">EXPLORE CITY ROUTES ↗</Link></section>
    <footer className="experience-footer"><span>PLAY IT FORWARD ✳</span><span>FAN-LED · ACCESSIBLE · SELF-PACED</span><Link href="/">HOME ↑</Link></footer>
  </main>;
}