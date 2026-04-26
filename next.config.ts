import type { NextConfig } from 'next'

const isStaticExport = process.env.STATIC_EXPORT === 'true'

const nextConfig: NextConfig = {
  // When STATIC_EXPORT=true, generate fully static assets to /out
  ...(isStaticExport && { output: 'export' }),

  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    // next/image optimization requires a server; disable for static export
    ...(isStaticExport && { unoptimized: true }),
  },
}

export default nextConfig
