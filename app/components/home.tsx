'use client'

import React from 'react'

import { Button } from "../components/ui/button";
import { ArrowRight } from 'lucide-react'

export default function Hero() {

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con gradiente */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/IMG_3295.JPG')`,
        }}
      />

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          ¡Bienvenidos a{' '}
          <span className="block text-green-400">La Vieja Adventures!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Aventuras sostenibles en Sucre, Ciudad Quesada. Explora la naturaleza
          con responsabilidad y mucha adrenalina.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
            onClick={() => scrollToId('adventures')}
          >
            Ver Aventuras
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            onClick={() => scrollToId('about')}
          >
            Sobre Nosotros
          </Button>
        </div>
      </div>
    </section>
  )
}
