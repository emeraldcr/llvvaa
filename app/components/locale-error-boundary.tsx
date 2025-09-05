'use client'

import React, { Component, ReactNode } from 'react'
import { Button } from './ui/button'
import { AlertTriangle, RefreshCw, Globe } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

export class LocaleErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error for debugging
    console.error('Locale Error Boundary caught an error:', error, errorInfo)
    
    this.setState({
      error,
      errorInfo
    })

    // You can also log the error to an error reporting service here
    if (typeof window !== 'undefined') {
      // Client-side error reporting could go here
      console.error('Client-side locale error:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack
      })
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
    // Optionally reload the page to reset locale state
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  handleFallbackLocale = () => {
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
      
      window.location.href = `/${segments.join('/')}`
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Oops! Something went wrong
                </h2>
                
                <p className="text-gray-600 mb-6">
                  We encountered an issue with the language settings. This might be due to a missing translation file or configuration problem.
                </p>

                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mb-6 text-left">
                    <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                      Error Details (Development Only)
                    </summary>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 overflow-auto">
                      <p><strong>Error:</strong> {this.state.error.message}</p>
                      {this.state.error.stack && (
                        <pre className="mt-2 whitespace-pre-wrap">
                          {this.state.error.stack}
                        </pre>
                      )}
                    </div>
                  </details>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={this.handleRetry}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  
                  <Button
                    onClick={this.handleFallbackLocale}
                    variant="outline"
                    className="flex-1"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Default Language
                  </Button>
                </div>

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