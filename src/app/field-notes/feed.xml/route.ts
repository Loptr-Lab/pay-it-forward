export const dynamic = "force-static";
const site = "https://loptr-lab.github.io/pay-it-forward";
const entries = [\n  {title:"From Plan B to Plan A",path:"/field-notes/from-plan-b-to-plan-a/",description:"Fan-powered city and venue discovery, tour resilience, and the proposed Bandsintown integration."},
  {title:"After the Momentum",path:"/field-notes/after-the-momentum/",description:"Independent artist touring, audience infrastructure, and a case discussion prompted by Token / Never Too Different."},
  {title:"The Touring Gap",path:"/field-notes/touring-gap/",description:"Touring affordability and alternative audience-building approaches."},
  {title:"The Fan Relationship",path:"/field-notes/fan-relationship/",description:"Audience metrics, consent, privacy, and direct fan relationships."},
  {title:"The Social Internet",path:"/field-notes/atproto-music-discovery/",description:"AT Protocol, Bluesky, music discovery, and independent cultural journalism."},
  {title:"From Audience to Participant",path:"/field-notes/fan-participation/",description:"Participatory fandom, interactive culture, accessibility, and fan rights."},
  {title:"Media Pitch Resources",path:"/field-notes/media-resources/",description:"Public editorial contacts, submission guidelines, and primary research resources."}
];
const escapeXml=(value:string)=>value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
export function GET() {
  const items=entries.map(entry=>`<item><title>${escapeXml(entry.title)}</title><link>${site}${entry.path}</link><description>${escapeXml(entry.description)}</description><guid isPermaLink="true">${site}${entry.path}</guid><pubDate>Sun, 22 Nov 2026 12:00:00 GMT</pubDate></item>`).join("");
  const xml=`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>PLAY IT FORWARD · Field Notes</title>
<link>${site}/field-notes/</link>
<description>Independent music, touring, artist sustainability, culture, audience participation, and creative infrastructure.</description>
<language>en-us</language>
<atom:link href="${site}/field-notes/feed.xml" rel="self" type="application/rss+xml"/>
<lastBuildDate>Sun, 22 Nov 2026 12:00:00 GMT</lastBuildDate>
<generator>Play It Forward static publishing</generator>
${items}
</channel>
</rss>`;
  return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}