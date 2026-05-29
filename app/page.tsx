import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { GamePanelSection } from "@/components/home/game-panel-section";
import { RamCalculatorSection } from "@/components/home/ram-calculator-section";
import { ModpacksSection } from "@/components/modpacks-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FAQSection } from "@/components/faq-section";
import { PartnershipsSection } from "@/components/home/partnerships-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PricingSection />
      <GamePanelSection />
      <RamCalculatorSection />
      <ModpacksSection />
      <ComparisonSection />
      <FAQSection />
      <PartnershipsSection />
    </main>
  );
}
