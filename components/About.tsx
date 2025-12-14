export default function About() {
  return (
    <section
      id="about"
      className="border-b border-surfaceMuted/60 bg-surface py-12 sm:py-14"
      aria-labelledby="about-heading"
    >
      <div className="section-wrapper grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
          >
            Proper trades background, not a call centre.
          </h2>
          <p className="text-sm text-textMuted mb-3">
            I&apos;m [Your Name], the founder of LDNFIX. I&apos;ve spent over 15 years
            on the tools — from plastering and roofing to repairs and refurbs.
            Now I run LDNFIX to give Londoners a better way to get jobs done:
            trusted quotes, no ghosting, no cowboys.
          </p>
          <p className="text-sm text-textMuted mb-3">
            I still enjoy being on site and I only work with tradesmen I&apos;d
            trust in my own home. Whether I&apos;m doing the work myself or
            bringing in one of my vetted pros, I stay responsible for the
            result and communicate in plain English.
          </p>
          <p className="text-sm text-textMuted">
            That&apos;s what{" "}
            <span className="font-semibold text-textPrimary">
              &quot;Fixing London. Properly.&quot;
            </span>{" "}
            means to me — honest advice, solid workmanship and no disappearing
            acts once the invoice is paid.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-surfaceMuted bg-background/60 p-4">
            <h3 className="text-sm font-semibold mb-2">
              Built around London property life
            </h3>
            <ul className="space-y-1.5 text-xs text-textMuted">
              <li>• Quick updates via WhatsApp, email or phone.</li>
              <li>• Sensible slots that work around tenants and busy diaries.</li>
              <li>• Clear before-and-after photos when you can&apos;t be on site.</li>
              <li>• Happy to work directly with landlords, agents or owners.</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs text-textMuted">
            <div className="rounded-2xl border border-surfaceMuted bg-background/60 p-3">
              <p className="text-2xl font-semibold mb-1 text-accent">15+</p>
              <p>years on the tools</p>
            </div>
            <div className="rounded-2xl border border-surfaceMuted bg-background/60 p-3">
              <p className="text-2xl font-semibold mb-1 text-accent">London</p>
              <p>within the M25</p>
            </div>
            <div className="rounded-2xl border border-surfaceMuted bg-background/60 p-3">
              <p className="text-2xl font-semibold mb-1 text-accent">Repeat</p>
              <p>clients & referrals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
