// components/Testimonials.tsx
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const testimonials = [
  {
    quote:
      "Rear room refurb and plastering in Islington. Turned up when agreed, kept the place tidy and the finish was spot on – ready for paint straight away.",
    name: "James, Islington",
    job: "Rear room refurb & plastering",
  },
  {
    quote:
      "Flat fully repainted and made good between tenants in Enfield. Clear photos before and after so I could sign it off without travelling.",
    name: "Sarah, Enfield",
    job: "End-of-tenancy make-good & decorating",
  },
  {
    quote:
      "Leak traced back to a roof detail, then ceiling and walls repaired and decorated. One point of contact from first visit to the last coat of paint.",
    name: "Amir, Hackney",
    job: "Roof leak, plastering & decorating",
  },
  {
    quote:
      "Multiple small repairs across a few rentals – doors, locks, patches and paint. Quoted clearly, grouped sensibly and invoiced the way my accountant likes.",
    name: "Louise, North London",
    job: "Ongoing repairs & maintenance",
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
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Recent feedback
          </p>
          <h2
            id="testimonials-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            London homeowners, landlords and agents who use LDNFIX more than once.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            The common thread: jobs scoped properly, finished properly and looked after properly –
            so you&apos;re not hunting a new tradesperson for every job.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name + t.job}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft"
            >
              <p className="mb-3 text-xs text-textMuted">&ldquo;{t.quote}&rdquo;</p>
              <figcaption className="mt-auto text-[11px] font-semibold text-textPrimary">
                {t.name}
                <span className="block text-[11px] font-normal text-textMuted">
                  {t.job}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA under testimonials */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/60 px-4 py-3 text-[11px] text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="font-semibold text-textPrimary">
              Want your next job to feel this straightforward?
            </p>
            <p>
              Whether it&apos;s a single leak, a room refurb or ongoing landlord work, the process
              is the same – clear quote, clear plan, tidy finish.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-background shadow-soft hover:bg-yellow-400"
              data-event="testimonials-contact"
            >
              📅 Book my quote
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] font-semibold text-accent hover:bg-accent hover:text-background"
              data-event="testimonials-whatsapp"
            >
              📸 Send photos on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2 text-[11px] font-semibold text-textPrimary hover:border-accent hover:text-accent"
              data-event="testimonials-call"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
