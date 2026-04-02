import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { B2BHero } from "@/components/b2b/B2BHero";
import { B2BAlternative } from "@/components/b2b/B2BAlternative";
import { B2BSportsCard } from "@/components/b2b/B2BSportsCard";
import { B2BDeployment } from "@/components/b2b/B2BDeployment";
import { B2BBenefits } from "@/components/b2b/B2BBenefits";
import { B2BWhySport } from "@/components/b2b/B2BWhySport";
import { B2BCTA } from "@/components/b2b/B2BCTA";

const B2B = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <B2BHero />
        <B2BAlternative />
        <B2BSportsCard />
        <B2BDeployment />
        <B2BBenefits />
        <B2BWhySport />
        <B2BCTA />
      </main>
      <Footer />
    </div>
  );
};

export default B2B;
