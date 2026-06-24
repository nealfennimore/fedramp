import fs from "fs";
import path from "path";
import type {
  ClassLetter,
  ClassVariant,
  ControlEntry,
  ControlFamily,
  Definition,
  FedRampData,
  Indicator,
  KsiFamily,
  RequirementFamily,
  Rule,
  Subset,
} from "./types";

const RAW_PATH = path.join(process.cwd(), "fedramp-consolidated-rules.json");

let cache: FedRampData | null = null;

function readRaw(): any {
  return JSON.parse(fs.readFileSync(RAW_PATH, "utf8"));
}

const CLASS_ORDER: ClassLetter[] = ["A", "B", "C", "D"];

function toClassVariants(vbc: Record<string, any>): ClassVariant[] {
  return Object.entries(vbc)
    .map(([k, v]) => ({ class: k.toUpperCase() as ClassLetter, ...v }))
    .sort((a, b) => CLASS_ORDER.indexOf(a.class) - CLASS_ORDER.indexOf(b.class));
}

// A leaf rule object is one carrying a `statement` or `varies_by_class`.
function isRuleObject(node: any): boolean {
  return (
    node &&
    typeof node === "object" &&
    !Array.isArray(node) &&
    (typeof node.statement === "string" || node.force || node.varies_by_class)
  );
}

function normalizeRule(
  id: string,
  raw: any,
  family: string,
  familyName: string,
  type: string,
  subset: string,
  subsetName?: string
): Rule {
  const rule: Rule = {
    id,
    family,
    familyName,
    type,
    subset,
    subsetName,
    name: raw.name,
    statement: raw.statement,
    force: raw.force,
    note: raw.note,
    notes: Array.isArray(raw.notes) ? raw.notes : raw.notes ? [raw.notes] : undefined,
    following_information: raw.following_information,
    following_information_bullets: raw.following_information_bullets,
    timeframe_type: raw.timeframe_type,
    timeframe_num: raw.timeframe_num,
    affects: raw.affects,
    terms: raw.terms,
    related: raw.related,
    artifacts: raw.artifacts,
    danger: raw.danger,
    notification: raw.notification,
    schema: raw.schema,
    reference: raw.reference,
    reference_url: raw.reference_url,
    corrective_actions: raw.corrective_actions,
    examples: raw.examples,
    rev5_controls_list: raw.rev5_controls_list,
    updated: raw.updated,
  };
  if (raw.varies_by_class) rule.variesByClass = toClassVariants(raw.varies_by_class);
  return rule;
}

// Recursively walk data[type] tree collecting rules; tracks the subset key.
function collectRules(
  node: any,
  family: string,
  familyName: string,
  type: string,
  subsetMap: Record<string, Subset>,
  currentSubset: string | undefined,
  out: Rule[]
) {
  if (!node || typeof node !== "object") return;
  for (const [key, value] of Object.entries<any>(node)) {
    if (isRuleObject(value)) {
      const subsetCode = currentSubset ?? "";
      out.push(
        normalizeRule(
          key,
          value,
          family,
          familyName,
          type,
          subsetCode,
          subsetMap[subsetCode]?.name
        )
      );
    } else if (value && typeof value === "object") {
      // If this key matches a known subset code, descend with it as the subset.
      const nextSubset = subsetMap[key] ? key : currentSubset;
      collectRules(value, family, familyName, type, subsetMap, nextSubset, out);
    }
  }
}

function buildRequirements(FRR: any): RequirementFamily[] {
  const families: RequirementFamily[] = [];
  for (const code of Object.keys(FRR).sort()) {
    const fam = FRR[code];
    const info = fam.info ?? {};
    const subsetMap: Record<string, Subset> = {};
    const subsets: Subset[] = [];
    for (const [scode, sval] of Object.entries<any>(info.subsets ?? {})) {
      const s: Subset = {
        code: scode,
        name: sval.name ?? scode,
        description: sval.description,
        applicability: sval.applicability,
      };
      subsetMap[scode] = s;
      subsets.push(s);
    }
    const rules: Rule[] = [];
    for (const [type, typeNode] of Object.entries<any>(fam.data ?? {})) {
      collectRules(typeNode, code, info.name ?? code, type, subsetMap, undefined, rules);
    }
    families.push({
      code,
      name: info.name ?? code,
      webName: info.web_name ?? code.toLowerCase(),
      purpose: info.purpose,
      status: info.status,
      tag: info.tag,
      effective: info.effective,
      subsets,
      rules,
      ruleCount: rules.length,
    });
  }
  return families;
}

