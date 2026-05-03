// This file is intentionally minimal.
// The active config is next.config.js (CommonJS) which Next.js loads
// before next.config.ts. Keeping this stub prevents accidental conflicts.
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
