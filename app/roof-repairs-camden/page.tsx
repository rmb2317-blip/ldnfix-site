// app/roof-repairs-camden/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL.replace(/\/$/, "")}/roof-repairs-camden`;

export const metadata: Metadata = {
  title: "Roof Repairs in Camden | LDNFIX – Fixing London. Properly.",
  description:
    "Roof repairs in Camden handled by a construction-led builder. Leak tracing, tile replacement and flat roofs on period homes and conversions across NW1 & NW5.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Roof Repairs in Camden | LDNFIX",
    description:
      "Construction-led roof repairs for Camden terraces, conversions and maisonettes. Leaks traced, roofs made watertight, interiors put back properly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repairs in Camden | LDNFIX",
    description:
      "Need roof repairs in Camden? LDNFIX traces leaks properly and manages the whole job – from roof to ceilings and decorating.",
  },
};

export default function RoofRepairsCamdenPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof repairs in Camden",
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
      "Roof repairs, leak tracing, tile replacement, flat roof works and guttering in Camden",
    description:
      "Roof repairs for Camden townhouses, mansion blocks and converted flats – handled by a builder who understands structure, brickwork and interiors.",
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
            / <span className="text-textPrimary">Roof repairs in Camden</span>
          </nav>

          {/* Heading */}
          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Roofing · Camden
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Roof leaks in Camden fixed properly, not patched and forgotten.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              Camden is full of period terraces, mansion blocks and converted
              flats. When a roof leaks here, it&apos;s rarely just one slipped
              tile – it&apos;s about details, flashings, parapet walls and how
              the roof ties into old brickwork. LDNFIX looks at the whole
              picture, not just the quickest patch.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Left */}
            <section className="space-y-6 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical Camden roof repair jobs
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Leak tracing around chimneys, parapet walls and valley
                    gutters on period terraces.
                  </li>
                  <li>
                    Repairing flat roofs on rear extensions and outrigger
                    roofs.
                  </li>
                  <li>
                    Replacing slipped or broken tiles and slates after storms.
                  </li>
                  <li>
                    Sorting blocked or poorly pitched gutters that are soaking
                    brickwork.
                  </li>
                  <li>
                    Making safe temporary repairs while a full solution is
                    planned.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Why use LDNFIX instead of just calling “a roofer”?
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Jobs are scoped by a builder who understands structure,
                    brickwork and interiors – not just the roof covering.
                  </li>
                  <li>
                    Repairs are planned with the internal make-good in mind so
                    ceilings, walls and decorating are handled properly.
                  </li>
                  <li>
                    Trusted roofing specialists are brought in when needed,
                    under LDNFIX management and quality control.
                  </li>
                  <li>
                    One point of contact – ideal for landlords, agents and busy
                    owners with flats spread across Camden.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Camden areas covered
                </h2>
                <p>
                  Covering Camden Town, Kentish Town, Belsize Park, Chalk Farm,
                  Gospel Oak and surrounding NW1 / NW5 streets. If you&apos;ve
                  got a leak in an older building, clear photos go a long way –
                  send them over and we&apos;ll take it from there.
                </p>
              </div>
            </section>

            {/* Right – CTAs */}
            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Got a leaking roof in Camden?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send photos of the outside and any internal damage.
                  You&apos;ll get a clear, construction-led view on options:
                  repair, partial renewal or a bigger plan if the roof is at the
                  end of its life.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Roof repairs Camden"
                  >
                    📸 WhatsApp roof photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Roof repairs Camden"
                  >
                    📅 Book a roof survey
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Roof repairs Camden"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for flats, terraces and conversions in Camden where you
                  want the leak actually solved – not just another patch that
                  fails next winter.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
