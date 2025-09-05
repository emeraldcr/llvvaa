import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../lib/i18n';
import { createLocaleMetadata } from '../../lib/metadata-config';
import LocaleErrorBoundary from '../components/locale-error-boundary';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  { params }: LayoutProps
): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Get localized messages for metadata
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as any;

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
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Ensure messages are loaded with error handling
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error(`Failed to load messages for locale '${locale}':`, error);
    // Attempt fallback to default locale
    try {
      messages = await getMessages({ locale: 'es' });
      console.warn('Using fallback messages for Spanish locale');
    } catch (fallbackError) {
      console.error('Critical: Failed to load any messages');
      messages = {};
    }
  }

  return (
    <LocaleErrorBoundary>
      <NextIntlClientProvider 
        messages={messages}
        locale={locale}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleErrorBoundary>
  );
}
