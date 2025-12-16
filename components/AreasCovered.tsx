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
        <header className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Areas covered
          </p>
          <h2
            id="areas-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Based in Enfield. Working across North & East London.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            LDNFIX is based in Enfield and regularly works across North & East
            London and within the M25. Ideal for homeowners, landlords and
            agents who want someone close enough to actually turn up when they
            say they will.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="rounded-xl border border-surfaceMuted bg-surface px-3 py-3 text-sm text-textMuted"
            >
              {area}
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <p className="text-xs text-textMuted">
            If you&apos;re just outside these areas and the job is a good fit,
            it&apos;s still worth getting in touch. For larger projects and
            refurbs, I can often travel further where it makes sense.
          </p>

          <div className="rounded-2xl border border-dashed border-surfaceMuted bg-surface px-4 py-3 text-xs text-textMuted">
            <p className="mb-1 font-semibold text-textPrimary">
              Based in Enfield? Start here:
            </p>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <Link
                  href="/roof-repairs-enfield"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Roof repairs in Enfield
                </Link>{" "}
                – focused on typical local roof leaks, tiles and gutter issues
                in EN1–EN3.
              </li>
              <li>
                <Link
                  href="/plasterer-enfield"
                  className="font-semibold text-accent underline-offset-2 hover:underline"
                >
                  Plasterer in Enfield
                </Link>{" "}
                – ceilings and walls made good properly after leaks, refurbs and
                previous bad work.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
