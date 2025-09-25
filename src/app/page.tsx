'use client';
import React, { useState, useEffect } from 'react';
import { Calendar, Users, Plus, Minus, ShoppingCart, CreditCard, MapPin, Clock, Star, Utensils, Hotel, Car, Trash2, CheckCircle, Leaf, Camera, Mountain } from 'lucide-react';

const RootPage = () => {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [people, setPeople] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [activeTab, setActiveTab] = useState('tours');

  // Real La Vieja Adventures tours
  const tours = [
    {
      id: 1,
      name: "Expedición al Cañón Esmeralda",
      description: "Adéntrate en un cañón escondido entre selvas tropicales, explora cascadas de aguas turquesas y senderos secretos.",
      price: 59,
      duration: "3-4 horas",
      difficulty: "Moderado-Alto",
      rating: 4.9,
      image: "💚",
      highlights: ["Acceso exclusivo a la cascada Zafiro", "Guías certificados con pasión local", "Equipo de seguridad de alta gama", "Puentes colgantes emocionantes"]
    },
    {
      id: 2,
      name: "Safari de Aves en la Zona del Quetzal",
      description: "Descubre el mundo oculto de más de 200 especies de aves, incluyendo al mítico quetzal.",
      price: 55,
      duration: "4 horas",
      difficulty: "Fácil",
      rating: 5.0,
      image: "🦅",
      highlights: ["Guía ornitólogo certificado y bilingüe", "Binoculares profesionales incluidos", "Momentos de fotografía únicos"]
    },
    {
      id: 3,
      name: "Expedición Nocturna en Bosque Nuboso",
      description: "Adéntrate en la selva mágica de la noche. Escucha el canto de las ranas y descubre la vida secreta bajo las estrellas.",
      price: 45,
      duration: "3 horas",
      difficulty: "Fácil",
      rating: 4.8,
      image: "🌙",
      highlights: ["Observación de fauna nocturna", "Linternas de bajo impacto", "Grupos pequeños para experiencia inmersiva"]
    },
    {
      id: 4,
      name: "Aventura Eco-Gourmet San Vicente",
      description: "Experiencia integral: senderos volcánicos, tradiciones rurales, catas artesanales y naturaleza pura.",
      price: 59,
      duration: "5 horas",
      difficulty: "Intermedio",
      rating: 4.9,
      image: "🌋",
      highlights: ["Senderismo en bosque volcánico", "Tour vivencial con ordeño", "Cosecha de fresas y quesos", "Vista panorámica 360°"]
    },
    {
      id: 5,
      name: "Pozas Secretas de Sucre",
      description: "Relájate en pozas de manantial ocultas entre bosques primarios. Una joya natural de serenidad.",
      price: 30,
      duration: "2.5 horas",
      difficulty: "Fácil",
      rating: 4.7,
      image: "💧",
      highlights: ["Piscinas naturales cristalinas", "Interpretación ecológica", "Guías locales apasionados"]
    },
    {
      id: 6,
      name: "Parque Nacional del Agua Juan Castro Blanco",
      description: "Santuario de biodiversidad con ríos cristalinos y cascadas ocultas en el bosque nuboso.",
      price: 60,
      duration: "6 horas",
      difficulty: "Intermedio",
      rating: 5.0,
      image: "🏞️",
      highlights: ["Bosque primario", "Cascadas secretas", "Almuerzo con productos locales sostenibles"]
    }
  ];

  // Costa Rican services
  const additionalServices = {
    food: [
      { id: 'f1', name: 'Almuerzo Típico Costarricense', price: 15, icon: '🍽️', description: 'Casado tradicional con productos locales' },
      { id: 'f2', name: 'Café Orgánico Premium', price: 8, icon: '☕', description: 'Café de finca local con proceso artesanal' },
      { id: 'f3', name: 'Degustación de Frutas Tropicales', price: 12, icon: '🥭', description: 'Frutas frescas de la región' }
    ],
    hotel: [
      { id: 'h1', name: 'Lodge Eco-Sostenible', price: 85, icon: '🏨', description: 'Alojamiento certificado verde' },
      { id: 'h2', name: 'Cabaña en el Bosque', price: 120, icon: '🏕️', description: 'Experiencia inmersiva en naturaleza' },
      { id: 'h3', name: 'Hotel Boutique Quesada', price: 150, icon: '🌟', description: 'Lujo sostenible con vista al volcán' }
    ],
    transport: [
      { id: 't1', name: 'Transporte Privado 4x4', price: 45, icon: '🚗', description: 'Vehículo todo terreno con guía' },
      { id: 't2', name: 'Transfer desde San José', price: 80, icon: '🚌', description: 'Transporte cómodo desde la capital' },
      { id: 't3', name: 'Tour en Tractor (Chapulín Tour)', price: 25, icon: '🚜', description: 'Recorrido cultural comunitario' }
    ]
  };

  const addToCart = (item, type, quantity = people) => {
    const cartItem = {
      id: Math.random().toString(36).substr(2, 9),
      ...item,
      type,
      quantity,
      date: selectedDate,
      totalPrice: item.price * (type === 'tour' ? quantity : 1)
    };
    
    setCart(prev => [...prev, cartItem]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const handlePayment = () => {
    setShowPayment(true);
    setTimeout(() => {
      alert('¡Reserva confirmada exitosamente! Te contactaremos pronto. 🌿');
      setCart([]);
      setShowPayment(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            LA VIEJA ADVENTURES
          </h1>
          <p className="text-xl text-gray-300 mb-2">Aventuras sostenibles en Sucre, Ciudad Quesada</p>
          <p className="text-lg text-emerald-300">Explora la naturaleza con responsabilidad y mucha adrenalina 🌿</p>
          
          {/* Global Controls */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Calendar size={16} className="text-emerald-400" />
                Selecciona tu Fecha
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-black/30 border border-white/30 rounded-lg px-3 py-2 text-white"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Users size={16} className="text-emerald-400" />
                Número de Personas
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPeople(Math.max(1, people - 1))}
                  className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-bold">{people}</span>
                <button
                  onClick={() => setPeople(people + 1)}
                  className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
            {[
              { key: 'tours', label: 'Aventuras', icon: Mountain },
              { key: 'food', label: 'Alimentación', icon: Utensils },
              { key: 'hotel', label: 'Hospedaje', icon: Hotel },
              { key: 'transport', label: 'Transporte', icon: Car }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeTab === tab.key 
                      ? 'bg-emerald-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <IconComponent size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'tours' && (
              <div className="grid gap-6">
                {tours.map((tour) => (
                  <div key={tour.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{tour.image}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold">{tour.name}</h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-400">${tour.price}</div>
                              <div className="text-sm text-gray-400">por persona</div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{tour.description}</p>
                          
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                              <Clock size={16} className="text-emerald-400" />
                              <span className="text-sm">{tour.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Mountain size={16} className="text-green-400" />
                              <span className="text-sm">{tour.difficulty}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star size={16} className="text-yellow-400" />
                              <span className="text-sm">{tour.rating}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {tour.highlights.map((highlight, i) => (
                              <span key={i} className="px-3 py-1 bg-emerald-600/30 rounded-full text-xs border border-emerald-400/30">
                                {highlight}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => selectedDate && addToCart(tour, 'tour')}
                            disabled={!selectedDate}
                            className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 disabled:from-gray-600 disabled:to-gray-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-[1.02] disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            <Leaf size={20} />
                            {!selectedDate ? 'Selecciona Fecha Primero' : 'Reservar Aventura'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Additional Services */}
            {activeTab !== 'tours' && (
              <div className="grid gap-4 md:grid-cols-2">
                {additionalServices[activeTab]?.map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-2xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-300 mb-2">{service.description}</p>
                        <p className="text-emerald-400 font-bold">${service.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(service, activeTab, 1)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <Plus size={16} />
                      Agregar al Carrito
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Sidebar */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 h-fit sticky top-8">
            <div className="flex items-center gap-2 mb-6">
              <ShoppingCart className="text-emerald-400" />
              <h2 className="text-xl font-bold">Tu Reserva</h2>
              <span className="bg-emerald-600 text-xs px-2 py-1 rounded-full">{cart.length}</span>
            </div>

            {cart.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                <p>Tu carrito está vacío</p>
                <p className="text-sm">¡Agrega algunas aventuras!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="text-xs text-gray-400 mb-2">
                        {item.type === 'tour' && (
                          <>
                            <div>📅 Fecha: {item.date}</div>
                            <div>👥 Personas: {item.quantity}</div>
                          </>
                        )}
                        {item.type !== 'tour' && (
                          <div>📦 Cantidad: {item.quantity}</div>
                        )}
                      </div>
                      
                      <div className="text-emerald-400 font-bold">
                        ${item.totalPrice}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-4 mb-6">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span className="text-emerald-400">${getTotalPrice()}</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={showPayment}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 disabled:from-gray-600 disabled:to-gray-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {showPayment ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Procesando...
                    </>
                  ) : (
                    <>
                      <CreditCard size={20} />
                      Confirmar Reserva
                    </>
                  )}
                </button>

                <div className="mt-4 text-xs text-center text-gray-400">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle size={12} className="text-emerald-400" />
                    Pago seguro y confiable
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Leaf size={12} className="text-emerald-400" />
                    Turismo 100% sostenible
                  </div>
                  <div>WhatsApp: +506 6233-2535</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="text-emerald-400" />
              <h3 className="text-xl font-bold">Compromiso Eco-Sostenible</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <div className="text-emerald-400 font-bold">🌱 Reforestación</div>
                <p>Plantamos un árbol por cada visitante en tours de +4 horas</p>
              </div>
              <div>
                <div className="text-emerald-400 font-bold">🏘️ Comunidad Local</div>
                <p>Apoyamos microempresas y turismo comunitario</p>
              </div>
              <div>
                <div className="text-emerald-400 font-bold">🦅 Conservación</div>
                <p>Rescate y liberación de fauna silvestre</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-center gap-1">
                <MapPin size={16} className="text-emerald-400" />
                <span>Sucre, Ciudad Quesada, Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootPage;