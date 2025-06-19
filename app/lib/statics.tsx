
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
    description: "Adéntrate en un cañón escondido entre selvas tropicales, explora cascadas de aguas turquesas y senderos secretos...",
    duration: "3–4 horas",
    difficulty: "Moderado–Alto",
    price: "$59",
    age : 15,
    image: "/IMG_4438.JPG",
    highlights: [
      "Acceso exclusivo a la cascada Zafiro",
      "Guías certificados con pasión local",
      "Equipo de seguridad de alta gama",
      "Puentes colgantes y cruces de río emocionantes",
      "Vestidores ecológicos, duchas y café orgánico"
    ],
    schedule: ["8:00 a.m.", "12:00 m.d."],
    recommendations: [
      "Zapatos de senderismo con buen agarre",
      "Ropa cómoda que se pueda mojar",
      "Toalla pequeña",
      "Repelente natural"
    ]
  },
  {
    title: "BirdWatching en la Zona del Quetzal",
    slug: "birdwatching-quetzal",
    description: "Descubre el mundo oculto de más de 200 especies de aves...",
    duration: "4 horas",
    difficulty: "Fácil",
    price: "$55",
    age : 10,
    image: "/bird-watching-la-vieja.png",
    highlights: [
      "Guía ornitólogo certificado y bilingüe",
      "Binoculares profesionales incluidos",
      "Momentos de fotografía únicos e inolvidables"
    ],
    schedule: ["6:00 a.m."],
    recommendations: [
      "Ropa de colores neutros",
      "Botella reutilizable con agua",
      "Protector solar ecológico",
      "Binoculares personales (opcional)"
    ]
  },
  {
    title: "Expedición Nocturna en Bosque Nuboso",
    slug: "expedicion-nocturna",
    description: "Adéntrate en la selva mágica de la noche...",
    duration: "3 horas",
    difficulty: "Fácil",
    price: "$45",
    age : 12,
    image: "/tour-nocturno-la-vieja.png",
    highlights: [
      "Observación de fauna nocturna con guías expertos",
      "Linternas de bajo impacto para conservación",
      "Grupos pequeños para una experiencia inmersiva"
    ],
    schedule: ["6:00 p.m.", "7:30 p.m."],
    recommendations: [
      "Ropa larga y ligera",
      "Zapatos cerrados o de montaña",
      "Evitar perfumes fuertes",
      "Linterna frontal (si tienes)"
    ]
  },
  {
    title: "Aventura en San Vicente",
    slug: "aventura-san-vicente",
    description: "Vive una experiencia integral en San Vicente...",
    duration: "5 horas",
    difficulty: "Intermedio",
    price: "$59",
    age : 12,
    image: "/cafe-san-vicente-la-vieja.png",
    highlights: [
      "Senderismo guiado en bosque volcánico y cataratas ocultas",
      "Tour vivencial: ordeño y chocolate artesanal",
      "Cosecha de fresas y taller de quesos con vino",
      "Vista panorámica 360°",
      "Chapulín Tour en tractor comunitario"
    ],
    schedule: ["9:00 a.m."],
    recommendations: [
      "Bloqueador solar y gorra",
      "Zapatos cerrados para montaña",
      "Ropa fresca pero adecuada para ordeño y talleres",
      "Cámara para fotos"
    ]
  },
  {
    title: "Pozas Secretas de Sucre",
    slug: "pozas-sucre",
    description: "Relájate en pozas de manantial ocultas...",
    duration: "2.5 horas",
    difficulty: "Fácil",
    price: "$30",
    age : 16,
    image: "/pozas-secretas-sucre.png",
    highlights: [
      "Acceso a piscinas naturales",
      "Senderos con interpretación ecológica",
      "Guías locales apasionados"
    ],
    schedule: ["10:00 a.m.", "1:00 p.m."],
    recommendations: [
      "Traje de baño y sandalias",
      "Toalla ecológica",
      "Bloqueador biodegradable",
      "Botella de agua"
    ]
  },
  {
    title: "Ruta de Volcanes Dormidos",
    slug: "volcanes-dormidos",
    description: "Explora cráteres extintos cubiertos de selva...",
    duration: "5 horas",
    difficulty: "Moderado",
    price: "$50",
    age : 16,
    image: "/volcanes-dormidos-la-vieja.png",
    highlights: [
      "Senderismo por cráteres antiguos",
      "Biodiversidad endémica",
      "Guías especializados en geología"
    ],
    schedule: ["7:30 a.m."],
    recommendations: [
      "Botas de montaña",
      "Bastón de senderismo (opcional)",
      "Snacks naturales",
      "Protección solar y gorra"
    ]
  },
  {
    title: "Tour Eco-Exploración Minas de Azufre",
    slug: "minas-azufre",
    description: "Recorre senderos hacia antiguas minas...",
    duration: "5 horas",
    difficulty: "Moderado",
    price: "$45",
    age : 18,
    image: "/minas-azufre-la-vieja.png",
    highlights: [
      "Formaciones de azufre activas",
      "Interpretación geológica",
      "Avistamiento de flora y aves singulares"
    ],
    schedule: ["8:30 a.m."],
    recommendations: [
      "Zapatos cerrados o de senderismo",
      "Sombrero o gorra",
      "Lentes de sol",
      "Snacks y agua"
    ]
  },
  {
    title: "Parque Nacional del Agua Juan Castro Blanco",
    slug: "parque-agua-juan-castro",
    description: "Descubre un santuario de biodiversidad...",
    duration: "6 horas",
    difficulty: "Intermedio",
    price: "$60",
    age : 14,
    image: "/parque-agua-juan-castro-blanco.png",
    highlights: [
      "Senderismo en bosque primario",
      "Cascadas y pozas secretas",
      "Almuerzo con productos locales"
    ],
    schedule: ["8:00 a.m."],
    recommendations: [
      "Zapatos resistentes al agua",
      "Cambio de ropa",
      "Snacks saludables",
      "Botella reutilizable"
    ]
  },
  {
    title: "Nacientes de Agua Vivas",
    slug: "nacientes-agua",
    description: "Conecta con la esencia del agua...",
    duration: "3 horas",
    difficulty: "Moderado",
    price: "$35",
    age : 8,
    image: "/nacientes-agua-la-vieja.png",
    highlights: [
      "Exploración de nacientes naturales",
      "Senderos educativos",
      "Baño en aguas cristalinas"
    ],
    schedule: ["9:00 a.m."],
    recommendations: [
      "Traje de baño bajo la ropa",
      "Sandalias con buena tracción",
      "Repelente ecológico",
      "Toalla ligera"
    ]
  },
  {
    title: "RainWalk: Caminata Bajo la Lluvia",
    slug: "rainwalk",
    description: "Siente la lluvia tropical abrazándote...",
    duration: "2 horas",
    difficulty: "Fácil",
    price: "$25",
    age : 8,
    image: "/caminata-lluvia-la-vieja.png",
    highlights: [
      "Senderismo con equipo impermeable",
      "Observación de fauna bajo lluvia",
      "Experiencia sensorial revitalizante"
    ],
    schedule: ["2:00 p.m.", "4:00 p.m."],
    recommendations: [
      "Ropa impermeable o capa plástica",
      "Botas de hule o resistentes al agua",
      "Cambio de ropa seca para después",
      "Gorra o sombrero impermeable"
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
