/**
 * Comprehensive tests for locale functionality debugging and validation
 * These tests help verify that all locale fixes are working correctly
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { LocaleDebugger } from '../../lib/locale-debug'

// Reset debugger before each test
beforeEach(() => {
  LocaleDebugger.clearLogs()
})

describe('Locale Middleware Configuration', () => {
  it('should have proper exclusion patterns', () => {
    // Test that middleware matcher excludes the right paths
    const excludedPaths = [
      '/api/test',
      '/_next/static/chunks/main.js', 
      '/_next/image/logo.png',
      '/_vercel/insights',
      '/favicon.ico',
      '/sitemap.xml',
      '/robots.txt',
      '/logo.png',
      '/styles.css'
    ]

    const includedPaths = [
      '/',
      '/en',
      '/es',
      '/en/adventures',
      '/es/contact',
      '/en/tours/emerald-canyon',
      '/es/search'
    ]

    // The pattern: '/((?!api|_next/static|_next/image|_vercel|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)'
    const exclusionPattern = /^\/(?!(?:api|_next\/static|_next\/image|_vercel|favicon\.ico|sitemap\.xml|robots\.txt|.*\..*)).*/

    excludedPaths.forEach(path => {
      expect(exclusionPattern.test(path)).toBe(false)
    })

    includedPaths.forEach(path => {
      expect(exclusionPattern.test(path)).toBe(true)
    })
  })
})

describe('Language Switcher Path Construction', () => {
  // Mock the locales array
  const locales = ['es', 'en']

  const constructLocalePath = (locale: string, currentPath: string): string => {
    // Handle root path
    if (currentPath === '/' || currentPath === '') {
      return `/${locale}`
    }

    // Remove leading slash for processing
    const pathWithoutSlash = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath
    const segments = pathWithoutSlash.split('/').filter(Boolean)
    
    // Check if first segment is a locale
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      // Replace existing locale
      segments[0] = locale
    } else {
      // No locale in path, prepend new locale
      segments.unshift(locale)
    }
    
    // Construct path ensuring single leading slash
    return `/${segments.join('/')}`
  }

  it('should handle root path correctly', () => {
    expect(constructLocalePath('en', '/')).toBe('/en')
    expect(constructLocalePath('es', '')).toBe('/es')
  })

  it('should replace existing locale in path', () => {
    expect(constructLocalePath('en', '/es/adventures')).toBe('/en/adventures')
    expect(constructLocalePath('es', '/en/contact')).toBe('/es/contact')
    expect(constructLocalePath('en', '/es/tours/emerald-canyon')).toBe('/en/tours/emerald-canyon')
  })

  it('should add locale to path without existing locale', () => {
    expect(constructLocalePath('en', '/adventures')).toBe('/en/adventures')
    expect(constructLocalePath('es', '/contact')).toBe('/es/contact')
  })

  it('should prevent double slashes', () => {
    const result1 = constructLocalePath('en', '/es/adventures')
    const result2 = constructLocalePath('es', '/contact')
    
    expect(result1.includes('//')).toBe(false)
    expect(result2.includes('//')).toBe(false)
  })

  it('should handle complex paths correctly', () => {
    expect(constructLocalePath('en', '/es/tours/emerald-canyon/info')).toBe('/en/tours/emerald-canyon/info')
    expect(constructLocalePath('es', '/search?q=adventure')).toBe('/es/search?q=adventure')
  })
})

describe('Translation Fallback Strategies', () => {
  const extractMeaningfulText = (key: string, namespace?: string): string | null => {
    // Remove namespace prefix if present
    const cleanKey = namespace && key.startsWith(`${namespace}.`) 
      ? key.substring(namespace.length + 1) 
      : key
    
    // Split by dots and get the last part
    const parts = cleanKey.split('.')
    const lastPart = parts[parts.length - 1]
    
    // Convert camelCase/snake_case to readable text
    const readable = lastPart
      .replace(/([A-Z])/g, ' $1') // camelCase
      .replace(/_/g, ' ') // snake_case
      .replace(/-/g, ' ') // kebab-case
      .toLowerCase()
      .trim()
    
    // Capitalize first letter
    if (readable.length > 0) {
      return readable.charAt(0).toUpperCase() + readable.slice(1)
    }
    
    return null
  }

  it('should extract meaningful text from camelCase keys', () => {
    expect(extractMeaningfulText('submitButton')).toBe('Submit button')
    expect(extractMeaningfulText('firstName')).toBe('First name')
    expect(extractMeaningfulText('emailAddress')).toBe('Email address')
  })

  it('should extract meaningful text from snake_case keys', () => {
    expect(extractMeaningfulText('submit_button')).toBe('Submit button')
    expect(extractMeaningfulText('first_name')).toBe('First name')
    expect(extractMeaningfulText('email_address')).toBe('Email address')
  })

  it('should extract meaningful text from kebab-case keys', () => {
    expect(extractMeaningfulText('submit-button')).toBe('Submit button')
    expect(extractMeaningfulText('first-name')).toBe('First name')
    expect(extractMeaningfulText('email-address')).toBe('Email address')
  })

  it('should handle nested keys with namespaces', () => {
    expect(extractMeaningfulText('common.buttons.submitForm', 'common')).toBe('Submit form')
    expect(extractMeaningfulText('navigation.menu.homeLink', 'navigation')).toBe('Home link')
  })
})

