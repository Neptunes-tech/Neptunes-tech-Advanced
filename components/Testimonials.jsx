'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/mockData'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const headerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    const cards = cardsRef.current
    const header = headerRef.current

    if (!section || !cards.length) return

    gsap.fromTo(
      header,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    cards.forEach((card, index) => {
      if (!card) return

      gsap.set(card, {
        opacity: 0,
        y: 100,
        rotateX: 45,
        transformPerspective: 1000,
      })

      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.1,
      })

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(14, 165, 233, 0.25)',
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-muted/30 dark:bg-background"
      id="testimonials"
    >
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsMjMzLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">
              Trusted by Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful companies that have transformed their digital presence with NEPTUNES TECH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative cursor-hover"
              data-cursor="View"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card border border-border backdrop-blur-sm overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="absolute top-6 right-6 text-muted/20 group-hover:text-muted/30 transition-colors duration-300">
                  <Quote size={60} />
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-sky-500 transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '150+', label: 'Team Members' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, idx) => (
            <div key={idx} className="group">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
