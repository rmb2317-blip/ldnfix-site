// components/WhyChooseLDNFIX.tsx

const points = [
  "15+ years real construction experience",
  "From drawings to completion, not just snagging",
  "Multi-trade expertise – plastering, roofing, brickwork, decorating and more",
  "One point of contact from quote to sign-off",
  "No cowboys, no lead-gen middlemen, no guessing",
  "Projects and repairs managed like a proper build"
];

export default function WhyChooseLDNFIX() {
  return (
    <section
      id="why"
      className="border-b border-surfaceMuted/60 bg-background"
      aria-labelledby="why-heading"
    >
      <div className="section-wrapper py-10 sm:py-14">
        <header className="mb-6 sm:mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">
            Why choose LDNFIX
          </p>
          <h2
            id="why-heading"
            className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Built by someone who actually builds.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-textMuted">
            LDNFIX is construction-led. Quotes, planning and quality are handled
            by someone who understands the full build process — not a call
            centre handler guessing from photos.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
            <article
              key={item}
              className="rounded-xl border border-surfaceMuted bg-surface px-4 py-4 text-sm"
            >
              <div className="mb-2 text-accent">◆</div>
              <p className="text-textPrimary">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
