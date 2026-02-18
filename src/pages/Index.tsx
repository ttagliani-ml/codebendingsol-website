import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClientsSection from "@/components/ClientsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CtaSection />
      <FeaturesSection />
      <ClientsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
