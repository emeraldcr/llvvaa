'use client';

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Camera, TreePine, Mountain, Waves, Star, ArrowRight, Menu, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"
import { Button } from "./components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const adventures = [
  {
    title: "Tour al Cañón del Río La Vieja",
    description: "Sumergite en un cañón esmeralda con cascadas cristalinas y senderos escarpados en una aventura de caminata y travesía por el río.",
    duration: "3-4 horas",
    difficulty: "Intermedio a alto",
    price: "$29 - $59",
    image: "/aventura-en-la-jungla.png",
    highlights: [
      "Acceso a la cascada Zafiro",
      "Guías certificados",
      "Equipo de seguridad completo",
      "Senderos y cruces de río",
      "Vestidores, baños y duchas disponibles",
    ],
  },
  {
    title: "Bird Watching en Zona Quetzal",
    description: "Observá el majestuoso quetzal y más de 200 especies de aves en su hábitat natural en los bosques nubosos.",
    duration: "4 horas",
    difficulty: "Fácil",
    price: "$55",
    image: "/bird-watching.png",
    highlights: [
      "Guía ornitológico",
      "Binoculares incluidos",
      "Avistamiento de aves endémicas",
    ],
  },
  {
    title: "Tour Nocturno en el Bosque",
    description: "Explorá los secretos de la vida nocturna tropical con guías naturalistas expertos.",
    duration: "3 horas",
    difficulty: "Fácil",
    price: "$40",
    image: "/night-tour.png",
    highlights: [
      "Observación de fauna nocturna",
      "Equipos de iluminación profesional",
      "Pequeños grupos garantizados",
    ],
  },
  {
    title: "Senderos y Mirador Café San Vicente",
    description: "Descubrí vistas panorámicas y senderos entre cafetales en una experiencia cultural y natural única.",
    duration: "3 horas",
    difficulty: "Moderado",
    price: "$35",
    image: "/cafe-san-vicente.png",
    highlights: [
      "Tour de cafetal",
      "Degustación de café local",
      "Miradores espectaculares",
    ],
  },
  {
    title: "Pozas Secretas de Sucre",
    description: "Relajate en pozas naturales de aguas cristalinas en medio del bosque tropical.",
    duration: "2.5 horas",
    difficulty: "Fácil",
    price: "$30",
    image: "/pozas-sucre.png",
    highlights: [
      "Baño en pozas naturales",
      "Senderos entre naturaleza virgen",
      "Guías locales",
    ],
  },
  {
    title: "Volcanes Dormidos Tour",
    description: "Explorá antiguos volcanes ahora cubiertos de selva, llenos de biodiversidad y paisajes únicos.",
    duration: "5 horas",
    difficulty: "Moderado",
    price: "$50",
    image: "/volcanes-dormidos.png",
    highlights: [
      "Caminata entre cráteres antiguos",
      "Observación de flora endémica",
      "Guías expertos en geología",
    ],
  },
  {
    title: "Minas de Azufre del Norte",
    description: "Aventura histórica y natural en minas de azufre olvidadas rodeadas de vida silvestre.",
    duration: "4 horas",
    difficulty: "Intermedio",
    price: "$45",
    image: "/minas-azufre.png",
    highlights: [
      "Visita a minas abandonadas",
      "Historia y geología local",
      "Paisajes únicos",
    ],
  },
  {
    title: "Parque Nacional del Agua",
    description: "Conocé uno de los secretos naturales mejor guardados de Costa Rica: ríos, cascadas y biodiversidad.",
    duration: "6 horas",
    difficulty: "Intermedio",
    price: "$60",
    image: "/parque-agua.png",
    highlights: [
      "Caminatas guiadas",
      "Cascadas escondidas",
      "Almuerzo campestre incluido",
    ],
  },
  {
    title: "Nacientes de Agua Vivas",
    description: "Explorá nacientes de aguas puras rodeadas de bosque primario en una travesía inolvidable.",
    duration: "3 horas",
    difficulty: "Moderado",
    price: "$35",
    image: "/nacientes-agua.png",
    highlights: [
      "Nacientes naturales",
      "Senderos ecológicos",
      "Baño en aguas cristalinas",
    ],
  },
  {
    title: "Caminata Bajo la Lluvia",
    description: "Sumergite en la experiencia única de caminar bajo la lluvia tropical en un entorno seguro y mágico.",
    duration: "2 horas",
    difficulty: "Fácil",
    price: "$25",
    image: "/caminata-lluvia.png",
    highlights: [
      "Caminata interpretativa",
      "Equipo impermeable incluido",
      "Experiencia sensorial completa",
    ],
  },
];


  const services = [
    {
      icon: <TreePine className="h-8 w-8 text-green-600" />,
      title: "Guided Nature Tours",
      description: "Expert local guides with deep knowledge of flora and fauna",
    },
    {
      icon: <Mountain className="h-8 w-8 text-green-600" />,
      title: "Adventure Activities",
      description: "Zip-lining, rappelling, and hiking adventures for all skill levels",
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Photography Tours",
      description: "Capture the beauty of Costa Rica's biodiversity with professional guidance",
    },
    {
      icon: <Waves className="h-8 w-8 text-green-600" />,
      title: "Waterfall Expeditions",
      description: "Discover pristine waterfalls and natural swimming holes",
    },
  ]
  return (
   <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Rainforest Adventures</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </a>
              <a href="#adventures" className="text-gray-700 hover:text-green-600 transition-colors">
                Adventures
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </a>
              <Button className="bg-green-600 hover:bg-green-700">Book Now</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                  Home
                </a>
                <a href="#adventures" className="text-gray-700 hover:text-green-600 transition-colors">
                  Adventures
                </a>
                <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                  Contact
                </a>
                <Button className="bg-green-600 hover:bg-green-700 w-fit">Book Now</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Costa Rica's <span className="block text-green-400">Rainforest Paradise</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the ultimate nature and rainforest adventure in Sucre, Ciudad Quesada near Parque Nacional del
            Agua Juan Castro Blanco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Explore Adventures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive tourism services to help you experience the best of Costa Rica's natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adventures Section */}
      <section id="adventures" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Adventures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated selection of rainforest adventures
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
                  <CardDescription className="text-base">{adventure.description}</CardDescription>
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
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {adventure.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-green-600" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Book This Adventure</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Parque Nacional del Agua Juan Castro Blanco
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Located in the heart of Costa Rica's Central Valley, Parque Nacional del Agua Juan Castro Blanco is a
                  pristine cloud forest reserve that protects some of the country's most important watersheds and
                  biodiversity hotspots.
                </p>
                <p>
                  Our tourism center in Sucre, Ciudad Quesada serves as your gateway to this incredible natural
                  paradise, offering expert-guided tours and adventures that showcase the park's stunning waterfalls,
                  diverse wildlife, and lush rainforest ecosystems.
                </p>
                <p>
                  With over 20 years of experience in eco-tourism, our certified guides are passionate about
                  conservation and sharing the wonders of Costa Rica's natural heritage with visitors from around the
                  world.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">200+</div>
                  <div className="text-gray-600">Bird Species</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Waterfalls</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5,000+</div>
                  <div className="text-gray-600">Happy Visitors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Rainforest landscape"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Eco-Certified</div>
                    <div className="text-sm text-gray-600">Sustainable Tourism</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Ready to start your rainforest adventure? Get in touch with us today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      Sucre, Ciudad Quesada
                      <br />
                      Near Parque Nacional del Agua Juan Castro Blanco
                      <br />
                      Alajuela Province, Costa Rica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+506 2460-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@rainforestadventures.cr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Sunday: 6:00 AM - 6:00 PM
                      <br />
                      Tours available daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours to help plan your adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" placeholder="+506 1234-5678" />
                  </div>

                  <div>
                    <Label htmlFor="adventure">Interested Adventure</Label>
                    <Input id="adventure" placeholder="Which tour interests you most?" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your group size, preferred dates, and any special requirements..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">Rainforest Adventures</span>
              </div>
              <p className="text-gray-400">
                Your premier destination for authentic rainforest experiences in Costa Rica's most pristine natural
                environments.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-green-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#adventures" className="hover:text-green-400 transition-colors">
                    Adventures
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-green-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest adventures and conservation efforts</p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                  <span className="sr-only">Facebook</span>📘
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                  <span className="sr-only">Instagram</span>📷
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                  <span className="sr-only">Twitter</span>🐦
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Rainforest Adventures. All rights reserved. | Committed to sustainable eco-tourism in Costa
              Rica
            </p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}
