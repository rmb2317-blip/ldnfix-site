export default function About() {
  return (
    <section
      id="about"
      className="border-b border-surfaceMuted/60 bg-surface py-14 sm:py-16"
      aria-labelledby="about-heading"
    >
      <div className="section-wrapper grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
          >
            15+ years on the tools, now building reliable crews.
          </h2>
          <p className="text-sm text-textMuted mb-3">
            LDNFIX was built from real site experience. We started on the tools
            — plastering, roofing, making good after other trades — and grew by
            simply turning up when we said we would and doing the job properly.
          </p>
          <p className="text-sm text-textMuted mb-3">
            Today we support homeowners, landlords, property managers and main
            contractors across London with a trusted network of tradespeople.
            We&apos;re set up for subcontracting, larger blocks of work and
            ongoing maintenance, without losing that hands-on attitude.
          </p>
          <p className="text-sm text-textMuted">
            Every job has clear notes, photos and a simple, honest scope agreed
            up front. If we see something that will cause you issues later,
            we&apos;ll flag it, not hide it.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-surfaceMuted bg-background/60 p-5">
            <h3 className="text-sm font-semibold mb-2">
              Built for property professionals
            </h3>
            <p className="text-xs text-textMuted mb-3">
              We know how important it is to keep tenants, clients and main
              contractors informed. That&apos;s why we focus on:
            </p>
            <ul className="grid gap-2 text-xs text-textMuted">
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Fast, written quotes and day rates.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Predictable attendance and clear scheduling.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Respectful conduct in occupied properties.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Photo reports when you can&apos;t be on-site.</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs text-textMuted">
            <div className="rounded-2xl border border-surfaceMuted bg-background/50 p-3">
              <p className="text-2xl font-semibold mb-1 text-accent">15+</p>
              <p>Years in trades</p>
            </div>
            <div className="rounded-2xl border border-surfaceMuted bg-background/50 p-3">
              <p className="text-2xl font-semibold mb-1 text-accent">London</p>
              <p>Zones 1–6 covered</p>
            </div>
            <div className="rounded-2xl border border-surfaceMuted bg-background/50 p-3">
              <p className="text-2xl font-semibold mb-1 text-accent">Same</p>
              <p>Week availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
