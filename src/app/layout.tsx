import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://loptr-lab.github.io/pay-it-forward/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PLAY IT FORWARD — Music-Led Fan Adventure",
    template: "%s | PLAY IT FORWARD",
  },
  description:
    "Discover music, explore cities, create, and connect through an accessible, self-paced fan adventure.",
  applicationName: "PLAY IT FORWARD",
  openGraph: {
    type: "website",
    siteName: "PLAY IT FORWARD",
    title: "PLAY IT FORWARD — Music-Led Fan Adventure",
    description:
      "Music is a map. Explore cities, discover artists, and make your own fan adventure.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "PLAY IT FORWARD — Music-Led Fan Adventure",
    description:
      "Music is a map. Explore cities, discover artists, and make your own fan adventure.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
