const services = [
  {
    title: "Plastering & making good",
    description:
      "Smooth, paint-ready finishes for walls and ceilings. From minor patches and water-damage repairs to full re-skims after rewires or remodelling.",
    bullets: [
      "Dot and dab, bonding and skimming",
      "Ceiling repairs after leaks",
      "Crack repairs and making good",
      "New partitions and boarding"
    ]
  },
  {
    title: "Roofing repairs & leaks",
    description:
      "Targeted, long-lasting roofing repairs that stop leaks properly instead of masking them. Clear photos before and after every job.",
    bullets: [
      "Slate, tile and flat roof repairs",
      "Lead flashings and chimney work",
      "Gutter, fascia and soffit repairs",
      "Emergency make-safe visits"
    ]
  },
  {
    title: "Repairs & maintenance",
    description:
      "Reactive and planned maintenance for landlords, agents and facilities teams. One call to handle the small jobs that never quite get done.",
    bullets: [
      "Doors, locks, handles and hardware",
      "Sealant, mastic and silicone renewals",
      "Kitchen and bathroom minor repairs",
      "Snagging lists after refurb projects"
    ]
  },
  {
    title: "Handyman & small works",
    description:
      "Perfect for busy households and property managers. Book a half or full day and we’ll work through your to-do list efficiently.",
    bullets: [
      "Shelves, curtain rails, TV mounting",
      "Furniture assembly and adjustments",
      "Minor carpentry and fixing trip hazards",
      "End-of-tenancy repairs"
    ]
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-surfaceMuted/60 bg-background py-14 sm:py-16"
      aria-labelledby="services-heading"
    >
      <div className="section-wrapper">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1"
            >
              Trade services that actually turn up on time.
            </h2>
            <p className="text-sm text-textMuted max-w-xl">
              Whether it’s a one-off fix or an ongoing block of work, LDNFIX is
              set up for reliable, scalable delivery across London.
            </p>
          </div>
          <p className="text-xs text-textMuted">
            Fully insured · Clear quotes · Respectful in occupied homes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-surfaceMuted bg-surface p-5 sm:p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-textMuted mb-3">
                {service.description}
              </p>
              <ul className="space-y-1.5 text-xs text-textMuted">
                {service.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[5px] h-1 w-1 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
