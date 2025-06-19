'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "../components/ui/button";
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Cierra el menú móvil al hacer scroll
    }
  }

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'adventures', label: 'Aventuras' },
    { id: 'services', label: 'Servicios' },
    { id: 'about', label: 'Nosotros' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'contact', label: 'Contacto' },
  ]

  return (
    <>
      {/* ===========================
          Navegación Principal
       =========================== */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Nombre */}
            <a className="flex items-center space-x-2" href="/">
              <Image src="/logo2.png" alt="logo" width={60} height={60} />
              <span className="text-xl font-bold text-gray-900">La Vieja Adventures</span>
            </a>

            {/* Menú Escritorio */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToId(id)}
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  {label}
                </button>
              ))}
              <Button
                size="lg"
                variant="outline"
                className="text-green-700 hover:text-green-600 transition-colors"
                onClick={() => scrollToId('contact')}
              >
                Reserva ya!
              </Button>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Menú Móvil */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {menuItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToId(id)}
                    className="text-left text-gray-700 hover:text-green-600 transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-green-600 hover:bg-green-700 w-fit text-white"
                  onClick={() => scrollToId('contact')}
                >
                  Reserva ya!
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
