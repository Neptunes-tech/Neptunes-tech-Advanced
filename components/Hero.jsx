'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

const ThreeBackground = dynamic(() => import('./ThreeBackground'), { ssr: false })

export default function Hero() {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const badgeElement = containerRef.current?.querySelector('.hero-badge')
    const titleElement = containerRef.current?.querySelector('.hero-title')
    const subtitleElement = containerRef.current?.querySelector('.hero-subtitle')
    const ctaButtons = containerRef.current?.querySelectorAll('.hero-button')
    const statsItems = containerRef.current?.querySelectorAll('.stat-item')

    if (badgeElement) {
      gsap.fromTo(
        badgeElement,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      )
    }

    if (titleElement) {
      gsap.fromTo(
        titleElement,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.3, ease: 'power3.out' }
      )
    }

    if (subtitleElement) {
      gsap.fromTo(
        subtitleElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      )
    }

    if (ctaButtons && ctaButtons.length > 0) {
      gsap.fromTo(
        ctaButtons,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          delay: 0.9, 
          stagger: 0.1,
          ease: 'back.out' 
        }
      )
    }

    if (statsItems && statsItems.length > 0) {
      gsap.fromTo(
        statsItems,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay: 1.2, 
          stagger: 0.1,
          ease: 'power2.out' 
        }
      )
    }
  }, [isClient])

  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleButtonHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-20 pb-10 bg-background"
      id="hero"
    >
      {isClient && <ThreeBackground />}

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/20 dark:bg-sky-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-400/10 dark:bg-sky-600/10 rounded-full blur-[200px]" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwxNjUsMjMzLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-badge mb-8 opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-300 bg-sky-500/10 border border-sky-500/20 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Pioneering Digital Excellence
          </span>
        </div>

        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6 sm:mb-8">
          <span className="block text-foreground">
            Neptunes
          </span>
          <span className="block bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Tech
          </span>
        </h1>

        <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
          Crafting <span className="text-sky-500 font-semibold">next-generation</span> digital experiences with cutting-edge technology and <span className="text-cyan-500 font-semibold">innovative solutions</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 mb-16 sm:mb-20">
          <button
            className="magnetic hero-button group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonHoverEnd}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            className="magnetic hero-button group px-8 sm:px-10 py-4 sm:py-5 border-2 border-sky-500/50 text-foreground hover:border-sky-400 font-bold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-sky-500/10"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonHoverEnd}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Services
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-10 lg:gap-16 max-w-4xl mx-auto px-2">
          {[
            { number: '500+', label: 'Projects Delivered', icon: '🚀' },
            { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '10+', label: 'Years Excellence', icon: '🏆' },
          ].map((stat, idx) => (
            <div key={idx} className="stat-item text-center group">
              <div className="relative">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                  <span className="bg-gradient-to-br from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-sky-500 transition-all duration-500">
                    {stat.number}
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-sky-500/50 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-3 h-3 bg-sky-500 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-cyan-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-20 w-4 h-4 bg-sky-400 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-emerald-500 rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }} />
    </section>
  )
}
