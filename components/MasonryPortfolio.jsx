'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { portfolioItems, portfolioCategories } from '@/lib/mockData'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function MasonryPortfolio() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const itemsRef = useRef([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const header = headerRef.current
    const items = itemsRef.current

    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 60 },
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
    }

    items.forEach((item, index) => {
      if (!item) return

      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: (index % 3) * 0.15,
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [activeFilter])

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
      id="portfolio"
    >
      
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-40 left-20 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">
              Featured
            </span>{' '}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Explore our latest work and see how we bring innovative ideas to life through cutting-edge technology
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.slice(0, 4).map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`magnetic px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`group relative cursor-hover ${
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'medium' ? 'md:row-span-2' : ''
              }`}
              data-cursor="View"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`relative h-full min-h-[300px] ${item.size === 'large' ? 'md:min-h-[500px]' : item.size === 'medium' ? 'md:min-h-[400px]' : 'min-h-[300px]'} rounded-2xl overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <span className="inline-block w-fit px-3 py-1 mb-4 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    {item.category}
                  </span>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs text-gray-400 bg-white/5 rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sky-400 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Project</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <ExternalLink size={16} className="text-white" />
                </div>

                <div className={`absolute inset-0 rounded-2xl border border-white/10 group-hover:border-sky-500/50 transition-colors duration-500`} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="magnetic group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/50">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
