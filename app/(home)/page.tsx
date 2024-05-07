import Hero from "../components/hero";
import PropertyAds from "../components/property-ads-section/property-ads";
import Presentation from "../components/presentation-section/presentation";
import PropertyOptions from "../components/property-options-section/property-options";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyAds />
      <Presentation />
      <PropertyOptions />
    </main>
  );
}
