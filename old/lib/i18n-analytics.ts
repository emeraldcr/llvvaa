/**
 * Enhanced error analytics and monitoring system for i18n
 */

import { ErrorType, ErrorState } from '../components/locale-error-boundary'

export interface ErrorMetrics {
  totalErrors: number
  errorsByType: Record<ErrorType, number>
  errorsByLocale: Record<string, number>
  recoverySuccessRate: number
  averageRecoveryTime: number
  mostFrequentErrors: Array<{
    error: string
    count: number
    locale: string
  }>
}

export interface PerformanceMetrics {
  errorDetectionTime: number
  recoveryTime: number
  fallbackLoadTime: number
  cacheHitRate: number
}

export class I18nAnalytics {
  private static instance: I18nAnalytics
  private readonly ANALYTICS_PREFIX = 'llvvaa_analytics_'
  private readonly MAX_EVENTS = 1000
  
  static getInstance(): I18nAnalytics {
    if (!I18nAnalytics.instance) {
      I18nAnalytics.instance = new I18nAnalytics()
    }
    return I18nAnalytics.instance
  }

  // Track error occurrence
  trackError(errorState: ErrorState): void {
    try {
      const event = {
        ...errorState,
        id: this.generateEventId(),
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        timestamp: Date.now()
      }

      this.storeEvent('error', event)
      this.updateMetrics(errorState)
    } catch (error) {
      console.warn('Failed to track error analytics:', error)
    }
  }

  // Track recovery attempt
  trackRecoveryAttempt(errorType: ErrorType, strategy: string, success: boolean, duration: number): void {
    try {
      const event = {
        type: 'recovery',
        errorType,
        strategy,
        success,
        duration,
        timestamp: Date.now(),
        id: this.generateEventId()
      }

      this.storeEvent('recovery', event)
    } catch (error) {
      console.warn('Failed to track recovery analytics:', error)
    }
  }

  // Track performance metrics
  trackPerformance(metrics: Partial<PerformanceMetrics>): void {
    try {
      const event = {
        type: 'performance',
        ...metrics,
        timestamp: Date.now(),
        id: this.generateEventId()
      }

      this.storeEvent('performance', event)
    } catch (error) {
      console.warn('Failed to track performance analytics:', error)
    }
  }

  // Track cache operations
  trackCacheOperation(operation: 'hit' | 'miss' | 'store' | 'evict', locale: string, size?: number): void {
    try {
      const event = {
        type: 'cache',
        operation,
        locale,
        size,
        timestamp: Date.now(),
        id: this.generateEventId()
      }

      this.storeEvent('cache', event)
    } catch (error) {
      console.warn('Failed to track cache analytics:', error)
    }
  }

