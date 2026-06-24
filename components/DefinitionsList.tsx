"use client";

import { useMemo, useState } from "react";
import type { Definition } from "@/lib/types";
import { InlineRich } from "./RichText";

export function DefinitionsList({ definitions }: { definitions: Definition[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return definitions;
    return definitions.filter(
      (d) =>
        d.term.toLowerCase().includes(q) ||
        d.definition.toLowerCase().includes(q) ||
        (d.alts ?? []).some((a) => a.toLowerCase().includes(q))
    );
  }, [query, definitions]);

  // Group alphabetically by first letter.
  const groups = useMemo(() => {
    const map = new Map<string, Definition[]>();
    for (const d of filtered) {
      const letter = d.term[0]?.toUpperCase() ?? "#";
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(d);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 mb-6 border-b border-slate-200 bg-slate-50/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter definitions…"
              className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            <svg className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-sm text-slate-400">{filtered.length} terms</span>
        </div>
      </div>

      {groups.length === 0 && (
        <p className="py-12 text-center text-slate-400">No definitions match &ldquo;{query}&rdquo;.</p>
      )}

      <div className="space-y-10">
        {groups.map(([letter, defs]) => (
          <section key={letter}>
            <h2 className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-700 text-lg font-black text-white">
              {letter}
            </h2>
            <div className="space-y-4">
              {defs.map((d) => (
                <article
                  key={d.id}
                  id={d.id}
                  className="scroll-mt-32 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{d.term}</h3>
                    <span className="font-mono text-xs text-slate-400">{d.id}</span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                    <InlineRich text={d.definition} />
                  </p>
                  {d.note && (
                    <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-500">
                      <InlineRich text={d.note} />
                    </p>
                  )}
                  {d.alts && d.alts.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold uppercase text-slate-400">Also:</span>
                      {d.alts.map((a) => (
                        <span
                          key={a}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
                        >
                          {a}
                        </span>
                      ))}
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
