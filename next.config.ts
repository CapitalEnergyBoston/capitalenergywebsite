import type { NextConfig } from "next";

// When deploying to GitHub Pages as a project site, the app is served from
// https://<org>.github.io/<repo>, so assets need a basePath. Set via env in CI.
// On Vercel (or a custom domain) leave BASE_PATH unset and everything serves from root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML export — works on GitHub Pages today, and Vercel builds it fine too.
  output: "export",
  // The Image Optimization API needs a server; disable it for static export.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so paths resolve cleanly on Pages.
  trailingSlash: true,
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
