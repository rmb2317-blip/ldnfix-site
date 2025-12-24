// components/SpecialistTradesNetwork.tsx
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const specialistItems = [
  {
    label: "Plumbing",
    detail:
      "Bathrooms, kitchens, leaks, cylinders and pipework – from repairs to upgrades, all booked and checked through one point of contact.",
  },
  {
    label: "Electrical",
    detail:
      "Consumer units, additional circuits, lighting and compliance checks with certified electricians who actually care about the finish.",
  },
  {
    label: "Heating & Gas",
    detail:
      "Boiler swaps, radiators, controls and registered gas work – tied into the bigger picture of how the property is being used.",
  },
];

export default function SpecialistTradesNetwork() {
  return (
    <section
      id="specialist"
      className="border-t border-surfaceMuted/60 bg-gradient-to-b from-background via-[#050509] to-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="specialist-heading"
    >
      <div className="section-wrapper">
        {/* Heading */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Specialist trades network
          </p>
          <h2
            id="specialist-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            Certified trades, fully managed by someone who&apos;s been on site.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            Plumbing, electrics, heating and gas are carried out by qualified
            specialists. The difference with LDNFIX is simple: you still deal
            with one person who understands how the whole job fits together –
            not a call centre or a sales rep taking guesses from photos.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {specialistItems.map((item) => (
            <article
              key={item.label}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface/95 p-4 text-sm shadow-soft transition hover:border-accent/60 hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-[13px] text-accent">
                  ⚡
                </span>
                <h3 className="text-sm font-semibold text-textPrimary">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-textMuted">{item.detail}</p>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/70 px-4 py-3 text-[11px] text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="font-semibold text-textPrimary">
              Need plumbing, electrics or heating sorted as part of a job?
            </p>
            <p>
              Instead of juggling three different trades, LDNFIX scopes the job,
              books the right specialists and checks the work – so everything
              lines up with the rest of the build.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-background shadow-soft hover:bg-yellow-400"
              data-event="specialist-contact"
            >
              📅 Book managed specialist work
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-4 py-2 text-[11px] font-semibold text-accent hover:bg-accent hover:text-background"
              data-event="specialist-whatsapp"
            >
              📸 Send job photos
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2 text-[11px] font-semibold text-textPrimary hover:border-accent hover:text-accent"
              data-event="specialist-call"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
