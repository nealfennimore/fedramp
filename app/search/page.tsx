import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchClient } from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across all FedRAMP 2026 requirements, definitions, indicators, and controls.",
};

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Search</h1>
        <p className="mt-2 text-slate-600">
          Full-text search across every requirement, definition, key security indicator, and control
          parameter.
        </p>
      </header>
      <Suspense fallback={<p className="py-12 text-center text-slate-400">Loading…</p>}>
        <SearchClient />
      </Suspense>
    </div>
  );
}
