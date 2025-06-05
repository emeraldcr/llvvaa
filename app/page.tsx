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
  Instagram as Instagram,
  Facebook  as Facebook,
  Twitter   as Twitter,
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
      title: "Tour al Cañón del Río La Vieja",
      description: "Sumérgete en un cañón esmeralda con cascadas cristalinas y senderos escarpados. ¡Prepárate para mojarte y sonreír!",
      duration: "3–4 horas",
      difficulty: "Intermedio–Alto",
      price: "$29 – $59",
      image: "/IMG_4438.jpg",
      highlights: [
        "Acceso a la cascada Zafiro",
        "Guías locales certificados (con chistes malos sobre monos incluidos)",
        "Equipo de seguridad completo (casco, chaleco y casco mental de “estoy listo”)",
        "Senderos con puentes colgantes y cruces de río",
        "Vestidores, baños, duchas y café típico incluidos",
      ],
    },
    {
      title: "Bird Watching en Zona Quetzal",
      description: "Observa al majestuoso quetzal y más de 200 especies de aves multicolor. Binoculares y risas garantizadas.",
      duration: "4 horas",
      difficulty: "Fácil",
      price: "$55",
      image: "/bird-watching-la-vieja.png",
      highlights: [
        "Guía ornitológico bilingüe",
        "Binoculares de alto alcance incluidos",
        "Fotografía RAW sin zoom digital (porque el zoom de tu teléfono ya está sobrevalorado)",
      ],
    },
    {
      title: "Tour Nocturno en el Bosque",
      description: "Descubre los secretos de la vida nocturna tropical: ranas guerrilleras, murciélagos VIP y luciérnagas VIPerosas.",
      duration: "3 horas",
      difficulty: "Fácil",
      price: "$40",
      image: "/tour-nocturno-la-vieja.png",
      highlights: [
        "Observación de fauna nocturna con linternas ecológicas",
        "Charlas de conservación y fotos de trópicos brillando",
        "Pequeños grupos para evitar espantar a los búhos (y a ti)",
      ],
    },
    {
      title: "Senderos y Mirador Café San Vicente",
      description: "Recorre senderos entre cafetales, degusta café recién tostado y contempla paisajes de postal. ¡Un tueste de adrenalina y cafeína!",
      duration: "3 horas",
      difficulty: "Moderado",
      price: "$35",
      image: "/cafe-san-vicente-la-vieja.png",
      highlights: [
        "Tour de cafetal con demostración de tueste",
        "Degustación de café orgánico de la región",
        "Miradores panorámicos con 360° de verde infinito",
      ],
    },
    {
      title: "Pozas Secretas de Sucre",
      description: "Relájate en pozas naturales de aguas cristalinas, en medio de un bosque virgen. Spoiler: aquí los peces te harán cosquillas.",
      duration: "2.5 horas",
      difficulty: "Fácil",
      price: "$30",
      image: "/pozas-secretas-sucre.png",
      highlights: [
        "Baño en pozas con agua de manantial",
        "Senderos interpretativos sobre flora endémica",
        "Guías locales que conocen cada roca y rana famosa",
      ],
    },
    {
      title: "Volcanes Dormidos Tour",
      description: "Camina entre antiguos volcanes cubiertos de selva, descubre cráteres y paisajes que parecen de otro planeta. ¡Buen calzado obligatorio!",
      duration: "5 horas",
      difficulty: "Moderado",
      price: "$50",
      image: "/volcanes-dormidos-la-vieja.png",
      highlights: [
        "Caminata por cráteres volcánicos recubiertos de vegetación",
        "Observación de flora y fauna endémica única en Costa Rica",
        "Guías expertos en geología que cuentan anécdotas explosivas (sin humo)",
      ],
    },
    {
      title: "Minas de Azufre del Norte",
      description: "Explora minas abandonadas, conoce la historia azufrada y respira aire con aroma a huevo podrido… ¡sin riesgo de explosión!",
      duration: "4 horas",
      difficulty: "Intermedio",
      price: "$45",
      image: "/minas-azufre-la-vieja.png",
      highlights: [
        "Visita a galerías históricas de extracción de azufre",
        "Charlas sobre geología volcánica y cultura local",
        "Paisajes surrealistas y rocas de colores imposibles",
      ],
    },
    {
      title: "Parque Nacional del Agua Juan Castro Blanco",
      description: "Descubre uno de los secretos mejor guardados de Costa Rica: ríos cristalinos, cascadas escondidas y biodiversidad que quita el aliento.",
      duration: "6 horas",
      difficulty: "Intermedio",
      price: "$60",
      image: "/parque-agua-juan-castro-blanco.png",
      highlights: [
        "Caminatas guiadas por ecosistemas de bosque nuboso",
        "Visita a cascadas iridiscentes y pozas naturales",
        "Almuerzo campestre sostenible con ingredientes locales",
      ],
    },
    {
      title: "Nacientes de Agua Vivas",
      description: "Explora manantiales de agua pura rodeados de bosque primario: el mejor spa natural sin pagar membresía.",
      duration: "3 horas",
      difficulty: "Moderado",
      price: "$35",
      image: "/nacientes-agua-la-vieja.png",
      highlights: [
        "Fuente de aguas cristalinas y puras",
        "Senderos ecológicos con información de conservación",
        "Posibilidad de baño en frío extremo (opcional)",
      ],
    },
    {
      title: "Caminata Bajo la Lluvia",
      description: "Vive la lluvia tropical de otro modo: sin paraguas, solo botas y emoción. ¡Risas y gotas garantizadas!",
      duration: "2 horas",
      difficulty: "Fácil",
      price: "$25",
      image: "/caminata-lluvia-la-vieja.png",
      highlights: [
        "Caminata interpretativa durante lluvia ligera",
        "Equipo impermeable incluido (capa y botas)",
        "Conteo de ranas y flora solo bajo lluvia",
      ],
    },
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
      avatar: "/clientes/maria-lopez.jpg",
    },
    {
      name: "Carlos Gómez",
      text: "“Nunca imaginé ver al quetzal tan de cerca. La organización, la seguridad y el café final hicieron que valiera cada céntimo.”",
      avatar: "/clientes/carlos-gomez.jpg",
    },
    {
      name: "Ana Rodríguez",
      text: "“La caminata bajo la lluvia fue mágica. Me sentí parte del bosque y aprendí muchísimo sobre las ranas y su hábitat.”",
      avatar: "/clientes/ana-rodriguez.jpg",
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/IMG_3295.jpg')`,
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

      {/* ===========================
            Sección de Aventuras
         =========================== */}
      <section id="adventures" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Aventuras Destacadas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige tu próxima aventura en el corazón del bosque nuboso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adventures.map((adventure, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={adventure.image || "/placeholder.svg"}
                    alt={adventure.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{adventure.title}</CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold text-green-600">
                      {adventure.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-base text-gray-700 mb-2">
                    {adventure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {adventure.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mountain className="h-4 w-4" />
                      {adventure.difficulty}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Lo más destacado:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {adventure.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-green-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Reserva esta aventura
                  </Button>
                </CardContent>
              </Card>
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
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Cascadas accesibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5,000+</div>
                  <div className="text-gray-600">Visitantes felices</div>
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
                src="/equipo-guia-la-vieja.jpg"
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
                    <p>info@laviejaadventures.cr</p>
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

              {/* Íconos de redes sociales */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-2">Síguenos</h4>
                <div className="flex space-x-4 text-gray-500">
                  <Button size="icon" variant="ghost" className="hover:text-green-600">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-green-600">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="hover:text-green-600">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-5 w-5" />
                  </Button>
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
              <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 La Vieja Adventures. Todos los derechos reservados. | Ecoturismo sostenible y responsable
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
