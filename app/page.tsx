// app/page.tsx
import HeroSection from "@/components/HeroSection";
import WhyChooseLDNFIX from "@/components/WhyChooseLDNFIX";
import CoreConstructionServices from "@/components/CoreConstructionServices";
import FounderExperienceSection from "@/components/FounderExperienceSection";
import Testimonials from "@/components/Testimonials";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import WorkShowcase from "@/components/WorkShowcase";
import HomepageFAQ from "@/components/HomepageFAQ";
import AreasCovered from "@/components/AreasCovered";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExitIntentModal from "@/components/ExitIntentModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// If you have a Header you actually use, uncomment this:
// import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      {/* If you use a global Header, uncomment this: */}
      {/* <Header /> */}

      <main id="top">
        <HeroSection />
        <WhyChooseLDNFIX />
        <CoreConstructionServices />
      
        <FounderExperienceSection />
        <Testimonials />
        {/* Before/after proof gallery */}
        <BeforeAfterGallery />
        {/* Extra work examples / UGC-style content */}
        <WorkShowcase />
        {/* FAQs near the bottom of the journey */}
        <HomepageFAQ />
        <AreasCovered />
        <ContactSection />
      </main>

      <Footer />

      {/* Sticky WhatsApp bubble at bottom-right if you still use it */}
      <FloatingWhatsApp />

      {/* Desktop-only exit-intent modal */}
      <ExitIntentModal />
    </>
  );
}
