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
    <footer className="relative bg-[#030014] border-t border-violet-500/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-cyan-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black mb-4 block"
            >
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">NEPTUNES</span>
              <span className="text-cyan-400 ml-1">TECH</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Building tomorrow's technology solutions today. Innovative, reliable, scalable.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.iconName]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="magnetic w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white mb-5">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-violet-400 transition-colors duration-200 relative group inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} NEPTUNES TECH. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="magnetic p-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
