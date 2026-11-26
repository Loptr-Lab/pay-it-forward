export const dynamic = "force-static";
const site = "https://loptr-lab.github.io/pay-it-forward";
const entries = [
{title:"When the Pass Is the Clue",path:"/field-notes/when-the-pass-is-the-clue/",description:"What two Hunger Games passes taught me about making a souvenir that opens a story.",pubDate:"Thu, 26 Nov 2026 15:00:00 GMT"},
{title:"The War of Art Shouldn't Be the Artist's Business Model",path:"/field-notes/war-of-art/",description:"Creative autonomy, external resistance, and infrastructure that supports artists rather than becoming another source of friction."},
{title:"The Release Window Shouldn't Decide Whether Music Exists on Vinyl",path:"/field-notes/day-date-vinyl/",description:"EVEN Day & Date Vinyl changes manufacturing timing and inventory risk. What it could unlock for artists—and what still needs testing."},
{title:"A Number I Lost, A Mission I Found",path:"/field-notes/one-billion-mission/",description:"A lost signup email from Chris Do’s 1 Billion Mission becomes a lens for creative education, ownership, independence, and infrastructure."},
{title:"Your PDS, Your Terms",path:"/field-notes/your-pds-your-terms/",description:"A people-first path to hosting an AT Protocol identity, moving from another PDS, and making infrastructure choices without sponsorship."},
{title:"The Catalog Is Not Dead",path:"/field-notes/catalog-is-not-dead/",description:"Catalog music, memory, direct support, and audience reactivation."},
{title:"What an Artist Actually Buys From a Label",path:"/field-notes/label-services-and-creative-freedom/",description:"Artist economics, rights, administration, and creative autonomy."},
{title:"The Nostalgia Cycle",path:"/field-notes/the-nostalgia-cycle/",description:"G-Eazy and Logic's reunion tour as a catalog-reactivation case discussion."},
{title:"The Reaction Economy",path:"/field-notes/reaction-economy/",description:"Creator alliances, Content ID friction, and a proposed permission program for music discovery."},
{title:"From Plan B to Plan A",path:"/field-notes/from-plan-b-to-plan-a/",description:"Tour resilience, fan-led city discovery, venue voting, and opt-in demand."},
{title:"After the Momentum",path:"/field-notes/after-the-momentum/",description:"Independent artist touring and audience infrastructure."},
{title:"The Touring Gap",path:"/field-notes/touring-gap/",description:"Touring affordability and alternative audience-building approaches."},
{title:"The Fan Relationship",path:"/field-notes/fan-relationship/",description:"Audience metrics, consent, privacy, and direct fan relationships."},
{title:"The Social Internet",path:"/field-notes/atproto-music-discovery/",description:"AT Protocol, Bluesky, music discovery, and independent cultural journalism."},
{title:"From Audience to Participant",path:"/field-notes/fan-participation/",description:"Participatory fandom, interactive culture, accessibility, and fan rights."},
{title:"Media Pitch Resources",path:"/field-notes/media-resources/",description:"Public editorial contacts, submission guidelines, and primary research resources."}
];
const escapeXml=(value:string)=>value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
export function GET(){const defaultPubDate="Mon, 23 Nov 2026 12:00:00 GMT";const items=entries.map(entry=>"<item><title>"+escapeXml(entry.title)+"</title><link>"+site+entry.path+"</link><description>"+escapeXml(entry.description)+"</description><guid isPermaLink=\"true\">"+site+entry.path+"</guid><pubDate>"+(entry.pubDate ?? defaultPubDate)+"</pubDate></item>").join("");const xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">\n<channel>\n<title>PLAY IT FORWARD · Field Notes</title>\n<link>"+site+"/field-notes/</link>\n<description>Independent music, touring, artist sustainability, culture, audience participation, and creative infrastructure.</description>\n<language>en-us</language>\n<atom:link href=\""+site+"/field-notes/feed.xml\" rel=\"self\" type=\"application/rss+xml\"/>\n<lastBuildDate>"+(entries[0].pubDate ?? defaultPubDate)+"</lastBuildDate>\n<generator>Play It Forward static publishing</generator>\n"+items+"\n</channel>\n</rss>";return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=3600"}});}
