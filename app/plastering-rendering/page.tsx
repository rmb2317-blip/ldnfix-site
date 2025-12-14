// app/plastering-rendering/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/plastering-rendering`;

export const metadata: Metadata = {
  title: "Plastering & Rendering | LDNFIX – Fixing London. Properly.",
  description:
    "Plastering, skimming and rendering across North & East London. Walls, ceilings and exteriors repaired and finished properly, not just filled.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Plastering & Rendering | LDNFIX",
    description:
      "Skimming, making good after leaks, patch repairs and external rendering – managed by a multi-trade builder with 15+ years on the tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plastering & Rendering | LDNFIX",
    description:
      "Need walls or ceilings repaired and skimmed properly in London? WhatsApp photos for a straight-talking quote.",
  },
};

export default function PlasteringRenderingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plastering & rendering",
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
      "Plastering, skimming, making good after leaks, patch repairs, external rendering",
    description:
      "Ceiling and wall repairs, skimming, patching and rendering across North & East London, carried out or managed by an experienced multi-trade builder.",
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
            / <span className="text-textPrimary">Plastering & rendering</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Plastering & rendering
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Walls and ceilings made good properly, not just filled.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Whether it&apos;s damage from leaks, previous bad work or a full
              refurb, LDNFIX handles plastering as part of the bigger picture of
              your property. You get straight advice on what needs patching,
              what needs skimming and how to get to a clean, paint-ready finish.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical plastering & rendering jobs we take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Making good ceilings and walls after leaks or rewires.</li>
                  <li>
                    Skimming over old artex or rough finishes to modernise rooms.
                  </li>
                  <li>Patch repairs where plaster has blown or cracked.</li>
                  <li>
                    External rendering repairs and small sections of new render.
                  </li>
                  <li>
                    Full room or whole-property skim coats as part of refurbs.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why use LDNFIX instead of a random one-off plasterer?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Jobs are scoped by someone who understands structure,
                    moisture and finishes – not just &quot;throwing on&quot; plaster.
                  </li>
                  <li>
                    We look at the cause of cracks and blown areas, not just the
                    symptoms.
                  </li>
                  <li>
                    Where other trades are involved (roofers, plumbers,
                    electricians) everything is managed so the finish isn&apos;t
                    ruined.
                  </li>
                  <li>
                    Ideal for landlords and agents who need rooms turned around
                    quickly between tenants.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Areas covered for plastering & rendering
                </h2>
                <p>
                  Based in Enfield and regularly working across North & East
                  London – including Barnet, Haringey, Islington, Hackney and
                  Waltham Forest, plus surrounding areas within the M25.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need walls or ceilings made good?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the damage and any wider room shots, and we’ll
                  come back with a practical plan – from patching to full
                  skims.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Plastering & rendering"
                  >
                    📸 WhatsApp plaster photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Plastering & rendering"
                  >
                    📅 Book a plastering visit
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Plastering & rendering"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Perfect for homeowners and landlords who want rooms finished
                  properly so decorating is straightforward – not a fight
                  against bumps and bad repairs.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
