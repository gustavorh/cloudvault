import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use static export for minimal server requirements
  output: "standalone",

  // Reduce bundle size
  compress: true,

  // Optimize images
  images: {
    unoptimized: true, // Disable image optimization to save memory
  },

  // Reduce memory usage during build
  experimental: {
    workerThreads: false,
  },
};

export default nextConfig;
