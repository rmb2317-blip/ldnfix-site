// components/BeforeAfter.tsx
import Image from "next/image";

type BeforeAfterImage = {
  src: string;
  alt: string;
  label: string;
};

interface BeforeAfterProps {
  title: string;
  location: string;
  description: string;
  before: BeforeAfterImage;
  after: BeforeAfterImage;
  testimonial?: {
    quote: string;
    name: string;
    area: string;
  };
}

export default function BeforeAfter({
  title,
  location,
  description,
  before,
  after,
  testimonial,
}: BeforeAfterProps) {
  return (
    <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 sm:p-5 shadow-soft">
      <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-sm font-semibold text-textPrimary">{title}</h3>
        <p className="text-[11px] text-textMuted uppercase tracking-[0.16em]">
          {location}
        </p>
      </header>

      <p className="mb-4 text-xs text-textMuted">{description}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {/* Before */}
        <figure className="overflow-hidden rounded-xl border border-surfaceMuted bg-background/40">
          <div className="relative h-40 w-full sm:h-44">
            <Image
              src={before.src}
              alt={before.alt}
              fill
              className="object-cover transition duration-500 hover:scale-[1.03]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <figcaption className="flex items-center justify-between px-3 py-2 text-[11px] text-textMuted">
            <span className="font-medium">Before</span>
            <span>{before.label}</span>
          </figcaption>
        </figure>

        {/* After */}
        <figure className="overflow-hidden rounded-xl border border-surfaceMuted bg-background/40">
          <div className="relative h-40 w-full sm:h-44">
            <Image
              src={after.src}
              alt={after.alt}
              fill
              className="object-cover transition duration-500 hover:scale-[1.03]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <figcaption className="flex items-center justify-between px-3 py-2 text-[11px] text-textMuted">
            <span className="font-medium">After</span>
            <span>{after.label}</span>
          </figcaption>
        </figure>
      </div>

      {testimonial && (
        <div className="mt-3 border-t border-surfaceMuted pt-3 text-[11px] text-textMuted">
          <p className="italic">“{testimonial.quote}”</p>
          <p className="mt-1 font-semibold text-textPrimary">
            {testimonial.name} · {testimonial.area}
          </p>
        </div>
      )}
    </article>
  );
}
