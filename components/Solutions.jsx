'use client'

import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { solutions } from '@/lib/mockData'

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="solutions" className="pt-20 pb-10 md:pt-32 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Industry-specific solutions crafted to address your unique business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-300 animate-fadeInUp`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br ' + solution.gradient + ' text-white border-transparent shadow-2xl scale-105'
                    : 'bg-card/50 border-border/50 text-foreground hover:border-border/80 hover-lift'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p
                  className={`text-sm font-semibold mb-4 transition-colors ${
                    activeIndex === index ? 'text-white/80' : 'text-foreground/60'
                  }`}
                >
                  {solution.subtitle}
                </p>
                <p
                  className={`mb-6 leading-relaxed transition-colors ${
                    activeIndex === index ? 'text-white/90' : 'text-foreground/70'
                  }`}
                >
                  {solution.description}
                </p>

                {activeIndex === index && (
                  <div className="space-y-3 pt-6 border-t border-white/20 animate-fadeInUp">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={18} className="flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeInUp" style={{ transitionDelay: '450ms' }}>
          <p className="text-foreground/60 mb-6">
            Not sure which solution fits your needs?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
            Schedule a Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
