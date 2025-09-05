/**
 * Image optimization utilities for llvvaa project
 * Provides helper functions for Next.js Image component optimization
 */

// Responsive breakpoints configuration
export const IMAGE_BREAKPOINTS = {
  mobile: 360,
  tablet: 768,
  desktop: 1024,
  large: 1280,
  xlarge: 1920
} as const;

// Default image quality settings
export const IMAGE_QUALITY = {
  high: 90,      // For hero images and critical content
  medium: 80,    // For regular content images
  low: 65,       // For background images and non-critical content
  thumbnail: 75  // For small profile images and thumbnails
} as const;

/**
 * Generate responsive sizes string for Next.js Image component
 * @param breakpoints - Custom breakpoints or default ones
 * @returns Optimized sizes string for responsive images
 */
export function generateResponsiveSizes(
  breakpoints: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    large?: string;
  } = {}
): string {
  const {
    mobile = '100vw',
    tablet = '50vw', 
    desktop = '33vw',
    large = '25vw'
  } = breakpoints;

  return [
    `(max-width: ${IMAGE_BREAKPOINTS.mobile}px) ${mobile}`,
    `(max-width: ${IMAGE_BREAKPOINTS.tablet}px) ${tablet}`,
    `(max-width: ${IMAGE_BREAKPOINTS.desktop}px) ${desktop}`,
    `(max-width: ${IMAGE_BREAKPOINTS.large}px) ${large}`,
    large
  ].join(', ');
}

/**
 * Generate optimized image path based on format and size
 * @param originalPath - Original image path
 * @param format - Target format (webp, avif, jpg, png)
 * @param size - Target size for responsive variants
 * @returns Optimized image path
 */
