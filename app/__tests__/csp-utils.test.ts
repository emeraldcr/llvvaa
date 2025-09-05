import { describe, it, expect, beforeEach } from 'vitest'
import {
  generateNonce,
  buildCSPHeader,
  getCSPConfig,
  createCSPHeaders,
  validateCSPDirective,
  sanitizeCSPUrl,
  CSPConfig
} from '../../lib/csp-utils'

describe('CSP Utils', () => {
  describe('generateNonce', () => {
    it('should generate a base64 nonce', () => {
      const nonce = generateNonce()
      expect(nonce).toBeDefined()
      expect(typeof nonce).toBe('string')
      expect(nonce.length).toBeGreaterThan(0)
      // Base64 pattern check
      expect(nonce).toMatch(/^[A-Za-z0-9+/]*={0,2}$/)
    })

    it('should generate unique nonces', () => {
      const nonce1 = generateNonce()
      const nonce2 = generateNonce()
      expect(nonce1).not.toBe(nonce2)
    })
  })

  describe('buildCSPHeader', () => {
    it('should build a basic CSP header', () => {
      const config: CSPConfig = {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://example.com"]
      }
      
      const header = buildCSPHeader(config)
      expect(header).toContain("default-src 'self'")
      expect(header).toContain("script-src 'self' https://example.com")
    })

    it('should include nonce in script-src when provided', () => {
      const config: CSPConfig = {
        scriptSrc: ["'self'"]
      }
      const nonce = 'test-nonce-123'
      
      const header = buildCSPHeader(config, nonce)
      expect(header).toContain(`'nonce-${nonce}'`)
    })

    it('should handle report-uri directive', () => {
      const config: CSPConfig = {
        defaultSrc: ["'self'"],
        reportUri: '/api/csp-report'
      }
      
      const header = buildCSPHeader(config)
      expect(header).toContain('report-uri /api/csp-report')
    })

    it('should convert camelCase to kebab-case for directives', () => {
      const config: CSPConfig = {
        connectSrc: ["'self'"],
        imgSrc: ["'self'", "data:"]
      }
      
      const header = buildCSPHeader(config)
      expect(header).toContain('connect-src')
      expect(header).toContain('img-src')
    })
  })

  describe('getCSPConfig', () => {
    it('should return development config when isDevelopment is true', () => {
      const config = getCSPConfig(true)
      expect(config.scriptSrc).toContain("'unsafe-eval'")
    })

    it('should return production config when isDevelopment is false', () => {
      const config = getCSPConfig(false)
      expect(config.scriptSrc).not.toContain("'unsafe-eval'")
    })

    it('should return report-only config when isReportOnly is true', () => {
      const config = getCSPConfig(false, true)
      expect(config.reportUri).toBe('/api/csp-report')
    })
  })

  describe('createCSPHeaders', () => {
    it('should create Content-Security-Policy header by default', () => {
      const headers = createCSPHeaders(false)
      expect(headers['Content-Security-Policy']).toBeDefined()
      expect(headers['Content-Security-Policy-Report-Only']).toBeUndefined()
    })

    it('should create Content-Security-Policy-Report-Only header when isReportOnly is true', () => {
      const headers = createCSPHeaders(false, undefined, true)
      expect(headers['Content-Security-Policy-Report-Only']).toBeDefined()
      expect(headers['Content-Security-Policy']).toBeUndefined()
    })

    it('should include X-CSP-Nonce header when nonce is provided', () => {
      const nonce = 'test-nonce'
      const headers = createCSPHeaders(false, nonce)
      expect(headers['X-CSP-Nonce']).toBe(nonce)
    })
  })

  describe('validateCSPDirective', () => {
    it('should validate correct CSP directives', () => {
      expect(validateCSPDirective("script-src 'self'")).toBe(true)
      expect(validateCSPDirective("default-src 'none'")).toBe(true)
      expect(validateCSPDirective("connect-src https://api.example.com")).toBe(true)
    })

    it('should reject invalid CSP directives', () => {
      expect(validateCSPDirective("")).toBe(false)
      expect(validateCSPDirective("invalid")).toBe(false)
      expect(validateCSPDirective("script-src")).toBe(false)
    })
  })

  describe('sanitizeCSPUrl', () => {
    it('should sanitize valid HTTPS URLs', () => {
      expect(sanitizeCSPUrl('https://example.com')).toBe('https://example.com')
      expect(sanitizeCSPUrl('https://api.example.com:443')).toBe('https://api.example.com')
    })

    it('should sanitize valid HTTP URLs', () => {
      expect(sanitizeCSPUrl('http://localhost:3000')).toBe('http://localhost:3000')
    })

    it('should reject invalid protocols', () => {
      expect(sanitizeCSPUrl('javascript:alert(1)')).toBe(null)
      expect(sanitizeCSPUrl('data:text/html,<script>alert(1)</script>')).toBe(null)
      expect(sanitizeCSPUrl('ftp://example.com')).toBe(null)
    })

    it('should reject malformed URLs', () => {
      expect(sanitizeCSPUrl('not-a-url')).toBe(null)
      expect(sanitizeCSPUrl('')).toBe(null)
      expect(sanitizeCSPUrl('://example.com')).toBe(null)
    })
  })

  describe('CSP Policy Integration', () => {
    it('should generate complete development CSP header', () => {
      const nonce = generateNonce()
      const headers = createCSPHeaders(true, nonce)
      const cspHeader = headers['Content-Security-Policy']
      
      expect(cspHeader).toContain("'self'")
      expect(cspHeader).toContain("'unsafe-eval'")
      expect(cspHeader).toContain(`'nonce-${nonce}'`)
      expect(cspHeader).toContain('https://cdn.emailjs.com')
      expect(cspHeader).toContain('https://api.emailjs.com')
    })

    it('should generate complete production CSP header', () => {
      const nonce = generateNonce()
      const headers = createCSPHeaders(false, nonce)
      const cspHeader = headers['Content-Security-Policy']
      
      expect(cspHeader).toContain("'self'")
      expect(cspHeader).not.toContain("'unsafe-eval'")
      expect(cspHeader).toContain(`'nonce-${nonce}'`)
      expect(cspHeader).toContain('https://cdn.emailjs.com')
      expect(cspHeader).toContain('https://api.emailjs.com')
    })

    it('should handle EmailJS-specific requirements', () => {
      const config = getCSPConfig(false)
      
      // Should allow EmailJS CDN
      expect(config.scriptSrc).toContain('https://cdn.emailjs.com')
      
      // Should allow EmailJS API
      expect(config.connectSrc).toContain('https://api.emailjs.com')
      
      // Should not allow unsafe-eval in production
      expect(config.scriptSrc).not.toContain("'unsafe-eval'")
    })
  })

  describe('Environment-specific configurations', () => {
    it('should have different policies for development and production', () => {
      const devConfig = getCSPConfig(true)
      const prodConfig = getCSPConfig(false)
      
      // Development should be more permissive
      expect(devConfig.scriptSrc?.length).toBeGreaterThan(prodConfig.scriptSrc?.length || 0)
      expect(devConfig.connectSrc?.length).toBeGreaterThan(prodConfig.connectSrc?.length || 0)
    })

    it('should include WebSocket support in development', () => {
      const devConfig = getCSPConfig(true)
      
      expect(devConfig.connectSrc).toContain('ws://localhost:*')
      expect(devConfig.connectSrc).toContain('wss://localhost:*')
    })

    it('should not include WebSocket support in production', () => {
      const prodConfig = getCSPConfig(false)
      
      expect(prodConfig.connectSrc).not.toContain('ws://localhost:*')
      expect(prodConfig.connectSrc).not.toContain('wss://localhost:*')
    })
  })
})