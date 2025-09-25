/**
 * CSP Violation Reporting API Route
 * 
 * This endpoint receives and processes Content Security Policy violation reports
 * sent by the browser when CSP violations occur. It logs violations for monitoring
 * and analysis to help improve the CSP policy.
 */

import { NextRequest, NextResponse } from 'next/server'

interface CSPViolationReport {
  'csp-report': {
    'document-uri': string
    'referrer': string
    'violated-directive': string
    'effective-directive': string
    'original-policy': string
    'disposition': string
    'blocked-uri': string
    'line-number': number
    'column-number': number
    'source-file': string
    'status-code': number
    'script-sample': string
  }
}

/**
 * Validates if the violation report has the expected structure
 */
function isValidCSPReport(data: any): data is CSPViolationReport {
  return (
    data &&
    typeof data === 'object' &&
    data['csp-report'] &&
    typeof data['csp-report'] === 'object' &&
    typeof data['csp-report']['violated-directive'] === 'string'
  )
}

/**
 * Sanitizes violation data to prevent log injection
 */
function sanitizeViolationData(report: CSPViolationReport): Record<string, any> {
  const cspReport = report['csp-report']
  
  return {
    timestamp: new Date().toISOString(),
    documentUri: cspReport['document-uri']?.substring(0, 500) || '',
    referrer: cspReport['referrer']?.substring(0, 500) || '',
    violatedDirective: cspReport['violated-directive']?.substring(0, 100) || '',
    effectiveDirective: cspReport['effective-directive']?.substring(0, 100) || '',
    blockedUri: cspReport['blocked-uri']?.substring(0, 500) || '',
    lineNumber: Number(cspReport['line-number']) || 0,
    columnNumber: Number(cspReport['column-number']) || 0,
    sourceFile: cspReport['source-file']?.substring(0, 500) || '',
    statusCode: Number(cspReport['status-code']) || 0,
    scriptSample: cspReport['script-sample']?.substring(0, 200) || '',
    disposition: cspReport['disposition']?.substring(0, 50) || 'enforce',
    userAgent: '',
    ip: ''
  }
}

/**
 * Determines if a violation should be ignored based on common false positives
 */
function shouldIgnoreViolation(sanitizedReport: Record<string, any>): boolean {
  const { violatedDirective, blockedUri, sourceFile } = sanitizedReport
  
  // Ignore browser extension violations
  if (
    blockedUri.startsWith('chrome-extension://') ||
    blockedUri.startsWith('moz-extension://') ||
    blockedUri.startsWith('safari-extension://') ||
    blockedUri.startsWith('edge-extension://')
  ) {
    return true
  }
  
  // Ignore known browser internal violations
  if (
    blockedUri.includes('google-analytics.com/analytics.js') ||
    blockedUri.includes('googletagmanager.com') ||
    sourceFile.includes('chrome-extension') ||
    sourceFile.includes('moz-extension')
  ) {
    return true
  }
  
  // Ignore common ad-blocker or privacy tool violations
  if (
    violatedDirective.includes('script-src') &&
    (blockedUri.includes('data:') || blockedUri === 'inline')
  ) {
    // Allow legitimate inline scripts with nonce
    return false
  }
  
  return false
}

/**
 * Logs CSP violation with appropriate severity level
 */
function logViolation(sanitizedReport: Record<string, any>): void {
  const { violatedDirective, blockedUri, sourceFile } = sanitizedReport
  
  // Determine severity level
  let severity = 'info'
  if (violatedDirective.includes('script-src') || violatedDirective.includes('object-src')) {
    severity = 'warning'
  }
  if (blockedUri.includes('eval') || blockedUri.includes('unsafe-inline')) {
    severity = 'error'
  }
  
  const logMessage = {
    level: severity,
    message: 'CSP Violation Detected',
    ...sanitizedReport
  }
  
  // In production, you might want to use a proper logging service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to logging service like DataDog, LogRocket, etc.
    console.error('[CSP VIOLATION]', JSON.stringify(logMessage))
  } else {
    console.warn('[CSP VIOLATION]', logMessage)
  }
}

/**
 * Stores violation data for analysis (implement based on your needs)
 */
async function storeViolation(sanitizedReport: Record<string, any>): Promise<void> {
  // In a real application, you might want to:
  // 1. Store in a database for analysis
  // 2. Send to monitoring services (DataDog, New Relic, etc.)
  // 3. Aggregate violations for reporting
  // 4. Trigger alerts for critical violations
  
  // Example: Simple file-based storage for development
  if (process.env.NODE_ENV === 'development') {
    try {
      const fs = await import('fs/promises')
      const path = await import('path')
      
      const logDir = path.join(process.cwd(), '.logs')
      const logFile = path.join(logDir, 'csp-violations.log')
      
      // Ensure log directory exists
      try {
        await fs.mkdir(logDir, { recursive: true })
      } catch (err) {
        // Directory might already exist
      }
      
      const logEntry = JSON.stringify(sanitizedReport) + '\n'
      await fs.appendFile(logFile, logEntry)
    } catch (error) {
      console.error('Failed to store CSP violation:', error)
    }
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse the violation report
    const data = await request.json()
    
    // Validate the report structure
    if (!isValidCSPReport(data)) {
      return NextResponse.json(
        { error: 'Invalid CSP report format' },
        { status: 400 }
      )
    }
    
    // Extract request metadata
    const userAgent = request.headers.get('user-agent') || ''
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown'
    
    // Sanitize the violation data
    const sanitizedReport = sanitizeViolationData(data)
    sanitizedReport.userAgent = userAgent.substring(0, 500)
    sanitizedReport.ip = ip.substring(0, 45) // IPv6 max length
    
    // Check if this violation should be ignored
    if (shouldIgnoreViolation(sanitizedReport)) {
      return NextResponse.json({ status: 'ignored' }, { status: 200 })
    }
    
    // Log the violation
    logViolation(sanitizedReport)
    
    // Store the violation for analysis
    await storeViolation(sanitizedReport)
    
    return NextResponse.json({ status: 'received' }, { status: 200 })
    
  } catch (error) {
    console.error('Error processing CSP violation report:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Also handle GET requests for health checks
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    endpoint: 'CSP Violation Reporter',
    status: 'active',
    timestamp: new Date().toISOString()
  })
}