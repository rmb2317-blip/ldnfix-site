// components/Testimonials.tsx
import React from "react";

const reviews = [
  {
    name: "Sarah",
    borough: "Hackney",
    jobType: "Roof repair + interior plaster",
    quote:
      "He found the real source of the leak, fixed it properly and made good the ceiling. Clear pricing, no drama.",
    stat: "Completed in 2 days",
    rating: 5,
  },
  {
    name: "James",
    borough: "Enfield",
    jobType: "Full room plaster + repaint",
    quote:
      "The walls were in a state. Now they’re perfectly smooth and painted – you’d never know the damage was there.",
    stat: "Turned around in 3 days",
    rating: 5,
  },
  {
    name: "Amir",
    borough: "Islington",
    jobType: "Front garden wall rebuild",
    quote:
      "The old wall was unsafe and leaning. Rebuilt it solidly and it actually makes the house look cared for again.",
    stat: "Finished within the week",
    rating: 5,
  },
  {
    name: "Rebecca",
    borough: "Walthamstow",
    jobType: "End of tenancy make-good",
    quote:
      "Perfect for between tenants – patched, painted and tidied everything so we could get photos and viewings booked fast.",
    stat: "One visit, back on the market next day",
    rating: 5,
  },
];

export default function Testimonials() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((review, index) => ({
      "@type": "Review",
      position: index + 1,
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "LDNFIX",
        address: {
          "@type": "PostalAddress",
          addressLocality: review.borough,
          addressRegion: "London",
          addressCountry: "GB",
        },
      },
    })),
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-surfaceMuted/60 bg-background py-12 sm:py-16"
    >
      <div className="section-wrapper">
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Social proof
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            What Real Clients Say
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm text-textMuted">
            Trusted by homeowners and landlords across London for roof repairs,
            plastering, brickwork and day-to-day property fixes – handled
            properly from first visit to sign-off.
          </p>
        </header>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={`${review.name}-${review.borough}-${review.jobType}`}
              className="flex h-full flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 sm:p-5 shadow-soft"
            >
              {/* Rating */}
              <div
                className="mb-2 flex items-center gap-1 text-[13px]"
                aria-label={`${review.rating} out of 5 star rating`}
              >
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ⭐
                  </span>
                ))}
                <span className="ml-1 text-[11px] font-medium uppercase tracking-[0.16em] text-textMuted">
                  Rated {review.rating}/5
                </span>
              </div>

              {/* Quote */}
              <blockquote className="relative mb-3 flex-1 text-sm text-textPrimary">
                <p className="relative rounded-xl bg-background/80 p-3 text-[13px] leading-relaxed italic">
                  {review.quote}
                </p>
              </blockquote>

              {/* Meta */}
              <figcaption className="mt-1 space-y-0.5 text-xs text-textMuted">
                <p className="font-semibold text-textPrimary">
                  {review.name} · {review.borough}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em]">
                  {review.jobType}
                </p>
                {review.stat && (
                  <p className="text-[11px] text-textMuted">{review.stat}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Soft CTA */}
        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-textMuted">
          <p>Want this level of finish on your own job?</p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-accent bg-background px-4 py-2 text-xs font-semibold text-accent shadow-soft transition hover:bg-accent hover:text-background"
          >
            Request a quote for your property
          </a>
        </div>

        {/* Optional schema.org review markup for SEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </div>
    </section>
  );
}
