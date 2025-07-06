'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Button } from "../components/ui/button"
import { ArrowRight, Search, MessageCircle, Compass } from 'lucide-react'

export default function Hero() {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Rain drops system
    const rainGeometry = new THREE.BufferGeometry()
    const rainCount = 1500
    const rainPositions = new Float32Array(rainCount * 3)
    const rainVelocities = new Float32Array(rainCount * 3)

    for (let i = 0; i < rainCount; i++) {
      rainPositions[i * 3] = (Math.random() - 0.5) * 200 // x
      rainPositions[i * 3 + 1] = Math.random() * 100 + 50 // y
      rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 100 // z
      
      rainVelocities[i * 3] = (Math.random() - 0.5) * 0.2 // x velocity
      rainVelocities[i * 3 + 1] = -Math.random() * 2 - 1 // y velocity (falling)
      rainVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.2 // z velocity
    }

    rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3))

    const rainMaterial = new THREE.PointsMaterial({
      color: 0x87CEEB,
      size: 0.5,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const rainMesh = new THREE.Points(rainGeometry, rainMaterial)
    scene.add(rainMesh)

    // Water flowing effect with lines
    const waterGeometry = new THREE.BufferGeometry()
    const waterCount = 800
    const waterPositions = new Float32Array(waterCount * 3)
    const waterColors = new Float32Array(waterCount * 3)

    for (let i = 0; i < waterCount; i++) {
      waterPositions[i * 3] = (Math.random() - 0.5) * 150
      waterPositions[i * 3 + 1] = (Math.random() - 0.5) * 80
      waterPositions[i * 3 + 2] = (Math.random() - 0.5) * 60
      
      // Blue-cyan water colors
      waterColors[i * 3] = 0.3 + Math.random() * 0.4     // R
      waterColors[i * 3 + 1] = 0.7 + Math.random() * 0.3 // G
      waterColors[i * 3 + 2] = 0.9 + Math.random() * 0.1 // B
    }

    waterGeometry.setAttribute('position', new THREE.BufferAttribute(waterPositions, 3))
    waterGeometry.setAttribute('color', new THREE.BufferAttribute(waterColors, 3))

    const waterMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    })

    const waterMesh = new THREE.Points(waterGeometry, waterMaterial)
    scene.add(waterMesh)

    // Floating water bubbles and ripples
    const bubbles: THREE.Mesh[] = []
    for (let i = 0; i < 30; i++) {
      const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.3, 8, 8)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.55 + Math.random() * 0.1, 0.6, 0.8),
        transparent: true,
        opacity: 0.3,
        wireframe: false
      })
      
      const bubble = new THREE.Mesh(geometry, material)
      bubble.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30
      )
      bubble.userData = {
        speed: Math.random() * 0.02 + 0.01,
        amplitude: Math.random() * 2 + 1
      }
      bubbles.push(bubble)
      scene.add(bubble)
    }

    camera.position.z = 30

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Animate rain drops
      const rainPos = rainMesh.geometry.attributes.position.array
      for (let i = 0; i < rainCount; i++) {
        // Update positions
        rainPos[i * 3] += rainVelocities[i * 3]     // x
        rainPos[i * 3 + 1] += rainVelocities[i * 3 + 1] // y
        rainPos[i * 3 + 2] += rainVelocities[i * 3 + 2] // z
        
        // Reset rain drops when they fall too low
        if (rainPos[i * 3 + 1] < -50) {
          rainPos[i * 3 + 1] = Math.random() * 50 + 50
          rainPos[i * 3] = (Math.random() - 0.5) * 200
          rainPos[i * 3 + 2] = (Math.random() - 0.5) * 100
        }
      }
      rainMesh.geometry.attributes.position.needsUpdate = true
      
      // Animate water flow
      const waterPos = waterMesh.geometry.attributes.position.array
      for (let i = 0; i < waterCount; i++) {
        waterPos[i * 3] += Math.sin(Date.now() * 0.001 + i * 0.1) * 0.02
        waterPos[i * 3 + 1] += Math.cos(Date.now() * 0.0015 + i * 0.05) * 0.015
        waterPos[i * 3 + 2] += Math.sin(Date.now() * 0.0008 + i * 0.2) * 0.01
      }
      waterMesh.geometry.attributes.position.needsUpdate = true
      
      // Rotate water system gently
      waterMesh.rotation.y += 0.001
      
      // Animate bubbles
      bubbles.forEach((bubble, index) => {
        bubble.position.y += Math.sin(Date.now() * 0.001 + index) * bubble.userData.speed
        bubble.position.x += Math.cos(Date.now() * 0.0008 + index) * bubble.userData.speed * 0.5
        bubble.rotation.x += 0.01
        bubble.rotation.y += 0.005
        
        // Create floating effect
        bubble.position.y += Math.sin(Date.now() * 0.002 + index) * 0.02
        
        // Reset bubble position if it goes too far
        if (bubble.position.y > 30) {
          bubble.position.y = -30
        }
      })
      
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery)
      // You can add your search logic here
    }
  }

  const handleAIChat = () => {
    // Implement AI chat functionality
    console.log('Opening AI chat for trip planning')
    // You can add your AI chat logic here
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center "
    >
      {/* Three.js Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Background with enhanced gradient and water-like effects */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,50,100,0.8) 0%, rgba(16,185,129,0.2) 30%, rgba(0,100,150,0.6) 70%, rgba(0,0,0,0.8) 100%), url('/IMG_3295.JPG')`,
          filter: 'contrast(1.3) brightness(0.9) saturate(1.2)',
        }}
      />

      {/* Water-like glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-gradient-to-br from-blue-900/20 via-cyan-800/10 to-teal-900/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 mt-25">
        {/* Main heading with enhanced typography */}
        <div className="mb-8 transform transition-all duration-1000 hover:scale-105">
          <h1 className="text-6xl md:text-6xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-green-100 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
              ¡Bienvenidos a
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
              La Vieja Adventures!
            </span>
          </h1>
        </div>

        {/* Enhanced description */}
        <p className="text-xl md:text-3xl mb-12 text-gray-100 font-light leading-relaxed max-w-4xl mx-auto backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10">
          Aventuras sostenibles en Sucre, Ciudad Quesada. Explora la naturaleza
          con responsabilidad y mucha adrenalina.
        </p>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Buscar aventuras, tours, actividades..."
                className="w-full px-6 py-4 pl-14 pr-16 text-lg bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all duration-300"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-6 h-6" />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced buttons with luxury styling */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-8">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-lg px-10 py-4 rounded-full shadow-2xl border-2 border-green-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 min-w-[200px]"
            onClick={() => scrollToId('adventures')}
          >
            <span className="flex items-center gap-3">
              Ver Aventuras
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 hover:border-white/60 text-white text-lg px-10 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 min-w-[200px]"
            onClick={() => scrollToId('about')}
          >
            <span className="flex items-center gap-3">
              Sobre Nosotros
              <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </Button>
        </div>

        {/* AI Assistant and Self-Search buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3 rounded-full shadow-2xl border-2 border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
            onClick={handleAIChat}
          >
            <span className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Planifica con IA
            </span>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md border-2 border-blue-400/40 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-cyan-600/30 hover:border-blue-400/60 text-white text-lg px-8 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
            onClick={() => scrollToId('search')}
          >
            <span className="flex items-center gap-3">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Buscar Solo
            </span>
          </Button>
        </div>

        {/* Floating call-to-action */}
        <div className="mt-16 text-sm text-gray-300 animate-bounce">
          <p>Desliza hacia abajo para explorar</p>
          <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-transparent mx-auto mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Ambient water glow effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse delay-500"></div>
    </section>
  )
}