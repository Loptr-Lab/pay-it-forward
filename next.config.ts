import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.GITHUB_PAGES ? "/pay-it-forward" : "",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
