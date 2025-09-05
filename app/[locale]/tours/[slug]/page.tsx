import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { getMetadataBase } from '../../../../lib/metadata-config'
import Tour from "../../../components/tour"
import { adventures } from '../../../lib/statics'
import { getOriginalSlug, getLocalizedSlug, slugMappings } from '../../../lib/i18n-utils'
import { locales } from '../../../../lib/i18n'

type Props = {
  params: Promise<{ 
    locale: string
    slug: string 
  }>
}

// Generate static paths for all adventures in all locales
export function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = []
  
  // For each adventure, generate paths for all locales
  adventures.forEach((adventure) => {
    locales.forEach((locale) => {
      const localizedSlug = getLocalizedSlug(adventure.slug, locale)
      paths.push({
        locale,
        slug: localizedSlug
      })
    })
  })
  
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  
  // Get the original slug for data lookup
  const originalSlug = getOriginalSlug(slug, locale)
  const adventure = adventures.find((t) => t.slug === originalSlug)
  
  if (!adventure) {
    return {
      metadataBase: getMetadataBase(),
      title: 'Tour not found',
      description: 'The requested tour could not be found.'
    }
  }
  
  const t = await getTranslations({ locale, namespace: 'metadata.pages.tour' })
  const tSite = await getTranslations({ locale, namespace: 'metadata.site' })
  
  const title = `${adventure.title} | ${tSite('title')}`
  const description = adventure.description || t('defaultDescription')
  
  return {
    metadataBase: getMetadataBase(),
    title,
    description,
    keywords: `${adventure.title}, ${adventure.location}, Costa Rica, adventure tourism, ${adventure.difficulty}`,
    openGraph: {
      title,
      description,
      images: adventure.image ? [{
        url: adventure.image,
        width: 1200,
        height: 630,
        alt: adventure.title
      }] : [],
      locale: locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: adventure.image ? [adventure.image] : []
    },
    alternates: {
      languages: {
        'es': `/es/tours/${adventure.slug}`,
        'en': `/en/tours/${adventure.slug}`
      }
    }
  }
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  return <Tour slug={slug} />
}