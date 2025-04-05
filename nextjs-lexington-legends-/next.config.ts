import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript type checking during builds
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
