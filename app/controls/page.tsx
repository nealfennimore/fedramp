import type { Metadata } from "next";
import { getData } from "@/lib/data";
import { InlineRich } from "@/components/RichText";
import { parseControlId, nist80053Url } from "@/lib/nist";

export const metadata: Metadata = {
  title: "Control Parameters",
  description:
    "FedRAMP control parameters (CTL) — FedRAMP-specific parameter values and guidance on top of NIST SP 800-53.",
};

export default function ControlsPage() {
  const { controls } = getData();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">CTL · Control Parameters</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Control Parameters</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          FedRAMP-specific parameter values and guidance applied on top of NIST SP 800-53 controls. These
          set the organization-defined parameters (ODPs) and clarify how the baseline controls apply.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {controls.map((fam) => (
          <a
            key={fam.code}
            href={`#${fam.code}`}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-violet-300 hover:text-violet-700"
          >
            {fam.code}
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {controls.map((fam) => (
          <section key={fam.code} id={fam.code} className="scroll-mt-24">
            <div className="mb-5 flex items-baseline gap-3 border-b border-slate-200 pb-3">
              <span className="rounded-md bg-violet-600 px-2.5 py-1 font-mono text-sm font-bold text-white">
                {fam.code}
              </span>
              <h2 className="text-xl font-bold text-slate-900">{fam.code} Family</h2>
              <span className="ml-auto text-xs font-medium text-slate-400">{fam.controls.length} controls</span>
            </div>
            <div className="space-y-4">
              {fam.controls.map((ctl) => (
                <article
                  key={ctl.id}
                  id={ctl.id}
                  className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  {(() => {
                    const parsed = parseControlId(ctl.id);
                    return parsed ? (
                      <a
                        href={nist80053Url(parsed)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View NIST SP 800-53 ${parsed.label} ↗`}
                        className="group/ctl inline-flex items-center gap-1.5 font-mono text-sm font-bold uppercase text-slate-900 hover:text-brand-700"
                      >
                        {parsed.label}
                        <svg
                          className="h-3.5 w-3.5 text-slate-300 transition group-hover/ctl:text-brand-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    ) : (
                      <h3 className="font-mono text-sm font-bold uppercase text-slate-900">{ctl.id}</h3>
                    );
                  })()}

                  {ctl.parameters.length > 0 && (
                    <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                            <th className="px-3 py-2 font-semibold">Parameter</th>
                            <th className="px-3 py-2 font-semibold">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {ctl.parameters.map((p) => (
                            <tr key={p.parameterId} className="align-top">
                              <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-violet-700">
                                {p.parameterId}
                              </td>
                              <td className="px-3 py-2 text-slate-700">
                                <InlineRich text={p.value} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {ctl.variesByClass && ctl.variesByClass.length > 0 && (
                    <div className="mt-4 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">Varies by class</h4>
                      {ctl.variesByClass.map((cv) => (
                        <div key={cv.class} className="rounded-lg border border-slate-200 p-3">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-xs font-bold text-white">
                            {cv.class}
                          </span>
                          {cv.parameters && cv.parameters.length > 0 && (
                            <ul className="mt-2 space-y-1 text-sm text-slate-700">
                              {cv.parameters.map((p) => (
                                <li key={p.parameterId}>
                                  <span className="font-mono text-xs text-violet-700">{p.parameterId}</span>:{" "}
                                  <InlineRich text={p.value} />
                                </li>
                              ))}
                            </ul>
                          )}
                          {cv.guidance && cv.guidance.length > 0 && (
                            <ul className="mt-2 space-y-1 text-sm text-slate-600">
                              {cv.guidance.map((g, i) => (
                                <li key={i}>
                                  <InlineRich text={g} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {ctl.guidance.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400">Guidance</h4>
                      <ul className="mt-2 space-y-1.5">
                        {ctl.guidance.map((g, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                            <InlineRich text={g} />
                          </li>
                        ))}
                      </ul>
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
