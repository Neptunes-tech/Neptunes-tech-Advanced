'use client'

import { useRef, useEffect, useState } from 'react'

export default function ThreeBackground({ className = '' }) {
  const containerRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    import('three').then((THREE) => {
      const container = containerRef.current
      if (!container) return

      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
      camera.position.z = 20

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      })
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      container.appendChild(renderer.domElement)

      const particleCount = 50
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      const colorPalette = [
        new THREE.Color(0x8b5cf6),
        new THREE.Color(0xa855f7),
        new THREE.Color(0x06b6d4),
        new THREE.Color(0xd946ef),
      ]

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 30
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15

        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.15,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        sizeAttenuation: true,
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)

      let resizeTimeout
      const handleResize = () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
          const width = container.clientWidth
          const height = container.clientHeight
          if (width && height) {
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
          }
        }, 100)
      }

      window.addEventListener('resize', handleResize, { passive: true })

      let animationId
      let lastTime = 0
      const frameInterval = 1000 / 30
      
      const animate = (currentTime) => {
        animationId = requestAnimationFrame(animate)
        
        const deltaTime = currentTime - lastTime
        if (deltaTime < frameInterval) return
        lastTime = currentTime - (deltaTime % frameInterval)

        if (!isReducedMotion) {
          const pos = geometry.attributes.position.array
          const time = currentTime * 0.0001

          for (let i = 0; i < particleCount; i++) {
            pos[i * 3 + 1] += Math.sin(time + i * 0.5) * 0.01
          }
          geometry.attributes.position.needsUpdate = true
          
          particles.rotation.y += 0.0005
          particles.rotation.x += 0.0002
        }

        renderer.render(scene, camera)
      }

      animate(0)

      return () => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(resizeTimeout)
        cancelAnimationFrame(animationId)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        try {
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement)
          }
        } catch (e) {}
      }
    }).catch((err) => {
      console.warn('Failed to load Three.js:', err)
    })
  }, [isClient])

  return (
    <div
      ref={containerRef}
      className={`w-full h-full absolute inset-0 ${className}`}
      style={{ pointerEvents: 'none' }}
      suppressHydrationWarning
    />
  )
}
