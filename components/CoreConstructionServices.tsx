// components/CoreConstructionServices.tsx

const coreTrades = [
  {
    id: "roofing",
    name: "Roofing & Guttering",
    hook: "Roof leaks, slipped tiles or tired gutters?",
    description:
      "LDNFIX finds the real cause of roof and gutter problems, not just the obvious drip. From small leaks to more serious issues, the job is scoped properly so you don’t have the same problem again in six months.",
    bullets: [
      "Leak tracing and honest condition reports",
      "Tile and slate replacement, small repairs to larger sections",
      "Flat roof make-good and minor re-covering work",
      "Gutter repairs, realignment and basic replacements",
    ],
    highlight: "⭐ Trusted for roof repairs across Enfield, Barnet & North London.",
    ctaLabel: "Book roof & gutter repairs",
  },
  {
    id: "plastering",
    name: "Plastering & Rendering",
    hook: "Cracked, blown or uneven walls and ceilings?",
    description:
      "As an ex-plasterer, LDNFIX knows the difference between a quick skim and a proper repair. Work is planned around how the room is actually used, not just how it looks in photos.",
    bullets: [
      "Ceiling and wall skims after leaks or old finishes",
      "Bonding out blown areas and cracks the right way",
      "Patch repairs that blend with existing work",
      "Internal and external rendering make-good",
    ],
    highlight: "⭐ Regularly plastering homes across Greater London.",
    ctaLabel: "Book plastering & rendering",
  },
  {
    id: "brickwork",
    name: "Brickwork & Garden Walls",
    hook: "Loose bricks, leaning walls or damaged piers?",
    description:
      "From front walls and steps to small structural make-good, brickwork is handled with an eye on both stability and street appeal – especially important for London terraces and period homes.",
    bullets: [
      "Garden walls, piers and small front boundary walls",
      "Brick and block repairs around doors and windows",
      "Rebuilding unsafe or crumbling sections",
      "Pointing and cosmetic make-good on visible faces",
    ],
    highlight: "⭐ Trusted on brickwork repairs from Enfield to Islington.",
    ctaLabel: "Book brickwork & wall repairs",
  },
  {
    id: "decorating",
    name: "Painting & Decorating",
    hook: "Scuffed walls, yellowed ceilings or tired woodwork?",
    description:
      "LDNFIX prepares surfaces like a builder, not a quick in-and-out decorator. That means sorting cracks, fillers and stains before the first coat goes anywhere near your walls.",
    bullets: [
      "Full room repaints after leaks or refurb work",
      "Woodwork prep, undercoat and finishing",
      "Stain blocking and problem-area treatment",
      "Tidy, lived-in friendly working methods",
    ],
    highlight: "⭐ Ideal for end-of-tenancy and pre-sale refreshes.",
    ctaLabel: "Book painting & decorating",
  },
  {
    id: "end-of-tenancy",
    name: "End of Tenancy Repairs",
    hook: "Tenants leaving and a list of jobs piling up?",
    description:
      "Perfect for landlords and agents who need a trusted multi-trade to walk a property, list the issues and make it lettable again without five different contractors involved.",
    bullets: [
      "Minor repairs, filling, making good and repainting",
      "Basic joinery and hardware fixes (doors, handles, hinges)",
      "Sealant, silicone and bathroom/kitchen tidy-ups",
      "Clear, itemised scope so you know what’s been done",
    ],
    highlight: "⭐ Used by busy landlords across North & East London.",
    ctaLabel: "Book end of tenancy repairs",
  },
  {
    id: "general",
    name: "General Repairs & Maintenance",
    hook: "All the small jobs no one else wants to come out for?",
    description:
      "From annoying snags to light make-good, LDNFIX keeps homes and rentals safe, tidy and functioning – ideal if you’d rather send one message and have it all sorted.",
    bullets: [
      "Small carpentry and fixing jobs around the home",
      "Minor internal repairs after previous work or wear",
      "Seal, trim and finish details that others leave behind",
      "Ongoing maintenance arrangements for landlords",
    ],
    highlight: "⭐ One reliable contact for multi-trade repair work.",
    ctaLabel: "Book general repairs",
  },
];

