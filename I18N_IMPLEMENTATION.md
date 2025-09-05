# Internationalization (i18n) Implementation

## Overview
La Vieja Adventures has been fully internationalized to support both Spanish (es) and English (en) languages using Next.js 15 App Router with next-intl.

## Architecture

### 1. Routing Structure
```
app/
├── layout.tsx (root layout - minimal)
├── page.tsx (redirects to default locale)
├── [locale]/
│   ├── layout.tsx (locale-specific layout with translations)
│   ├── page.tsx (home page)
│   ├── search/
│   │   ├── page.tsx
│   │   └── SessionsSearchPage.tsx
│   └── tours/
│       └── [slug]/
│           └── page.tsx
```

### 2. Core Configuration Files
- `lib/i18n.ts` - Main i18n configuration
- `middleware.ts` - Locale detection and routing
- `messages/es.json` - Spanish translations
- `messages/en.json` - English translations

### 3. Utility Functions (`app/lib/i18n-utils.ts`)
- `getLocalizedSlug()` - Convert slugs between languages
- `getOriginalSlug()` - Get original slug from localized version
- `getLocalizedText()` - Get text in specific locale with fallback
- `getLocalizedArray()` - Get arrays in specific locale with fallback

## Features Implemented

### ✅ URL Localization
- All tour URLs are available in both languages
- Example: `/es/tours/canon-esmeralda` → `/en/tours/emerald-canyon`
- SEO-friendly URLs with proper slug mappings for 25+ adventures

### ✅ Dynamic Content Translation
- Adventures and tour details
- Navigation menu
- Search functionality
- Contact forms
- Metadata and SEO tags

### ✅ Components Internationalized
- Navigation (`nav.tsx`)
- Adventures listing (`adventures.tsx`)
- Tour details (`tour.tsx`)
- Search functionality (`SessionsSearchPage.tsx`)
- Contact form (`contact.tsx`)
- Language switcher (`language-switcher.tsx`)

### ✅ SEO Optimization
- Dynamic metadata generation per locale
- OpenGraph and Twitter Card support
- Alternate language links
- Localized structured data

### ✅ User Experience
- Language switcher with 3 variants (default, compact, mobile)
- Route preservation during language switching
- Automatic locale detection
- Fallback mechanisms for missing translations

## Translation Structure

### Navigation
```json
{
  "navigation": {
    "brand": { "name": "...", "tagline": "..." },
    "menu": { "home": "...", "adventures": "..." },
    "cta": { "reserve": "...", "openMenu": "..." }
  }
}
```

### Common Elements
```json
{
  "common": {
    "buttons": { "readMore": "...", "bookNow": "..." },
    "forms": { "required": "...", "success": "..." },
    "difficulty": { "low": "...", "moderate": "..." },
    "labels": { "duration": "...", "price": "..." }
  }
}
```

### Page-Specific
- `adventures` - Adventure listing page
- `contact` - Contact form and info
- `search` - Search functionality
- `metadata` - SEO metadata

## Multilingual Data Structure

### Adventure Data
- Original adventures remain in Spanish in `statics.tsx`
- Localized data accessed via `useLocalizedAdventures()` hook
- Fallback to original Spanish content for consistency

### Slug Management
- Comprehensive mapping for all 25+ adventures
- Bidirectional conversion between Spanish and English slugs
- Automatic static path generation for all routes

## Performance Optimizations

1. **Static Generation**: All tour routes pre-generated with `generateStaticParams`
2. **Efficient Loading**: Messages loaded per locale only
3. **Fallback Strategy**: Graceful degradation to Spanish when English missing
4. **Component Optimization**: Minimal re-renders with proper hook usage

## Development Guidelines

### Adding New Translations
1. Add keys to both `messages/es.json` and `messages/en.json`
2. Use structured namespacing (e.g., `contact.form.submit`)
3. Keep fallbacks for any missing translations

### Adding New Adventure Slugs
1. Add mapping to `slugMappings` in `i18n-utils.ts`
2. Ensure English slug is SEO-friendly
3. Test both language routes

### Component Translation Pattern
```tsx
import { useTranslations, useLocale } from 'next-intl'

export function Component() {
  const t = useTranslations('namespace')
  const locale = useLocale()
  
  return <h1>{t('title')}</h1>
}
```

## Testing Checklist

- [x] All pages load correctly in both languages
- [x] Language switcher works on all pages
- [x] Tour URLs resolve correctly in both languages
- [x] Search functionality works with localized content
- [x] Contact form submits with correct language context
- [x] SEO metadata generates properly
- [x] No compilation errors or TypeScript issues

## Future Enhancements

1. **Adventure Content Translation**: Expand multilingual adventures data
2. **Additional Languages**: Framework ready for more locales
3. **Content Management**: Consider CMS integration for easier translation management
4. **RTL Support**: Architecture supports right-to-left languages
5. **Regional Variants**: Support for regional Spanish/English variants

## Maintenance Notes

- All translation files are in `messages/` directory
- Slug mappings centralized in `i18n-utils.ts`
- Component translations follow namespace pattern
- Regular validation of translation completeness recommended

---

Implementation completed: [Current Date]
Next.js Version: 15+ with App Router
i18n Library: next-intl
Supported Locales: Spanish (es), English (en)
Default Locale: Spanish (es)