'use client'

import { notFound, useRouter } from 'next/navigation'
import { adventures } from '../../lib/statics'
import React from 'react'

type Props = {
  params: Promise<{ slug: string }>
}

export default function TourPage({ params }: Props) {
  const { slug } = React.use(params)
  const router = useRouter()

  const tour = adventures.find((t) => t.slug === slug)

  const handleWhatsApp = () => {
    const mensaje = `Hola 👋, quiero reservar el tour *${tour?.title}* para la siguiente fecha: [tu fecha aquí].\n\nSeríamos [cantidad de personas], y mi nombre es [tu nombre].\n\n¿Podés confirmarme disponibilidad?`
    const link = `https://wa.me/50664666738?text=${encodeURIComponent(mensaje)}`
    router.push(link)
  }

  if (!tour) {
    notFound()
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
          <p><strong>Precio:</strong> {tour.price}</p>
        </div>
        {tour.schedule && (
          <div className="space-y-2">
            <p><strong>Horarios:</strong> {tour.schedule.join(', ')}</p>
            {tour.age && <p><strong>Edad recomendada:</strong> {tour.age}</p>}
          </div>
        )}
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

      {/* Botón de reserva */}
      <div className="text-center">
        <button
          onClick={handleWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
        >
          Reservar por WhatsApp
        </button>
        <p className="text-xs text-gray-500 mt-2">WhatsApp directo: 6233-2535</p>
      </div>
    </div>
  )
}
