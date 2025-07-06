'use client'

import React from 'react'
import { notFound, useRouter } from 'next/navigation'
import { adventures } from '../lib/statics'


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

type Props = {
  params: Promise<{ slug: string }>;
};

export default function  Tour({ params }: Props) {
   const { slug } = React.use(params);
  const router = useRouter()
  const tour = adventures.find((t) => t.slug === slug)

  if (!tour) {
    notFound()
  }

  const handleWhatsApp = () => {
    const mensaje = `Hola 👋, quiero reservar el tour *${tour.title}* para la siguiente fecha: [tu fecha aquí].\n\nSeríamos [cantidad de personas], y mi nombre es [tu nombre].\n\n¿Podés confirmarme disponibilidad?`
    const link = `https://wa.me/50662332535?text=${encodeURIComponent(mensaje)}`
    router.push(link)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,50,100,0.8) 0%, rgba(16,185,129,0.2) 30%, rgba(0,100,150,0.6) 70%, rgba(0,0,0,0.8) 100%), url('${tour.image}')`,
          filter: 'contrast(1.2) brightness(0.9) saturate(1.2)',
        }}
      />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-teal-900/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10 text-white">
        <h1 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          {tour.title}
        </h1>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl max-h-[450px]">
          <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        </div>

        {/* Description */}
        <p className="text-lg backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
          {tour.description}
        </p>

        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
          <div className="space-y-2">
            <p><strong>Duración:</strong> {tour.duration}</p>
            <p><strong>Dificultad:</strong> {tour.difficulty}</p>
            <p><strong>Distancia:</strong> {tour.distance}</p>
            <p><strong>Precio:</strong> {tour.price_range}</p>
          </div>
          <div className="space-y-2">
            <p><strong>Horarios:</strong> {tour.schedule.join(', ')}</p>
            <p><strong>Edad:</strong> {tour.age_min} a {tour.age_max} años</p>
            <p><strong>Ubicación:</strong> {tour.location}</p>
          </div>
        </div>

        {/* Packages */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Paquetes Disponibles</h2>
          {tour.packages.map((pkg) => (
            <div key={pkg.name} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 mb-4">
              <h3 className="font-semibold">{pkg.name} – {pkg.price}</h3>
              <ul className="list-disc list-inside mt-2">
                {pkg.includes.map((inc) => <li key={inc}>{inc}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Lo más destacado</h2>
          <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
            {tour.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        {/* Recommendations */}
        {tour.recommendations && (
          <div>
            <h2 className="text-2xl font-bold mb-4">¿Qué llevar?</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.recommendations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* Technical Details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Detalles Técnicos</h2>
          <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
            {Object.entries(tour.technical).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>

        {/* Included */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Incluye</h2>
          <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
            {tour.included_general.map((inc) => <li key={inc}>{inc}</li>)}
          </ul>
        </div>

        {/* Ideal For / Not Recommended */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ideal para</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.ideal_for.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">No recomendado</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.not_recommended_for.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Extra Notes */}
        {tour.extra_notes && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Notas importantes</h2>
            <ul className="list-disc list-inside backdrop-blur-sm bg-black/20 rounded-xl p-4 border border-white/10">
              {tour.extra_notes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 px-8 py-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 font-bold"
          >
            Reservar por WhatsApp
          </button>
          <p className="text-sm mt-2">WhatsApp directo: 6233-2535</p>
        </div>
      </div>
    </section>
  )
}
