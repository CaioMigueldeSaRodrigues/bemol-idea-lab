import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <AboutSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
