// components/Testimonials.tsx

import { BUSINESS_NAME } from "@/lib/siteConfig";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    area: "Brixton, SW2",
    job: "Flat repaint & making good after leaks",
    quote:
      "Flat was fully repainted in two days, including repairs to blown plaster. Turned up when agreed, protected everything and left the place clean. Pricing was clear and there were no surprise extras.",
  },
  {
    name: "James & Aisha",
    area: "Enfield, EN2",
    job: "Roof leak tracing & internal repairs",
    quote:
      "We’d had three different people look at the roof and it still leaked. LDNFIX found the actual issue, organised the roofer and then made good the ceiling and walls. Felt like someone was finally taking ownership.",
  },
  {
    name: "Khalid – Portfolio Landlord",
    area: "North & East London",
    job: "Ongoing repairs, refurbs & tenants move-out works",
    quote:
      "Good communication, photos of before and after, and jobs handled without me needing to be on site. Very useful for end-of-tenancy works when I need things turned around quickly between tenants.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-surfaceMuted/60 bg-surface py-10 sm:py-14 lg:py-16"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={`${BUSINESS_NAME} customer reviews`} />
      <div className="section-wrapper">
        <header className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Proof, not promises
          </p>
          <h2
            id="testimonials-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            London clients who wanted things fixed properly.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            A mix of homeowners, landlords and agents who needed someone to take
            ownership of the job – from first look through to final snagging.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <article
              key={t.name + t.area}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-background p-4 text-left shadow-soft"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="mb-1 flex items-center gap-1 text-xs text-yellow-400">
                <span aria-hidden="true">★★★★★</span>
                <meta itemProp="reviewRating" content="5" />
                <meta
                  itemProp="itemReviewed"
                  content={`${BUSINESS_NAME} repair & construction services`}
                />
              </div>

              <p className="mb-3 text-xs text-textMuted" itemProp="reviewBody">
                {t.quote}
              </p>

              <div className="mt-auto pt-2 text-[11px] text-textMuted">
                <p className="font-semibold text-textPrimary" itemProp="author">
                  {t.name}
                </p>
                <p>
                  {t.job} • {t.area}
                </p>
              </div>

              <meta itemProp="position" content={(index + 1).toString()} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
