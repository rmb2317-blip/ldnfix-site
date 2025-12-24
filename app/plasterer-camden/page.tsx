// app/plasterer-camden/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/plasterer-camden`;

export const metadata: Metadata = {
  title: "Plasterer in Camden | LDNFIX – Fixing London. Properly.",
  description:
    "Plastering in Camden for period flats and terraces. Leak repairs, skimming and making good handled by a builder who understands the full refurb process.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Plasterer in Camden | LDNFIX",
    description:
      "Ceilings and walls in Camden made good properly – ideal for leak damage, refurbs and awkward repairs in older properties.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasterer in Camden | LDNFIX",
    description:
      "Need a plasterer in Camden? LDNFIX started out as a plasterer before moving into full builds – you get more than just a skim.",
  },
};

export default function PlastererCamdenPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plasterer in Camden",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Camden",
    },
    serviceType:
      "Plastering, skimming, rendering and making good in Camden, London",
    description:
      "Plastering work in Camden that respects period features and the bigger refurb plan – not just a quick skim over problems.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
              href="/#areas"
              className="underline-offset-2 hover:underline"
            >
              Areas covered
            </Link>{" "}
            / <span className="text-textPrimary">Plasterer in Camden</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Plastering · Camden
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Plastering in Camden that respects the building, not just the
              paint finish.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Camden&apos;s mix of Victorian terraces, mansion blocks and
              conversions means no two rooms are the same. LDNFIX handles
              plastering as part of the wider job – from leak damage and rewires
              to full room refurbs – so the finish lasts beyond the first coat
              of paint.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left */}
            <section className="space-y-6 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Plastering work we regularly do in Camden
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Skimming tired ceilings and walls ready for high-quality
                    decorating.
                  </li>
                  <li>
                    Making good after leaks once the roof and pipework have been
                    sorted.
                  </li>
                  <li>
                    Repairing blown plaster and cracks in older properties.
                  </li>
                  <li>
                    Bonding and patch repairs where full skim isn&apos;t
                    necessary, saving cost where sensible.
                  </li>
                  <li>
                    Working alongside electricians, carpenters and decorators on
                    full refurbs.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why choose LDNFIX for plastering in Camden?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    15+ years on real construction jobs, starting out as a
                    plasterer.
                  </li>
                  <li>
                    Rooms protected, dust managed and neighbours considered –
                    important in shared buildings.
                  </li>
                  <li>
                    Sensible advice on where to repair, where to skim and where
                    to replace entirely.
                  </li>
                  <li>
                    Ideal for landlords and agents who need reliable, neat
                    work, not just the cheapest quote.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Camden plastering coverage
                </h2>
                <p>
                  Working across Camden, Kentish Town, Belsize Park, Chalk Farm
                  and nearby streets. If you&apos;re unsure whether the walls
                  need full skim or just smart repairs, send photos and we&apos;ll
                  give you an honest view.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need a plasterer in Camden?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the room, any cracks and the wider space.
                  You&apos;ll get a realistic plan and price – repair vs full
                  skim – tailored to the property and what you&apos;re trying to
                  achieve.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Plasterer Camden"
                  >
                    📸 WhatsApp plastering photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Plasterer Camden"
                  >
                    📅 Book a plastering quote
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Plasterer Camden"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Perfect for Camden owners and landlords who want plastering
                  finished to a standard the decorating can actually sit on –
                  not something that needs redoing in a year.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
