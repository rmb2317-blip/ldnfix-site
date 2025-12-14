import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/refurbishments`;

export const metadata: Metadata = {
  title: "Refurbs & Makeovers | LDNFIX – Fixing London. Properly.",
  description:
    "Room, flat and house refurbishments across North & East London. Construction-led, multi-trade projects managed under one point of contact.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Refurbs & Makeovers | LDNFIX",
    description:
      "End-of-tenancy refreshes, tired room makeovers and full flat refurbs – scoped and managed by an experienced builder.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refurbs & Makeovers | LDNFIX",
    description:
      "Joined-up management of decorating, repairs and trades to get London homes market-ready.",
  },
};

export default function RefurbishmentsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Refurbishments and makeovers",
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
      "Room refurbs, flat makeovers, decorating, repairs and multi-trade coordination",
    description:
      "Room and property refurbishments for London homeowners and landlords, managed end-to-end.",
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
            / <span className="text-textPrimary">Refurbs & makeovers</span>
          </nav>

          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Refurbs & makeovers
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Joined-up refurb work that actually finishes on the date agreed.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              LDNFIX coordinates the right sequence of trades – repairs,
              plastering, decorating, flooring and more – so your property moves
              smoothly from tired to ready, without you playing project manager.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  The kind of refurb work we take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>End-of-tenancy refreshes to get rentals back to standard.</li>
                  <li>
                    Tired rooms brought up to date with repairs and redecorating.
                  </li>
                  <li>
                    Light internal reconfigurations tied in with new finishes.
                  </li>
                  <li>
                    Coordinated repairs, plastering and decorating after leaks
                    or major works.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why refurbs work better under LDNFIX
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Run by someone who understands build order – not just
                    individual trades.
                  </li>
                  <li>
                    Realistic start and finish dates, with honest conversations
                    when scope changes.
                  </li>
                  <li>
                    One point of contact for owners, tenants and agents.
                  </li>
                </ul>
              </div>
            </section>

            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Planning a refurb or refresh?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Share photos, a rough scope and timings. We&apos;ll come back
                  with a sensible plan that balances budget, disruption and end
                  result.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Refurbs & makeovers"
                  >
                    📸 WhatsApp refurb photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Refurbs & makeovers"
                  >
                    📅 Talk through a refurb
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Refurbs & makeovers"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for owners and landlords who want a straight-talking
                  plan, not endless back-and-forth with multiple trades.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
