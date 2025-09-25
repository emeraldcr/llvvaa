'use client'

import React, { Component, ReactNode } from 'react'
import { Button } from './ui/button'
import { AlertTriangle, RefreshCw, Globe, Wifi, FileX, Code, Network } from 'lucide-react'
import { toast } from 'sonner'
import I18nCache from '../lib/i18n-cache'
import I18nAnalytics from '../lib/i18n-analytics'

// Error types for classification
export enum ErrorType {
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',
  PARSE_ERROR = 'PARSE_ERROR', 
  MISSING_KEYS = 'MISSING_KEYS',
  NETWORK_ERROR = 'NETWORK_ERROR',
  HYDRATION_MISMATCH = 'HYDRATION_MISMATCH',
  UNKNOWN = 'UNKNOWN'
}

// Error recovery strategies
export enum RecoveryStrategy {
  RETRY = 'RETRY',
  FALLBACK_LOCALE = 'FALLBACK_LOCALE',
  CACHED_VERSION = 'CACHED_VERSION',
  MANUAL_RELOAD = 'MANUAL_RELOAD'
}

// Error state interface
interface ErrorState {
  type: ErrorType
  message: string
  context: Record<string, any>
  recoveryAttempts: number
  timestamp: number
  userAgent?: string
}

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: ErrorState) => void
  maxRetries?: number
  enableAnalytics?: boolean
  customRecoveryStrategies?: Partial<Record<ErrorType, () => void>>
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
  errorState?: ErrorState
  isRetrying: boolean
  retryCount: number
}
export class LocaleErrorBoundary extends Component<Props, State> {
  private retryTimeouts: NodeJS.Timeout[] = []
  private maxRetries: number
  private cache: I18nCache
  private analytics: I18nAnalytics
  private recoveryStartTime: number = 0
  
  constructor(props: Props) {
    super(props)
    this.maxRetries = props.maxRetries || 3
    this.cache = I18nCache.getInstance()
    this.analytics = I18nAnalytics.getInstance()
    this.state = { 
      hasError: false, 
      isRetrying: false, 
      retryCount: 0 
    }
  }

  // Enhanced error classification
  private classifyError(error: Error): ErrorType {
    const message = error.message.toLowerCase()
    
    // File loading errors
    if (message.includes('loading chunk') || 
        message.includes('failed to fetch') ||
        message.includes('network error') ||
        message.includes('loading css chunk')) {
      return ErrorType.NETWORK_ERROR
    }
    
    // JSON parsing errors
    if (message.includes('unexpected token') || 
        message.includes('json') ||
        message.includes('parse error')) {
      return ErrorType.PARSE_ERROR
    }
    
    // Translation file not found
    if (message.includes('cannot resolve module') ||
        message.includes('not found') ||
        error.name === 'ModuleNotFoundError') {
      return ErrorType.FILE_NOT_FOUND
    }
    
    // Hydration mismatches
    if (message.includes('hydration') ||
        message.includes('server') && message.includes('client')) {
      return ErrorType.HYDRATION_MISMATCH
    }
    
    // Missing translation keys
    if (message.includes('translation') ||
        message.includes('missing key') ||
        message.includes('intl')) {
      return ErrorType.MISSING_KEYS
    }
    
    return ErrorType.UNKNOWN
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  // Enhanced error state creation
  private createErrorState(error: Error, errorInfo: React.ErrorInfo): ErrorState {
    const errorType = this.classifyError(error)
    
    return {
      type: errorType,
      message: error.message,
      context: {
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        locale: this.getCurrentLocale(),
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
        timestamp: Date.now()
      },
      recoveryAttempts: this.state.retryCount || 0,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined
    }
  }

  // Get current locale from URL
  private getCurrentLocale(): string {
    if (typeof window === 'undefined') return 'unknown'
    
    const pathname = window.location.pathname
    const segments = pathname.split('/').filter(Boolean)
    
    if (segments.length > 0 && ['es', 'en'].includes(segments[0])) {
      return segments[0]
    }
    
    return 'es' // default
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.recoveryStartTime = Date.now()
    
    // Create enhanced error state
    const errorState = this.createErrorState(error, errorInfo)
    
    // Log the error for debugging
    console.error('Locale Error Boundary caught an error:', {
      error: errorState,
      originalError: error,
      errorInfo
    })
    
    // Update state with error details
    this.setState({
      error,
      errorInfo,
      errorState
    })

    // Track error with analytics
    this.analytics.trackError(errorState)
    
    // Track error with cache for frequency analysis
    this.cache.trackError(error.message, this.getCurrentLocale())

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(errorState)
    }
    
    // Store error in localStorage for analytics
    this.storeErrorForAnalytics(errorState)
    
    // Attempt automatic recovery for certain error types
    this.attemptAutomaticRecovery(errorState)
  }

