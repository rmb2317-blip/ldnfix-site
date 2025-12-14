// components/FounderExperienceSection.tsx

export default function FounderExperienceSection() {
  return (
    <section
      id="about"
      className="border-b border-surfaceMuted/60 bg-surface"
      aria-labelledby="founder-heading"
    >
      <div className="section-wrapper py-10 sm:py-14 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
            Founder experience
          </p>
          <h2
            id="founder-heading"
            className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Construction experience first. Everything else follows.
          </h2>
          <p className="mt-4 text-sm text-textMuted leading-relaxed">
            I’m the founder of LDNFIX. I’ve spent over 15 years working on real
            construction projects – from full house builds and structural
            alterations to detailed finishing work. I started on the tools as a
            plasterer and progressed into multi-trade roles on full residential
            refurbishments.
          </p>
          <p className="mt-3 text-sm text-textMuted leading-relaxed">
            Over that time I’ve worked alongside excellent builders, engineers
            and specialist trades, learning every stage of residential
            construction. I understand how a job should be sequenced, what
            shortcuts look like, and what “good” actually means on site.
          </p>
          <p className="mt-3 text-sm text-textMuted leading-relaxed">
            Today, I use that experience to make sure every LDNFIX job is
            priced properly, built properly and managed professionally. If I
            wouldn’t accept it in my own home, it doesn’t pass.
          </p>
        </div>

        <aside className="rounded-2xl border border-surfaceMuted bg-background px-5 py-5 text-xs text-textMuted space-y-3">
          <h3 className="text-sm font-semibold text-textPrimary">
            Snapshot of experience
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Full internal refurbishments and reconfigurations</li>
            <li>Plastering, rendering and external envelopes</li>
            <li>Roof rebuilds, flat roofs and leak investigations</li>
            <li>Brickwork, blockwork and structural alterations</li>
            <li>Garden walls, porches and front elevations</li>
            <li>Carpentry, second fix and finishing details</li>
            <li>Client-side coordination with specialist trades</li>
          </ul>
          <p>
            LDNFIX is built to bring that level of thinking to smaller projects,
            repairs and maintenance — so you get more than “just a handyman”.
          </p>
        </aside>
      </div>
    </section>
  );
}
