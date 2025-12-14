// app/brickwork-structural/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_NAME,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

const PAGE_URL = `${SITE_URL}/brickwork-structural`;

export const metadata: Metadata = {
  title: "Brickwork & Structural | LDNFIX – Fixing London. Properly.",
  description:
    "Brickwork repairs, garden walls, piers and structural issues handled by a construction-led multi-trade specialist across North & East London.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BUSINESS_NAME,
    title: "Brickwork & Structural | LDNFIX",
    description:
      "Cracks, failing brickwork, garden walls and structural make-safes managed by someone who understands how the whole building fits together.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brickwork & Structural | LDNFIX",
    description:
      "Brickwork repairs and structural issues handled properly – not hidden under a coat of paint.",
  },
};

export default function BrickworkStructuralPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brickwork and structural repairs",
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
      "Brickwork repairs, garden walls, structural cracks, piers and openings",
    description:
      "Cracks, failing brickwork, garden walls and structural issues assessed and repaired across London.",
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
            / <span className="text-textPrimary">Brickwork & structural</span>
          </nav>

          <header className="mb-6 max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Brickwork & structural
            </p>
            <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Brickwork and structural issues handled with a builder&apos;s eye.
            </h1>
            <p className="text-sm text-textMuted sm:text-base">
              From failing garden walls to cracks above openings and movement in
              older properties, LDNFIX looks at what&apos;s really happening –
              not just the bit of plaster that&apos;s fallen off.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <section className="space-y-5 text-sm text-textMuted">
              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  Typical brickwork & structural jobs we take on
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Leaning or failing garden walls and piers.</li>
                  <li>
                    Cracks above windows/doors where lintels or bearings are
                    struggling.
                  </li>
                  <li>
                    Rebuilding damaged sections of walls after impact or
                    previous poor repairs.
                  </li>
                  <li>
                    Making safe and tidying up structural works carried out by
                    engineers/steel installers.
                  </li>
                  <li>
                    Repointing and localised brickwork repairs where water is
                    getting in.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-sm font-semibold text-textPrimary">
                  How LDNFIX approaches structural-style work
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Issues scoped by someone who&apos;s actually built and
                    altered structures, not just patched finishes.
                  </li>
                  <li>
                    Engineers brought in where required – with LDNFIX managing
                    the practical build side.
                  </li>
                  <li>
                    Honest guidance on what&apos;s urgent, what&apos;s
                    cosmetic, and what should simply be monitored.
                  </li>
                  <li>
                    Clear, written quotes that landlords and surveyors can
                    understand and file.
                  </li>
                </ul>
              </div>
            </section>

            <aside className="lg:pl-4">
              <div className="rounded-2xl border border-surfaceMuted bg-surface p-5 shadow-soft sm:p-6">
                <h2 className="mb-1 text-sm font-semibold text-textPrimary">
                  Noticed movement or cracks?
                </h2>
                <p className="mb-4 text-xs text-textMuted">
                  Send clear photos and a quick note on how long it&apos;s been
                  there. We&apos;ll tell you if it looks urgent and what the
                  next sensible step is.
                </p>

                <div className="mb-3 flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400"
                    data-event="service-whatsapp"
                    data-service="Brickwork & structural"
                  >
                    📸 WhatsApp crack photos
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-4 py-2.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-background"
                    data-event="service-contact"
                    data-service="Brickwork & structural"
                  >
                    📅 Book a site visit
                  </a>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-4 py-2.5 text-xs font-semibold text-textPrimary transition hover:border-accent hover:text-accent"
                    data-event="service-call"
                    data-service="Brickwork & structural"
                  >
                    📞 Call {PHONE_DISPLAY}
                  </a>
                </div>

                <p className="text-[11px] text-textMuted">
                  Ideal for homeowners, landlords and buyers who want a calm,
                  experienced view before panicking or over-spending.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