  // Store error for analytics
  private storeErrorForAnalytics(errorState: ErrorState) {
    if (!this.props.enableAnalytics) return
    
    try {
      const errors = JSON.parse(
        localStorage.getItem('locale_errors') || '[]'
      )
      
      // Keep only last 10 errors
      errors.push(errorState)
      if (errors.length > 10) {
        errors.shift()
      }
      
      localStorage.setItem('locale_errors', JSON.stringify(errors))
    } catch (e) {
      console.warn('Failed to store error for analytics:', e)
    }
  }

  // Attempt automatic recovery based on error type
  private attemptAutomaticRecovery(errorState: ErrorState) {
    const locale = this.getCurrentLocale()
    
    // Check if we should retry based on error frequency
    if (!this.cache.shouldRetryAfterError(errorState.message, locale)) {
      console.warn('Skipping automatic recovery due to frequent errors')
      return
    }
    
    switch (errorState.type) {
      case ErrorType.NETWORK_ERROR:
        this.scheduleProgressiveRetry(1000) // Start with 1 second
        break
        
      case ErrorType.FILE_NOT_FOUND:
        this.tryLoadCachedTranslations() || this.handleFallbackLocale()
        break
        
      case ErrorType.HYDRATION_MISMATCH:
        // For hydration mismatches, try a delayed remount
        this.scheduleProgressiveRetry(100, false) // Quick retry without reload
        break
        
      case ErrorType.PARSE_ERROR:
        this.loadCachedTranslations() || this.scheduleProgressiveRetry(2000)
        break
        
      case ErrorType.MISSING_KEYS:
        // For missing keys, try to load from cache or switch locale
        this.tryLoadCachedTranslations() || this.showMissingKeysToast()
        break
        
      default:
        // For unknown errors, try progressive retry
        this.scheduleProgressiveRetry(1500)
        break
    }
  }

  // Schedule progressive retry with exponential backoff
  private scheduleProgressiveRetry(initialDelay: number, forceReload: boolean = true) {
    if (this.state.retryCount >= this.maxRetries) {
      console.warn('Max retries reached, not attempting automatic recovery')
      this.analytics.trackRecoveryAttempt(
        this.state.errorState?.type || ErrorType.UNKNOWN,
        'progressive_retry',
        false,
        Date.now() - this.recoveryStartTime
      )
      return
    }
    
    // Calculate delay with exponential backoff and jitter
    const backoffMultiplier = Math.pow(2, this.state.retryCount)
    const jitter = Math.random() * 0.3 // Add 30% jitter
    const delay = initialDelay * backoffMultiplier * (1 + jitter)
    
    // Cap the maximum delay
    const maxDelay = 30000 // 30 seconds
    const finalDelay = Math.min(delay, maxDelay)
    
    console.log(`Scheduling retry ${this.state.retryCount + 1}/${this.maxRetries} in ${finalDelay}ms`)
    
    const timeout = setTimeout(() => {
      this.setState({ isRetrying: true })
      
      // Track cache hit for analytics
      this.analytics.trackCacheOperation('miss', this.getCurrentLocale())
      
      // Attempt recovery
      setTimeout(() => {
        this.handleRetry(forceReload)
        
        setTimeout(() => {
          this.setState({ isRetrying: false })
          
          // Track recovery attempt
          this.analytics.trackRecoveryAttempt(
            this.state.errorState?.type || ErrorType.UNKNOWN,
            'progressive_retry',
            !this.state.hasError, // Success if no error after retry
            Date.now() - this.recoveryStartTime
          )
        }, 500)
      }, 100)
      
    }, finalDelay)
    
    this.retryTimeouts.push(timeout)
  }

