import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/neckrelax",
        destination: "/landing/neckrelax-pro",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
