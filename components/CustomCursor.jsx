'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const outlinePos = useRef({ x: -100, y: -100 })
  const isHovering = useRef(false)
  const animationFrame = useRef(null)
  const isVisible = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    mousePos.current = { x: -100, y: -100 }
    outlinePos.current = { x: -100, y: -100 }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      if (!isVisible.current) {
        isVisible.current = true
        outlinePos.current = { x: e.clientX, y: e.clientY }
      }
      
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      const ease = 0.12
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * ease
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * ease
      
      const scale = isHovering.current ? 1.6 : 1
      outline.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%) scale(${scale})`
      
      animationFrame.current = requestAnimationFrame(animate)
    }

    const onMouseEnter = () => {
      isHovering.current = true
      dot.style.opacity = '0'
      outline.style.borderColor = 'rgba(139, 92, 246, 0.7)'
      outline.style.backgroundColor = 'rgba(139, 92, 246, 0.1)'
    }

    const onMouseLeave = () => {
      isHovering.current = false
      dot.style.opacity = '1'
      outline.style.borderColor = 'rgba(139, 92, 246, 0.4)'
      outline.style.backgroundColor = 'transparent'
    }

    const onMouseDown = () => {
      const scale = isHovering.current ? 1.3 : 0.8
      outline.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%) scale(${scale})`
    }

    const onMouseUp = () => {
      const scale = isHovering.current ? 1.6 : 1
      outline.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%) scale(${scale})`
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mousedown', onMouseDown, { passive: true })
    document.addEventListener('mouseup', onMouseUp, { passive: true })

    const addHoverListeners = () => {
      const elements = document.querySelectorAll('a, button, [data-cursor], .cursor-hover, input, textarea, select')
      elements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter, { passive: true })
        el.addEventListener('mouseleave', onMouseLeave, { passive: true })
      })
      return elements
    }

    let interactiveElements = addHoverListeners()
    
    const observer = new MutationObserver(() => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
      interactiveElements = addHoverListeners()
    })
    
    observer.observe(document.body, { childList: true, subtree: true })

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
      observer.disconnect()
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-hidden">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-violet-400"
        style={{
          willChange: 'transform',
          transition: 'opacity 0.15s ease',
        }}
      />
      
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/40"
        style={{
          willChange: 'transform',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
        }}
      />
    </div>
  )
}
