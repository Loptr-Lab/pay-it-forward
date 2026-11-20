import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://loptr-lab.github.io/pay-it-forward/sitemap.xml",
  };
}
