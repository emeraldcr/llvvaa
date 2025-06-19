
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
      "price": "₡19,990 / $39",
      "includes": [
        "Todo lo del paquete básico",
        "Acceso extendido a zonas sociales y áreas de descanso"
      ]
    },
    {
      "name": "Tour Privado",
      "price": "₡29,990 / $59",
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
  "title": "Pozas Secretas de Sucre",
  "slug": "pozas-sucre",
  "description": "Caminá hasta pozas escondidas para bañarte, relajarte y explorar entre rocas y bosque. Perfecto para reconectar con el agua y disfrutar sin prisa.",
  "duration": "2.5–3 horas",
  "distance": "2 km ida y vuelta",
  "difficulty": "Moderado",
  "age_min": 12,
  "age_max": 60,
  "location": "Sucre, Ciudad Quesada, San Carlos, Costa Rica",
  "price_range": "$29–$59",
  "image": "/pozas-secretas-sucre.png",
  "schedule": ["8:30 a.m.", "10:00 a.m.", "1:30 p.m."],
  "availability": {
    "days": "Todos los días (según clima)",
    "private_available": true
  },
  "packages": [
    {
      "name": "Pozas Naturales",
      "price": "₡19,990 / $39",
      "includes": [
        "Caminata guiada",
        "Acceso a pozas escondidas",
        "Interpretación del ecosistema",
        "Seguro básico"
      ]
    },
    {
      "name": "Pozas con Picnic",
      "price": "₡24,990 / $49",
      "includes": [
        "Todo lo anterior",
        "Snack saludable",
        "Frutas y bebida fría",
        "Pausa extendida para descanso"
      ]
    },
    {
      "name": "Pozas Privadas",
      "price": "₡29,990 / $59",
      "includes": [
        "Tour privado",
        "Bebidas artesanales",
        "Souvenir natural",
        "Ruta extendida con cascada adicional"
      ]
    }
  ],
  "highlights": [
    "Pozas naturales escondidas",
    "Guía, bebida refrescante y zonas para descansar",
    "Opciones con picnic, bebidas artesanales y souvenir"
  ],
  "recommendations": [
    "Traje de baño, zapatos cerrados",
    "Toalla, muda seca y protector de objetos",
    "Bloqueador ecológico, hidratación"
  ],
  "technical": {
    "terreno": "Senderos con barro, piedra húmeda y cruce de río",
    "altitud": "Aprox. 1100 m.s.n.m.",
    "otros": "Ascensos leves, zonas resbalosas, pozas frías"
  },
  "included_general": [
    "Guía certificado",
    "Acceso a senderos privados y pozas",
    "Bebida refrescante",
    "Bastón de apoyo (opcional)",
    "Seguro básico",
    "Espacios de descanso y fotografía"
  ],
  "ideal_for": [
    "Familias, parejas o grupos que buscan naturaleza suave",
    "Amantes del agua y espacios tranquilos",
    "Turismo relajado y de reconexión"
  ],
  "not_recommended_for": [
    "Personas con movilidad reducida",
    "Quienes no puedan caminar sobre piedra mojada",
    "Personas con lesiones graves en rodillas o espalda"
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
    "monitoring": "Condiciones climáticas verificadas 24 h antes",
    "reschedule": "Posibilidad de reprogramación si hay lluvias fuertes",
    "refunds": "Reembolso completo si no se puede realizar"
  },
  "extra_notes": [
    "El uso de jabones o cremas no está permitido en las pozas",
    "Se recomienda llegar 15 minutos antes de la salida",
    "El guía verifica condición física del grupo antes de iniciar"
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
      "price": "₡34,990 / $59",
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
