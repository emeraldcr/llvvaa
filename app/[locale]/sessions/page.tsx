'use client'

import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CalendarDays,
  Clock,
  MapPin,
  Music2,
  Ticket,
  Users,
  Sun,
  Moon,
  Mail,
  Search,
  Sparkles,
  Info,
  ShieldCheck,
  HeartHandshake,
  PartyPopper,
  Star,
  BadgeCheck,
} from 'lucide-react'

// shadcn/ui components (assumes they are available in your project)
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Badge } from '../../components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { Separator } from '../../components/ui/separator'
import { Switch } from '../../components/ui/switch'
import { Label } from '../../components/ui/label'

// -----------------------------
// Mock Data (Customize freely)
// -----------------------------

type Artist = {
  id: string
  name: string
  stage: 'Principal' | 'Club' | 'Acústico'
  day: 'Viernes' | 'Sábado' | 'Domingo'
  start: string // 24h, e.g. '21:30'
  end: string
  genre: string[]
  country?: string
  featured?: boolean
  color?: string // tailwind accent hint
}

type Sponsor = {
  name: string
  tier: 'Diamond' | 'Gold' | 'Silver' | 'Community'
  url?: string
}

const ARTISTS: Artist[] = [
  {
    id: 'a1',
    name: 'La Vieja All Stars',
    stage: 'Principal',
    day: 'Viernes',
    start: '21:00',
    end: '22:30',
    genre: ['Fusión', 'Latino'],
    country: 'CR',
    featured: true,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'a2',
    name: 'Selva Modular',
    stage: 'Club',
    day: 'Viernes',
    start: '23:00',
    end: '00:30',
    genre: ['Electrónica', 'Downtempo'],
    country: 'AR',
  },
  {
    id: 'a3',
    name: 'Bosque Acústico',
    stage: 'Acústico',
    day: 'Sábado',
    start: '17:00',
    end: '18:00',
    genre: ['Indie', 'Folk'],
    country: 'MX',
  },
  {
    id: 'a4',
    name: 'Ritmo del Barrio',
    stage: 'Principal',
    day: 'Sábado',
    start: '20:00',
    end: '21:30',
    genre: ['Ska', 'Rock'],
    country: 'CR',
    featured: true,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'a5',
    name: 'Nocturna',
    stage: 'Club',
    day: 'Domingo',
    start: '22:00',
    end: '23:30',
    genre: ['Techno', 'House'],
    country: 'ES',
  },
  {
    id: 'a6',
    name: 'Cordillera',
    stage: 'Principal',
    day: 'Domingo',
    start: '19:00',
    end: '20:15',
    genre: ['Pop Alternativo'],
    country: 'CL',
  },
]

const SPONSORS: Sponsor[] = [
  { name: 'Imperio Sonoro', tier: 'Diamond', url: '#' },
  { name: 'Ruta 32', tier: 'Gold', url: '#' },
  { name: 'Casa Tica', tier: 'Gold', url: '#' },
  { name: 'Cafe Alto', tier: 'Silver', url: '#' },
  { name: 'Plaza Central', tier: 'Community', url: '#' },
]

const FAQ = [
  {
    q: '¿Dónde se realiza La Vieja Sessions?',
    a: 'En el Centro Cultural La Vieja, San José, Costa Rica. Tenemos tres escenarios: Principal, Club y Acústico.',
  },
  {
    q: '¿Cuáles son las opciones de entradas?',
    a: 'Pases por día, abono completo de 3 días y pases VIP con acceso prioritario, zona lounge y merch exclusiva.',
  },
  {
    q: '¿El evento es para todas las edades?',
    a: 'Sí. Menores de 12 años entran gratis acompañados de un adulto con entrada válida.',
  },
  {
    q: 'Accesibilidad',
    a: 'Contamos con rampas, baños accesibles y zonas reservadas. Escribe a accesibilidad@lavieja.cr para apoyo específico.',
  },
]

