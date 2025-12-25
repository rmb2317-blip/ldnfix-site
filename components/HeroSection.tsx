// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

export default function HeroSection() {
  return (
    <section
      className="border-b border-surfaceMuted/60 bg-background pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-14"
      aria-labelledby="hero-heading"
    >
      <div className="section-wrapper grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-center">
        {/* LEFT – main story & CTAs */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Multi-trade, construction-led fixes across London
          </p>

          <h1
            id="hero-heading"
            className="mb-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]"
          >
            Fixing London.{" "}
          <span className="whitespace-nowrap">Properly.</span>
          </h1>

          {/* Trust strip */}
          <div className="mb-3 flex flex-wrap gap-2 text-[11px] text-textMuted">
            <span className="inline-flex items-center rounded-full bg-surface px-2.5 py-1 font-medium">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              15+ years on real builds – not just small jobs
            </span>
            <span className="inline-flex items-center rounded-full bg-surface px-2.5 py-1 font-medium">
              🧱 Construction-led, not a lead-selling site
            </span>
            <span className="inline-flex items-center rounded-full bg-surface px-2.5 py-1 font-medium">
              🚫 No cowboys, no call centre, no guesswork
            </span>
          </div>

          <p className="mb-3 text-sm font-medium text-accent sm:text-base">
            Roof leaking, plaster cracking or a room that needs stripping back
            and doing properly? Whether it&apos;s one urgent fix or a full
            refurb, you get someone who understands the entire build – structure,
            fabric and finishes – not just one small piece of it.
          </p>

          <p className="mb-5 max-w-xl text-sm text-textMuted sm:text-[15px]">
            LDNFIX is run by a builder who has taken homes from drawings to
            completion across London. Most work is delivered directly; when
            specialists are needed, they&apos;re brought in under one plan,
            one schedule and one point of contact – you.
          </p>

          {/* Primary CTAs */}
          <div className="mb-3 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background shadow-soft transition hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              data-event="hero-book-quote"
            >
              📅 Book a fast quote
            </Link>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-5 py-2.5 text-sm font-semibold text-textPrimary shadow-soft transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              data-event="hero-call"
            >
              📞 Call {PHONE_DISPLAY}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/60 bg-surface px-5 py-2.5 text-sm font-semibold text-emerald-300 shadow-soft transition hover:border-emerald-300 hover:bg-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              data-event="hero-whatsapp"
            >
              💬 WhatsApp job photos
            </a>
          </div>

          <p className="text-[11px] text-textMuted">
            Send photos, a quick voice note or drawings. You&apos;ll get a
            straight-talking view of what&apos;s involved, realistic options
            and where it makes sense to spend – or save – money.
          </p>
        </div>

        {/* RIGHT – trust & &quot;who this is for&quot; */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-surfaceMuted bg-surface p-4 shadow-soft sm:p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-textMuted">
              Best fit for
            </p>
            <ul className="space-y-1.5 text-xs text-textMuted">
              <li>• Homeowners who want work done once, properly.</li>
              <li>
                • Landlords and agents needing reliable, multi-trade support
                for ongoing stock.
              </li>
              <li>
                • Busy people who don&apos;t have time to brief and chase five
                separate trades.
              </li>
              <li>
                • Projects where previous work has failed and someone needs to
                take real ownership.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-surfaceMuted/70 bg-surface/60 p-4 text-[11px] text-textMuted sm:p-5">
            <p className="mb-1 font-semibold text-textPrimary">
              North, East & across the M25 belt.
            </p>
            <p>
              Regularly working in Enfield, Barnet, Haringey, Islington,
              Hackney, Waltham Forest and surrounding areas. If it&apos;s
              technically outside the M25 but makes sense, it&apos;s still
              worth asking.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
