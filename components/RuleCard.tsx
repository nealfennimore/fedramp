import Link from "next/link";
import type { Rule } from "@/lib/types";
import { definitionIdForTerm, ruleHref } from "@/lib/data";
import { ForceBadge } from "./ForceBadge";
import { ControlLink } from "./ControlLink";
import { InlineRich, RichText } from "./RichText";

function TypeChip({ type }: { type: string }) {
  if (!type || type === "all") return null;
  const label = type === "20x" ? "FedRAMP 20x" : type === "rev5" ? "Rev 5" : type;
  return (
    <span className="inline-flex items-center rounded-md bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-800 ring-1 ring-inset ring-violet-600/20">
      {label}
    </span>
  );
}

function Timeframe({ num, type }: { num?: number; type?: string }) {
  if (!num || !type) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-600/20">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .28.16.54.4.67l3 1.7a.75.75 0 00.74-1.3l-2.64-1.5V5z"
          clipRule="evenodd"
        />
      </svg>
      Every {num} {type}
    </span>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 pl-1">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 text-sm text-slate-700">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden />
          <InlineRich text={it} />
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">{title}</h4>
      {children}
    </div>
  );
}

function TermChip({ term }: { term: string }) {
  const id = definitionIdForTerm(term);
  const cls =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset";
  if (id) {
    return (
      <Link
        href={`/definitions/#${id}`}
        className={`${cls} bg-brand-50 text-brand-700 ring-brand-600/20 hover:bg-brand-100`}
      >
        {term}
      </Link>
    );
  }
  return <span className={`${cls} bg-slate-100 text-slate-600 ring-slate-500/20`}>{term}</span>;
}

export function RuleCard({ rule }: { rule: Rule }) {
  const v = rule.variesByClass;
  return (
    <article
      id={rule.id}
      className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <a
            href={`#${rule.id}`}
            className="font-mono text-xs font-semibold text-brand-600 hover:text-brand-800"
          >
            {rule.id}
          </a>
          {rule.name && <h3 className="text-base font-semibold text-slate-900">{rule.name}</h3>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {!v && <ForceBadge force={rule.force} />}
          <TypeChip type={rule.type} />
          {!v && <Timeframe num={rule.timeframe_num} type={rule.timeframe_type} />}
        </div>
      </div>

      {rule.statement && <RichText text={rule.statement} className="mt-3 text-[15px] leading-relaxed text-slate-700" />}

      {/* Per-class variants */}
      {v && (
        <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="w-20 px-3 py-2 font-semibold">Class</th>
                <th className="px-3 py-2 font-semibold">Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {v.map((cv) => (
                <tr key={cv.class} className="align-top">
                  <td className="px-3 py-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-800 text-sm font-bold text-white">
                      {cv.class}
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <ForceBadge force={cv.force} />
                      <Timeframe num={cv.timeframe_num} type={cv.timeframe_type} />
                    </div>
                    {cv.statement && (
                      <RichText text={cv.statement} className="text-slate-700" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {rule.following_information && rule.following_information.length > 0 && (
        <Bullets items={rule.following_information} />
      )}
      {rule.following_information_bullets && rule.following_information_bullets.length > 0 && (
        <Bullets items={rule.following_information_bullets} />
      )}

      {rule.danger && (
        <div className="mt-4 flex gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-red-500" fill="currentColor" aria-hidden>
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <InlineRich text={rule.danger} />
        </div>
      )}

      {(rule.note || (rule.notes && rule.notes.length > 0)) && (
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
          {rule.note && <InlineRich text={rule.note} />}
          {rule.notes && rule.notes.length > 0 && (
            <ul className="space-y-1.5">
              {rule.notes.map((n, i) => (
                <li key={i}>
                  <InlineRich text={n} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {rule.corrective_actions && rule.corrective_actions.length > 0 && (
        <Section title="Corrective Actions">
          <Bullets items={rule.corrective_actions} />
        </Section>
      )}

      {rule.rev5_controls_list && rule.rev5_controls_list.length > 0 && (
        <Section title="Rev 5 Controls">
          <div className="mt-2 flex flex-wrap gap-1.5">
            {rule.rev5_controls_list.map((c) => (
              <ControlLink key={c} id={c} display="canonical" />
            ))}
          </div>
        </Section>
      )}

      {rule.artifacts && Object.keys(rule.artifacts).length > 0 && (
        <Section title="Required Artifacts">
          {Object.entries(rule.artifacts).map(([scope, items]) => (
            <div key={scope} className="mt-1.5">
              {scope !== "all" && (
                <span className="text-xs font-semibold uppercase text-slate-400">{scope}</span>
              )}
              <Bullets items={items} />
            </div>
          ))}
        </Section>
      )}

      {rule.examples && rule.examples.length > 0 && (
        <Section title="Examples & Tips">
          {rule.examples.map((ex, i) => (
            <div key={i} className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
              {ex.id && <p className="text-sm font-semibold text-slate-800">{ex.id}</p>}
              {ex.key_tests && ex.key_tests.length > 0 && <Bullets items={ex.key_tests} />}
              {ex.examples && ex.examples.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {ex.examples.map((e, j) => (
                    <li key={j}>
                      <InlineRich text={e} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {(rule.schema?.url || rule.reference_url || rule.notification) && (
        <Section title="References">
          <div className="mt-1.5 flex flex-wrap gap-2">
            {rule.schema?.url && (
              <a
                href={rule.schema.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
              >
                {rule.schema.name ?? "Schema"} ↗
              </a>
            )}
            {rule.reference_url && (
              <a
                href={rule.reference_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
              >
                {rule.reference ?? "Reference"} ↗
              </a>
            )}
            {rule.notification?.map((n, i) => (
              <a
                key={i}
                href={n.target}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
              >
                {n.name ?? n.target} ↗
              </a>
            ))}
          </div>
        </Section>
      )}

      {((rule.related && rule.related.length > 0) || (rule.terms && rule.terms.length > 0)) && (
        <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4">
          {rule.related && rule.related.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Related</span>
              {rule.related.map((rid) => {
                const href = ruleHref(rid);
                return href ? (
                  <Link
                    key={rid}
                    href={href}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-600 hover:bg-slate-200"
                  >
                    {rid}
                  </Link>
                ) : (
                  <span key={rid} className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-600">
                    {rid}
                  </span>
                );
              })}
            </div>
          )}
          {rule.terms && rule.terms.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Terms</span>
              {rule.terms.map((t) => (
                <TermChip key={t} term={t} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
