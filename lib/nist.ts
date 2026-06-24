// Helpers for linking NIST SP 800-53 Rev 5 control references to an external
// catalog. Control ids appear in several spellings across the FedRAMP data:
//   KSI:        cp-3, at-2.2, sr-11.1, ir-2.3        (lowercase, dot enhancement)
//   CTL ids:    AC-06-01, AU-06-05, CP-07-01         (padded, dash enhancement)
//   CTL params: ac-06.01_odp.02, au-12_odp.01        (dot enhancement, _odp suffix)

export interface ParsedControl {
  family: string; // uppercase, e.g. "AC"
  num: number; // base control number, e.g. 6
  enhancement: number | null; // enhancement number, e.g. 1, or null
  /** Canonical display id, e.g. "AC-6" or "AC-6(1)". */
  label: string;
}

// The 20 NIST SP 800-53 Rev 5 control family prefixes. Used to keep prose
// auto-linking from matching unrelated "XX-9" style tokens.
export const NIST_FAMILIES = [
  "AC", "AT", "AU", "CA", "CM", "CP", "IA", "IR", "MA", "MP",
  "PE", "PL", "PM", "PS", "PT", "RA", "SA", "SC", "SI", "SR",
] as const;

export function parseControlId(raw: string): ParsedControl | null {
  if (!raw) return null;
  // Drop any parameter suffix (everything from the first underscore).
  const base = raw.split("_")[0].trim();
  // family (2 letters) - number (optionally zero-padded) - optional enhancement
  // separated by "." or "-", or written parenthetically e.g. AC-2(1).
  const m = base.match(/^([A-Za-z]{2})[-\s]?0*(\d+)(?:[.\-]0*(\d+)|\s*\(0*(\d+)\))?$/);
  if (!m) return null;
  const family = m[1].toUpperCase();
  const num = parseInt(m[2], 10);
  const enhRaw = m[3] ?? m[4];
  const enhancement = enhRaw != null ? parseInt(enhRaw, 10) : null;
  const label = enhancement != null ? `${family}-${num}(${enhancement})` : `${family}-${num}`;
  return { family, num, enhancement, label };
}

// Matches control references inside prose, restricted to known families.
export const CONTROL_PROSE_REGEX = new RegExp(
  `\\b(?:${NIST_FAMILIES.join("|")})-\\d{1,2}(?:\\(\\d{1,2}\\)|\\.\\d{1,2})?\\b`,
  "g"
);

// Links to the official NIST Cybersecurity & Privacy Reference Tool (CPRT)
// catalog for SP 800-53 Rev 5 (release 5.2.0). CPRT element identifiers are
// zero-padded to two digits, e.g. AC-02 and the enhancement AC-02(05); the
// catalog is a hash-routed SPA and enhancements take an extra anchor fragment.
const CPRT_VERSION = "SP_800_53_5_2_0";
const pad2 = (n: number) => String(n).padStart(2, "0");

export function nistElementId(parsed: ParsedControl): string {
  const base = `${parsed.family}-${pad2(parsed.num)}`;
  return parsed.enhancement != null ? `${base}(${pad2(parsed.enhancement)})` : base;
}

export function nist80053Url(parsed: ParsedControl): string {
  const element = nistElementId(parsed);
  const root = `https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/${CPRT_VERSION}/home?element=${element}`;
  // Enhancements scroll to an anchor within the parent control's view.
  return parsed.enhancement != null ? `${root}#${element}` : root;
}

export function controlUrl(raw: string): string | null {
  const parsed = parseControlId(raw);
  return parsed ? nist80053Url(parsed) : null;
}
