'use client'

import React from 'react'
import { Award, Globe, Users, Heart } from 'lucide-react'

export default function HeroSustainability() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nuestro compromiso con el planeta
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          En La Vieja Adventures, cada paso que das contribuye a proteger el bosque nuboso y apoyamos a las
          comunidades locales. Nuestros programas de sostenibilidad incluyen:
        </p>

        <ul className="space-y-4 text-gray-700 text-left mx-auto max-w-2xl">
          <li className="flex items-start gap-3">
            <Award className="h-6 w-6 text-green-600 mt-1" />
            <span>
              Certificación de turismo sostenible otorgada por el ICT y Costa Rica Verde: cumplimos todos los
              estándares de uso responsable de recursos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="h-6 w-6 text-green-600 mt-1" />
            <span>
              Proyecto de reforestación: plantamos un árbol por cada visitante que reserva un tour de más de
              4 horas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Users className="h-6 w-6 text-green-600 mt-1" />
            <span>
              Alianzas con comunidades de Sucre: generamos empleo local y promovemos el turismo comunitario
              para apoyar microempresas de artesanía y alimentos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Heart className="h-6 w-6 text-green-600 mt-1" />
            <span>
              Rescate y liberación de fauna silvestre: parte de los ingresos se destina a centros de rescate
              local de aves y pequeños mamíferos.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