export function getOptimizedImagePath(
  originalPath: string,
  format?: 'webp' | 'avif' | 'jpg' | 'png',
  size?: number
): string {
  // Remove leading slash and extension
  const pathWithoutExt = originalPath.replace(/^\//, '').replace(/\.[^/.]+$/, '');
  const originalExt = originalPath.split('.').pop()?.toLowerCase();
  
  if (format && format !== originalExt) {
    // Return path for modern format
    return `/optimized/${format}/${pathWithoutExt}.${format}`;
  }
  
  if (size) {
    // Return path for responsive size
    return `/optimized/${size}/${pathWithoutExt}.${originalExt}`;
  }
  
  // Return original path if no optimization needed
  return originalPath;
}

/**
 * Generate blur placeholder for Next.js Image component
 * @param width - Image width
 * @param height - Image height  
 * @param color - Base color for gradient (optional)
 * @returns Base64 encoded blur placeholder
 */
export function generateBlurPlaceholder(
  width: number = 400,
  height: number = 300,
  color: string = '#e5e7eb'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.8"/>
          <stop offset="50%" style="stop-color:#f3f4f6;stop-opacity:0.6"/>
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <circle cx="${width * 0.3}" cy="${height * 0.3}" r="${Math.min(width, height) * 0.1}" fill="rgba(255,255,255,0.3)"/>
      <circle cx="${width * 0.7}" cy="${height * 0.7}" r="${Math.min(width, height) * 0.08}" fill="rgba(255,255,255,0.2)"/>
    </svg>
  `.replace(/\s+/g, ' ').trim();
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

/**
 * Get image dimensions from static imports or calculate aspect ratio
 * @param src - Image source (static import or path)
 * @param fallbackWidth - Fallback width if dimensions unknown
 * @param fallbackHeight - Fallback height if dimensions unknown
 * @returns Image dimensions object
 */
export function getImageDimensions(
  src: any,
  fallbackWidth: number = 800,
  fallbackHeight: number = 600
): { width: number; height: number } {
  // If it's a static import with dimensions
  if (typeof src === 'object' && src.width && src.height) {
    return { width: src.width, height: src.height };
  }
  
  // Return fallback dimensions
  return { width: fallbackWidth, height: fallbackHeight };
}

/**
 * Predefined responsive configurations for common use cases
 */
export const RESPONSIVE_CONFIGS = {
  // Hero images that take full viewport width
  hero: {
    sizes: generateResponsiveSizes({ 
      mobile: '100vw', 
      tablet: '100vw', 
      desktop: '100vw', 
      large: '100vw' 
    }),
    priority: true,
    quality: IMAGE_QUALITY.high
  },
  
  // Adventure/tour card images in grid layouts
  card: {
    sizes: generateResponsiveSizes({
      mobile: '100vw',
      tablet: '50vw', 
      desktop: '33vw',
      large: '25vw'
    }),
    quality: IMAGE_QUALITY.medium
  },
  
  // Avatar/testimonial images
  avatar: {
    sizes: '(max-width: 768px) 64px, 96px',
    quality: IMAGE_QUALITY.thumbnail
  },
  
  // Logo images
  logo: {
    sizes: '(max-width: 768px) 32px, 48px',
    priority: true,
    quality: IMAGE_QUALITY.high
  },
  
  // Background images
  background: {
    sizes: generateResponsiveSizes({ 
      mobile: '100vw', 
      tablet: '100vw', 
      desktop: '100vw', 
      large: '100vw' 
    }),
    quality: IMAGE_QUALITY.low
  }
} as const;

/**
 * Image component props generator for common patterns
 * @param src - Image source path
 * @param alt - Alt text for accessibility
 * @param type - Predefined image type configuration
 * @param overrides - Custom overrides for the configuration
 * @returns Optimized props for Next.js Image component
 */
export function getImageProps(
  src: string,
  alt: string,
  type: keyof typeof RESPONSIVE_CONFIGS = 'card',
  overrides: Partial<{
    width: number;
    height: number;
    sizes: string;
    priority: boolean;
    quality: number;
    placeholder: 'blur' | 'empty';
    blurDataURL: string;
  }> = {}
) {
  const config = RESPONSIVE_CONFIGS[type];
  const dimensions = getImageDimensions(src);
  
  const baseProps = {
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    sizes: config.sizes,
    quality: config.quality,
    ...overrides
  };

  // Add blur placeholder if requested
  if (overrides.placeholder === 'blur' && !overrides.blurDataURL) {
    baseProps.blurDataURL = generateBlurPlaceholder(dimensions.width, dimensions.height);
  }

  // Add priority if specified in config or overrides
  if (('priority' in config && config.priority) || overrides.priority) {
    (baseProps as any).priority = true;
  }

  return baseProps;
}

/**
 * Utility to check if image format is supported by browser
 * This is mainly for SSR/hydration compatibility
 */
export function getPreferredFormat(originalPath: string): string {
  // On server side, return original path
  if (typeof window === 'undefined') {
    return originalPath;
  }
  
  // Check for modern format support
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  // Check WebP support
  const supportsWebP = canvas.toDataURL('image/webp').indexOf('image/webp') === 5;
  
  if (supportsWebP) {
    return getOptimizedImagePath(originalPath, 'webp');
  }
  
  return originalPath;
}

/**
 * Utility for generating srcSet for manual responsive handling
 * @param basePath - Base image path without extension
 * @param sizes - Array of sizes to generate
 * @param format - Image format
 * @returns srcSet string for responsive images
 */
export function generateSrcSet(
  basePath: string,
  sizes: number[] = [360, 768, 1024, 1280],
  format: string = 'jpg'
): string {
  return sizes
    .map(size => `${getOptimizedImagePath(basePath + '.' + format, undefined, size)} ${size}w`)
    .join(', ');
}

/**
 * Constants for common image paths (to be used with static imports)
 */
export const IMAGE_PATHS = {
  // Logo
  logo: '/logo2.png',
  
  // Team/About images  
  teamPhoto: '/equipo-guia-la-vieja.png',
  
  // Adventure/Tour images
  adventures: {
    canonEsmeralda: '/IMG_4438.JPG',
    birdWatching: '/bird-watching-la-vieja.png',
    cafeSanVicente: '/cafe-san-vicente-la-vieja.png',
    caminataLluvia: '/caminata-lluvia-la-vieja.png',
    minasAzufre: '/minas-azufre-la-vieja.png',
    nacientesAgua: '/nacientes-agua-la-vieja.png',
    parqueAgua: '/parque-agua-juan-castro-blanco.png',
    pozasSecretas: '/pozas-secretas-sucre.png',
    tourNocturno: '/tour-nocturno-la-vieja.png',
    volcanesDormidos: '/volcanes-dormidos-la-vieja.png'
  },
  
  // Client testimonial images
  clients: {
    anaRodriguez: '/clientes/ana-rodriguez.png',
    carlosGomez: '/clientes/carlos-gomez.png', 
    mariaLopez: '/clientes/maria-lopez.png'
  }
} as const;