const specialistTrades = [
  {
    id: "plumbing",
    name: "Plumbing (Managed)",
    hook: "Leaks, traps, radiators or plumbing issues?",
    description:
      "LDNFIX brings in trusted plumbers for the technical work – but still surveys, scopes and manages the job so it fits into the wider repair or refurb.",
    bullets: [
      "Small leaks and pipework issues",
      "Radiators moved or replaced as part of refurbs",
      "Bathroom and kitchen plumbing tie-ins",
      "All works carried out by qualified plumbers",
    ],
    highlight: "Managed by LDNFIX, completed by vetted plumbing specialists.",
    ctaLabel: "Book plumbing support",
  },
  {
    id: "electrical",
    name: "Electrical (Managed)",
    hook: "Lighting, sockets or electrical safety checks?",
    description:
      "Qualified electricians handle the wiring – LDNFIX ensures the making good, plastering and decorating around it are all handled as one tidy job.",
    bullets: [
      "New lighting and socket positions as part of works",
      "Chasing, back boxes and making good coordinated",
      "Minor remedial work after EICR reports",
      "Certified electricians, overseen by LDNFIX",
    ],
    highlight: "Perfect when electrical work ties into plastering or refurbs.",
    ctaLabel: "Book electrical support",
  },
  {
    id: "heating-gas",
    name: "Heating & Gas (Managed)",
    hook: "Boiler position, radiators or gas appliances affecting works?",
    description:
      "For anything heating or gas-related, LDNFIX brings in Gas Safe engineers and then takes care of the building and finish work around their part.",
    bullets: [
      "Radiator moves tied into decorating or layout changes",
      "Boxing-in and making good after pipe or boiler work",
      "Coordination with Gas Safe professionals only",
      "One point of contact, no chasing multiple trades",
    ],
    highlight: "Gas work by specialists, project managed by LDNFIX.",
    ctaLabel: "Book heating & gas support",
  },
  {
    id: "kitchen-bath",
    name: "Kitchen & Bathroom Fit-Outs (Managed)",
    hook: "Planning a new kitchen or bathroom but don’t want project chaos?",
    description:
      "LDNFIX coordinates the right trades in the right order – from first rip-out to final bead of silicone – so your new space feels solid, not slapped together.",
    bullets: [
      "Stripping out old fittings and making good surfaces",
      "Coordinating carpentry, tiling, plumbing and electrics",
      "Ensuring walls, floors and structure are properly prepped",
      "Finishing details handled with a builder’s eye",
    ],
    highlight: "Best for smaller refurbs where you still want proper control.",
    ctaLabel: "Book kitchen/bathroom project support",
  },
];

export default function CoreConstructionServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background border-t border-surfaceMuted/60 py-12 sm:py-16"
    >
      <div className="section-wrapper">
        {/* Heading */}
        <header className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Our Core Services
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            Construction-led repairs and refurbs across Greater London – with
            one person overseeing the roof, plaster, brick and finish, and
            trusted specialists brought in where it really matters.
          </p>
        </header>

        {/* Core trades */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-sm sm:text-base font-semibold text-textPrimary mb-3 sm:mb-4">
            Core Trades (delivered by LDNFIX)
          </h3>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {coreTrades.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 sm:p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/80 hover:shadow-md"
              >
                {/* Icon + name */}
                <div className="mb-3 flex items-start gap-3">
                  <div
                    aria-hidden="true"
                    className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-sm"
                  >
                    <span className="text-base">🛠️</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-semibold text-textPrimary">
                      {service.name}
                    </h4>
                    <p className="mt-1 text-xs text-accent font-medium">
                      {service.hook}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-3 text-xs sm:text-sm text-textMuted">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="mb-3 flex-1 list-disc pl-4 text-[11px] sm:text-xs text-textMuted space-y-1.5">
                  {service.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {/* Highlight line */}
                <p className="mb-3 text-[11px] sm:text-xs font-medium text-textMuted">
                  {service.highlight}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-[11px] sm:text-xs font-semibold text-background shadow-soft transition hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    aria-label={`Book ${service.name} with LDNFIX`}
                    data-event="cta-book-service"
                    data-service={service.id}
                  >
                    {service.ctaLabel}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Specialist trades */}
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-textPrimary mb-3 sm:mb-4">
            Specialist Trades (managed by LDNFIX)
          </h3>
          <p className="mb-4 max-w-2xl text-xs sm:text-sm text-textMuted">
            Plumbing, electrics, heating and more are carried out by qualified
            specialists. LDNFIX scopes the work, books the right people in the
            right order and makes sure the plastering, brickwork and finishes
            around them are all handled as part of one clean job.
          </p>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {specialistTrades.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 sm:p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/80 hover:shadow-md"
              >
                {/* Icon + name */}
                <div className="mb-3 flex items-start gap-3">
                  <div
                    aria-hidden="true"
                    className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-background text-sm border border-accent/30"
                  >
                    <span className="text-base">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-[15px] font-semibold text-textPrimary">
                      {service.name}
                    </h4>
                    <p className="mt-1 text-xs text-accent font-medium">
                      {service.hook}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-3 text-xs sm:text-sm text-textMuted">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="mb-3 flex-1 list-disc pl-4 text-[11px] sm:text-xs text-textMuted space-y-1.5">
                  {service.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {/* Highlight line */}
                <p className="mb-3 text-[11px] sm:text-xs font-medium text-textMuted">
                  {service.highlight}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] sm:text-xs font-semibold text-accent shadow-soft transition hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    aria-label={`Book ${service.name} with LDNFIX`}
                    data-event="cta-book-specialist-service"
                    data-service={service.id}
                  >
                    {service.ctaLabel}
                    <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
