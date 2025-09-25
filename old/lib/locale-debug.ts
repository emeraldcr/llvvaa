/**
 * Locale Debugging Utilities
 * This utility provides debugging tools to help identify and fix locale-related issues
 */

import { locales, defaultLocale } from './i18n';

export interface LocaleDebugInfo {
  currentLocale: string;
  availableLocales: string[];
  defaultLocale: string;
  pathname: string;
  searchParams?: string;
  timestamp: number;
}

export class LocaleDebugger {
  private static logs: LocaleDebugInfo[] = [];

  static log(info: Partial<LocaleDebugInfo>) {
    const debugInfo: LocaleDebugInfo = {
      currentLocale: info.currentLocale || 'unknown',
      availableLocales: locales,
      defaultLocale,
      pathname: info.pathname || '',
      searchParams: info.searchParams || '',
      timestamp: Date.now()
    };

    this.logs.push(debugInfo);
    
    // Keep only last 50 entries
    if (this.logs.length > 50) {
      this.logs = this.logs.slice(-50);
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Locale Debug:', debugInfo);
    }
  }

  static getLogs(): LocaleDebugInfo[] {
    return [...this.logs];
  }

  static clearLogs(): void {
    this.logs = [];
  }

  static validateLocale(locale: string): {
    isValid: boolean;
    message: string;
  } {
    if (!locale) {
      return {
        isValid: false,
        message: 'Locale is empty or undefined'
      };
    }

    if (typeof locale !== 'string') {
      return {
        isValid: false,
        message: `Locale must be a string, received: ${typeof locale}`
      };
    }

    if (!locales.includes(locale as any)) {
      return {
        isValid: false,
        message: `Locale '${locale}' is not in supported locales: [${locales.join(', ')}]`
      };
    }

    return {
      isValid: true,
      message: `Locale '${locale}' is valid`
    };
  }

  static validatePath(path: string): {
    isValid: boolean;
    extractedLocale: string | null;
    message: string;
  } {
    if (!path || path === '/') {
      return {
        isValid: true,
        extractedLocale: null,
        message: 'Root path detected'
      };
    }

    const segments = path.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (!firstSegment) {
      return {
        isValid: true,
        extractedLocale: null,
        message: 'Empty path'
      };
    }

    const localeValidation = this.validateLocale(firstSegment);
    
    if (localeValidation.isValid) {
      return {
        isValid: true,
        extractedLocale: firstSegment,
        message: `Valid locale '${firstSegment}' found in path`
      };
    }

    return {
      isValid: false,
      extractedLocale: null,
      message: `First segment '${firstSegment}' is not a valid locale`
    };
  }

  static generateDebugReport(): string {
    const report = {
      configuration: {
        supportedLocales: locales,
        defaultLocale,
        environment: process.env.NODE_ENV
      },
      logs: this.logs.slice(-10), // Last 10 logs
      timestamp: new Date().toISOString()
    };

    return JSON.stringify(report, null, 2);
  }
}

// Browser-only debugging helpers
export const clientDebugHelpers = {
  logCurrentState: () => {
    if (typeof window !== 'undefined') {
      LocaleDebugger.log({
        pathname: window.location.pathname,
        searchParams: window.location.search,
        currentLocale: document.documentElement.lang || 'unknown'
      });
    }
  },

  exportDebugData: () => {
    if (typeof window !== 'undefined') {
      const report = LocaleDebugger.generateDebugReport();
      const blob = new Blob([report], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `locale-debug-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  },

  showDebugModal: () => {
    if (typeof window !== 'undefined') {
      const report = LocaleDebugger.generateDebugReport();
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 2px solid #333;
        padding: 20px;
        max-width: 80vw;
        max-height: 80vh;
        overflow: auto;
        z-index: 10000;
        font-family: monospace;
        font-size: 12px;
      `;
      modal.innerHTML = `
        <h3>Locale Debug Report</h3>
        <button onclick="this.parentElement.remove()" style="float: right;">Close</button>
        <pre>${report}</pre>
      `;
      document.body.appendChild(modal);
    }
  }
};

// Add global debug helpers in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).localeDebug = clientDebugHelpers;
}