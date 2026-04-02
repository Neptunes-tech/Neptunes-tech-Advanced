'use client'

import { useState } from 'react'
import { ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import * as Icons from 'lucide-react'
import { companyProjects } from '@/lib/mockData'

export default function CompanyProjects() {
  const [hoveredId, setHoveredId] = useState(null)
  const [visibleCount, setVisibleCount] = useState(9)

  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={24} /> : <ExternalLink size={24} />
  }

  const visibleProjects = companyProjects.slice(0, visibleCount)
  const hasMore = visibleCount < companyProjects.length
  const canCollapse = visibleCount > 9

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, companyProjects.length))
  }

  const handleCollapse = () => {
    setVisibleCount(9)
  }

  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-32 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/10 to-background"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary">Company Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Live Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Explore our portfolio of deployed production applications serving clients across diverse industries with cutting-edge technologies and innovative solutions.
          </p>
          <p className="text-sm text-foreground/40 mt-2">
            Showing {visibleProjects.length} of {companyProjects.length} projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative group animate-fadeInUp"
              style={{ animationDelay: `${(index % 9) * 50}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300`}
              ></div>

              <div
                className={`relative h-full p-6 rounded-2xl border transition-all duration-300 ${
                  hoveredId === project.id
                    ? `bg-gradient-to-br ${project.gradient} text-white border-transparent shadow-2xl -translate-y-2 scale-105`
                    : 'bg-card/50 border-border/50 text-foreground hover:border-border/80 hover:bg-card/80'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredId === project.id
                      ? 'bg-white/20 text-white'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {getIcon(project.icon)}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p
                  className={`text-sm leading-relaxed mb-6 transition-colors ${
                    hoveredId === project.id
                      ? 'text-white/90'
                      : 'text-foreground/70'
                  }`}
                >
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link ${
                    hoveredId === project.id
                      ? 'text-white'
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  <span>Visit Project</span>
                  <ExternalLink
                    size={16}
                    className={`transition-transform duration-300 group-hover/link:translate-x-1`}
                  />
                </a>

                {hoveredId === project.id && (
                  <div className="absolute inset-0 rounded-2xl opacity-10 border-2 border-white/50 pointer-events-none animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {hasMore && (
            <button
              onClick={handleViewMore}
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              View More Projects
              <ChevronDown size={20} />
            </button>
          )}
          {canCollapse && (
            <button
              onClick={handleCollapse}
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-card/80 hover:-translate-y-1 transition-all duration-300"
            >
              Show Less
              <ChevronUp size={20} />
            </button>
          )}
        </div>

        <div className="relative mt-8 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 overflow-hidden animate-fadeInUp">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Build Your Next Project?
              </h3>
              <p className="text-foreground/70">
                Leverage our expertise to create powerful, scalable solutions for your business.
              </p>
            </div>
            <button className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex-shrink-0 whitespace-nowrap">
              Start Your Project
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
