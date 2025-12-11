import CTAButtons from "./CTAButtons";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-surfaceMuted/60 bg-gradient-to-b from-surface to-background"
      aria-labelledby="hero-heading"
    >
      <div className="section-wrapper py-16 sm:py-20 lg:py-24 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            London-wide coverage · Same-week slots
          </p>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
          >
            Professional trades & repairs across London,{" "}
            <span className="text-accent">done properly</span>.
          </h1>
          <p className="text-base sm:text-lg text-textMuted mb-6 max-w-xl">
            LDNFIX brings over 15 years of hands-on experience in plastering,
            roofing, repairs and handyman work. We support homeowners,
            landlords, letting agents and main contractors with scalable
            crews, clear communication and fast, reliable quotes.
          </p>

          <div className="mb-6">
            <CTAButtons />
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-textMuted">
            <div>
              <dt className="font-semibold text-textPrimary">15+ years</dt>
              <dd>Trade experience on-site and subcontracting.</dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">London-wide</dt>
              <dd>From small fixes to multi-property projects.</dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">Rapid quotes</dt>
              <dd>Share photos and get a clear price quickly.</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-surface shadow-soft border border-surfaceMuted/80 px-5 py-6 sm:px-6 sm:py-7">
            <h2 className="text-sm font-semibold mb-3">
              Trades that plug straight into your workload
            </h2>
            <p className="text-xs text-textMuted mb-4">
              Need extra hands on a project, or a reliable team to handle
              repairs for your portfolio? LDNFIX acts as an extension of your
              business — clear day rates, agreed scopes of work, and crews who
              turn up prepared.
            </p>

            <ul className="space-y-3 text-xs text-textMuted">
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Plastering, patch repairs and full room makeovers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>
                  Roofing repairs, leaks traced and made watertight properly.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                <span>
                  Handyman services and snagging lists handled in one visit.
                </span>
              </li>
            </ul>

            <p className="mt-4 text-xs text-textMuted">
              Tell us what you need covered and we’ll build a simple quote and
              schedule that works around your tenants or main contractor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
