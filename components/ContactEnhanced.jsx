'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactEnhanced() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [focused, setFocused] = useState(null)
  const formRef = useRef(null)
  const inputRefs = useRef({})

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !formRef.current) return
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [isClient])

  const handleFocus = (field) => {
    setFocused(field)
    if (inputRefs.current[field]) {
      gsap.to(inputRefs.current[field], {
        boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
        borderColor: 'var(--primary)',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused(null)
      if (inputRefs.current[field]) {
        gsap.to(inputRefs.current[field], {
          boxShadow: 'none',
          borderColor: 'var(--border)',
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const button = e.currentTarget.querySelector('button')
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out',
        })
      },
    })

    console.log('Form submitted:', formData)
    
    gsap.to(Object.values(inputRefs.current), {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        setFormData({ name: '', email: '', phone: '', message: '' })
        gsap.to(Object.values(inputRefs.current), {
          opacity: 1,
          y: 0,
          duration: 0.3,
        })
      },
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@neptunestech.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground text-balance">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind? We'd love to hear from you. Contact us today and let's create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
          {contactInfo.map((info, idx) => {
            const IconComponent = info.icon
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 md:p-6 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                  {info.label}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{info.value}</p>
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border/50 p-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                ref={(el) => {
                  if (el) inputRefs.current['name'] = el
                }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                ref={(el) => {
                  if (el) inputRefs.current['email'] = el
                }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                ref={(el) => {
                  if (el) inputRefs.current['phone'] = el
                }}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                ref={(el) => {
                  if (el) inputRefs.current['message'] = el
                }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                rows="5"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none resize-none transition-all duration-300"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for latest updates and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <button className="px-6 py-2 bg-primary hover:bg-primary/80 text-primary-foreground font-bold rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
