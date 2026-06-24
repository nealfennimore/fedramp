# FedRAMP 2026 Rules — Static Site

A static, browsable reference for the **FedRAMP Consolidated Rules for 2026**, built with
Next.js (App Router), TypeScript, and Tailwind CSS v4. All content is generated at build time
from [`fedramp-consolidated-rules.json`](./fedramp-consolidated-rules.json) and exported to plain
static HTML — no server required.

## Pages

| Route | Content |
|---|---|
| `/` | Overview, dataset cards, force-keyword legend, certification classes, applicability dimensions |
| `/requirements` | The FRR requirement families (index) |
| `/requirements/[family]` | Each family's rules, grouped by subset, with per-class variants, artifacts, notes, and cross-links |
| `/ksi` | Key Security Indicators with mapped NIST 800-53 controls |
| `/controls` | CTL control parameters (ODP values) and guidance |
| `/definitions` | Searchable glossary of FRD definitions |
| `/search` | Full-text client-side search across everything |

Defined terms in rules and indicators link to their definitions; `related` rule IDs link across
families.

## Develop

This repo uses Nix for the Node toolchain. Prefix commands with `nix-shell --run` (or run `nix-shell`
first, then the commands inside the shell):

```bash
nix-shell --run 'npm install'      # install dependencies
nix-shell --run 'npm run dev'      # dev server at http://localhost:3000
nix-shell --run 'npm run build'    # static export to ./out
nix-shell --run 'npm run serve'    # preview the built ./out directory
```

## How it works

- **`lib/data.ts`** reads and normalizes the source JSON into typed structures (`lib/types.ts`).
  The source nests rules as `FRR[family].data[type][subset][ruleId]`, with some rules carrying a
  `varies_by_class` map instead of a single statement — the loader flattens all of this and builds a
  term → definition lookup for cross-linking.
- **`scripts/build-search-index.mjs`** runs on `prebuild` and emits `public/search-index.json`, a
  lightweight index the `/search` page fetches at runtime.
- **`components/RuleCard.tsx`** renders a single requirement, handling every observed field
  (force, per-class tables, timeframes, artifacts, danger callouts, examples, schema/reference
  links, related rules, and terms).
- Static export is configured in `next.config.mjs` (`output: 'export'`, `trailingSlash: true`).

> Unofficial reference rendering. Not affiliated with or endorsed by FedRAMP or the GSA.
