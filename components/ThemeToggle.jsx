'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { Sun, Moon, Sparkles } from 'lucide-react'
import gsap from 'gsap'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const buttonRef = useRef(null)
  const iconRef = useRef(null)
  const raysRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !iconRef.current) return
    
    // Animate icon on theme change
    gsap.fromTo(iconRef.current, 
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
    )
  }, [resolvedTheme, mounted])

  const handleClick = () => {
    // Click animation
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: 'elastic.out(1, 0.5)'
        })
      }
    })
    
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const handleMouseEnter = () => {
    if (!buttonRef.current || !iconRef.current) return
    
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(iconRef.current, {
      rotation: resolvedTheme === 'dark' ? 180 : -30,
      duration: 0.4,
      ease: 'power2.out'
    })

    if (raysRef.current) {
      gsap.to(raysRef.current, {
        scale: 1.2,
        opacity: 1,
        duration: 0.3
      })
    }
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current || !iconRef.current) return
    
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
    
    gsap.to(iconRef.current, {
      rotation: 0,
      duration: 0.4,
      ease: 'power2.out'
    })

    if (raysRef.current) {
      gsap.to(raysRef.current, {
        scale: 1,
        opacity: 0.6,
        duration: 0.3
      })
    }
  }

  if (!mounted) {
    return (
      <button
        className="relative p-2.5 rounded-full bg-sky-500/10 border border-sky-500/20"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="magnetic relative p-2.5 rounded-full bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/20 hover:border-sky-400/50 transition-colors duration-300 overflow-hidden group"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/20 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
      
      {/* Rays effect for sun */}
      {resolvedTheme === 'dark' && (
        <div 
          ref={raysRef}
          className="absolute inset-0 flex items-center justify-center opacity-60"
        >
          <div className="absolute w-8 h-8 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-sm animate-pulse" />
        </div>
      )}
      
      {/* Stars effect for moon */}
      {resolvedTheme === 'light' && (
        <div className="absolute inset-0 overflow-hidden">
          <Sparkles className="absolute top-0 right-0 w-2 h-2 text-sky-400/40 animate-pulse" style={{ animationDelay: '0s' }} />
          <Sparkles className="absolute bottom-1 left-0 w-1.5 h-1.5 text-cyan-400/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      )}
      
      <div ref={iconRef} className="relative z-10">
        {resolvedTheme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
        ) : (
          <Moon className="w-5 h-5 text-sky-600 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
        )}
      </div>
    </button>
  )
}