function buildDefinitions(FRD: any): Definition[] {
  const out: Definition[] = [];
  // Definitions may sit directly under data or be nested under a type key
  // (e.g. data.all). Recurse and collect any node carrying a `definition`.
  const walk = (node: any, key: string) => {
    if (!node || typeof node !== "object") return;
    if (typeof node.definition === "string" && typeof node.term === "string") {
      out.push({
        id: key,
        term: node.term,
        definition: node.definition,
        note: node.note,
        tag: node.tag,
        alts: node.alts,
        updated: node.updated,
      });
      return;
    }
    for (const [k, v] of Object.entries<any>(node)) walk(v, k);
  };
  walk(FRD.data ?? {}, "FRD");
  out.sort((a, b) => a.term.localeCompare(b.term));
  return out;
}

function buildKsi(KSI: any): KsiFamily[] {
  const out: KsiFamily[] = [];
  for (const code of Object.keys(KSI).sort()) {
    const fam = KSI[code];
    const indicators: Indicator[] = [];
    for (const [id, v] of Object.entries<any>(fam.indicators ?? {})) {
      indicators.push({
        id,
        name: v.name,
        statement: v.statement,
        controls: v.controls ?? [],
        terms: v.terms,
        updated: v.updated,
      });
    }
    indicators.sort((a, b) => a.id.localeCompare(b.id));
    out.push({
      code,
      id: fam.id ?? `KSI-${code}`,
      name: fam.name ?? code,
      webName: fam.web_name ?? code.toLowerCase(),
      status: fam.status,
      indicators,
    });
  }
  return out;
}

function buildControls(CTL: any): ControlFamily[] {
  const out: ControlFamily[] = [];
  for (const code of Object.keys(CTL).sort()) {
    const fam = CTL[code];
    const controls: ControlEntry[] = [];
    for (const id of Object.keys(fam).sort()) {
      const v = fam[id];
      const entry: ControlEntry = {
        id,
        family: code,
        parameters: v.parameters ?? [],
        guidance: v.guidance ?? [],
      };
      if (v.varies_by_class) {
        entry.variesByClass = Object.entries<any>(v.varies_by_class)
          .map(([k, val]) => ({
            class: k.toUpperCase() as ClassLetter,
            parameters: val.parameters,
            guidance: val.guidance,
          }))
          .sort((a, b) => CLASS_ORDER.indexOf(a.class) - CLASS_ORDER.indexOf(b.class));
      }
      controls.push(entry);
    }
    out.push({ code, controls });
  }
  return out;
}

export function getData(): FedRampData {
  if (cache) return cache;
  const raw = readRaw();
  const definitions = buildDefinitions(raw.FRD);
  const requirements = buildRequirements(raw.FRR);
  const ksi = buildKsi(raw.KSI);
  const controls = buildControls(raw.CTL);

  // Map every term and alt (lowercased) to its definition id for cross-linking.
  const termToId: Record<string, string> = {};
  for (const d of definitions) {
    termToId[d.term.toLowerCase()] = d.id;
    for (const alt of d.alts ?? []) termToId[alt.toLowerCase()] = d.id;
  }

  const ruleCount = requirements.reduce((n, f) => n + f.ruleCount, 0);
  const indicatorCount = ksi.reduce((n, f) => n + f.indicators.length, 0);
  const controlCount = controls.reduce((n, f) => n + f.controls.length, 0);

  cache = {
    info: raw.info,
    definitions,
    termToId,
    requirements,
    ksi,
    controls,
    stats: {
      requirementFamilies: requirements.length,
      rules: ruleCount,
      definitions: definitions.length,
      ksiFamilies: ksi.length,
      indicators: indicatorCount,
      controlFamilies: controls.length,
      controls: controlCount,
    },
  };
  return cache;
}

export function getRequirementFamily(webName: string): RequirementFamily | undefined {
  return getData().requirements.find((f) => f.webName === webName || f.code.toLowerCase() === webName);
}

export function definitionIdForTerm(term: string): string | undefined {
  return getData().termToId[term.toLowerCase()];
}

// Resolve a requirement rule id (e.g. "AFC-CSO-INB") to its on-site URL.
export function ruleHref(id: string): string | undefined {
  const code = id.split("-")[0];
  const fam = getData().requirements.find((f) => f.code === code);
  return fam ? `/requirements/${fam.webName}/#${id}` : undefined;
}
