
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
    "title": "Expedición al Cañón Esmeralda",
    "slug": "canon-esmeralda",
    "description": "Adéntrate en un cañón escondido entre selvas tropicales, con cascadas cristalinas, escaleras metálicas y travesías por río. Ideal si buscás adrenalina, naturaleza pura y aventura acuática.",
    "duration": "3–4 horas",
    "distance": "3.5 km ida y vuelta",
    "difficulty": "Intermedio–Alto",
    "age_min": 18,
    "age_max": 65,
    "location": "Cañón del Río La Vieja, Sucre, Ciudad Quesada, Costa Rica",
    "price_range": "$29–$59",
    "image": "/IMG_4438.JPG",
    "schedule": ["8:00 a.m.", "9:00 a.m.", "10:00 a.m."],
    "availability": {
      "days": "Solo fines de semana (excepto tour privado)",
      "private_available": true,
      "private_only_days": ["lunes", "martes", "miércoles", "jueves", "viernes"]
    },
    "packages": [
      {
        "name": "Básico",
        "price": "₡19,990 / $39",
        "includes": [
          "Tour guiado",
          "Equipo de seguridad completo",
          "Acceso a la cascada Zafiro",
          "Uso de instalaciones (vestidores, baños, duchas)"
        ]
      },
      {
        "name": "Pase del Día",
        "price": "₡24,990 / $39",
        "includes": [
          "Todo lo del paquete básico",
          "Acceso extendido a zonas sociales y áreas de descanso"
        ]
      },
      {
        "name": "Tour Privado",
        "price": "₡34,990 / $59",
        "available": "solo entre semana",
        "includes": [
          "Guía exclusivo",
          "Atención personalizada",
          "Flexibilidad total en horario"
        ]
      }
    ],
    "group_discount": {
      "min_people": 10,
      "price_per_person": "₡12,500",
      "note": "Incluye regalía para el organizador"
    },
    "highlights": [
      "Cascada Zafiro y senderos secretos",
      "Descensos guiados y cruces de río emocionantes",
      "Equipo de seguridad completo incluido",
      "Guías certificados y áreas de descanso"
    ],
    "recommendations": [
      "Zapatos de hiking o acuáticos",
      "Ropa de secado rápido y cambio completo",
      "Jacket impermeable y repelente natural",
      "Snacks y agua personal",
      "Toalla, ropa interior extra y cédula o pasaporte"
    ],
    "technical": {
      "escaleras": "Metálicas hasta 15 m, con anillos de protección",
      "terreno": "Senderos escarpados, piedras resbalosas, zonas húmedas",
      "otros": "Cruces del río hasta el pecho según nivel de agua, uso prolongado de agua"
    },
    "included_general": [
      "Guía certificado en rescate y primeros auxilios",
      "Arnés, casco, guantes y equipo de seguridad",
      "Acceso exclusivo a la cascada Zafiro",
      "Estacionamiento privado",
      "Vestidores, baños y duchas",
      "Seguro de responsabilidad civil básico"
    ],
    "ideal_for": [
      "Personas activas con gusto por la aventura física",
      "Amantes del agua y escenarios naturales escondidos",
      "Turismo de adrenalina y contacto directo con la naturaleza"
    ],
    "not_recommended_for": [
      "Personas con vértigo severo o movilidad limitada",
      "Embarazadas",
      "Condiciones médicas cardíacas, presión alta o lesiones graves"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por clima sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Monitoreo del clima 24 horas antes",
      "reschedule": "Reprogramación sin costo por mal clima",
      "refunds": "Reembolso total si no se puede realizar"
    },
    "extra_notes": [
      "Requiere buena técnica de pisada y estabilidad",
      "Llegar 15 minutos antes de la salida",
      "Evitar cremas, perfumes o jabones que contaminen el río"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  }
  ,
  {
    "title": "BirdWatching en el Bosque Nuboso",
    "slug": "birdwatching-quetzal",
    "description": "Explorá con guía experto el Bosque Eterno del Agua para ver quetzales, tucanes y colibríes. Ideal para fotografía, observación de aves y conexión silenciosa con la naturaleza.",
    "duration": "2–3 horas",
    "distance": "Variable según especie y mirador",
    "difficulty": "Bajo–Moderado",
    "age_min": 12,
    "location": "Bosque Eterno del Agua, Sucre, Ciudad Quesada, Costa Rica",
    "price_range": "$39–$89",
    "image": "/bird-watching-la-vieja.png",
    "schedule": ["5:30 a.m.", "6:00 a.m.", "7:00 a.m.", "8:00 a.m."],
    "availability": {
      "days": "Todos los días (según clima)",
      "private_available": true
    },
    "packages": [
      {
        "name": "Ala Curiosa",
        "price": "₡19,990 / $39",
        "includes": [
          "Caminata guiada de 2 horas",
          "Guía experto en aves del bosque nuboso",
          "Préstamo de binoculares",
          "Guía visual digital",
          "Seguro básico"
        ]
      },
      {
        "name": "Ala Experta",
        "price": "₡29,990 / $59",
        "includes": [
          "Todo lo anterior",
          "Acceso a mirador exclusivo",
          "Mini taller de técnicas de avistamiento",
          "Pausa de té o café caliente",
          "Bitácora personal"
        ]
      },
      {
        "name": "Ala Privilegiada (Privado)",
        "price": "₡49,990 / $89",
        "includes": [
          "Tour personalizado con guía privado",
          "Snack de frutas, nueces y pan casero",
          "Café de altura de la zona",
          "Souvenir natural (semilla o marca páginas)",
          "Ruta adaptada según especie objetivo"
        ]
      }
    ],
    "highlights": [
      "Guía ornitólogo y préstamo de binoculares",
      "Avistamiento de aves únicas como el quetzal",
      "Opciones con mirador, snack y souvenir"
    ],
    "recommendations": [
      "Ropa de colores neutros",
      "Zapatos cómodos y repelente",
      "Binoculares (si tenés) y cámara",
      "Cédula o pasaporte",
      "Bloqueador solar natural"
    ],
    "technical": {
      "terreno": "Senderos sombreados con zonas de observación y miradores",
      "ambiental": "Alta biodiversidad y humedad ideal para aves",
      "extras": "Paradas frecuentes y acceso a zonas tranquilas"
    },
    "included_general": [
      "Guía certificado y especializado en ornitología",
      "Binoculares compartidos",
      "Acceso a senderos de observación",
      "Zonas de descanso",
      "Seguro básico"
    ],
    "ideal_for": [
      "Amantes de las aves",
      "Fotógrafos de naturaleza",
      "Turistas que buscan tranquilidad y conexión con el entorno"
    ],
    "not_recommended_for": [
      "Personas con poca paciencia para la observación lenta",
      "Niños muy pequeños",
      "Personas que no puedan caminar en silencio"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por mal clima sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Condiciones de clima evaluadas 24 h antes",
      "reschedule": "Reprogramación sin penalización por lluvia",
      "refunds": "Reembolso completo si se cancela con anticipación"
    },
    "extra_notes": [
      "Evitá perfumes y ruidos fuertes para no espantar a las aves",
      "No se garantiza avistamiento de especies específicas",
      "Recomendamos llegar al menos 10 minutos antes del horario seleccionado"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  }
  ,
  {
    "title": "Expedición Nocturna – Selva Viva",
    "slug": "expedicion-nocturna",
    "description": "Explorá el bosque de noche y descubrí ranas, luciérnagas, lechuzas y hasta hongos bioluminiscentes. Ideal si te gusta la vida silvestre y la magia nocturna.",
    "duration": "2–2.5 horas",
    "distance": "Variable según observación",
    "difficulty": "Moderado",
    "age_min": 12,
    "location": "Sucre, Ciudad Quesada, Costa Rica",
    "price_range": "$39–$69",
    "image": "/tour-nocturno-la-vieja.png",
    "schedule": ["6:00 p.m.", "6:30 p.m.", "7:00 p.m."],
    "availability": {
      "days": "De miércoles a domingo",
      "private_available": true
    },
    "packages": [
      {
        "name": "Explorador Lunar",
        "price": "₡19,990 / $39",
        "includes": [
          "Guía certificado",
          "Linterna frontal",
          "Caminata guiada de 2 horas",
          "Bebida caliente (té o infusión)",
          "Seguro básico"
        ]
      },
      {
        "name": "Guardianes de la Noche",
        "price": "₡24,990 / $49",
        "includes": [
          "Todo lo anterior",
          "Paradas educativas con lupa y guía de especies",
          "Snack natural (fruta y pan artesanal)",
          "Acceso a zona especial de observación"
        ]
      },
      {
        "name": "Tour Nocturno Privado",
        "price": "₡34,990 / $69",
        "includes": [
          "Guía exclusivo",
          "Sesión de observación tranquila en zona biodiversa",
          "Bebida artesanal local",
          "Meditación bajo la luna",
          "Souvenir natural"
        ]
      }
    ],
    "highlights": [
      "Caminata guiada bajo la luna",
      "Linternas, bebida caliente y zonas de observación",
      "Opciones con meditación, snack y souvenir"
    ],
    "recommendations": [
      "Ropa larga, repelente y calzado cerrado",
      "No usar perfumes, traer cámara o celular sin flash"
    ],
    "technical": {
      "terreno": "Senderos con barro, vegetación y humedad",
      "condiciones": "Ambiente nocturno con fauna activa y sonidos naturales",
      "especies": "Ranas, lechuzas, insectos lumínicos, hongos bioluminiscentes"
    },
    "included_general": [
      "Guía certificado en fauna nocturna",
      "Linterna frontal",
      "Zonas de observación y descanso",
      "Seguro básico"
    ],
    "ideal_for": [
      "Amantes de la naturaleza salvaje",
      "Fotógrafos nocturnos",
      "Personas interesadas en turismo alternativo y sensorial"
    ],
    "not_recommended_for": [
      "Personas con miedo a la oscuridad",
      "Quienes no puedan caminar por terreno irregular",
      "Niños menores de 12 años"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por mal clima sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Condiciones monitoreadas 24 h antes",
      "reschedule": "Reprogramación sin penalización por clima extremo",
      "refunds": "Reembolso completo si se cancela con anticipación"
    },
    "extra_notes": [
      "No se garantiza ver fauna específica, depende del clima y la luna",
      "Evitar luces fuertes y ruidos durante la caminata",
      "Llegar 10 minutos antes del horario elegido"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  }
  ,
  {
    "title": "Ruta de Volcanes Dormidos",
    "slug": "volcanes-dormidos",
    "description": "Explorá cráteres cubiertos de selva, miradores secretos y caminos de altura entre volcanes inactivos. Una ruta mágica para conectar con la energía de la Tierra.",
    "duration": "3.5–5 horas",
    "distance": "3.5 km ida y vuelta",
    "difficulty": "Intermedio",
    "age_min": 18,
    "age_max": 65,
    "location": "Sucre, Ciudad Quesada, San Carlos, Costa Rica",
    "price_range": "$29–$59",
    "image": "/volcanes-dormidos-la-vieja.png",
    "schedule": ["8:00 a.m.", "9:00 a.m.", "10:00 a.m."],
    "availability": {
      "days": "Todos los días (sujeto a condiciones climáticas)",
      "private_available": true,
      "private_only_days": ["lunes", "martes", "miércoles", "jueves", "viernes"]
    },
    "packages": [
      {
        "name": "Explorador Natural",
        "price": "₡19,990 / $39",
        "includes": [
          "Guía certificado",
          "Acceso a ruta y cráteres",
          "Seguro básico",
          "Zonas de descanso",
          "Uso de bastones y equipo de seguridad"
        ]
      },
      {
        "name": "Pasaporte Volcánico",
        "price": "₡24,990 / $50",
        "includes": [
          "Todo lo del paquete anterior",
          "Almuerzo típico",
          "Bebida natural e hidratación",
          "Transporte local dentro de Sucre",
          "Acceso extendido a zonas sociales"
        ]
      },
      {
        "name": "Expedición Privada",
        "price": "₡,990 / $59",
        "available": "lunes a viernes",
        "includes": [
          "Guía exclusivo solo para tu grupo",
          "Almuerzo personalizado",
          "Acceso a miradores secretos",
          "Flexibilidad de horario y ruta"
        ]
      }
    ],
    "group_discount": {
      "min_people": 10,
      "price_per_person": "₡12,500",
      "note": "Incluye regalía para el organizador"
    },
    "highlights": [
      "Senderos volcánicos, cráteres escondidos y bosque nuboso",
      "Guía certificado, zonas de descanso, miradores y seguro básico",
      "Opciones con almuerzo típico, transporte local y tour privado"
    ],
    "recommendations": [
      "Zapatos de montaña con buen agarre",
      "Ropa ligera de secado rápido",
      "Bloqueador solar y repelente natural",
      "Agua, snacks, toalla y cambio de ropa",
      "Cédula o pasaporte"
    ],
    "technical": {
      "escaleras": "Metálicas hasta 15 m",
      "terreno": "Senderos de montaña con barro y roca húmeda",
      "ambiente": "Bosque nuboso con zonas de sombra y exposición solar",
      "otros": "Tramos de descenso y cruces de río opcionales"
    },
    "included_general": [
      "Guía certificado en ecoturismo y primeros auxilios",
      "Acceso completo a los sectores del tour",
      "Parqueo privado",
      "Zonas de descanso y sanitarios",
      "Asistencia durante todo el recorrido",
      "Seguro de responsabilidad civil básico"
    ],
    "ideal_for": [
      "Amantes del senderismo",
      "Personas interesadas en geología y naturaleza",
      "Turismo consciente y de bajo impacto",
      "Aventureros que disfrutan de rutas fuera de lo común"
    ],
    "not_recommended_for": [
      "Personas con movilidad limitada",
      "Condiciones cardíacas o de equilibrio sin supervisión",
      "Menores de edad",
      "Personas que no toleren terrenos húmedos o esfuerzo físico moderado"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por mal clima sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Monitoreo del clima 24 horas antes",
      "reschedule": "Reprogramación sin costo por mal clima",
      "refunds": "Reembolso total si no se puede realizar"
    },
    "extra_notes": [
      "Recomendamos llegar al menos 15 minutos antes del horario seleccionado",
      "No está permitido fumar durante el recorrido",
      "Es importante seguir las instrucciones del guía en todo momento",
      "El uso de jabones o cremas en la naturaleza no está permitido"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  }
  ,
  {
    "title": "RainWalk: Caminata Bajo la Lluvia",
    "slug": "rainwalk",
    "description": "Caminá bajo la lluvia y sentí el bosque con todos los sentidos. Ideal para quienes buscan una experiencia natural auténtica y consciente.",
    "duration": "2.5–3 horas",
    "distance": "Variable según ruta y ritmo",
    "difficulty": "Suave–Moderado",
    "age_min": 8,
    "location": "Sucre, San Carlos, Costa Rica",
    "price_range": "$39–$69",
    "image": "/caminata-lluvia-la-vieja.png",
    "schedule": ["8:00 a.m.", "9:00 a.m.", "2:00 p.m.", "3:00 p.m."],
    "availability": {
      "days": "Disponible todo el año",
      "private_available": true,
      "private_only_days": ["lunes", "martes", "miércoles", "jueves", "viernes"]
    },
    "packages": [
      {
        "name": "Caminante Silvestre",
        "price": "₡19,990 / $39",
        "includes": [
          "Guía certificado",
          "Capa impermeable",
          "Bastón de caminata",
          "Acceso a senderos temáticos",
          "Bebida caliente al final",
          "Seguro básico"
        ]
      },
      {
        "name": "Explorador del Diluvio",
        "price": "₡24,990 / $49",
        "includes": [
          "Todo lo anterior",
          "Snack saludable (frutas, semillas, pan de campo)",
          "Charla interpretativa sobre el ecosistema lluvioso",
          "Acceso a mirador secreto del valle"
        ]
      },
      {
        "name": "Rain Walk Privado",
        "price": "₡34,990 / $69",
        "includes": [
          "Guía exclusivo y personalizado",
          "Ruta adaptada al ritmo del grupo",
          "Sesión de mindfulness o meditación bajo la lluvia",
          "Bebida artesanal (kombucha, café de altura o infusión)",
          "Souvenir natural"
        ]
      }
    ],
    "highlights": [
      "Guía, capa impermeable y bebida caliente",
      "Zonas de observación, mindfulness y souvenir",
      "Rutas adaptadas y bastones de apoyo"
    ],
    "recommendations": [
      "Ropa de secado rápido, zapatos con buen agarre",
      "Cambio seco, protector para celular, y muchas ganas de mojarse"
    ],
    "technical": {
      "terreno": "Senderos naturales con barro, hojas húmedas y puentes rústicos",
      "ambiente": "Bosque húmedo con niebla, canto de aves y croar de ranas",
      "enfoque": "Turismo sensorial, reconexión y conciencia plena"
    },
    "included_general": [
      "Guía certificado en turismo consciente",
      "Capa impermeable y bastón de apoyo",
      "Bebida caliente al finalizar",
      "Zonas de observación y descanso",
      "Seguro básico"
    ],
    "ideal_for": [
      "Amantes del slow travel y naturaleza sensorial",
      "Personas que disfrutan de caminar bajo la lluvia",
      "Quienes buscan bienestar y conexión emocional con el entorno"
    ],
    "not_recommended_for": [
      "Personas que no toleran el frío o humedad",
      "Quienes necesiten superficies secas o firmes",
      "Niños menores de 8 años"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por lluvias extremas o tormentas sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Clima monitoreado el día anterior",
      "reschedule": "Reprogramación posible sin costo por condiciones extremas",
      "refunds": "Reembolso completo si no se puede realizar"
    },
    "extra_notes": [
      "Se recomienda llegar con actitud positiva y lista para mojarse",
      "No es una caminata para evitar la lluvia, sino para disfrutarla",
      "No se permite basura ni productos contaminantes en el recorrido"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Mirador El Colibrí",
    "slug": "mirador-el-colibri",
    "description": "Contemplá vistas únicas del bosque nuboso y observá colibríes de colores en un mirador elevado. Perfecto para relajarse y apreciar la naturaleza.",
    "duration": "1–2 horas",
    "distance": "1 km ida y vuelta",
    "difficulty": "Bajo",
    "age_min": 5,
    "age_max": 75,
    "location": "Mirador El Colibrí, Sucre, Ciudad Quesada, Costa Rica",
    "price_range": "$19–$29",
    "image": "/IMG_9151.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "1:00 p.m.", "3:00 p.m."],
    "packages": [
      {
        "name": "Mirador Básico",
        "price": "₡9,990 / $19",
        "includes": [
          "Acceso al mirador",
          "Guía local",
          "Seguro básico"
        ]
      },
      {
        "name": "Mirador Premium",
        "price": "₡14,990 / $29",
        "includes": [
          "Todo lo anterior",
          "Bebida caliente",
          "Souvenir artesanal"
        ]
      }
    ],
    "highlights": [
      "Vistas panorámicas del bosque nuboso",
      "Avistamiento de colibríes y otras aves",
      "Sendero corto y accesible"
    ],
    "recommendations": [
      "Llevar cámara y binoculares",
      "Ropa cómoda y bloqueador solar"
    ],
    "technical": {
      "terreno": "Sendero de 1 km con barandas y descansos",
      "elevación": "150 m de ascenso",
      "accesibilidad": "Apto para toda la familia"
    },
    "included_general": [
      "Acceso al mirador",
      "Guía acompañante",
      "Seguro básico",
      "Zonas de descanso"
    ],
    "ideal_for": [
      "Familias y fotógrafos",
      "Amantes de vistas panorámicas",
      "Personas que buscan actividades ligeras"
    ],
    "not_recommended_for": [
      "Personas con vértigo severo",
      "Quienes no puedan caminar 1 km"
    ],
    "extra_notes": [
      "Llegar 10 minutos antes del inicio",
      "Se permite llevar snack ligero"
    ]
  },
  {
    "title": "Canopy Extremo - Vuelo del Quetzal",
    "slug": "canopy-extremo-quetzal",
    "description": "Deslizate por las líneas de canopy más largas de la región y experimentá la sensación de volar sobre el bosque nuboso. Una aventura aérea única con vistas espectaculares.",
    "duration": "2.5–3 horas",
    "distance": "12 líneas de canopy - 2.5 km total",
    "difficulty": "Moderado–Alto",
    "age_min": 12,
    "age_max": 70,
    "location": "Bosque Nuboso de Monteverde, San Carlos, Costa Rica",
    "price_range": "$49–$89",
    "image": "/canopy-zipline-monteverde.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "1:00 p.m.", "3:00 p.m."],
    "availability": {
      "days": "Todos los días (sujeto a condiciones climáticas)",
      "private_available": true
    },
    "packages": [
      {
        "name": "Vuelo Básico",
        "price": "₡24,990 / $49",
        "includes": [
          "12 líneas de canopy",
          "Equipo de seguridad completo",
          "Guía certificado",
          "Transporte desde punto de encuentro",
          "Seguro de aventura"
        ]
      },
      {
        "name": "Vuelo Premium",
        "price": "₡34,990 / $69",
        "includes": [
          "Todo lo anterior",
          "Línea Superman de 800m",
          "Columpio Tarzan",
          "Fotos y video profesional",
          "Snack energético post-aventura"
        ]
      },
      {
        "name": "Experiencia VIP",
        "price": "₡44,990 / $89",
        "includes": [
          "Tour privado con guía exclusivo",
          "Acceso a plataformas panorámicas",
          "Almuerzo en mirador",
          "Certificado de aventurero",
          "Transfer privado"
        ]
      }
    ],
    "highlights": [
      "12 líneas de canopy con vistas del bosque nuboso",
      "Línea Superman de 800 metros",
      "Plataformas de observación elevadas",
      "Guías expertos en seguridad aérea"
    ],
    "recommendations": [
      "Ropa deportiva cómoda y cerrada",
      "Zapatos deportivos con buen agarre",
      "No llevar objetos sueltos",
      "Cabello largo recogido",
      "Cédula o pasaporte"
    ],
    "technical": {
      "líneas": "12 cables de acero galvanizado, longitud total 2.5 km",
      "altura": "Hasta 150 metros sobre el suelo del bosque",
      "velocidad": "Hasta 60 km/h en línea Superman",
      "plataformas": "14 plataformas de madera certificada en árboles centenarios"
    },
    "included_general": [
      "Arnés de cuerpo completo y casco",
      "Guantes especializados",
      "Polea de alta velocidad",
      "Guía certificado en rescate vertical",
      "Seguro de responsabilidad civil",
      "Briefing de seguridad completo"
    ],
    "ideal_for": [
      "Aventureros que buscan adrenalina",
      "Amantes de las alturas y vistas panorámicas",
      "Fotógrafos de aventura",
      "Personas activas sin miedo a las alturas"
    ],
    "not_recommended_for": [
      "Personas con vértigo severo",
      "Embarazadas",
      "Problemas cardíacos o de presión",
      "Lesiones en espalda o articulaciones",
      "Peso mayor a 120 kg o menor a 35 kg"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 30,
      "cancellation": {
        "full_refund": "con más de 24 h de anticipación",
        "reschedule": "por clima sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)",
        "Tarjetas de crédito"
      ]
    },
    "climate_policy": {
      "monitoring": "Monitoreo constante de vientos y visibilidad",
      "reschedule": "Reprogramación inmediata por condiciones adversas",
      "refunds": "Reembolso total si la actividad se cancela por seguridad"
    },
    "extra_notes": [
      "Peso mínimo 35 kg, máximo 120 kg",
      "Llegar 30 minutos antes para briefing de seguridad",
      "No está permitido el uso de cámaras personales durante el vuelo",
      "Se proporcionan fotos y videos profesionales"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Safari ATV por Senderos Volcánicos",
    "slug": "safari-atv-volcanico",
    "description": "Conduce tu propio ATV por senderos de montaña, cruza ríos y llega hasta miradores con vistas del volcán Arenal. Aventura todoterreno para valientes.",
    "duration": "3–4 horas",
    "distance": "25 km de senderos mixtos",
    "difficulty": "Intermedio–Alto",
    "age_min": 16,
    "age_max": 65,
    "location": "Faldas del Volcán Arenal, La Fortuna, Costa Rica",
    "price_range": "$69–$129",
    "image": "/atv-arenal-volcano-tour.jpg",
    "schedule": ["8:00 a.m.", "1:00 p.m."],
    "availability": {
      "days": "Todos los días (excepto lluvia extrema)",
      "private_available": true
    },
    "packages": [
      {
        "name": "Aventurero Solo",
        "price": "₡34,990 / $69",
        "includes": [
          "ATV individual por 3 horas",
          "Casco y equipo de protección",
          "Guía líder en ATV",
          "Parada en mirador volcánico",
          "Seguro de vehículo"
        ]
      },
      {
        "name": "Expedición Doble",
        "price": "₡49,990 / $99",
        "includes": [
          "ATV doble para 2 personas",
          "Ruta extendida con cascada",
          "Almuerzo campestre",
          "Visita a comunidad local",
          "Fotos de la aventura"
        ]
      },
      {
        "name": "Safari Privado VIP",
        "price": "₡64,990 / $129",
        "includes": [
          "Tour privado con guía exclusivo",
          "Ruta personalizada",
          "Picnic gourmet en la montaña",
          "ATV premium de última generación",
          "Transfer hotel incluido"
        ]
      }
    ],
    "highlights": [
      "Conducción por senderos volcánicos únicos",
      "Vistas panorámicas del volcán Arenal",
      "Cruces de ríos y terreno variado",
      "Paradas en miradores exclusivos"
    ],
    "recommendations": [
      "Ropa que se pueda ensuciar",
      "Zapatos cerrados deportivos",
      "Gafas de sol y bloqueador",
      "Cambio de ropa completo",
      "Licencia de conducir vigente"
    ],
    "technical": {
      "vehículos": "ATVs 4x4 automáticos, modelos recientes",
      "terreno": "Senderos de montaña, cruces de río, caminos de tierra",
      "elevación": "Desde 200m hasta 800m sobre nivel del mar",
      "dificultad": "Requiere experiencia básica en manejo"
    },
    "included_general": [
      "ATV en perfectas condiciones",
      "Casco y equipo de protección completo",
      "Combustible incluido",
      "Guía certificado en primeros auxilios",
      "Seguro de responsabilidad civil",
      "Briefing de seguridad y práctica"
    ],
    "ideal_for": [
      "Amantes de vehículos todoterreno",
      "Aventureros con licencia de conducir",
      "Grupos de amigos",
      "Personas que disfrutan la velocidad controlada"
    ],
    "not_recommended_for": [
      "Menores de 16 años como conductores",
      "Personas sin experiencia de manejo",
      "Embarazadas",
      "Problemas de espalda o cervicales",
      "Condiciones que afecten la coordinación"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por clima sin penalización"
      },
      "requirements": "Licencia de conducir vigente obligatoria",
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Evaluación de condiciones del terreno diariamente",
      "reschedule": "Reprogramación por lluvia intensa o terreno peligroso",
      "refunds": "Reembolso completo si se cancela por seguridad"
    },
    "extra_notes": [
      "Es obligatorio presentar licencia de conducir vigente",
      "Edad mínima 16 años para conducir solo",
      "Menores pueden ir de acompañantes con adulto",
      "Se recomienda experiencia previa en manejo de vehículos"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Safari de Vida Silvestre en Manuel Antonio",
    "slug": "safari-manuel-antonio",
    "description": "Explorá el Parque Nacional Manuel Antonio y observá perezosos, monos cara blanca, iguanas y más de 200 especies de aves en su hábitat natural.",
    "duration": "4–5 horas",
    "distance": "3 km de senderos naturales",
    "difficulty": "Bajo–Moderado",
    "age_min": 5,
    "age_max": 80,
    "location": "Parque Nacional Manuel Antonio, Puntarenas, Costa Rica",
    "price_range": "$59–$119",
    "image": "/manuel-antonio-wildlife-safari.jpg",
    "schedule": ["6:00 a.m.", "8:00 a.m.", "2:00 p.m."],
    "availability": {
      "days": "Todos los días excepto lunes",
      "private_available": true
    },
    "packages": [
      {
        "name": "Safari Familiar",
        "price": "₡29,990 / $59",
        "includes": [
          "Guía naturalista certificado",
          "Entrada al Parque Nacional",
          "Telescopio para observación",
          "Botella de agua reutilizable",
          "Guía de especies ilustrada"
        ]
      },
      {
        "name": "Expedición Fotográfica",
        "price": "₡44,990 / $89",
        "includes": [
          "Todo lo anterior",
          "Taller de fotografía de naturaleza",
          "Acceso a senderos fotográficos exclusivos",
          "Snack tropical",
          "Tiempo extendido para avistamientos"
        ]
      },
      {
        "name": "Safari VIP Privado",
        "price": "₡59,990 / $119",
        "includes": [
          "Guía privado especializado",
          "Transporte privado desde hotel",
          "Almuerzo con vista al océano",
          "Acceso a playa privada",
          "Equipo profesional de observación"
        ]
      }
    ],
    "highlights": [
      "Avistamiento garantizado de perezosos y monos",
      "Más de 200 especies de aves identificadas",
      "Combinación de bosque tropical y playa",
      "Senderos accesibles para toda la familia"
    ],
    "recommendations": [
      "Ropa de colores neutros",
      "Zapatos cómodos para caminar",
      "Repelente biodegradable",
      "Cámara con zoom",
      "Sombrero y bloqueador solar"
    ],
    "technical": {
      "senderos": "3 senderos principales, bien mantenidos",
      "fauna": "Perezosos, monos cara blanca, mapaches, iguanas",
      "aves": "Tucanes, momotos, tangaras, colibríes",
      "ecosistema": "Bosque húmedo tropical y costa del Pacífico"
    },
    "included_general": [
      "Guía naturalista bilingüe",
      "Entrada al Parque Nacional",
      "Telescopio compartido",
      "Información educativa",
      "Seguro básico de turismo"
    ],
    "ideal_for": [
      "Familias con niños",
      "Amantes de la vida silvestre",
      "Fotógrafos de naturaleza",
      "Personas de todas las edades",
      "Primeras visitas a Costa Rica"
    ],
    "not_recommended_for": [
      "Personas con movilidad muy limitada",
      "Quienes no toleren caminar 3 km"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 30,
      "cancellation": {
        "full_refund": "con más de 24 h de anticipación",
        "reschedule": "por mal clima sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)",
        "Tarjetas de crédito"
      ]
    },
    "climate_policy": {
      "monitoring": "Condiciones evaluadas cada mañana",
      "reschedule": "Reprogramación por lluvia intensa",
      "refunds": "Reembolso si el parque cierra"
    },
    "extra_notes": [
      "Parque cerrado los lunes",
      "Mejor avistamiento en horarios matutinos",
      "Se requiere silencio para no espantar animales",
      "No alimentar a los animales silvestres"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Canyoning Extremo - Cascadas del Diablo",
    "slug": "canyoning-cascadas-diablo",
    "description": "Descende por rappel cascadas de hasta 45 metros en un cáñon selvático. Adrenalina pura combinada con la belleza de piscinas naturales cristalinas.",
    "duration": "4–5 horas",
    "distance": "5 rappeles y 2 km de caminata",
    "difficulty": "Alto",
    "age_min": 16,
    "age_max": 60,
    "location": "Cáñon de las Cascadas, Monteverde, Costa Rica",
    "price_range": "$89–$149",
    "image": "/canyoning-rappel-waterfalls.jpg",
    "schedule": ["8:00 a.m.", "1:00 p.m."],
    "availability": {
      "days": "Martes a domingo (sujeto a nivel del agua)",
      "private_available": true
    },
    "packages": [
      {
        "name": "Aventura Vertical",
        "price": "₡44,990 / $89",
        "includes": [
          "5 rappeles guiados",
          "Equipo técnico completo",
          "Guía certificado en rescate vertical",
          "Snack energético",
          "Seguro de aventura extrema"
        ]
      },
      {
        "name": "Expedición Completa",
        "price": "₡64,990 / $129",
        "includes": [
          "Todo lo anterior",
          "Almuerzo junto a cascada",
          "Tiempo libre en piscinas naturales",
          "Fotos y video de la aventura",
          "Transfer desde hoteles cercanos"
        ]
      },
      {
        "name": "Canyoning VIP",
        "price": "₡74,990 / $149",
        "includes": [
          "Grupo privado máximo 4 personas",
          "Doble guía de seguridad",
          "Equipo premium",
          "Comida gourmet en la selva",
          "Transfer privado ida y vuelta"
        ]
      }
    ],
    "highlights": [
      "5 rappeles en cascadas de 15 a 45 metros",
      "Piscinas naturales de agua cristalina",
      "Cáñon virgen rodeado de selva tropical",
      "Guías expertos en rescate vertical"
    ],
    "recommendations": [
      "Traje de baño y ropa deportiva",
      "Zapatos deportivos que se puedan mojar",
      "Toalla y cambio completo de ropa",
      "No llevar joyas u objetos de valor",
      "Actitud positiva y sin miedo a las alturas"
    ],
    "technical": {
      "rappeles": "5 descensos: 15m, 20m, 25m, 35m y 45m",
      "equipo": "Arnés de cuerpo completo, casco, dispositivo de freno",
      "agua": "Piscinas naturales de 2 a 8 metros de profundidad",
      "terreno": "Roca volcánica, vegetación densa, agua permanente"
    },
    "included_general": [
      "Arnés profesional de cuerpo completo",
      "Casco de escalada",
      "Dispositivo de descenso autoblocante",
      "Cuerdas dinámicas certificadas",
      "Guía certificado IRATA/SPRAT",
      "Kit de primeros auxilios especializado"
    ],
    "ideal_for": [
      "Aventureros experimentados",
      "Amantes de deportes extremos",
      "Personas sin miedo a las alturas",
      "Buscadores de adrenalina máxima"
    ],
    "not_recommended_for": [
      "Personas con vértigo severo",
      "Problemas cardíacos o de presión",
      "Embarazadas",
      "Menores de 16 años",
      "Personas que no sepan nadar",
      "Lesiones en espalda o articulaciones"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 60,
      "advance_booking": "Mínimo 3 días de anticipación",
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por nivel de agua peligroso sin penalización"
      },
      "requirements": "Saber nadar y firmar exoneración de responsabilidad",
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    "climate_policy": {
      "monitoring": "Nivel del agua monitoreado diariamente",
      "reschedule": "Reprogramación obligatoria por crecidas peligrosas",
      "refunds": "Reembolso total por condiciones inseguras"
    },
    "extra_notes": [
      "Actividad de alto riesgo, requiere excelente condición física",
      "Saber nadar es obligatorio",
      "Peso máximo 110 kg, mínimo 50 kg",
      "Se requiere firmar exoneración de responsabilidad"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Ascenso al Volcán Arenal y Aguas Termales",
    "slug": "volcan-arenal-aguas-termales",
    "description": "Caminata hasta los flujos de lava del Volcán Arenal seguida de relajación en aguas termales naturales. La combinación perfecta de aventura y bienestar.",
    "duration": "6–7 horas",
    "distance": "4 km de senderos volcánicos",
    "difficulty": "Moderado–Alto",
    "age_min": 12,
    "age_max": 70,
    "location": "Parque Nacional Volcán Arenal, La Fortuna, Costa Rica",
    "price_range": "$79–$139",
    "image": "/volcan-arenal-hot-springs.jpg",
    "schedule": ["7:00 a.m.", "2:00 p.m."],
    "availability": {
      "days": "Todos los días (sujeto a actividad volcánica)",
      "private_available": true
    },
    "packages": [
      {
        "name": "Aventura Volcánica",
        "price": "₡39,990 / $79",
        "includes": [
          "Caminata guiada al volcán",
          "Entrada al Parque Nacional",
          "Acceso a aguas termales básicas",
          "Almuerzo típico",
          "Transporte local"
        ]
      },
      {
        "name": "Experiencia Premium",
        "price": "₡59,990 / $109",
        "includes": [
          "Todo lo anterior",
          "Acceso a resort de aguas termales",
          "Masaje relajante de 30 minutos",
          "Cena con vista al volcán",
          "Transfer desde hoteles"
        ]
      },
      {
        "name": "VIP Volcán & Spa",
        "price": "₡69,990 / $139",
        "includes": [
          "Tour privado personalizado",
          "Resort de lujo con aguas termales",
          "Spa completo y tratamientos",
          "Cena gourmet romántica",
          "Transfer privado y champaña"
        ]
      }
    ],
    "highlights": [
      "Vistas del volcán activo más famoso de Costa Rica",
      "Caminata por flujos de lava solidificada",
      "Relajación en aguas termales naturales",
      "Fauna y flora volcánica única"
    ],
    "recommendations": [
      "Zapatos de hiking con buen agarre",
      "Ropa en capas y jacket liviano",
      "Traje de baño para aguas termales",
      "Toalla y ropa de cambio",
      "Cámara y binoculares"
    ],
    "technical": {
      "elevación": "Ascenso gradual de 300m",
      "terreno": "Senderos de lava, bosque tropical y miradores",
      "volcán": "Activo pero en fase de bajo riesgo",
      "termales": "Aguas naturales de 38-42°C"
    },
    "included_general": [
      "Guía vulcanologista certificado",
      "Entrada al Parque Nacional",
      "Acceso a aguas termales",
      "Seguro de parque nacional",
      "Información educativa especializada"
    ],
    "ideal_for": [
      "Amantes de la geología y vulcanología",
      "Parejas románticas",
      "Fotógrafos de paisajes",
      "Personas que buscan relajación post-aventura"
    ],
    "not_recommended_for": [
      "Personas con problemas respiratorios severos",
      "Embarazadas (para aguas termales muy calientes)",
      "Niños menores de 12 años en rutas difíciles"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 40,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por actividad volcánica sin penalización"
      },
      "payment_methods": [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)",
        "Tarjetas de crédito"
      ]
    },
    "climate_policy": {
      "monitoring": "Actividad volcánica monitoreada 24/7",
      "reschedule": "Reprogramación automática por alertas volcánicas",
      "refunds": "Reembolso total por cierre del parque"
    },
    "extra_notes": [
      "La actividad del volcán puede variar las rutas disponibles",
      "Aguas termales tienen restricciones de tiempo por salud",
      "Se recomienda hidratación constante",
      "Las vistas del volcán dependen del clima"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Selvatura Canopy - Parque Completo",
    "slug": "selvatura-canopy-completo",
    "description": "Experiencia completa con ziplines, puentes colgantes, jardín de mariposas y santuario de perezosos. El parque de aventura más completo de Monteverde.",
    "duration": "6-8 horas",
    "distance": "15 ziplines + 3 km de puentes",
    "difficulty": "Moderado",
    "age_min": 8,
    "age_max": 75,
    "location": "Selvatura Adventure Park, Monteverde, Costa Rica",
    "price_range": "$69-$149",
    "image": "/selvatura-canopy-park.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "1:00 p.m."],
    "availability": {
      "days": "Todos los días",
      "private_available": true
    },
    "packages": [
      {
        "name": "Aventura Básica",
        "price": "₡34,990 / $69",
        "includes": [
          "15 líneas de canopy",
          "Puentes colgantes (3 km)",
          "Jardín de mariposas",
          "Equipo de seguridad",
          "Guía naturalista"
        ]
      },
      {
        "name": "Experiencia Completa",
        "price": "₡54,990 / $109",
        "includes": [
          "Todo lo anterior",
          "Santuario de perezosos",
          "Jardín de colibríes",
          "Almuerzo en el parque",
          "Tour educativo de reptiles"
        ]
      },
      {
        "name": "VIP Park Experience",
        "price": "₡74,990 / $149",
        "includes": [
          "Acceso VIP a todas las atracciones",
          "Guía privado especializado",
          "Fotografía profesional",
          "Almuerzo gourmet",
          "Transfer desde hoteles"
        ]
      }
    ],
    "highlights": [
      "15 ziplines con vistas espectaculares",
      "Puentes colgantes únicos en el dosel",
      "Jardín de mariposas con 30+ especies",
      "Santuario de perezosos para observación"
    ],
    "recommendations": [
      "Ropa cómoda y cerrada",
      "Zapatos deportivos con agarre",
      "Cámara para la vida silvestre",
      "Repelente biodegradable"
    ],
    "technical": {
      "ziplines": "15 cables, longitud total 3.5 km",
      "puentes": "8 puentes colgantes, altura hasta 180m",
      "fauna": "Mariposas, perezosos, colibríes, reptiles",
      "seguridad": "Doble línea de vida en puentes"
    },
    "included_general": [
      "Arnés de seguridad completo",
      "Casco y guantes",
      "Acceso a todos los senderos",
      "Guía naturalista certificado",
      "Entrada a exhibiciones de fauna"
    ],
    "ideal_for": [
      "Familias con niños",
      "Amantes de la naturaleza",
      "Fotógrafos de vida silvestre",
      "Visitantes que buscan experiencia completa"
    ],
    "not_recommended_for": [
      "Personas con vértigo severo",
      "Niños menores de 8 años en ziplines"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Skytrek Adventure - Canopy, Puentes y Teleférico",
    "slug": "skytrek-adventure-completo",
    "description": "Combinación única de canopy, puentes colgantes y teleférico panorámico. Vive el bosque nuboso desde todas las perspectivas posibles.",
    "duration": "4-5 horas",
    "distance": "Canopy 2.5km + Puentes 2km + Teleférico 1.5km",
    "difficulty": "Moderado",
    "age_min": 6,
    "age_max": 80,
    "location": "Sky Adventures, Monteverde, Costa Rica",
    "price_range": "$79-$159",
    "image": "/skytrek-monteverde-adventure.jpg",
    "schedule": ["8:00 a.m.", "10:30 a.m.", "1:00 p.m.", "3:30 p.m."],
    "availability": {
      "days": "Todos los días",
      "private_available": true
    },
    "packages": [
      {
        "name": "Sky Walk + Sky Tram",
        "price": "₡39,990 / $79",
        "includes": [
          "Teleférico panorámico",
          "Puentes colgantes Sky Walk",
          "Guía naturalista",
          "Transporte interno",
          "Observación de fauna"
        ]
      },
      {
        "name": "Triple Aventura Sky",
        "price": "₡64,990 / $129",
        "includes": [
          "Todo lo anterior",
          "Sky Trek zipline adventure",
          "Almuerzo con vista panorámica",
          "Acceso a miradores exclusivos",
          "Kit de binoculares"
        ]
      },
      {
        "name": "Sky VIP Experience",
        "price": "₡79,990 / $159",
        "includes": [
          "Experiencia privada completa",
          "Guía especializado en aves",
          "Cena gourmet en las nubes",
          "Fotografía profesional",
          "Transfer privado hotel"
        ]
      }
    ],
    "highlights": [
      "Teleférico con vistas de 360 grados",
      "Puentes colgantes únicos en el dosel",
      "Ziplines de alta velocidad",
      "Observación privilegiada de fauna"
    ],
    "recommendations": [
      "Jacket liviano para el teleférico",
      "Cámara con batería extra",
      "Ropa en capas",
      "Binoculares si tienes"
    ],
    "technical": {
      "teleferico": "Cabinas cerradas, 15 minutos de ascenso",
      "puentes": "6 puentes, 160m de altura máxima",
      "canopy": "7 cables de alta velocidad",
      "elevacion": "Desde 1400m hasta 1700m"
    },
    "included_general": [
      "Todas las actividades incluidas",
      "Equipo de seguridad certificado",
      "Guía naturalista bilingüe",
      "Transporte entre estaciones",
      "Seguro de aventura"
    ],
    "ideal_for": [
      "Familias multigeneracionales",
      "Amantes de vistas panorámicas",
      "Observadores de aves",
      "Personas que buscan aventura moderada"
    ],
    "not_recommended_for": [
      "Personas con claustrofobia (teleférico)",
      "Niños menores de 6 años"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Extremo Canopy + Bungee Jump",
    "slug": "extremo-canopy-bungee",
    "description": "La experiencia de adrenalina más extrema: combina el canopy más rápido con el bungee jump más alto de Centroamérica. Solo para los más valientes.",
    "duration": "3-4 horas",
    "distance": "10 ziplines + salto de 143m",
    "difficulty": "Extremo",
    "age_min": 18,
    "age_max": 65,
    "location": "Monteverde Extremo Park, Costa Rica",
    "price_range": "$149-$249",
    "image": "/extremo-canopy-bungee-jump.jpg",
    "schedule": ["9:00 a.m.", "2:00 p.m."],
    "availability": {
      "days": "Viernes, sábados y domingos",
      "private_available": true
    },
    "packages": [
      {
        "name": "Canopy Extremo",
        "price": "₡74,990 / $149",
        "includes": [
          "10 ziplines de alta velocidad",
          "Equipo técnico especializado",
          "Guía experto en deportes extremos",
          "Certificado de valentía",
          "Video de la experiencia"
        ]
      },
      {
        "name": "Combo Extremo + Bungee",
        "price": "₡124,990 / $199",
        "includes": [
          "Todo lo anterior",
          "Bungee jump de 143 metros",
          "Doble equipo de seguridad",
          "Sesion de preparación mental",
          "Almuerzo post-adrenalina"
        ]
      },
      {
        "name": "Ultimate Adrenaline VIP",
        "price": "₡149,990 / $249",
        "includes": [
          "Experiencia privada exclusiva",
          "Preparación personalizada",
          "Video profesional 4K",
          "Cena de celebración",
          "Transfer privado desde San José"
        ]
      }
    ],
    "highlights": [
      "Bungee jump más alto de Centroamérica (143m)",
      "Ziplines de velocidad extrema (80+ km/h)",
      "Vistas panorámicas únicas durante el salto",
      "Experiencia de adrenalina inolvidable"
    ],
    "recommendations": [
      "Ropa deportiva ajustada",
      "Zapatos deportivos bien amarrados",
      "No consumir alcohol 24h antes",
      "Desayuno ligero solamente",
      "Actitud mental positiva"
    ],
    "technical": {
      "bungee": "Salto libre de 143m con cuerda elástica",
      "ziplines": "10 cables, velocidades hasta 80 km/h",
      "seguridad": "Sistemas redundantes de seguridad",
      "peso": "Mínimo 45kg, máximo 115kg"
    },
    "included_general": [
      "Arnés de cuerpo completo profesional",
      "Casco y protección completa",
      "Cuerda de bungee certificada",
      "Instructor certificado internacional",
      "Seguro de deportes extremos",
      "Kit de primeros auxilios avanzado"
    ],
    "ideal_for": [
      "Aventureros extremos experimentados",
      "Personas sin miedo a las alturas",
      "Buscadores de adrenalina máxima",
      "Celebraciones especiales (cumpleaños, logros)"
    ],
    "not_recommended_for": [
      "Personas con problemas cardíacos",
      "Embarazadas",
      "Menores de 18 años",
      "Vértigo severo o pánico a alturas",
      "Lesiones de espalda o cuello",
      "Peso fuera del rango 45-115kg"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 70,
      "advance_booking": "Mínimo 7 días de anticipación",
      "requirements": "Examen médico y exoneración legal obligatorios",
      "cancellation": {
        "full_refund": "con más de 72 h de anticipación",
        "reschedule": "por condiciones climáticas extremas"
      }
    },
    "climate_policy": {
      "monitoring": "Vientos monitoreados cada hora",
      "reschedule": "Cancelación automática por vientos >25 km/h",
      "refunds": "Reembolso total por condiciones inseguras"
    },
    "extra_notes": [
      "Actividad de altísimo riesgo, solo para personas en excelente salud",
      "Se requiere examen médico no mayor a 30 días",
      "Prohibido consumo de alcohol o drogas 24h antes",
      "Peso debe estar dentro del rango estricto 45-115kg"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Monteverde Night Tour - Caminata Nocturna",
    "slug": "monteverde-night-tour",
    "description": "Descubre la vida nocturna del bosque nuboso con guías expertos. Observa ranas de colores, mamíferos nocturnos, aves nocturnas y la magia de la selva en la oscuridad.",
    "duration": "2.5-3 horas",
    "distance": "2 km de senderos nocturnos",
    "difficulty": "Bajo-Moderado",
    "age_min": 8,
    "age_max": 80,
    "location": "Reservas Privadas de Monteverde, Costa Rica",
    "price_range": "$45-$89",
    "image": "/monteverde-night-tour-wildlife.jpg",
    "schedule": ["6:00 p.m.", "7:00 p.m.", "8:00 p.m."],
    "availability": {
      "days": "Todos los días",
      "private_available": true
    },
    "packages": [
      {
        "name": "Night Explorer",
        "price": "₡22,990 / $45",
        "includes": [
          "Caminata nocturna guiada",
          "Linterna profesional",
          "Guía especializado en fauna nocturna",
          "Bebida caliente al final",
          "Identificación de especies"
        ]
      },
      {
        "name": "Premium Night Safari",
        "price": "₡34,990 / $69",
        "includes": [
          "Todo lo anterior",
          "Equipo de visión nocturna",
          "Guía biólogo especializado",
          "Chocolate caliente artesanal",
          "Charla educativa post-tour"
        ]
      },
      {
        "name": "VIP Night Experience",
        "price": "₡44,990 / $89",
        "includes": [
          "Tour privado personalizado",
          "Fotógrafo de vida silvestre",
          "Cena nocturna en la reserva",
          "Transfer desde hoteles",
          "Certificado de conservación"
        ]
      }
    ],
    "highlights": [
      "Observación de vida silvestre nocturna única",
      "Ranas de colores y sonidos de la selva",
      "Mamíferos nocturnos como kinkajú y olingo",
      "Aves nocturnas y lechuzas"
    ],
    "recommendations": [
      "Ropa oscura y manga larga",
      "Zapatos cómodos con agarre",
      "Repelente natural",
      "Jacket liviano para el frío nocturno",
      "Cámara con modo nocturno"
    ],
    "technical": {
      "senderos": "Caminos bien marcados con iluminación mínima",
      "fauna": "Ranas, mamíferos nocturnos, aves, insectos",
      "clima": "Temperatura 15-20°C, humedad alta",
      "visibilidad": "Linternas LED de alta potencia"
    },
    "included_general": [
      "Guía naturalista nocturno certificado",
      "Linterna LED profesional",
      "Acceso a reservas privadas",
      "Seguro básico",
      "Información educativa especializada"
    ],
    "ideal_for": [
      "Amantes de la vida silvestre",
      "Fotógrafos de naturaleza",
      "Familias con niños mayores",
      "Personas interesadas en conservación"
    ],
    "not_recommended_for": [
      "Personas con miedo a la oscuridad",
      "Niños muy pequeños que no puedan estar en silencio",
      "Personas con movilidad muy limitada"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "El Trapiche - Tour de Café, Chocolate y Azúcar",
    "slug": "el-trapiche-cafe-chocolate",
    "description": "Experiencia cultural auténtica en una finca tradicional. Aprende el proceso completo del café, chocolate y azúcar de caña, con paseo en carreta de bueyes.",
    "duration": "3-4 horas",
    "distance": "2 km de caminata en finca",
    "difficulty": "Bajo",
    "age_min": 5,
    "age_max": 85,
    "location": "Finca El Trapiche, Monteverde, Costa Rica",
    "price_range": "$35-$79",
    "image": "/el-trapiche-coffee-chocolate-tour.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "2:00 p.m."],
    "availability": {
      "days": "Todos los días",
      "private_available": true
    },
    "packages": [
      {
        "name": "Tour Tradicional",
        "price": "₡17,990 / $35",
        "includes": [
          "Tour guiado de la finca",
          "Proceso completo del café",
          "Elaboración artesanal de chocolate",
          "Demostración del trapiche (azúcar)",
          "Degustación de productos"
        ]
      },
      {
        "name": "Experiencia Cultural",
        "price": "₡29,990 / $59",
        "includes": [
          "Todo lo anterior",
          "Paseo en carreta de bueyes",
          "Almuerzo típico costarricense",
          "Taller de preparación de tortillas",
          "Visita a huertos orgánicos"
        ]
      },
      {
        "name": "Inmersion VIP Familiar",
        "price": "₡39,990 / $79",
        "includes": [
          "Experiencia privada personalizada",
          "Taller completo de chocolate",
          "Almuerzo gourmet en rancho",
          "Kit de productos artesanales",
          "Transfer desde hoteles"
        ]
      }
    ],
    "highlights": [
      "Proceso completo del café: del grano a la taza",
      "Elaboración tradicional de chocolate",
      "Paseo auténtico en carreta de bueyes",
      "Degustación de productos frescos de finca"
    ],
    "recommendations": [
      "Ropa cómoda y zapatos cerrados",
      "Sombrero y bloqueador solar",
      "Cámara para documentar la experiencia",
      "Apetito para las degustaciones"
    ],
    "technical": {
      "finca": "20 hectáreas de cultivos orgánicos",
      "procesos": "Tradicionales sin químicos",
      "animales": "Bueyes, vacas, caballos en su hábitat",
      "productos": "Café, cacao, caña de azúcar, verduras"
    },
    "included_general": [
      "Guía local especializado",
      "Degustación de todos los productos",
      "Acceso completo a la finca",
      "Demostraciones interactivas",
      "Información cultural e histórica"
    ],
    "ideal_for": [
      "Familias con niños",
      "Personas interesadas en cultura local",
      "Amantes del café y chocolate",
      "Visitantes que buscan experiencias auténticas"
    ],
    "not_recommended_for": [
      "Personas con alergias severas al cacao",
      "Personas que no toleran caminar en terreno irregular"
    ],
    "extra_notes": [
      "Tour educativo ideal para niños",
      "Se pueden comprar productos artesanales",
      "Experiencia interactiva y participativa",
      "Respetuoso con el medio ambiente"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Arenal Mundo Aventura - Combo Extremo",
    "slug": "arenal-mundo-aventura",
    "description": "La aventura más completa de Arenal: zipline sobre cascada, rappel, cabalgata y paseo en carreta. Vive 4 aventuras en un solo día con vistas del volcán.",
    "duration": "6-7 horas",
    "distance": "10 ziplines + 5km cabalgata + rappel 30m",
    "difficulty": "Moderado-Alto",
    "age_min": 12,
    "age_max": 65,
    "location": "Arenal Adventure Park, La Fortuna, Costa Rica",
    "price_range": "$99-$179",
    "image": "/arenal-mundo-aventura-combo.jpg",
    "schedule": ["8:00 a.m."],
    "availability": {
      "days": "Todos los días",
      "private_available": true
    },
    "packages": [
      {
        "name": "Aventura Completa",
        "price": "₡49,990 / $99",
        "includes": [
          "10 ziplines incluyendo sobre cascada",
          "Rappel de 30 metros",
          "Cabalgata de 1.5 horas",
          "Paseo en carreta de bueyes",
          "Almuerzo típico"
        ]
      },
      {
        "name": "Aventura Premium",
        "price": "₡74,990 / $149",
        "includes": [
          "Todo lo anterior",
          "Acceso a aguas termales",
          "Masaje relajante 30 min",
          "Cena con vista al volcán",
          "Transfer desde hoteles"
        ]
      },
      {
        "name": "VIP Multi-Aventura",
        "price": "₡89,990 / $179",
        "includes": [
          "Experiencia privada personalizada",
          "Guía exclusivo",
          "Almuerzo gourmet en mirador",
          "Spa completo post-aventura",
          "Transfer privado y fotografía"
        ]
      }
    ],
    "highlights": [
      "Zipline sobre cascada único en Costa Rica",
      "4 actividades diferentes en un solo tour",
      "Vistas panorámicas del Volcán Arenal",
      "Combinación perfecta de adrenalina y cultura"
    ],
    "recommendations": [
      "Ropa deportiva que se pueda ensuciar",
      "Zapatos cerrados para cabalgata",
      "Traje de baño para aguas termales",
      "Cambio completo de ropa",
      "Actitud aventurera"
    ],
    "technical": {
      "ziplines": "10 cables, incluye 1 sobre cascada de 40m",
      "rappel": "Descenso de 30m en pared rocósa",
      "cabalgata": "Caballos dóciles, senderos seguros",
      "carreta": "Paseo tradicional de 30 minutos"
    },
    "included_general": [
      "Equipo de seguridad para todas las actividades",
      "Caballos y guía ecuestre",
      "Instructor de rappel certificado",
      "Almuerzo típico costarricense",
      "Seguro de aventura múltiple"
    ],
    "ideal_for": [
      "Aventureros que quieren variedad",
      "Grupos de amigos",
      "Familias con adolescentes",
      "Personas activas"
    ],
    "not_recommended_for": [
      "Menores de 12 años",
      "Personas con miedo a caballos",
      "Embarazadas",
      "Problemas de espalda severos"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 50,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por clima sin penalización"
      }
    },
    "extra_notes": [
      "Día completo de aventura",
      "Incluye tiempo de descanso entre actividades",
      "Experiencia ecuestre requiere seguir instrucciones",
      "Se recomienda buen estado físico"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Catamarán Manuel Antonio - Safari Marino",
    "slug": "catamaran-manuel-antonio",
    "description": "Navegación en catamarán por la costa de Manuel Antonio con snorkel, observación de delfines, tobogán acuático y almuerzo a bordo. Aventura marina completa.",
    "duration": "5-6 horas",
    "distance": "20 millas náuticas de navegación",
    "difficulty": "Bajo",
    "age_min": 4,
    "age_max": 80,
    "location": "Marina Pez Vela, Manuel Antonio, Costa Rica",
    "price_range": "$79-$149",
    "image": "/catamaran-manuel-antonio-dolphins.jpg",
    "schedule": ["8:00 a.m.", "1:00 p.m."],
    "availability": {
      "days": "Todos los días (sujeto a condiciones marítimas)",
      "private_available": true
    },
    "packages": [
      {
        "name": "Aventura Marina",
        "price": "₡39,990 / $79",
        "includes": [
          "Navegación en catamarán",
          "Snorkel con equipo incluido",
          "Almuerzo y bebidas a bordo",
          "Tobogán acuático",
          "Búsqueda de delfines"
        ]
      },
      {
        "name": "Safari Premium",
        "price": "₡59,990 / $119",
        "includes": [
          "Todo lo anterior",
          "Barra libre de bebidas",
          "Frutas tropicales frescas",
          "Equipo de snorkel premium",
          "Guía marino especializado"
        ]
      },
      {
        "name": "VIP Ocean Experience",
        "price": "₡74,990 / $149",
        "includes": [
          "Catamarán privado",
          "Menú gourmet personalizado",
          "Champaña y cócteles premium",
          "Fotografía profesional",
          "Transfer privado desde hotel"
        ]
      }
    ],
    "highlights": [
      "Avistamiento de delfines en su hábitat natural",
      "Snorkel en arrecifes de coral",
      "Tobogán acuático desde el catamarán",
      "Vistas de la costa del Pacífico"
    ],
    "recommendations": [
      "Traje de baño y ropa extra",
      "Bloqueador solar resistente al agua",
      "Toalla y sombrero",
      "Cámara acuática",
      "Medicamento para mareo si es propenso"
    ],
    "technical": {
      "embarcacion": "Catamarán de 65 pies, capacidad 100 personas",
      "snorkel": "2-3 paradas en arrecifes",
      "fauna": "Delfines, ballenas (temporada), peces tropicales",
      "seguridad": "Chalecos salvavidas, guía certificado"
    },
    "included_general": [
      "Navegación en catamarán moderno",
      "Almuerzo completo a bordo",
      "Equipo de snorkel",
      "Bebidas (agua, refrescos, cerveza)",
      "Guía marino certificado"
    ],
    "ideal_for": [
      "Familias con niños",
      "Parejas románticas",
      "Grupos de amigos",
      "Amantes de la vida marina"
    ],
    "not_recommended_for": [
      "Personas con mareo severo",
      "Quienes no sepan nadar (para snorkel)",
      "Personas con movilidad muy limitada"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 40,
      "cancellation": {
        "full_refund": "con más de 24 h de anticipación",
        "reschedule": "por condiciones marítimas sin penalización"
      }
    },
    "climate_policy": {
      "monitoring": "Condiciones marítimas evaluadas diariamente",
      "reschedule": "Reprogramación por oleaje alto o tormenta",
      "refunds": "Reembolso completo por condiciones peligrosas"
    },
    "extra_notes": [
      "Avistamiento de delfines no garantizado (fauna silvestre)",
      "Incluye tiempo libre para natación",
      "Respetuoso con la vida marina",
      "Temporada de ballenas: julio-octubre"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Kayak en Canales de Tortuguero",
    "slug": "kayak-tortuguero-canales",
    "description": "Navegación silenciosa en kayak por los canales naturales de Tortuguero. Observación íntima de fauna: perezosos, monos, caimanes, aves exóticas y tortugas.",
    "duration": "3-4 horas",
    "distance": "8 km por canales naturales",
    "difficulty": "Moderado",
    "age_min": 10,
    "age_max": 70,
    "location": "Parque Nacional Tortuguero, Limón, Costa Rica",
    "price_range": "$65-$129",
    "image": "/kayak-tortuguero-canales-wildlife.jpg",
    "schedule": ["6:00 a.m.", "8:00 a.m.", "3:00 p.m."],
    "availability": {
      "days": "Todos los días (sujeto a condiciones climáticas)",
      "private_available": true,
      "seasonal_best": "Temporada seca: diciembre-abril"
    },
    "packages": [
      {
        "name": "Aventura en Kayak",
        "price": "₡32,990 / $65",
        "includes": [
          "Kayak individual o doble",
          "Guía naturalista especializado",
          "Equipo de seguridad",
          "Snack energético",
          "Binoculares compartidos"
        ]
      },
      {
        "name": "Safari Acuático Premium",
        "price": "₡49,990 / $99",
        "includes": [
          "Todo lo anterior",
          "Almuerzo en lodge eco-turístico",
          "Cámara acuática rental",
          "Visita a centro de conservación",
          "Transfer desde puerto principal"
        ]
      },
      {
        "name": "VIP Tortuguero Experience",
        "price": "₡64,990 / $129",
        "includes": [
          "Tour privado personalizado",
          "Biólogo marino como guía",
          "Almuerzo gourmet en la selva",
          "Equipo de fotografía profesional",
          "Transfer en avión pequeño (opcional)"
        ]
      }
    ],
    "highlights": [
      "Observación silenciosa de vida silvestre",
      "Canales naturales únicos en el mundo",
      "Avistamiento garantizado de perezosos y monos",
      "Experiencia de conservación marina"
    ],
    "recommendations": [
      "Ropa de secado rápido",
      "Sombrero y gafas de sol",
      "Repelente biodegradable",
      "Cámara con protección acuática",
      "Actitud de paciencia para observación"
    ],
    "technical": {
      "kayaks": "Estables, fáciles de manejar, 1 o 2 personas",
      "canales": "Aguas tranquilas, corrientes suaves",
      "fauna": "Perezosos, monos, caimanes, aves, tortugas",
      "navegacion": "8 km por sistema de canales naturales"
    },
    "included_general": [
      "Kayak y equipo de seguridad",
      "Chaleco salvavidas",
      "Guía naturalista certificado",
      "Bolsa impermeable para pertenencias",
      "Seguro de actividad acuática"
    ],
    "ideal_for": [
      "Amantes de la naturaleza",
      "Fotógrafos de vida silvestre",
      "Familias con niños mayores",
      "Personas interesadas en conservación"
    ],
    "not_recommended_for": [
      "Personas que no sepan nadar",
      "Niños menores de 10 años",
      "Personas con movilidad limitada en brazos"
    ],
    "reservation": {
      "deposit_required": true,
      "deposit_percent": 40,
      "cancellation": {
        "full_refund": "con más de 48 h de anticipación",
        "reschedule": "por condiciones climáticas sin penalización"
      }
    },
    "climate_policy": {
      "monitoring": "Condiciones meteorológicas evaluadas diariamente",
      "reschedule": "Reprogramación por lluvia intensa o viento fuerte",
      "refunds": "Reembolso completo si el parque cierra"
    },
    "extra_notes": [
      "Mejor avistamiento en horarios matutinos",
      "Mantener silencio para no espantar fauna",
      "Temporada de anidación de tortugas: julio-octubre",
      "Actividad ecológica de bajo impacto"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Observación de Ballenas - Golfo Dulce",
    "slug": "ballenas-golfo-dulce",
    "description": "Observación de ballenas jorobadas y delfines en el Golfo Dulce. Experiencia única durante la migración de ballenas con guías marinos especializados.",
    "duration": "4-5 horas",
    "distance": "25 millas náuticas",
    "difficulty": "Bajo",
    "age_min": 6,
    "age_max": 80,
    "location": "Golfo Dulce, Golfito, Costa Rica",
    "price_range": "$89-$159",
    "image": "/whale-watching-golfo-dulce.jpg",
    "schedule": ["7:00 a.m.", "1:00 p.m."],
    "availability": {
      "days": "Todos los días durante temporada",
      "seasonal_best": "Julio-octubre y diciembre-abril",
      "private_available": true
    },
    "packages": [
      {
        "name": "Safari Ballenas",
        "price": "₡44,990 / $89",
        "includes": [
          "Navegación especializada",
          "Guía marino certificado",
          "Hidrofono para escuchar ballenas",
          "Snack y bebidas",
          "Equipo de observación"
        ]
      },
      {
        "name": "Experiencia Premium",
        "price": "₡64,990 / $129",
        "includes": [
          "Todo lo anterior",
          "Almuerzo gourmet a bordo",
          "Fotógrafo profesional",
          "Certificado de avistamiento",
          "Transfer desde hoteles"
        ]
      },
      {
        "name": "VIP Marine Safari",
        "price": "₡79,990 / $159",
        "includes": [
          "Embarcación privada",
          "Biólogo marino experto",
          "Equipo de grabación submarina",
          "Cena con vista al golfo",
          "Video profesional del tour"
        ]
      }
    ],
    "highlights": [
      "Ballenas jorobadas de hasta 16 metros",
      "Delfines nariz de botella y manchados",
      "Hidrofono para escuchar cantos",
      "Golfo Dulce, uno de los 4 golfos tropicales del mundo"
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Surf en Nosara - Clases y Aventura",
    "slug": "surf-nosara-guanacaste",
    "description": "Aprende a surfear en las mejores olas de Guanacaste. Nosara ofrece condiciones perfectas para principiantes y surfistas experimentados.",
    "duration": "3-6 horas",
    "distance": "Varias playas según nivel",
    "difficulty": "Principiante-Avanzado",
    "age_min": 8,
    "age_max": 65,
    "location": "Playa Nosara, Guanacaste, Costa Rica",
    "price_range": "$65-$149",
    "image": "/surf-nosara-guanacaste-lessons.jpg",
    "schedule": ["6:00 a.m.", "9:00 a.m.", "3:00 p.m."],
    "packages": [
      {
        "name": "Surf para Principiantes",
        "price": "₡32,990 / $65",
        "includes": [
          "Clase de 2 horas",
          "Tabla de surf adecuada",
          "Instructor certificado",
          "Lycra UV",
          "Teoría de seguridad"
        ]
      },
      {
        "name": "Surf Camp Intensivo",
        "price": "₡59,990 / $119",
        "includes": [
          "Día completo de surf",
          "2 sesiones (mañana y tarde)",
          "Almuerzo de surfista",
          "Video análisis de técnica",
          "Acceso a diferentes spots"
        ]
      },
      {
        "name": "VIP Surf Experience",
        "price": "₡74,990 / $149",
        "includes": [
          "Instructor privado",
          "Tabla premium personalizada",
          "Fotógrafo acuático",
          "Almuerzo frente al mar",
          "Certificado de surf"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Rafting Extremo Río Tenorio",
    "slug": "rafting-rio-tenorio",
    "description": "Navegación de adrenalina por los rápidos clase III-IV del Río Tenorio, con vistas al volcán y selva tropical virgen.",
    "duration": "5-6 horas",
    "distance": "14 km de rápidos",
    "difficulty": "Alto",
    "age_min": 16,
    "age_max": 60,
    "location": "Río Tenorio, Guanacaste, Costa Rica",
    "price_range": "$99-$179",
    "image": "/rafting-rio-tenorio-extreme.jpg",
    "schedule": ["8:00 a.m."],
    "packages": [
      {
        "name": "Aventura Tenorio",
        "price": "₡49,990 / $99",
        "includes": [
          "Rafting 14 km",
          "Guía experto en aguas bravas",
          "Equipo completo de seguridad",
          "Almuerzo típico",
          "Transfer desde La Fortuna"
        ]
      },
      {
        "name": "Combo Río Celeste",
        "price": "₡74,990 / $149",
        "includes": [
          "Todo lo anterior",
          "Visita a Río Celeste",
          "Caminata a cascada",
          "Almuerzo gourmet",
          "Aguas termales"
        ]
      },
      {
        "name": "VIP Extreme Adventure",
        "price": "₡89,990 / $179",
        "includes": [
          "Grupo privado máximo 6 personas",
          "Fotografía profesional",
          "Cena con vista al volcán",
          "Transfer privado",
          "Video 4K de la aventura"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Cabalgata Volcán Arenal - Vistas Panorámicas",
    "slug": "cabalgata-arenal-panoramica",
    "description": "Cabalgata por senderos de montaña con vistas espectaculares del Volcán Arenal, Lago Arenal y bosque tropical. Experiencia ecuestre auténtica.",
    "duration": "3-5 horas",
    "distance": "8-15 km según ruta",
    "difficulty": "Moderado",
    "age_min": 8,
    "age_max": 70,
    "location": "Faldas Volcán Arenal, La Fortuna, Costa Rica",
    "price_range": "$69-$139",
    "image": "/horseback-arenal-volcano-views.jpg",
    "schedule": ["8:00 a.m.", "2:00 p.m."],
    "packages": [
      {
        "name": "Cabalgata Clásica",
        "price": "₡34,990 / $69",
        "includes": [
          "Cabalgata 3 horas",
          "Caballo dócil entrenado",
          "Guía ecuestre certificado",
          "Parada en mirador",
          "Refrescante natural"
        ]
      },
      {
        "name": "Aventura Completa",
        "price": "₡54,990 / $109",
        "includes": [
          "Todo lo anterior",
          "Visita a cascada La Fortuna",
          "Almuerzo campestre",
          "Baño en aguas termales",
          "Transfer desde hoteles"
        ]
      },
      {
        "name": "VIP Equestrian Experience",
        "price": "₡69,990 / $139",
        "includes": [
          "Cabalgata privada personalizada",
          "Caballos premium",
          "Almuerzo gourmet en hacienda",
          "Fotografía ecuestre",
          "Cena romántica opcional"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Pesca Deportiva Lago Arenal",
    "slug": "pesca-lago-arenal",
    "description": "Pesca deportiva en el Lago Arenal, famoso por sus truchas arcoiris y guapotes. Experiencia de pesca con guías locales expertos y equipo profesional.",
    "duration": "4-8 horas",
    "distance": "Navegación por el lago",
    "difficulty": "Bajo-Moderado",
    "age_min": 8,
    "age_max": 80,
    "location": "Lago Arenal, Guanacaste, Costa Rica",
    "price_range": "$89-$199",
    "image": "/fishing-lago-arenal-rainbow-trout.jpg",
    "schedule": ["6:00 a.m.", "1:00 p.m."],
    "packages": [
      {
        "name": "Pesca Medio Día",
        "price": "₡44,990 / $89",
        "includes": [
          "4 horas de pesca",
          "Bote con motor",
          "Equipo de pesca completo",
          "Guía pescador local",
          "Licencia de pesca"
        ]
      },
      {
        "name": "Aventura Completa",
        "price": "₡74,990 / $149",
        "includes": [
          "8 horas de pesca",
          "Almuerzo a bordo",
          "Carnada viva incluida",
          "Servicio de limpieza del pescado",
          "Cooler con hielo"
        ]
      },
      {
        "name": "VIP Fishing Charter",
        "price": "₡99,990 / $199",
        "includes": [
          "Bote privado de lujo",
          "Capitán y guía expertos",
          "Equipo premium Shimano",
          "Almuerzo gourmet",
          "Preparación del pescado"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Aguas Termales Tabacón - Relajación Volcánica",
    "slug": "aguas-termales-tabacon",
    "description": "Relajación en las aguas termales naturales más lujosas de Costa Rica, calentadas por el Volcán Arenal, con jardines tropicales exuberantes.",
    "duration": "3-6 horas",
    "difficulty": "Muy Bajo",
    "age_min": 3,
    "age_max": 90,
    "location": "Tabacón Thermal Resort, Arenal, Costa Rica",
    "price_range": "$79-$199",
    "image": "/tabacon-hot-springs-luxury.jpg",
    "schedule": ["10:00 a.m.", "2:00 p.m.", "6:00 p.m."],
    "packages": [
      {
        "name": "Día de Spa",
        "price": "₡39,990 / $79",
        "includes": [
          "Acceso a aguas termales",
          "Uso de jardines tropicales",
          "Toallas y lockers",
          "Bebida de bienvenida",
          "Acceso por 6 horas"
        ]
      },
      {
        "name": "Experiencia Premium",
        "price": "₡74,990 / $149",
        "includes": [
          "Todo lo anterior",
          "Almuerzo en restaurante",
          "Masaje relajante 60 min",
          "Acceso a zona VIP",
          "Transfer desde La Fortuna"
        ]
      },
      {
        "name": "VIP Wellness Retreat",
        "price": "₡99,990 / $199",
        "includes": [
          "Día completo ilimitado",
          "Spa treatment completo",
          "Cena gourmet romántica",
          "Cabana privada",
          "Champaña y chocolates"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "La Paz Waterfall Gardens - Cascadas y Fauna",
    "slug": "la-paz-waterfalls-gardens",
    "description": "Visita a 5 cascadas espectaculares y santuarios de vida silvestre. Jaguares, pumas, monos, aves exóticas y jardines de mariposas.",
    "duration": "4-6 horas",
    "difficulty": "Bajo-Moderado",
    "age_min": 5,
    "age_max": 85,
    "location": "La Paz Waterfall Gardens, Alajuela, Costa Rica",
    "price_range": "$49-$99",
    "image": "/la-paz-waterfalls-wildlife.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "1:00 p.m."],
    "packages": [
      {
        "name": "Gardens & Falls",
        "price": "₡24,990 / $49",
        "includes": [
          "Entrada a 5 cascadas",
          "Santuarios de vida silvestre",
          "Jardín de mariposas",
          "Observatorio de colibríes",
          "Senderos autoguiados"
        ]
      },
      {
        "name": "Wildlife Experience",
        "price": "₡34,990 / $69",
        "includes": [
          "Todo lo anterior",
          "Tour guiado especializado",
          "Almuerzo en restaurante",
          "Encuentro con animales",
          "Presentación educativa"
        ]
      },
      {
        "name": "VIP Nature Immersion",
        "price": "₡49,990 / $99",
        "includes": [
          "Experiencia privada completa",
          "Guía biólogo personal",
          "Almuerzo gourmet",
          "Fotografía profesional",
          "Transfer desde San José"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Tour de Café Don Juan - Del Grano a tu Taza",
    "slug": "cafe-don-juan-tour",
    "description": "Experiencia completa del café costarricense en una de las fincas más prestigiosas. Desde la plantación hasta la taza perfecta.",
    "duration": "2.5-3 horas",
    "difficulty": "Bajo",
    "age_min": 8,
    "age_max": 80,
    "location": "Finca Don Juan, Monteverde, Costa Rica",
    "price_range": "$35-$79",
    "image": "/don-juan-coffee-tour.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "2:00 p.m.", "4:00 p.m."],
    "packages": [
      {
        "name": "Coffee Lover",
        "price": "₡17,990 / $35",
        "includes": [
          "Tour completo del café",
          "Proceso de tostado",
          "Degustación de 5 variedades",
          "Guía especializado",
          "Café para llevar"
        ]
      },
      {
        "name": "Barista Experience",
        "price": "₡29,990 / $59",
        "includes": [
          "Todo lo anterior",
          "Taller de preparación",
          "Técnicas de barista",
          "Almuerzo con café especial",
          "Kit de café premium"
        ]
      },
      {
        "name": "VIP Coffee Master",
        "price": "₡39,990 / $79",
        "includes": [
          "Experiencia privada completa",
          "Maestro cafetero personal",
          "Degustación exclusiva",
          "Almuerzo gourmet",
          "Certificado de catador"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Observación de Aves - Diversidad Ecológica",
    "slug": "observacion-aves-costa-rica",
    "description": "Tours especializados de observación de aves en diferentes ecosistemas. Costa Rica tiene más de 900 especies de aves en un territorio pequeño.",
    "duration": "4-8 horas",
    "difficulty": "Bajo-Moderado",
    "age_min": 8,
    "age_max": 80,
    "location": "Múltiples ubicaciones, Costa Rica",
    "price_range": "$69-$159",
    "image": "/bird-watching-costa-rica-diversity.jpg",
    "schedule": ["5:30 a.m.", "6:00 a.m.", "3:00 p.m."],
    "packages": [
      {
        "name": "Birding Básico",
        "price": "₡34,990 / $69",
        "includes": [
          "Tour de 4 horas",
          "Guía ornitológo certificado",
          "Binoculares profesionales",
          "Lista de especies",
          "Desayuno ligero"
        ]
      },
      {
        "name": "Birding Fotográfico",
        "price": "₡59,990 / $119",
        "includes": [
          "Tour de 6 horas",
          "Múltiples ecosistemas",
          "Telescopio especializado",
          "Taller de fotografía",
          "Almuerzo en campo"
        ]
      },
      {
        "name": "VIP Birding Expedition",
        "price": "₡79,990 / $159",
        "includes": [
          "Día completo privado",
          "Ornitológo especializado",
          "Equipo fotográfico prestado",
          "Almuerzo gourmet",
          "Lista personalizada con fotos"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Kayak en Manglares - Ecosistema Único",
    "slug": "kayak-manglares-costa-rica",
    "description": "Navegación silenciosa por manglares. Observación de cocodrilos, aves acuáticas, cangrejos y el ecosistema más productivo del trópico.",
    "duration": "3-4 horas",
    "difficulty": "Bajo-Moderado",
    "age_min": 10,
    "age_max": 70,
    "location": "Manglares de Damas, Manuel Antonio, Costa Rica",
    "price_range": "$55-$119",
    "image": "/kayak-mangroves-costa-rica.jpg",
    "schedule": ["7:00 a.m.", "2:00 p.m."],
    "packages": [
      {
        "name": "Mangrove Explorer",
        "price": "₡27,990 / $55",
        "includes": [
          "Kayak estábil y seguro",
          "Guía naturalista",
          "Equipo de seguridad",
          "Agua y snack",
          "Información ecológica"
        ]
      },
      {
        "name": "Wildlife Kayaking",
        "price": "₡44,990 / $89",
        "includes": [
          "Todo lo anterior",
          "Tour extendido 4 horas",
          "Almuerzo típico",
          "Binoculares incluidos",
          "Certificado de conservación"
        ]
      },
      {
        "name": "VIP Mangrove Experience",
        "price": "₡59,990 / $119",
        "includes": [
          "Kayak privado personalizado",
          "Biólogo marino especializado",
          "Almuerzo gourmet",
          "Fotografía de naturaleza",
          "Transfer desde hoteles"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Observación de Tortugas - Tortuguero Conservancy",
    "slug": "tortugas-tortuguero-conservacion",
    "description": "Observación nocturna de tortugas marinas anidando en las playas de Tortuguero. Experiencia de conservación marina única y educativa.",
    "duration": "3-4 horas",
    "difficulty": "Bajo",
    "age_min": 8,
    "age_max": 80,
    "location": "Playa Tortuguero, Limón, Costa Rica",
    "price_range": "$45-$99",
    "image": "/turtle-watching-tortuguero-conservation.jpg",
    "schedule": ["8:00 p.m.", "9:00 p.m."],
    "availability": {
      "seasonal_best": "Julio-octubre (temporada alta anidación)"
    },
    "packages": [
      {
        "name": "Turtle Watch",
        "price": "₡22,990 / $45",
        "includes": [
          "Tour nocturno guiado",
          "Guía conservacionista",
          "Linterna infrarroja",
          "Charla educativa",
          "Certificado de conservación"
        ]
      },
      {
        "name": "Conservation Experience",
        "price": "₡34,990 / $69",
        "includes": [
          "Todo lo anterior",
          "Visita al centro de investigación",
          "Cena en lodge eco-turístico",
          "Participación en protección",
          "Material educativo"
        ]
      },
      {
        "name": "VIP Research Program",
        "price": "₡49,990 / $99",
        "includes": [
          "Programa científico privado",
          "Biólogo marino investigador",
          "Participación en marcaje",
          "Cena gourmet",
          "Donación a conservación incluida"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Original Canopy - Descenso en Árbol Higón",
    "slug": "original-canopy-higueron",
    "description": "El canopy tour original de Costa Rica. Descenso por cuerdas desde un árbol higón centenario de 60 metros de altura. Experiencia histórica única.",
    "duration": "2-3 horas",
    "difficulty": "Moderado-Alto",
    "age_min": 12,
    "age_max": 65,
    "location": "Monteverde Original Canopy, Costa Rica",
    "price_range": "$55-$109",
    "image": "/original-canopy-higueron-tree.jpg",
    "schedule": ["8:00 a.m.", "10:00 a.m.", "1:00 p.m.", "3:00 p.m."],
    "packages": [
      {
        "name": "Original Adventure",
        "price": "₡27,990 / $55",
        "includes": [
          "Descenso en árbol centenario",
          "12 plataformas en árboles",
          "Guía experto original",
          "Equipo de seguridad",
          "Historia del canopy"
        ]
      },
      {
        "name": "Historic Experience",
        "price": "₡44,990 / $89",
        "includes": [
          "Todo lo anterior",
          "Tour educativo del bosque",
          "Almuerzo tradicional",
          "Charla de conservación",
          "Certificado histórico"
        ]
      },
      {
        "name": "VIP Original Canopy",
        "price": "₡54,990 / $109",
        "includes": [
          "Experiencia privada exclusiva",
          "Guía fundador personal",
          "Almuerzo gourmet",
          "Video conmemorativo",
          "Regalo especial"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Gran Tour de Costa Rica - 8 Días Completos",
    "slug": "gran-tour-costa-rica-8-dias",
    "description": "Tour completo de 8 días cubriendo volcanes, playas, selvas y parques nacionales. La experiencia más completa de Costa Rica con múltiples ecosistemas.",
    "duration": "8 días / 7 noches",
    "difficulty": "Moderado",
    "age_min": 8,
    "age_max": 75,
    "location": "Todo Costa Rica",
    "price_range": "$1,299-$2,499",
    "image": "/gran-tour-costa-rica-8-days.jpg",
    "schedule": ["Salidas los sábados"],
    "packages": [
      {
        "name": "Adventure Complete",
        "price": "₡649,950 / $1,299",
        "includes": [
          "7 noches alojamiento",
          "Todas las comidas",
          "Transporte privado",
          "15+ actividades",
          "Guías especializados"
        ]
      },
      {
        "name": "Premium Discovery",
        "price": "₡999,950 / $1,999",
        "includes": [
          "Hoteles 4-5 estrellas",
          "Menús gourmet",
          "Actividades VIP",
          "Transfer aéreo interno",
          "Guía privado"
        ]
      },
      {
        "name": "VIP Costa Rica Experience",
        "price": "₡1,249,950 / $2,499",
        "includes": [
          "Resorts de lujo exclusivos",
          "Chef privado",
          "Helicopter tours",
          "Yacht privado",
          "Experiencias únicas"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    "title": "Curi-Cancha Reserve - Bosque Nuboso Alternativo",
    "slug": "curi-cancha-bosque-nuboso",
    "description": "Reserva privada menos concurrida que Monteverde. Senderos tranquilos, observación privilegiada de vida silvestre y bosque nuboso virgen.",
    "duration": "3-5 horas",
    "difficulty": "Bajo-Moderado",
    "age_min": 6,
    "age_max": 80,
    "location": "Reserva Curi-Cancha, Monteverde, Costa Rica",
    "price_range": "$35-$79",
    "image": "/curi-cancha-cloud-forest-reserve.jpg",
    "schedule": ["6:00 a.m.", "8:00 a.m.", "2:00 p.m."],
    "packages": [
      {
        "name": "Nature Walk",
        "price": "₡17,990 / $35",
        "includes": [
          "Acceso a senderos privados",
          "Mapa autoguiado",
          "Observación de vida silvestre",
          "Mirador panorámico",
          "Información educativa"
        ]
      },
      {
        "name": "Guided Experience",
        "price": "₡29,990 / $59",
        "includes": [
          "Todo lo anterior",
          "Guía naturalista experto",
          "Binoculares incluidos",
          "Snack orgánico",
          "Lista de especies observadas"
        ]
      },
      {
        "name": "VIP Private Reserve",
        "price": "₡39,990 / $79",
        "includes": [
          "Acceso privado exclusivo",
          "Guía biólogo personal",
          "Almuerzo en mirador",
          "Fotografía de naturaleza",
          "Transfer desde hoteles"
        ]
      }
    ],
    "contact": {
      "whatsapp": "6466-6738",
      "email": "ciudadesmeraldacr@gmail.com"
    }
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
