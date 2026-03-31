import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/strona-slubna",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
