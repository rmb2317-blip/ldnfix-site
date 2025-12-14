// components/AreasCovered.tsx
import { SERVICE_AREAS } from "@/lib/siteConfig";

export default function AreasCovered() {
  return (
    <section
      id="areas"
      className="border-b border-surfaceMuted/60 bg-surface"
      aria-labelledby="areas-heading"
    >
      <div className="section-wrapper py-10 sm:py-14">
        <header className="mb-6 sm:mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
            Areas covered
          </p>
          <h2
            id="areas-heading"
            className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Greater London, with a strong base in Enfield and North London.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-textMuted">
            LDNFIX is based in Enfield and works across Greater London. For
            larger or more complex projects, work can be considered outside the
            M25 on request.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="rounded-xl border border-surfaceMuted bg-background px-4 py-3"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