  // Get comprehensive error metrics
  getErrorMetrics(): ErrorMetrics {
    try {
      const events = this.getEvents('error')
      const recoveryEvents = this.getEvents('recovery')

      const totalErrors = events.length
      
      const errorsByType = events.reduce((acc, event) => {
        acc[event.type] = (acc[event.type] || 0) + 1
        return acc
      }, {} as Record<ErrorType, number>)

      const errorsByLocale = events.reduce((acc, event) => {
        const locale = event.context?.locale || 'unknown'
        acc[locale] = (acc[locale] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      const successfulRecoveries = recoveryEvents.filter(event => event.success).length
      const totalRecoveryAttempts = recoveryEvents.length
      const recoverySuccessRate = totalRecoveryAttempts > 0 
        ? (successfulRecoveries / totalRecoveryAttempts) * 100 
        : 0

      const recoveryDurations = recoveryEvents
        .filter(event => event.success && event.duration)
        .map(event => event.duration)
      
      const averageRecoveryTime = recoveryDurations.length > 0
        ? recoveryDurations.reduce((sum, duration) => sum + duration, 0) / recoveryDurations.length
        : 0

      const errorCounts = events.reduce((acc, event) => {
        const key = `${event.message}_${event.context?.locale || 'unknown'}`
        acc[key] = (acc[key] || 0) + 1
        return acc
      }, {} as Record<string, number>)

      const mostFrequentErrors = Object.entries(errorCounts)
        .map(([key, count]) => {
          const [error, locale] = key.split('_')
          return { error, count, locale }
        })
        .sort((a, b) => b.count - a.count)
        .slice(0, 10)

      return {
        totalErrors,
        errorsByType,
        errorsByLocale,
        recoverySuccessRate,
        averageRecoveryTime,
        mostFrequentErrors
      }
    } catch (error) {
      console.warn('Failed to get error metrics:', error)
      return this.getEmptyMetrics()
    }
  }

  // Get performance analytics
  getPerformanceMetrics(): {
    averageErrorDetectionTime: number
    averageRecoveryTime: number
    averageFallbackLoadTime: number
    cacheHitRate: number
  } {
    try {
      const performanceEvents = this.getEvents('performance')
      const cacheEvents = this.getEvents('cache')

      const detectionTimes = performanceEvents
        .filter(event => event.errorDetectionTime)
        .map(event => event.errorDetectionTime)

      const recoveryTimes = performanceEvents
        .filter(event => event.recoveryTime)
        .map(event => event.recoveryTime)

      const fallbackTimes = performanceEvents
        .filter(event => event.fallbackLoadTime)
        .map(event => event.fallbackLoadTime)

      const cacheHits = cacheEvents.filter(event => event.operation === 'hit').length
      const cacheMisses = cacheEvents.filter(event => event.operation === 'miss').length
      const totalCacheRequests = cacheHits + cacheMisses

      return {
        averageErrorDetectionTime: this.average(detectionTimes),
        averageRecoveryTime: this.average(recoveryTimes),
        averageFallbackLoadTime: this.average(fallbackTimes),
        cacheHitRate: totalCacheRequests > 0 ? (cacheHits / totalCacheRequests) * 100 : 0
      }
    } catch (error) {
      console.warn('Failed to get performance metrics:', error)
      return {
        averageErrorDetectionTime: 0,
        averageRecoveryTime: 0,
        averageFallbackLoadTime: 0,
        cacheHitRate: 0
      }
    }
  }

  // Generate analytics report
  generateReport(): {
    summary: string
    recommendations: string[]
    metrics: ErrorMetrics
    performance: ReturnType<typeof this.getPerformanceMetrics>
  } {
    const metrics = this.getErrorMetrics()
    const performance = this.getPerformanceMetrics()

    const summary = this.generateSummary(metrics, performance)
    const recommendations = this.generateRecommendations(metrics, performance)

    return {
      summary,
      recommendations,
      metrics,
      performance
    }
  }

  // Export analytics data
  exportAnalyticsData(): string {
    try {
      const data = {
        errors: this.getEvents('error'),
        recoveries: this.getEvents('recovery'),
        performance: this.getEvents('performance'),
        cache: this.getEvents('cache'),
        exportedAt: new Date().toISOString(),
        version: '1.0.0'
      }

      return JSON.stringify(data, null, 2)
    } catch (error) {
      console.warn('Failed to export analytics data:', error)
      return '{}'
    }
  }

  // Clear analytics data
  clearAnalytics(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(this.ANALYTICS_PREFIX)
      )
      keys.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear analytics:', error)
    }
  }

  // Private helper methods
  private generateEventId(): string {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private storeEvent(type: string, event: any): void {
    const key = `${this.ANALYTICS_PREFIX}${type}`
    const events = this.getEvents(type)
    
    events.push(event)
    
    // Keep only the latest events
    if (events.length > this.MAX_EVENTS) {
      events.splice(0, events.length - this.MAX_EVENTS)
    }

    localStorage.setItem(key, JSON.stringify(events))
  }

  private getEvents(type: string): any[] {
    try {
      const key = `${this.ANALYTICS_PREFIX}${type}`
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  }

  private updateMetrics(errorState: ErrorState): void {
    // Update quick metrics for dashboard
    try {
      const key = `${this.ANALYTICS_PREFIX}quick_metrics`
      const metrics = JSON.parse(localStorage.getItem(key) || '{}')
      
      metrics.lastError = Date.now()
      metrics.totalErrors = (metrics.totalErrors || 0) + 1
      metrics.errorsByType = metrics.errorsByType || {}
      metrics.errorsByType[errorState.type] = (metrics.errorsByType[errorState.type] || 0) + 1
      
      localStorage.setItem(key, JSON.stringify(metrics))
    } catch (error) {
      console.warn('Failed to update quick metrics:', error)
    }
  }

  private average(numbers: number[]): number {
    if (numbers.length === 0) return 0
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length
  }

  private getEmptyMetrics(): ErrorMetrics {
    return {
      totalErrors: 0,
      errorsByType: {} as Record<ErrorType, number>,
      errorsByLocale: {},
      recoverySuccessRate: 0,
      averageRecoveryTime: 0,
      mostFrequentErrors: []
    }
  }

  private generateSummary(metrics: ErrorMetrics, performance: ReturnType<typeof this.getPerformanceMetrics>): string {
    if (metrics.totalErrors === 0) {
      return 'No errors detected in the current session. System is performing well.'
    }

    const mostCommonError = Object.entries(metrics.errorsByType)
      .sort(([,a], [,b]) => b - a)[0]

    return `Detected ${metrics.totalErrors} errors. Most common: ${mostCommonError?.[0] || 'Unknown'} (${mostCommonError?.[1] || 0} occurrences). Recovery success rate: ${metrics.recoverySuccessRate.toFixed(1)}%.`
  }

  private generateRecommendations(metrics: ErrorMetrics, performance: ReturnType<typeof this.getPerformanceMetrics>): string[] {
    const recommendations: string[] = []

    if (metrics.recoverySuccessRate < 80) {
      recommendations.push('Low recovery success rate. Consider improving fallback strategies.')
    }

    if (performance.cacheHitRate < 50) {
      recommendations.push('Low cache hit rate. Review cache invalidation strategy.')
    }

    if (performance.averageRecoveryTime > 5000) {
      recommendations.push('High recovery time. Optimize error handling performance.')
    }

    const networkErrors = metrics.errorsByType[ErrorType.NETWORK_ERROR] || 0
    if (networkErrors > metrics.totalErrors * 0.3) {
      recommendations.push('High network error rate. Consider offline support or better retry logic.')
    }

    if (recommendations.length === 0) {
      recommendations.push('System is performing well. Continue monitoring.')
    }

    return recommendations
  }
}

export default I18nAnalytics