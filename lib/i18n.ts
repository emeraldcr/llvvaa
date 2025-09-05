import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['es', 'en'];
export const defaultLocale = 'es';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) notFound();

  try {
    // Attempt to load messages for the requested locale
    const messages = (await import(`../messages/${locale}.json`)).default;
    
    return {
      locale: locale as string,
      messages
    };
  } catch (error) {
    // Log the error for debugging
    console.warn(`Failed to load messages for locale '${locale}':`, error);
    
    // Fallback to default locale if current locale fails
    if (locale !== defaultLocale) {
      try {
        const fallbackMessages = (await import(`../messages/${defaultLocale}.json`)).default;
        console.warn(`Using fallback messages for locale '${defaultLocale}'`);
        
        return {
          locale: defaultLocale,
          messages: fallbackMessages
        };
      } catch (fallbackError) {
        console.error(`Failed to load fallback messages for '${defaultLocale}':`, fallbackError);
        // Return empty messages as last resort
        return {
          locale: defaultLocale,
          messages: {}
        };
      }
    } else {
      // If default locale fails, return empty messages
      console.error(`Critical error: Default locale '${defaultLocale}' messages not found`);
      return {
        locale: defaultLocale,
        messages: {}
      };
    }
  }
});

// Type helper for locale
export type Locale = typeof locales[number];