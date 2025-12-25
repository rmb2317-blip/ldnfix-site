// components/Testimonials.tsx

const testimonials = [
  {
    name: "Sarah",
    borough: "Hackney",
    job: "Roof repair & plastering",
    quote:
      "LDNFIX found the source of a long-term leak, sorted the tiles and made good the ceiling. Clear pricing, turned up when promised and left everything tidy.",
  },
  {
    name: "James",
    borough: "Islington",
    job: "Flat refurb & decorating",
    quote:
      "From making good old plaster to repainting the whole flat, the finish was miles better than what we had before. Communication was solid all the way through.",
  },
  {
    name: "Aisha",
    borough: "Enfield",
    job: "End of tenancy repairs",
    quote:
      "Minor brickwork, filling, painting and a few awkward fixes all handled in one go. Ideal as a landlord – one point of contact and the place was ready to re-let.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-wrapper">
        {/* Heading */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Trusted by London homeowners &amp; landlords.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            Most LDNFIX work comes from referrals and repeat clients. Here&apos;s
            what people say after leaks are fixed, walls are made good and
            properties are brought back up to standard.
          </p>
        </header>

        {/* Testimonials grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={`${t.name}-${t.borough}-${t.job}`}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft"
            >
              {/* Rating */}
              <div
                className="mb-2 flex items-center gap-1 text-xs font-semibold text-yellow-400"
                aria-label="5 out of 5 stars"
                role="img"
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="ml-1 text-[11px] uppercase tracking-[0.14em] text-textMuted">
                  Rated 5/5
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs text-textMuted sm:text-sm">&ldquo;{t.quote}&rdquo;</p>

              {/* Meta */}
              <div className="mt-4 border-t border-surfaceMuted pt-3 text-[11px] text-textMuted">
                <p className="font-semibold text-textPrimary">
                  {t.name}
                  <span className="ml-1 text-textMuted">· {t.job}</span>
                </p>
                <p className="mt-0.5 text-[11px] text-textMuted">
                  {t.borough}, Greater London
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
