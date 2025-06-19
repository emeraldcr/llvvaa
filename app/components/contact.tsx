'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  MapPin, Phone, Mail, Clock
} from 'lucide-react'
import {
  Card, CardHeader, CardContent, CardTitle, CardDescription
} from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adventure: '',
    message: '',
    newsletter: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target

    const newValue =
      type === 'checkbox' && 'checked' in e.target
        ? (e.target as HTMLInputElement).checked
        : value

    setForm({ ...form, [id]: newValue })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_tk6cmbd',
        'template_iroxri8',
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          adventure: form.adventure,
          message: form.message,
          newsletter: form.newsletter ? 'Sí' : 'No',
        },
        '-AioZlrYl09XXA5sU'
      )
      alert('Mensaje enviado con éxito 🌿')
      setForm({
        firstName: '', lastName: '', email: '',
        phone: '', adventure: '', message: '', newsletter: false
      })
    } catch (err) {
      alert('Hubo un error al enviar el mensaje 😓')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Únete a la aventura o escríbenos!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Si tienes dudas o deseas recibir promociones, dejános tu mensaje o registrate a nuestro boletín.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contacto Directo</h3>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ubicación</h4>
                  <p>Sucre, Ciudad Quesada, Alajuela, Costa Rica</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                  <p>WhatsApp: +506 6233-2535<br />Llamadas: +506 8643-0807</p>
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
                  <p>Lunes – Domingo: 6:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>
                Responderemos en menos de 24 horas. También podés suscribirte a nuestro boletín eco.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono (opcional)</Label>
                  <Input id="phone" value={form.phone} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="adventure">Aventura de Interés</Label>
                  <Input id="adventure" value={form.adventure} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Fechas, grupo, requisitos..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    id="newsletter"
                    type="checkbox"
                    checked={form.newsletter}
                    onChange={handleChange}
                  />
                  <Label htmlFor="newsletter" className="text-gray-700">
                    Suscribirme al boletín eco
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
