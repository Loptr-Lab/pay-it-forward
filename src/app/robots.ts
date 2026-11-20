import type { MetadataRoute } from "next";

const siteUrl = "https://loptr-lab.github.io/pay-it-forward";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
