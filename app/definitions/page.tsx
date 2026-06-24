import type { Metadata } from "next";
import { getData } from "@/lib/data";
import { DefinitionsList } from "@/components/DefinitionsList";

export const metadata: Metadata = {
  title: "Definitions",
  description: "FedRAMP Definitions (FRD) — precise, binding meanings for terms used across the rules.",
};

export default function DefinitionsPage() {
  const { definitions } = getData();
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">FRD · Definitions</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Definitions</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          FedRAMP Definitions establish a shared understanding for terms when the plain-language meaning is
          not precise enough. When a defined term appears in a rule, the definition is binding.
        </p>
      </header>
      <DefinitionsList definitions={definitions} />
    </div>
  );
}
