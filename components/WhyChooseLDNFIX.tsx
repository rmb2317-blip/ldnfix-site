// components/WhyChooseLDNFIX.tsx

export default function WhyChooseLDNFIX() {
  return (
    <section
      id="why-ldnfix"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="why-ldnfix-heading"
    >
      <div className="section-wrapper">
        {/* Heading */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Why choose LDNFIX
          </p>
          <h2
            id="why-ldnfix-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Construction-led, not call-centre led.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            LDNFIX is built on real construction experience, not sales scripts.
            Every job is scoped by someone who has actually done the work – so
            you get straight talking advice, sensible options and work that
            lasts in London homes and flats.
          </p>
        </header>

        {/* Trust bullets */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1 – 15+ years */}
          <article className="flex gap-3 rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-surfaceMuted text-lg">
              <span aria-hidden="true">⏱️</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-textPrimary">
                15+ years hands-on construction across London
              </h3>
              <p className="mt-1 text-xs text-textMuted">
                Quotes and plans are based on{" "}
                <span className="font-medium text-textPrimary">
                  real site experience
                </span>{" "}
                – from roofs and plaster to refurbs – not guesswork from behind
                a laptop.
              </p>
            </div>
          </article>

          {/* 2 – Ground up */}
          <article className="flex gap-3 rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-surfaceMuted text-lg">
              <span aria-hidden="true">🏗️</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-textPrimary">
                Built from ground up — not just repairs
              </h3>
              <p className="mt-1 text-xs text-textMuted">
                LDNFIX understands{" "}
                <span className="font-medium text-textPrimary">
                  how a whole house goes together
                </span>{" "}
                – structure, envelope and finishes – so fixes work with your
                property, not against it.
              </p>
            </div>
          </article>

          {/* 3 – Insured & trustworthy */}
          <article className="flex gap-3 rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-surfaceMuted text-lg">
              <span aria-hidden="true">✅</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-textPrimary">
                Fully insured & trustworthy professionals
              </h3>
              <p className="mt-1 text-xs text-textMuted">
                Work is carried out by{" "}
                <span className="font-medium text-textPrimary">
                  vetted trades under one standard
                </span>{" "}
                – with LDNFIX responsible for quality, safety and tidy finishes.
              </p>
            </div>
          </article>

          {/* 4 – Fast quotes & reliable scheduling */}
          <article className="flex gap-3 rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-surfaceMuted text-lg">
              <span aria-hidden="true">⚡</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-textPrimary">
                Fast quotes & reliable scheduling
              </h3>
              <p className="mt-1 text-xs text-textMuted">
                Send photos, get{" "}
                <span className="font-medium text-textPrimary">
                  a clear plan and price quickly
                </span>
                , then know exactly when trades are turning up and what happens
                next.
              </p>
            </div>
          </article>

          {/* 5 – Clear communication */}
          <article className="flex gap-3 rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft sm:col-span-2 lg:col-span-1">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-surfaceMuted text-lg">
              <span aria-hidden="true">📞</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-textPrimary">
                Clear communication from quote to finish
              </h3>
              <p className="mt-1 text-xs text-textMuted">
                One point of contact on{" "}
                <span className="font-medium text-textPrimary">
                  phone, WhatsApp and email
                </span>{" "}
                – so you&apos;re never guessing what&apos;s happening with your
                job or who to chase.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
