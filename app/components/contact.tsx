'use client'

import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react'

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '../components/ui/card'

import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Únete a la aventura o escríbenos!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Si tienes dudas, sugerencias o quieres ser el primero en enterarte de promociones,
            déjanos tu mensaje o regístrate a nuestro boletín ecológico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contacto Directo</h3>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación</h4>
                  <p>
                    Sucre, Ciudad Quesada<br />
                    Cerca del Parque Nacional del Agua Juan Castro Blanco<br />
                    Alajuela, Costa Rica
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                  <p>
                    WhatsApp: +506 6233-2535<br />
                    Llamadas: +506 8643-0807
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Correo</h4>
                  <p>ciudadesmeraldacr@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Horario</h4>
                  <p>
                    Lunes – Domingo: 6:00 AM – 6:00 PM<br />
                    Tours disponibles todos los días
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de mensaje + boletín */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>
                Responderemos en menos de 24 horas. Además, suscríbete a nuestro boletín eco
                para recibir descuentos verdes y noticias.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" placeholder="Tu apellido" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono (Opcional)</Label>
                  <Input id="phone" placeholder="+506 1234-5678" />
                </div>

                <div>
                  <Label htmlFor="adventure">Aventura de Interés</Label>
                  <Input
                    id="adventure"
                    placeholder="¿Qué tour te gustaría reservar?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos tamaño de grupo, fechas, requisitos especiales..."
                    rows={4}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Input id="newsletter" type="checkbox" />
                  <Label htmlFor="newsletter" className="text-gray-700">
                    Suscribirme al boletín eco
                  </Label>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
