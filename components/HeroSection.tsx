// components/HeroSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BUSINESS_TAGLINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/siteConfig";

type PersonaId = "homeowner" | "landlord" | "agent" | "contractor";

const PERSONAS: {
  id: PersonaId;
  label: string;
  line: string;
}[] = [
  {
    id: "homeowner",
    label: "Homeowner",
    line: "Need a reliable tradesman who actually turns up, explains the options and treats your home with respect.",
  },
  {
    id: "landlord",
    label: "Landlord",
    line: "Repairs handled quickly around tenants with clear photos, invoices and communication – no chasing.",
  },
  {
    id: "agent",
    label: "agent",
    line: "A single point of contact for multiple properties – ideal for Enfield and North London lettings teams.",
  },
  {
    id: "contractor",
    label: "Contractor / Builder",
    line: "Need a dependable multi-trade to slot into your jobs for plastering, making good and remedial work.",
  },
];

export default function HeroSection() {
  const [activePersona, setActivePersona] = useState<PersonaId>("homeowner");
  const persona = PERSONAS.find((p) => p.id === activePersona) ?? PERSONAS[0];

  return (
    <header
      id="hero"
      className="border-b border-surfaceMuted/60 bg-gradient-to-b from-surface to-background"
      aria-labelledby="hero-heading"
    >
      <div className="section-wrapper grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:py-20">
        {/* Left column – copy + CTAs */}
        <div>
          {/* trust strip */}
          <div className="mb-3 flex flex-wrap gap-2 text-[11px] text-textMuted">
            <span className="rounded-full border border-surfaceMuted bg-background/80 px-3 py-1">
              Based in <span className="font-semibold">Enfield</span> · North &
              East London
            </span>
            <span className="rounded-full border border-surfaceMuted bg-background/80 px-3 py-1">
              15+ years construction experience
            </span>
            <span className="rounded-full border border-surfaceMuted bg-background/80 px-3 py-1">
              Construction-led · No lead-selling
            </span>
          </div>

          <p className="mb-3 inline-flex items-center rounded-full border border-accentSoft/40 bg-accentSoft/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            LDNFIX · {BUSINESS_TAGLINE}
          </p>

          <h1
            id="hero-heading"
            className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Fixing London. <span className="text-accent">Properly.</span>
          </h1>

          <p className="mb-3 max-w-xl text-base text-textMuted sm:text-lg">
            15+ years on real construction sites – from full builds and
            refurbishments to detailed repairs. LDNFIX gives you a
            construction-led way to get jobs surveyed, priced and finished
            properly the first time.
          </p>

          {/* Persona selector */}
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-textMuted">
            I&apos;m a…
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            {PERSONAS.map((p) => {
              const isActive = p.id === activePersona;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePersona(p.id)}
                  className={[
                    "rounded-full border px-3 py-1 text-[11px] font-medium transition",
                    isActive
                      ? "border-accent bg-accent text-background"
                      : "border-surfaceMuted bg-surface text-textMuted hover:border-accent/70 hover:text-accent",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          {/* Persona-specific supporting line */}
          <p className="mb-5 max-w-xl text-xs text-textMuted">{persona.line}</p>

          {/* CTAs */}
          <div className="mb-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-background shadow-soft transition hover:bg-yellow-400"
              data-event="hero-cta"
              data-cta="book-quote"
              data-persona={activePersona}
            >
              📅 Book a quote
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-accent/70 bg-surface px-5 py-3 text-sm font-semibold tracking-wide text-accent transition hover:bg-accent hover:text-background"
              data-event="hero-cta"
              data-cta="call"
              data-persona={activePersona}
            >
              📞 Call {PHONE_DISPLAY}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-surface px-5 py-3 text-sm font-semibold tracking-wide text-textPrimary transition hover:border-accent hover:text-accent"
              data-event="hero-cta"
              data-cta="whatsapp"
              data-persona={activePersona}
            >
              💬 WhatsApp job photos
            </a>
          </div>

          {/* Quick bullets */}
          <dl className="grid grid-cols-2 gap-4 text-xs text-textMuted sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-textPrimary">
                Construction-led
              </dt>
              <dd>Jobs scoped by someone who has actually built houses.</dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Multi-trade network
              </dt>
              <dd>
                Trusted roofers, sparkies and plumbers when extra trades are
                needed.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-textPrimary">
                Built for London life
              </dt>
              <dd>Slots around tenants, Airbnb guests and busy diaries.</dd>
            </div>
          </dl>
        </div>

        {/* Right column – simple explainer box */}
        <aside className="relative">
          <div className="rounded-2xl border border-surfaceMuted bg-surface px-5 py-6 shadow-soft sm:px-6 sm:py-7">
            <h2 className="mb-2 text-sm font-semibold text-textPrimary">
              A better way to book trades in London.
            </h2>
            <ol className="list-decimal space-y-2 text-xs text-textMuted list-inside">
              <li>Send job photos and a quick description.</li>
              <li>
                Get a straight-talking plan – repair, make good or full refurb.
              </li>
              <li>
                Work carried out by LDNFIX or a vetted specialist, managed
                end-to-end.
              </li>
            </ol>
            <p className="mt-4 text-[11px] text-textMuted">
              Ideal for homeowners, landlords, agents and contractors who are
              tired of no-shows, upsells and guesswork pricing.
            </p>
            <Link
              href="#services"
              className="mt-4 inline-flex text-[11px] font-semibold text-accent underline-offset-2 hover:underline"
            >
              See what we can help with →
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
