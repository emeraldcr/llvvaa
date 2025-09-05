/**
 * Demo page to showcase enhanced internationalization error handling
 */

import React from 'react'
import { LocaleErrorBoundary, ErrorType } from '../components/locale-error-boundary'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

// Component that simulates different types of errors
const ErrorSimulator = ({ errorType }: { errorType: ErrorType }) => {
  const simulateError = () => {
    const errorMessages = {
      [ErrorType.NETWORK_ERROR]: 'Loading chunk failed. Network error occurred',
      [ErrorType.FILE_NOT_FOUND]: 'Cannot resolve module "../messages/fr.json"',
      [ErrorType.PARSE_ERROR]: 'Unexpected token } in JSON at position 45',
      [ErrorType.HYDRATION_MISMATCH]: 'Hydration failed because the initial UI does not match what was rendered on the server',
      [ErrorType.MISSING_KEYS]: 'Translation key "complex.nested.missing" not found',
      [ErrorType.UNKNOWN]: 'Unknown error occurred in component'
    }
    
    throw new Error(errorMessages[errorType])
  }

  React.useEffect(() => {
    simulateError()
  }, [errorType])

  return <div>This should not render</div>
}

const ErrorDemoPage = () => {
  const [errorType, setErrorType] = React.useState<ErrorType | null>(null)
  const [key, setKey] = React.useState(0)

  const handleSimulateError = (type: ErrorType) => {
    setErrorType(type)
    setKey(prev => prev + 1) // Force re-render
  }

  const handleReset = () => {
    setErrorType(null)
    setKey(prev => prev + 1)
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Enhanced I18n Error Handling Demo
        </h1>
        <p className="text-gray-600">
          Test the enhanced error boundary with different error types and recovery mechanisms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Error Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={() => handleSimulateError(ErrorType.NETWORK_ERROR)}
              className="w-full"
              variant="destructive"
            >
              🌐 Network Error
            </Button>
            
            <Button 
              onClick={() => handleSimulateError(ErrorType.FILE_NOT_FOUND)}
              className="w-full"
              variant="destructive"
            >
              📁 File Not Found
            </Button>
            
            <Button 
              onClick={() => handleSimulateError(ErrorType.PARSE_ERROR)}
              className="w-full"
              variant="destructive"
            >
              ⚠️ Parse Error
            </Button>
            
            <Button 
              onClick={() => handleSimulateError(ErrorType.HYDRATION_MISMATCH)}
              className="w-full"
              variant="destructive"
            >
              🔄 Hydration Error
            </Button>
            
            <Button 
              onClick={() => handleSimulateError(ErrorType.MISSING_KEYS)}
              className="w-full"
              variant="destructive"
            >
              🔤 Missing Keys
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features Demonstrated</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>✅ Error type classification</li>
              <li>✅ Progressive retry with exponential backoff</li>
              <li>✅ Smart caching mechanisms</li>
              <li>✅ Contextual error messages</li>
              <li>✅ Analytics and monitoring</li>
              <li>✅ Recovery suggestions</li>
              <li>✅ Toast notifications</li>
              <li>✅ Fallback locale switching</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Error Boundary Demo Area</CardTitle>
          <div className="flex gap-2">
            <Button onClick={handleReset} variant="outline" size="sm">
              Reset Demo
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <LocaleErrorBoundary 
            key={key}
            maxRetries={3}
            enableAnalytics={true}
            onError={(errorState) => {
              console.log('Demo: Error caught:', errorState)
            }}
          >
            {errorType ? (
              <ErrorSimulator errorType={errorType} />
            ) : (
              <div className="text-center p-8 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ✅ No Errors
                </h3>
                <p className="text-green-600">
                  The error boundary is active and ready to catch errors. 
                  Click a button above to simulate different error types.
                </p>
              </div>
            )}
          </LocaleErrorBoundary>
        </CardContent>
      </Card>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">💡 How it works:</h3>
        <ol className="text-sm space-y-1 list-decimal list-inside">
          <li>Click an error type button to simulate that specific error</li>
          <li>Watch the enhanced error boundary classify and handle the error</li>
          <li>See contextual error messages, recovery suggestions, and user actions</li>
          <li>Observe automatic retry mechanisms and fallback strategies</li>
          <li>Check browser console for analytics tracking</li>
          <li>Test recovery buttons and locale switching functionality</li>
        </ol>
      </div>
    </div>
  )
}

export default ErrorDemoPage