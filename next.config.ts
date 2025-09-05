import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Device sizes for responsive images
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    
    // Image sizes for responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Allow SVG images (used for icons)
    dangerouslyAllowSVG: true,
    
    // Add remote patterns if external images are needed
    remotePatterns: [
      // Add external domains here if needed
    ],
  },
  
  // Optimize package imports for better tree shaking
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Security headers configuration
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  
  // Environment variables configuration
  env: {
    CSP_ENABLED: process.env.CSP_ENABLED || 'true',
    CSP_REPORT_ONLY: process.env.CSP_REPORT_ONLY || 'false',
  },
};

export default withNextIntl(nextConfig);
