'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Smartphone, Zap, Cloud, Shield, BarChart3 } from 'lucide-react'
import { services } from '@/lib/mockData'

gsap.registerPlugin(ScrollTrigger)

const iconMap = { Code2, Smartphone, Zap, Cloud, Shield, BarChart3 }

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !sectionRef.current) return

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      cardsRef.current.forEach((card, idx) => {
        if (!card) return

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            boxShadow:
              '0 20px 40px rgba(14, 165, 233, 0.3), 0 0 60px rgba(14, 165, 233, 0.2)',
            duration: 0.3,
            ease: 'power2.out',
          })

          const icon = card.querySelector('svg')
          if (icon) {
            gsap.to(icon, {
              rotation: 10,
              scale: 1.2,
              duration: 0.3,
              ease: 'power2.out',
            })
          }
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            duration: 0.3,
            ease: 'power2.out',
          })

          const icon = card.querySelector('svg')
          if (icon) {
            gsap.to(icon, {
              rotation: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            })
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isClient])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-muted/30 dark:bg-background"
    >
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px]" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsMjMzLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">
              Our Premium
            </span>
            <span className="block bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent mt-2">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.iconName]
            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el
                }}
                className="cursor-hover group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-sky-500/30 transition-all duration-500"
                data-cursor="Explore"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div
                  className={`relative w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-xl group-hover:shadow-sky-500/20 transition-all duration-300`}
                >
                  <IconComponent className="w-7 md:w-8 h-7 md:h-8 text-white" />
                </div>

                <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-sky-500 transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="relative flex items-center text-sky-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="magnetic group relative px-10 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300">
            <span className="relative z-10 cursor-pointer">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
