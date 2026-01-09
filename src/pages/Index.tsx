import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { KadosportScoreSection } from "@/components/sections/KadosportScoreSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PartnerBenefitsSection } from "@/components/sections/PartnerBenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <KadosportScoreSection />
        <BenefitsSection />
        <PartnerBenefitsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
