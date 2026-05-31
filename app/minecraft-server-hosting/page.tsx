import { HeroSection } from "@/components/minecraft-server-hosting/hero-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { ServerTypesSection } from "@/components/server-types-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { ServerManagerSection } from "@/components/server-manager-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FAQSection } from "@/components/faq-section";

export default function MinecraftServerHosting() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialSection />
      <ServerTypesSection />
      <FeaturesSection />
      <PricingSection />
      <ServerManagerSection />
      <ComparisonSection />
      <FAQSection />
    </main>
  );
}
