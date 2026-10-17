import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [{ source: "/studio/projects", destination: "/studio/extras", permanent: true }];
  },
};

export default nextConfig;
