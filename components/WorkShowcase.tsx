// components/WorkShowcase.tsx
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const jobs = [
  {
    area: "Enfield · EN1",
    title: "Leak-damaged bedroom ceiling made good and repainted",
    beforeLabel: "Water-stained, cracked ceiling",
    afterLabel: "Skimmed and repainted, ready to live in",
    description:
      "Roof leak above a bedroom left a stained, cracked ceiling. Leak was traced and made watertight, damaged board cut out, new board installed, skimmed and repainted so the room felt like a bedroom again – not a problem waiting to come back.",
    quote:
      "Turned up when he said, sorted the leak and the ceiling looks brand new. Very easy to deal with.",
    name: "Emma · Enfield",
  },
  {
    area: "Tottenham · N17",
    title: "Rear outhouse roof and brickwork made watertight",
    beforeLabel: "Leaking, tired outhouse roof",
    afterLabel: "Re-roofed and made good",
    description:
      "Old felt roof and tired brickwork on a small outhouse were letting water in and ruining the space. The roof was stripped, deck made good and re-roofed, with brickwork repairs and pointing to keep the weather out.",
    quote:
      "Explained the options clearly, priced it properly and the outhouse is now completely dry.",
    name: "James · Tottenham",
  },
];

export default function WorkShowcase() {
  return (
    <section
      id="work"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="work-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Recent work
          </p>
          <h2
            id="work-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            Real jobs, handled end-to-end.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            Here&apos;s the kind of work LDNFIX is built for – leaks, damage
            and tired spaces turned into clean, solid finishes that are ready
            for real life. As more projects are photographed, this gallery will
            grow.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface/95 p-4 text-sm shadow-soft transition hover:border-accent/60 hover:shadow-md sm:p-5"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">
                  {job.area}
                </p>
                <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Before &amp; after
                </span>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-textPrimary">
                {job.title}
              </h3>
              <p className="mb-3 text-xs text-textMuted">{job.description}</p>

              {/* Before / after labels (image placeholders for now) */}
              <div className="mb-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-surfaceMuted bg-background/60 p-3 text-[11px]">
                  <p className="mb-1 font-semibold text-textPrimary">
                    Before
                  </p>
                  <p className="text-[11px] text-textMuted">
                    {job.beforeLabel}
                  </p>
                  <p className="mt-2 text-[10px] text-textMuted/80">
                    When you supply photos, this is where the &quot;before&quot; image sits – ideal
                    for your own records.
                  </p>
                </div>
                <div className="rounded-xl border border-accent/40 bg-accent/5 p-3 text-[11px]">
                  <p className="mb-1 font-semibold text-textPrimary">
                    After
                  </p>
                  <p className="text-[11px] text-textMuted">
                    {job.afterLabel}
                  </p>
                  <p className="mt-2 text-[10px] text-textMuted/80">
                    Finished work photographed at handover – a clean record for
                    landlords, agents and homeowners.
                  </p>
                </div>
              </div>

              <div className="mt-auto rounded-xl border border-surfaceMuted/80 bg-background/40 p-3 text-[11px] text-textMuted">
                <p className="mb-1 italic">&ldquo;{job.quote}&rdquo;</p>
                <p className="font-semibold text-textPrimary">{job.name}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip under gallery */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/70 px-4 py-3 text-[11px] text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="font-semibold text-textPrimary">
              Want your job finished to this standard – and properly documented?
            </p>
            <p>
              For landlords, agents and careful homeowners, before-and-after
              photos can be included as part of the handover so you always have
              a clear record of what was done.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-background shadow-soft hover:bg-yellow-400"
              data-event="work-contact"
            >
              📅 Book my quote
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] font-semibold text-accent hover:bg-accent hover:text-background"
              data-event="work-whatsapp"
            >
              📸 Send photos on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2 text-[11px] font-semibold text-textPrimary hover:border-accent hover:text-accent"
              data-event="work-call"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