  // Enhanced cache loading with fallback strategies
  private tryLoadCachedTranslations(): boolean {
    try {
      const locale = this.getCurrentLocale()
      const cached = this.cache.getCachedTranslations(locale)
      
      if (cached) {
        console.log('Successfully loaded cached translations for', locale)
        toast.success('Using cached translations')
        
        // Track cache hit
        this.analytics.trackCacheOperation('hit', locale, JSON.stringify(cached).length)
        
        // Reset error state to try again
        this.setState({ 
          hasError: false, 
          error: undefined, 
          errorInfo: undefined,
          errorState: undefined
        })
        
        // Track successful recovery
        this.analytics.trackRecoveryAttempt(
          this.state.errorState?.type || ErrorType.UNKNOWN,
          'cached_translations',
          true,
          Date.now() - this.recoveryStartTime
        )
        
        return true
      }
      
      // Track cache miss
      this.analytics.trackCacheOperation('miss', locale)
      return false
      
    } catch (e) {
      console.warn('Failed to load cached translations:', e)
      this.analytics.trackCacheOperation('miss', this.getCurrentLocale())
      return false
    }
  }

  // Show toast for missing translation keys
  private showMissingKeysToast(): void {
    toast.warning('Some translations are missing. Displaying fallback text.', {
      duration: 5000,
      action: {
        label: 'Switch Language',
        onClick: () => this.handleFallbackLocale()
      }
    })
  }

  // Legacy method for backwards compatibility
  private loadCachedTranslations(): boolean {
    return this.tryLoadCachedTranslations()
  }

  // Cleanup timeouts
  componentWillUnmount() {
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }
  handleRetry = (forceReload: boolean = true) => {
    const startTime = Date.now()
    
    // Increment retry count
    this.setState(prevState => ({ 
      retryCount: prevState.retryCount + 1,
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      errorState: undefined
    }))
    
    // Track performance metrics
    this.analytics.trackPerformance({
      errorDetectionTime: this.recoveryStartTime ? startTime - this.recoveryStartTime : 0
    })
    
    // Force reload for hard reset after multiple retries
    if (forceReload && this.state.retryCount >= 2) {
      if (typeof window !== 'undefined') {
        window.location.reload()
      }
    }
  }

