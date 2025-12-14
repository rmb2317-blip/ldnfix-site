// app/page.tsx

import HeroSection from "@/components/HeroSection";
import WhyChooseLDNFIX from "@/components/WhyChooseLDNFIX";
import CoreConstructionServices from "@/components/CoreConstructionServices";
import SpecialistTradesNetwork from "@/components/SpecialistTradesNetwork";
import FounderExperienceSection from "@/components/FounderExperienceSection";
import Testimonials from "@/components/Testimonials";
import AreasCovered from "@/components/AreasCovered";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <main id="top">
        <HeroSection />
        <WhyChooseLDNFIX />
        <CoreConstructionServices />
        <SpecialistTradesNetwork />
        <FounderExperienceSection />
        <Testimonials />
        <AreasCovered />
        <ContactSection />
      </main>

      <Footer />
      {/* Sticky WhatsApp bar at the very bottom */}
      <FloatingWhatsApp />
    </>
  );
}
