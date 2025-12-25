// components/BeforeAfterGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryItem = {
  id: string;
  jobType: string;
  borough: string;
  summary: string;
  stat: string;
  quote?: string;
  beforeSrc: string;
  afterSrc: string;
  altBefore: string;
  altAfter: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "enfield-roof",
    jobType: "Roof repair & making good",
    borough: "Enfield",
    summary:
      "Stripped back failing tiles, fixed the underlying issue and made good internal water damage.",
    stat: "Completed in 2 days, avoided a full re-roof.",
    quote:
      "“Explained everything clearly and fixed the leak properly. No more buckets in the hallway.”",
    beforeSrc: "/images/gallery/enfield-roof-before.jpg",
    afterSrc: "/images/gallery/enfield-roof-after.jpg",
    altBefore: "Leaking tiled roof before repair in Enfield, London",
    altAfter: "Repaired tiled roof after leak fix in Enfield, London",
  },
  {
    id: "hackney-plaster",
    jobType: "Full room plaster & repaint",
    borough: "Hackney",
    summary:
      "Old blown plaster removed, walls bonded, skimmed and finished ready for a clean, modern repaint.",
    stat: "Turned around in 3 days from strip-out to final coat.",
    quote:
      "“Felt like a new flat once it was done – you’d never know how bad the walls were.”",
    beforeSrc: "/images/gallery/hackney-plaster-before.jpg",
    afterSrc: "/images/gallery/hackney-plaster-after.jpg",
    altBefore: "Damaged cracked plaster walls before repair in Hackney, London",
    altAfter: "Smooth freshly plastered and painted room in Hackney, London",
  },
  {
    id: "islington-wall",
    jobType: "Front garden wall rebuild",
    borough: "Islington",
    summary:
      "Unsafe leaning wall taken down, foundations checked and rebuilt in keeping with the street.",
    stat: "Made safe and looking smart again within the week.",
    quote:
      "“Sorted the safety issue and made the front of the house look cared for again.”",
    beforeSrc: "/images/gallery/islington-wall-before.jpg",
    afterSrc: "/images/gallery/islington-wall-after.jpg",
    altBefore: "Leaning damaged brick garden wall before rebuild in Islington, London",
    altAfter: "New solid brick garden wall after rebuild in Islington, London",
  },
  {
    id: "walthamstow-tenancy",
    jobType: "End of tenancy make-good",
    borough: "Walthamstow",
    summary:
      "Patched damage, refreshed paintwork and tidied sealant to get the flat ready for new tenants.",
    stat: "One visit, property back on the market the next day.",
    quote:
      "“Exactly what we needed between tenants – quick, neat and no drama.”",
    beforeSrc: "/images/gallery/walthamstow-before.jpg",
    afterSrc: "/images/gallery/walthamstow-after.jpg",
    altBefore: "Worn rental flat before end of tenancy repairs in Walthamstow, London",
    altAfter: "Freshened rental flat after end of tenancy repairs in Walthamstow, London",
  },
];

type BeforeAfterSliderProps = {
  item: GalleryItem;
};

function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50); // percentage

  const handleChange = (value: number) => {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setPosition(value);
  };

  return (
    <article className="flex flex-col rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft">
      <div className="relative mb-3 overflow-hidden rounded-xl bg-background/80">
        {/* Before image (full width) */}
        <div className="relative h-56 sm:h-64 md:h-72">
          <Image
            src={item.beforeSrc}
            alt={item.altBefore}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
          />

          {/* After image (clipped by slider position) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src={item.afterSrc}
              alt={item.altAfter}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
            />
          </div>

          {/* Divider line */}
          <div
            className="pointer-events-none absolute inset-y-0 -ml-[1px] w-[2px] bg-background/80"
            style={{ left: `${position}%` }}
          />

          {/* Slider handle */}
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="absolute top-1/2 -translate-y-1/2 -ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-background/70 bg-surface/90 shadow-md"
            style={{ left: `${position}%` }}
            onMouseDown={(e) => e.preventDefault()}
          >
            <span className="flex items-center text-xs">
              <span aria-hidden="true">⇆</span>
            </span>
          </button>

          {/* Range input (invisible, on top) */}
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => handleChange(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-background/80 px-2 py-1 text-[11px] font-semibold text-textPrimary">
          Before
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-background/80 px-2 py-1 text-[11px] font-semibold text-textPrimary">
          After
        </div>
      </div>

      {/* Text content */}
      <div className="space-y-1.5 text-xs sm:text-sm text-textMuted">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {item.jobType} · {item.borough}
        </p>
        <p className="text-textPrimary text-sm sm:text-[15px] font-semibold">
          {item.summary}
        </p>
        <p className="text-[11px] sm:text-xs font-medium text-textMuted">
          {item.stat}
        </p>
        {item.quote && (
          <p className="mt-1 text-[11px] sm:text-xs italic text-textMuted/90">
            {item.quote}
          </p>
        )}
      </div>
    </article>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-surfaceMuted/60 bg-background py-12 sm:py-16"
    >
      <div className="section-wrapper">
        <header className="mb-8 sm:mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Real project results
            </p>
            <h2
              id="work-heading"
              className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight"
            >
              Proof of Proper Work
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-textMuted">
              Before and after shots from real homes across London – showing the
              sort of roof repairs, plastering, brickwork and make-good that
              LDNFIX handles week in, week out.
            </p>
          </div>
          <div className="text-xs sm:text-sm text-textMuted">
            <p className="font-medium">
              Want your job to look like the “after” shot?
            </p>
            <a
              href="#contact"
              className="mt-1 inline-flex items-center text-[11px] sm:text-xs font-semibold text-accent underline-offset-2 hover:underline"
            >
              Send photos for a fast quote →
            </a>
          </div>
        </header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
