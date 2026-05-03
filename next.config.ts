import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ESLint is run separately in CI; skip during `next build`
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type errors are checked separately via `npm run type-check`
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
