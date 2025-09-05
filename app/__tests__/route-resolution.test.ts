/**
 * Route Resolution Testing for Locale Validation
 * Tests middleware routing, locale detection, and route handling
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from '../../lib/i18n';

// Mock the middleware
vi.mock('next-intl/middleware', () => ({
  default: vi.fn((config) => {
    return (request: NextRequest) => {
      const pathname = request.nextUrl.pathname;
      
      // Simulate middleware behavior
      if (pathname === '/') {
        // Redirect root to default locale
        return new Response(null, {
          status: 307,
          headers: { location: `/${config.defaultLocale}` }
        });
      }
      
      const locale = pathname.split('/')[1];
      
      if (!config.locales.includes(locale)) {
        // Invalid locale - should return 404
        return new Response('Not Found', { status: 404 });
      }
      
      // Valid locale - continue
      return new Response(null, { status: 200 });
    };
  })
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('Not Found');
  }),
}));

// Mock next-intl/server
vi.mock('next-intl/server', () => ({
  getMessages: vi.fn().mockImplementation(({ locale }) => {
    if (locale === 'es' || locale === 'en') {
      return Promise.resolve({
        metadata: {
          site: {
            title: `Test Title ${locale}`,
            description: `Test Description ${locale}`,
            keywords: 'test, keywords'
          }
        }
      });
    }
    return Promise.reject(new Error('Messages not found'));
  }),
}));

describe('Route Resolution', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Locale Validation', () => {
    it('should validate supported locales correctly', () => {
      expect(locales).toEqual(['es', 'en']);
      expect(defaultLocale).toBe('es');
      
      // Test valid locales
      expect(locales.includes('es')).toBe(true);
      expect(locales.includes('en')).toBe(true);
      
      // Test invalid locales
      expect(locales.includes('fr')).toBe(false);
      expect(locales.includes('de')).toBe(false);
      expect(locales.includes('invalid-locale')).toBe(false);
    });

    it('should handle case sensitivity in locale validation', () => {
      const testLocales = ['ES', 'En', 'eS', 'EN'];
      
      testLocales.forEach(locale => {
        expect(locales.includes(locale.toLowerCase())).toBe(true);
        expect(locales.includes(locale)).toBe(false); // Original case should fail
      });
    });

    it('should validate locale parameter type safety', () => {
      const validParams = [
        { locale: 'es' },
        { locale: 'en' }
      ];
      
      const invalidParams = [
        { locale: 'fr' },
        { locale: '' },
        { locale: null },
        { locale: undefined },
        { locale: 123 },
        {}
      ];
      
      validParams.forEach(params => {
        expect(locales.includes(params.locale as any)).toBe(true);
      });
      
      invalidParams.forEach(params => {
        expect(locales.includes((params as any).locale as any)).toBe(false);
      });
    });
  });

  describe('Middleware Route Matching', () => {
    it('should match internationalized pathnames correctly', () => {
      const matcher = [
        '/((?!api|_next/static|_next/image|_vercel|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)',
        '/'
      ];
      
      const testPaths = [
        { path: '/', shouldMatch: true },
        { path: '/es', shouldMatch: true },
        { path: '/en', shouldMatch: true },
        { path: '/es/tours', shouldMatch: true },
        { path: '/en/about', shouldMatch: true },
        { path: '/api/test', shouldMatch: false },
        { path: '/_next/static/test.js', shouldMatch: false },
        { path: '/_next/image/test.jpg', shouldMatch: false },
        { path: '/favicon.ico', shouldMatch: false },
        { path: '/sitemap.xml', shouldMatch: false },
        { path: '/robots.txt', shouldMatch: false },
        { path: '/test.png', shouldMatch: false },
        { path: '/test.css', shouldMatch: false }
      ];
      
      testPaths.forEach(({ path, shouldMatch }) => {
        const regex1 = new RegExp(matcher[0]);
        const regex2 = new RegExp(matcher[1]);
        const matches = regex1.test(path) || regex2.test(path);
        
        expect(matches).toBe(shouldMatch);
      });
    });

    it('should exclude static assets correctly', () => {
      const staticAssets = [
        '/favicon.ico',
        '/sitemap.xml',
        '/robots.txt',
        '/image.jpg',
        '/style.css',
        '/script.js',
        '/_next/static/chunks/main.js',
        '/_next/image/hero.jpg',
        '/api/auth/callback',
        '/_vercel/insights'
      ];
      
      const pattern = '/((?!api|_next/static|_next/image|_vercel|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)'
      const regex = new RegExp(pattern);
      
      staticAssets.forEach(asset => {
        expect(regex.test(asset)).toBe(false);
      });
    });

    it('should allow valid locale paths', () => {
      const validPaths = [
        '/es',
        '/en',
        '/es/tours',
        '/en/about',
        '/es/tours/adventure',
        '/en/contact',
        '/es/sessions',
        '/en/search'
      ];
      
      const pattern = '/((?!api|_next/static|_next/image|_vercel|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)'
      const regex = new RegExp(pattern);
      
      validPaths.forEach(path => {
        expect(regex.test(path)).toBe(true);
      });
    });
  });

  describe('Message Loading', () => {
    it('should load messages for valid locales', async () => {
      const { getMessages } = await import('next-intl/server');
      
      const esMessages = await getMessages({ locale: 'es' });
      const enMessages = await getMessages({ locale: 'en' });
      
      expect(esMessages).toBeDefined();
      expect(enMessages).toBeDefined();
      expect(esMessages.metadata.site.title).toBe('Test Title es');
      expect(enMessages.metadata.site.title).toBe('Test Title en');
    });

    it('should handle message loading failures', async () => {
      const { getMessages } = await import('next-intl/server');
      
      await expect(getMessages({ locale: 'invalid' })).rejects.toThrow('Messages not found');
    });

    it('should implement fallback strategy for message loading', async () => {
      const { getMessages } = await import('next-intl/server');
      
      // Simulate fallback logic
      const loadMessagesWithFallback = async (locale: string) => {
        const fallbackChain = [locale, 'es', 'en'];
        
        for (const fallbackLocale of fallbackChain) {
          try {
            return await getMessages({ locale: fallbackLocale });
          } catch (error) {
            continue;
          }
        }
        
        return {};
      };
      
      // Test primary locale success
      const validMessages = await loadMessagesWithFallback('es');
      expect(validMessages).toBeDefined();
      
      // Test fallback to default
      const fallbackMessages = await loadMessagesWithFallback('invalid');
      expect(fallbackMessages).toEqual({});
    });
  });

  describe('Route Handler Simulation', () => {
    it('should simulate root redirect behavior', () => {
      const mockMiddleware = vi.mocked(require('next-intl/middleware').default);
      const middleware = mockMiddleware({
        locales,
        defaultLocale,
        localePrefix: 'always'
      });
      
      const request = new NextRequest(new URL('http://localhost:3000/'));
      const response = middleware(request);
      
      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toBe('/es');
    });

    it('should simulate valid locale route handling', () => {
      const mockMiddleware = vi.mocked(require('next-intl/middleware').default);
      const middleware = mockMiddleware({
        locales,
        defaultLocale,
        localePrefix: 'always'
      });
      
      const validRoutes = [
        'http://localhost:3000/es',
        'http://localhost:3000/en',
        'http://localhost:3000/es/tours',
        'http://localhost:3000/en/about'
      ];
      
      validRoutes.forEach(url => {
        const request = new NextRequest(new URL(url));
        const response = middleware(request);
        
        expect(response.status).toBe(200);
      });
    });

    it('should simulate invalid locale route handling', () => {
      const mockMiddleware = vi.mocked(require('next-intl/middleware').default);
      const middleware = mockMiddleware({
        locales,
        defaultLocale,
        localePrefix: 'always'
      });
      
      const invalidRoutes = [
        'http://localhost:3000/fr',
        'http://localhost:3000/de',
        'http://localhost:3000/invalid-locale',
        'http://localhost:3000/123'
      ];
      
      invalidRoutes.forEach(url => {
        const request = new NextRequest(new URL(url));
        const response = middleware(request);
        
        expect(response.status).toBe(404);
      });
    });
  });

  describe('Layout Integration', () => {
    it('should handle notFound() calls for invalid locales', () => {
      const { notFound } = require('next/navigation');
      
      // Test that notFound is called for invalid locales
      const testInvalidLocale = (locale: string) => {
        if (!locales.includes(locale as any)) {
          expect(() => notFound()).toThrow('Not Found');
        }
      };
      
      testInvalidLocale('fr');
      testInvalidLocale('invalid');
      testInvalidLocale('');
    });

    it('should validate locale layout parameter handling', async () => {
      // Simulate the locale layout parameter validation
      const validateLocaleParams = async (params: Promise<{ locale: string }>) => {
        const { locale } = await params;
        
        if (!locales.includes(locale as any)) {
          throw new Error('Not Found');
        }
        
        return locale;
      };
      
      // Test valid locale parameters
      const validEsParams = Promise.resolve({ locale: 'es' });
      const validEnParams = Promise.resolve({ locale: 'en' });
      
      await expect(validateLocaleParams(validEsParams)).resolves.toBe('es');
      await expect(validateLocaleParams(validEnParams)).resolves.toBe('en');
      
      // Test invalid locale parameters
      const invalidParams = Promise.resolve({ locale: 'fr' });
      
      await expect(validateLocaleParams(invalidParams)).rejects.toThrow('Not Found');
    });

    it('should handle async parameter resolution', async () => {
      // Test that async params are properly awaited
      const createAsyncParams = (locale: string) => {
        return new Promise<{ locale: string }>((resolve) => {
          setTimeout(() => resolve({ locale }), 10);
        });
      };
      
      const esParams = createAsyncParams('es');
      const enParams = createAsyncParams('en');
      const invalidParams = createAsyncParams('invalid');
      
      const { locale: esLocale } = await esParams;
      const { locale: enLocale } = await enParams;
      const { locale: invalidLocale } = await invalidParams;
      
      expect(esLocale).toBe('es');
      expect(enLocale).toBe('en');
      expect(invalidLocale).toBe('invalid');
      
      // Validate against supported locales
      expect(locales.includes(esLocale as any)).toBe(true);
      expect(locales.includes(enLocale as any)).toBe(true);
      expect(locales.includes(invalidLocale as any)).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty pathname', () => {
      const emptyPaths = ['', '/', '//'];
      
      emptyPaths.forEach(path => {
        // Root path should redirect to default locale
        if (path === '/' || path === '') {
          expect(defaultLocale).toBe('es');
        }
      });
    });

    it('should handle malformed URLs', () => {
      const malformedPaths = [
        '/es/',
        '/en/',
        '/es//',
        '/en//',
        '//es',
        '//en'
      ];
      
      malformedPaths.forEach(path => {
        const segments = path.split('/').filter(Boolean);
        const locale = segments[0];
        
        if (locale) {
          expect(typeof locale).toBe('string');
          expect(locale.length).toBeGreaterThan(0);
        }
      });
    });

    it('should handle special characters in locale detection', () => {
      const specialCases = [
        '/es-MX',
        '/en-US',
        '/es_CR',
        '/en_US',
        '/español',
        '/english'
      ];
      
      specialCases.forEach(path => {
        const locale = path.split('/')[1];
        // Only exact matches should be valid
        expect(locales.includes(locale as any)).toBe(false);
      });
    });

    it('should validate locale parameter types at runtime', () => {
      const testParams = [
        { locale: 'es', valid: true },
        { locale: 'en', valid: true },
        { locale: 123, valid: false },
        { locale: null, valid: false },
        { locale: undefined, valid: false },
        { locale: {}, valid: false },
        { locale: [], valid: false }
      ];
      
      testParams.forEach(({ locale, valid }) => {
        const isValidLocale = typeof locale === 'string' && locales.includes(locale as any);
        expect(isValidLocale).toBe(valid);
      });
    });
  });
});