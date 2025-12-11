const phoneNumber = "+44 20 1234 5678"; // change later
const whatsappNumber = "447000000000";  // change later

interface CTAButtonsProps {
  variant?: "primary" | "secondary";
}

export default function CTAButtons({ variant = "primary" }: CTAButtonsProps) {
  const primaryStyles =
    "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-background shadow-soft hover:bg-yellow-300 transition";
  const secondaryStyles =
    "inline-flex items-center justify-center rounded-full border border-textMuted px-5 py-3 text-sm font-semibold tracking-wide text-textPrimary hover:border-accent hover:text-accent transition";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="#contact"
        className={variant === "primary" ? primaryStyles : secondaryStyles}
      >
        Book a fast quote
      </a>
      <a
        href={`tel:${phoneNumber}`}
        className="inline-flex items-center justify-center rounded-full border border-accent/50 bg-surface px-5 py-3 text-sm font-semibold tracking-wide text-accent hover:bg-accent hover:text-background transition"
      >
        Call us now
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-5 py-3 text-sm font-semibold tracking-wide text-textPrimary hover:border-accent hover:text-accent transition"
      >
        WhatsApp a photo
      </a>
    </div>
  );
}
