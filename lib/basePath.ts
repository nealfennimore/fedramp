// The site's base path, mirroring next.config.mjs. Next's <Link>/router and
// asset URLs get the basePath prepended automatically, but raw fetch() calls
// and the service worker registration do not — use this for those.
const raw = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const basePath = raw === "/" ? "" : raw.replace(/\/$/, "");

/** Prefix an absolute, root-relative path with the basePath. */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
