/**
 * CSP Monitoring and Error Handling Utilities
 * 
 * This module provides client-side monitoring for CSP violations
 * and enhanced error handling for CSP-related issues.
 */

interface CSPViolationEvent extends Event {
  blockedURI: string
  columnNumber: number
  documentURI: string
  effectiveDirective: string
  lineNumber: number
  originalPolicy: string
  referrer: string
  sample: string
  sourceFile: string
  statusCode: number
  violatedDirective: string
}

interface CSPMonitorConfig {
  reportEndpoint?: string
  enableConsoleLogging?: boolean
  enableUserNotification?: boolean
  filterKnownIssues?: boolean
  maxReportsPerSession?: number
}

class CSPMonitor {
  private config: CSPMonitorConfig
  private reportCount: number = 0
  private reportedViolations: Set<string> = new Set()

  constructor(config: CSPMonitorConfig = {}) {
    this.config = {
      reportEndpoint: '/api/csp-report',
      enableConsoleLogging: true,
      enableUserNotification: false,
      filterKnownIssues: true,
      maxReportsPerSession: 50,
      ...config
    }
  }

  /**
   * Initialize CSP monitoring
   */
  public init(): void {
    if (typeof window === 'undefined') {
      return // Server-side rendering
    }

    // Listen for CSP violation events
    document.addEventListener('securitypolicyviolation', this.handleViolation.bind(this))

    // Monitor EmailJS initialization
    this.monitorEmailJSInit()

    // Set up error boundary for CSP-related errors
    this.setupErrorBoundary()
  }

  /**
   * Handle CSP violation events
   */
  private handleViolation = (event: Event): void => {
    const violation = event as CSPViolationEvent

    // Create violation signature for deduplication
    const signature = this.createViolationSignature(violation)
    
    // Skip if already reported
    if (this.reportedViolations.has(signature)) {
      return
    }

    // Check report limits
    if (this.reportCount >= (this.config.maxReportsPerSession || 50)) {
      return
    }

    // Filter known false positives
    if (this.config.filterKnownIssues && this.shouldIgnoreViolation(violation)) {
      return
    }

    // Log violation
    if (this.config.enableConsoleLogging) {
      this.logViolation(violation)
    }

    // Report violation
    this.reportViolation(violation)

    // Notify user if enabled
    if (this.config.enableUserNotification) {
      this.notifyUser(violation)
    }

    // Track this violation
    this.reportedViolations.add(signature)
    this.reportCount++
  }

  /**
   * Create a unique signature for deduplication
   */
  private createViolationSignature(violation: CSPViolationEvent): string {
    return `${violation.violatedDirective}:${violation.blockedURI}:${violation.sourceFile}`
  }

  /**
   * Check if violation should be ignored
   */
  private shouldIgnoreViolation(violation: CSPViolationEvent): boolean {
    const { blockedURI, sourceFile, violatedDirective } = violation

    // Ignore browser extension violations
    if (
      blockedURI.includes('chrome-extension://') ||
      blockedURI.includes('moz-extension://') ||
      blockedURI.includes('safari-extension://') ||
      sourceFile.includes('extension')
    ) {
      return true
    }

    // Ignore known ad-blocker violations
    if (
      blockedURI.includes('googletagmanager.com') ||
      blockedURI.includes('google-analytics.com') ||
      blockedURI.includes('facebook.com/tr')
    ) {
      return true
    }

    // Ignore inline style violations from browser DevTools
    if (
      violatedDirective.includes('style-src') &&
      sourceFile.includes('devtools')
    ) {
      return true
    }

    return false
  }

  /**
   * Log violation to console
   */
  private logViolation(violation: CSPViolationEvent): void {
    const severity = this.getViolationSeverity(violation)
    const logMethod = severity === 'error' ? console.error : 
                     severity === 'warning' ? console.warn : console.info

    logMethod('CSP Violation:', {
      type: violation.violatedDirective,
      blocked: violation.blockedURI,
      source: violation.sourceFile,
      line: violation.lineNumber,
      column: violation.columnNumber,
      sample: violation.sample,
      policy: violation.originalPolicy
    })
  }

  /**
   * Determine violation severity
   */
  private getViolationSeverity(violation: CSPViolationEvent): 'error' | 'warning' | 'info' {
    const { violatedDirective, blockedURI } = violation

    // High-risk violations
    if (
      violatedDirective.includes('script-src') ||
      violatedDirective.includes('object-src') ||
      blockedURI.includes('eval') ||
      blockedURI.includes('unsafe-inline')
    ) {
      return 'error'
    }

    // Medium-risk violations
    if (
      violatedDirective.includes('connect-src') ||
      violatedDirective.includes('frame-src')
    ) {
      return 'warning'
    }

    return 'info'
  }

