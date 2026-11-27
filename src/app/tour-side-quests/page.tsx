import type { Metadata } from "next";
import TourSideQuests from "./TourSideQuests";
export const metadata: Metadata = {
  title: "NOT A TOY Tour Side Quests | PLAY IT FORWARD",
  description: "Turn the NOT A TOY tour into a city-by-city fan adventure. Explore city quests and post-show fan participation.",
  alternates: { canonical: "https://loptr-lab.github.io/pay-it-forward/route/" },
};
export default function Page() { return <TourSideQuests />; }
