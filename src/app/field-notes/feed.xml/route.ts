export const dynamic = "force-static";
export function GET() {
 const site="https://loptr-lab.github.io/pay-it-forward";
 const posts=[
 ["After the Momentum","/field-notes/after-the-momentum/","Independent artist touring and audience infrastructure."],
 ["The Touring Gap","/field-notes/touring-gap/","Touring affordability and alternative audience-building."],
 ["The Fan Relationship","/field-notes/fan-relationship/","Audience metrics, consent and direct fan relationships."],
 ["The Social Internet","/field-notes/atproto-music-discovery/","AT Protocol and music discovery."],
 ["From Audience to Participant","/field-notes/fan-participation/","Participatory fandom, interactive culture and rights."]
 ];
 const items=posts.map(([title,path,description])=>`<item><title>${title}</title><link>${site}${path}</link><description>${description}</description><guid>${site}${path}</guid><pubDate>Sun, 22 Nov 2026 12:00:00 GMT</pubDate></item>`).join("");
 const xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>PLAY IT FORWARD · Field Notes</title><link>${site}/field-notes/</link><description>Independent music, touring, artist sustainability, culture and creative infrastructure.</description><language>en-us</language>${items}</channel></rss>`;
 return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}