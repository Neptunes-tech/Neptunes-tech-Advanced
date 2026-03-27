'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import CompanyProjects from '@/components/CompanyProjects'
import MasonryPortfolio from '@/components/MasonryPortfolio'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      {/* <CustomCursor /> */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <CompanyProjects />
      <MasonryPortfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
