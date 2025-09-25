/**
 * Generates a cryptographically secure nonce for CSP headers
 * Uses Web Crypto API which is available in both Node.js and Edge Runtime
 * @returns A base64-encoded nonce string
 */
export function generateNonce(): string {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // Use Web Crypto API (available in Edge Runtime)
    const array = new Uint8Array(16)
    crypto.getRandomValues(array)
    return btoa(String.fromCharCode.apply(null, Array.from(array)))
  } else {
    // Fallback for environments without Web Crypto API
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    let result = ''
    for (let i = 0; i < 22; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }
}

/**
 * CSP directive configuration interface
 */
export interface CSPConfig {
  defaultSrc?: string[]
  scriptSrc?: string[]
  styleSrc?: string[]
  connectSrc?: string[]
  imgSrc?: string[]
  fontSrc?: string[]
  frameSrc?: string[]
  objectSrc?: string[]
  mediaSrc?: string[]
  workerSrc?: string[]
  childSrc?: string[]
  formAction?: string[]
  baseUri?: string[]
  manifestSrc?: string[]
  reportUri?: string
  reportTo?: string
}

/**
 * Environment-specific CSP configurations
 */
export const CSP_CONFIGS = {
  development: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-eval'", // Allow eval in development for hot reload
      "'unsafe-inline'", // Allow inline scripts in development
      "https://cdn.emailjs.com",
      "localhost:*",
      "ws://localhost:*", // WebSocket for hot reload
      "wss://localhost:*"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS
      "https://fonts.googleapis.com"
    ],
    connectSrc: [
      "'self'",
      "https://api.emailjs.com",
      "localhost:*",
      "ws://localhost:*",
      "wss://localhost:*"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:",
      "http://localhost:*"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com",
      "data:"
    ],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    workerSrc: [
      "'self'",
      "blob:" // Required for Web Workers
    ],
    manifestSrc: ["'self'"]
  } as CSPConfig,

  production: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "https://cdn.emailjs.com"
      // Note: 'unsafe-eval' removed for production security
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS
      "https://fonts.googleapis.com"
    ],
    connectSrc: [
      "'self'",
      "https://api.emailjs.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com",
      "data:"
    ],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    workerSrc: [
      "'self'",
      "blob:"
    ],
    manifestSrc: ["'self'"]
  } as CSPConfig,

  reportOnly: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-eval'",
      "'unsafe-inline'",
      "https://cdn.emailjs.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com"
    ],
    connectSrc: [
      "'self'",
      "https://api.emailjs.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com",
      "data:"
    ],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    workerSrc: [
      "'self'",
      "blob:"
    ],
    manifestSrc: ["'self'"],
    reportUri: "/api/csp-report"
  } as CSPConfig
}

/**
 * Builds a CSP header string from configuration
 * @param config CSP configuration object
 * @param nonce Optional nonce to include in script-src
 * @returns Formatted CSP header string
 */
export function buildCSPHeader(config: CSPConfig, nonce?: string): string {
  const directives: string[] = []

  // Add nonce to script-src if provided
  if (nonce && config.scriptSrc) {
    config.scriptSrc = [...config.scriptSrc, `'nonce-${nonce}'`]
  }

  // Convert config to CSP directives
  Object.entries(config).forEach(([key, value]) => {
    if (key === 'reportUri' && typeof value === 'string') {
      directives.push(`report-uri ${value}`)
      return
    }
    
    if (key === 'reportTo' && typeof value === 'string') {
      directives.push(`report-to ${value}`)
      return
    }

    if (Array.isArray(value) && value.length > 0) {
      const directiveName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      directives.push(`${directiveName} ${value.join(' ')}`)
    }
  })

  return directives.join('; ')
}

/**
 * Gets the appropriate CSP configuration based on environment
 * @param isDevelopment Whether the app is in development mode
 * @param isReportOnly Whether to use report-only mode
 * @returns CSP configuration object
 */
export function getCSPConfig(isDevelopment: boolean, isReportOnly = false): CSPConfig {
  if (isReportOnly) {
    return CSP_CONFIGS.reportOnly
  }
  
  return isDevelopment ? CSP_CONFIGS.development : CSP_CONFIGS.production
}

/**
 * Creates CSP headers for Next.js middleware
 * @param isDevelopment Whether the app is in development mode
 * @param nonce Optional nonce for script security
 * @param isReportOnly Whether to use report-only mode for monitoring
 * @returns Object with CSP headers
 */
export function createCSPHeaders(
  isDevelopment: boolean, 
  nonce?: string, 
  isReportOnly = false
): Record<string, string> {
  const config = getCSPConfig(isDevelopment, isReportOnly)
  const cspHeader = buildCSPHeader(config, nonce)
  
  const headerName = isReportOnly 
    ? 'Content-Security-Policy-Report-Only'
    : 'Content-Security-Policy'
  
  return {
    [headerName]: cspHeader,
    // Add nonce to response headers for use in components
    ...(nonce && { 'X-CSP-Nonce': nonce })
  }
}

/**
 * Validates if a CSP directive is properly formatted
 * @param directive CSP directive string
 * @returns Boolean indicating if directive is valid
 */
export function validateCSPDirective(directive: string): boolean {
  // Basic validation for CSP directive format
  const validDirectivePattern = /^[a-z-]+\s+[^;]+$/
  return validDirectivePattern.test(directive.trim())
}

/**
 * Sanitizes a URL for use in CSP directives
 * @param url URL to sanitize
 * @returns Sanitized URL or null if invalid
 */
export function sanitizeCSPUrl(url: string): string | null {
  try {
    const parsed = new URL(url)
    // Only allow https and http protocols
    if (!['https:', 'http:'].includes(parsed.protocol)) {
      return null
    }
    return parsed.origin
  } catch {
    return null
  }
}