/**
 * Tests for I18nCache functionality
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import I18nCache from '../lib/i18n-cache'

describe('I18nCache', () => {
  let cache: I18nCache
  let mockLocalStorage: any

  beforeEach(() => {
    // Mock localStorage
    mockLocalStorage = {
      data: {} as Record<string, string>,
      getItem: vi.fn((key: string) => mockLocalStorage.data[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        mockLocalStorage.data[key] = value
      }),
      removeItem: vi.fn((key: string) => {
        delete mockLocalStorage.data[key]
      }),
      clear: vi.fn(() => {
        mockLocalStorage.data = {}
      })
    }

    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true
    })

    cache = I18nCache.getInstance()
  })

  afterEach(() => {
    mockLocalStorage.clear()
    vi.clearAllMocks()
  })

  describe('Translation Caching', () => {
    it('should cache translations successfully', () => {
      const translations = { hello: 'Hola', goodbye: 'Adiós' }
      
      cache.cacheTranslations('es', translations, '1.0.0')
      
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'llvvaa_i18n_translations_es',
        expect.stringContaining('"data":{"hello":"Hola","goodbye":"Adiós"}')
      )
    })

    it('should retrieve cached translations', () => {
      const translations = { hello: 'Hola', goodbye: 'Adiós' }
      cache.cacheTranslations('es', translations, '1.0.0')
      
      const retrieved = cache.getCachedTranslations('es')
      
      expect(retrieved).toEqual(translations)
    })

    it('should return null for non-existent cache', () => {
      const retrieved = cache.getCachedTranslations('fr')
      expect(retrieved).toBeNull()
    })

    it('should handle expired cache', () => {
      // Mock an old timestamp (25 hours ago)
      const oldTimestamp = Date.now() - (25 * 60 * 60 * 1000)
      const expiredCache = {
        data: { hello: 'Hola' },
        timestamp: oldTimestamp,
        version: '1.0.0'
      }
      
      mockLocalStorage.data['llvvaa_i18n_translations_es'] = JSON.stringify(expiredCache)
      
      const retrieved = cache.getCachedTranslations('es')
      expect(retrieved).toBeNull()
    })
  })

  describe('Error Tracking', () => {
    it('should track error frequency', () => {
      cache.trackError('Network error', 'es')
      cache.trackError('Network error', 'es')
      
      const frequency = cache.getErrorFrequency('Network error', 'es')
      expect(frequency).toBe(2)
    })

    it('should implement backoff strategy for frequent errors', () => {
      // Track multiple errors to exceed threshold
      for (let i = 0; i < 5; i++) {
        cache.trackError('Network error', 'es')
      }
      
      const shouldRetry = cache.shouldRetryAfterError('Network error', 'es')
      expect(shouldRetry).toBe(false) // Should not retry immediately
    })

    it('should allow retry after backoff period', () => {
      // Track errors and mock old timestamp
      cache.trackError('Network error', 'es')
      
      // Mock that enough time has passed
      const errorKey = cache['getErrorKey']('Network error', 'es')
      const oldEntry = {
        error: 'Network error',
        locale: 'es',
        count: 4,
        lastOccurrence: Date.now() - 400000 // 6+ minutes ago
      }
      mockLocalStorage.data[errorKey] = JSON.stringify(oldEntry)
      
      const shouldRetry = cache.shouldRetryAfterError('Network error', 'es')
      expect(shouldRetry).toBe(true)
    })
  })

  describe('Cache Management', () => {
    it('should provide cache statistics', () => {
      cache.cacheTranslations('es', { hello: 'Hola' }, '1.0.0')
      cache.cacheTranslations('en', { hello: 'Hello' }, '1.0.0')
      cache.trackError('Test error', 'es')
      
      const stats = cache.getCacheStats()
      
      expect(stats.translationCacheSize).toBe(2)
      expect(stats.cachedLocales).toContain('es')
      expect(stats.cachedLocales).toContain('en')
      expect(stats.errorCacheSize).toBe(1)
    })

    it('should clear translation cache', () => {
      cache.cacheTranslations('es', { hello: 'Hola' }, '1.0.0')
      cache.cacheTranslations('en', { hello: 'Hello' }, '1.0.0')
      
      cache.clearTranslationCache()
      
      expect(cache.getCachedTranslations('es')).toBeNull()
      expect(cache.getCachedTranslations('en')).toBeNull()
    })

    it('should clear error cache', () => {
      cache.trackError('Test error', 'es')
      
      cache.clearErrorCache()
      
      const frequency = cache.getErrorFrequency('Test error', 'es')
      expect(frequency).toBe(0)
    })
  })
})