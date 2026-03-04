'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/mockData'

export default function HeaderEnhanced() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const headerRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)

      if (headerRef.current) {
        gsap.to(headerRef.current, {
          backgroundColor: scrolled ? 'rgba(3, 0, 20, 0.9)' : 'rgba(3, 0, 20, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottomColor: scrolled ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0)',
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  useEffect(() => {
    if (isOpen && navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [isOpen])

  const handleNavLinkHover = (e) => {
    gsap.to(e.currentTarget, {
      color: 'var(--secondary)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleNavLinkHoverEnd = (e) => {
    gsap.to(e.currentTarget, {
      color: 'var(--foreground)',
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-transparent border-b border-transparent"
      suppressHydrationWarning
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-black flex-shrink-0 magnetic">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            NEPTUNES
          </span>
          <span className="text-cyan-400 ml-2">TECH</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkHoverEnd}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <button className="magnetic hidden md:block px-6 lg:px-8 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-cyan-600 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/40 text-sm">
          Get Started
        </button>

        <button
          className="md:hidden p-2 text-white hover:text-violet-400 transition-colors flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isClient && isOpen && (
        <div ref={navRef} className="md:hidden bg-[#030014]/95 backdrop-blur-xl border-t border-violet-500/20">
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-base text-gray-300 hover:text-white rounded-xl hover:bg-violet-500/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-full transition-all duration-300 text-base">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
