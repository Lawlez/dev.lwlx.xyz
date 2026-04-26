import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Default: Node.js server mode (next start)
  // Uncomment the line below for static file export (generates /out directory):
  // output: 'export',

  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    // When using output: 'export', uncomment the next line:
    // unoptimized: true,
  },
}

export default nextConfig
