// components/AreasCovered.tsx
import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/siteConfig";

export default function AreasCovered() {
  return (
    <section
      id="areas"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="areas-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Areas covered
          </p>
          <h2
            id="areas-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Based in Enfield. Working across North & East London.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            LDNFIX is based in Enfield and regularly works across North & East
            London and within the M25. Ideal for homeowners, landlords and
            agents who want someone close enough to actually turn up when they
            say they will.
          </p>
        </header>

        {/* Borough list */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6 text-sm">
          {SERVICE_AREAS.map((area) => {
            // We can add special links for key areas
            if (area.startsWith("Enfield")) {
              return (
                <div
                  key={area}
                  className="rounded-2xl border border-surfaceMuted bg-surface px-4 py-3 text-sm"
                >
                  <div className="font-semibold text-textPrimary">{area}</div>
                  <p className="mt-1 text-xs text-textMuted">
                    Local base – ideal for{" "}
                    <Link
                      href="/roof-repairs-enfield"
                      className="underline-offset-2 hover:underline text-accent"
                    >
                      roof repairs
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/plasterer-enfield"
                      className="underline-offset-2 hover:underline text-accent"
                    >
                      plastering
                    </Link>{" "}
                    in EN1–EN3.
                  </p>
                </div>
              );
            }

            if (area === "Barnet") {
              return (
                <div
                  key={area}
                  className="rounded-2xl border border-surfaceMuted bg-surface px-4 py-3 text-sm"
                >
                  <div className="font-semibold text-textPrimary">{area}</div>
                  <p className="mt-1 text-xs text-textMuted">
                    Common jobs include{" "}
                    <Link
                      href="/roof-repairs-barnet"
                      className="underline-offset-2 hover:underline text-accent"
                    >
                      roof repairs in Barnet
                    </Link>{" "}
                    and surrounding North London streets.
                  </p>
                </div>
              );
            }

            if (area === "Hackney") {
              return (
                <div
                  key={area}
                  className="rounded-2xl border border-surfaceMuted bg-surface px-4 py-3 text-sm"
                >
                  <div className="font-semibold text-textPrimary">{area}</div>
                  <p className="mt-1 text-xs text-textMuted">
                    Regular work across Hackney for{" "}
                    <Link
                      href="/roof-repairs-hackney"
                      className="underline-offset-2 hover:underline text-accent"
                    >
                      roof repairs
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/plasterer-hackney"
                      className="underline-offset-2 hover:underline text-accent"
                    >
                      plastering
                    </Link>
                    .
                  </p>
                </div>
              );
            }

            // Default card for all other areas
            return (
              <div
                key={area}
                className="rounded-2xl border border-surfaceMuted bg-surface px-4 py-3 text-sm"
              >
                <div className="font-semibold text-textPrimary">{area}</div>
                <p className="mt-1 text-xs text-textMuted">
                  Jobs considered here depending on scope and timings – worth
                  getting in touch.
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-textMuted max-w-2xl">
          If you&apos;re just outside these areas and the job is a good fit,
          it&apos;s still worth getting in touch. For larger projects and
          refurbs, travel can often be arranged where it makes sense.
        </p>
      </div>
    </section>
  );
}
