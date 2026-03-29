import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProduction ? "/slubna-strona" : "",
  output: "export",
  distDir: "dist",
};

export default nextConfig;
