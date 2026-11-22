import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://loptr-lab.github.io/pay-it-forward";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/adventure/`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/route/`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tour-resilience/`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/tour-side-quests/`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/culture/`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/music/devour/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/filthy-yuck/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/every-day/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/field-notes/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/field-notes/from-plan-b-to-plan-a/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.8 },\n    { url: `${base}/field-notes/after-the-momentum/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/field-notes/touring-gap/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/field-notes/fan-relationship/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/field-notes/atproto-music-discovery/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/field-notes/fan-participation/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/field-notes/media-resources/`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.6 },
  ];
}
