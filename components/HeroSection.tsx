// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/hero-repairs-london.jpg')] bg-cover bg-center opacity-20 blur-sm"
        aria-hidden="true"
      />
      {/* Dark overlay to keep text readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <header className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Fixing London. Properly.
          </p>

          <h1
            id="hero-heading"
            className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          >
            Roof leaking? Plaster cracking?{" "}
            <span className="text-accent">
              Get your home fixed properly across Greater London.
            </span>
          </h1>

          <p className="mt-4 text-sm text-textMuted sm:text-base">
            15+ years on real construction jobs – from full re-roofs and
            plastering whole houses to structural repairs and refurbs. LDNFIX
            handles the work the right way, with one point of contact and no
            cowboys, anywhere in London.
          </p>
        </header>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-3"
          aria-label="Primary actions to get a quote, call or message LDNFIX"
        >
          <a
            href="#contact"
            aria-label="Book a quote with LDNFIX"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-soft transition hover:-translate-y-[1px] hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            📅 Book a quote
          </a>

          <a
            href="tel:02036338772"
            aria-label="Call LDNFIX now on 020 3633 8772"
            className="inline-flex items-center justify-center rounded-full border border-accent/80 bg-black/40 px-6 py-3 text-sm font-semibold text-accent shadow-soft transition hover:-translate-y-[1px] hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            📞 Call now
            <span className="ml-2 hidden text-[13px] font-normal sm:inline">
              020 3633 8772
            </span>
          </a>

          <a
            href="https://wa.me/442036338772"
            target="_blank"
            rel="noreferrer"
            aria-label="Open WhatsApp chat with LDNFIX"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-[1px] hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            💬 WhatsApp us
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-textMuted sm:text-[13px]">
          <div className="flex items-center gap-2">
            <span aria-hidden="true">⭐️⭐️⭐️⭐️⭐️</span>
            <span>Rated &amp; recommended by London homeowners</span>
          </div>
          <div className="h-3 w-px bg-slate-700 hidden sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span aria-hidden="true">🛡️</span>
            <span>Fully insured, construction-led multi-trade service</span>
          </div>
          <div className="h-3 w-px bg-slate-700 hidden sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span aria-hidden="true">📍</span>
            <span>Working across Enfield, North, East &amp; Greater London</span>
          </div>
        </div>
      </div>
    </section>
  );
}
