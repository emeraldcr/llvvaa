import { Locale } from '../../lib/i18n';

// Define the multilingual content structure
export interface MultilingualText {
  es: string;
  en: string;
  [key: string]: string; // Index signature for locale access
}

export interface MultilingualTextArray {
  es: string[];
  en: string[];
  [key: string]: string[]; // Index signature for locale access
}

// Adventure interfaces with multilingual support
export interface MultilingualAdventure {
  title: MultilingualText;
  slug: string;
  description: MultilingualText;
  duration: string;
  distance?: string;
  difficulty: MultilingualText;
  age_min: number;
  age_max?: number;
  location: MultilingualText;
  price_range: string;
  image: string;
  schedule: string[];
  availability?: {
    days: MultilingualText;
    seasonal_best?: MultilingualText;
    private_available: boolean;
    private_only_days?: string[];
  };
  packages: Array<{
    name: MultilingualText;
    price: string;
    available?: MultilingualText;
    includes: MultilingualTextArray;
  }>;
  group_discount?: {
    min_people: number;
    price_per_person: string;
    note: MultilingualText;
  };
  highlights: MultilingualTextArray;
  recommendations: MultilingualTextArray;
  technical: {
    [key: string]: MultilingualText;
  };
  included_general: MultilingualTextArray;
  ideal_for: MultilingualTextArray;
  not_recommended_for: MultilingualTextArray;
  reservation: {
    deposit_required: boolean;
    deposit_percent: number;
    requirements?: MultilingualText;
    cancellation: {
      full_refund: MultilingualText;
      reschedule: MultilingualText;
    };
    payment_methods: string[];
  };
  climate_policy: {
    monitoring: MultilingualText;
    reschedule: MultilingualText;
    refunds: MultilingualText;
  };
  extra_notes: MultilingualTextArray;
  contact: {
    whatsapp: string;
    email: string;
  };
}

