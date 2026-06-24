import Link from "next/link";
import { getData } from "@/lib/data";
import { ForceBadge } from "@/components/ForceBadge";

const FORCES: { force: string; meaning: string }[] = [
  { force: "MUST", meaning: "Mandatory." },
  { force: "MUST NOT", meaning: "Prohibited." },
  { force: "SHOULD", meaning: "Strongly recommended; deviation needs justification." },
  { force: "SHOULD NOT", meaning: "Strongly discouraged." },
  { force: "MAY", meaning: "Optional / permitted." },
];

const CLASSES = [
  { letter: "A", desc: "Lightest-touch, most automated tier." },
  { letter: "B", desc: "Increased rigor over Class A." },
  { letter: "C", desc: "Higher assurance obligations." },
  { letter: "D", desc: "Most rigorous tier." },
];

export default function Home() {
  const data = getData();
  const { stats } = data;

  const datasets = [
    {
      href: "/requirements/",
      prefix: "FRR",
      title: "Requirements",
      desc: "The actual rules, grouped into topical families and split into subsets by who they apply to.",
      count: `${stats.rules} rules · ${stats.requirementFamilies} families`,
      color: "from-brand-600 to-brand-800",
    },
    {
      href: "/ksi/",
      prefix: "KSI",
      title: "Key Security Indicators",
      desc: "Outcome-based security objectives a provider must demonstrate, each mapped to NIST 800-53 controls.",
      count: `${stats.indicators} indicators · ${stats.ksiFamilies} families`,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      href: "/controls/",
      prefix: "CTL",
      title: "Control Parameters",
      desc: "FedRAMP-specific parameter values and guidance applied on top of NIST SP 800-53 controls.",
      count: `${stats.controls} controls · ${stats.controlFamilies} families`,
      color: "from-violet-600 to-violet-800",
    },
    {
      href: "/definitions/",
      prefix: "FRD",
      title: "Definitions",
      desc: "Precise meanings for terms used across the rules. When a defined term appears in a rule, the definition is binding.",
      count: `${stats.definitions} definitions`,
      color: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-slate-900 px-6 py-16 text-white sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(96,165,250,0.5) 0, transparent 40%)",
          }}
        />
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-inset ring-white/20">
            Consolidated Rules · v{data.info.version}
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            FedRAMP Consolidated Rules for 2026
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-100">
            A fast, browsable reference for FedRAMP&apos;s 2026 ruleset — every requirement, definition,
            key security indicator, and control parameter, cross-linked and searchable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/requirements/"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 shadow-sm transition hover:bg-brand-50"
            >
              Browse Requirements
            </Link>
            <Link
              href="/search/"
              className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 transition hover:bg-white/20"
            >
              Search everything
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Requirements", value: stats.rules },
          { label: "Definitions", value: stats.definitions },
          { label: "Key Security Indicators", value: stats.indicators },
          { label: "Control Parameters", value: stats.controls },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-black text-brand-700 sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-slate-500">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Dataset cards */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900">Explore the datasets</h2>
        <p className="mt-2 text-slate-600">
          FedRAMP&apos;s rules are split into four datasets, each with a three-letter prefix.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {datasets.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${d.color} text-sm font-black text-white`}
                >
                  {d.prefix}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{d.title}</h3>
                  <p className="text-xs font-medium text-slate-400">{d.count}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{d.desc}</p>
              <span className="mt-4 text-sm font-semibold text-brand-700">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Force keywords + classes */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Requirement &ldquo;force&rdquo; keywords</h2>
          <p className="mt-1 text-sm text-slate-500">
            Each requirement carries a force that tells you how binding it is (RFC 2119 style).
          </p>
          <ul className="mt-5 space-y-3">
            {FORCES.map((f) => (
              <li key={f.force} className="flex items-center gap-3">
                <span className="w-24 shrink-0">
                  <ForceBadge force={f.force} />
                </span>
                <span className="text-sm text-slate-600">{f.meaning}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Provider Certification Classes</h2>
          <p className="mt-1 text-sm text-slate-500">
            Many rules vary by the provider&apos;s Certification Class. Class A is the lightest-touch tier
            and Class D the most rigorous.
          </p>
          <ul className="mt-5 space-y-3">
            {CLASSES.map((c) => (
              <li key={c.letter} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 text-sm font-bold text-white">
                  {c.letter}
                </span>
                <span className="text-sm text-slate-600">{c.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applicability dimensions */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Applicability dimensions</h2>
        <p className="mt-1 text-sm text-slate-500">Subsets and rules are scoped along four axes.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Types", desc: "Authorization program: 20x (FedRAMP 20x) and/or Rev5 (Rev 5 baseline)." },
            { name: "Paths", desc: "Program (FedRAMP-managed) and/or Agency (agency-sponsored)." },
            { name: "Classes", desc: "Which Certification Classes (A–D) the rule reaches." },
            { name: "Affects", desc: "The responsible party (Provider, FedRAMP, Agencies, Assessor, etc.)." },
          ].map((dim) => (
            <div key={dim.name} className="rounded-xl bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-brand-700">{dim.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{dim.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
