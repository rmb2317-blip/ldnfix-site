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

export default function HomePage() {
  // FAQ schema for the "Questions / LDNFIX in plain English" section
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of work does LDNFIX actually take on?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "LDNFIX is built around real construction experience, not just odd jobs. I handle and manage roof repairs, plastering, brickwork, refurbs, making good after leaks and day-to-day property maintenance. Plumbing and electrical are done by qualified specialists I trust, under my management.",
        },
      },
      {
        "@type": "Question",
        name: "Who will I actually be dealing with?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You deal with me directly. I survey the job, price it and manage the work. When extra trades are needed, I bring in people I already know and trust. You are not being passed around a call centre or a lead-selling site.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with landlords, agents and Airbnb hosts?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. I regularly help landlords, small portfolios, local agents and short-let hosts who need jobs done reliably without chasing. I can liaise with tenants for access, provide photo updates and keep you in the loop.",
        },
      },
      {
        "@type": "Question",
        name: "Which areas of London do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "I am based in Enfield and regularly work across North & East London – including Enfield, Barnet, Haringey, Islington, Hackney, Waltham Forest and surrounding areas within the M25. For the right jobs I can travel further.",
        },
      },
      {
        "@type": "Question",
        name: "How do quotes and pricing work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For many jobs, clear photos and a postcode are enough for an initial estimate. For more involved work, I visit, assess properly and send a written quote that explains what is included. No vague one-liners and no surprise extras halfway through.",
        },
      },
    ],
  };

  return (
    <>
      {/* Homepage FAQ JSON-LD for rich results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="top">
        <HeroSection />
        <WhyChooseLDNFIX />
        <CoreConstructionServices />
        <SpecialistTradesNetwork />
        <FounderExperienceSection />
        <Testimonials />
        <WorkShowcase /> {/* Before/after proof section */}
        <AreasCovered />
        <ContactSection />
      </main>

      <Footer />

      {/* Desktop-only exit-intent modal */}
      <ExitIntentModal />
    </>
  );
}
