
import {
  Mountain,
  TreePine,
  Users,
  Leaf,
  Camera,
  Waves
} from 'lucide-react'

export const adventures = [
  {
    title: "Expedición al Cañón Esmeralda",
    slug: "canon-esmeralda",
    description: "Adéntrate en un cañón escondido entre selvas tropicales, con cascadas cristalinas, escaleras metálicas y travesías por río. Ideal si buscás adrenalina, naturaleza pura y aventura acuática.",
    duration: "3–4 horas",
    difficulty: "Intermedio–Alto",
    price: "$29–$59",
    age: 18,
    image: "/IMG_4438.JPG",
    highlights: [
      "Cascada Zafiro y senderos secretos",
      "Descensos guiados y cruces de río emocionantes",
      "Equipo de seguridad completo incluido",
      "Guías certificados y áreas de descanso"
    ],
    schedule: ["8:00 a.m.", "9:00 a.m.", "10:00 a.m."],
    recommendations: [
      "Zapatos de hiking o acuáticos",
      "Ropa de secado rápido y cambio completo",
      "Jacket impermeable y repelente natural",
      "Snacks y agua personal"
    ]
  },
  {
    title: "BirdWatching en el Bosque Nuboso",
    slug: "birdwatching-quetzal",
    description: "Explorá con guía experto el Bosque Eterno del Agua para ver quetzales, tucanes y colibríes. Ideal para fotografía, observación de aves y conexión silenciosa con la naturaleza.",
    duration: "2–3 horas",
    difficulty: "Bajo–Moderado",
    price: "$39–$89",
    age: 12,
    image: "/bird-watching-la-vieja.png",
    highlights: [
      "Guía ornitólogo y préstamo de binoculares",
      "Avistamiento de aves únicas como el quetzal",
      "Opciones con mirador, snack y souvenir"
    ],
    schedule: ["5:30 a.m.", "6:00 a.m.", "7:00 a.m.", "8:00 a.m."],
    recommendations: [
      "Ropa de colores neutros",
      "Zapatos cómodos y repelente",
      "Binoculares (si tenés) y cámara"
    ]
  },
  {
    title: "Expedición Nocturna – Selva Viva",
    slug: "expedicion-nocturna",
    description: "Explorá el bosque de noche y descubrí ranas, luciérnagas, lechuzas y hasta hongos bioluminiscentes. Ideal si te gusta la vida silvestre y la magia nocturna.",
    duration: "2–2.5 horas",
    difficulty: "Moderado",
    price: "$39–$69",
    age: 12,
    image: "/tour-nocturno-la-vieja.png",
    highlights: [
      "Caminata guiada bajo la luna",
      "Linternas, bebida caliente y zonas de observación",
      "Opciones con meditación, snack y souvenir"
    ],
    schedule: ["6:00 p.m.", "6:30 p.m.", "7:00 p.m."],
    recommendations: [
      "Ropa larga, repelente y calzado cerrado",
      "No usar perfumes, traer cámara o celular sin flash"
    ]
  },
  {
    title: "Pozas Secretas de Sucre",
    slug: "pozas-sucre",
    description: "Caminá hasta pozas escondidas para bañarte, relajarte y explorar entre rocas y bosque. Perfecto para reconectar con el agua y disfrutar sin prisa.",
    duration: "2.5–3 horas",
    difficulty: "Moderado",
    price: "$29–$59",
    age: 12,
    image: "/pozas-secretas-sucre.png",
    highlights: [
      "Pozas naturales escondidas",
      "Guía, bebida refrescante y zonas para descansar",
      "Opciones con picnic, bebidas artesanales y souvenir"
    ],
    schedule: ["8:30 a.m.", "10:00 a.m.", "1:30 p.m."],
    recommendations: [
      "Traje de baño, zapatos cerrados",
      "Toalla, muda seca y protector de objetos",
      "Bloqueador ecológico, hidratación"
    ]
  },
  {
    title: "Ruta de Volcanes Dormidos",
    slug: "volcanes-dormidos",
    description: "Explorá cráteres cubiertos de selva, miradores secretos y caminos de altura entre volcanes inactivos. Una ruta mágica para conectar con la energía de la Tierra.",
    duration: "3.5–5 horas",
    difficulty: "Intermedio",
    price: "$29–$59",
    age: 18,
    image: "/volcanes-dormidos-la-vieja.png",
    highlights: [
      "Senderos volcánicos y cráteres escondidos",
      "Guía ecoturístico, zonas de descanso y miradores",
      "Opciones con almuerzo, transporte y ruta extendida"
    ],
    schedule: ["8:00 a.m.", "9:00 a.m.", "10:00 a.m."],
    recommendations: [
      "Zapatos de montaña, ropa ligera",
      "Bloqueador, agua, snacks y cambio de ropa"
    ]
  },
  {
    title: "RainWalk: Caminata Bajo la Lluvia",
    slug: "rainwalk",
    description: "Caminá bajo la lluvia y sentí el bosque con todos los sentidos. Ideal para quienes buscan una experiencia natural auténtica y consciente.",
    duration: "2.5–3 horas",
    difficulty: "Suave–Moderado",
    price: "$39–$69",
    age: 8,
    image: "/caminata-lluvia-la-vieja.png",
    highlights: [
      "Guía, capa impermeable y bebida caliente",
      "Zonas de observación, mindfulness y souvenir",
      "Rutas adaptadas y bastones de apoyo"
    ],
    schedule: ["8:00 a.m.", "9:00 a.m.", "2:00 p.m.", "3:00 p.m."],
    recommendations: [
      "Ropa de secado rápido, zapatos con buen agarre",
      "Cambio seco, protector para celular, y muchas ganas de mojarse"
    ]
  }
];



export const services = [
  {
    icon: <TreePine className="h-8 w-8 text-green-600" />,
    title: "Tours Ecológicos Guiados",
    description: "Guías locales con años de experiencia y pasión por la conservación."
  },
  {
    icon: <Mountain className="h-8 w-8 text-green-600" />,
    title: "Actividades de Aventura",
    description: "Zip-lining, rappel y caminatas extremas para todos los niveles (¡incluso para valientes!)."
  },
  {
    icon: <Camera className="h-8 w-8 text-green-600" />,
    title: "Tours de Fotografía",
    description: "Captura la biodiversidad costarricense con consejos de fotógrafos profesionales."
  },
  {
    icon: <Waves className="h-8 w-8 text-green-600" />,
    title: "Expediciones a Cascadas",
    description: "Descubre cascadas ocultas con piscinas naturales de agua cristalina."
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: "Educación Ambiental",
    description: "Charlas y talleres sobre conservación para todas las edades."
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Turismo Comunitario",
    description: "Conecta con comunidades locales, apoya la economía rural y aprende sus tradiciones."
  }
];


export const testimonials = [
  {
    name: "María López",
    text: "“El tour al Cañón del Río La Vieja fue una experiencia inolvidable. El guía nos hizo reír mientras nos enseñaba sobre cada especie. ¡Volvería mil veces!”",
    avatar: "/clientes/maria-lopez.png"
  },
  {
    name: "Carlos Gómez",
    text: "“Nunca imaginé ver al quetzal tan de cerca. La organización, la seguridad y el café final hicieron que valiera cada céntimo.”",
    avatar: "/clientes/carlos-gomez.png"
  },
  {
    name: "Ana Rodríguez",
    text: "“La caminata bajo la lluvia fue mágica. Me sentí parte del bosque y aprendí muchísimo sobre las ranas y su hábitat.”",
    avatar: "/clientes/ana-rodriguez.png"
  }
];
