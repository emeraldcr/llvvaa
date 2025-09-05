/**
 * Comprehensive tests for enhanced LocaleErrorBoundary
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'
import { LocaleErrorBoundary, ErrorType } from '../components/locale-error-boundary'

// Mock dependencies
vi.mock('sonner', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
    warning: vi.fn(),
    info: vi.fn(),
    loading: vi.fn()
  }
}))

vi.mock('../lib/i18n-cache', () => ({
  default: class MockI18nCache {
    static getInstance() {
      return new MockI18nCache()
    }
    trackError = vi.fn()
    shouldRetryAfterError = vi.fn(() => true)
    getCachedTranslations = vi.fn(() => null)
  }
}))

vi.mock('../lib/i18n-analytics', () => ({
  default: class MockI18nAnalytics {
    static getInstance() {
      return new MockI18nAnalytics()
    }
    trackError = vi.fn()
    trackRecoveryAttempt = vi.fn()
    trackCacheOperation = vi.fn()
    trackPerformance = vi.fn()
  }
}))

// Test component that throws errors
const ErrorThrowingComponent = ({ errorType }: { errorType: ErrorType }) => {
  const errorMessages = {
    [ErrorType.NETWORK_ERROR]: 'Failed to fetch',
    [ErrorType.FILE_NOT_FOUND]: 'Cannot resolve module',
    [ErrorType.PARSE_ERROR]: 'Unexpected token in JSON',
    [ErrorType.HYDRATION_MISMATCH]: 'Hydration failed',
    [ErrorType.MISSING_KEYS]: 'Translation key missing',
    [ErrorType.UNKNOWN]: 'Unknown error'
  }
  
  throw new Error(errorMessages[errorType])
}

const GoodComponent = () => <div>Good Component</div>

describe('Enhanced LocaleErrorBoundary', () => {
  let consoleErrorSpy: any

  beforeEach(() => {
    // Mock console.error to avoid test output pollution
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(() => null),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn()
      },
      writable: true
    })

    // Mock window.location
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/en/test',
        href: 'http://localhost:3000/en/test',
        reload: vi.fn()
      },
      writable: true
    })
  })

  afterEach(() => {
    consoleErrorSpy.restore()
    vi.clearAllMocks()
  })

  describe('Error Classification', () => {
    it('should classify network errors correctly', async () => {
      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.getByText('Connection Problem')).toBeInTheDocument()
        expect(screen.getByText(/internet connection/i)).toBeInTheDocument()
      })
    })

    it('should classify file not found errors correctly', async () => {
      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.FILE_NOT_FOUND} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.getByText('Language Files Missing')).toBeInTheDocument()
      })
    })

    it('should classify parse errors correctly', async () => {
      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.PARSE_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.getByText('Language File Corrupted')).toBeInTheDocument()
      })
    })
  })

  describe('Recovery Mechanisms', () => {
    it('should show retry button for recoverable errors', async () => {
      render(
        <LocaleErrorBoundary maxRetries={3}>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        const retryButton = screen.getByRole('button', { name: /try again/i })
        expect(retryButton).toBeInTheDocument()
        expect(retryButton).not.toBeDisabled()
      })
    })

    it('should disable retry button after max retries', async () => {
      const { rerender } = render(
        <LocaleErrorBoundary maxRetries={1}>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      // Click retry button once
      const retryButton = screen.getByRole('button', { name: /try again/i })
      fireEvent.click(retryButton)

      // Rerender with same error to trigger retry count increase
      rerender(
        <LocaleErrorBoundary maxRetries={1}>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        // After max retries, should not show retry button
        expect(screen.queryByRole('button', { name: /try again/i })).not.toBeInTheDocument()
      })
    })

    it('should show fallback locale button', async () => {
      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.FILE_NOT_FOUND} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /default language/i })).toBeInTheDocument()
      })
    })
  })

  describe('User Interface', () => {
    it('should display appropriate error icons', async () => {
      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        // Should show network-specific icon
        const errorContainer = screen.getByText('Connection Problem').closest('div')
        expect(errorContainer).toBeInTheDocument()
      })
    })

    it('should show development error details in development mode', async () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'development'

      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.PARSE_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.getByText('Error Details (Development Only)')).toBeInTheDocument()
      })

      process.env.NODE_ENV = originalEnv
    })

    it('should hide development error details in production mode', async () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'production'

      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.PARSE_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.queryByText('Error Details (Development Only)')).not.toBeInTheDocument()
      })

      process.env.NODE_ENV = originalEnv
    })

    it('should show contextual recovery suggestions', async () => {
      render(
        <LocaleErrorBoundary>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(screen.getByText(/check your internet connection/i)).toBeInTheDocument()
      })
    })
  })

  describe('Custom Props', () => {
    it('should use custom fallback UI when provided', () => {
      const customFallback = <div>Custom Error UI</div>
      
      render(
        <LocaleErrorBoundary fallback={customFallback}>
          <ErrorThrowingComponent errorType={ErrorType.UNKNOWN} />
        </LocaleErrorBoundary>
      )

      expect(screen.getByText('Custom Error UI')).toBeInTheDocument()
      expect(screen.queryByText('Oops! Something went wrong')).not.toBeInTheDocument()
    })

    it('should call custom onError handler', async () => {
      const onError = vi.fn()
      
      render(
        <LocaleErrorBoundary onError={onError}>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(onError).toHaveBeenCalledWith(
          expect.objectContaining({
            type: ErrorType.NETWORK_ERROR,
            message: 'Failed to fetch'
          })
        )
      })
    })
  })

  describe('Analytics Integration', () => {
    it('should track errors with analytics', async () => {
      const MockAnalytics = (await import('../lib/i18n-analytics')).default
      const mockInstance = MockAnalytics.getInstance()

      render(
        <LocaleErrorBoundary enableAnalytics={true}>
          <ErrorThrowingComponent errorType={ErrorType.NETWORK_ERROR} />
        </LocaleErrorBoundary>
      )

      await waitFor(() => {
        expect(mockInstance.trackError).toHaveBeenCalled()
      })
    })
  })

  describe('Normal Operation', () => {
    it('should render children normally when no error occurs', () => {
      render(
        <LocaleErrorBoundary>
          <GoodComponent />
        </LocaleErrorBoundary>
      )

      expect(screen.getByText('Good Component')).toBeInTheDocument()
      expect(screen.queryByText('Oops! Something went wrong')).not.toBeInTheDocument()
    })
  })
})