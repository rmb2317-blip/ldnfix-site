// app/roofing-guttering/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/roofing-guttering`;

export const metadata: Metadata = {
  title: "Roofing & Guttering | LDNFIX – Fixing London. Properly.",
  description:
    "Roof repairs, flat roofs, tile replacement and guttering across North & East London. Construction-led, no cowboys – leaks handled properly the first time.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Roofing & Guttering | LDNFIX",
    description:
      "Leak tracing, tile replacement, flat roofs and guttering – managed by a multi-trade builder with 15+ years on the tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing & Guttering | LDNFIX",
    description:
      "Roof leaks and gutter problems fixed properly across London. Fast quotes, WhatsApp photos welcome.",
  },
};

export default function RoofingGutteringPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roofing & guttering",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "London",
    },
    serviceType:
      "Roof repairs, flat roofs, tile replacement, guttering and rainwater systems",
    description:
      "Leak tracing, temporary make-safes, tile and slate replacement, flat roof works and guttering repairs across London.",
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
            / <span className="text-textPrimary">Roofing & guttering</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roofing & guttering
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof leaks and gutter problems fixed properly, not patched.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              From emergency leak tracing to planned flat roof overlays and
              gutter replacements – LDNFIX handles roofing as part of the bigger
              picture of your property, not as a one-off upsell job. You get
              clear advice, realistic options and work that actually solves the
              issue.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical roofing & guttering jobs we take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Leak tracing around chimneys, valleys and flashings.</li>
                  <li>Missing or slipped tiles and slates replaced.</li>
                  <li>Flat roof repairs and overlays (felt, GRP and more).</li>
                  <li>
                    Blocked, damaged or incorrectly pitched gutters sorted.
                  </li>
                  <li>
                    Soffit and fascia issues that are causing water ingress.
                  </li>
                  <li>
                    Making safe storm damage before a full repair is booked.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why book through LDNFIX instead of hunting roofers yourself?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Jobs are scoped by a multi-trade builder who understands how
                    the roof ties into brickwork, structure and interiors.
                  </li>
                  <li>
                    Only the work that&apos;s actually required is priced –
                    you&apos;re not being sold a full re-roof when a targeted
                    repair will do.
                  </li>
                  <li>
                    Trusted roofing specialists brought in when needed, under
                    LDNFIX management and quality control.
                  </li>
                  <li>
                    One point of contact for access, timing and follow-up –
                    ideal for landlords, agents and busy homeowners.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Areas covered for roofing & guttering
                </h2>
                <p>
                  Based in Enfield and regularly working across North & East
                  London – including Barnet, Haringey, Islington, Hackney,
                  Waltham Forest and surrounding areas within the M25.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a leak or roof issue now?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the problem and any previous repairs, and we’ll
                  come back with a straight-talking plan and price.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Roofing & guttering"
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Roofing & guttering"
                  >
                    📅 Book a roof survey
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Roofing & guttering"
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
