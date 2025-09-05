import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // Redirect to default locale when visiting root
  localePrefix: 'always'
});

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