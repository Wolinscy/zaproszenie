import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/zaproszenie",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
