import { Metadata } from 'next'
import { Suspense } from 'react'
import { getTranslations } from 'next-intl/server'
import { getMetadataBase } from '../../../lib/metadata-config'
import SessionsSearchPage from './SessionsSearchPage'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.pages.search' })
  const tSite = await getTranslations({ locale, namespace: 'metadata.site' })
  
  return {
    metadataBase: getMetadataBase(),
    title: t('title'),
    description: t('description'),
    keywords: `${tSite('keywords')}, search, adventures`,
    alternates: {
      languages: {
        'es': '/es/search',
        'en': '/en/search'
      }
    }
  }
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">Loading search…</div>}>
      <SessionsSearchPage />
    </Suspense>
  )
}
