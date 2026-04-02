'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import gsap from 'gsap'
import { Menu, X, Sparkles } from 'lucide-react'
import { navItems } from '@/lib/mockData'
import ThemeToggle from './ThemeToggle'
import { useTheme } from 'next-themes'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const headerRef = useRef(null)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const navLinksRef = useRef([])
  const ctaRef = useRef(null)
  const { resolvedTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        window.history.replaceState(null, '', '/')
      }, 100)
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const sectionId = href.replace('/#', '')
    
    if (pathname === '/') {
      scrollToSection(sectionId)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const scrollToHash = () => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setTimeout(() => {
              window.history.replaceState(null, '', '/')
            }, 100)
          }
        }
        
        const timeoutId = setTimeout(scrollToHash, 300)
        
        return () => clearTimeout(timeoutId)
      }
    }
  }, [pathname])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.fromTo(logoRef.current, 
      { opacity: 0, x: -30, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.8 }
    )
    
    tl.fromTo(navLinksRef.current.filter(Boolean),
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      '-=0.4'
    )
    
    tl.fromTo(ctaRef.current,
      { opacity: 0, x: 30, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6 },
      '-=0.3'
    )
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      if (headerRef.current) {
        const isDark = resolvedTheme === 'dark'
        gsap.to(headerRef.current, {
          backgroundColor: scrolled 
            ? (isDark ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)') 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
          borderBottomColor: scrolled 
            ? (isDark ? 'rgba(14, 165, 233, 0.15)' : 'rgba(14, 165, 233, 0.25)') 
            : 'transparent',
          boxShadow: scrolled 
            ? (isDark ? '0 4px 30px rgba(14, 165, 233, 0.1)' : '0 4px 30px rgba(14, 165, 233, 0.15)')
            : 'none',
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient, resolvedTheme])

  useEffect(() => {
    if (isOpen && navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
      )
    }
  }, [isOpen])

  const handleLogoHover = () => {
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleLogoHoverEnd = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleNavLinkHover = (e, index) => {
    gsap.to(e.currentTarget, {
      color: 'var(--primary)',
      y: -2,
      duration: 0.3,
      ease: 'power2.out',
    })
    
    // Underline animation
    const underline = e.currentTarget.querySelector('.nav-underline')
    if (underline) {
      gsap.to(underline, {
        width: '100%',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleNavLinkHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      color: 'var(--muted-foreground)',
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
    
    const underline = e.currentTarget.querySelector('.nav-underline')
    if (underline) {
      gsap.to(underline, {
        width: '0%',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleCtaHover = () => {
    gsap.to(ctaRef.current, {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleCtaHoverEnd = () => {
    gsap.to(ctaRef.current, {
      scale: 1,
      boxShadow: '0 0 0px rgba(14, 165, 233, 0)',
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMenuToggle = (e) => {
    gsap.to(e.currentTarget, {
      rotate: isOpen ? -180 : 180,
      scale: 0.8,
      duration: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        setIsOpen(!isOpen)
        gsap.to(e.currentTarget, {
          rotate: 0,
          scale: 1,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)'
        })
      }
    })
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-transparent border-b border-transparent"
      suppressHydrationWarning
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo with animation */}
        <Link 
          href="/" 
          ref={logoRef}
          className="text-xl sm:text-2xl font-black flex-shrink-0 magnetic flex items-center gap-2 group"
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoHoverEnd}
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500 group-hover:text-cyan-400 transition-colors duration-300 animate-pulse" />
            <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 bg-sky-500/30 blur-lg group-hover:bg-cyan-400/40 transition-all duration-300" />
          </div>
          <span className="text-foreground transition-colors duration-300">
            Neptunes
          </span>
          <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={el => navLinksRef.current[index] = el}
              className="relative text-sm lg:text-base text-muted-foreground font-medium group py-1 cursor-pointer"
              onMouseEnter={(e) => handleNavLinkHover(e, index)}
              onMouseLeave={handleNavLinkHoverEnd}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="nav-underline absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 rounded-full opacity-0" />
              <span className="absolute inset-0 -z-10 bg-sky-500/0 group-hover:bg-sky-500/5 rounded-lg transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4" ref={el => navLinksRef.current[navItems.length] = el}>
          <ThemeToggle />
          {/* <button 
            ref={ctaRef}
            className="magnetic relative px-6 lg:px-8 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden group"
            onMouseEnter={handleCtaHover}
            onMouseLeave={handleCtaHoverEnd}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-white/20 to-cyan-400/20 animate-shimmer" />
            </div>
          </button> */}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:text-primary transition-colors flex-shrink-0 relative"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isOpen ? (
                <X size={24} className="text-sky-500" />
              ) : (
                <Menu size={24} />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isClient && isOpen && (
        <div ref={navRef} className="md:hidden bg-background/98 backdrop-blur-2xl border-t border-sky-500/20">
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-base text-muted-foreground hover:text-foreground rounded-xl hover:bg-sky-500/10 transition-all duration-300 border border-transparent hover:border-sky-500/20 cursor-pointer"
                onClick={(e) => { handleNavClick(e, item.href); setIsOpen(false); }}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                  {item.label}
                </span>
              </a>
            ))}
            <button className="w-full mt-6 px-6 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full transition-all duration-300 text-base hover:shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
