import Image from "next/image";
import Hero from "../components/hero";
import PropertyAds from "../components/property-ads-section/property-ads";
import Presentation from "../components/presentation-section/presentation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyAds />
      <Presentation />
    </main>
  );
}
