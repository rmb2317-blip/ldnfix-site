// app/page.tsx
import WorkShowcase from "@/components/WorkShowcase";
import ExitIntentModal from "@/components/ExitIntentModal";
import HeroSection from "@/components/HeroSection";
import WhyChooseLDNFIX from "@/components/WhyChooseLDNFIX";
import CoreConstructionServices from "@/components/CoreConstructionServices";
import SpecialistTradesNetwork from "@/components/SpecialistTradesNetwork";
import FounderExperienceSection from "@/components/FounderExperienceSection";
import Testimonials from "@/components/Testimonials";
import AreasCovered from "@/components/AreasCovered";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HomepageFAQ from "@/components/HomepageFAQ";

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
        <WorkShowcase /> {/* Before/after proof section */}
        <HomepageFAQ />  {/* New FAQ section with schema */}
        <AreasCovered />
        <ContactSection />
      </main>

      <Footer />

      {/* Desktop-only exit-intent modal */}
      <ExitIntentModal />
    </>
  );
}
