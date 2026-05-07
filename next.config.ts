import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: process.env.VERCEL_ENV === 'preview',
  images: {
    // Все пути из /public для next/image (обложки /blog/**, логотипы, about.png, …)
    localPatterns: [{ pathname: '/**' }],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
