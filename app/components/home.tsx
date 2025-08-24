'use client';
import React, { useState, KeyboardEvent, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Compass, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

  const goToSearch = () => {
    const q = searchQuery.trim();
    // Navigate with or without q — your /search page handles empty state nicely
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : '/search');
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    goToSearch();
  };

  const handleAIChat = () => {
    console.log('AI Chat activated');
    // Add AI assistant activation logic here
  };

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background with enhanced gradient and water-like effects */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,50,100,0.8) 0%, rgba(16,185,129,0.2) 30%,
           rgba(0,100,150,0.6) 70%, rgba(0,0,0,0.8) 100%), url('/volcanes-dormidos-la-vieja.png')`,
          filter: 'contrast(1.3) brightness(0.9) saturate(1.2)',
        }}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-teal-900/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 mt-24">
        {/* Main Heading */}
        <div className="mb-8 transform transition-all duration-1000 hover:scale-105">
          <h1 className="text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-100 to-emerald-300 bg-clip-text text-transparent">
              ¡Bienvenidos a
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
              La Vieja Adventures!
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-xl md:text-3xl mb-12 text-gray-100 font-light leading-relaxed max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
          Aventuras sostenibles en Sucre, Ciudad Quesada. Explora la naturaleza con responsabilidad y mucha adrenalina.
        </p>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}
            role="search"
            aria-label="Buscar aventuras"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Buscar aventuras, tours, actividades..."
              className="w-full px-6 py-4 pl-14 pr-16 text-lg bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/20"
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  // Let the form handle submission so button click and Enter behave the same
                }
              }}
              aria-label="Cuadro de búsqueda"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-6 h-6" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full"
              aria-label="Buscar"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-10 py-4 rounded-full" onClick={() => scrollToId('adventures')}>
            Ver Aventuras <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 px-10 py-4 rounded-full" onClick={() => scrollToId('about')}>
            Sobre Nosotros <Compass className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* AI Assistant and Search */}
        <div className="flex gap-4 justify-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full" onClick={handleAIChat}>
            <MessageCircle className="w-5 h-5 mr-2" /> Planifica con IA
          </Button>
          <Button variant="outline" className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-8 py-3 rounded-full" onClick={() => router.push('/search')}>
            <Search className="w-5 h-5 mr-2" /> Buscar Solo
          </Button>
        </div>

        {/* Floating call-to-action */}
        <div className="mt-16 text-sm text-gray-300 animate-bounce">
          <p>Desliza hacia abajo para explorar</p>
          <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-transparent mx-auto mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
