'use client'

import React from 'react'

import { notFound, useRouter } from 'next/navigation'
import { adventures } from '../lib/statics'
type Props = {
  params: Promise<{ slug: string }>
}

export default function Tour({ params }: Props) {
 const { slug } = React.use(params)
 
 const router = useRouter()
  const tour = adventures.find((t) => t.slug === slug)
 
   if (!tour) {
     notFound()
   }
const handleWhatsApp = () => {
    const mensaje = `Hola 👋, quiero reservar el tour *${tour?.title}* para la siguiente fecha: [tu fecha aquí].\n\nSeríamos [cantidad de personas], y mi nombre es [tu nombre].\n\n¿Podés confirmarme disponibilidad?`
    const link = `https://wa.me/50662332535?text=${encodeURIComponent(mensaje)}`
    router.push(link)
  }
  return (
   <div className="max-w-4xl mx-auto py-10 px-6 space-y-10">
          {/* Título + Imagen */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center">
              {tour.title}
            </h1>
            <div className="rounded-2xl overflow-hidden shadow-lg max-h-[450px]">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            {tour.description}
          </p>

          {/* Info Básica */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 shadow-sm">
            <div className="space-y-2">
              <p><strong>Duración:</strong> {tour.duration}</p>
              <p><strong>Dificultad:</strong> {tour.difficulty}</p>
              <p><strong>Distancia:</strong> {tour.distance}</p>
              <p><strong>Precio:</strong> {tour.price_range}</p>
            </div>
            <div className="space-y-2">
              <p><strong>Horarios:</strong> {tour.schedule.join(', ')}</p>
              <p><strong>Edad recomendada:</strong> {tour.age_min} a {tour.age_max} años</p>
              <p><strong>Ubicación:</strong> {tour.location}</p>
            </div>
          </div>

          {/* Paquetes */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Paquetes Disponibles</h2>
            {tour.packages.map((pkg) => (
              <div key={pkg.name} className="border p-4 rounded-xl shadow-sm mb-4">
                <p className="font-semibold">{pkg.name} – {pkg.price}</p>
                <ul className="list-disc list-inside text-gray-700 pl-4 mt-2">
                  {pkg.includes.map((inc) => <li key={inc}>{inc}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Lo más destacado */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Lo más destacado</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
              {tour.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Recomendaciones */}
          {tour.recommendations && (
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-2">¿Qué llevar?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                {tour.recommendations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Técnicos */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Detalles Técnicos</h2>
            <ul className="list-disc list-inside text-gray-700 pl-2">
              {Object.entries(tour.technical).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
          </div>

          {/* Incluye general */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Incluye</h2>
            <ul className="list-disc list-inside text-gray-700 pl-2">
              {tour.included_general.map((inc) => <li key={inc}>{inc}</li>)}
            </ul>
          </div>

          {/* Público ideal y restricciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-2">Ideal para</h2>
              <ul className="list-disc list-inside text-gray-700 pl-2">
                {tour.ideal_for.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-2">No recomendado para</h2>
              <ul className="list-disc list-inside text-gray-700 pl-2">
                {tour.not_recommended_for.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          {/* Notas extra */}
          {tour.extra_notes && (
            <div>
              <h2 className="text-xl font-semibold text-green-700 mb-2">Notas importantes</h2>
              <ul className="list-disc list-inside text-gray-700 pl-2">
                {tour.extra_notes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}

          {/* Botón de reserva */}
          <div className="text-center">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
            >
              Reservar por WhatsApp
            </button>
            <p className="text-xs text-gray-500 mt-2">WhatsApp directo: 6466-6738</p>
          </div>
        </div>
  )
}
