import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getData, getRequirementFamily } from "@/lib/data";
import type { Rule } from "@/lib/types";
import { RuleCard } from "@/components/RuleCard";
import { RichText } from "@/components/RichText";
import { ApplicabilityBadges, EffectiveDates } from "@/components/Meta";

export function generateStaticParams() {
  return getData().requirements.map((f) => ({ family: f.webName }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ family: string }>;
}): Promise<Metadata> {
  const { family } = await params;
  const fam = getRequirementFamily(family);
  if (!fam) return { title: "Requirement family" };
  return {
    title: `${fam.name} (${fam.code})`,
    description: fam.purpose?.slice(0, 160),
  };
}

const TYPE_ORDER: Record<string, number> = { all: 0, "20x": 1, rev5: 2 };

export default async function FamilyPage({ params }: { params: Promise<{ family: string }> }) {
  const { family } = await params;
  const fam = getRequirementFamily(family);
  if (!fam) notFound();

  // Group rules by subset, preserving the subset declaration order.
  const bySubset = new Map<string, Rule[]>();
  for (const s of fam.subsets) bySubset.set(s.code, []);
  for (const r of fam.rules) {
    if (!bySubset.has(r.subset)) bySubset.set(r.subset, []);
    bySubset.get(r.subset)!.push(r);
  }
  for (const rules of bySubset.values()) {
    rules.sort((a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9) || a.id.localeCompare(b.id));
  }

  const subsetByCode = Object.fromEntries(fam.subsets.map((s) => [s.code, s]));

  return (
    <div className="space-y-8">
      <nav className="text-sm text-slate-500">
        <Link href="/requirements/" className="hover:text-brand-700">
          Requirements
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-slate-700">{fam.code}</span>
      </nav>

      <header className="space-y-5">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-brand-700 px-2.5 py-1 font-mono text-sm font-bold text-white">
              {fam.code}
            </span>
            {fam.tag && (
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium capitalize text-slate-600">
                {fam.tag}
              </span>
            )}
            {fam.status && (
              <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-medium capitalize text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                {fam.status}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">{fam.name}</h1>
        </div>
        {fam.purpose && (
          <RichText text={fam.purpose} className="max-w-3xl text-[15px] leading-relaxed text-slate-600" />
        )}
        {fam.effective?.date && (
          <div>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Effective dates</h2>
            <EffectiveDates effective={fam.effective} />
          </div>
        )}
      </header>

      {/* Subset jump links */}
      {fam.subsets.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {fam.subsets.map((s) => (
            <a
              key={s.code}
              href={`#subset-${s.code}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-brand-300 hover:text-brand-700"
            >
              {s.name}
            </a>
          ))}
        </div>
      )}

      {/* Rules grouped by subset */}
      <div className="space-y-12">
        {[...bySubset.entries()].map(([code, rules]) => {
          if (rules.length === 0) return null;
          const subset = subsetByCode[code];
          return (
            <section key={code} id={`subset-${code}`} className="scroll-mt-24">
              <div className="mb-5 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-xl font-bold text-slate-900">
                    {subset?.name ?? code}
                    <span className="ml-2 font-mono text-sm font-normal text-slate-400">{code}</span>
                  </h2>
                  <span className="text-xs font-medium text-slate-400">{rules.length} rules</span>
                </div>
                {subset?.description && (
                  <p className="mt-2 text-sm text-slate-600">{subset.description}</p>
                )}
                {subset?.applicability && (
                  <div className="mt-4">
                    <ApplicabilityBadges applicability={subset.applicability} />
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {rules.map((r) => (
                  <RuleCard key={`${r.type}-${r.id}`} rule={r} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
