import { useTranslations } from 'next-intl'
import { defaultLocale } from '../../lib/i18n'

/**
 * Enhanced translation hook with fallback strategies for missing keys
 */
export function useTranslationsWithFallback(namespace?: string) {
  const t = useTranslations(namespace)
  
  /**
   * Get translation with fallback strategies
   * @param key - Translation key (supports nested keys with dot notation)
   * @param fallback - Custom fallback text
   * @param params - Parameters for interpolation
   * @returns Translation text or fallback
   */
  const tWithFallback = (
    key: string, 
    fallback?: string, 
    params?: Record<string, any>
  ): string => {
    try {
      // Try to get the translation
      const translation = t(key as any, params)
      
      // Check if translation exists and is not the key itself (which indicates missing translation)
      if (typeof translation === 'string' && translation !== key) {
        return translation
      }
      
      // If translation is missing, try fallback strategies
      return getFallbackTranslation(key, fallback, namespace)
    } catch (error) {
      console.warn(`Translation error for key '${key}':`, error)
      return getFallbackTranslation(key, fallback, namespace)
    }
  }
  
  /**
   * Check if a translation key exists
   * @param key - Translation key to check
   * @returns boolean indicating if key exists
   */
  const hasTranslation = (key: string): boolean => {
    try {
      const translation = t(key as any)
      return typeof translation === 'string' && translation !== key
    } catch {
      return false
    }
  }
  
  /**
   * Get translation with rich fallback (supports arrays of fallback keys)
   * @param keys - Array of keys to try in order
   * @param params - Parameters for interpolation
   * @returns First available translation or formatted fallback
   */
  const tMultiple = (keys: string[], params?: Record<string, any>): string => {
    for (const key of keys) {
      try {
        const translation = t(key as any, params)
        if (typeof translation === 'string' && translation !== key) {
          return translation
        }
      } catch {
        continue
      }
    }
    
    // If no translations found, return formatted fallback
    const primaryKey = keys[0] || 'unknown'
    return getFallbackTranslation(primaryKey, undefined, namespace)
  }
  
  return {
    t: tWithFallback,
    tMultiple,
    hasTranslation,
    tRaw: t // Original translation function
  }
}

/**
 * Get fallback translation using various strategies
 */
function getFallbackTranslation(
  key: string, 
  customFallback?: string, 
  namespace?: string
): string {
  // Strategy 1: Use custom fallback if provided
  if (customFallback) {
    return customFallback
  }
  
  // Strategy 2: Try to extract meaningful text from key
  const meaningfulFallback = extractMeaningfulText(key, namespace)
  if (meaningfulFallback) {
    return meaningfulFallback
  }
  
  // Strategy 3: Use generic fallback based on key pattern
  return getGenericFallback(key)
}

/**
 * Extract meaningful text from translation key
 */
function extractMeaningfulText(key: string, namespace?: string): string | null {
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

/**
 * Get generic fallback based on key patterns
 */
function getGenericFallback(key: string): string {
  // Common button actions
  if (key.includes('button') || key.includes('action')) {
    if (key.includes('submit') || key.includes('send')) return 'Submit'
    if (key.includes('cancel')) return 'Cancel'
    if (key.includes('save')) return 'Save'
    if (key.includes('delete')) return 'Delete'
    if (key.includes('edit')) return 'Edit'
    if (key.includes('view')) return 'View'
    return 'Action'
  }
  
  // Form fields
  if (key.includes('form') || key.includes('input') || key.includes('field')) {
    if (key.includes('email')) return 'Email'
    if (key.includes('name')) return 'Name'
    if (key.includes('phone')) return 'Phone'
    if (key.includes('message')) return 'Message'
    return 'Field'
  }
  
  // Navigation items
  if (key.includes('nav') || key.includes('menu')) {
    if (key.includes('home')) return 'Home'
    if (key.includes('about')) return 'About'
    if (key.includes('contact')) return 'Contact'
    if (key.includes('services')) return 'Services'
    return 'Navigation'
  }
  
  // Error messages
  if (key.includes('error') || key.includes('invalid')) {
    return 'Error occurred'
  }
  
  // Success messages
  if (key.includes('success') || key.includes('complete')) {
    return 'Success'
  }
  
  // Default fallback
  return `Missing: ${key}`
}

/**
 * React hook for translation with loading state
 */
export function useAsyncTranslation(namespace?: string) {
  const { t, hasTranslation, tMultiple } = useTranslationsWithFallback(namespace)
  
  /**
   * Get translation with loading state for dynamic content
   */
  const tAsync = (
    key: string,
    fallback?: string,
    params?: Record<string, any>
  ): { text: string; isLoading: boolean; hasError: boolean } => {
    try {
      const text = t(key, fallback, params)
      const isLoading = !hasTranslation(key) && !fallback
      const hasError = text.startsWith('Missing:')
      
      return { text, isLoading, hasError }
    } catch (error) {
      return { 
        text: fallback || `Error loading: ${key}`, 
        isLoading: false, 
        hasError: true 
      }
    }
  }
  
  return { t, tAsync, tMultiple, hasTranslation }
}

export default useTranslationsWithFallback