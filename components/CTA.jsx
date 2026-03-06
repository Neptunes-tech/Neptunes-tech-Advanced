'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Zap, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ctaStats } from '@/lib/mockData'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTA() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const content = contentRef.current
    if (!content) return

    gsap.fromTo(
      content,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 bg-background">
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-600/10 rounded-full blur-[100px]" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsMjMzLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <div
          ref={contentRef}
          className="relative rounded-3xl border border-sky-500/20 bg-card backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600/5 via-transparent to-cyan-600/5" />
          
          <Sparkles className="absolute top-6 right-8 w-6 h-6 text-sky-400/40 animate-pulse" />
          <Sparkles className="absolute bottom-8 left-10 w-5 h-5 text-cyan-400/40 animate-pulse" style={{ animationDelay: '0.5s' }} />

          <div className="relative flex justify-center mb-8">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-2xl shadow-sky-500/30">
              <Zap size={36} className="text-white" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
            </div>
          </div>

          <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-foreground">
              Ready to Transform
            </span>
            <span className="block bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent mt-2">
              Your Business?
            </span>
          </h2>

          <p className="relative text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Join hundreds of companies leveraging <span className="text-sky-500">NEPTUNES TECH</span> to drive innovation and achieve unprecedented growth.
          </p>

          <div className="relative grid grid-cols-3 gap-6 md:gap-10 mb-12 py-8 border-y border-border">
            {ctaStats.map((stat, idx) => (
              <div key={idx} className="group cursor-hover">
                <p className="text-2xl md:text-4xl font-black bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-sky-500 transition-all duration-500">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="magnetic group relative w-full md:w-auto px-10 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-sky-500/40 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="magnetic w-full md:w-auto px-10 py-5 border-2 border-sky-500/40 text-foreground font-bold rounded-full hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          <p className="relative mt-10 text-sm text-muted-foreground">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-500" />
        </div>
      </div>
    </section>
  )
}
