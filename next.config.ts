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
};

export default withNextIntl(nextConfig);
