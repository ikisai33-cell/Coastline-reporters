import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: '/niger-delta', destination: '/category/niger-delta', permanent: true },
      { source: '/nigeria', destination: '/category/nigeria', permanent: true },
      { source: '/politics', destination: '/category/politics', permanent: true },
      { source: '/business', destination: '/category/business', permanent: true },
      { source: '/environment', destination: '/category/environment', permanent: true },
      { source: '/society', destination: '/category/society', permanent: true },
      { source: '/technology', destination: '/category/technology', permanent: true },
      { source: '/entertainment', destination: '/category/entertainment', permanent: true },
      { source: '/sports', destination: '/category/sports', permanent: true },
      { source: '/world', destination: '/category/world', permanent: true },
    ];
  },
};

export default nextConfig;
