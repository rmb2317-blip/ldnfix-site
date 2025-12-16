// components/HomepageFAQ.tsx

const FAQ_ITEMS = [
  {
    question: "What kind of work does LDNFIX actually take on?",
    answer:
      "LDNFIX is built around real construction experience, not just odd jobs. I handle and manage roof repairs, plastering, brickwork, refurbs, making good after leaks and day-to-day property maintenance. Plumbing and electrical are done by qualified specialists I trust, under my management.",
  },
  {
    question: "Who will I actually be dealing with?",
    answer:
      "You deal with me directly. I survey the job, price it and manage the work. When extra trades are needed, I bring in people I already know and trust. You are not being passed around a call centre or a lead-selling site.",
  },
  {
    question: "Do you work with landlords, agents and Airbnb hosts?",
    answer:
      "Yes. I regularly help landlords, small portfolios, local agents and short-let hosts who need jobs done reliably without chasing. I can liaise with tenants for access, provide photo updates and keep you in the loop.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "I am based in Enfield and regularly work across North & East London – including Enfield, Barnet, Haringey, Islington, Hackney, Waltham Forest and surrounding areas within the M25. For the right jobs I can travel further.",
  },
  {
    question: "How do quotes and pricing work?",
    answer:
      "For many jobs, clear photos and a postcode are enough for an initial estimate. For more involved work, I visit, assess properly and send a written quote that explains what is included. No vague one-liners and no surprise extras halfway through.",
  },
];

export default function HomepageFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="homepage-faq-heading"
    >
      {/* JSON-LD for homepage FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="section-wrapper">
        <header className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Questions
          </p>
          <h2
            id="homepage-faq-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            LDNFIX in plain English.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            A lot of people have had bad experiences with trades. These answers
            are here so you know exactly how I work before you pick up the
            phone.
          </p>
        </header>

        <div className="divide-y divide-surfaceMuted rounded-2xl border border-surfaceMuted bg-surface">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group px-4 py-3 text-xs sm:text-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-left text-textPrimary">
                <span className="font-medium">{item.question}</span>
                <span className="text-[11px] text-textMuted transition group-open:rotate-90">
                  →
                </span>
              </summary>
              <p className="mt-2 text-xs text-textMuted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
