'use client'

import React, { useState, useCallback, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations, useLocale } from 'next-intl'
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
import { useRouter } from 'next/navigation'

// EmailJS configuration - move to environment variables in production
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_tk6cmbd',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_iroxri8',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '-AioZlrYl09XXA5sU'
}

// Form validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (form: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (!form.firstName.trim()) errors.push('firstName')
  if (!form.lastName.trim()) errors.push('lastName')
  if (!form.email.trim()) errors.push('email')
  if (form.email && !validateEmail(form.email)) errors.push('emailFormat')
  if (!form.message.trim()) errors.push('message')
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const t = useTranslations('contact')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const router = useRouter()
  
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adventure: '',
    message: '',
    newsletter: false,
  })

  // Initialize EmailJS on component mount
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_CONFIG.publicKey)
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error)
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target

    const newValue =
      type === 'checkbox' && 'checked' in e.target
        ? (e.target as HTMLInputElement).checked
        : value

    setForm(prev => ({ ...prev, [id]: newValue }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitAttempted(true)
    
    // Validate form
    const validation = validateForm(form)
    if (!validation.isValid) {
      const errorMessage = locale === 'es' 
        ? 'Por favor, completa todos los campos requeridos 📋'
        : 'Please fill in all required fields 📋'
      alert(errorMessage)
      return
    }
    
    setLoading(true)

    try {
      const newsletterValue = locale === 'es' 
        ? (form.newsletter ? 'Sí' : 'No') 
        : (form.newsletter ? 'Yes' : 'No')
      
      // Prepare template parameters
      const templateParams = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        adventure: form.adventure.trim(),
        message: form.message.trim(),
        newsletter: newsletterValue,
        timestamp: new Date().toISOString(),
        locale: locale
      }
      
      // Send email via EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
      
      if (result.status === 200) {
        // Success - redirect to confirmation page
        router.push(`/${locale}/confirmation`)
        
        // Reset form
        setForm({
          firstName: '', lastName: '', email: '',
          phone: '', adventure: '', message: '', newsletter: false
        })
        setSubmitAttempted(false)
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
      
    } catch (err) {
      console.error('Email send error:', err)
      
      // Show user-friendly error message
      const errorMessage = locale === 'es' 
        ? 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente. 😓'
        : 'There was an error sending the message. Please try again or contact us directly. 😓'
      
      alert(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [form, locale, router])

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info contacto */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('info.title')}</h3>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('info.location')}</h4>
                  <p>Sucre, Ciudad Quesada, Alajuela, Costa Rica</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('info.phone')}</h4>
                  <p>WhatsApp: +506 6233-2535<br />Llamadas: +506 8643-0807</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('info.email')}</h4>
                  <p>ciudadesmeraldacr@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{t('info.schedule')}</h4>
                  <p>{t('info.scheduleTime')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>{t('form.title')}</CardTitle>
              <CardDescription>
                {t('form.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t('form.firstName')}</Label>
                    <Input id="firstName" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t('form.lastName')}</Label>
                    <Input id="lastName" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{t('form.email')}</Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange} required />
                </div>

                <div>
                  <Label htmlFor="phone">{t('form.phone')}</Label>
                  <Input id="phone" value={form.phone} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="adventure">{t('form.adventure')}</Label>
                  <Input id="adventure" value={form.adventure} onChange={handleChange} />
                </div>

                <div>
                  <Label htmlFor="message">{t('form.message')}</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('form.messagePlaceholder')}
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
                    {t('form.newsletter')}
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? t('form.sending') : t('form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
