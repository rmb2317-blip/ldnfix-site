// app/plasterer-hackney/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/plasterer-hackney`;

export const metadata: Metadata = {
  title: "Plasterer in Hackney | LDNFIX – Fixing London. Properly.",
  description:
    "Skimming, bonding, making good after leaks and previous bad work in Hackney. Experienced plastering with a builder’s eye for the finished job.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Plasterer in Hackney | LDNFIX",
    description:
      "Ceilings and walls in Hackney made good properly after leaks, refurbs and historic issues – with decorating and other trades managed as needed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasterer in Hackney | LDNFIX",
    description:
      "Need a plasterer in Hackney? Send photos to LDNFIX for a clear plan and quote.",
  },
};

export default function PlastererHackneyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plasterer in Hackney",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Hackney",
    },
    serviceType: "Plastering and rendering in Hackney",
    description:
      "Skimming, bonding, making good after leaks, cracking and previous poor work in Hackney – including decorating and follow-on trades when needed.",
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
            / <span className="text-textPrimary">Plasterer in Hackney</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Plastering · Hackney
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Ceilings and walls in Hackney finished properly, ready for paint.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Whether it&apos;s a leak repair, cracked ceiling or a room that
              needs completely skimming, LDNFIX approaches plastering in Hackney
              as part of the whole project – making sure other trades and
              finishes line up properly.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Common plastering jobs in Hackney
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Skimming tired walls and ceilings ready for decorating.</li>
                  <li>
                    Making good after leaks, rewires or bathroom/kitchen works.
                  </li>
                  <li>
                    Bonding and patch repairs instead of ripping out whole
                    surfaces where possible.
                  </li>
                  <li>
                    Straightening out previous bad plastering before a refurb.
                  </li>
                  <li>
                    Small but awkward repairs where access and protection matter.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why use LDNFIX instead of a random one-off plasterer?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    15+ years on the tools – started as a plasterer before
                    moving into wider building work.
                  </li>
                  <li>
                    We think about the decorating, joinery and electrics that
                    come after, not just the skim.
                  </li>
                  <li>
                    Ideal for landlords and agents in Hackney who want clean,
                    well-managed jobs with minimal disruption to tenants.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Hackney areas covered
                </h2>
                <p>
                  Working across Hackney including Dalston, Stoke Newington,
                  Clapton, London Fields, Homerton and nearby streets. If
                  you&apos;re close and the job is a good fit, get in touch.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need a plasterer in Hackney?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the room or damaged area and we&apos;ll come
                  back with a clear plan, including any decorating or follow-on
                  trades if you want them handled too.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Plasterer Hackney"
                  >
                    📸 WhatsApp room photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Plasterer Hackney"
                  >
                    📅 Book a plastering quote
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Plasterer Hackney"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Perfect for homeowners, landlords and agents who want neat,
                  well-managed plastering jobs in Hackney – not clouds of dust
                  and half-finished rooms.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
