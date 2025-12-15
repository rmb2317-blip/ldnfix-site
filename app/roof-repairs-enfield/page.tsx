// app/roof-repairs-enfield/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/roof-repairs-enfield`;

export const metadata: Metadata = {
  title: "Roof Repairs in Enfield | LDNFIX – Fixing London. Properly.",
  description:
    "Targeted roof repairs in Enfield – leaks, missing tiles, flashing issues and gutter problems handled properly by a construction-led specialist.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Roof Repairs Enfield | LDNFIX",
    description:
      "Enfield-based roof repairs and leak tracing. Send photos on WhatsApp for a fast, straight-talking quote.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repairs Enfield | LDNFIX",
    description:
      "Need roof repairs in Enfield? 15+ years experience, honest advice and properly managed jobs.",
  },
};

export default function RoofRepairsEnfieldPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof repairs in Enfield",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Enfield",
    },
    serviceType:
      "Roof repairs, leak tracing, tile replacement and gutter repairs in Enfield",
    description:
      "Targeted roof repairs and leak tracing in Enfield – from missing tiles and flashing issues to gutter-related leaks.",
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
              href="/roofing-guttering"
              className="underline-offset-2 hover:underline"
            >
              Roofing & guttering
            </Link>{" "}
            / <span className="text-textPrimary">Roof repairs in Enfield</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roof repairs in Enfield
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof leaks in Enfield handled properly – not just patched.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Based in Enfield and working across EN1–EN3, LDNFIX deals with
              leaks, failed flashings, missing tiles and gutter-related issues
              with a construction-led view of your whole property – not just
              another “quick fix” that fails next winter.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* LEFT – details */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical Enfield roof repair jobs
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Leak tracing around chimneys, valleys and flashings.</li>
                  <li>Replacing slipped or broken tiles and slates.</li>
                  <li>Localised flat roof repairs and overlays.</li>
                  <li>
                    Sorting gutters and downpipes that are causing damp or
                    overflow.
                  </li>
                  <li>Making safe storm damage before full repairs.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why book LDNFIX instead of trying pot-luck roofers?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Jobs scoped by a multi-trade builder with 15+ years on the
                    tools.
                  </li>
                  <li>
                    You get options: targeted repair vs bigger works, explained
                    clearly.
                  </li>
                  <li>
                    Trusted Enfield roofing specialists brought in where needed,
                    under LDNFIX management.
                  </li>
                  <li>
                    One point of contact for landlords, agents and busy
                    homeowners.
                  </li>
                </ul>
              </div>
            </section>

            {/* RIGHT – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a roof issue in Enfield right now?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the issue and any previous repairs. You’ll get
                  a straight-talking plan and price – no pressure to do more
                  than the job actually needs.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Roof repairs Enfield"
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Roof repairs Enfield"
                  >
                    📅 Book a local roof visit
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Roof repairs Enfield"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for Enfield homeowners, landlords and agents who want
                  leaks handled properly with minimal disruption – not another
                  temporary fix.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
