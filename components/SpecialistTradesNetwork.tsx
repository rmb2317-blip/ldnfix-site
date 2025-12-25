// components/SpecialistTradesNetwork.tsx
import Link from "next/link";

const specialistServices = [
  {
    id: "plumbing",
    title: "Plumbing",
    summary:
      "Qualified plumbers for leaks, bathrooms, kitchens and system tweaks – brought in under one coordinated plan.",
    bullets: [
      "Emergency and persistent leaks traced, opened up and then made good properly.",
      "Bathrooms and kitchens first-fix / second-fix aligned with tiling, plastering and cabinetry.",
      "Pipework routes agreed before boxing, tiling or flooring go down – not as an afterthought.",
    ],
  },
  {
    id: "electrical",
    title: "Electrics",
    summary:
      "Certified electricians for new circuits, lighting layouts, consumer units and safety work.",
    bullets: [
      "Small power and lighting changes as part of wider refurb or repair work.",
      "Consumer unit changes and testing done by the right people – not &quot;mate with a tester&quot;.",
      "Chasing, back-boxing and making good handled so you&apos;re not left with patchwork walls.",
    ],
  },
  {
    id: "heating-gas",
    title: "Heating & gas",
    summary:
      "Gas Safe heating engineers tied into the rest of the project so walls, floors and finishes aren&apos;t sacrificed.",
    bullets: [
      "Boiler swaps and relocations coordinated with flue routes, boxing and finishes.",
      "Radiators moved, replaced or added with pipe runs planned before floors are finished.",
      "Pipework hidden or expressed in a way that suits how you actually live in the space.",
    ],
  },
  {
    id: "kitchens-bathrooms",
    title: "Kitchens & bathrooms",
    summary:
      "High-dependency rooms planned and delivered like mini projects – not a pile of separate quotes.",
    bullets: [
      "Layouts agreed with structure, services and storage all considered together.",
      "Joinery, tiling, plastering, electrics and plumbing sequenced in the right order.",
      "Snagging owned by LDNFIX so you&apos;re not stuck refereeing trades at the end.",
    ],
  },
];

export default function SpecialistTradesNetwork() {
  return (
    <section
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="specialist-network-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Specialist trades, one point of contact
          </p>
          <h2
            id="specialist-network-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            When it needs a specialist, the job still belongs to you – and to
            LDNFIX.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            Plumbing, electrics, heating and other certified trades are carried
            out by the right people for the work – but the scope, sequence and
            finish are still managed through LDNFIX. You&apos;re not left
            juggling numbers, diaries and excuses.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialistServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 text-left shadow-soft transition hover:border-accent/70 hover:shadow-md"
            >
              <h3 className="mb-1 text-sm font-semibold text-textPrimary">
                {service.title}
              </h3>
              <p className="mb-2 text-xs text-textMuted">{service.summary}</p>
              <ul className="mb-3 flex-1 space-y-1.5 text-[11px] text-textMuted">
                {service.bullets.map((item) => (
                  <li key={item} className="flex gap-1">
                    <span className="mt-[3px] h-[3px] w-[3px] rounded-full bg-surfaceMuted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className="mt-auto inline-flex items-center text-[11px] font-semibold text-accent"
                data-event={`specialist-service-contact-${service.id}`}
              >
                Talk through a project
                <span className="ml-1 transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
