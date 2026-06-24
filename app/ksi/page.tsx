import type { Metadata } from "next";
import { getData, definitionIdForTerm } from "@/lib/data";
import { InlineRich } from "@/components/RichText";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Key Security Indicators",
  description:
    "FedRAMP Key Security Indicators (KSI) — outcome-based security objectives mapped to NIST 800-53 controls.",
};

export default function KsiPage() {
  const { ksi } = getData();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">KSI · Key Security Indicators</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Key Security Indicators</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Outcome-based security objectives a provider must be able to demonstrate. Each indicator maps to
          the NIST SP 800-53 controls that substantiate it.
        </p>
      </header>

      {/* Family jump links */}
      <div className="flex flex-wrap gap-2">
        {ksi.map((fam) => (
          <a
            key={fam.code}
            href={`#${fam.code}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
          >
            {fam.name}
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {ksi.map((fam) => (
          <section key={fam.code} id={fam.code} className="scroll-mt-24">
            <div className="mb-5 flex flex-wrap items-baseline gap-3 border-b border-slate-200 pb-3">
              <span className="rounded-md bg-emerald-600 px-2.5 py-1 font-mono text-sm font-bold text-white">
                {fam.id}
              </span>
              <h2 className="text-xl font-bold text-slate-900">{fam.name}</h2>
              <span className="ml-auto text-xs font-medium text-slate-400">
                {fam.indicators.length} indicators
              </span>
            </div>
            <div className="space-y-4">
              {fam.indicators.map((ind) => (
                <article
                  key={ind.id}
                  id={ind.id}
                  className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-900">{ind.name}</h3>
                    <span className="font-mono text-xs text-emerald-600">{ind.id}</span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                    <InlineRich text={ind.statement} />
                  </p>

                  {ind.controls.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">
                        NIST 800-53 controls
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {ind.controls.map((c) => (
                          <span
                            key={c}
                            className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium uppercase text-slate-600"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {ind.terms && ind.terms.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Terms</span>
                      {ind.terms.map((t) => {
                        const id = definitionIdForTerm(t);
                        return id ? (
                          <Link
                            key={t}
                            href={`/definitions/#${id}`}
                            className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-600/20 hover:bg-brand-100"
                          >
                            {t}
                          </Link>
                        ) : (
                          <span
                            key={t}
                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/20"
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
