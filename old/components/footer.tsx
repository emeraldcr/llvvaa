'use client'

import React from 'react'
import { TreePine, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">La Vieja Adventures</span>
            </div>
            <p className="text-gray-400">
              Tu destino de turismo de aventura sostenible en Costa Rica. Comprometidos con la conservación y la
              comunidad local.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Leaf className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-400">Certificación de Turismo Sostenible ICT</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-green-400">Inicio</a></li>
              <li><a href="#adventures" className="hover:text-green-400">Aventuras</a></li>
              <li><a href="#services" className="hover:text-green-400">Servicios</a></li>
              <li><a href="#about" className="hover:text-green-400">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-green-400">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-extrabold text-gray-100 mb-6 tracking-tight">
              Conéctate con Nosotros
            </h4>
            <div className="flex flex-wrap gap-6">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/laviejaadventures"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-400 group"
              >
                <svg className="h-6 w-6 text-gray-500 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/laviejaadventures"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-400 group"
              >
                <svg className="h-6 w-6 text-gray-500 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/AdventuresVieja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-400 group"
              >
                <svg className="h-6 w-6 text-gray-500 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.35 8.4 8.4 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.16 3.84A12 12 0 0 1 3.1 4.91a4.22 4.22 0 0 0 1.31 5.63A4.16 4.16 0 0 1 2.8 9.7v.05a4.22 4.22 0 0 0 3.38 4.13 4.22 4.22 0 0 1-1.9.07 4.22 4.22 0 0 0 3.94 2.92A8.47 8.47 0 0 1 2 19.54a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 22.46 6z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/50662332535"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-green-400 hover:border-green-500 group"
              >
                <svg className="h-6 w-6 text-gray-500 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 2.99A13 13 0 0 0 3 16c0 2.3.6 4.4 1.6 6.3L2 30l7.9-2c1.8 1 4 1.6 6.2 1.6A13 13 0 1 0 16 2.99zm0 23.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.7 1.2 1.2-4.6-.3-.4a10.9 10.9 0 1 1 9.8 5.5zm6-8.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8.9-1 .9-.5 0-.8-.3a9 9 0 0 1-2.3-2.8c-.2-.3 0-.5.2-.7l.5-.6c.2-.3.3-.5 0-.8l-.9-2.2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5 0-.8.3s-1 1-1 2.5 1 2.9 1.2 3.1c.2.3 2 3 5 4.2.7.3 1.3.5 1.7.6h.7c.4 0 1.4-.4 1.6-1l.4-.9c.2-.6 0-.8-.2-1z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>

              {/* Google Maps */}
              <a
                href="https://www.google.com/maps/place/Parque+Nacional+del+Agua,+Sucre,+Ciudad+Quesada/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-red-400 hover:border-green-400 group"
              >
                <svg className="h-6 w-6 text-gray-500 group-hover:text-green-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8zm0 10.5A2.5 2.5 0 1 1 12 7a2.5 2.5 0 0 1 0 5.5z" />
                </svg>
                <span className="sr-only">Google Maps</span>
              </a>

            </div>
          </div>
        </div>

        {/* Mapa */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.674792159026!2d-84.43573512535129!3d10.271904271973805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa067f4b8714307%3A0x964bf886a8c78704!2sLa%20Vieja%20Adventures!5e0!3m2!1ses-419!2scr!4v1749180856689!5m2!1ses-419!2scr"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-10"
        ></iframe>

        {/* Pie de página */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 La Vieja Adventures. Todos los derechos reservados. | Ecoturismo sostenible y responsable
          </p>
        </div>
      </div>
    </footer>
  )
}
