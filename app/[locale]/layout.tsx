import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { createLocaleMetadata } from '../../lib/metadata-config';
import LocaleErrorBoundary from '../components/locale-error-boundary';
import { LocaleDebugger } from '../../lib/locale-debug';


type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  { params }: LayoutProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Validate locale
  const validation = LocaleDebugger.validateLocale(locale);
  if (!validation.isValid) {
    console.error('Invalid locale in metadata generation:', validation.message);
    notFound();
  }

  try {
    // Get localized messages for metadata
    const messages = await getMessages({ locale });
    const metadata = messages.metadata ;

    // Extract localized metadata values
    const title = metadata?.site?.title;
    const description = metadata?.site?.description;
    const keywords = metadata?.site?.keywords?.split(', ');

    // Use the centralized metadata configuration utility
    return createLocaleMetadata(
      locale,
      title,
      description,
      undefined, // Use default URL construction
      keywords
    );
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Return fallback metadata
    return createLocaleMetadata(
      locale,
      'La Vieja Adventures',
      'Adventure tourism in Costa Rica',
      undefined,
      ['adventure', 'tourism', 'costa rica']
    );
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Enhanced locale validation with debugging
  const validation = LocaleDebugger.validateLocale(locale);
  if (!validation.isValid) {
    LocaleDebugger.log({
      currentLocale: locale,
      pathname: 'layout-validation-failed'
    });
    console.error('Locale validation failed:', validation.message);
    notFound();
  }

  // Log successful locale processing
  LocaleDebugger.log({
    currentLocale: locale,
    pathname: 'layout-processing'
  });

  // Ensure messages are loaded with enhanced error handling
  let messages;
  try {
    messages = await getMessages({ locale });
    
    // Validate messages structure
    if (!messages || typeof messages !== 'object') {
      throw new Error('Invalid messages structure');
    }
    
    console.log(`✅ Messages loaded successfully for locale '${locale}'`);
  } catch (error) {
    console.error(`❌ Failed to load messages for locale '${locale}':`, error);
    
    // Attempt fallback to default locale
    try {
      messages = await getMessages({ locale: 'es' });
      console.warn('🔄 Using fallback messages for Spanish locale');
    } catch (fallbackError) {
      console.log('💥 Critical: Failed to load any messages', fallbackError);
      // Provide minimal messages structure
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

  return (
    <LocaleErrorBoundary>
      <NextIntlClientProvider 
        messages={messages}
        locale={locale}
        timeZone="America/Costa_Rica"
        now={new Date()}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleErrorBoundary>
  );
}
