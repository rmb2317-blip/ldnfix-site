// app/roof-repairs-haringey/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/roof-repairs-haringey`;

export const metadata: Metadata = {
  title: "Roof repairs in Haringey | LDNFIX – Fixing London. Properly.",
  description:
    "Roof repairs, flat roofs and gutter problems handled across Haringey. Clear diagnosis, realistic options and no upselling.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Roof repairs in Haringey | LDNFIX",
    description:
      "Local roof repairs in Haringey – from leak tracing and tile replacement to flat roofs and gutters. Managed by a multi-trade builder.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof repairs in Haringey | LDNFIX",
    description:
      "Need roof repairs in Haringey? Send photos to LDNFIX for a straight quote and plan.",
  },
};

export default function RoofRepairsHaringeyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof repairs in Haringey",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Haringey",
    },
    serviceType:
      "Roof repairs, leak tracing, tile replacement, flat roofs and guttering in Haringey",
    description:
      "Leak tracing, tile and slate replacement, flat roof works and guttering repairs across Haringey, managed end-to-end by LDNFIX.",
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
            / <span className="text-textPrimary">Roof repairs in Haringey</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roof repairs · Haringey
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof repairs in Haringey without the drama or guesswork.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              From Victorian terraces to newer estates, roof problems in
              Haringey get treated properly – traced to the source, priced
              realistically and repaired with the rest of the building in mind.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Common roof issues in Haringey we deal with
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Leaks around party walls, parapets and chimneys.</li>
                  <li>Missing, slipped or cracked tiles and slates.</li>
                  <li>Flat roof problems on rear additions and dormers.</li>
                  <li>Gutters overflowing onto brickwork and windows.</li>
                  <li>Storm damage that needs making safe quickly.</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why Haringey clients use LDNFIX
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Construction-led diagnosis – not just a “that looks about
                    right” guess.
                  </li>
                  <li>
                    Honest advice on when a repair is enough vs. when you&apos;re
                    better off investing in bigger works.
                  </li>
                  <li>
                    Trusted local roofers used where needed, managed under one
                    point of responsibility.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Haringey areas covered
                </h2>
                <p>
                  Covering Crouch End, Hornsey, Tottenham, Wood Green, Bounds
                  Green and nearby areas. If your property is close and the job
                  is a good fit, it&apos;s still worth getting in touch.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Need roof repairs in Haringey?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the roof from the ground, any access points and
                  the inside damage. You&apos;ll get a clear, straight-talking
                  plan and quote.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Roof repairs Haringey"
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Roof repairs Haringey"
                  >
                    📅 Book a roof survey
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Roof repairs Haringey"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Great for homeowners, landlords and agents across Haringey who
                  want leaks dealt with properly – not just patched over.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
