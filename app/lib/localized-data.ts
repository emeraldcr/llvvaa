import { useLocale } from 'next-intl';
import { useMemo } from 'react';
import { Locale } from '../../lib/i18n';
import { getLocalizedAdventure } from './i18n-utils';
import { multilingualAdventures } from './multilingual-adventures';
import { adventures as baseAdventures } from './statics';

// ---------- Types ----------
type Testimonial = {
  name: string;
  text: string;
  avatar: string;
};

// ---------- Hooks ----------

// Get all adventures in the current locale
export function useLocalizedAdventures() {
  const locale = useLocale() as Locale;

  return useMemo(() => {
    // TODO: Replace with full translations once ready
    return baseAdventures;
  }, [locale]);
}

// Get a specific adventure by slug in the current locale
export function useLocalizedAdventure(slug: string) {
  const locale = useLocale() as Locale;

  return useMemo(() => {
    return (
      getLocalizedAdventure(slug, locale, multilingualAdventures) ||
      baseAdventures.find((a) => a.slug === slug) ||
      null
    );
  }, [slug, locale]);
}

// Search adventures with multilingual support
export function useAdventureSearch(query: string) {
  const adventures = useLocalizedAdventures();

  return useMemo(() => {
    if (!query.trim()) return adventures;

    const searchTerm = query.toLowerCase();

    return adventures.filter((adventure) => {
      const searchFields: (string | undefined)[] = [
        adventure.title,
        adventure.description,
        adventure.location,
        adventure.difficulty,
        ...(adventure.highlights ?? []),
        ...(adventure.ideal_for ?? []),
      ];

      return searchFields.some(
        (field) => typeof field === 'string' && field.toLowerCase().includes(searchTerm)
      );
    });
  }, [query, adventures]);
}

// ---------- Utilities ----------

// Localized services
export function getLocalizedServices(locale: Locale) {
  return [
    {
      id: 'ecological-tours',
      titleKey: 'services.items.ecologicalTours.title',
      descriptionKey: 'services.items.ecologicalTours.description',
    },
    {
      id: 'adventure-activities',
      titleKey: 'services.items.adventureActivities.title',
      descriptionKey: 'services.items.adventureActivities.description',
    },
    {
      id: 'photography-tours',
      titleKey: 'services.items.photographyTours.title',
      descriptionKey: 'services.items.photographyTours.description',
    },
    {
      id: 'waterfall-expeditions',
      titleKey: 'services.items.waterfallExpeditions.title',
      descriptionKey: 'services.items.waterfallExpeditions.description',
    },
    {
      id: 'environmental-education',
      titleKey: 'services.items.environmentalEducation.title',
      descriptionKey: 'services.items.environmentalEducation.description',
    },
    {
      id: 'community-tourism',
      titleKey: 'services.items.communityTourism.title',
      descriptionKey: 'services.items.communityTourism.description',
    },
  ];
}

// Localized testimonials
const testimonials: Record<'en' | 'es', Testimonial[]> = {
  es: [
    {
      name: 'María López',
      text: 'El tour al Cañón del Río La Vieja fue una experiencia inolvidable. El guía nos hizo reír mientras nos enseñaba sobre cada especie. ¡Volvería mil veces!',
      avatar: '/clientes/maria-lopez.png',
    },
    {
      name: 'Carlos Gómez',
      text: 'Nunca imaginé ver al quetzal tan de cerca. La organización, la seguridad y el café final hicieron que valiera cada céntimo.',
      avatar: '/clientes/carlos-gomez.png',
    },
    {
      name: 'Ana Rodríguez',
      text: 'La caminata bajo la lluvia fue mágica. Me sentí parte del bosque y aprendí muchísimo sobre las ranas y su hábitat.',
      avatar: '/clientes/ana-rodriguez.png',
    },
  ],
  en: [
    {
      name: 'María López',
      text: 'The tour to La Vieja River Canyon was an unforgettable experience. The guide made us laugh while teaching us about each species. I would return a thousand times!',
      avatar: '/clientes/maria-lopez.png',
    },
    {
      name: 'Carlos Gómez',
      text: 'I never imagined seeing the quetzal so close. The organization, safety and final coffee made it worth every penny.',
      avatar: '/clientes/carlos-gomez.png',
    },
    {
      name: 'Ana Rodríguez',
      text: 'The rain walk was magical. I felt part of the forest and learned so much about frogs and their habitat.',
      avatar: '/clientes/ana-rodriguez.png',
    },
  ],
};

export function getLocalizedTestimonials(locale: Locale): Testimonial[] {
  // fallback to Spanish if the locale is not supported
  return testimonials[(locale as 'en' | 'es')] ?? testimonials.es;
}
