// app/plasterer-enfield/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/plasterer-enfield`;

export const metadata: Metadata = {
  title: "Plasterer in Enfield | LDNFIX – Fixing London. Properly.",
  description:
    "Local plastering and making-good in Enfield. Ceilings, walls and leak damage repaired and skimmed properly – not just patched.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Plasterer in Enfield | LDNFIX",
    description:
      "Enfield-based plastering and making-good. Skimming, patch repairs and leak damage restoration with a construction-led approach.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasterer in Enfield | LDNFIX",
    description:
      "Need a plasterer in Enfield? 15+ years experience making ceilings and walls good properly, ready for painting.",
  },
};

const FAQ_ITEMS = [
  {
    question: "Can you make good after a leak in an Enfield flat or house?",
    answer:
      "Yes. A lot of plastering work locally is making good after roof, bathroom or plumbing leaks. I strip back loose material, allow proper drying time where needed and rebuild the surface so it is ready for decorating, not just covered up.",
  },
  {
    question: "Do you handle small repairs as well as full rooms?",
    answer:
      "Yes. Sometimes it is a small patch where plaster has blown, sometimes it is a full room skim, sometimes it is a full refurb. I am happy to advise honestly on when a patch is enough and when it makes sense to do more.",
  },
  {
    question: "Will you protect floors and keep the place tidy?",
    answer:
      "Yes. Properties are always protected with sheeting and the workspace is kept as tidy as possible. I have spent years working in lived-in homes – I know people still need to use the space during and after the job.",
  },
  {
    question: "Do you work for Enfield landlords and local agents?",
    answer:
      "Yes. I regularly help landlords and smaller agents who need damaged ceilings and walls sorted properly between tenancies. I can provide photos of the work and keep you updated so you are not chasing.",
  },
];

export default function PlastererEnfieldPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plasterer in Enfield",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Enfield, North London",
    },
    serviceType:
      "Plastering, skimming, making-good and rendering in Enfield homes and flats",
    description:
      "Local plastering and making-good in Enfield – ceilings and walls repaired and skimmed properly after leaks, refurbs and previous bad work.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, faqSchema]),
        }}
      />

      <div className="border-b border-surfaceMuted/60 bg-background">
        <main className="section-wrapper py-10 sm:py-14 lg:py-16">
          {/* Breadcrumb */}
          <nav className="mb-4 text-[11px] text-textMuted">
            <Link href="/" className="underline-offset-2 hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link
              href="/plastering-rendering"
              className="underline-offset-2 hover:underline"
            >
              Plastering & rendering
            </Link>{" "}
            / <span className="text-textPrimary">Plasterer in Enfield</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Enfield · Plastering & making-good
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Local plastering and making-good in Enfield.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Based in Enfield and working across EN1–EN3, I repair and skim
              ceilings and walls after leaks, refurbs and previous bad work. The
              goal is simple: clean, solid surfaces that decorators actually
              enjoy painting, not surfaces that hide problems.
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – local detail + FAQ */}
            <section className="space-y-6 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical Enfield plastering jobs I take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Ceilings and walls damaged by leaks or damp.</li>
                  <li>Skimming over rough or dated finishes to modernise rooms.</li>
                  <li>Patch repairs where old plaster has blown or cracked.</li>
                  <li>
                    Making good after rewires or other building works in lived-in
                    homes.
                  </li>
                  <li>
                    Full room or multi-room skims as part of refurbs and landlord
                    projects.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why use LDNFIX instead of just “a plasterer near me”?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    You are dealing with someone who understands structure,
                    moisture and finishes – not just throwing on plaster to hide
                    a problem.
                  </li>
                  <li>
                    Work is priced and planned with the rest of the property in
                    mind – roofing, leaks, future decorating and refurbs.
                  </li>
                  <li>
                    Ideal for Enfield landlords and agents who want rooms turned
                    around quickly and properly between tenants.
                  </li>
                </ul>
              </div>

              {/* FAQ section */}
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Plasterer in Enfield – common questions
                </h2>
                <div className="divide-y divide-surfaceMuted rounded-2xl border border-surfaceMuted bg-surface">
                  {FAQ_ITEMS.map((item) => (
                    <details
                      key={item.question}
                      className="group px-4 py-3 text-xs sm:text-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left text-textPrimary">
                        <span className="font-medium">{item.question}</span>
                        <span className="text-[11px] text-textMuted transition group-open:rotate-90">
                          →
                        </span>
                      </summary>
                      <p className="mt-2 text-xs text-textMuted">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* Right – Enfield-focused CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need a plasterer in Enfield?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the damaged areas and wider room shots. I’ll
                  come back with a clear plan – whether that is patching, full
                  skims or a mix of both.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="cta-click-send-photo"
                    data-source="plasterer-enfield"
                  >
                    📸 WhatsApp Enfield plaster photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="cta-click-form"
                    data-source="plasterer-enfield"
                  >
                    📅 Book a plastering visit
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="cta-click-call"
                    data-source="plasterer-enfield"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for Enfield homeowners and landlords who want plastering
                  done once and done properly, ready for decorating.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