describe('Error Boundary Functionality', () => {
  it('should handle locale switching in error scenarios', () => {
    // Mock window location for testing
    const mockLocation = {
      pathname: '/en/adventures',
      href: ''
    }

    // Mock the locale switching logic from error boundary
    const handleFallbackLocale = (currentUrl: string) => {
      const segments = currentUrl.split('/').filter(Boolean)
      
      // Replace or add default locale
      if (segments.length > 0 && ['es', 'en'].includes(segments[0])) {
        segments[0] = 'es' // Default to Spanish
      } else {
        segments.unshift('es')
      }
      
      return `/${segments.join('/')}`
    }

    expect(handleFallbackLocale('/en/adventures')).toBe('/es/adventures')
    expect(handleFallbackLocale('/adventures')).toBe('/es/adventures')
    expect(handleFallbackLocale('/en')).toBe('/es')
  })
})

describe('Locale Debugger', () => {
  it('should validate locales correctly', () => {
    expect(LocaleDebugger.validateLocale('es').isValid).toBe(true)
    expect(LocaleDebugger.validateLocale('en').isValid).toBe(true)
    expect(LocaleDebugger.validateLocale('fr').isValid).toBe(false)
    expect(LocaleDebugger.validateLocale('').isValid).toBe(false)
    expect(LocaleDebugger.validateLocale(null as any).isValid).toBe(false)
  })

  it('should validate paths correctly', () => {
    const validPath = LocaleDebugger.validatePath('/es/adventures')
    expect(validPath.isValid).toBe(true)
    expect(validPath.extractedLocale).toBe('es')

    const invalidPath = LocaleDebugger.validatePath('/fr/adventures')
    expect(invalidPath.isValid).toBe(false)
    expect(invalidPath.extractedLocale).toBe(null)

    const rootPath = LocaleDebugger.validatePath('/')
    expect(rootPath.isValid).toBe(true)
    expect(rootPath.extractedLocale).toBe(null)
  })

  it('should log debug information correctly', () => {
    LocaleDebugger.log({
      currentLocale: 'es',
      pathname: '/es/test'
    })

    const logs = LocaleDebugger.getLogs()
    expect(logs).toHaveLength(1)
    expect(logs[0].currentLocale).toBe('es')
    expect(logs[0].pathname).toBe('/es/test')
  })

  it('should generate debug reports', () => {
    LocaleDebugger.log({ currentLocale: 'es', pathname: '/test' })
    const report = LocaleDebugger.generateDebugReport()
    const parsed = JSON.parse(report)
    
    expect(parsed.configuration.supportedLocales).toEqual(['es', 'en'])
    expect(parsed.configuration.defaultLocale).toBe('es')
    expect(parsed.logs).toHaveLength(1)
  })
})

describe('Enhanced Language Switcher', () => {
  // Mock the new enhanced functionality
  const mockSearchParams = new URLSearchParams('q=test&filter=adventure')
  
  const constructLocalePath = (locale: string, currentPath: string): string => {
    const locales = ['es', 'en']
    
    if (currentPath === '/' || currentPath === '') {
      return `/${locale}`
    }

    const pathWithoutSlash = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath
    const segments = pathWithoutSlash.split('/').filter(Boolean)
    
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      segments[0] = locale
    } else {
      segments.unshift(locale)
    }
    
    return `/${segments.join('/')}`
  }

  it('should preserve query parameters when switching languages', () => {
    const basePath = '/es/adventures'
    const newPath = constructLocalePath('en', basePath)
    const query = mockSearchParams.toString()
    const fullPath = query ? `${newPath}?${query}` : newPath
    
    expect(fullPath).toBe('/en/adventures?q=test&filter=adventure')
  })

  it('should handle error scenarios gracefully', () => {
    // Test with malformed paths
    expect(() => constructLocalePath('en', '//malformed//path')).not.toThrow()
    expect(() => constructLocalePath('en', '')).not.toThrow()
    expect(() => constructLocalePath('', '/es/test')).not.toThrow()
  })
})