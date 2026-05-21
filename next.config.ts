import type { NextConfig } from "next";

// Static export — generates a fully prerendered ./out directory at build
// time. Required for GitHub Pages (and works on any static host: Cloudflare
// Pages, Netlify, S3+CloudFront, etc.).
//
// basePath/assetPrefix:
//   - If the site is served at the ROOT of a domain (e.g. baza.ao or
//     leonelferreira0373.github.io with a project named exactly the same
//     as the user), leave both unset.
//   - If served at a subpath (e.g. github.io/<repo-name>/), set
//     NEXT_PUBLIC_BASE_PATH at build time. The GitHub Pages workflow does
//     this for us automatically based on the repo name.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
