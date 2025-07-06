'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "../components/ui/button"
import { Menu, X, Droplets, Waves } from 'lucide-react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'adventures', label: 'Aventuras', icon: '🏔️' },
    { id: 'services', label: 'Servicios', icon: '⚡' },
    { id: 'about', label: 'Nosotros', icon: '🌟' },
    { id: 'testimonials', label: 'Testimonios', icon: '💬' },
    { id: 'contact', label: 'Contacto', icon: '📞' },
  ]

  return (
    <>
      {/* Navigation with dynamic glassmorphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-white/5 backdrop-blur-md border-b border-white/10'
      }`}>
        {/* Water ripple effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-teal-500/5 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo + Brand */}
            <a 
              className="flex items-center space-x-3 group cursor-pointer" 
              href="/"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 group-hover:border-cyan-400/50 transition-all duration-300">
                
                   <img
              src={ "/logo2.png"}
              alt={"La Vieja Adventures Logo"}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                  La Vieja Adventures
                </span>
                <span className="text-xs text-cyan-300/80 font-medium">
                  Aventuras Sostenibles
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {menuItems.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToId(id)}
                  className="group relative px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20"></div>
                  <div className="relative flex items-center space-x-2">
                    <span className="text-sm">{icon}</span>
                    <span className="font-medium">{label}</span>
                  </div>
                </button>
              ))}
              
              {/* CTA Button */}
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-2 border-cyan-500/30 backdrop-blur-sm rounded-full px-8 py-3 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/50 ml-4"
                onClick={() => scrollToId('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                 
                    <Droplets className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 cyan-700 "  />
                  <span className="font-bold">¡Reserva ya!</span>
                </div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-white transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="h-6 w-6 text-white transition-transform duration-300" />
                  )}
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}>
            <div className="pb-6 pt-4">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                <div className="flex flex-col space-y-4">
                  {menuItems.map(({ id, label, icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollToId(id)}
                      className="group flex items-center space-x-3 text-left text-white/90 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
                        <span className="text-lg">{icon}</span>
                      </div>
                      <span className="font-medium text-lg">{label}</span>
                    </button>
                  ))}
                  
                  <div className="pt-4 border-t border-white/20">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-2 border-cyan-500/30 backdrop-blur-sm rounded-xl py-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50"
                      onClick={() => scrollToId('contact')}
                    >
                      <div className="flex items-center justify-center space-x-2">
                          <Droplets className="w-8 h-8 text-cyan-400" />
                        <span className="font-bold text-lg">¡Reserva ya!</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated water drops effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 20}%`,
                top: '50%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </nav>
    </>
  )
}