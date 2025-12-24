// components/WhyChooseLDNFIX.tsx
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

const points = [
  {
    title: "15+ years on real jobs",
    body: "Not just a handyman. Full builds, refurbs, roofs and detailed repairs across London homes and rentals.",
  },
  {
    title: "From drawings to completion",
    body: "Quotes and decisions made by someone who understands structure, sequencing and how trades fit together.",
  },
  {
    title: "One contact, many trades",
    body: "Roofers, plasterers, brickies, decorators and vetted specialists – managed under one point of contact.",
  },
  {
    title: "Built for London life",
    body: "Work planned around tenants, key collections, Airbnb changeovers and busy weekday diaries.",
  },
  {
    title: "No cowboys, no lead-gen",
    body: "You’re not being sold on by a call centre. You deal directly with the person who will manage your job.",
  },
  {
    title: "Straight-talking advice",
    body: "Honest guidance on repair vs replacement, what can wait and what needs doing now.",
  },
];

export default function WhyChooseLDNFIX() {
  return (
    <section
      id="why"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="why-heading"
    >
      <div className="section-wrapper">
        {/* Heading copy */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Why people book LDNFIX again
          </p>
          <h2
            id="why-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            A construction-led way to get things fixed – not another “man with a van”.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            LDNFIX is built around someone who has actually done the work – plastering, roofing,
            brickwork, refurbs and more. That means better diagnosis, better sequencing and fewer
            nasty surprises halfway through the job.
          </p>
        </header>

        {/* Points grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft transition hover:border-accent/60 hover:shadow-md"
            >
              <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-textPrimary">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/5 text-[11px] text-accent">
                  ✓
                </span>
                {point.title}
              </h3>
              <p className="text-xs text-textMuted">{point.body}</p>
            </article>
          ))}
        </div>

        {/* CTA strip under grid */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/60 px-4 py-3 text-xs text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <p className="font-semibold text-textPrimary">
              Ready to stop guessing which trade you need?
            </p>
            <p className="text-[11px] sm:text-[12px]">
              Send photos and a quick description. You&apos;ll get a straight answer on what needs
              doing – roof, plaster, brickwork or a bigger plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-[11px] font-semibold text-background shadow-soft transition hover:bg-yellow-400"
              data-event="why-whatsapp"
            >
              📸 WhatsApp job photos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-background px-4 py-2 text-[11px] font-semibold text-accent hover:bg-accent hover:text-background"
              data-event="why-contact"
            >
              📅 Book a quote
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-4 py-2 text-[11px] font-semibold text-textPrimary hover:border-accent hover:text-accent"
              data-event="why-call"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
