// Stamps the exported service worker (out/sw.js) with a unique build id so each
// deploy uses a fresh cache name and the worker's activate handler purges the
// previous one. Build id = data version (or package version) + short git commit.
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const root = process.cwd();

// Prefer the FedRAMP data version (changes when the ruleset changes), falling
// back to the package version.
let version = "0.0.0";
try {
  version = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version || version;
} catch {}
try {
  const data = JSON.parse(fs.readFileSync(path.join(root, "fedramp-consolidated-rules.json"), "utf8"));
  if (data?.info?.version) version = data.info.version;
} catch {}

let commit = "";
try {
  commit = execSync("git rev-parse --short HEAD", {
    cwd: root,
    stdio: ["ignore", "pipe", "ignore"],
  })
    .toString()
    .trim();
} catch {}

const buildId = commit ? `${version}-${commit}` : version;

const swPath = path.join(root, "out", "sw.js");
if (!fs.existsSync(swPath)) {
  console.warn("stamp-sw: out/sw.js not found — skipping (did `next build` run?)");
  process.exit(0);
}

const stamped = fs.readFileSync(swPath, "utf8").replaceAll("__BUILD_ID__", buildId);
fs.writeFileSync(swPath, stamped);
console.log(`stamp-sw: cacheName = "${buildId}"`);
