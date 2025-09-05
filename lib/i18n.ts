import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['es', 'en'];
export const defaultLocale = 'es';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    console.warn(`Invalid locale requested: ${locale}`);
    notFound();
  }

  let messages = {};
  let actualLocale = locale;

  try {
    // Attempt to load messages for the requested locale
    messages = (await import(`../messages/${locale}.json`)).default;
    
    // Validate messages structure
    if (!messages || typeof messages !== 'object') {
      throw new Error('Invalid messages format');
    }
    
    console.log(`Successfully loaded messages for locale '${locale}'`);
  } catch (error) {
    // Log the error for debugging
    console.warn(`Failed to load messages for locale '${locale}':`, error);
    
    // Fallback to default locale if current locale fails
    if (locale !== defaultLocale) {
      try {
        messages = (await import(`../messages/${defaultLocale}.json`)).default;
        actualLocale = defaultLocale;
        console.warn(`Using fallback messages for locale '${defaultLocale}'`);
        
        if (!messages || typeof messages !== 'object') {
          throw new Error('Invalid fallback messages format');
        }
      } catch (fallbackError) {
        console.error(`Failed to load fallback messages for '${defaultLocale}':`, fallbackError);
        // Return minimal structure as last resort
        messages = {
          common: {
            buttons: { loading: 'Loading...' },
            language: { switchTo: 'Switch to' }
          },
          navigation: {
            brand: { name: 'La Vieja Adventures' },
            menu: { home: 'Home' }
          }
        };
        actualLocale = defaultLocale;
      }
    } else {
      // If default locale fails, return minimal structure
      console.error(`Critical error: Default locale '${defaultLocale}' messages not found`);
      messages = {
        common: {
          buttons: { loading: 'Loading...' },
          language: { switchTo: 'Switch to' }
        },
        navigation: {
          brand: { name: 'La Vieja Adventures' },
          menu: { home: 'Home' }
        }
      };
    }
  }

  return {
    locale: actualLocale,
    messages
  };
});

// Type helper for locale
export type Locale = typeof locales[number];