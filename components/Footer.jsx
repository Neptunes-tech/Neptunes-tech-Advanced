'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { footerLinks, socialLinks, companyInfo } from '@/lib/mockData'

const iconMap = { Github, Linkedin, Twitter, Mail }

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-background border-t border-sky-500/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-sky-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-cyan-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black mb-4 block"
            >
              <span className="text-foreground">Neptunes</span>
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent ml-1">Tech</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building tomorrow's technology solutions today. Innovative, reliable, scalable.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.iconName]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="magnetic w-10 h-10 rounded-full bg-sky-500/5 border border-sky-500/10 flex items-center justify-center text-muted-foreground hover:text-sky-500 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground mb-5">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="cursor-pointer text-sm text-muted-foreground hover:text-sky-500 transition-colors duration-200 relative group inline-block"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="cursor-pointer text-sm text-muted-foreground hover:text-sky-500 transition-colors duration-200 relative group inline-block"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} NEPTUNES TECH. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="magnetic p-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
