"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TourSideQuestsPage() {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash;
    router.replace("/route/" + window.location.search + hash);
  }, [router]);
  return <main className="experience-page"><section className="quest-intro"><h1>Tour map</h1><p>The tour and side quests now live together.</p><Link className="button primary" href="/route/">OPEN THE TOUR MAP ↗</Link></section></main>;
}
