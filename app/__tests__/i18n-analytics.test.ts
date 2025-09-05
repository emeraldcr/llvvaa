/**
 * Tests for I18nAnalytics functionality
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import I18nAnalytics from '../lib/i18n-analytics'
import { ErrorType } from '../components/locale-error-boundary'

describe('I18nAnalytics', () => {
  let analytics: I18nAnalytics
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

    // Mock navigator
    Object.defineProperty(window, 'navigator', {
      value: { userAgent: 'Test Browser' },
      writable: true
    })

    // Mock screen
    Object.defineProperty(window, 'screen', {
      value: { width: 1920, height: 1080 },
      writable: true
    })

    analytics = I18nAnalytics.getInstance()
  })

  afterEach(() => {
    mockLocalStorage.clear()
    vi.clearAllMocks()
  })

  describe('Error Tracking', () => {
    it('should track error events', () => {
      const errorState = {
        type: ErrorType.NETWORK_ERROR,
        message: 'Failed to fetch',
        context: { locale: 'es', url: 'http://localhost:3000' },
        recoveryAttempts: 0,
        timestamp: Date.now()
      }

      analytics.trackError(errorState)

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'llvvaa_analytics_error',
        expect.stringContaining('"type":"NETWORK_ERROR"')
      )
    })

    it('should generate error metrics', () => {
      // Track multiple errors
      const errors = [
        { type: ErrorType.NETWORK_ERROR, message: 'Network 1', context: { locale: 'es' }, recoveryAttempts: 0, timestamp: Date.now() },
        { type: ErrorType.NETWORK_ERROR, message: 'Network 2', context: { locale: 'en' }, recoveryAttempts: 0, timestamp: Date.now() },
        { type: ErrorType.FILE_NOT_FOUND, message: 'File missing', context: { locale: 'es' }, recoveryAttempts: 0, timestamp: Date.now() }
      ]

      errors.forEach(error => analytics.trackError(error))

      const metrics = analytics.getErrorMetrics()

      expect(metrics.totalErrors).toBe(3)
      expect(metrics.errorsByType[ErrorType.NETWORK_ERROR]).toBe(2)
      expect(metrics.errorsByType[ErrorType.FILE_NOT_FOUND]).toBe(1)
      expect(metrics.errorsByLocale['es']).toBe(2)
      expect(metrics.errorsByLocale['en']).toBe(1)
    })
  })

  describe('Recovery Tracking', () => {
    it('should track recovery attempts', () => {
      analytics.trackRecoveryAttempt(ErrorType.NETWORK_ERROR, 'progressive_retry', true, 1500)

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'llvvaa_analytics_recovery',
        expect.stringContaining('"success":true')
      )
    })

    it('should calculate recovery success rate', () => {
      // Track recovery attempts
      analytics.trackRecoveryAttempt(ErrorType.NETWORK_ERROR, 'retry', true, 1000)
      analytics.trackRecoveryAttempt(ErrorType.NETWORK_ERROR, 'retry', false, 2000)
      analytics.trackRecoveryAttempt(ErrorType.FILE_NOT_FOUND, 'fallback', true, 500)

      const metrics = analytics.getErrorMetrics()

      // 2 successful out of 3 attempts = 66.67%
      expect(metrics.recoverySuccessRate).toBeCloseTo(66.67, 1)
    })
  })

  describe('Performance Tracking', () => {
    it('should track performance metrics', () => {
      const performanceData = {
        errorDetectionTime: 50,
        recoveryTime: 1500,
        fallbackLoadTime: 800
      }

      analytics.trackPerformance(performanceData)

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'llvvaa_analytics_performance',
        expect.stringContaining('"errorDetectionTime":50')
      )
    })

    it('should calculate performance averages', () => {
      // Track multiple performance metrics
      analytics.trackPerformance({ errorDetectionTime: 100, recoveryTime: 1000 })
      analytics.trackPerformance({ errorDetectionTime: 200, recoveryTime: 2000 })

      const metrics = analytics.getPerformanceMetrics()

      expect(metrics.averageErrorDetectionTime).toBe(150)
      expect(metrics.averageRecoveryTime).toBe(1500)
    })
  })

  describe('Cache Tracking', () => {
    it('should track cache operations', () => {
      analytics.trackCacheOperation('hit', 'es', 1024)

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'llvvaa_analytics_cache',
        expect.stringContaining('"operation":"hit"')
      )
    })

    it('should calculate cache hit rate', () => {
      // Track cache operations
      analytics.trackCacheOperation('hit', 'es')
      analytics.trackCacheOperation('hit', 'en')
      analytics.trackCacheOperation('miss', 'fr')

      const metrics = analytics.getPerformanceMetrics()

      // 2 hits out of 3 total = 66.67%
      expect(metrics.cacheHitRate).toBeCloseTo(66.67, 1)
    })
  })

  describe('Analytics Reports', () => {
    it('should generate comprehensive report', () => {
      // Add some sample data
      analytics.trackError({
        type: ErrorType.NETWORK_ERROR,
        message: 'Test error',
        context: { locale: 'es' },
        recoveryAttempts: 0,
        timestamp: Date.now()
      })

      analytics.trackRecoveryAttempt(ErrorType.NETWORK_ERROR, 'retry', true, 1000)

      const report = analytics.generateReport()

      expect(report).toHaveProperty('summary')
      expect(report).toHaveProperty('recommendations')
      expect(report).toHaveProperty('metrics')
      expect(report).toHaveProperty('performance')
      expect(report.recommendations).toBeInstanceOf(Array)
    })

    it('should export analytics data', () => {
      analytics.trackError({
        type: ErrorType.NETWORK_ERROR,
        message: 'Test error',
        context: { locale: 'es' },
        recoveryAttempts: 0,
        timestamp: Date.now()
      })

      const exportedData = analytics.exportAnalyticsData()
      const parsed = JSON.parse(exportedData)

      expect(parsed).toHaveProperty('errors')
      expect(parsed).toHaveProperty('exportedAt')
      expect(parsed).toHaveProperty('version')
      expect(parsed.errors).toBeInstanceOf(Array)
    })
  })

  describe('Data Management', () => {
    it('should clear all analytics data', () => {
      // Add some data first
      analytics.trackError({
        type: ErrorType.NETWORK_ERROR,
        message: 'Test error',
        context: { locale: 'es' },
        recoveryAttempts: 0,
        timestamp: Date.now()
      })

      analytics.clearAnalytics()

      // Verify all analytics data is cleared
      const metrics = analytics.getErrorMetrics()
      expect(metrics.totalErrors).toBe(0)
    })

    it('should handle storage errors gracefully', () => {
      // Mock localStorage to throw errors
      mockLocalStorage.setItem.mockImplementation(() => {
        throw new Error('Storage full')
      })

      // Should not throw when storage fails
      expect(() => {
        analytics.trackError({
          type: ErrorType.NETWORK_ERROR,
          message: 'Test error',
          context: { locale: 'es' },
          recoveryAttempts: 0,
          timestamp: Date.now()
        })
      }).not.toThrow()
    })
  })
})