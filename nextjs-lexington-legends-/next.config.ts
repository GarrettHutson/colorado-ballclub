import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
