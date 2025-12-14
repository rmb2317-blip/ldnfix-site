// components/Services.tsx
import Link from "next/link";

const services = [
  {
    id: "roofing",
    title: "Roofing & guttering",
    badge: "Leaks, tiles, flat roofs",
    href: "/roofing-guttering", // full landing page
    description:
      "Leak tracing, tile replacement, flat roofs and guttering – handled as part of the whole property, not just a quick patch.",
  },
  {
    id: "plastering",
    title: "Plastering & rendering",
    badge: "Walls, ceilings, exteriors",
    href: "/plastering-rendering", // full landing page
    description:
      "From small repairs to full skims and external rendering. Ideal for tidying up after leaks, refurbs or previous bad work.",
  },
  {
    id: "brickwork",
    title: "Brickwork & structural repairs",
    badge: "Walls, piers, lintels",
    href: "/brickwork-structural", // full landing page
    description:
      "Brickwork repairs, repointing, garden walls and minor structural issues – handled with an eye on the whole building.",
  },
  {
    id: "repairs",
    title: "Repairs & maintenance",
    badge: "General fix work",
    href: "/repairs-maintenance", // full landing page
    description:
      "Day-to-day repairs that keep properties safe and presentable – ideal for landlords, agents and busy homeowners.",
  },
  {
    id: "refurbs",
    title: "Refurbishments & makeovers",
    badge: "Rooms, flats, houses",
    href: "/refurbishments", // full landing page
    description:
      "Room refits, cosmetic refreshes and light refurbs, managed end-to-end with one point of contact.",
  },
  {
    id: "other",
    title: "Can’t see your exact job?",
    badge: "Multi-trade problem solving",
    href: "#contact", // scrolls to the contact form
    description:
      "If it needs fixing, improving or making good, send photos and a quick description – we’ll tell you honestly what’s involved.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="services-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Core services
            </p>
            <h2
              id="services-heading"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Construction-led fixes, not guesswork.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-textMuted">
              From leaks and brickwork issues to refurbs and everyday repairs,
              LDNFIX is built on 15+ years of real construction experience – not
              a call centre or a lead-selling site.
            </p>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const isSamePageAnchor = service.href.startsWith("#");

            // 🔹 Cards that scroll to the contact section
            if (isSamePageAnchor) {
              return (
                <a
                  key={service.id}
                  href={service.href}
                  className="group flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 text-left shadow-soft transition hover:border-accent/70 hover:shadow-md"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-textPrimary">
                      {service.title}
                    </h3>
                    <span className="rounded-full bg-surfaceMuted px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-textMuted">
                      {service.badge}
                    </span>
                  </div>
                  <p className="mb-3 text-xs text-textMuted">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center text-[11px] font-semibold text-accent">
                    Send job details
                    <span className="ml-1 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              );
            }

            // 🔹 Cards that go to full SEO service pages
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 text-left shadow-soft transition hover:border-accent/70 hover:shadow-md"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-textPrimary">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-surfaceMuted px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-textMuted">
                    {service.badge}
                  </span>
                </div>
                <p className="mb-3 text-xs text-textMuted">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center text-[11px] font-semibold text-accent">
                  View service details
                  <span className="ml-1 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
