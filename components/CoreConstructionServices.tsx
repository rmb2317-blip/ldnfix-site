// components/CoreConstructionServices.tsx
import Link from "next/link";

const services = [
  {
    slug: "roofing-guttering",
    title: "Roofing & guttering",
    tagline: "Leaks, tiles, flat roofs & rainwater management.",
    description:
      "From emergency leak tracing and tile replacement to full flat-roof overlays and gutter replacements. We price what’s needed to keep water out – nothing more, nothing less.",
  },
  {
    slug: "plastering-rendering",
    title: "Plastering & rendering",
    tagline: "From patch repairs to full rooms and exteriors.",
    description:
      "Skimming, bonding, repairs after leaks, external render and making old walls look new again. Started out as a plasterer, so this is a core trade.",
  },
  {
    slug: "brickwork-structural",
    title: "Brickwork & structural repairs",
    tagline: "Cracks, movement, rebuilds and remedial work.",
    description:
      "Stitching cracks, rebuilding damaged walls, repointing and sorting long-term structural issues before they become expensive problems.",
  },
  {
    slug: "repairs-maintenance",
    title: "Repairs & maintenance",
    tagline: "Day-to-day issues handled properly.",
    description:
      "Doors that don’t close, damaged ceilings, mould-damaged areas, wear-and-tear and awkward jobs you can’t face organising yourself.",
  },
  {
    slug: "refurbishments",
    title: "Refurbs & multi-trade projects",
    tagline: "From one room to full home refurbishments.",
    description:
      "Coordinated plastering, carpentry, decorating, flooring and more – managed as one project so you’re not juggling multiple trades.",
  },
  {
    slug: "#contact",
    title: "End of tenancy & pre-sale works",
    tagline: "Get a property ready for viewings or new tenants.",
    description:
      "Rapid tidy-ups, repairs and presentation work so properties are ready for marketing, inventory or handover – ideal for landlords and agents.",
  },
];

export default function CoreConstructionServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-surfaceMuted/60 bg-background"
    >
      <div className="section-wrapper py-10 sm:py-14 lg:py-16">
        <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-1">
              Core construction services
            </p>
            <h2
              id="services-heading"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              From leaks and cracks to full refurbishments.
            </h2>
            <p className="max-w-xl text-sm text-textMuted mt-1.5">
              Construction-led, multi-trade work handled properly – so you don’t
              have to juggle separate roofers, plasterers, brickies and
              decorators.
            </p>
          </div>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const href =
              service.slug.startsWith("#") || service.slug.startsWith("/")
                ? service.slug
                : `/${service.slug}`;

            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/70"
              >
                <h3 className="mb-1 text-sm font-semibold text-textPrimary">
                  {service.title}
                </h3>
                <p className="mb-2 text-xs font-semibold text-accent">
                  {service.tagline}
                </p>
                <p className="mb-3 flex-1 text-xs text-textMuted">
                  {service.description}
                </p>

                <Link
                  href={href}
                  className="inline-flex items-center text-xs font-semibold text-accent underline-offset-2 group-hover:underline"
                  data-event="service-card-click"
                  data-service={service.title}
                >
                  {href === "#contact" ? "Enquire about this" : "View service"}
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