const TIERS = [
  {
    name: 'General',
    price: '$45',
    perks: ['Acceso a todos los escenarios', 'Agua gratis', 'App del festival'],
    cta: 'Comprar General',
  },
  {
    name: 'VIP',
    price: '$110',
    perks: ['Fast-track ingreso', 'Zona Lounge', 'Merch exclusiva', 'Pit del Escenario Principal'],
    cta: 'Comprar VIP',
    highlight: true,
  },
  {
    name: '3 Días',
    price: '$120',
    perks: ['Acceso completo 3 días', 'Locker incluido', 'Meet & Greet (sujeto a sorteo)'],
    cta: 'Comprar Abono',
  },
]

// -----------------------------
// Helpers
// -----------------------------

const days: Array<Artist['day']> = ['Viernes', 'Sábado', 'Domingo']
const stages: Array<Artist['stage']> = ['Principal', 'Club', 'Acústico']

function timeToMinutes(t: string) {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

function classNames(...args: Array<string | false | undefined>) {
  return args.filter(Boolean).join(' ')
}

// -----------------------------
// Components
// -----------------------------

function Announcement() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20" />
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-background/60 p-3 backdrop-blur">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4" />
            <span>
              Anuncio: preventa activa — cupos limitados. ¡Asegura tu pase hoy!
            </span>
          </div>
          <Button size="sm" variant="secondary">
            Ver opciones
          </Button>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Music2 className="h-6 w-6" />
          <span className="font-bold">La Vieja Sessions</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <a className="text-sm hover:underline" href="#lineup">Lineup</a>
          <a className="text-sm hover:underline" href="#agenda">Agenda</a>
          <a className="text-sm hover:underline" href="#entradas">Entradas</a>
          <a className="text-sm hover:underline" href="#faq">FAQ</a>
          <a className="text-sm hover:underline" href="#mapa">Mapa</a>
        </nav>
        <div className="flex items-center gap-3">
        
          <Button className="ml-2" size="sm">
            Comprar
          </Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-pink-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-5 md:py-24">
        <div className="md:col-span-3">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl"
          >
            La Vieja Sessions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Tres días, tres escenarios, una sola vibra. Música en vivo, cultura local y noches inolvidables en San José.
          </motion.p>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="flex items-center gap-1 py-1 text-sm">
              <CalendarDays className="h-4 w-4" /> 24–26 Oct • 2025
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 py-1 text-sm">
              <MapPin className="h-4 w-4" /> Centro Cultural La Vieja
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 py-1 text-sm">
              <Users className="h-4 w-4" /> Aforo limitado
            </Badge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              <Ticket className="mr-2 h-5 w-5" /> Comprar Entradas
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#lineup"><Music2 className="mr-2 h-5 w-5" /> Ver Lineup</a>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            * Horarios y artistas sujetos a cambios.
          </p>
        </div>
        <div className="md:col-span-2">
          <Card className="border-white/10 bg-background/40 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><PartyPopper className="h-5 w-5" /> News & Drops</CardTitle>
              <CardDescription>
                Suscríbete para recibir avisos de nuevas confirmaciones, activaciones y horarios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Input type="email" placeholder="tu@email.com" aria-label="Correo" />
                  <Button type="submit">
                    <Mail className="mr-2 h-4 w-4" /> Notificarme
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="whatsapp" />
                  <Label htmlFor="whatsapp" className="text-xs text-muted-foreground">
                    También por WhatsApp
                  </Label>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Tickets() {
  return (
    <section id="entradas" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">Entradas</h2>
          <p className="text-sm text-muted-foreground">Precios de lanzamiento por tiempo limitado.</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border p-2">
          <Sun className="h-4 w-4" />
          <Separator orientation="vertical" className="mx-1 h-4" />
          <Moon className="h-4 w-4" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {TIERS.map((t) => (
          <Card key={t.name} className={classNames('relative overflow-hidden', t.highlight && 'ring-2 ring-primary')}>
            {t.highlight && (
              <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                <Star className="h-3 w-3" /> Recomendado
              </div>
            )}
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
              <CardDescription className="text-2xl font-bold">{t.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 space-y-2 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4" /> {p}
                  </li>
                ))}
              </ul>
              <Button className="w-full">{t.cta}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Lineup() {
  const [q, setQ] = useState('')
  const [day, setDay] = useState<Artist['day'] | 'Todos'>('Todos')
  const [stage, setStage] = useState<Artist['stage'] | 'Todos'>('Todos')

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase()
    return ARTISTS.filter((a) => {
      const matchQ = !ql || a.name.toLowerCase().includes(ql) || a.genre.join(' ').toLowerCase().includes(ql)
      const matchDay = day === 'Todos' || a.day === day
      const matchStage = stage === 'Todos' || a.stage === stage
      return matchQ && matchDay && matchStage
    }).sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start))
  }, [q, day, stage])

  return (
    <section id="lineup" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Lineup</h2>
          <p className="text-sm text-muted-foreground">Explora artistas por día, escenario o género.</p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar artistas o géneros"
              className="w-64"
            />
            <Search className="h-4 w-4 opacity-60" />
          </div>
          <Tabs value={day} onValueChange={(v) => setDay(v as any)}>
            <TabsList>
              <TabsTrigger value="Todos">Todos</TabsTrigger>
              {days.map((d) => (
                <TabsTrigger key={d} value={d}>
                  {d}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Tabs value={stage} onValueChange={(v) => setStage(v as any)}>
            <TabsList>
              <TabsTrigger value="Todos">Escenarios</TabsTrigger>
              {stages.map((s) => (
                <TabsTrigger key={s} value={s}>
                  {s}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden">
              {a.featured && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-2 py-1 text-[10px] font-semibold text-black">
                  Headliner
                </div>
              )}
              <div className={classNames('absolute inset-0 -z-10 opacity-20 blur-2xl transition-opacity group-hover:opacity-30', a.color ? `bg-gradient-to-tr ${a.color}` : 'bg-gradient-to-tr from-indigo-500 to-purple-500')} />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{a.name}</span>
                  <Badge variant="secondary">{a.stage}</Badge>
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {a.start}–{a.end}
                  <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide">{a.day}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex flex-wrap gap-2">
                  {a.genre.map((g) => (
                    <Badge key={g} variant="outline">{g}</Badge>
                  ))}
                </div>
                {a.country && (
                  <p className="text-xs text-muted-foreground">Origen: {a.country}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Agenda() {
  const slotsByDay = useMemo(() => {
    const base: Record<Artist['day'], Artist[]> = { Viernes: [], Sábado: [], Domingo: [] }
    ARTISTS.forEach((a) => base[a.day].push(a))
    for (const d of days) base[d].sort((x, y) => timeToMinutes(x.start) - timeToMinutes(y.start))
    return base
  }, [])

  return (
    <section id="agenda" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Agenda</h2>
        <p className="text-sm text-muted-foreground">Horarios por escenario (sujetos a cambios).</p>
      </div>
      <Tabs defaultValue="Viernes">
        <TabsList className="mb-4 grid w-full grid-cols-3">
          {days.map((d) => (
            <TabsTrigger key={d} value={d}>{d}</TabsTrigger>
          ))}
        </TabsList>
        {days.map((d) => (
          <TabsContent key={d} value={d}>
            <div className="grid gap-4 md:grid-cols-3">
              {stages.map((s) => (
                <Card key={s}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {s}
                    </CardTitle>
                    <CardDescription>{d}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      {slotsByDay[d].filter((a) => a.stage === s).map((a) => (
                        <li key={a.id} className="flex items-center justify-between">
                          <span className="truncate">{a.name}</span>
                          <span className="tabular-nums text-muted-foreground">{a.start}–{a.end}</span>
                        </li>
                      ))}
                      {slotsByDay[d].filter((a) => a.stage === s).length === 0 && (
                        <li className="text-muted-foreground">Próximamente…</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

function Gallery() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/vieja-${i}/800/600`)

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Galería</h2>
        <p className="text-sm text-muted-foreground">Instantáneas de ediciones pasadas.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => { setActive(i); setOpen(true) }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border"
            aria-label={`Abrir imagen ${i + 1}`}
          >
            <img src={src} alt={`La Vieja Sessions ${i + 1}`} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{/* handled by buttons */}</DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Galería</DialogTitle>
          </DialogHeader>
          {active !== null && (
            <img src={images[active]} alt={`Vista ampliada ${active + 1}`} className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function Sponsors() {
  const tiers: Sponsor['tier'][] = ['Diamond', 'Gold', 'Silver', 'Community']
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Aliados & Sponsors</h2>
        <Badge variant="secondary" className="flex items-center gap-1"><HeartHandshake className="h-4 w-4" /> Gracias</Badge>
      </div>
      <div className="space-y-6">
        {tiers.map((t) => (
          <div key={t}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t}</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {SPONSORS.filter((s) => s.tier === t).map((s) => (
                <a key={s.name} href={s.url} className="flex items-center justify-center rounded-2xl border p-6 text-center text-sm opacity-80 transition hover:opacity-100">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
        <p className="text-sm text-muted-foreground">Todo lo que necesitas para planear tu experiencia.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Seguridad</CardTitle>
            <CardDescription>Revisamos bolsos. Objetos prohibidos: aerosoles, láseres, armas, vidrio.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Info className="h-4 w-4" /> Info útil</CardTitle>
            <CardDescription>Habrá lockers, puntos de hidratación gratis y señalización bilingüe.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> Accesibilidad</CardTitle>
            <CardDescription>Rampas, baños accesibles y zona prioritaria. Escríbenos si necesitas apoyo.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

function Mapa() {
  return (
    <section id="mapa" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Mapa & Cómo llegar</h2>
        <p className="text-sm text-muted-foreground">Planifica tu ruta. Recomendamos transporte compartido.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ubicación</CardTitle>
            <CardDescription>Centro Cultural La Vieja, San José</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video overflow-hidden rounded-xl">
              <iframe
                title="Mapa La Vieja"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-84.116%2C9.92%2C-84.04%2C9.98&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consejos</CardTitle>
            <CardDescription>Ingresos, movilidad y zonas clave.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Ingreso principal sobre Av. Central. Fast-track VIP a la derecha.</li>
              <li>• Punto de encuentro y atención: carpa de INFO junto a boletería.</li>
              <li>• Lockers disponibles en el pasillo norte. Pago con tarjeta.</li>
              <li>• Hidratación gratuita en estaciones marcadas con 💧.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div className="col-span-2">
          <div className="mb-2 flex items-center gap-2">
            <Music2 className="h-5 w-5" />
            <span className="font-semibold">La Vieja Sessions</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Producción ejecutiva y programación de clase mundial. Edición 2025.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Navegación</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#lineup" className="opacity-80 hover:opacity-100">Lineup</a></li>
            <li><a href="#agenda" className="opacity-80 hover:opacity-100">Agenda</a></li>
            <li><a href="#entradas" className="opacity-80 hover:opacity-100">Entradas</a></li>
            <li><a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Contacto</h4>
          <ul className="space-y-1 text-sm">
            <li>Prensa: <a href="mailto:prensa@lavieja.cr" className="underline">prensa@lavieja.cr</a></li>
            <li>Booking: <a href="mailto:booking@lavieja.cr" className="underline">booking@lavieja.cr</a></li>
            <li>Accesibilidad: <a href="mailto:accesibilidad@lavieja.cr" className="underline">accesibilidad@lavieja.cr</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} La Vieja Sessions. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default function ViejaSessionsPage() {
  return (
    <main className="relative">
      <Announcement />
      <Header />
      <Hero />
      <Tickets />
      <Lineup />
      <Agenda />
      <Gallery />
      <Sponsors />
      <FAQSection />
      <Mapa />
      <Footer />
    </main>
  )
}
