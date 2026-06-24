import { parseControlId, nist80053Url } from "@/lib/nist";

// Renders a NIST SP 800-53 control reference as a link to the external catalog.
// Falls back to plain text if the id can't be parsed. `display` controls the
// visible label: "raw" keeps the source spelling, "canonical" normalizes it.
export function ControlLink({
  id,
  className = "",
  display = "raw",
}: {
  id: string;
  className?: string;
  display?: "raw" | "canonical";
}) {
  const parsed = parseControlId(id);
  const base =
    "inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium uppercase";
  if (!parsed) {
    return <span className={`${base} text-slate-600 ${className}`}>{id}</span>;
  }
  const label = display === "canonical" ? parsed.label : id;
  return (
    <a
      href={nist80053Url(parsed)}
      target="_blank"
      rel="noopener noreferrer"
      title={`View NIST SP 800-53 ${parsed.label} ↗`}
      className={`${base} text-brand-700 ring-1 ring-inset ring-brand-600/20 transition hover:bg-brand-50 hover:text-brand-900 ${className}`}
    >
      {label}
    </a>
  );
}
