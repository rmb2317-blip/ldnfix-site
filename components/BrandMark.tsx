// components/BrandMark.tsx

export default function BrandMark() {
  return (
    <div className="inline-flex flex-wrap items-baseline gap-x-2">
      <span className="text-base sm:text-lg font-semibold tracking-[0.2em] text-accent uppercase">
        LDNFIX
      </span>
      <span className="text-[11px] sm:text-xs uppercase tracking-[0.26em] text-textMuted">
        Fixing London. Properly.
      </span>
    </div>
  );
}
