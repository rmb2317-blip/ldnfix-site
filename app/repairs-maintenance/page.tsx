import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/repairs-maintenance`;

export const metadata: Metadata = {
  title: "Repairs & Maintenance | LDNFIX – Fixing London. Properly.",
  description:
    "Day-to-day property repairs and maintenance across North & East London. Ideal for landlords, agents and busy homeowners.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Repairs & Maintenance | LDNFIX",
    description:
      "Locks, doors, minor leaks, making safe and all the annoying jobs handled by a reliable, construction-led service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Repairs & Maintenance | LDNFIX",
    description:
      "Multi-trade repairs and maintenance for London homes, flats and rentals. One call, many problems solved.",
  },
};

export default function RepairsMaintenancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Repairs and maintenance",
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
      "Property repairs, minor leaks, locks, doors, making safe and maintenance",
    description:
      "Multi-trade property repairs and maintenance for London homes, rentals and HMOs.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="border-b border-surfaceMuted/60 bg-background">
        <main className="section-wrapper py-10 sm:py-14 lg:py-16">
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
            / <span className="text-textPrimary">Repairs & maintenance</span>
          </nav>

          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Repairs & maintenance
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              The reliable multi-trade contact for all the small but important
              jobs.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              LDNFIX keeps homes and rentals running – from doors and locks that
              don&apos;t close properly to minor leaks, damaged finishes and
              end-of-tenancy make-good work.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Common repair jobs we handle
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Internal doors not closing or latching properly.</li>
                  <li>
                    Lock changes and hardware upgrades after tenant changeovers.
                  </li>
                  <li>
                    Minor leaks, mould-damaged areas and stained ceilings made
                    good.
                  </li>
                  <li>
                    Loose handrails, skirting, thresholds and other trip or
                    safety risks.
                  </li>
                  <li>
                    End-of-tenancy repairs to get properties back to lettable
                    condition.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Built for landlords, agents & busy owners
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    One contact for many trades – ideal for small portfolios and
                    local agents.
                  </li>
                  <li>
                    Clear communication with photos before/after so you can
                    prove works have been done.
                  </li>
                  <li>
                    Honest advice when a repair is fine vs when replacement is
                    the sensible long-term move.
                  </li>
                </ul>
              </div>
            </section>

            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a list of annoying jobs?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send your list and photos if you have them. We&apos;ll group
                  work sensibly and quote in a way that&apos;s easy to approve.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Repairs & maintenance"
                  >
                    📸 WhatsApp repair list
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Repairs & maintenance"
                  >
                    📅 Book a repair visit
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Repairs & maintenance"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Perfect for local landlords, small blocks and busy households
                  who just want things sorted without drama.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
