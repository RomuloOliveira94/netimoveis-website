import Hero from "../components/hero";
import PropertyAds from "../components/property-ads-section/property-ads";
import Presentation from "../components/presentation-section/presentation";
import PropertyOptions from "../components/property-options-section/property-options";
import Advertise from "../components/advertise-section/advertise";
import States from "../components/states-section/states";
import Phrases from "../components/phrases-section/phrases";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyAds />
      <Presentation />
      <PropertyOptions />
      <Advertise />
      <States />
      <Phrases />
    </main>
  );
}
