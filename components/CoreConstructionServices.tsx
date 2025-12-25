// components/CoreConstructionServices.tsx

const coreServices = [
  {
    id: "roofing-guttering",
    icon: "🏠",
    name: "Roofing & guttering",
    description:
      "Leak tracing, tile replacement and gutter issues handled by someone who understands the whole structure – not just the roof in isolation.",
    localPhrase: "Roofing & repairs London – flat roofs, tiles, leaks and gutters.",
  },
  {
    id: "plastering-rendering",
    icon: "🧱",
    name: "Plastering & rendering",
    description:
      "From small patches after a leak to full re-skim and external rendering – smooth, straight walls ready for paint or sale.",
    localPhrase: "Plastering & rendering across Greater London homes and flats.",
  },
  {
    id: "brickwork-garden-walls",
    icon: "🧱",
    name: "Brickwork & garden walls",
    description:
      "Repairs, rebuilds and small structural jobs – piers, walls, steps and make-safe work that respects the building as a whole.",
    localPhrase: "Brickwork repairs and garden walls for London properties.",
  },
  {
    id: "painting-decorating",
    icon: "🎨",
    name: "Painting & decorating",
    description:
      "Ceilings, walls, woodwork and external elements brought back to life – ideal after plastering, repairs or refurbs.",
    localPhrase: "Painting & decorating London – from refreshes to full room redecoration.",
  },
  {
    id: "end-of-tenancy",
    icon: "🚪",
    name: "End of tenancy repairs",
    description:
      "Fast turnarounds for landlords and agents – making good damage, fixing snags and getting properties ready for new tenants.",
    localPhrase: "End of tenancy repairs across London for landlords and agents.",
  },
  {
    id: "general-repairs",
    icon: "🔧",
    name: "General repairs & maintenance",
    description:
      "Day-to-day fixes that keep homes and portfolios in good shape – from minor leaks and broken fittings to make-good after other trades.",
    localPhrase: "General property repairs & maintenance across Greater London.",
  },
];

const specialistTrades = [
  "Plumbing",
  "Electrical",
  "Heating & gas",
  "Bathroom & kitchen fit-outs",
];

export default function CoreConstructionServices() {
  return (
    <section
      id="services"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="services-heading"
    >
      <div className="section-wrapper">
        {/* Heading */}
        <header className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Core construction services
            </p>
            <h2
              id="services-heading"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Construction-led fixes and refurbs, not guesswork.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-textMuted">
              From roof leaks and cracked plaster to end of tenancy repairs,
              LDNFIX brings{" "}
              <span className="font-medium text-textPrimary">
                15+ years of real construction experience
              </span>{" "}
              to London homes and flats. Jobs are scoped with the whole
              property in mind – structure, finishes and future plans – not just
              the quickest patch.
            </p>
          </div>
        </header>

        {/* Core services grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 text-left shadow-soft transition hover:border-accent/70 hover:shadow-md"
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surfaceMuted text-lg">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-textPrimary">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-xs text-textMuted">
                    {service.description}
                  </p>
                </div>
              </div>

              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-textMuted">
                {service.localPhrase}
              </p>

              <div className="mt-auto pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-semibold text-background shadow-soft transition hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  aria-label={`Enquire about ${service.name} with LDNFIX`}
                  data-event="service-cta-click"
                  data-service={service.name}
                >
                  Send details for a quote
                  <span className="ml-1 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Specialist trades (managed) */}
        <div className="mt-8 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface px-4 py-4 sm:px-5 sm:py-5">
          <h3 className="mb-1 text-sm font-semibold text-textPrimary">
            Specialist trades (managed for you)
          </h3>
          <p className="mb-3 text-xs text-textMuted sm:text-[13px]">
            Plumbing, electrics, heating, gas and full bathroom or kitchen
            refits are handled by{" "}
            <span className="font-medium text-textPrimary">
              qualified, trusted specialists
            </span>{" "}
            that LDNFIX has worked with on real projects across London. You get
            one point of contact, one plan and one standard of workmanship –
            everything is surveyed, priced and managed for you.
          </p>
          <div className="flex flex-wrap gap-2">
            {specialistTrades.map((trade) => (
              <span
                key={trade}
                className="inline-flex items-center rounded-full border border-surfaceMuted bg-background px-3 py-1 text-[11px] font-medium text-textMuted"
              >
                {trade}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
