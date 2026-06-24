import Link from "next/link";
import type { Metadata } from "next";
import { getData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Requirements",
  description: "FedRAMP requirement families (FRR) for the 2026 Consolidated Rules.",
};

export default function RequirementsIndex() {
  const { requirements } = getData();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">FRR · Requirements</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Requirement Families</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          The actual FedRAMP rules, grouped into {requirements.length} topical families. Each family is
          split into subsets by who the rule applies to. Choose a family to read its rules.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {requirements.map((fam) => (
          <Link
            key={fam.code}
            href={`/requirements/${fam.webName}/`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-brand-50 px-2 py-1 font-mono text-xs font-bold text-brand-700">
                {fam.code}
              </span>
              <span className="text-xs font-medium text-slate-400">{fam.ruleCount} rules</span>
            </div>
            <h2 className="mt-3 text-base font-bold text-slate-900 group-hover:text-brand-700">{fam.name}</h2>
            {fam.purpose && (
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">{fam.purpose}</p>
            )}
            {fam.tag && (
              <span className="mt-3 inline-flex w-fit items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium capitalize text-slate-600">
                {fam.tag}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
