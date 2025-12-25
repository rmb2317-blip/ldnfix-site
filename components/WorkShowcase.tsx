// components/BeforeAfterGallery.tsx
"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

type GalleryItem = {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  jobType: string;
  borough: string;
  summary: string;
  stat: string;
  quote?: string;
};

const ITEMS: GalleryItem[] = [
  {
    id: "enfield-bedroom-ceiling",
    beforeSrc: "/images/before-after/enfield-bedroom-before.jpg",
    afterSrc: "/images/before-after/enfield-bedroom-after.jpg",
    jobType: "Leak-damaged bedroom ceiling",
    borough: "Enfield · EN1",
    summary:
      "Water-damaged ceiling cut out, re-boarded, skimmed and painted so the room felt like a bedroom again – not a problem waiting to come back.",
    stat: "Completed in 2 visits · Leak traced & repaired",
    quote:
      "Ceiling looks brand new and you’d never know there was a leak. Turned up when he said he would.",
  },
  {
    id: "tottenham-outhouse-roof",
    beforeSrc: "/images/before-after/tottenham-outhouse-before.jpg",
    afterSrc: "/images/before-after/tottenham-outhouse-after.jpg",
    jobType: "Rear outhouse flat roof",
    borough: "Tottenham · N17",
    summary:
      "Old felt stripped, deck repaired and re-roofed with new trims and flashings so the outhouse finally stayed dry.",
    stat: "Saved client thousands vs. full rebuild",
    quote:
      "Explained the options clearly and the outhouse is now completely dry.",
  },
  {
    id: "islington-through-lounge",
    beforeSrc: "/images/before-after/islington-lounge-before.jpg",
    afterSrc: "/images/before-after/islington-lounge-after.jpg",
    jobType: "Through lounge re-plaster & redecorate",
    borough: "Islington · N1",
    summary:
      "Old blown plaster removed, walls re-boarded where needed, fully skimmed and redecorated ready for new furniture.",
    stat: "3 rooms completed in 5 days",
    quote:
      "Felt like a new flat. Smooth finish and everything left clean at the end of each day.",
  },
  {
    id: "hackney-garden-wall",
    beforeSrc: "/images/before-after/hackney-wall-before.jpg",
    afterSrc: "/images/before-after/hackney-wall-after.jpg",
    jobType: "Leaning garden wall rebuild",
    borough: "Hackney · E5",
    summary:
      "Unsafe, leaning wall taken down and rebuilt properly with new foundations, brickwork and coping stones.",
    stat: "Made safe and built to last",
    quote:
      "Talked us through the safest option and the wall now looks like it should have done from day one.",
  },
  {
    id: "camden-bathroom-ceiling",
    beforeSrc: "/images/before-after/camden-bathroom-before.jpg",
    afterSrc: "/images/before-after/camden-bathroom-after.jpg",
    jobType: "Mouldy bathroom ceiling repair",
    borough: "Camden · NW1",
    summary:
      "Failed paint and mould treated, new moisture-resistant board installed, skimmed and decorated with the right products.",
    stat: "Issue fixed at the cause, not just painted over",
    quote:
      "Previously just got painted over and the mould came back. This time it’s actually been fixed properly.",
  },
  {
    id: "walthamstow-front-elevation",
    beforeSrc: "/images/before-after/walthamstow-front-before.jpg",
    afterSrc: "/images/before-after/walthamstow-front-after.jpg",
    jobType: "Front elevation render & paint",
    borough: "Walthamstow · E17",
    summary:
      "Blown render hacked off, re-rendered and painted so the front of the house finally matched the inside.",
    stat: "Kerb appeal massively improved",
    quote:
      "Neighbours commented straight away – front of the house finally looks finished.",
  },
];

type SliderProps = {
  item: GalleryItem;
};

function BeforeAfterSlider({ item }: SliderProps) {
  const [position, setPosition] = useState(50); // percentage

  const handleDrag = useCallback((clientX: number, rect: DOMRect) => {
    const relativeX = clientX - rect.left;
    const clamped = Math.min(Math.max(relativeX / rect.width, 0), 1);
    setPosition(clamped * 100);
  }, []);

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();

    const move = (e: MouseEvent) => handleDrag(e.clientX, rect);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (event) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();

    const move = (e: TouchEvent) =>
      handleDrag(e.touches[0]?.clientX ?? rect.left, rect);
    const end = () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
      window.removeEventListener("touchcancel", end);
    };

    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", end);
    window.addEventListener("touchcancel", end);
  };

  return (
    <article className="snap-center shrink-0 basis-full rounded-2xl border border-surfaceMuted bg-surface/95 p-4 text-sm shadow-soft sm:basis-[75%] md:basis-[60%] lg:basis-[45%]">
      <header className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-textMuted">
            {item.borough}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-textPrimary">
            {item.jobType}
          </h3>
        </div>
        <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
          Before &amp; After
        </span>
      </header>

      {/* Slider */}
      <div
        className="relative mb-3 h-52 w-full overflow-hidden rounded-xl border border-surfaceMuted bg-black/60 sm:h-64"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label={`Before and after view of ${item.jobType} in ${item.borough}`}
        role="group"
      >
        {/* After image (full) */}
        <Image
          src={item.afterSrc}
          alt={`After photo of ${item.jobType} in ${item.borough}, completed by LDNFIX in London`}
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 70vw, 100vw"
          className="object-cover"
          loading="lazy"
        />
        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={item.beforeSrc}
            alt={`Before photo of ${item.jobType} in ${item.borough}, repair work needed in Greater London`}
            fill
            sizes="(min-width: 1024px) 45vw, (min-width: 768px) 70vw, 100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-white/70 shadow-[0_0_8px_rgba(0,0,0,0.7)]"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          className="absolute inset-y-0 flex -translate-x-1/2 transform items-center justify-center"
          style={{ left: `${position}%` }}
        >
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-slate-900 shadow-md outline-none ring-accent/70 transition hover:bg-white focus-visible:ring-2"
            aria-label="Drag to compare before and after"
          >
            ⇆
          </button>
        </div>

        <div className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
          BEFORE
        </div>
        <div className="pointer-events-none absolute right-2 bottom-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
          AFTER
        </div>
      </div>

      {/* Text content */}
      <p className="mb-1 text-xs text-textMuted">{item.summary}</p>
      <p className="mb-2 text-[11px] font-semibold text-accent">
        {item.stat}
      </p>
      {item.quote && (
        <p className="mt-1 border-t border-surfaceMuted pt-2 text-[11px] italic text-textMuted">
          “{item.quote}”
        </p>
      )}
    </article>
  );
}

export default function BeforeAfterGallery() {
  return (
    <section
      id="proof"
      className="border-t border-surfaceMuted/60 bg-background py-10 sm:py-14 lg:py-16"
      aria-labelledby="proof-heading"
    >
      <div className="section-wrapper">
        <header className="mb-5 max-w-3xl sm:mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Proof of proper work
          </p>
          <h2
            id="proof-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            Before and after from real homes across London.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            Scroll through to see the kind of work LDNFIX is built for – leaks
            fixed properly, tired rooms brought back to life, and structural
            issues sorted the right way. All jobs are photographed at handover
            so there&apos;s a clear record of what was done.
          </p>
        </header>

        {/* Horizontal scroll gallery */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
          {ITEMS.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-4 text-[11px] text-textMuted sm:text-xs">
          Want your job documented like this? Before-and-after photos can be
          included as part of the handover – ideal for landlords, agents and
          careful homeowners across Greater London.
        </p>
      </div>
    </section>
  );
}
