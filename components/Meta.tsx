import type { Applicability, EffectiveDate } from "@/lib/types";

export function EffectiveDates({ effective }: { effective?: EffectiveDate }) {
  if (!effective?.date) return null;
  const d = effective.date;
  const items: { label: string; value?: string }[] = [
    { label: "Obtain by", value: d.obtain },
    { label: "Maintain by", value: d.maintain },
    { label: "Optional adoption", value: d.optional_adoption },
    { label: "Grace period", value: d.grace?.default },
  ].filter((x) => x.value);
  if (items.length === 0) return null;
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((it) => (
        <div key={it.label} className="rounded-lg bg-slate-50 px-3 py-2">
          <dt className="text-xs font-medium text-slate-400">{it.label}</dt>
          <dd className="text-sm font-semibold text-slate-700">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const AXIS_STYLES: Record<string, string> = {
  types: "bg-violet-50 text-violet-700 ring-violet-600/20",
  paths: "bg-sky-50 text-sky-700 ring-sky-600/20",
  classes: "bg-slate-100 text-slate-700 ring-slate-500/20",
  affects: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

export function ApplicabilityBadges({ applicability }: { applicability?: Applicability }) {
  if (!applicability) return null;
  const axes: { key: keyof Applicability; label: string }[] = [
    { key: "types", label: "Types" },
    { key: "paths", label: "Paths" },
    { key: "classes", label: "Classes" },
    { key: "affects", label: "Affects" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {axes.map(({ key, label }) => {
        const vals = applicability[key];
        if (!vals || vals.length === 0) return null;
        return (
          <div key={key} className="flex flex-wrap items-center gap-1.5">
            <span className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </span>
            {vals.map((v) => (
              <span
                key={v}
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                  AXIS_STYLES[key] ?? "bg-slate-100 text-slate-700 ring-slate-500/20"
                }`}
              >
                {v}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
