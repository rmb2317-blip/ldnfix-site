// app/plasterer-islington/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/plasterer-islington`;

export const metadata: Metadata = {
  title: "Plasterer in Islington | LDNFIX – Fixing London. Properly.",
  description:
    "Ceilings and walls made good properly in Islington. Skimming, bonding and repairs after leaks, refurbs and previous bad work.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Plasterer in Islington | LDNFIX",
    description:
      "Plastering in Islington with a builder’s eye for the full job – including decorating and other trades if you need them handled.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasterer in Islington | LDNFIX",
    description:
      "Need a plasterer in Islington? Send photos to LDNFIX for a clear plan and quote.",
  },
};

export default function PlastererIslingtonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plasterer in Islington",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Islington",
    },
    serviceType: "Plastering and rendering in Islington",
    description:
      "Skimming, bonding and making good after leaks, cracking and previous poor work in Islington – with decorating and other trades managed where needed.",
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
            / <span className="text-textPrimary">Plasterer in Islington</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Plastering · Islington
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Plastering in Islington finished ready for paint, not just “good
              from a distance”.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              From full room skims to awkward repairs after leaks, LDNFIX
              approaches plastering in Islington as part of the whole project –
              thinking about decorating, joinery and electrics that follow, not
              just the wet trade in isolation.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical plastering jobs in Islington
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Skimming tired ceilings and walls ready for decorating.</li>
                  <li>Making good after leaks, rewires and bathroom refits.</li>
                  <li>
                    Bonding and patch repairs where full rip-out isn&apos;t
                    needed.
                  </li>
                  <li>
                    Straightening old surfaces before new kitchens or wardrobes
                    go in.
                  </li>
                  <li>
                    Tidying up previous bad plastering before a sale or new
                    tenancy.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why use LDNFIX instead of a one-man plasterer?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Started out as a plasterer before moving into wider building
                    work – so details matter.
                  </li>
                  <li>
                    We think ahead to how decorators, carpenters and electricians
                    will work after the plaster is dry.
                  </li>
                  <li>
                    Perfect for landlords and agents who want clean, predictable
                    jobs with minimal tenant disruption.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Islington areas covered
                </h2>
                <p>
                  Covering Highbury, Holloway, Archway, Angel, Barnsbury and
                  nearby streets. If you&apos;re close and the job is a good fit,
                  it&apos;s worth getting in touch.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need a plasterer in Islington?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the room or damaged area and we&apos;ll come
                  back with a clear, construction-led plan – including decorating
                  if you want that handled too.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Plasterer Islington"
                  >
                    📸 WhatsApp room photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Plasterer Islington"
                  >
                    📅 Book a plastering quote
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Plasterer Islington"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for homeowners, landlords and agents who want plastering
                  in Islington finished neatly, on time and ready for the next
                  trade.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
