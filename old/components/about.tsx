'use client'
import React from 'react';
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import { getImageProps, IMAGE_PATHS } from '@/app/lib/image-utils';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background with enhanced gradient and water-like effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          {...getImageProps(
            IMAGE_PATHS.teamPhoto,
            "Background - Equipo de guías de La Vieja Adventures",
            'background',
            {
              quality: 70
            }
          )}
          fill
          className="object-cover"
          style={{
            filter: 'contrast(1.3) brightness(0.9) saturate(1.2)'
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

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-teal-900/20 z-20" />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-300 bg-clip-text text-transparent">
              Sobre La Vieja Adventures
            </h2>
            <div className="space-y-4 text-gray-200 backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
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
                <div className="text-3xl font-bold text-green-400">200+</div>
                <div className="text-gray-200">Especies de aves identificadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-gray-200">Cascadas accesibles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5,000+</div>
                <div className="text-gray-200">Visitantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5+</div>
                <div className="text-gray-200">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Imagen + Sello Ecológico */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-lg shadow-xl overflow-hidden">
              <Image
                {...getImageProps(
                  IMAGE_PATHS.teamPhoto,
                  "Equipo de guías de La Vieja Adventures",
                  'card',
                  {
                    placeholder: 'blur',
                    quality: 85
                  }
                )}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Eco-Certificada</div>
                <div className="text-sm text-gray-600">Turismo 100% sostenible</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default About;
