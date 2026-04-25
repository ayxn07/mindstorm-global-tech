import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 2592000,
    qualities: [50, 75, 90],
  },
};

export default nextConfig;