  /**
   * Report violation to server
   */
  private async reportViolation(violation: CSPViolationEvent): Promise<void> {
    if (!this.config.reportEndpoint) {
      return
    }

    try {
      const reportData = {
        'csp-report': {
          'document-uri': violation.documentURI,
          'referrer': violation.referrer,
          'violated-directive': violation.violatedDirective,
          'effective-directive': violation.effectiveDirective,
          'original-policy': violation.originalPolicy,
          'disposition': 'enforce',
          'blocked-uri': violation.blockedURI,
          'line-number': violation.lineNumber,
          'column-number': violation.columnNumber,
          'source-file': violation.sourceFile,
          'status-code': violation.statusCode,
          'script-sample': violation.sample
        }
      }

      await fetch(this.config.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
      })
    } catch (error) {
      console.error('Failed to report CSP violation:', error)
    }
  }

  /**
   * Notify user of violation (optional)
   */
  private notifyUser(violation: CSPViolationEvent): void {
    // Only notify for serious violations
    if (this.getViolationSeverity(violation) === 'error') {
      // Could use a toast notification or modal
      console.warn('Security policy violation detected. Some features may not work properly.')
    }
  }

  /**
   * Monitor EmailJS initialization
   */
  private monitorEmailJSInit(): void {
    // Check if EmailJS is properly initialized
    const checkEmailJS = () => {
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        console.info('EmailJS initialized successfully')
      } else {
        setTimeout(checkEmailJS, 1000)
      }
    }

    setTimeout(checkEmailJS, 100)
  }

  /**
   * Set up global error boundary for CSP-related errors
   */
  private setupErrorBoundary(): void {
    window.addEventListener('error', (event) => {
      if (this.isCSPRelatedError(event.error)) {
        this.handleCSPError(event.error)
      }
    })

    window.addEventListener('unhandledrejection', (event) => {
      if (this.isCSPRelatedError(event.reason)) {
        this.handleCSPError(event.reason)
      }
    })
  }

  /**
   * Check if error is CSP-related
   */
  private isCSPRelatedError(error: any): boolean {
    if (!error || typeof error.message !== 'string') {
      return false
    }

    const message = error.message.toLowerCase()
    return (
      message.includes('content security policy') ||
      message.includes('csp') ||
      message.includes('refused to execute') ||
      message.includes('refused to load') ||
      message.includes('unsafe-eval') ||
      message.includes('unsafe-inline')
    )
  }

  /**
   * Handle CSP-related errors
   */
  private handleCSPError(error: any): void {
    console.error('CSP-related error detected:', error)

    // Report the error
    if (this.config.reportEndpoint) {
      this.reportCSPError(error)
    }

    // Provide user guidance
    this.provideErrorGuidance(error)
  }

  /**
   * Report CSP error to server
   */
  private async reportCSPError(error: any): Promise<void> {
    try {
      await fetch('/api/csp-error', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      })
    } catch (reportError) {
      console.error('Failed to report CSP error:', reportError)
    }
  }

  /**
   * Provide user guidance for CSP errors
   */
  private provideErrorGuidance(error: any): void {
    if (error.message.includes('emailjs') || error.message.includes('email')) {
      console.warn('EmailJS integration may be affected by CSP. Consider using alternative contact methods.')
    }
  }

  /**
   * Get monitoring statistics
   */
  public getStats(): { reportCount: number; uniqueViolations: number } {
    return {
      reportCount: this.reportCount,
      uniqueViolations: this.reportedViolations.size
    }
  }

  /**
   * Reset monitoring state
   */
  public reset(): void {
    this.reportCount = 0
    this.reportedViolations.clear()
  }
}

// Export singleton instance
export const cspMonitor = new CSPMonitor()

/**
 * Initialize CSP monitoring with custom configuration
 */
export function initCSPMonitoring(config?: CSPMonitorConfig): void {
  const monitor = new CSPMonitor(config)
  monitor.init()
}

/**
 * Helper function to check if CSP is enabled
 */
export function isCSPEnabled(): boolean {
  if (typeof document === 'undefined') {
    return false
  }

  // Check for CSP meta tags
  const metaCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
  if (metaCSP) {
    return true
  }

  // Check for CSP headers (requires server response)
  // This would typically be checked on the server side
  return false
}

/**
 * Helper function to test CSP compliance
 */
export function testCSPCompliance(): Promise<boolean> {
  return new Promise((resolve) => {
    let violationDetected = false

    const handleTestViolation = () => {
      violationDetected = true
      document.removeEventListener('securitypolicyviolation', handleTestViolation)
      resolve(false)
    }

    document.addEventListener('securitypolicyviolation', handleTestViolation)

    // Try to execute a simple inline script (should be blocked by CSP)
    try {
      eval('console.log("CSP test")')
    } catch (error) {
      // CSP is working if eval is blocked
    }

    // Clean up after test
    setTimeout(() => {
      document.removeEventListener('securitypolicyviolation', handleTestViolation)
      resolve(!violationDetected)
    }, 100)
  })
}