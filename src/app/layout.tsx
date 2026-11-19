import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLAY IT FORWARD — Fan Adventure",
  description: "Discover music, explore, create, and connect through an accessible fan adventure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
