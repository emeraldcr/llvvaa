/**
 * Enhanced toast notifications for i18n errors
 */

import { toast } from 'sonner'
import { ErrorType } from '../components/locale-error-boundary'

export interface I18nToastOptions {
  duration?: number
  enableActions?: boolean
  onRetry?: () => void
  onSwitchLocale?: () => void
}

export class I18nToast {
  private static defaultOptions: I18nToastOptions = {
    duration: 5000,
    enableActions: true
  }

  static showErrorToast(errorType: ErrorType, options: I18nToastOptions = {}) {
    const mergedOptions = { ...this.defaultOptions, ...options }

    switch (errorType) {
      case ErrorType.NETWORK_ERROR:
        toast.error('🌐 Connection Problem', {
          description: 'Unable to load language files. Retrying...',
          duration: mergedOptions.duration,
          action: mergedOptions.enableActions && mergedOptions.onRetry ? {
            label: 'Retry Now',
            onClick: mergedOptions.onRetry
          } : undefined
        })
        break

      case ErrorType.FILE_NOT_FOUND:
        toast.error('📁 Language Files Missing', {
          description: 'Switching to default language...',
          duration: mergedOptions.duration
        })
        break

      case ErrorType.MISSING_KEYS:
        toast.warning('🔤 Some Translations Missing', {
          description: 'Displaying fallback text.',
          duration: mergedOptions.duration,
          action: mergedOptions.enableActions && mergedOptions.onSwitchLocale ? {
            label: 'Switch Language',
            onClick: mergedOptions.onSwitchLocale
          } : undefined
        })
        break

      default:
        toast.error('❌ Language Error', {
          description: 'Something went wrong with language settings.',
          duration: mergedOptions.duration
        })
        break
    }
  }

  static showRecoverySuccess(strategy: string) {
    const messages = {
      'cached_translations': 'Using cached translations',
      'fallback_locale': 'Switched to default language',
      'progressive_retry': 'Connection restored'
    }
    
    toast.success('✅ Recovered', {
      description: messages[strategy] || 'Error resolved',
      duration: 3000
    })
  }

  static showProgressToast(attempt: number, maxAttempts: number) {
    toast.loading(`🔄 Retry ${attempt}/${maxAttempts}`, {
      description: 'Attempting to recover...',
      duration: 3000
    })
  }
}

export default I18nToast