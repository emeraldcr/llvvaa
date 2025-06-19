'use client'

import React from 'react'
import { adventures } from '../lib/statics'
import {
  Clock,
  Mountain,
  Star,
} from "lucide-react";

import Link from 'next/link'

export default function Adventures() {


  return (
  <section id="adventures" className="py-28 bg-gradient-to-br from-green-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="text-center mb-20">
      <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
        Aventuras Inolvidables
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Embárcate en experiencias únicas en el corazón del bosque nuboso, donde la naturaleza y la aventura se funden en armonía. 🌿✨
      </p>
    </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
      {adventures.map((adventure) => (
        <div
          key={adventure.title}
          className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-200"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={adventure.image || "/placeholder.svg"}
              alt={adventure.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-green-700 font-semibold text-sm shadow-md">
              {adventure.price_range}
            </div>
          </div>

          <div className="p-8 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {adventure.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                {adventure.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>{adventure.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-green-500" />
                  <span>{adventure.difficulty}</span>
                </div>
              </div>

              <div>
                <h4 className="text-green-700 font-semibold mb-4 text-lg">Lo más destacado</h4>
                <ul className="grid grid-cols-1 gap-2 text-gray-700 text-sm list-none">
                  {adventure.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Star className="h-4 w-4 mt-1 text-green-500 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de Reserva con Link */}
                <Link 
                  href={`/tours/${adventure.slug}`} 
                  className="mt-8 inline-block w-full text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Reserva tu Aventura
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
