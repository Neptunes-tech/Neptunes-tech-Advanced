'use client'

import HeaderEnhanced from '@/components/HeaderEnhanced'
import HeroEnhanced from '@/components/HeroEnhanced'
import ServicesEnhanced from '@/components/ServicesEnhanced'
import Solutions from '@/components/Solutions'
import MasonryPortfolio from '@/components/MasonryPortfolio'
import About from '@/components/About'
import TestimonialsEnhanced from '@/components/TestimonialsEnhanced'
import CTA from '@/components/CTA'
import ContactEnhanced from '@/components/ContactEnhanced'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#030014]">
      <CustomCursor />
      <HeaderEnhanced />
      <HeroEnhanced />
      <About />
      <ServicesEnhanced />
      <Solutions />
      <MasonryPortfolio />
      <TestimonialsEnhanced />
      <CTA />
      <ContactEnhanced />
      <Footer />
    </main>
  )
}
