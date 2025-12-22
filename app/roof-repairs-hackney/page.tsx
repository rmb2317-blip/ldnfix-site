// app/roof-repairs-hackney/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/roof-repairs-hackney`;

export const metadata: Metadata = {
  title: "Roof repairs in Hackney | LDNFIX – Fixing London. Properly.",
  description:
    "Roof repairs, leak tracing and gutter problems handled properly in Hackney and surrounding areas. 15+ years construction experience behind every job.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Roof repairs in Hackney | LDNFIX",
    description:
      "Targeted roof repairs, tile replacement, flat roofs and guttering in Hackney – scoped and managed by a multi-trade builder, not a call centre.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof repairs in Hackney | LDNFIX",
    description:
      "Got a roof leak in Hackney? Send photos to LDNFIX for a straight-talking plan and quote.",
  },
};

export default function RoofRepairsHackneyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof repairs in Hackney",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Hackney",
    },
    serviceType:
      "Roof repairs, leak tracing, tile replacement, flat roofs and guttering in Hackney",
    description:
      "Leak tracing, make-safes, tile and slate replacement, flat roof works and guttering repairs in Hackney, managed end-to-end by LDNFIX.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              href="/#services"
              className="underline-offset-2 hover:underline"
            >
              Services
            </Link>{" "}
            / <span className="text-textPrimary">Roof repairs in Hackney</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roof repairs · Hackney
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof leaks in Hackney handled properly, not just patched.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              From slipped tiles and leaking valleys to tired flat roofs and
              overflowing gutters – LDNFIX scopes roof work in Hackney with the
              whole property in mind. You get honest options, clear pricing and
              work that actually solves the problem.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical roof and gutter issues in Hackney we take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Leaks around chimneys, party walls and parapets.</li>
                  <li>Missing or broken tiles and slates after bad weather.</li>
                  <li>
                    Ageing flat roofs on extensions, dormers and balconies.
                  </li>
                  <li>Blocked or badly-pitched gutters causing damp patches.</li>
                  <li>
                    Soffit, fascia and junction issues where water is tracking
                    inside.
                  </li>
                  <li>
                    Make-safe repairs while a longer-term solution is planned.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why book LDNFIX instead of phoning round random roofers?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Jobs are scoped by a builder who understands structure,
                    brickwork and interiors – not just the roof in isolation.
                  </li>
                  <li>
                    You get options: targeted repair vs. bigger works, explained
                    in plain language.
                  </li>
                  <li>
                    Trusted roofing specialists brought in when needed, under
                    LDNFIX management and quality control.
                  </li>
                  <li>
                    One point of contact for keys, access and timings – ideal
                    for landlords and letting agents with Hackney portfolios.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Areas of Hackney covered
                </h2>
                <p>
                  Regularly working across Hackney including Stoke Newington,
                  Clapton, Dalston, London Fields, Homerton and surrounding
                  streets. If you&apos;re close by and the job is a good fit,
                  it&apos;s still worth getting in touch.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a roof issue in Hackney now?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the problem and any previous repairs. You&apos;ll
                  get a straight-talking plan and quote – no upselling a full
                  re-roof if a targeted repair will do.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Roof repairs Hackney"
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Roof repairs Hackney"
                  >
                    📅 Book a roof survey
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Roof repairs Hackney"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for homeowners, landlords and agents who want roof
                  issues handled once, properly – not patched up every winter.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
