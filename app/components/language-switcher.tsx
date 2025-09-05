'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useCallback } from 'react'
import { Button } from './ui/button'
import { ChevronDown, Globe, Check } from 'lucide-react'
import { locales } from '../../lib/i18n'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'default' | 'compact' | 'mobile'
}

export default function LanguageSwitcher({
  className = '',
  variant = 'default',
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentLocale = useLocale()
  const t = useTranslations('common.language')

  const languages = [
    { code: 'es', name: 'Español', flag: '🇨🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) ?? languages[0]

  const constructLocalePath = useCallback((locale: string, currentPath: string): string => {
    // Handle root path
    if (currentPath === '/' || currentPath === '') {
      return `/${locale}`
    }

    // Remove leading slash for processing
    const pathWithoutSlash = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath
    const segments = pathWithoutSlash.split('/').filter(Boolean)
    
    // Check if first segment is a locale
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      // Replace existing locale
      segments[0] = locale
    } else {
      // No locale in path, prepend new locale
      segments.unshift(locale)
    }
    
    // Construct path ensuring single leading slash
    return `/${segments.join('/')}`
  }, [])

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false)
      return
    }

    try {
      const newPath = constructLocalePath(newLocale, pathname)
      
      // Preserve search parameters
      const query = searchParams.toString()
      const fullPath = query ? `${newPath}?${query}` : newPath
      
      // Validate the constructed path
      if (newPath && !newPath.includes('//')) {
        router.push(fullPath)
      } else {
        // Fallback to simple locale path if construction fails
        const fallbackPath = query ? `/${newLocale}?${query}` : `/${newLocale}`
        router.push(fallbackPath)
      }
    } catch (error) {
      console.warn('Error switching language:', error)
      // Final fallback
      router.push(`/${newLocale}`)
    }
    
    setIsOpen(false)
  }

  // --- Compact variant ---
  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="flex items-center space-x-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full px-3 py-1"
        >
          <span className="text-sm">{currentLanguage.flag}</span>
          <span className="text-xs font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full right-0 mt-2 z-20">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl py-2 min-w-[120px]">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => switchLanguage(language.code)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-white/10 transition-colors duration-200 ${
                      language.code === currentLocale
                        ? 'text-cyan-400'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span className="text-sm">{language.flag}</span>
                    <span className="text-sm font-medium">{language.name}</span>
                    {language.code === currentLocale && (
                      <Check className="w-3 h-3 text-cyan-400 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  // --- Mobile variant ---
  if (variant === 'mobile') {
    return (
      <div className={className}>
        <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/90">
              {t('switchTo')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-200 ${
                  language.code === currentLocale
                    ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-400'
                    : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">{language.name}</span>
                  <span className="text-xs opacity-60">
                    {language.code.toUpperCase()}
                  </span>
                </div>
                {language.code === currentLocale && (
                  <Check className="w-4 h-4 text-cyan-400 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // --- Default variant ---
  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center space-x-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLanguage.name}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 z-20">
            <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl py-2 min-w-[160px]">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => switchLanguage(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 ${
                    language.code === currentLocale
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-xs opacity-60">
                      {language.code.toUpperCase()}
                    </span>
                  </div>
                  {language.code === currentLocale && (
                    <Check className="w-4 h-4 text-cyan-400 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
