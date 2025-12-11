const testimonials = [
  {
    name: "James W.",
    role: "Block & portfolio manager, East London",
    quote:
      "LDNFIX are the team I call when I need leaks, ceiling repairs and snagging handled without drama. They keep my tenants informed and send photos so I can sign jobs off quickly.",
    highlight: "Reliable on occupied properties"
  },
  {
    name: "Sarah L.",
    role: "Homeowner, South West London",
    quote:
      "They repaired a leak, renewed the plaster and had the room ready for painting faster than I expected. Everything was left tidy and they explained each step clearly.",
    highlight: "Clear communication, tidy work"
  },
  {
    name: "R. Malik",
    role: "Main contractor, North London",
    quote:
      "We bring LDNFIX in when our own teams are stretched. They integrate well on site, follow our RAMS and look after the finishing details that clients actually notice.",
    highlight: "Great as a subcontracting partner"
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-surfaceMuted/60 bg-background py-14 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-wrapper">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2
              id="testimonials-heading"
              className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1"
            >
              Trusted by homeowners and property professionals.
            </h2>
            <p className="text-sm text-textMuted max-w-xl">
              Most of our work comes from repeat clients and referrals. Here&apos;s
              what they say.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((test) => (
            <figure
              key={test.name}
              className="flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-5"
            >
              <div className="mb-3 text-xs font-semibold text-accent">
                {test.highlight}
              </div>
              <blockquote className="text-sm text-textMuted mb-4">
                “{test.quote}”
              </blockquote>
              <figcaption className="mt-auto text-xs">
                <p className="font-semibold text-textPrimary">{test.name}</p>
                <p className="text-textMuted">{test.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
