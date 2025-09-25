/**
 * Smart cache management for translation files and error states
 */

export interface CacheEntry<T> {
  data: T
  timestamp: number
  version: string
  etag?: string
}

export interface ErrorCacheEntry {
  error: string
  count: number
  lastOccurrence: number
  locale: string
}

export class I18nCache {
  private static instance: I18nCache
  private readonly CACHE_PREFIX = 'llvvaa_i18n_'
  private readonly ERROR_PREFIX = 'llvvaa_errors_'
  private readonly DEFAULT_TTL = 24 * 60 * 60 * 1000 // 24 hours
  private readonly MAX_ERROR_ENTRIES = 50

  static getInstance(): I18nCache {
    if (!I18nCache.instance) {
      I18nCache.instance = new I18nCache()
    }
    return I18nCache.instance
  }

  // Translation cache management
  cacheTranslations(locale: string, translations: Record<string, any>, version: string = '1.0.0'): void {
    try {
      const cacheEntry: CacheEntry<Record<string, any>> = {
        data: translations,
        timestamp: Date.now(),
        version,
        etag: this.generateEtag(translations)
      }

      localStorage.setItem(
        `${this.CACHE_PREFIX}translations_${locale}`,
        JSON.stringify(cacheEntry)
      )

      // Update cache index
      this.updateCacheIndex(locale, cacheEntry.timestamp)
    } catch (error) {
      console.warn('Failed to cache translations:', error)
    }
  }

  getCachedTranslations(locale: string): Record<string, any> | null {
    try {
      const cached = localStorage.getItem(`${this.CACHE_PREFIX}translations_${locale}`)
      if (!cached) return null

      const cacheEntry: CacheEntry<Record<string, any>> = JSON.parse(cached)
      
      // Check if cache is still valid
      if (this.isCacheValid(cacheEntry)) {
        return cacheEntry.data
      }

      // Remove expired cache
      this.removeCachedTranslations(locale)
      return null
    } catch (error) {
      console.warn('Failed to retrieve cached translations:', error)
      return null
    }
  }

  removeCachedTranslations(locale: string): void {
    try {
      localStorage.removeItem(`${this.CACHE_PREFIX}translations_${locale}`)
      this.removeCacheIndex(locale)
    } catch (error) {
      console.warn('Failed to remove cached translations:', error)
    }
  }

  // Error state management
  trackError(error: string, locale: string): void {
    try {
      const errorKey = this.getErrorKey(error, locale)
      const existingEntry = this.getErrorEntry(errorKey)

      const errorEntry: ErrorCacheEntry = {
        error,
        locale,
        count: existingEntry ? existingEntry.count + 1 : 1,
        lastOccurrence: Date.now()
      }

      localStorage.setItem(errorKey, JSON.stringify(errorEntry))
      this.cleanupOldErrors()
    } catch (error) {
      console.warn('Failed to track error:', error)
    }
  }

  getErrorFrequency(error: string, locale: string): number {
    try {
      const errorKey = this.getErrorKey(error, locale)
      const entry = this.getErrorEntry(errorKey)
      return entry?.count || 0
    } catch {
      return 0
    }
  }

  shouldRetryAfterError(error: string, locale: string): boolean {
    const frequency = this.getErrorFrequency(error, locale)
    const backoffThreshold = 3

    if (frequency >= backoffThreshold) {
      const errorKey = this.getErrorKey(error, locale)
      const entry = this.getErrorEntry(errorKey)
      
      if (entry) {
        // Exponential backoff: wait longer for frequent errors
        const backoffTime = Math.min(
          Math.pow(2, frequency - backoffThreshold) * 60000, // Max 60 seconds
          300000 // Max 5 minutes
        )
        
        return Date.now() - entry.lastOccurrence > backoffTime
      }
    }

    return true
  }

  // Cache validation and cleanup
  private isCacheValid(cacheEntry: CacheEntry<any>): boolean {
    const age = Date.now() - cacheEntry.timestamp
    return age < this.DEFAULT_TTL
  }

  private generateEtag(data: any): string {
    // Simple hash function for ETag generation
    const str = JSON.stringify(data)
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36)
  }

  private updateCacheIndex(locale: string, timestamp: number): void {
    try {
      const index = this.getCacheIndex()
      index[locale] = timestamp
      localStorage.setItem(`${this.CACHE_PREFIX}index`, JSON.stringify(index))
    } catch (error) {
      console.warn('Failed to update cache index:', error)
    }
  }

  private removeCacheIndex(locale: string): void {
    try {
      const index = this.getCacheIndex()
      delete index[locale]
      localStorage.setItem(`${this.CACHE_PREFIX}index`, JSON.stringify(index))
    } catch (error) {
      console.warn('Failed to remove cache index:', error)
    }
  }

  private getCacheIndex(): Record<string, number> {
    try {
      const cached = localStorage.getItem(`${this.CACHE_PREFIX}index`)
      return cached ? JSON.parse(cached) : {}
    } catch {
      return {}
    }
  }

  private getErrorKey(error: string, locale: string): string {
    const errorHash = this.generateEtag(error).substring(0, 8)
    return `${this.ERROR_PREFIX}${errorHash}_${locale}`
  }

  private getErrorEntry(errorKey: string): ErrorCacheEntry | null {
    try {
      const cached = localStorage.getItem(errorKey)
      return cached ? JSON.parse(cached) : null
    } catch {
      return null
    }
  }

  private cleanupOldErrors(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(this.ERROR_PREFIX)
      )

      if (keys.length > this.MAX_ERROR_ENTRIES) {
        // Sort by timestamp and remove oldest entries
        const entries = keys
          .map(key => ({
            key,
            entry: this.getErrorEntry(key)
          }))
          .filter(item => item.entry)
          .sort((a, b) => a.entry!.lastOccurrence - b.entry!.lastOccurrence)

        const toRemove = entries.slice(0, entries.length - this.MAX_ERROR_ENTRIES)
        toRemove.forEach(item => localStorage.removeItem(item.key))
      }
    } catch (error) {
      console.warn('Failed to cleanup old errors:', error)
    }
  }

  // Public cleanup methods
  clearTranslationCache(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(this.CACHE_PREFIX)
      )
      keys.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear translation cache:', error)
    }
  }

  clearErrorCache(): void {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(this.ERROR_PREFIX)
      )
      keys.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear error cache:', error)
    }
  }

  getCacheStats(): {
    translationCacheSize: number
    errorCacheSize: number
    cachedLocales: string[]
    oldestCacheEntry: number | null
  } {
    try {
      const translationKeys = Object.keys(localStorage).filter(key => 
        key.startsWith(`${this.CACHE_PREFIX}translations_`)
      )

      const errorKeys = Object.keys(localStorage).filter(key => 
        key.startsWith(this.ERROR_PREFIX)
      )

      const cachedLocales = translationKeys.map(key => 
        key.replace(`${this.CACHE_PREFIX}translations_`, '')
      )

      const index = this.getCacheIndex()
      const timestamps = Object.values(index)
      const oldestCacheEntry = timestamps.length > 0 ? Math.min(...timestamps) : null

      return {
        translationCacheSize: translationKeys.length,
        errorCacheSize: errorKeys.length,
        cachedLocales,
        oldestCacheEntry
      }
    } catch {
      return {
        translationCacheSize: 0,
        errorCacheSize: 0,
        cachedLocales: [],
        oldestCacheEntry: null
      }
    }
  }
}

export default I18nCache