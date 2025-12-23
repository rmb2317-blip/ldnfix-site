// app/roof-repairs-islington/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/roof-repairs-islington`;

export const metadata: Metadata = {
  title: "Roof repairs in Islington | LDNFIX – Fixing London. Properly.",
  description:
    "Roof leaks, tile replacement and gutter problems handled properly in Islington. 15+ years construction experience – no cowboys, no hard sell.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Roof repairs in Islington | LDNFIX",
    description:
      "Targeted roof repairs, leak tracing, flat roofs and guttering across Islington – scoped by a multi-trade builder, not a call centre.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof repairs in Islington | LDNFIX",
    description:
      "Got a roof leak in Islington? Send photos to LDNFIX for a clear plan and quote.",
  },
};

export default function RoofRepairsIslingtonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof repairs in Islington",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
    },
    areaServed: {
      "@type": "City",
      name: "Islington",
    },
    serviceType:
      "Roof repairs, leak tracing, tile replacement, flat roofs and guttering in Islington",
    description:
      "Leak tracing, make-safes, tile and slate replacement, flat roof works and guttering repairs across Islington, managed end-to-end by LDNFIX.",
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
            / <span className="text-textPrimary">Roof repairs in Islington</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roof repairs · Islington
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof repairs in Islington that fix the cause, not just the stain.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Whether it&apos;s a leaking flat roof on a rear extension, slipped
              tiles on a terrace or gutters overflowing onto brickwork – LDNFIX
              scopes roof work in Islington with the whole building in mind, not
              just a quick patch to get through the next storm.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left – detail */}
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical roof and gutter jobs in Islington
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Tracing leaks around chimneys, abutments and parapets.</li>
                  <li>Replacing missing or cracked tiles and slates.</li>
                  <li>
                    Repairing and overlaying flat roofs on kitchens, rear
                    extensions and dormers.
                  </li>
                  <li>
                    Sorting gutters that are blocked, undersized or badly pitched.
                  </li>
                  <li>
                    Making safe storm damage while a proper repair is scheduled.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why book LDNFIX for Islington roof repairs?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    15+ years on real sites – from small make-safes to full roof
                    and refurb projects.
                  </li>
                  <li>
                    Roof issues are diagnosed by someone who understands structure,
                    brickwork and interiors together.
                  </li>
                  <li>
                    Trusted specialist roofers are brought in where needed, under
                    one point of responsibility.
                  </li>
                  <li>
                    Ideal for busy homeowners, landlords and Islington agents who
                    want clear updates and no drama.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Areas of Islington covered
                </h2>
                <p>
                  Regularly working across Highbury, Holloway, Archway, Angel and
                  surrounding streets. If the job is a good fit and you&apos;re
                  nearby, it&apos;s still worth getting in touch.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a roof issue in Islington now?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the leak, the outside roof area and any previous
                  repair attempts. You&apos;ll get a straight-talking plan and
                  quote – no push for a full re-roof if it&apos;s not required.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Roof repairs Islington"
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Roof repairs Islington"
                  >
                    📅 Book a roof survey
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Roof repairs Islington"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Perfect for homeowners, landlords and agents who want roof
                  issues in Islington handled once, properly – not patched up
                  every year.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
