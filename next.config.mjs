// On GitHub Pages a project site is served from /<repo>/, so the app needs a
// basePath. The deploy workflow sets NEXT_PUBLIC_BASE_PATH from the Pages
// configuration (empty for a user/org root site, "/<repo>" otherwise).
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
