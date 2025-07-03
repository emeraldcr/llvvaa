'use client'
import React from 'react'
import Nav from '@/app/components/nav'
import Hero from '@/app/components/home'
import Services from '@/app/components/services'
import About from '@/app/components/about'
import Adventures from '@/app/components/adventures'
import HeroSustainability from '@/app/components/sustain'
import Testimonials from '@/app/components/testimonials'
import Contact from '@/app/components/contact'
import Footer from '@/app/components/footer'
import Tour from '@/app/components/tour'

type Props = {
  params: Promise<{ slug: string }>
}

export default function TourPage({ params }: Props) {
 
  return (
    <div>
      <div>
        <Nav />
        <Tour params = {params}></Tour>
        <Hero></Hero>
        <Services></Services>
        <About></About>
        <Adventures></Adventures>
        <HeroSustainability></HeroSustainability>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
      </div>
     
   </div>
  )
}