// Slug mappings for bilingual URLs
export const slugMappings: Record<string, { es: string; en: string }> = {
  'canon-esmeralda': {
    es: 'canon-esmeralda',
    en: 'emerald-canyon'
  },
  'birdwatching-quetzal': {
    es: 'birdwatching-quetzal',
    en: 'quetzal-birdwatching'
  },
  'expedicion-nocturna': {
    es: 'expedicion-nocturna',
    en: 'night-expedition'
  },
  'volcanes-dormidos': {
    es: 'volcanes-dormidos',
    en: 'dormant-volcanoes'
  },
  'rainwalk': {
    es: 'rainwalk',
    en: 'rainwalk'
  },
  'mirador-el-colibri': {
    es: 'mirador-el-colibri',
    en: 'hummingbird-viewpoint'
  },
  'canopy-extremo-quetzal': {
    es: 'canopy-extremo-quetzal',
    en: 'extreme-canopy-quetzal'
  },
  'safari-atv-volcanico': {
    es: 'safari-atv-volcanico',
    en: 'volcanic-atv-safari'
  },
  'safari-manuel-antonio': {
    es: 'safari-manuel-antonio',
    en: 'manuel-antonio-safari'
  },
  'canyoning-cascadas-diablo': {
    es: 'canyoning-cascadas-diablo',
    en: 'devil-falls-canyoning'
  },
  'volcan-arenal-aguas-termales': {
    es: 'volcan-arenal-aguas-termales',
    en: 'arenal-volcano-hot-springs'
  },
  'selvatura-canopy-completo': {
    es: 'selvatura-canopy-completo',
    en: 'selvatura-complete-canopy'
  },
  'skytrek-adventure-completo': {
    es: 'skytrek-adventure-completo',
    en: 'skytrek-complete-adventure'
  },
  'extremo-canopy-bungee': {
    es: 'extremo-canopy-bungee',
    en: 'extreme-canopy-bungee'
  },
  'monteverde-night-tour': {
    es: 'monteverde-night-tour',
    en: 'monteverde-night-tour'
  },
  'el-trapiche-cafe-chocolate': {
    es: 'el-trapiche-cafe-chocolate',
    en: 'trapiche-coffee-chocolate'
  },
  'arenal-mundo-aventura': {
    es: 'arenal-mundo-aventura',
    en: 'arenal-adventure-world'
  },
  'catamaran-manuel-antonio': {
    es: 'catamaran-manuel-antonio',
    en: 'manuel-antonio-catamaran'
  },
  'kayak-tortuguero-canales': {
    es: 'kayak-tortuguero-canales',
    en: 'tortuguero-channels-kayak'
  },
  'kayak-tortuguero': {
    es: 'kayak-tortuguero',
    en: 'tortuguero-kayak'
  },
  'ballenas-golfo-dulce': {
    es: 'ballenas-golfo-dulce',
    en: 'dulce-gulf-whales'
  },
  'surf-nosara-guanacaste': {
    es: 'surf-nosara-guanacaste',
    en: 'nosara-surf-guanacaste'
  },
  'rafting-rio-tenorio': {
    es: 'rafting-rio-tenorio',
    en: 'tenorio-river-rafting'
  },
  'cabalgata-arenal-panoramica': {
    es: 'cabalgata-arenal-panoramica',
    en: 'arenal-panoramic-horseback'
  },
  'pesca-lago-arenal': {
    es: 'pesca-lago-arenal',
    en: 'arenal-lake-fishing'
  },
  'aguas-termales-tabacon': {
    es: 'aguas-termales-tabacon',
    en: 'tabacon-hot-springs'
  },
  'la-paz-waterfalls-gardens': {
    es: 'la-paz-waterfalls-gardens',
    en: 'la-paz-waterfalls-gardens'
  },
  'cafe-don-juan-tour': {
    es: 'cafe-don-juan-tour',
    en: 'don-juan-coffee-tour'
  },
  'observacion-aves-costa-rica': {
    es: 'observacion-aves-costa-rica',
    en: 'costa-rica-birdwatching'
  },
  'kayak-manglares-costa-rica': {
    es: 'kayak-manglares-costa-rica',
    en: 'costa-rica-mangrove-kayak'
  },
  'tortugas-tortuguero-conservacion': {
    es: 'tortugas-tortuguero-conservacion',
    en: 'tortuguero-turtle-conservation'
  },
  'original-canopy-higueron': {
    es: 'original-canopy-higueron',
    en: 'original-higueron-canopy'
  },
  'gran-tour-costa-rica-8-dias': {
    es: 'gran-tour-costa-rica-8-dias',
    en: 'costa-rica-grand-tour-8-days'
  },
  'curi-cancha-bosque-nuboso': {
    es: 'curi-cancha-bosque-nuboso',
    en: 'curi-cancha-cloud-forest'
  }
};

// Utility function to get localized slug
export function getLocalizedSlug(originalSlug: string, locale: Locale): string {
  const mapping = slugMappings[originalSlug];
  if (mapping) {
    return mapping[locale as keyof typeof mapping];
  }
  return originalSlug; // fallback to original slug if no mapping exists
}

// Utility function to get original slug from localized slug
export function getOriginalSlug(localizedSlug: string, locale: Locale): string {
  for (const [originalSlug, mapping] of Object.entries(slugMappings)) {
    if (mapping[locale as keyof typeof mapping] === localizedSlug) {
      return originalSlug;
    }
  }
  return localizedSlug; // fallback if no mapping found
}

// Utility function to get localized adventure by slug
export function getLocalizedAdventure(slug: string, locale: Locale, adventures: MultilingualAdventure[]): MultilingualAdventure | null {
  const originalSlug = getOriginalSlug(slug, locale);
  return adventures.find(adventure => adventure.slug === originalSlug) || null;
}

// Utility function to transform text to multilingual structure
export function createMultilingualText(spanish: string, english: string): MultilingualText {
  return { es: spanish, en: english };
}

// Utility function to transform array to multilingual structure
export function createMultilingualArray(spanish: string[], english: string[]): MultilingualTextArray {
  return { es: spanish, en: english };
}

// Function to get text in specific locale with fallback
export function getLocalizedText(text: MultilingualText | string, locale: Locale): string {
  if (typeof text === 'string') {
    return text;
  }
  return text[locale as keyof MultilingualText] || text.es;
}

// Function to get array in specific locale with fallback
export function getLocalizedArray(array: MultilingualTextArray | string[], locale: Locale): string[] {
  if (Array.isArray(array)) {
    return array;
  }
  return array[locale as keyof MultilingualTextArray] || array.es;
}