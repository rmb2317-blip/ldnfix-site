// components/CoreConstructionServices.tsx
import Link from "next/link";

type CoreService = {
  id: string;
  title: string;
  href?: string;
  short: string;
  points: string[];
};

const coreServices: CoreService[] = [
  {
    id: "roofing",
    title: "Roofing & guttering",
    href: "/roofing-guttering",
    short:
      "Leaks, tiles, flat roofs and rainwater issues – scoped with the rest of the building in mind.",
    points: [
      "Tracing where water is really coming from, not just where it shows inside.",
      "Tile and slate replacement, localised repairs through to full re-roof projects.",
      "Flat roofs (felt, GRP and more) with details around walls, chimneys and abutments done properly.",
      "Gutters, downpipes and outlets cleared, corrected and made to actually fall the right way.",
    ],
  },
  {
    id: "plastering",
    title: "Plastering & rendering",
    href: "/plastering-rendering",
    short:
      "From making good around small repairs to full room or whole-property skims.",
    points: [
      "Ceilings, stairwells and problem walls taken back and brought up to a proper finish.",
      "Blown, cracked or historic plaster made good in a way that respects the rest of the fabric.",
      "Internal and external rendering tied into existing work so the building still reads as one.",
      "Surfaces left ready for decorators – often the same person managing both stages.",
    ],
  },
  {
    id: "brickwork",
    title: "Brickwork, walls & structure",
    href: "/brickwork-structural",
    short:
      "Walls, piers and small structural elements repaired or rebuilt with an eye on the whole property.",
    points: [
      "Garden walls rebuilt, raised or re-faced when they&apos;re beyond another patch.",
      "Localised structural repairs, lintels and small openings handled with care for what they carry.",
      "Repointing where it actually adds value, not just for the sake of it.",
      "Porches, small extensions and infill work coordinated with roof, drainage and finishes.",
    ],
  },
  {
    id: "repairs",
    title: "Property repairs & maintenance",
    href: "/repairs-maintenance",
    short:
      "The kind of day-to-day issues that don&apos;t need a big firm – just someone competent and organised.",
    points: [
      "Snagging and making good after other trades or previous work.",
      "Minor carpentry, doors, floors and joinery that need adjusting, repairing or refitting.",
      "End-of-tenancy repairs and light refreshes to get lets market-ready again.",
      "Ongoing maintenance plans for landlords and agents with multiple properties.",
    ],
  },
  {
    id: "refurbs",
    title: "Refurbs & makeovers",
    href: "/refurbishments",
    short:
      "Room-by-room or whole-property improvements managed like a small building project, not a series of odd jobs.",
    points: [
      "Kitchens, bathrooms and living spaces reworked with structure, services and finishes planned together.",
      "Phased refurb work around people still living in the property.",
      "Simple, honest advice on where to spend for impact – and where to hold back.",
      "All trades coordinated so the job moves forward every time someone is on site.",
    ],
  },
];

export default function CoreConstructionServices() {
  return (
    <section
      id="services"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="core-services-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Core construction services
            </p>
            <h2
              id="core-services-heading"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              The work LDNFIX is built on.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-textMuted">
              Roofing, plastering, brickwork, refurbs and day-to-day repairs –
              all scoped by someone who understands how each trade affects the
              next. You&apos;re not getting five disconnected quotes; you&apos;re
              getting one joined-up plan.
            </p>
          </div>

          <div className="text-xs text-textMuted sm:text-[11px]">
            <p className="font-semibold text-textPrimary">
              Typical jobs across North, East & the M25 belt
            </p>
            <p>
              Enfield, Barnet, Haringey, Islington, Hackney, Waltham Forest and
              beyond – especially where previous work hasn&apos;t quite held up.
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => {
            const Wrapper: React.ElementType = service.href ? Link : "div";
            const wrapperProps = service.href
              ? {
                  href: service.href,
                  "data-event": `core-service-link-${service.id}`,
                }
              : {};

            return (
              <Wrapper
                key={service.id}
                {...wrapperProps}
                className="group flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 text-left shadow-soft transition hover:border-accent/70 hover:shadow-md"
              >
                <header className="mb-2">
                  <h3 className="text-sm font-semibold text-textPrimary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-textMuted">
                    {service.short}
                  </p>
                </header>

                <ul className="mb-3 flex-1 space-y-1.5 text-[11px] text-textMuted">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-1">
                      <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-accent/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center text-[11px] font-semibold text-accent">
                  {service.href ? "View this service" : "Discuss this work"}
                  <span className="ml-1 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
