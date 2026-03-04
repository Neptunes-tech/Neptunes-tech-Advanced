'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, Shield, Users, Award, CheckCircle2, Sparkles } from 'lucide-react'
import { aboutFeatures, aboutStats } from '@/lib/mockData'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const iconMap = { Zap, Shield, Users, Award }

export default function About() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])
  const statsRef = useRef([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        )
      })


      statsRef.current.forEach((stat, index) => {
        if (!stat) return
        const valueEl = stat.querySelector('.stat-value')
        const targetValue = parseInt(aboutStats[index].value)
        
        gsap.fromTo(
          stat,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to({ val: 0 }, {
                  val: targetValue,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: function() {
                    if (valueEl) {
                      valueEl.textContent = Math.floor(this.targets()[0].val)
                    }
                  }
                })
              }
            },
            delay: index * 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0520 50%, #030014 100%)' }}
    >
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]" />
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMzksMjQ2LDEzOSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              NEPTUNES TECH
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with decade-long expertise to deliver 
            <span className="text-violet-400"> transformative digital solutions</span> that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {aboutStats.map((stat, idx) => (
            <div
              key={idx}
              ref={(el) => (statsRef.current[idx] = el)}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 text-center group hover:border-violet-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black mb-2">
                <span className="stat-value bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  0
                </span>
                <span className="bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {aboutFeatures.map((feature, idx) => {
            const Icon = iconMap[feature.iconName]
            return (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative flex gap-5">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
            )
          })}
        </div>

        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 border border-violet-500/20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 rounded-3xl" />
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have accelerated their digital transformation with NEPTUNES TECH.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-violet-500/40 text-white font-bold rounded-full hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
