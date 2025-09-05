'use client'

import React from 'react'
import Image from 'next/image'
import { notFound, useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { adventures } from '../lib/statics'
import { getOriginalSlug } from '../lib/i18n-utils'
import { getImageProps } from '@/app/lib/image-utils'

interface Package {
  name: string;
  price: string;
  includes: string[];
}

interface TourDetails {
  slug: string;
  title: string;
  image: string;
  description: string;
  duration: string;
  difficulty: string;
  distance: string;
  price_range: string;
  schedule: string[];
  age_min: number;
  age_max: number;
  location: string;
  packages: Package[];
  highlights: string[];
  recommendations?: string[];
  technical: Record<string, string>;
  included_general: string[];
  ideal_for: string[];
  not_recommended_for: string[];
  extra_notes?: string[];
}

interface Props {
  slug: string;
}

export default function Tour({ slug }: Props) {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('common.labels')
  const tButtons = useTranslations('common.buttons')
  
  // Get the original slug for data lookup
  const originalSlug = getOriginalSlug(slug, locale)
  const tour = adventures.find((t) => t.slug === originalSlug)

  if (!tour) {
    notFound()
  }

  const handleWhatsApp = () => {
    const mensaje = locale === 'es' 
      ? `Hola 👋, quiero reservar el tour *${tour.title}* para la siguiente fecha: [tu fecha aquí].\n\nSeríamos [cantidad de personas], y mi nombre es [tu nombre].\n\n¿Podés confirmarme disponibilidad?`
      : `Hello 👋, I want to book the *${tour.title}* tour for the following date: [your date here].\n\nWe would be [number of people], and my name is [your name].\n\nCan you confirm availability?`
    
    const link = `https://wa.me/50662332535?text=${encodeURIComponent(mensaje)}`
    router.push(link)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          {...getImageProps(
            tour.image,
            `Background - ${tour.title}`,
            'hero',
            {
              quality: 70
            }
          )}
          fill
          className="object-cover"
          style={{
            filter: 'contrast(1.2) brightness(0.9) saturate(1.2)'
          }}
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(0,50,100,0.8) 0%, rgba(16,185,129,0.2) 30%, rgba(0,100,150,0.6) 70%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-teal-900/20 z-20" />

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 space-y-10 text-white">
        <h1 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          {tour.title}
        </h1>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl max-h-[450px] aspect-[4/3]">
          <Image
            {...getImageProps(
              tour.image,
              tour.title,
              'hero',
              {
                placeholder: 'blur',
                quality: 85,
                priority: true
              }
            )}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-lg backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
          {tour.description}
        </p>

        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
          <div className="space-y-2">
            <p><strong>{t('duration')}:</strong> {tour.duration}</p>
            <p><strong>{t('difficulty')}:</strong> {tour.difficulty}</p>
            <p><strong>{t('distance')}:</strong> {tour.distance}</p>
            <p><strong>{t('price')}:</strong> {tour.price_range}</p>
          </div>
          <div className="space-y-2">
            <p><strong>{t('schedule')}:</strong> {tour.schedule?.join(', ') || 'No especificado'}</p>
            <p><strong>{t('ageRange')}:</strong> {tour.age_min} - {tour.age_max} {t('years')}</p>
            <p><strong>{t('location')}:</strong> {tour.location}</p>
          </div>
        </div>

        {/* Packages */}
        {tour.packages && tour.packages.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('packages')}</h2>
            {tour.packages.map((pkg, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 mb-4">
                <h3 className="font-semibold">{pkg.name} – {pkg.price}</h3>
                <ul className="list-disc list-inside mt-2">
                  {pkg.includes.map((inc, incIndex) => <li key={incIndex}>{inc}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        {tour.highlights && tour.highlights.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('highlights')}</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.highlights.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* Recommendations */}
        {tour.recommendations && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('recommendations')}</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.recommendations.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* Technical Details */}
        {tour.technical && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{locale === 'es' ? 'Detalles Técnicos' : 'Technical Details'}</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {Object.entries(tour.technical).map(([key, value], index) => (
                <li key={index}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Included */}
        {tour.included_general && tour.included_general.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('included')}</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.included_general.map((inc, index) => <li key={index}>{inc}</li>)}
            </ul>
          </div>
        )}

        {/* Ideal For / Not Recommended */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tour.ideal_for && tour.ideal_for.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">{locale === 'es' ? 'Ideal para' : 'Ideal for'}</h2>
              <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
                {tour.ideal_for.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          )}
          {tour.not_recommended_for && tour.not_recommended_for.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">{locale === 'es' ? 'No recomendado' : 'Not recommended'}</h2>
              <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
                {tour.not_recommended_for.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Extra Notes */}
        {tour.extra_notes && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{locale === 'es' ? 'Notas importantes' : 'Important notes'}</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.extra_notes.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 px-8 py-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 font-bold"
          >
            {locale === 'es' ? 'Reservar por WhatsApp' : 'Book via WhatsApp'}
          </button>
          <p className="text-sm mt-2">WhatsApp: 6233-2535</p>
        </div>
      </div>
    </section>
  )
}
