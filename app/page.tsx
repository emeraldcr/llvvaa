'use client';
import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Camera,
  TreePine,
  Mountain,
  Waves,
  Star,
  ArrowRight,
  Menu,
  X,
  Heart,
  Users,
  Leaf,
  Globe,
  Award,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista de aventuras (ya adaptada a La Vieja Adventures)
  const adventures = [
  {
    title: "Expedición al Cñón Esmeralda",
    description: "Adéntrate en un cañón escondido entre selvas tropicales, explora cascadas de aguas turquesas y senderos secretos. Vive la energía de la naturaleza pura en cada paso.",
    duration: "3–4 horas",
    difficulty: "Moderado–Alto",
    price: "$59",
    image: "/IMG_4438.JPG",
    highlights: [
      "Acceso exclusivo a la cascada Zafiro",
      "Guías certificados con pasión local",
      "Equipo de seguridad de alta gama",
      "Puentes colgantes y cruces de río emocionantes",
      "Vestidores ecológicos, duchas y café orgánico"
    ]
  },
  {
    title: "Safari de Aves en la Zona del Quetzal",
    description: "Descubre el mundo oculto de más de 200 especies de aves, incluyendo al mítico quetzal. Fotografía, observa y conecta con la vida alada como nunca antes.",
    duration: "4 horas",
    difficulty: "Fácil",
    price: "$55",
    image: "/bird-watching-la-vieja.png",
    highlights: [
      "Guía ornitólogo certificado y bilingüe",
      "Binoculares profesionales incluidos",
      "Momentos de fotografía únicos e inolvidables"
    ]
  },
  {
    title: "Expedición Nocturna en Bosque Nuboso",
    description: "Adéntrate en la selva mágica de la noche. Escucha el canto de las ranas, sigue el destello de las luciérnagas y descubre la vida secreta bajo las estrellas.",
    duration: "3 horas",
    difficulty: "Fácil",
    price: "$45",
    image: "/tour-nocturno-la-vieja.png",
    highlights: [
      "Observación de fauna nocturna con guías expertos",
      "Linternas de bajo impacto para conservación",
      "Grupos pequeños para una experiencia inmersiva"
    ]
  },
  {
  "title": "Aventura Eco-Gourmet San Vicente",
  "description": "Vive una experiencia integral en San Vicente: explora senderos volcánicos, aprende tradiciones rurales, disfruta catas artesanales y conecta con la naturaleza pura de Costa Rica.",
  "duration": "5 horas",
  "difficulty": "Intermedio",
  "price": "$59",
  "image": "/cafe-san-vicente-la-vieja.png",
  "highlights": [
    "Senderismo guiado en bosque volcánico y cataratas ocultas",
    "Tour vivencial: ordeño de vaca y fabricación de chocolate artesanal",
    "Cosecha de fresas frescas y taller de quesos con cata de vinos locales",
    "Vista panorámica desde miradores naturales 360°",
    "Recorrido cultural en tractor comunitario (Chapulín Tour)"
  ]
}
,
  {
    title: "Pozas Secretas de Sucre",
    description: "Relájate en pozas de manantial ocultas entre bosques primarios. Una joya natural donde la serenidad y la frescura del agua pura te esperan.",
    duration: "2.5 horas",
    difficulty: "Fácil",
    price: "$30",
    image: "/pozas-secretas-sucre.png",
    highlights: [
      "Acceso a piscinas naturales de agua cristalina",
      "Senderos con interpretación ecológica",
      "Guías locales apasionados por la naturaleza"
    ]
  },
  {
    title: "Ruta de Volcanes Dormidos",
    description: "Explora cráteres extintos cubiertos de selva exuberante. Siente el pulso de la Tierra mientras descubres la historia geológica de la región.",
    duration: "5 horas",
    difficulty: "Moderado",
    price: "$50",
    image: "/volcanes-dormidos-la-vieja.png",
    highlights: [
      "Senderismo por cráteres antiguos",
      "Biodiversidad única y endémica",
      "Guías especializados en geología volcánica"
    ]
  },
  {
    title: "Tour Eco-Exploración Minas de Azufre",
    description: "Recorre senderos hacia antiguas minas de azufre, testigos vivos de la historia volcánica y ambiental del Parque Nacional del Agua Juan Castro Blanco.",
    duration: "5 horas",
    difficulty: "Moderado",
    price: "$45",
    image: "/minas-azufre-la-vieja.png",
    highlights: [
      "Caminata a formaciones de azufre activas",
      "Interpretación geológica y ecológica",
      "Avistamiento de flora y aves singulares"
    ]
  },
  {
    title: "Parque Nacional del Agua Juan Castro Blanco",
    description: "Descubre un santuario de biodiversidad con ríos cristalinos y cascadas ocultas en el corazón del bosque nuboso costarricense.",
    duration: "6 horas",
    difficulty: "Intermedio",
    price: "$60",
    image: "/parque-agua-juan-castro-blanco.png",
    highlights: [
      "Senderismo guiado en bosque primario",
      "Visitas a cascadas y pozas secretas",
      "Almuerzo con productos locales sostenibles"
    ]
  },
  {
    title: "Nacientes de Agua Vivas",
    description: "Conecta con la esencia del agua en manantiales de pureza absoluta. Un viaje espiritual hacia los orígenes de la vida.",
    duration: "3 horas",
    difficulty: "Moderado",
    price: "$35",
    image: "/nacientes-agua-la-vieja.png",
    highlights: [
      "Exploración de nacientes naturales",
      "Senderos educativos sobre conservación del agua",
      "Baño refrescante en aguas cristalinas"
    ]
  },
  {
    title: "RainWalk: Caminata Bajo la Lluvia",
    description: "Siente la lluvia tropical abrazándote mientras recorres senderos vivos. Ideal para quienes buscan reconectar con la naturaleza de manera auténtica.",
    duration: "2 horas",
    difficulty: "Fácil",
    price: "$25",
    image: "/caminata-lluvia-la-vieja.png",
    highlights: [
      "Senderismo con equipamiento impermeable incluido",
      "Observación de fauna activa bajo la lluvia",
      "Experiencia revitalizante y sensorial"
    ]
  }
];


  // Servicios principales de La Vieja Adventures
  const services = [
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: "Tours Ecológicos Guiados",
      description: "Guías locales con años de experiencia y pasión por la conservación.",
    },
    {
      icon: <Mountain className="h-8 w-8 text-green-600" />,
      title: "Actividades de Aventura",
      description: "Zip-lining, rappel y caminatas extremas para todos los niveles (¡incluso para valientes!).",
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Tours de Fotografía",
      description: "Captura la biodiversidad costarricense con consejos de fotógrafos profesionales.",
    },
    {
      icon: <Waves className="h-8 w-8 text-green-600" />,
      title: "Expediciones a Cascadas",
      description: "Descubre cascadas ocultas con piscinas naturales de agua cristalina.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Educación Ambiental",
      description: "Charlas y talleres sobre conservación para todas las edades.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Turismo Comunitario",
      description: "Conecta con comunidades locales, apoya la economía rural y aprende sus tradiciones.",
    },
  ];

  // Testimonios de clientes
  const testimonials = [
    {
      name: "María López",
      text: "“El tour al Cañón del Río La Vieja fue una experiencia inolvidable. El guía nos hizo reír mientras nos enseñaba sobre cada especie. ¡Volvería mil veces!”",
      avatar: "/clientes/maria-lopez.png",
    },
    {
      name: "Carlos Gómez",
      text: "“Nunca imaginé ver al quetzal tan de cerca. La organización, la seguridad y el café final hicieron que valiera cada céntimo.”",
      avatar: "/clientes/carlos-gomez.png",
    },
    {
      name: "Ana Rodríguez",
      text: "“La caminata bajo la lluvia fue mágica. Me sentí parte del bosque y aprendí muchísimo sobre las ranas y su hábitat.”",
      avatar: "/clientes/ana-rodriguez.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* ===========================
            Navegación Principal
         =========================== */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Nombre */}
            <div className="flex items-center space-x-2">
             
              <Image src={'/logo2.png'} alt="logo" width={60} height={60}></Image>
              <span className="text-xl font-bold text-gray-900">La Vieja Adventures</span>
            </div>

            {/* Menú Escritorio */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Inicio
              </a>
              <a href="#adventures" className="text-gray-700 hover:text-green-600 transition-colors">
                Aventuras
              </a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                Servicios
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                Nosotros
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                Testimonios
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contacto
              </a>
              <Button className="bg-green-600 hover:bg-green-700">Reserva Ya</Button>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Menú Móvil */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                  Inicio
                </a>
                <a href="#adventures" className="text-gray-700 hover:text-green-600 transition-colors">
                  Aventuras
                </a>
                <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                  Servicios
                </a>
                <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                  Nosotros
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                  Testimonios
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                  Contacto
                </a>
                <Button className="bg-green-600 hover:bg-green-700 w-fit">Reserva Ya</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ===========================
            Hero / Portada
         =========================== */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/IMG_3295.JPG')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ¡Bienvenidos a <span className="block text-green-400">La Vieja Adventures!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Aventuras sostenibles en Sucre, Ciudad Quesada. Explora la naturaleza con responsabilidad y mucha adrenalina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Ver Aventuras
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              Sobre Nosotros
            </Button>
          </div>
        </div>
      </section>

      {/* ===========================
            Sección de Servicios
         =========================== */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios integrales para que vivas la mejor experiencia eco-turística:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {adventures.map((adventure) => (
        <div
          key = {adventure.title}
          className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-200"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={adventure.image || "/placeholder.svg"}
              alt={adventure.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-green-700 font-semibold text-sm shadow-md">
              {adventure.price}
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

                {/* Botón de Reserva */}
                <a 
                  href="#contacto" 
                  className="mt-8 inline-block w-full text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Reserva tu Aventura
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* ===========================
            Sección “Sobre Nosotros”
         =========================== */}
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
                  <div className="text-gray-600">Visitantes </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
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

      {/* ===========================
            Sección de Sustentabilidad
         =========================== */}
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

      {/* ===========================
            Sección de Testimonios
         =========================== */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros aventureros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencias reales que te inspirarán a vivir la aventura con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm italic">"{item.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
            Sección de Contacto / Suscripción
         =========================== */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Únete a la aventura o escríbenos!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Si tienes dudas, sugerencias o quieres ser el primero en enterarte de promociones, déjanos tu
              mensaje o regístrate a nuestro boletín ecológico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contacto Directo</h3>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p>
                      Sucre, Ciudad Quesada<br />
                      Cerca del Parque Nacional del Agua Juan Castro Blanco<br />
                      Alajuela, Costa Rica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                    <p>
                      WhatsApp: +506 6233-2535<br />
                      Llamadas: +506 8643-0807
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Correo</h4>
                    <p>ciudadesmeraldacr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Horario</h4>
                    <p>
                      Lunes – Domingo: 6:00 AM – 6:00 PM<br />
                      Tours disponibles todos los días
                    </p>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Formulario de mensaje + boletín */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Responderemos en menos de 24 horas. Además, suscríbete a nuestro boletín eco para recibir
                  descuentos verdes y noticias.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Tu apellido" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono (Opcional)</Label>
                    <Input id="phone" placeholder="+506 1234-5678" />
                  </div>

                  <div>
                    <Label htmlFor="adventure">Aventura de Interés</Label>
                    <Input
                      id="adventure"
                      placeholder="¿Qué tour te gustaría reservar?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos tamaño de grupo, fechas, requisitos especiales..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Input id="newsletter" type="checkbox" />
                    <Label htmlFor="newsletter" className="text-gray-700">
                      Suscribirme al boletín eco
                    </Label>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===========================
            Footer
         =========================== */}
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
                <li>
                  <a href="#home" className="hover:text-green-400">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#adventures" className="hover:text-green-400">
                    Aventuras
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-green-400">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-green-400">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-400">
                    Contacto
                  </a>
                </li>
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
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 La Vieja Adventures. Todos los derechos reservados. | Ecoturismo sostenible y responsable
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
