// app/plasterer-haringey/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/plasterer-haringey`;

export const metadata: Metadata = {
  title: "Plasterer in Haringey | LDNFIX – Fixing London. Properly.",
  description:
    "Plastering and making good across Haringey. Skimming, bonding and repairs after leaks, refurbs and previous bad work.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Plasterer in Haringey | LDNFIX",
    description:
      "Plastering in Haringey done with a builder’s eye – so the room is ready for paint, joinery and electrics to follow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasterer in Haringey | LDNFIX",
    description:
      "Need a plasterer in Haringey? Send photos to LDNFIX for a clear plan and quote.",
  },
};

export default function PlastererHaringeyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plasterer in Haringey",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Haringey",
    },
    serviceType: "Plastering and rendering in Haringey",
    description:
      "Plastering and making good across Haringey, including skimming, bonding and repairs after leaks, cracking and previous poor work.",
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
            / <span className="text-textPrimary">Plasterer in Haringey</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Plastering · Haringey
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Plastering in Haringey that leaves rooms ready for the next trade.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              From leak repairs in bay windows to full room skims before a
              refurb, LDNFIX treats plastering across Haringey as part of the
              build, not an afterthought.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Plastering work in Haringey we often take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Skimming ceilings and walls ahead of decorating or new
                    kitchens.
                  </li>
                  <li>Making good after leaks, rewires and bathroom works.</li>
                  <li>Bonding and patching cracks and blown sections.</li>
                  <li>
                    Straightening out previous poor plastering before a sale or
                    new tenancy.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why Haringey clients use LDNFIX for plastering
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    15+ years on the tools, with plastering as a core early
                    trade.
                  </li>
                  <li>
                    We coordinate with decorators and other trades where you
                    want the whole job managed.
                  </li>
                  <li>
                    Great for landlords and agents who need neat, well-managed
                    jobs with minimal disruption.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Haringey areas covered
                </h2>
                <p>
                  Crouch End, Hornsey, Tottenham, Wood Green, Bounds Green and
                  nearby areas regularly covered. Get in touch if you&apos;re
                  close and the job is a good fit.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need a plasterer in Haringey?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the room or damaged area and we&apos;ll come
                  back with a clear plan and realistic quote – with decorating
                  included if you want it handled too.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Plasterer Haringey"
                  >
                    📸 WhatsApp room photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Plasterer Haringey"
                  >
                    📅 Book a plastering quote
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Plasterer Haringey"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for homeowners, landlords and agents who want plastering
                  in Haringey done once, properly, and ready for the next trade.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
