import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import PixieHelper from "./components/PixieHelper";

export const metadata: Metadata = {
  metadataBase: new URL("https://loptr-lab.github.io/pay-it-forward/"),
  alternates: { canonical: "/" },
  title: { default: "PLAY IT FORWARD — Music-Led Fan Adventure", template: "%s | PLAY IT FORWARD" },
  description: "Explore music, cities, independent artists, and live shows through an accessible, self-paced fan adventure.",
  applicationName: "PLAY IT FORWARD",
  openGraph: {
    type: "website",
    siteName: "PLAY IT FORWARD",
    title: "PLAY IT FORWARD — Music-Led Fan Adventure",
    description: "Music is a map. Explore cities, discover artists, and make your own fan adventure.",
    url: "https://loptr-lab.github.io/pay-it-forward/",
  },
  twitter: {
    card: "summary",
    title: "PLAY IT FORWARD — Music-Led Fan Adventure",
    description: "Explore music, cities, independent artists, and live shows through an accessible, self-paced fan adventure.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PixieHelper />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "zgmfoczmor");`}
        </Script>
      </body>
    </html>
  );
}
