export const dynamic = "force-static";
const site = "https://loptr-lab.github.io/pay-it-forward";
const entries = [
  {title:"The Reaction Economy",path:"/field-notes/reaction-economy/",description:"Creator alliances, Content ID friction, and a proposed permission program for music discovery."},
  {title:"From Plan B to Plan A",path:"/field-notes/from-plan-b-to-plan-a/",description:"How Plan B Tour, Build Your Adventure, venue voting, and Bandsintown fan opt-ins could help artists plan more resilient tours."},
  {title:"After the Momentum",path:"/field-notes/after-the-momentum/",description:"Independent artist touring, audience infrastructure, and a case discussion prompted by Token / Never Too Different."},
  {title:"The Touring Gap",path:"/field-notes/touring-gap/",description:"Touring affordability and alternative audience-building approaches."},
  {title:"The Fan Relationship",path:"/field-notes/fan-relationship/",description:"Audience metrics, consent, privacy, and direct fan relationships."},
  {title:"The Social Internet",path:"/field-notes/atproto-music-discovery/",description:"AT Protocol, Bluesky, music discovery, and independent cultural journalism."},
  {title:"From Audience to Participant",path:"/field-notes/fan-participation/",description:"Participatory fandom, interactive culture, accessibility, and fan rights."},
  {title:"Media Pitch Resources",path:"/field-notes/media-resources/",description:"Public editorial contacts, submission guidelines, and primary research resources."}
];
const escapeXml=(value:string)=>value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
export function GET() {
  const items=entries.map(entry=>"<item><title>"+escapeXml(entry.title)+"</title><link>"+site+entry.path+"</link><description>"+escapeXml(entry.description)+"</description><guid isPermaLink=\"true\">"+site+entry.path+"</guid><pubDate>Sun, 22 Nov 2026 12:00:00 GMT</pubDate></item>").join("");
  const xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">\n<channel>\n<title>PLAY IT FORWARD · Field Notes</title>\n<link>"+site+"/field-notes/</link>\n<description>Independent music, touring, artist sustainability, culture, audience participation, and creative infrastructure.</description>\n<language>en-us</language>\n<atom:link href=\""+site+"/field-notes/feed.xml\" rel=\"self\" type=\"application/rss+xml\"/>\n<lastBuildDate>Sun, 22 Nov 2026 12:00:00 GMT</lastBuildDate>\n<generator>Play It Forward static publishing</generator>\n"+items+"\n</channel>\n</rss>";
  return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}
