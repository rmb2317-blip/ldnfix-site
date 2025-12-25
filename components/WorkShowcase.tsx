// components/WorkShowcase.tsx
import Image from "next/image";
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
    beforeImage: "/images/work/enfield-ceiling-before.jpg", // add to /public when ready
    afterImage: "/images/work/enfield-ceiling-after.jpg",
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
    beforeImage: "/images/work/tottenham-outhouse-before.jpg",
    afterImage: "/images/work/tottenham-outhouse-after.jpg",
  },
];

export default function WorkShowcase() {
  return (
    <section
      id="work"
      className="border-t border-surfaceMuted/60 bg-background py-12 sm:py-16 lg:py-20"
      aria-labelledby="work-heading"
    >
      <div className="section-wrapper">
        {/* Header */}
        <header className="mb-8 max-w-3xl lg:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Proof of proper work
          </p>
          <h2
            id="work-heading"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[28px]"
          >
            Real London jobs, finished to a standard you can photograph.
          </h2>
          <p className="mt-3 text-sm text-textMuted sm:text-[15px]">
            Every job below started as a problem – leaks, damage or tired spaces.
            LDNFIX took them from &quot;something&apos;s not right&quot; to clean,
            solid, signed-off finishes. As more projects are documented, this
            gallery will grow.
          </p>
        </header>

        {/* Grid of jobs */}
        <div className="grid gap-5 lg:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface/95 p-4 text-sm shadow-soft transition hover:-translate-y-[2px] hover:border-accent/60 hover:shadow-lg sm:p-5"
            >
              {/* Top meta */}
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-textMuted">
                  {job.area}
                </p>
                <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Before &amp; After
                </span>
              </div>

              <h3 className="mb-2 text-sm font-semibold text-textPrimary sm:text-[15px]">
                {job.title}
              </h3>
              <p className="mb-4 text-xs text-textMuted sm:text-[13px]">
                {job.description}
              </p>

              {/* Visual row: before / after */}
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                {/* Before */}
                <div className="flex flex-col overflow-hidden rounded-xl border border-surfaceMuted bg-background/70">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40" aria-hidden="true" />
                    <Image
                      src={job.beforeImage}
                      alt={`Before – ${job.beforeLabel} in ${job.area}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="relative flex h-full items-start justify-between p-2">
                      <span className="rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-100">
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-[11px] font-medium text-textPrimary">
                      {job.beforeLabel}
                    </p>
                    <p className="mt-1 text-[11px] text-textMuted">
                      How it looked when LDNFIX was first called in.
                    </p>
                  </div>
                </div>

                {/* After */}
                <div className="flex flex-col overflow-hidden rounded-xl border border-accent/50 bg-accent/5">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-500/5" aria-hidden="true" />
                    <Image
                      src={job.afterImage}
                      alt={`After – ${job.afterLabel} in ${job.area}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="relative flex h-full items-start justify-between p-2">
                      <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-[11px] font-medium text-textPrimary">
                      {job.afterLabel}
                    </p>
                    <p className="mt-1 text-[11px] text-textMuted">
                      Finished, photographed and handed back ready for real life
                      again.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-auto rounded-xl border border-surfaceMuted/80 bg-background/60 p-3 text-[11px] text-textMuted sm:text-[12px]">
                <p className="mb-1 italic">&ldquo;{job.quote}&rdquo;</p>
                <p className="font-semibold text-textPrimary">{job.name}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip under gallery */}
        <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/80 px-4 py-4 text-[11px] text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:text-[12px]">
          <div className="max-w-xl">
            <p className="font-semibold text-textPrimary sm:text-[13px]">
              Want your job finished – and documented – to this standard?
            </p>
            <p className="mt-1">
              For landlords, agents and careful homeowners, LDNFIX can supply
              before-and-after photos as part of handover, so you always have a
              clear record of what was fixed and how it was left.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-background shadow-soft transition hover:-translate-y-[1px] hover:bg-yellow-400 sm:text-[12px]"
              data-event="work-contact"
            >
              📅 Book my quote
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] font-semibold text-accent shadow-soft transition hover:-translate-y-[1px] hover:bg-accent hover:text-background sm:text-[12px]"
              data-event="work-whatsapp"
            >
              📸 Send job photos on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2 text-[11px] font-semibold text-textPrimary shadow-soft transition hover:-translate-y-[1px] hover:border-accent hover:text-accent sm:text-[12px]"
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
