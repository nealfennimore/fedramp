// Builds a lightweight client-side search index from the source datafile.
// Emitted to public/search-index.json and fetched by the /search page.
import fs from "fs";
import path from "path";

const root = process.cwd();
const raw = JSON.parse(fs.readFileSync(path.join(root, "fedramp-consolidated-rules.json"), "utf8"));

const index = [];

function isRule(node) {
  return (
    node &&
    typeof node === "object" &&
    !Array.isArray(node) &&
    (typeof node.statement === "string" || node.force || node.varies_by_class)
  );
}

function classStatements(node) {
  if (!node.varies_by_class) return "";
  return Object.values(node.varies_by_class)
    .map((v) => v.statement || "")
    .join(" ");
}

// --- Requirements (FRR) ---
for (const [code, fam] of Object.entries(raw.FRR)) {
  const webName = fam.info?.web_name || code.toLowerCase();
  const famName = fam.info?.name || code;
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    for (const [key, value] of Object.entries(node)) {
      if (isRule(value)) {
        index.push({
          id: key,
          type: "requirement",
          group: `${code} · ${famName}`,
          title: value.name || key,
          force: value.force || (value.varies_by_class ? "varies" : ""),
          text: [value.statement, value.note, classStatements(value)].filter(Boolean).join(" "),
          href: `/requirements/${webName}/#${key}`,
        });
      } else if (value && typeof value === "object") {
        walk(value);
      }
    }
  };
  walk(fam.data || {});
}

// --- Definitions (FRD) --- (may be nested under a type key like data.all)
const walkDefs = (node, key) => {
  if (!node || typeof node !== "object") return;
  if (typeof node.definition === "string" && typeof node.term === "string") {
    index.push({
      id: key,
      type: "definition",
      group: "Definitions",
      title: node.term,
      text: [node.definition, node.note, ...(node.alts || [])].filter(Boolean).join(" "),
      href: `/definitions/#${key}`,
    });
    return;
  }
  for (const [k, v] of Object.entries(node)) walkDefs(v, k);
};
walkDefs(raw.FRD.data || {}, "FRD");

// --- KSI ---
for (const [code, fam] of Object.entries(raw.KSI)) {
  for (const [id, v] of Object.entries(fam.indicators || {})) {
    index.push({
      id,
      type: "ksi",
      group: `${fam.id || "KSI-" + code} · ${fam.name || code}`,
      title: v.name || id,
      text: [v.statement, ...(v.controls || [])].filter(Boolean).join(" "),
      href: `/ksi/#${id}`,
    });
  }
}

// --- Controls (CTL) ---
for (const [code, fam] of Object.entries(raw.CTL)) {
  for (const [id, v] of Object.entries(fam)) {
    const params = (v.parameters || []).map((p) => `${p.parameterId} ${p.value}`).join(" ");
    const guidance = (v.guidance || []).join(" ");
    index.push({
      id,
      type: "control",
      group: `${code} Family`,
      title: id,
      text: [params, guidance].filter(Boolean).join(" "),
      href: `/controls/#${id}`,
    });
  }
}

const outDir = path.join(root, "public");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "search-index.json"), JSON.stringify(index));
console.log(`Wrote search index: ${index.length} entries -> public/search-index.json`);