  handleFallbackLocale = () => {
    const startTime = Date.now()
    
    // Navigate to default locale
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.pathname
      const segments = currentUrl.split('/').filter(Boolean)
      
      // Replace or add default locale
      if (segments.length > 0 && ['es', 'en'].includes(segments[0])) {
        segments[0] = 'es' // Default to Spanish
      } else {
        segments.unshift('es')
      }
      
      const newUrl = `/${segments.join('/')}`
      
      // Show toast notification about locale switch
      toast.info('Switching to default language (Spanish)', {
        duration: 3000
      })
      
      // Track recovery attempt
      this.analytics.trackRecoveryAttempt(
        this.state.errorState?.type || ErrorType.UNKNOWN,
        'fallback_locale',
        true,
        Date.now() - this.recoveryStartTime
      )
      
      // Track performance
      this.analytics.trackPerformance({
        fallbackLoadTime: Date.now() - startTime
      })
      
      // Navigate to fallback locale
      window.location.href = newUrl
    }
  }

  // Get error icon based on error type
  private getErrorIcon(errorType: ErrorType) {
    switch (errorType) {
      case ErrorType.NETWORK_ERROR:
        return <Network className="w-8 h-8 text-red-600" />
      case ErrorType.FILE_NOT_FOUND:
        return <FileX className="w-8 h-8 text-red-600" />
      case ErrorType.PARSE_ERROR:
        return <Code className="w-8 h-8 text-red-600" />
      case ErrorType.HYDRATION_MISMATCH:
        return <Wifi className="w-8 h-8 text-red-600" />
      default:
        return <AlertTriangle className="w-8 h-8 text-red-600" />
    }
  }

  // Get user-friendly error message
  private getErrorMessage(errorType: ErrorType): { title: string; description: string } {
    switch (errorType) {
      case ErrorType.NETWORK_ERROR:
        return {
          title: 'Connection Problem',
          description: 'Unable to load language files. Please check your internet connection.'
        }
      case ErrorType.FILE_NOT_FOUND:
        return {
          title: 'Language Files Missing',
          description: 'The requested language files could not be found on the server.'
        }
      case ErrorType.PARSE_ERROR:
        return {
          title: 'Language File Corrupted',
          description: 'There appears to be a problem with the language file format.'
        }
      case ErrorType.HYDRATION_MISMATCH:
        return {
          title: 'Page Loading Issue',
          description: 'There was a mismatch between server and client content.'
        }
      case ErrorType.MISSING_KEYS:
        return {
          title: 'Translation Missing',
          description: 'Some text translations are missing for the current language.'
        }
      default:
        return {
          title: 'Oops! Something went wrong',
          description: 'We encountered an issue with the language settings. This might be due to a missing translation file or configuration problem.'
        }
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      const errorState = this.state.errorState
      const errorType = errorState?.type || ErrorType.UNKNOWN
      const { title, description } = this.getErrorMessage(errorType)
      const isRetrying = this.state.isRetrying
      const canRetry = this.state.retryCount < this.maxRetries

      // Default enhanced error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  {this.getErrorIcon(errorType)}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {description}
                </p>

                {/* Error details for development */}
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mb-6 text-left">
                    <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                      Error Details (Development Only)
                    </summary>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 overflow-auto">
                      <p><strong>Type:</strong> {errorType}</p>
                      <p><strong>Error:</strong> {this.state.error.message}</p>
                      <p><strong>Retry Count:</strong> {this.state.retryCount}/{this.maxRetries}</p>
                      {this.state.error.stack && (
                        <pre className="mt-2 whitespace-pre-wrap">
                          {this.state.error.stack}
                        </pre>
                      )}
                    </div>
                  </details>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {canRetry && (
                    <Button
                      onClick={this.handleRetry}
                      disabled={isRetrying}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    >
                      <RefreshCw className={`w-4 h-4 mr-2 ${isRetrying ? 'animate-spin' : ''}`} />
                      {isRetrying ? 'Retrying...' : 'Try Again'}
                    </Button>
                  )}
                  
                  <Button
                    onClick={this.handleFallbackLocale}
                    variant="outline"
                    className="flex-1"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Default Language
                  </Button>
                </div>

                {/* Recovery suggestions based on error type */}
                {errorType === ErrorType.NETWORK_ERROR && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
                    💡 Try refreshing the page or check your internet connection
                  </div>
                )}
                
                {errorType === ErrorType.FILE_NOT_FOUND && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-sm text-yellow-700">
                    💡 The language files might be temporarily unavailable
                  </div>
                )}

                <p className="mt-4 text-xs text-gray-500">
                  If the problem persists, please contact support or try refreshing the page.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Higher-order component for easier usage
export function withLocaleErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithLocaleErrorBoundaryComponent(props: P) {
    return (
      <LocaleErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </LocaleErrorBoundary>
    )
  }
}

export default LocaleErrorBoundary