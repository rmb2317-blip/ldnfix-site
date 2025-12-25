// components/WhyChooseLDNFIX.tsx

export default function WhyChooseLDNFIX() {
  return (
    <section
      id="why-ldnfix"
      aria-labelledby="why-ldnfix-heading"
      className="bg-background py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* LocalBusiness microdata */}
      <meta itemProp="name" content="LDNFIX" />
      <meta itemProp="url" content="https://www.ldnfix.co.uk" />
      <meta itemProp="telephone" content="02036338772" />
      <meta itemProp="email" content="info@ldnfix.co.uk" />
      <meta itemProp="areaServed" content="Greater London" />

      <div className="mx-auto max-w-5xl rounded-3xl bg-slate-50 p-6 shadow-xl sm:p-8">
        {/* Heading */}
        <header className="mb-8 text-center sm:mb-10">
          <h2
            id="why-ldnfix-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900"
          >
            Why London Homeowners Trust LDNFIX
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            LDNFIX isn&apos;t a lead-gen site or faceless middleman. You deal
            directly with the person who&apos;s spent years on the tools and now
            manages every repair, refurb and trade on your behalf.
          </p>
        </header>

        {/* 5-point trust grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-8">
          {/* 1 */}
          <article className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div
              className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-lg"
              aria-hidden="true"
            >
              🛠️
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                15+ Years Hands-On Construction
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Every quote is informed by real experience building and
                repairing London homes – not guesswork from someone who&apos;s
                never lifted a trowel or climbed a scaffold.
              </p>
            </div>
          </article>

          {/* 2 */}
          <article className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div
              className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-lg"
              aria-hidden="true"
            >
              🧱
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Built From Ground Up – Not Just Patch Jobs
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                From foundations and roofs to final skim and paint, LDNFIX
                understands how all the trades lock together – so repairs are
                planned properly and refurbs hold up long-term.
              </p>
            </div>
          </article>

          {/* 3 */}
          <article className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div
              className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-lg"
              aria-hidden="true"
            >
              🛡️
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Fully Insured & Properly Vetted Trades
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Plumbing, electrics and gas are handled by qualified specialists
                LDNFIX would trust in its own home – all booked, checked and
                managed under one accountable banner.
              </p>
            </div>
          </article>

          {/* 4 */}
          <article className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div
              className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-lg"
              aria-hidden="true"
            >
              ⏱️
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Fast Quotes & Reliable Scheduling
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Send photos, get sensible options and clear dates. No waiting
                weeks for a call back while leaks, cracks or tenants get worse.
              </p>
            </div>
          </article>

          {/* 5 */}
          <article className="md:col-span-2 flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div
              className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 text-lg"
              aria-hidden="true"
            >
              📞
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Clear Communication From Quote to Sign-Off
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                You speak to the same person from first WhatsApp to final
                walkthrough. No script-reading call centres, no being passed
                around – just straight answers and honest updates.
              </p>
            </div>
          </article>
        </div>

        {/* Trust visual row */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 border-y border-slate-200 py-4 text-xs sm:text-sm font-medium text-slate-700">
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-[11px]"
            >
              ✓
            </span>
            <span>Rated 5 / 5 by repeat clients</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-[11px]"
            >
              ✓
            </span>
            <span>Fully insured, construction-led approach</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-[11px]"
            >
              ✓
            </span>
            <span>Trusted by landlords & managing agents</span>
          </div>
        </div>

        {/* Compare Us vs Them table */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="bg-slate-900 px-4 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-slate-50">
            LDNFIX vs Other Contractors
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-500"></th>
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    LDNFIX
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-500">
                    Typical Contractor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <th className="px-4 py-3 font-semibold text-slate-600">
                    Experience
                  </th>
                  <td className="px-4 py-3">
                    15+ years on real builds and refurbs across London – from
                    roofs and structure to finishing trades.
                  </td>
                  <td className="px-4 py-3">
                    Often sales-led, with limited or no hands-on construction
                    background.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <th className="px-4 py-3 font-semibold text-slate-600">
                    Point of Contact
                  </th>
                  <td className="px-4 py-3">
                    One person surveying, pricing and managing the job from
                    start to finish.
                  </td>
                  <td className="px-4 py-3">
                    Call centre, rotating site staff or subbies you&apos;ve
                    never met.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <th className="px-4 py-3 font-semibold text-slate-600">
                    Quotes
                  </th>
                  <td className="px-4 py-3">
                    Based on real labour and material knowledge – with options
                    explained in plain language.
                  </td>
                  <td className="px-4 py-3">
                    Vague ballparks, upsells or quotes that change once work
                    starts.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <th className="px-4 py-3 font-semibold text-slate-600">
                    Guarantees
                  </th>
                  <td className="px-4 py-3">
                    Pride-based workmanship – if it&apos;s not something
                    we&apos;d accept in our own home, it doesn&apos;t pass.
                  </td>
                  <td className="px-4 py-3">
                    &quot;We&apos;ll see what we can do&quot; once issues show
                    up after payment.
                  </td>
                </tr>
                <tr className="border-t border-slate-200">
                  <th className="px-4 py-3 font-semibold text-slate-600">
                    Proof & Communication
                  </th>
                  <td className="px-4 py-3">
                    Photos, updates and clear WhatsApp communication throughout
                    the job.
                  </td>
                  <td className="px-4 py-3">
                    Sporadic updates, unanswered calls and &quot;we&apos;re
                    running behind&quot; with no detail.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-50 shadow-md transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            aria-label="Request a quote from LDNFIX"
          >
            Request a quote
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
