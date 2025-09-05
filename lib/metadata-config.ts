/**
 * Metadata Configuration Utility
 * 
 * Provides environment-aware base URL resolution and centralized metadata
 * configuration for Next.js applications with internationalization support.
 */

import type { Metadata, OpenGraph } from 'next';

/**
 * Gets the base URL for the application based on the current environment
 * 
 * Priority order:
 * 1. Production: NEXT_PUBLIC_SITE_URL or default production URL
 * 2. Vercel deployment: VERCEL_URL (for preview deployments)
 * 3. Local development: localhost:3000
 */
export const getBaseUrl = (): string => {
  // Production environment
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://laviejaadventures.com';
  }
  
  // Vercel preview deployment
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  // Local development fallback
  return 'http://localhost:3000';
};

/**
 * Creates a metadata base URL object for Next.js metadata configuration
 */
export const getMetadataBase = (): URL => {
  return new URL(getBaseUrl());
};

/**
 * Configuration for OpenGraph metadata
 */
export interface OpenGraphConfig {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  locale: string;
  type: string;
}

/**
 * Configuration for Twitter Card metadata
 */
export interface TwitterConfig {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  images: string[];
}

/**
 * Generates OpenGraph configuration for a given locale
 */
export const getOpenGraphConfig = (
  locale: string,
  title: string,
  description: string,
  customUrl?: string
): OpenGraph => {
  const baseUrl = getBaseUrl();
  const url = customUrl || `${baseUrl}/${locale}`;
  
  return {
    title,
    description,
    url,
    siteName: "La Vieja Adventures",
    images: [
      {
        url: "/images/og-la-vieja-adventures.jpg",
        width: 1200,
        height: 630,
        alt: "La Vieja Adventures en Costa Rica",
      },
    ],
    locale: locale === "es" ? "es_CR" : "en_US",
    type: "website",
  };
};

/**
 * Generates Twitter Card configuration
 */
export const getTwitterConfig = (
  title: string,
  description: string
): TwitterConfig => {
  return {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/twitter-la-vieja-adventures.jpg"],
  };
};

/**
 * Generates alternate language links for SEO
 */
export const getAlternateLanguages = () => {
  const baseUrl = getBaseUrl();
  
  return {
    languages: {
      "es-CR": `${baseUrl}/es`,
      "en-US": `${baseUrl}/en`,
    },
  };
};

/**
 * Default metadata keywords
 */
export const getDefaultKeywords = (locale: string): string[] => {
  const commonKeywords = [
    "La Vieja Adventures",
    "turismo de aventura",
    "eco-turismo",
    "Costa Rica",
    "adventure tourism",
    "sostenible",
  ];
  
  if (locale === 'en') {
    return [
      ...commonKeywords,
      "sustainable tourism",
      "eco-adventure",
      "nature tours",
      "adventure travel",
    ];
  }
  
  return [
    ...commonKeywords,
    "turismo sostenible",
    "eco-aventura", 
    "tours de naturaleza",
    "viajes de aventura",
  ];
};

/**
 * Creates a complete metadata configuration for a locale
 */
export const createLocaleMetadata = (
  locale: string,
  title?: string,
  description?: string,
  customUrl?: string,
  keywords?: string[]
): Metadata => {
  const defaultTitle = "La Vieja Adventures | La Aventura te Espera";
  const defaultDescription = "La Vieja Adventures: Empresa líder en turismo de aventura en Costa Rica";
  
  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || getDefaultKeywords(locale);
  
  return {
    metadataBase: getMetadataBase(),
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: "La Vieja Adventures", url: getBaseUrl() }],
    openGraph: getOpenGraphConfig(locale, metaTitle, metaDescription, customUrl),
    twitter: getTwitterConfig(metaTitle, metaDescription),
    alternates: getAlternateLanguages(),
  };
};