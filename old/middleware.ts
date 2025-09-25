import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';
import { NextRequest, NextResponse } from 'next/server';
import { generateNonce, createCSPHeaders } from './lib/csp-utils';

// Create the internationalization middleware
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Redirect to default locale when visiting root
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  try {
    // Add debugging for locale issues
    if (process.env.NODE_ENV === 'development') {
      console.log('Middleware processing:', {
        pathname: url.pathname,
        locale: request.headers.get('accept-language')?.split(',')[0] || 'unknown'
      });
    }

    // Get the response from the internationalization middleware
    const response = intlMiddleware(request);
    
    // Determine if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Check if CSP should be enabled (can be disabled via env var)
    const cspEnabled = process.env.CSP_ENABLED !== 'false';
    
    // Determine if we should use report-only mode
    const isReportOnly = process.env.CSP_REPORT_ONLY === 'true';
    
    if (cspEnabled) {
      try {
        // Generate a nonce for this request
        const nonce = generateNonce();
        
        // Create CSP headers
        const cspHeaders = createCSPHeaders(isDevelopment, nonce, isReportOnly);
        
        // Apply CSP headers to the response
        Object.entries(cspHeaders).forEach(([name, value]) => {
          response.headers.set(name, value);
        });
        
        // Additional security headers
        response.headers.set('X-Frame-Options', 'DENY');
        response.headers.set('X-Content-Type-Options', 'nosniff');
        response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
        response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
      } catch (cspError) {
        // Don't let CSP errors break i18n functionality
        console.warn('CSP header generation failed:', cspError);
      }
    }
    
    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    
    // Return a basic response to prevent complete failure
    return NextResponse.next();
  }
}

export const config = {
  // Match only internationalized pathnames with improved exclusions
  matcher: [
    // Match root path and all paths except excluded patterns
    // This prevents conflicts by consolidating patterns and improving exclusions
    '/((?!api|_next/static|_next/image|_vercel|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)',
    // Enable a redirect to a matching locale at the root
    '/'
  ]
};