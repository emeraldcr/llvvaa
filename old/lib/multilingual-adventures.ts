import { MultilingualAdventure } from './i18n-utils';

export const multilingualAdventures: MultilingualAdventure[] = [
  {
    title: {
      es: "Expedición al Cañón Esmeralda",
      en: "Emerald Canyon Expedition"
    },
    slug: "canon-esmeralda",
    description: {
      es: "Adéntrate en un cañón escondido entre selvas tropicales, con cascadas cristalinas, escaleras metálicas y travesías por río. Ideal si buscás adrenalina, naturaleza pura y aventura acuática.",
      en: "Venture into a hidden canyon among tropical jungles, with crystal waterfalls, metal stairs and river crossings. Perfect if you seek adrenaline, pure nature and aquatic adventure."
    },
    duration: "3–4 horas",
    distance: "3.5 km ida y vuelta",
    difficulty: {
      es: "Intermedio–Alto",
      en: "Intermediate–High"
    },
    age_min: 18,
    age_max: 65,
    location: {
      es: "Cañón del Río La Vieja, Sucre, Ciudad Quesada, Costa Rica",
      en: "La Vieja River Canyon, Sucre, Ciudad Quesada, Costa Rica"
    },
    price_range: "$29–$59",
    image: "/IMG_4438.JPG",
    schedule: ["8:00 a.m.", "9:00 a.m.", "10:00 a.m."],
    availability: {
      days: {
        es: "Solo fines de semana (excepto tour privado)",
        en: "Weekends only (except private tour)"
      },
      private_available: true,
      private_only_days: ["lunes", "martes", "miércoles", "jueves", "viernes"]
    },
    packages: [
      {
        name: {
          es: "Básico",
          en: "Basic"
        },
        price: "₡19,990 / $39",
        includes: {
          es: [
            "Tour guiado",
            "Equipo de seguridad completo",
            "Acceso a la cascada Zafiro",
            "Uso de instalaciones (vestidores, baños, duchas)"
          ],
          en: [
            "Guided tour",
            "Complete safety equipment",
            "Access to Sapphire waterfall",
            "Use of facilities (dressing rooms, bathrooms, showers)"
          ]
        }
      },
      {
        name: {
          es: "Pase del Día",
          en: "Day Pass"
        },
        price: "₡24,990 / $39",
        includes: {
          es: [
            "Todo lo del paquete básico",
            "Acceso extendido a zonas sociales y áreas de descanso"
          ],
          en: [
            "Everything from basic package",
            "Extended access to social areas and rest areas"
          ]
        }
      },
      {
        name: {
          es: "Tour Privado",
          en: "Private Tour"
        },
        price: "₡34,990 / $59",
        available: {
          es: "solo entre semana",
          en: "weekdays only"
        },
        includes: {
          es: [
            "Guía exclusivo",
            "Atención personalizada",
            "Flexibilidad total en horario"
          ],
          en: [
            "Exclusive guide",
            "Personalized attention",
            "Total schedule flexibility"
          ]
        }
      }
    ],
    group_discount: {
      min_people: 10,
      price_per_person: "₡12,500",
      note: {
        es: "Incluye regalía para el organizador",
        en: "Includes gift for the organizer"
      }
    },
    highlights: {
      es: [
        "Cascada Zafiro y senderos secretos",
        "Descensos guiados y cruces de río emocionantes",
        "Equipo de seguridad completo incluido",
        "Guías certificados y áreas de descanso"
      ],
      en: [
        "Sapphire waterfall and secret trails",
        "Guided descents and exciting river crossings",
        "Complete safety equipment included",
        "Certified guides and rest areas"
      ]
    },
    recommendations: {
      es: [
        "Zapatos de hiking o acuáticos",
        "Ropa de secado rápido y cambio completo",
        "Jacket impermeable y repelente natural",
        "Snacks y agua personal",
        "Toalla, ropa interior extra y cédula o pasaporte"
      ],
      en: [
        "Hiking or water shoes",
        "Quick-dry clothing and complete change",
        "Waterproof jacket and natural repellent",
        "Personal snacks and water",
        "Towel, extra underwear and ID or passport"
      ]
    },
    technical: {
      escaleras: {
        es: "Metálicas hasta 15 m, con anillos de protección",
        en: "Metal up to 15 m, with protection rings"
      },
      terreno: {
        es: "Senderos escarpados, piedras resbalosas, zonas húmedas",
        en: "Steep trails, slippery stones, wet areas"
      },
      otros: {
        es: "Cruces del río hasta el pecho según nivel de agua, uso prolongado de agua",
        en: "River crossings up to chest level depending on water level, prolonged water use"
      }
    },
    included_general: {
      es: [
        "Guía certificado en rescate y primeros auxilios",
        "Arnés, casco, guantes y equipo de seguridad",
        "Acceso exclusivo a la cascada Zafiro",
        "Estacionamiento privado",
        "Vestidores, baños y duchas",
        "Seguro de responsabilidad civil básico"
      ],
      en: [
        "Guide certified in rescue and first aid",
        "Harness, helmet, gloves and safety equipment",
        "Exclusive access to Sapphire waterfall",
        "Private parking",
        "Dressing rooms, bathrooms and showers",
        "Basic civil liability insurance"
      ]
    },
    ideal_for: {
      es: [
        "Personas activas con gusto por la aventura física",
        "Amantes del agua y escenarios naturales escondidos",
        "Turismo de adrenalina y contacto directo con la naturaleza"
      ],
      en: [
        "Active people who enjoy physical adventure",
        "Water lovers and hidden natural scenery",
        "Adrenaline tourism and direct contact with nature"
      ]
    },
    not_recommended_for: {
      es: [
        "Personas con vértigo severo o movilidad limitada",
        "Embarazadas",
        "Condiciones médicas cardíacas, presión alta o lesiones graves"
      ],
      en: [
        "People with severe vertigo or limited mobility",
        "Pregnant women",
        "Cardiac medical conditions, high blood pressure or serious injuries"
      ]
    },
    reservation: {
      deposit_required: true,
      deposit_percent: 50,
      cancellation: {
        full_refund: {
          es: "con más de 48 h de anticipación",
          en: "with more than 48 hours notice"
        },
        reschedule: {
          es: "por clima sin penalización",
          en: "due to weather without penalty"
        }
      },
      payment_methods: [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    climate_policy: {
      monitoring: {
        es: "Monitoreo del clima 24 horas antes",
        en: "Weather monitoring 24 hours before"
      },
      reschedule: {
        es: "Reprogramación sin costo por mal clima",
        en: "Free rescheduling due to bad weather"
      },
      refunds: {
        es: "Reembolso total si no se puede realizar",
        en: "Full refund if cannot be performed"
      }
    },
    extra_notes: {
      es: [
        "Requiere buena técnica de pisada y estabilidad",
        "Llegar 15 minutos antes de la salida",
        "Evitar cremas, perfumes o jabones que contaminen el río"
      ],
      en: [
        "Requires good stepping technique and stability",
        "Arrive 15 minutes before departure",
        "Avoid creams, perfumes or soaps that contaminate the river"
      ]
    },
    contact: {
      whatsapp: "6466-6738",
      email: "ciudadesmeraldacr@gmail.com"
    }
  },
  {
    title: {
      es: "BirdWatching en el Bosque Nuboso",
      en: "Cloud Forest BirdWatching"
    },
    slug: "birdwatching-quetzal",
    description: {
      es: "Explorá con guía experto el Bosque Eterno del Agua para ver quetzales, tucanes y colibríes. Ideal para fotografía, observación de aves y conexión silenciosa con la naturaleza.",
      en: "Explore with expert guide the Eternal Water Forest to see quetzals, toucans and hummingbirds. Perfect for photography, bird watching and silent connection with nature."
    },
    duration: "2–3 horas",
    distance: "Variable según especie y mirador",
    difficulty: {
      es: "Bajo–Moderado",
      en: "Low–Moderate"
    },
    age_min: 12,
    location: {
      es: "Bosque Eterno del Agua, Sucre, Ciudad Quesada, Costa Rica",
      en: "Eternal Water Forest, Sucre, Ciudad Quesada, Costa Rica"
    },
    price_range: "$39–$89",
    image: "/bird-watching-la-vieja.png",
    schedule: ["5:30 a.m.", "6:00 a.m.", "7:00 a.m.", "8:00 a.m."],
    availability: {
      days: {
        es: "Todos los días (según clima)",
        en: "Every day (weather dependent)"
      },
      private_available: true
    },
    packages: [
      {
        name: {
          es: "Ala Curiosa",
          en: "Curious Wing"
        },
        price: "₡19,990 / $39",
        includes: {
          es: [
            "Caminata guiada de 2 horas",
            "Guía experto en aves del bosque nuboso",
            "Préstamo de binoculares",
            "Guía visual digital",
            "Seguro básico"
          ],
          en: [
            "2-hour guided walk",
            "Expert cloud forest bird guide",
            "Binocular loan",
            "Digital visual guide",
            "Basic insurance"
          ]
        }
      },
      {
        name: {
          es: "Ala Experta",
          en: "Expert Wing"
        },
        price: "₡29,990 / $59",
        includes: {
          es: [
            "Todo lo anterior",
            "Acceso a mirador exclusivo",
            "Mini taller de técnicas de avistamiento",
            "Pausa de té o café caliente",
            "Bitácora personal"
          ],
          en: [
            "Everything above",
            "Access to exclusive viewpoint",
            "Mini workshop on spotting techniques",
            "Hot tea or coffee break",
            "Personal logbook"
          ]
        }
      },
      {
        name: {
          es: "Ala Privilegiada (Privado)",
          en: "Privileged Wing (Private)"
        },
        price: "₡49,990 / $89",
        includes: {
          es: [
            "Tour personalizado con guía privado",
            "Snack de frutas, nueces y pan casero",
            "Café de altura de la zona",
            "Souvenir natural (semilla o marca páginas)",
            "Ruta adaptada según especie objetivo"
          ],
          en: [
            "Personalized tour with private guide",
            "Snack of fruits, nuts and homemade bread",
            "Local highland coffee",
            "Natural souvenir (seed or bookmark)",
            "Route adapted to target species"
          ]
        }
      }
    ],
    highlights: {
      es: [
        "Guía ornitólogo y préstamo de binoculares",
        "Avistamiento de aves únicas como el quetzal",
        "Opciones con mirador, snack y souvenir"
      ],
      en: [
        "Ornithologist guide and binocular loan",
        "Spotting unique birds like the quetzal",
        "Options with viewpoint, snack and souvenir"
      ]
    },
    recommendations: {
      es: [
        "Ropa de colores neutros",
        "Zapatos cómodos y repelente",
        "Binoculares (si tenés) y cámara",
        "Cédula o pasaporte",
        "Bloqueador solar natural"
      ],
      en: [
        "Neutral colored clothing",
        "Comfortable shoes and repellent",
        "Binoculars (if you have) and camera",
        "ID or passport",
        "Natural sunscreen"
      ]
    },
    technical: {
      terreno: {
        es: "Senderos sombreados con zonas de observación y miradores",
        en: "Shaded trails with observation areas and viewpoints"
      },
      ambiental: {
        es: "Alta biodiversidad y humedad ideal para aves",
        en: "High biodiversity and ideal humidity for birds"
      },
      extras: {
        es: "Paradas frecuentes y acceso a zonas tranquilas",
        en: "Frequent stops and access to quiet areas"
      }
    },
    included_general: {
      es: [
        "Guía certificado y especializado en ornitología",
        "Binoculares compartidos",
        "Acceso a senderos de observación",
        "Zonas de descanso",
        "Seguro básico"
      ],
      en: [
        "Certified guide specialized in ornithology",
        "Shared binoculars",
        "Access to observation trails",
        "Rest areas",
        "Basic insurance"
      ]
    },
    ideal_for: {
      es: [
        "Amantes de las aves",
        "Fotógrafos de naturaleza",
        "Turistas que buscan tranquilidad y conexión con el entorno"
      ],
      en: [
        "Bird lovers",
        "Nature photographers",
        "Tourists seeking tranquility and connection with the environment"
      ]
    },
    not_recommended_for: {
      es: [
        "Personas con poca paciencia para la observación lenta",
        "Niños muy pequeños",
        "Personas que no puedan caminar en silencio"
      ],
      en: [
        "People with little patience for slow observation",
        "Very young children",
        "People who cannot walk silently"
      ]
    },
    reservation: {
      deposit_required: true,
      deposit_percent: 50,
      cancellation: {
        full_refund: {
          es: "con más de 48 h de anticipación",
          en: "with more than 48 hours notice"
        },
        reschedule: {
          es: "por mal clima sin penalización",
          en: "due to bad weather without penalty"
        }
      },
      payment_methods: [
        "Efectivo",
        "SINPE Móvil: 6466-6738",
        "Transferencia BAC (colones y dólares)"
      ]
    },
    climate_policy: {
      monitoring: {
        es: "Condiciones de clima evaluadas 24 h antes",
        en: "Weather conditions evaluated 24 h before"
      },
      reschedule: {
        es: "Reprogramación sin penalización por lluvia",
        en: "Free rescheduling due to rain"
      },
      refunds: {
        es: "Reembolso completo si se cancela con anticipación",
        en: "Full refund if cancelled in advance"
      }
    },
    extra_notes: {
      es: [
        "Evitá perfumes y ruidos fuertes para no espantar a las aves",
        "No se garantiza avistamiento de especies específicas",
        "Recomendamos llegar al menos 10 minutos antes del horario seleccionado"
      ],
      en: [
        "Avoid perfumes and loud noises to not scare the birds",
        "Specific species sightings not guaranteed",
        "We recommend arriving at least 10 minutes before selected time"
      ]
    },
    contact: {
      whatsapp: "6466-6738",
      email: "ciudadesmeraldacr@gmail.com"
    }
  }
  // Note: This is a sample with the first two adventures. 
  // The complete implementation would include all adventures with their English translations
];