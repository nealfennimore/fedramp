import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";
import { ServiceWorker } from "@/components/ServiceWorker";
import { getData } from "@/lib/data";

const data = getData();

export const metadata: Metadata = {
  title: {
    default: "FedRAMP Consolidated Rules for 2026",
    template: "%s · FedRAMP 2026 Rules",
  },
  description:
    "A browsable reference for the FedRAMP Consolidated Rules for 2026 — definitions, requirements, key security indicators, and control parameters.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ServiceWorker />
        <Header version={data.info.version} />
        <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-slate-700">FedRAMP Consolidated Rules for 2026</p>
                <p className="mt-1">
                  Version {data.info.version} · Last updated {data.info.last_updated}
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1">
                <Link href="/requirements/" className="hover:text-brand-700">
                  Requirements
                </Link>
                <Link href="/ksi/" className="hover:text-brand-700">
                  KSIs
                </Link>
                <Link href="/controls/" className="hover:text-brand-700">
                  Controls
                </Link>
                <Link href="/definitions/" className="hover:text-brand-700">
                  Definitions
                </Link>
                <a
                  href="https://www.fedramp.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-700"
                >
                  fedramp.gov ↗
                </a>
              </nav>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Unofficial reference rendering of FedRAMP&apos;s machine-readable rules datafile. Where wording
              carries compliance weight, rule statements and definitions are reproduced faithfully from the
              source data. Not affiliated with or endorsed by FedRAMP or the GSA.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
