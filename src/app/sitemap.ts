import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const base = "https://loptr-lab.github.io/pay-it-forward";
export default function sitemap(): MetadataRoute.Sitemap {
 return [
 {url:base+"/",lastModified:new Date("2026-11-23"),changeFrequency:"weekly",priority:1},
 {url:base+"/adventure/",lastModified:new Date("2026-11-23"),changeFrequency:"weekly",priority:.9},
 ...["/adventure/the-exit-is-still-free/","/tour-resilience/london/","/privacy/","/disclosures/"].map(path=>({url:base+path,changeFrequency:"monthly" as const})),
 {url:base+"/route/",lastModified:new Date("2026-11-23"),changeFrequency:"weekly",priority:.9},
 {url:base+"/tour-resilience/",lastModified:new Date("2026-11-23"),changeFrequency:"weekly",priority:.7},
 {url:base+"/tour-side-quests/",lastModified:new Date("2026-11-23"),changeFrequency:"weekly",priority:.9},
 {url:base+"/culture/unwritten-sister/",lastModified:new Date("2026-11-25"),changeFrequency:"monthly",priority:.8},
 {url:base+"/culture/",lastModified:new Date("2026-11-23"),changeFrequency:"monthly",priority:.8},
 {url:base+"/music/devour/",lastModified:new Date("2026-11-23"),changeFrequency:"monthly",priority:.8},
 {url:base+"/filthy-yuck/",lastModified:new Date("2026-11-23"),changeFrequency:"monthly",priority:.8},
 {url:base+"/every-day/",lastModified:new Date("2026-11-23"),changeFrequency:"monthly",priority:.8},
 {url:base+"/field-notes/",lastModified:new Date("2026-11-23"),changeFrequency:"monthly",priority:.7},
 {url:base+"/field-notes/when-the-pass-is-the-clue/",lastModified:new Date("2026-11-26"),changeFrequency:"monthly",priority:.7},
 ...["reaction-economy","after-the-momentum","touring-gap","fan-relationship","atproto-music-discovery","fan-participation","from-plan-b-to-plan-a","media-resources","catalog-is-not-dead","label-services-and-creative-freedom","the-nostalgia-cycle","your-pds-your-terms","one-billion-mission","day-date-vinyl","war-of-art"].map(slug=>({url:base+"/field-notes/"+slug+"/",lastModified:new Date("2026-11-23"),changeFrequency:"monthly" as const,priority:.7})),
 {url:base+"/radio/",lastModified:new Date("2026-11-23"),changeFrequency:"weekly",priority:.7}
 ];
}
