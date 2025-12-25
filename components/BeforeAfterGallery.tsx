"use client";

import { useState } from "react";
import Image from "next/image";

type BeforeAfterItem = {
  id: string;
  jobType: string;
  borough: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

const items: BeforeAfterItem[] = [
  {
    id: "roof-enfield",
    jobType: "Roof leak tracing & tile replacement",
    borough: "Enfield",
    beforeSrc: "/images/before-after/roof-enfield-before.jpg",
    afterSrc: "/images/before-after/roof-enfield-after.jpg",
    beforeAlt: "Leaking tiled roof in Enfield before repair, missing tiles and visible damage",
    afterAlt: "Repaired tiled roof in Enfield after leak fix and tile replacement",
  },
  {
    id: "plaster-islington",
    jobType: "Ceiling plaster repair after leak",
    borough: "Islington",
    beforeSrc: "/images/before-after/plaster-islington-before.jpg",
    afterSrc: "/images/before-after/plaster-islington-after.jpg",
    beforeAlt:
      "Damaged ceiling plaster in Islington London before repair with cracks and stains",
    afterAlt:
      "Smooth repainted ceiling in Islington after professional plaster repair",
  },
  {
    id: "refurb-hackney",
    jobType: "Room refurb – make good & redecorate",
    borough: "Hackney",
    beforeSrc: "/images/before-after/refurb-hackney-before.jpg",
    afterSrc: "/images/before-after/refurb-hackney-after.jpg",
    beforeAlt:
      "Tired living room in Hackney before refurbishment with damaged walls and worn paint",
    afterAlt:
      "Refurbished living room in Hackney after plastering and decorating work",
  },
];

function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  const [position, setPosition] = useState(50); // percent

  return (
    <article className="flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surfaceMuted/40">
        {/* After (full) */}
        <Image
          src={item.afterSrc}
          alt={item.afterAlt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {/* Before (clipped by slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={item.beforeSrc}
            alt={item.beforeAlt}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-white/70 mix-blend-screen"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Labels */}
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-background">
          Before
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-background">
          After
        </div>
      </div>

      {/* Slider control */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-textMuted">
          Slide
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Compare before and after for ${item.jobType} in ${item.borough}`}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-surfaceMuted accent-accent [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
        />
      </div>

      {/* Caption */}
      <div className="mt-3 text-xs text-textMuted">
        <p className="font-semibold text-textPrimary">{item.jobType}</p>
        <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em]">
          {item.borough}, Greater London
        </p>
      </div>
    </article>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section
      id="work"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="before-after-heading"
    >
      <div className="section-wrapper">
        <header className="mb-6 max-w-3xl sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Recent fixes
          </p>
          <h2
            id="before-after-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Before &amp; after work across London.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            Roof repairs, plastering, refurbs and make-good jobs – all handled
            with the same focus on proper preparation and a clean finish.
            Slide each example to see the difference LDNFIX makes on real London
            homes.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
