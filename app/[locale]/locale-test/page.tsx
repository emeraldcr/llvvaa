'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { LocaleDebugger, clientDebugHelpers } from '../../../lib/locale-debug'
import { locales } from '../../../lib/i18n'

export default function LocaleTestPage() {
  const locale = useLocale()
  const t = useTranslations('common')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const [debugLogs, setDebugLogs] = useState<any[]>([])
  const [testResults, setTestResults] = useState<any>({})

  useEffect(() => {
    // Log current state
    clientDebugHelpers.logCurrentState()
    setDebugLogs(LocaleDebugger.getLogs())
    
    // Run validation tests
    const results = {
      currentLocale: LocaleDebugger.validateLocale(locale),
      pathValidation: LocaleDebugger.validatePath(pathname),
      messagesLoaded: !!t,
      availableLocales: locales,
      currentPath: pathname,
      searchParams: searchParams.toString()
    }
    setTestResults(results)
  }, [locale, pathname, searchParams, t])

  const testLanguageSwitch = (newLocale: string) => {
    const query = searchParams.toString()
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    const fullPath = query ? `${newPath}?${query}` : newPath
    router.push(fullPath)
  }

  const runDiagnostics = () => {
    const report = LocaleDebugger.generateDebugReport()
    console.log('🔍 Full Diagnostic Report:', report)
    alert('Diagnostic report generated - check browser console')
  }

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8\">
      <div className=\"max-w-6xl mx-auto space-y-8\">
        <div className=\"text-center\">
          <h1 className=\"text-3xl font-bold text-gray-900 mb-2\">Locale Testing & Debugging</h1>
          <p className=\"text-gray-600\">Current Locale: <span className=\"font-mono text-blue-600\">{locale}</span></p>
        </div>

        {/* Current Status */}
        <Card className=\"p-6\">
          <h2 className=\"text-xl font-semibold mb-4\">Current Status</h2>
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
            <div>
              <h3 className=\"font-medium text-gray-700\">Locale Validation</h3>
              <p className={`text-sm ${testResults.currentLocale?.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {testResults.currentLocale?.message}
              </p>
            </div>
            <div>
              <h3 className=\"font-medium text-gray-700\">Path Validation</h3>
              <p className={`text-sm ${testResults.pathValidation?.isValid ? 'text-green-600' : 'text-red-600'}`}>
                {testResults.pathValidation?.message}
              </p>
            </div>
            <div>
              <h3 className=\"font-medium text-gray-700\">Messages</h3>
              <p className={`text-sm ${testResults.messagesLoaded ? 'text-green-600' : 'text-red-600'}`}>
                {testResults.messagesLoaded ? 'Loaded successfully' : 'Failed to load'}
              </p>
            </div>
            <div>
              <h3 className=\"font-medium text-gray-700\">Current Path</h3>
              <p className=\"text-sm font-mono text-gray-600\">{testResults.currentPath}</p>
            </div>
          </div>
        </Card>

        {/* Language Switching Test */}
        <Card className=\"p-6\">
          <h2 className=\"text-xl font-semibold mb-4\">Language Switching Test</h2>
          <div className=\"flex gap-4 mb-4\">
            {locales.map(loc => (
              <Button
                key={loc}
                onClick={() => testLanguageSwitch(loc)}
                variant={loc === locale ? 'default' : 'outline'}
                className=\"capitalize\"
              >
                {loc === 'es' ? 'Español' : 'English'} ({loc})
              </Button>
            ))}
          </div>
          <p className=\"text-sm text-gray-600\">
            Test translation: {t?.buttons?.loading || 'Translation not found'}
          </p>
        </Card>

        {/* Debug Actions */}
        <Card className=\"p-6\">
          <h2 className=\"text-xl font-semibold mb-4\">Debug Actions</h2>
          <div className=\"flex gap-4\">
            <Button onClick={runDiagnostics} variant=\"outline\">
              Run Full Diagnostics
            </Button>
            <Button onClick={clientDebugHelpers.exportDebugData} variant=\"outline\">
              Export Debug Data
            </Button>
            <Button onClick={clientDebugHelpers.showDebugModal} variant=\"outline\">
              Show Debug Modal
            </Button>
            <Button onClick={() => LocaleDebugger.clearLogs()} variant=\"outline\">
              Clear Logs
            </Button>
          </div>
        </Card>

        {/* Recent Logs */}
        <Card className=\"p-6\">
          <h2 className=\"text-xl font-semibold mb-4\">Recent Debug Logs ({debugLogs.length})</h2>
          <div className=\"space-y-2 max-h-96 overflow-auto\">
            {debugLogs.slice(-10).reverse().map((log, index) => (
              <div key={index} className=\"bg-gray-50 p-3 rounded text-sm font-mono\">
                <div className=\"text-gray-500\">{new Date(log.timestamp).toLocaleTimeString()}</div>
                <div>Locale: {log.currentLocale} | Path: {log.pathname}</div>
              </div>
            ))}
            {debugLogs.length === 0 && (
              <div className=\"text-gray-500 text-center py-4\">No debug logs available</div>
            )}
          </div>
        </Card>

        {/* Available Locales */}
        <Card className=\"p-6\">
          <h2 className=\"text-xl font-semibold mb-4\">Configuration</h2>
          <div className=\"space-y-2 text-sm\">
            <div><strong>Available Locales:</strong> {testResults.availableLocales?.join(', ')}</div>
            <div><strong>Default Locale:</strong> es</div>
            <div><strong>Environment:</strong> {process.env.NODE_ENV}</div>
          </div>
        </Card>
      </div>
    </div>
  )
}