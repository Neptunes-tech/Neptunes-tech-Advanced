'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, Scale, Globe, Mail } from 'lucide-react'
import { termsData } from '@/lib/mockData'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Scale,
  Globe,
  Mail,
}

export default function TermsAndConditions() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    // Sections animation
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="overflow-hidden bg-background min-h-screen">
      <CustomCursor />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div ref={heroRef} className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-sky-500 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20">
              <FileText className="w-4 h-4 text-sky-500" />
              <span className="text-sm text-sky-500 font-medium">Legal Documentation</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Terms and </span>
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Please read these terms and conditions carefully before using our services. 
            By accessing or using NEPTUNES TECH services, you agree to be bound by these terms.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-muted">
              Last Updated: March 26, 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-muted">
              Effective Date: March 26, 2026
            </span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 border-y border-sky-500/10 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            Table of Contents
          </h2>
          <div className="flex flex-wrap gap-3">
            {termsData.map((term, index) => (
              <button
                key={term.id}
                onClick={() => scrollToSection(term.id)}
                className="text-sm text-muted-foreground hover:text-sky-500 px-3 py-1.5 rounded-full bg-background border border-sky-500/10 hover:border-sky-500/30 transition-all"
              >
                {index + 1}. {term.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section ref={contentRef} className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {termsData.map((term, index) => {
              const Icon = iconMap[term.iconName]
              return (
                <article
                  key={term.id}
                  id={term.id}
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className="group relative p-6 md:p-8 rounded-2xl bg-card border border-sky-500/10 hover:border-sky-500/20 transition-all duration-300"
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/25">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-sky-500 uppercase tracking-wider">
                          Section {index + 1}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                          {term.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-4 pl-0 md:pl-16">
                      {term.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className={`text-muted-foreground leading-relaxed ${
                            paragraph.startsWith('•') ? 'pl-4' : ''
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Agreement Notice */}
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white">
                <Shield size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Your Agreement
                </h3>
                <p className="text-muted-foreground">
                  By using NEPTUNES TECH services, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms and Conditions. If you have any questions 
                  or concerns, please contact our legal team before proceeding.
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-sky-500/10">
            <h3 className="text-lg font-bold text-foreground mb-4">Related Legal Documents</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-sky-500/20 text-muted-foreground hover:text-sky-500 hover:border-sky-500/40 transition-all"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Have questions about our terms? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-sky-500/30 transition-all"
              >
                <Mail size={18} />
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground font-medium hover:bg-muted/80 transition-all"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
