'use client'

import React from 'react'
import {  Leaf } from 'lucide-react'

export default function About() {


  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre La Vieja Adventures
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Somos una empresa líder en turismo de aventura, comprometida con la sostenibilidad y el
                desarrollo comunitario. Desde hace más de 5 años, hemos llevado a visitantes de todo el
                mundo a descubrir los rincones más mágicos de Sucre y la zona de Alajuela.
              </p>
              <p>
                Nuestro equipo de guías está formado por expertos locales apasionados por la conservación de la
                biodiversidad. Creemos que hacer turismo puede ser un motor de cambio: por eso, parte de los
                ingresos se destinan a proyectos de reforestación y apoyo a microempresas rurales.
              </p>
              <p>
                Cada experiencia es diseñada para que conectes con la naturaleza de forma auténtica, segura y
                divertida. Y sí, somos tan ecológicos que hasta los chistes de nuestros guías vienen en empaque
                biodegradable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-gray-600">Especies de aves identificadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Cascadas accesibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5,000+</div>
                <div className="text-gray-600">Visitantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Imagen + Sello Ecológico */}
          <div className="relative">
            <img
              src="/equipo-guia-la-vieja.png"
              alt="Equipo de guías de La Vieja Adventures"
              className="rounded-lg shadow-xl object-cover w-full h-96"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold">Eco-Certificada</div>
                <div className="text-sm text-gray-600">Turismo 100% sostenible</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
