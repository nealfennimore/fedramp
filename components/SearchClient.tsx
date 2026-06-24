"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ForceBadge } from "./ForceBadge";

interface Entry {
  id: string;
  type: "requirement" | "definition" | "ksi" | "control";
  group: string;
  title: string;
  force?: string;
  text: string;
  href: string;
}

const TYPE_META: Record<Entry["type"], { label: string; cls: string }> = {
  requirement: { label: "Requirement", cls: "bg-brand-50 text-brand-700 ring-brand-600/20" },
  definition: { label: "Definition", cls: "bg-amber-50 text-amber-700 ring-amber-600/20" },
  ksi: { label: "KSI", cls: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
  control: { label: "Control", cls: "bg-violet-50 text-violet-700 ring-violet-600/20" },
};

function snippet(text: string, q: string): string {
  if (!q) return text.slice(0, 180);
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i < 0) return text.slice(0, 180);
  const start = Math.max(0, i - 60);
  return (start > 0 ? "…" : "") + text.slice(start, start + 200);
}

export function SearchClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [typeFilter, setTypeFilter] = useState<string>("all");

  useEffect(() => {
    setQuery(initial);
  }, [initial]);

  useEffect(() => {
    let active = true;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: Entry[]) => active && setIndex(data))
      .catch(() => active && setIndex([]));
    return () => {
      active = false;
    };
  }, []);

  const results = useMemo(() => {
    if (!index) return [];
    const q = query.trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    let list = index;
    if (typeFilter !== "all") list = list.filter((e) => e.type === typeFilter);
    if (terms.length === 0) return list.slice(0, 60);
    const scored = list
      .map((e) => {
        const hay = `${e.id} ${e.title} ${e.group} ${e.text}`.toLowerCase();
        let score = 0;
        for (const t of terms) {
          if (!hay.includes(t)) return null;
          if (e.id.toLowerCase().includes(t)) score += 5;
          if (e.title.toLowerCase().includes(t)) score += 3;
          score += 1;
        }
        return { e, score };
      })
      .filter((x): x is { e: Entry; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 100);
    return scored.map((s) => s.e);
  }, [index, query, typeFilter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: 0, requirement: 0, definition: 0, ksi: 0, control: 0 };
    if (!index) return c;
    const q = query.trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    for (const e of index) {
      const hay = `${e.id} ${e.title} ${e.group} ${e.text}`.toLowerCase();
      if (terms.length === 0 || terms.every((t) => hay.includes(t))) {
        c.all++;
        c[e.type]++;
      }
    }
    return c;
  }, [index, query]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.replace(query.trim() ? `/search/?q=${encodeURIComponent(query.trim())}` : "/search/");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <div className="relative">
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search requirements, definitions, indicators, controls…"
            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-base shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          <svg className="absolute left-4 top-4 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {(["all", "requirement", "definition", "ksi", "control"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTypeFilter(t)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition ${
              typeFilter === t
                ? "bg-brand-700 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300"
            }`}
          >
            {t === "all" ? "All" : TYPE_META[t].label} <span className="opacity-70">{counts[t]}</span>
          </button>
        ))}
      </div>

      {index === null ? (
        <p className="py-12 text-center text-slate-400">Loading index…</p>
      ) : results.length === 0 ? (
        <p className="py-12 text-center text-slate-400">
          {query.trim() ? `No results for “${query}”.` : "Type to search."}
        </p>
      ) : (
        <ul className="space-y-3">
          {results.map((e) => {
            const meta = TYPE_META[e.type];
            return (
              <li key={`${e.type}-${e.id}`}>
                <Link
                  href={e.href}
                  className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${meta.cls}`}
                    >
                      {meta.label}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{e.id}</span>
                    {e.force && e.force !== "varies" && <ForceBadge force={e.force} />}
                    <span className="ml-auto text-xs text-slate-400">{e.group}</span>
                  </div>
                  <h3 className="mt-1.5 font-semibold text-slate-900">{e.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">{snippet(e.text, query.trim())}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
