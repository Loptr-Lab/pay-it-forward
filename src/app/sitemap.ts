import type { MetadataRoute } from "next";

const siteUrl = "https://loptr-lab.github.io/pay-it-forward";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/adventure/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/route/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
