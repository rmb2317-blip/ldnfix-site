// app/roof-repairs-barnet/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const LOCATION = "Barnet";
const PAGE_PATH = "roof-repairs-barnet"; // this folder name
const PAGE_URL = `${SITE_URL}/${PAGE_PATH}`;
const SERVICE_NAME = "Roof repairs in Barnet";

const faqs = [
  {
    question: "Do you only cover Barnet, or wider North London?",
    answer:
      "Barnet is a core area, but I also regularly work across nearby North London postcodes – especially Enfield, Finchley, Whetstone, Southgate and surrounding areas within the M25.",
  },
  {
    question: "Can you look at a leak before I commit to a full repair?",
    answer:
      "Yes. I can attend to trace where the water is getting in, make safe if needed, and then give you clear options and pricing for a proper repair – not just a quick patch.",
  },
  {
    question: "Do you work with tenanted properties and managing agents?",
    answer:
      "Absolutely. I’m used to dealing with keys, access, photo updates and written reports so landlords, agents and busy owners know exactly what’s happening on the job.",
  },
  {
    question: "Can you organise scaffolding if it’s needed?",
    answer:
      "Yes. If scaffolding or access equipment is required, I can arrange this as part of the quote so you’re not juggling multiple companies.",
  },
];

export const metadata: Metadata = {
  title: `${SERVICE_NAME} | ${BUSINESS_NAME}`,
  description:
    "Roof leaks, missing tiles and gutter issues handled properly in Barnet. Construction-led diagnosis, clear pricing and repairs that actually solve the problem.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: `${SERVICE_NAME} | ${BUSINESS_NAME}`,
    description:
      "Local roof repairs in Barnet – from leak tracing to tile replacement and flat roofs. Managed by a multi-trade builder with 15+ years on the tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SERVICE_NAME} | ${BUSINESS_NAME}`,
    description:
      "Need roof repairs in Barnet? Send photos for a fast, straight-talking quote – no cowboys, no call centre.",
  },
};

export default function RoofRepairsBarnetPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: SERVICE_NAME,
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      areaServed: {
        "@type": "AdministrativeArea",
        name: LOCATION,
      },
    },
    serviceType:
      "Roof repairs, leak tracing, tile and slate replacement, flat roof works and guttering repairs",
    areaServed: {
      "@type": "City",
      name: "London",
    },
    description:
      "Roof repairs in Barnet including leak tracing, temporary make-safes, tile replacement, flat roof repairs and guttering work.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD for Service + FAQ */}
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
              href="/roofing-guttering"
              className="underline-offset-2 hover:underline"
            >
              Roofing & guttering
            </Link>{" "}
            / <span className="text-textPrimary">Roof repairs in {LOCATION}</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roof repairs · {LOCATION}
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof repairs in {LOCATION} that solve the leak properly – not just
              patch it.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Missing tiles, leaks around chimneys or flat roof issues? LDNFIX
              treats roof problems in {LOCATION} as part of the whole property –
              brickwork, structure and interiors included – so you don&apos;t
              keep paying for the same issue every winter.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail sections */}
            <section className="space-y-6 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical roof issues handled in {LOCATION}
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Leak tracing around chimneys, valleys and flashings.</li>
                  <li>Missing or slipped tiles and slates replaced properly.</li>
                  <li>Flat roof repairs and overlays on felt, GRP and more.</li>
                  <li>
                    Blocked or damaged gutters causing damp and overflow.
                  </li>
                  <li>
                    Soffit and fascia problems letting water into the structure.
                  </li>
                  <li>
                    Make-safe works after storms or high winds while a full
                    repair is arranged.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why book roof repairs through LDNFIX?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    15+ years on real construction projects – not a call centre
                    selling leads.
                  </li>
                  <li>
                    Jobs are scoped by someone who understands roofs, brickwork
                    and interiors together.
                  </li>
                  <li>
                    Trusted specialist roofers brought in when needed, under
                    one point of management.
                  </li>
                  <li>
                    Clear photos, updates and paperwork – ideal for landlords
                    and managing agents.
                  </li>
                  <li>
                    Honest advice on repair vs replacement so you don&apos;t
                    overspend.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Areas covered around {LOCATION}
                </h2>
                <p>
                  As well as Barnet itself, I regularly handle roof repairs in
                  nearby areas like Finchley, Whetstone, Mill Hill, Southgate,
                  Enfield and across North London within the M25.
                </p>
              </div>

              {/* FAQs */}
              <section aria-labelledby="roof-barnet-faq-heading">
                <h2
                  id="roof-barnet-faq-heading"
                  className="mb-2 text-sm font-semibold text-textPrimary"
                >
                  Roof repairs in {LOCATION} – FAQs
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-surfaceMuted bg-surface px-4 py-3"
                    >
                      <summary className="cursor-pointer list-none text-xs font-semibold text-textPrimary">
                        <span className="inline-flex items-center justify-between gap-2">
                          {faq.question}
                          <span className="text-[10px] text-textMuted group-open:hidden">
                            +
                          </span>
                          <span className="hidden text-[10px] text-textMuted group-open:inline">
                            −
                          </span>
                        </span>
                      </summary>
                      <p className="mt-2 text-[11px] text-textMuted">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </section>

            {/* Right – CTA card */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a roof issue in {LOCATION} now?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the problem plus any previous repairs, and
                  I&apos;ll come back with a straight-talking plan and price.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service={`Roof repairs – ${LOCATION}`}
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service={`Roof repairs – ${LOCATION}`}
                  >
                    📅 Book a roof survey
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service={`Roof repairs – ${LOCATION}`}
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for homeowners, landlords and agents who want roof
                  issues handled properly with minimal disruption – not just
                  another patch that fails next winter.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
