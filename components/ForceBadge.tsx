import type { Force } from "@/lib/types";

const STYLES: Record<string, string> = {
  MUST: "bg-red-100 text-red-800 ring-red-600/20",
  "MUST NOT": "bg-red-100 text-red-800 ring-red-600/20",
  SHOULD: "bg-amber-100 text-amber-800 ring-amber-600/20",
  "SHOULD NOT": "bg-amber-100 text-amber-800 ring-amber-600/20",
  MAY: "bg-sky-100 text-sky-800 ring-sky-600/20",
};

export function ForceBadge({ force, className = "" }: { force?: Force; className?: string }) {
  if (!force) return null;
  const style = STYLES[force] ?? "bg-slate-100 text-slate-700 ring-slate-500/20";
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wide ring-1 ring-inset ${style} ${className}`}
    >
      {force}
    </span>
  );
}
