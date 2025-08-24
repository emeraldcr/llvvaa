'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Search as SearchIcon,
  MapPin,
  CalendarDays,
  Tag,
  DollarSign,
  ArrowLeft,
  X,
} from 'lucide-react'

// shadcn/ui components
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'

// Import adventures data
import { adventures as adventuresData } from '@/app/lib/statics'

// Simplified Adventure type
interface Adventure {
  id?: string | number
  slug?: string
  title?: string
  name?: string
  city?: string
  location?: string
  venue?: string
  country?: string
  date?: string
  dates?: string
  tags?: string[]
  description?: string
  price?: string | number
  image?: string
  cover?: string
}

// Utility functions
const getAdventureTitle = (adventure: Adventure): string => {
  return adventure.title || adventure.name || 'Adventure'
}
const getAdventureLocation = (adventure: Adventure): string => {
  return adventure.city || adventure.location || adventure.venue || ''
}
const getAdventureDate = (adventure: Adventure): string => {
  return adventure.date || adventure.dates || ''
}
const getAdventureImage = (adventure: Adventure): string => {
  return adventure.image || adventure.cover || ''
}
const getAdventureId = (adventure: Adventure): string => {
  return String(adventure.slug || adventure.id || '')
}

// Search function
const searchAdventures = (query: string, adventures: Adventure[]): Adventure[] => {
  if (!query.trim()) return adventures

  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean)
  return adventures
    .map(adventure => {
      const searchableText = [
        getAdventureTitle(adventure),
        getAdventureLocation(adventure),
        adventure.country || '',
        getAdventureDate(adventure),
        adventure.description || '',
        ...(adventure.tags || [])
      ].join(' ').toLowerCase()

      const score = searchTerms.reduce((acc, term) => {
        if (searchableText.includes(term)) {
          return acc + (searchableText.includes(` ${term} `) ? 3 : 1)
        }
        return acc
      }, 0)

      return { adventure, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 50)
    .map(({ adventure }) => adventure)
}

// Main component
export default function SessionsSearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState(searchParams?.get('q') || '')
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('recent-searches')
      if (saved) {
        setRecentSearches(JSON.parse(saved))
      }
    } catch (error) {
      console.error('Error loading recent searches:', error)
    }
  }, [])

  // Keyboard shortcut for search focus
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Search results
  const searchResults = useMemo(() => {
    return searchAdventures(query, adventuresData as Adventure[])
  }, [query])

  // Handle adventure selection
  const handleSelectAdventure = (adventure: Adventure) => {
    const id = getAdventureId(adventure)
    if (id) {
      if (query.trim()) {
        const newRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 8)
        setRecentSearches(newRecent)
        try {
          localStorage.setItem('recent-searches', JSON.stringify(newRecent))
        } catch (error) {
          console.error('Error saving recent searches:', error)
        }
      }
      router.push(`/adventures/${id}`)
    }
  }

  const clearQuery = () => setQuery('')

  const removeRecentSearch = (term: string) => {
    const updated = recentSearches.filter(s => s !== term)
    setRecentSearches(updated)
    try {
      localStorage.setItem('recent-searches', JSON.stringify(updated))
    } catch (error) {
      console.error('Error updating recent searches:', error)
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background: degradado + imagen + ajustes de color */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,50,100,0.85) 0%, rgba(16,185,129,0.25) 30%,
           rgba(0,100,150,0.6) 70%, rgba(0,0,0,0.85) 100%), url('/volcanes-dormidos-la-vieja.png')`,
          filter: 'contrast(1.25) brightness(0.9) saturate(1.15)',
        }}
      />
      {/* Velos y “vidrio” global */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-emerald-900/20" />

      {/* Glows animados */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-400/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-400/20 blur-3xl animate-pulse delay-1000" />

      {/* Contenido */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 py-8 text-white">
        {/* Header (vidrioso) */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg shadow-emerald-900/10 px-3 py-2"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            aria-label="Go back"
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <div className="relative flex-1">
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por artista, ciudad, fecha o etiqueta... (Ctrl/⌘+K)"
              className="h-12 pl-12 pr-10 text-base bg-white/10 border-white/20 text-white placeholder-white/70 focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:border-emerald-300/60"
              autoFocus
            />
            <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70 pointer-events-none" />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-white hover:bg-white/10"
                onClick={clearQuery}
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Button
            onClick={() => router.push('/sessions')}
            variant="secondary"
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 border-0"
          >
            Sessions
          </Button>
        </motion.div>

        {/* Content */}
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="md:col-span-2"
          >
            <SearchResults
              query={query}
              results={searchResults}
              onSelect={handleSelectAdventure}
            />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="space-y-4"
          >
            {recentSearches.length > 0 && (
              <RecentSearches
                searches={recentSearches}
                onSelect={setQuery}
                onRemove={removeRecentSearch}
              />
            )}
            <SearchTips />
          </motion.aside>
        </div>
      </main>
    </section>
  )
}

// Search Results Component
interface SearchResultsProps {
  query: string
  results: Adventure[]
  onSelect: (adventure: Adventure) => void
}

function SearchResults({ query, results, onSelect }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <Card className="border-dashed border-white/20 bg-white/10 backdrop-blur-md text-white">
        <CardContent className="p-10 text-center">
          <p className="text-white/80">
            {query ? (
              <>No se encontraron resultados para <strong className="text-white">"{query}"</strong>. Prueba buscando por artista o ciudad.</>
            ) : (
              'Empieza a escribir para buscar aventuras y sesiones.'
            )}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {results.map((adventure, index) => (
        <AdventureCard
          key={getAdventureId(adventure) || index}
          adventure={adventure}
          onClick={() => onSelect(adventure)}
        />
      ))}
    </div>
  )
}

// Adventure Card Component
interface AdventureCardProps {
  adventure: Adventure
  onClick: () => void
}

function AdventureCard({ adventure, onClick }: AdventureCardProps) {
  const title = getAdventureTitle(adventure)
  const location = getAdventureLocation(adventure)
  const date = getAdventureDate(adventure)
  const image = getAdventureImage(adventure)
  const price = adventure.price
  const tags = (adventure.tags || []).slice(0, 3)

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden transition-all border border-white/15 bg-white/10 backdrop-blur-md text-white hover:shadow-2xl hover:shadow-emerald-900/20 hover:border-emerald-300/30">
        <div className="relative aspect-[4/3] bg-white/5">
          {/* Sutil overlay para tintar imágenes */}
          {image ? (
            <>
              <img src={image} alt={title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-white/70">
              No image
            </div>
          )}
        </div>

        <CardContent className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold line-clamp-1 drop-shadow-sm">{title}</h3>
            {price && (
              <div className="flex items-center gap-1 text-sm text-emerald-200">
                <DollarSign className="h-4 w-4" />
                {price}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {location}
              </div>
            )}
            {date && (
              <div className="flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                {date}
              </div>
            )}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-white/25 bg-white/10 text-white"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Recent Searches Component
interface RecentSearchesProps {
  searches: string[]
  onSelect: (search: string) => void
  onRemove: (search: string) => void
}

function RecentSearches({ searches, onSelect, onRemove }: RecentSearchesProps) {
  return (
    <Card className="border border-white/15 bg-white/10 backdrop-blur-md text-white">
      <CardContent className="p-4">
        <h4 className="font-medium mb-3">Búsquedas recientes</h4>
        <div className="flex flex-wrap gap-2">
          {searches.map((search) => (
            <div key={search} className="flex items-center">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                onClick={() => onSelect(search)}
              >
                {search}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 ml-1 text-white hover:bg-white/10"
                onClick={() => onRemove(search)}
                aria-label={`Remove ${search}`}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Search Tips Component
function SearchTips() {
  return (
    <Card className="border border-white/15 bg-white/10 backdrop-blur-md text-white">
      <CardContent className="p-4">
        <h4 className="font-medium mb-3">Consejos de búsqueda</h4>
        <ul className="text-sm text-white/80 space-y-1">
          <li>• Usa nombre del artista, ciudad o fecha</li>
          <li>• Agrega etiquetas como “acústico”, “VIP”, “festival”</li>
          <li>
            • Presiona{' '}
            <kbd className="px-1 border border-white/30 rounded bg-white/10">Ctrl</kbd>/
            <kbd className="px-1 border border-white/30 rounded bg-white/10">⌘</kbd>+
            <kbd className="px-1 border border-white/30 rounded bg-white/10">K</kbd> para enfocar
          </li>
        </ul>
        <Separator className="my-3 bg-white/20" />
        <p className="text-xs text-white/70">
          Tip: Usa múltiples palabras para refinar los resultados.
        </p>
      </CardContent>
    </Card>
  )
}
