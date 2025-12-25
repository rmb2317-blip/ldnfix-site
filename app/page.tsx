// app/page.tsx
import HeroSection from "@/components/HeroSection";
import WorkShowcase from "@/components/WorkShowcase";
import WhyChooseLDNFIX from "@/components/WhyChooseLDNFIX";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CoreConstructionServices from "@/components/CoreConstructionServices";
import FounderExperienceSection from "@/components/FounderExperienceSection";
import HomepageFAQ from "@/components/HomepageFAQ";
import AreasCovered from "@/components/AreasCovered";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function HomePage() {
  return (
    <>
      <main id="top">
        {/* 1. Hero – immediate hook & CTAs */}
        <HeroSection />

        {/* 2. Visual proof / recent jobs */}
        <WorkShowcase />

        {/* 3. Why people trust LDNFIX */}
        <WhyChooseLDNFIX />

        {/* 4. Social proof – reviews */}
        <Testimonials />

        {/* 5. Core service tiles (quick scan + CTAs) */}
        <Services />

        {/* 6. Deeper breakdown of construction services */}
        <CoreConstructionServices />

        {/* 7. FAQs to remove friction & objections */}
        <HomepageFAQ />

        {/* 8. Founder story / experience positioning */}
        <FounderExperienceSection />

        {/* 9. Boroughs / areas for local SEO */}
        <AreasCovered />

        {/* 10. Strong contact / quote section */}
        <ContactSection />
      </main>

      {/* 11. Global footer */}
      <Footer />

      {/* 12. WhatsApp floating button on all viewport sizes */}
      <FloatingWhatsApp />

      {/* 13. Desktop exit-intent capture */}
      <ExitIntentModal />
    </>
  );
}
