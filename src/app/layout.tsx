import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "PLAY IT FORWARD | Music-Led Fan Adventure", template: "%s | PLAY IT FORWARD" },
  description: "Explore music, cities, art, local food, and live shows through an accessible, self-paced fan adventure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
