// components/WorkShowcase.tsx
import BeforeAfter from "./BeforeAfter";

export default function WorkShowcase() {
  return (
    <section
      id="work"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="work-showcase-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Recent work
          </p>
          <h2
            id="work-showcase-heading"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Real jobs, handled end-to-end.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-textMuted">
            Here&apos;s the kind of work LDNFIX is built for – leaks, damage
            and tired spaces turned into clean, solid finishes that are ready
            for real life. As photos of new projects come in, this gallery will
            grow.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <BeforeAfter
            title="Leak-damaged ceiling made good and repainted"
            location="Enfield · EN1"
            description="Roof leak above a bedroom left a stained, cracked ceiling. Leak was traced and made watertight, damaged board cut out, new board installed, skimmed and repainted so the room felt like a bedroom again – not a problem waiting to come back."
            before={{
              src: "/images/enfield-ceiling-before.jpg",
              alt: "Ceiling with water staining and cracked plaster in an Enfield bedroom.",
              label: "Water-stained, cracked ceiling",
            }}
            after={{
              src: "/images/enfield-ceiling-after.jpg",
              alt: "Freshly skimmed and painted ceiling after leak repair and making good.",
              label: "Skimmed and repainted, ready to live in",
            }}
            testimonial={{
              quote:
                "Turned up when he said, sorted the leak and the ceiling looks brand new. Very easy to deal with.",
              name: "Emma",
              area: "Enfield",
            }}
          />

          <BeforeAfter
            title="Rear outhouse roof and brickwork made watertight"
            location="Tottenham · N17"
            description="Old felt roof and tired brickwork on a small outhouse were letting water in and ruining the space. The roof was stripped, deck made good and re-roofed, with brickwork repairs and pointing to keep the weather out."
            before={{
              src: "/images/n17-outhouse-before.jpg",
              alt: "Old outhouse roof with worn felt and tired brickwork in North London.",
              label: "Leaking, tired outhouse roof",
            }}
            after={{
              src: "/images/n17-outhouse-after.jpg",
              alt: "Re-roofed outhouse with repaired brickwork and clean finish.",
              label: "Re-roofed and made good",
            }}
            testimonial={{
              quote:
                "Explained the options clearly, priced it properly and the outhouse is now completely dry.",
              name: "James",
              area: "Tottenham",
            }}
          />
        </div>

        <p className="mt-4 text-[11px] text-textMuted">
          When you have your own job done, you can request before-and-after
          photos as part of the handover – ideal for landlords, agents and
          anyone keeping a record of works.
        </p>
      </div>
    </section>
  );
}
