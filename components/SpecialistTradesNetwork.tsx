// components/SpecialistTradesNetwork.tsx

export default function SpecialistTradesNetwork() {
  return (
    <section
      id="network"
      className="border-t border-surfaceMuted/60 bg-surface py-12 sm:py-16 lg:py-20"
      aria-labelledby="network-heading"
    >
      <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
            Specialist trades network
          </p>
          <h2
            id="network-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
          >
            Certified trades, fully managed by someone who understands the work.
          </h2>
          <p className="text-sm sm:text-base text-textMuted mb-4">
            Plumbing, electrics, heating and gas are carried out by qualified
            specialists. The difference with LDNFIX is that you still deal with
            one person who has actually worked on sites – not a call centre or a
            salesman.
          </p>
          <p className="text-sm sm:text-base text-textMuted">
            I survey, price and plan the job, then bring in the right people
            from a trusted network I know from real projects. You get proper
            communication, realistic timings and someone who takes
            responsibility for the whole job.
          </p>
        </div>

        <aside className="rounded-2xl border border-surfaceMuted bg-background/60 p-4 sm:p-5 shadow-soft">
          <h3 className="text-sm font-semibold mb-3">
            Typical specialist work I manage
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-textMuted">
            <li>
              <span className="font-semibold text-textPrimary">
                Plumbing:
              </span>{" "}
              bathrooms, kitchens, leaks, cylinder swaps and pipework.
            </li>
            <li>
              <span className="font-semibold text-textPrimary">
                Electrical:
              </span>{" "}
              consumer unit upgrades, additional circuits, lighting and
              compliance checks.
            </li>
            <li>
              <span className="font-semibold text-textPrimary">
                Heating & Gas:
              </span>{" "}
              boiler swaps, radiators, controls and registered gas work.
            </li>
          </ul>
          <p className="mt-4 text-[11px] text-textMuted">
            All specialist trades are booked, coordinated and checked by LDNFIX
            so you’re not left chasing three different people for one job.
          </p>
        </aside>
      </div>
    </section>
  );
}
