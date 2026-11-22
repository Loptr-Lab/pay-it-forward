export const dynamic = "force-static";
export function GET() {
  const site = "https://loptr-lab.github.io/pay-it-forward";
  const items = [{
    title: "After the Momentum",
    link: site + "/field-notes/after-the-momentum/",
    description: "What does an independent artist build when the audience is already there? A case discussion on touring, audience ownership, and independent infrastructure.",
    pubDate: "Sun, 22 Nov 2026 12:00:00 GMT",
    guid: site + "/field-notes/after-the-momentum/"
  }];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>PLAY IT FORWARD · Field Notes</title><link>${site}/field-notes/</link><description>Independent music, touring, artist sustainability, and creative infrastructure.</description><language>en-us</language><item><title>${items[0].title}</title><link>${items[0].link}</link><description>${items[0].description}</description><pubDate>${items[0].pubDate}</pubDate><guid>${items[0].guid}</guid></item></channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
