// components/Testimonials.tsx

const testimonials = [
  {
    name: "Emma",
    borough: "Enfield",
    jobType: "Leak repair & ceiling made good",
    quote:
      "Turned up when he said he would, traced the leak and left the bedroom looking brand new. No drama, just sorted.",
    result: "Completed in 1 day, including making good and repainting.",
  },
  {
    name: "James",
    borough: "Tottenham",
    jobType: "Outhouse re-roof & brickwork repairs",
    quote:
      "Explained the options clearly and priced it properly. The outhouse is now completely dry and looks solid.",
    result: "Old felt roof stripped, deck repaired and re-roofed.",
  },
  {
    name: "Naz",
    borough: "Hackney",
    jobType: "Plastering & decorating after refurb",
    quote:
      "Reliable, tidy and the finish is spot on. Was happy to leave him with the keys and come back to everything done.",
    result: "Full room skimmed, decorated and handed back clean.",
  },
  {
    name: "Sarah",
    borough: "Islington",
    jobType: "End of tenancy repairs & touch-ups",
    quote:
      "Got the flat ready for new tenants quickly – fixed all the little issues and kept me updated throughout.",
    result: "Repairs, filling, painting and small fixes in 2 visits.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-surfaceMuted/60 bg-background py-12 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Social proof
          </p>
          <h2
            id="testimonials-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            What real clients say.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            All of this is from actual jobs around London – real roofs, plaster
            and repairs, not stock photos. The aim is simple: turn up when
            agreed, do the work properly and leave the place ready to live in.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={`${t.name}-${t.borough}-${t.jobType}`}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface/95 p-4 text-sm shadow-soft transition hover:border-accent/60 hover:shadow-md"
            >
              {/* Rating row */}
              <div className="mb-1 flex items-center justify-between text-[11px] text-textMuted">
                <span aria-label="5 star rating" className="text-amber-300">
                  ⭐️⭐️⭐️⭐️⭐️
                </span>
                <span className="rounded-full bg-background/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-textMuted">
                  {t.jobType}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mt-2 flex-1 text-[13px] italic text-textPrimary">
                “{t.quote}”
              </blockquote>

              {/* Meta */}
              <figcaption className="mt-3 border-t border-surfaceMuted/70 pt-2 text-[11px] text-textMuted">
                <p className="font-semibold text-textPrimary">
                  {t.name} · {t.borough}
                </p>
                <p className="mt-1 text-[11px] text-textMuted/90">
                  {t.result}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Soft CTA under testimonials */}
        <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/70 px-4 py-3 text-[11px] text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="font-semibold text-textPrimary">
            Want your job to be the next one on this list?
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-black shadow-soft transition hover:-translate-y-[1px] hover:bg-yellow-400"
            >
              📅 Request a quote
            </a>
            <a
              href="https://wa.me/442036338772"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] font-semibold text-accent transition hover:-translate-y-[1px] hover:bg-accent hover:text-black"
            >
              💬 Send photos on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
