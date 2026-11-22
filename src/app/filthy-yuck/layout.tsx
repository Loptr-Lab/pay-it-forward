import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FILTHY YUCK! — Not a Slave to the Machine | Play It Forward",
  description: "An interactive, human-led story prototype about creative agency, tools, source IP, and choosing what to make.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/filthy-yuck/" },
};

export default function FilthyYuckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
