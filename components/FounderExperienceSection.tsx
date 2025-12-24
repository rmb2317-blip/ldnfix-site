// components/FounderExperienceSection.tsx
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const experiencePoints = [
  "Full internal refurbishments and reconfigurations.",
  "Plastering, rendering and external envelopes.",
  "Roof rebuilds, flat roofs and leak investigations.",
  "Brickwork, blockwork and structural alterations.",
  "Garden walls, porches and front elevations.",
  "Carpentry, second fix and finishing details.",
  "Client-side coordination with specialist trades.",
];

const jobFlow = [
  {
    title: "1. Understand the job properly",
    body: "Photos, a brief chat and – where needed – a site visit. The aim is to understand what’s really going on, not just price what’s visible.",
  },
  {
    title: "2. Plan the sequence, not just the next visit",
    body: "Roof, brickwork, plastering, decorating and specialist trades all have an order. I plan it so you’re not undoing work you just paid for.",
  },
  {
    title: "3. Deliver, check and hand over with proof",
    body: "Job carried out, checked and handed over with photos if you want them – ideal for landlords, agents and anyone keeping a record.",
  },
];

export default function FounderExperienceSection() {
  return (
    <section
      id="founder"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="founder-heading"
    >
      <div className="section-wrapper">
        {/* Header */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Founder experience
          </p>
          <h2
            id="founder-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            Construction experience first. Everything else follows.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            LDNFIX is run by someone who has actually done the work – not just
            sold it. That means better diagnosis, realistic pricing and jobs
            that are sequenced properly, from drawings to final snagging.
          </p>
        </header>

        {/* Main copy + list */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <p className="text-sm text-textMuted">
              I&apos;ve spent over 15 years working on real construction
              projects – from full house builds and structural alterations to
              detailed finishing work. I started on the tools as a plasterer and
              moved into multi-trade roles on full residential refurbishments.
            </p>
            <p className="mt-3 text-sm text-textMuted">
              Over that time I&apos;ve worked alongside excellent builders,
              engineers and specialist trades, learning every stage of
              residential construction. I understand how a job should be
              sequenced, what shortcuts look like and what &quot;good&quot;
              actually means on site.
            </p>
            <p className="mt-3 text-sm text-textMuted">
              Today, that experience sits behind every LDNFIX quote and every
              decision on your job. If I wouldn&apos;t accept it in my own home,
              it doesn&apos;t pass.
            </p>

            <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-textMuted">
              Snapshot of experience
            </h3>
            <ul className="mt-2 grid gap-1 text-xs text-textMuted sm:grid-cols-2">
              {experiencePoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Job flow & CTA */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-xs text-textMuted shadow-soft sm:p-5">
              <h3 className="mb-2 text-sm font-semibold text-textPrimary">
                How your job is run from first call to sign-off.
              </h3>
              <div className="space-y-3">
                {jobFlow.map((step) => (
                  <div key={step.title} className="flex gap-3">
                    <div className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-[11px] font-semibold text-accent">
                      {step.title.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-textPrimary">
                        {step.title}
                      </p>
                      <p className="text-[11px] text-textMuted">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/70 p-4 text-[11px] text-textMuted sm:p-5">
              <p className="mb-1 font-semibold text-textPrimary">
                Want your next job run properly from day one?
              </p>
              <p>
                Whether it&apos;s a single repair or a small refurb, the same
                thinking applies – understand, plan, deliver and check. That&apos;s
                how you avoid surprise extras and half-finished work.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-background shadow-soft hover:bg-yellow-400"
                  data-event="founder-contact"
                >
                  📅 Book a quote with the founder
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] font-semibold text-accent hover:bg-accent hover:text-background"
                  data-event="founder-whatsapp"
                >
                  📸 Send photos on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2 text-[11px] font-semibold text-textPrimary hover:border-accent hover:text-accent"
                  data-event="founder-call"
                >
                  📞 Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
