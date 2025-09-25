import React from 'react';
import { services } from '../lib/statics';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative w-full min-h-screen overflow-hidden py-20">
      {/* Background with enhanced gradient and water-like effects */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,50,100,0.8) 0%, rgba(16,185,129,0.2) 30%,
           rgba(0,100,150,0.6) 70%, rgba(0,0,0,0.8) 100%), 
          url('/IMG_3295.JPG')`,
          filter: 'contrast(1.3) brightness(0.9) saturate(1.2)',
        }}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-teal-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-emerald-300 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
            Ofrecemos servicios integrales para que vivas la mejor experiencia eco-turística:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-lg text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Services;
