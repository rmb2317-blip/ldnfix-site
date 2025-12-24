// components/AreasCovered.tsx
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/siteConfig";

export default function AreasCovered() {
  return (
    <section
      id="areas"
      className="border-t border-surfaceMuted/60 bg-gradient-to-b from-background via-[#050509] to-background py-12 sm:py-16 lg:py-18"
      aria-labelledby="areas-heading"
    >
      <div className="section-wrapper">
        {/* Header */}
        <header className="mb-8 max-w-3xl sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Areas covered
          </p>
          <h2
            id="areas-heading"
            className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl lg:text-[26px]"
          >
            Based in Enfield. Working across North &amp; East London – and beyond
            when it makes sense.
          </h2>
          <p className="mt-2 text-sm text-textMuted">
            LDNFIX is built for London life – landlords with properties spread
            across boroughs, homeowners in older houses, agents who need someone
            that actually turns up. The focus is North &amp; East London and
            within the M25, with travel for the right jobs.
          </p>
        </header>

        {/* Highlight Enfield card, then grid for the rest */}
        <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Enfield – highlighted base area */}
          <article className="rounded-2xl border border-accent/30 bg-surface/90 p-4 text-sm shadow-soft lg:p-5">
            <div className="mb-1 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                Base area
              </span>
              <h3 className="text-sm font-semibold text-textPrimary">
                Enfield
              </h3>
            </div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-textMuted">
              EN1–EN3 · parts of EN4, EN6–EN8 · N9, N13, N18, N21 · parts of N11,
              N14, N22, E4
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Local base – ideal for roof leaks, plastering and general repairs
              across Enfield borough, from Bush Hill Park and Enfield Town to
              Edmonton, Palmers Green and Winchmore Hill. Fast response, easy
              keys and access, and someone close enough to check back in.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-enfield"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Enfield
              </Link>
              {" · "}
              <Link
                href="/plasterer-enfield"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Enfield
              </Link>
            </p>
          </article>

          {/* Landlords / portfolio owners note */}
          <aside className="rounded-2xl border border-surfaceMuted bg-surface/80 p-4 text-xs text-textMuted shadow-soft lg:p-5">
            <h3 className="mb-1 text-sm font-semibold text-textPrimary">
              Have properties in more than one borough?
            </h3>
            <p>
              Many LDNFIX clients are landlords and portfolio owners with homes
              in Enfield, Barnet, Haringey, Hackney and beyond. The benefit of a
              construction-led multi-trade setup is simple: one contact who
              understands your properties, your standards and your timing – not
              a different &quot;guy&quot; for every job.
            </p>
            <p className="mt-2">
              For ongoing work across multiple areas, it&apos;s worth having a
              conversation about how you manage repairs and refurbs now – and
              how it could be smoother.
            </p>
            <p className="mt-2 text-[11px]">
              Call{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              or{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                send a WhatsApp
              </a>{" "}
              to talk through how you currently handle maintenance and projects.
            </p>
          </aside>
        </div>

        {/* Grid for all boroughs / areas */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Barnet */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">Barnet</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              EN4–EN5 · EN6–EN11 · N2, N3, N10–N12, N14, N20 · NW2, NW4, NW7,
              NW9, NW11, HA8
            </p>
            <p className="mt-2 text-xs text-textMuted">
              North London houses and conversions in Barnet, Finchley, Hendon,
              Totteridge, Whetstone and surrounding streets – ideal for roofs,
              brickwork and internal making-good work after leaks, refurbs and
              upgrades.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-barnet"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Barnet
              </Link>
              {" · "}
              <Link
                href="/plasterer-barnet"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Barnet
              </Link>
            </p>
          </article>

          {/* Haringey */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">Haringey</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              N4, N8, N10, N15, N17, N22
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Crouch End, Muswell Hill, Hornsey, Tottenham, Wood Green and
              surrounding roads – mix of period houses, maisonettes and flats
              where roofs, brickwork and interiors all need handling in the
              right order.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-haringey"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Haringey
              </Link>
              {" · "}
              <Link
                href="/plasterer-haringey"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Haringey
              </Link>
            </p>
          </article>

          {/* Islington */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">Islington</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              N1, N5, N7, N19 · parts of EC1
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Flats and houses in Islington, Highbury, Holloway and Archway –
              often with older structures and previous &quot;repairs&quot; to
              unpick. Ideal for leak diagnosis, making good and refurbs that
              respect the building.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-islington"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Islington
              </Link>
              {" · "}
              <Link
                href="/plasterer-islington"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Islington
              </Link>
            </p>
          </article>

          {/* Hackney */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">Hackney</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              E2, E5, E8, E9, E20 · N1, N16
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Regular work across Hackney – Stoke Newington, Clapton, Dalston,
              London Fields and beyond – from roof leaks and external repairs to
              internal plastering and decorating.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-hackney"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Hackney
              </Link>
              {" · "}
              <Link
                href="/plasterer-hackney"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Hackney
              </Link>
            </p>
          </article>

          {/* Camden */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">Camden</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              NW1, NW3, NW5, NW6 · WC1
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Camden Town, Kentish Town, Hampstead, Belsize Park, Bloomsbury and
              nearby streets – older buildings where roofs, parapets and
              interiors all need a joined-up plan.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-camden"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Camden
              </Link>
              {" · "}
              <Link
                href="/plasterer-camden"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Camden
              </Link>
            </p>
          </article>

          {/* Waltham Forest */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">
              Waltham Forest
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              E4, E7, E10, E11, E17 · IG8
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Walthamstow, Leyton, Leytonstone, Chingford and surrounding roads
              – ideal for roof work, external envelopes and internal
              making-good after leaks or upgrades.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-waltham-forest"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Waltham Forest
              </Link>
              {" · "}
              <Link
                href="/plasterer-waltham-forest"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Waltham Forest
              </Link>
            </p>
          </article>

          {/* Tottenham & Wood Green */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">
              Tottenham &amp; Wood Green
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              N15, N17, N22
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Tottenham, Seven Sisters and Wood Green – outhouse roofs, garden
              walls, external repairs and internal ceilings / walls all handled
              with the same standard as a full refurb.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-tottenham-wood-green"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs in Tottenham &amp; Wood Green
              </Link>
              {" · "}
              <Link
                href="/plasterer-tottenham-wood-green"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering in Tottenham &amp; Wood Green
              </Link>
            </p>
          </article>

          {/* Across London within the M25 */}
          <article className="rounded-2xl border border-surfaceMuted bg-surface p-4 text-sm shadow-soft">
            <h3 className="text-sm font-semibold text-textPrimary">
              Across London within the M25
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">
              North, East &amp; parts of Central London
            </p>
            <p className="mt-2 text-xs text-textMuted">
              Larger refurbs, multi-trade projects and roof / internal packages
              considered across Greater London where it makes sense for both of
              us – especially where you want one person managing the whole
              sequence properly.
            </p>
            <p className="mt-2 text-xs">
              <Link
                href="/roof-repairs-london"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Roof repairs across London
              </Link>
              {" · "}
              <Link
                href="/plasterer-london"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                Plastering across London
              </Link>
            </p>
          </article>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-dashed border-surfaceMuted/80 bg-surface/60 px-4 py-3 text-[11px] text-textMuted sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p>
            Not sure if your postcode is covered, or have a job that spans more
            than one property?
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-accent bg-background px-3 py-1.5 text-[11px] font-semibold text-accent hover:bg-accent hover:text-background"
            >
              📸 WhatsApp photos &amp; postcodes
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border border-surfaceMuted bg-background px-3 py-1.5 text-[11px] font-semibold text-textPrimary hover:border-accent hover:text-accent"
            >
              📞 Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
