/**
 * CSP Error Reporting API Route
 * 
 * This endpoint receives and processes CSP-related JavaScript errors
 * that occur in the browser. It complements the CSP violation reporting
 * by capturing runtime errors caused by CSP restrictions.
 */

import { NextRequest, NextResponse } from 'next/server'

interface CSPErrorReport {
  message: string
  stack?: string
  timestamp: string
  userAgent: string
  url: string
  additionalInfo?: Record<string, any>
}

/**
 * Validates if the error report has the expected structure
 */
function isValidErrorReport(data: any): data is CSPErrorReport {
  return (
    data &&
    typeof data === 'object' &&
    typeof data.message === 'string' &&
    typeof data.timestamp === 'string' &&
    typeof data.userAgent === 'string' &&
    typeof data.url === 'string'
  )
}

/**
 * Sanitizes error data to prevent log injection and limit size
 */
function sanitizeErrorData(report: CSPErrorReport): Record<string, any> {
  return {
    message: report.message.substring(0, 1000),
    stack: report.stack?.substring(0, 2000) || '',
    timestamp: report.timestamp,
    userAgent: report.userAgent.substring(0, 500),
    url: report.url.substring(0, 500),
    additionalInfo: report.additionalInfo ? 
      JSON.stringify(report.additionalInfo).substring(0, 500) : ''
  }
}

/**
 * Determines if this is a CSP-related error
 */
function isCSPRelatedError(message: string): boolean {
  const cspKeywords = [
    'content security policy',
    'refused to execute',
    'refused to load',
    'unsafe-eval',
    'unsafe-inline',
    'csp',
    'eval',
    'violates the following content security policy'
  ]
  
  const lowerMessage = message.toLowerCase()
  return cspKeywords.some(keyword => lowerMessage.includes(keyword))
}

/**
 * Categorizes the CSP error
 */
function categorizeCSPError(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('eval') || lowerMessage.includes('unsafe-eval')) {
    return 'eval-blocked'
  }
  
  if (lowerMessage.includes('inline') || lowerMessage.includes('unsafe-inline')) {
    return 'inline-script-blocked'
  }
  
  if (lowerMessage.includes('refused to load')) {
    return 'resource-blocked'
  }
  
  if (lowerMessage.includes('emailjs') || lowerMessage.includes('email')) {
    return 'emailjs-integration'
  }
  
  return 'other-csp-error'
}

/**
 * Logs CSP error with appropriate context
 */
function logCSPError(sanitizedData: Record<string, any>, category: string): void {
  const logEntry = {
    level: 'error',
    type: 'csp-runtime-error',
    category,
    ...sanitizedData
  }
  
  console.error('[CSP ERROR]', logEntry)
}

/**
 * Stores error data for analysis
 */
async function storeCSPError(sanitizedData: Record<string, any>): Promise<void> {
  // In development, log to file
  if (process.env.NODE_ENV === 'development') {
    try {
      const fs = await import('fs/promises')
      const path = await import('path')
      
      const logDir = path.join(process.cwd(), '.logs')
      const logFile = path.join(logDir, 'csp-errors.log')
      
      // Ensure log directory exists
      try {
        await fs.mkdir(logDir, { recursive: true })
      } catch (err) {
        // Directory might already exist
      }
      
      const logEntry = JSON.stringify(sanitizedData) + '\n'
      await fs.appendFile(logFile, logEntry)
    } catch (error) {
      console.error('Failed to store CSP error:', error)
    }
  }
  
  // In production, you might want to:
  // 1. Send to error tracking service (Sentry, Bugsnag, etc.)
  // 2. Store in database
  // 3. Send to monitoring dashboard
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse the error report
    const data = await request.json()
    
    // Validate the report structure
    if (!isValidErrorReport(data)) {
      return NextResponse.json(
        { error: 'Invalid error report format' },
        { status: 400 }
      )
    }
    
    // Check if this is actually a CSP-related error
    if (!isCSPRelatedError(data.message)) {
      return NextResponse.json(
        { status: 'not-csp-related' },
        { status: 200 }
      )
    }
    
    // Sanitize the error data
    const sanitizedData = sanitizeErrorData(data)
    
    // Categorize the error
    const category = categorizeCSPError(data.message)
    
    // Log the error
    logCSPError(sanitizedData, category)
    
    // Store the error for analysis
    await storeCSPError({ ...sanitizedData, category })
    
    // Return success response with category
    return NextResponse.json({ 
      status: 'received',
      category 
    }, { status: 200 })
    
  } catch (error) {
    console.error('Error processing CSP error report:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle GET requests for health checks
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    endpoint: 'CSP Error Reporter',
    status: 'active',
    timestamp: new Date().toISOString(),
    accepts: ['csp-runtime-errors']
  })
}