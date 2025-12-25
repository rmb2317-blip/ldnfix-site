// components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-surfaceMuted/60 bg-gradient-to-b from-background to-background/95"
      aria-labelledby="hero-heading"
    >
      <div className="section-wrapper py-10 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          {/* Eyebrow / intro line */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            London multi-trade repairs & refurbs
          </p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
          >
            Roof leaks? Cracked plaster? Get it{" "}
            <span className="underline underline-offset-4 decoration-accent">
              fixed properly
            </span>{" "}
            across Greater London.
          </h1>

          {/* Subheadline */}
          <p className="mb-5 text-sm text-textMuted sm:text-base">
            LDNFIX is run by a builder with{" "}
            <strong className="font-semibold text-textPrimary">
              15+ years of hands-on construction experience
            </strong>{" "}
            – from full refurbs and re-roofs to day-to-day repairs. One point of
            contact managing{" "}
            <span className="font-medium text-textPrimary">
              roofs, plaster, brickwork and make-good work across London
            </span>{" "}
            and within the M25. No call centre, no cowboys, no guesswork.
          </p>

          {/* Secondary benefit line with extra keywords */}
          <p className="mb-6 text-xs text-textMuted sm:text-sm">
            Ideal for{" "}
            <span className="font-medium text-textPrimary">
              London homeowners, landlords and agents
            </span>{" "}
            who need reliable{" "}
            <span className="font-medium text-textPrimary">
              roof repairs, plaster repairs, structural fixes and general
              property maintenance
            </span>{" "}
            done properly, not patched.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background shadow-soft transition hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Book a quote with LDNFIX and scroll to the contact form"
              data-event="hero-cta-book-quote"
            >
              📅 Book a quote
            </a>

            <a
              href="tel:02036338772"
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-5 py-2.5 text-sm font-semibold text-textPrimary shadow-soft transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Call LDNFIX now on 020 3633 8772"
              data-event="hero-cta-call"
            >
              📞 Call 020 3633 8772
            </a>

            <a
              href="https://wa.me/442036338772"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-5 py-2.5 text-sm font-semibold text-accent shadow-soft transition hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Open WhatsApp chat with LDNFIX to send job photos"
              data-event="hero-cta-whatsapp"
            >
              💬 WhatsApp us photos
            </a>
          </div>

          {/* Micro trust line */}
          <p className="mt-4 text-[11px] text-textMuted">
            Send photos, a quick description and your postcode – you&apos;ll get
            a straight answer and a clear plan for your roof, plaster or repair
            work anywhere in Greater London.
          </p>
        </div>
      </div>
    </section>
  );
}
