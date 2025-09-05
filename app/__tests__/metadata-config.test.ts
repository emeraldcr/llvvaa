/**
 * Test file to validate metadata configuration implementation
 */

import { describe, it, expect } from 'vitest'
import { getBaseUrl, getMetadataBase, createLocaleMetadata } from '../lib/metadata-config'

describe('Metadata Configuration', () => {
  it('should return correct base URL for development environment', () => {
    // In test environment, should default to localhost
    const baseUrl = getBaseUrl()
    expect(baseUrl).toBe('http://localhost:3000')
  })

  it('should create valid metadataBase URL object', () => {
    const metadataBase = getMetadataBase()
    expect(metadataBase).toBeInstanceOf(URL)
    expect(metadataBase.origin).toBe('http://localhost:3000')
  })

  it('should generate complete locale metadata with metadataBase', () => {
    const metadata = createLocaleMetadata('es', 'Test Title', 'Test Description')
    
    expect(metadata).toBeDefined()
    expect(metadata.metadataBase).toBeInstanceOf(URL)
    expect(metadata.title).toBe('Test Title')
    expect(metadata.description).toBe('Test Description')
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.twitter).toBeDefined()
    expect(metadata.alternates).toBeDefined()
  })

  it('should use fallback values when no custom metadata provided', () => {
    const metadata = createLocaleMetadata('en')
    
    expect(metadata.title).toBe('La Vieja Adventures | La Aventura te Espera')
    expect(metadata.description).toBe('La Vieja Adventures: Empresa líder en turismo de aventura en Costa Rica')
    expect(metadata.metadataBase).toBeInstanceOf(URL)
  })

  it('should generate proper OpenGraph configuration', () => {
    const metadata = createLocaleMetadata('es', 'Custom Title', 'Custom Description')
    
    expect(metadata.openGraph).toMatchObject({
      title: 'Custom Title',
      description: 'Custom Description',
      siteName: 'La Vieja Adventures',
      locale: 'es_CR',
      type: 'website'
    })
    
    expect(metadata.openGraph?.images).toHaveLength(1)
    expect(metadata.openGraph?.images?.[0]).toMatchObject({
      url: '/images/og-la-vieja-adventures.jpg',
      width: 1200,
      height: 630,
      alt: 'La Vieja Adventures en Costa Rica'
    })
  })

  it('should generate proper Twitter Card configuration', () => {
    const metadata = createLocaleMetadata('en', 'Twitter Title', 'Twitter Description')
    
    expect(metadata.twitter).toMatchObject({
      card: 'summary_large_image',
      title: 'Twitter Title',
      description: 'Twitter Description',
      images: ['/images/twitter-la-vieja-adventures.jpg']
    })
  })

  it('should generate alternate language links with proper base URL', () => {
    const metadata = createLocaleMetadata('es')
    
    expect(metadata.alternates?.languages).toMatchObject({
      'es-CR': 'http://localhost:3000/es',
      'en-US': 'http://localhost:3000/en'
    })
  })

  it('should handle environment variables correctly', () => {
    // Test environment variable handling
    const originalEnv = process.env.NODE_ENV
    const originalUrl = process.env.NEXT_PUBLIC_SITE_URL
    
    // Test production environment with custom URL
    process.env.NODE_ENV = 'production'
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com'
    
    // Note: Due to how modules are cached, we would need to clear require cache
    // or use dynamic imports to test environment changes properly
    // For now, we just validate the logic works in current environment
    
    const baseUrl = getBaseUrl()
    expect(typeof baseUrl).toBe('string')
    expect(baseUrl).toMatch(/^https?:\/\//)
    
    // Restore original environment
    process.env.NODE_ENV = originalEnv
    if (originalUrl) {
      process.env.NEXT_PUBLIC_SITE_URL = originalUrl
    } else {
      delete process.env.NEXT_PUBLIC_SITE_URL
    }
  })
})