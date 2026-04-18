'use client'

import { useState, useEffect } from 'react'
import { JUSTGIVING_URL } from '@/lib/content'

const navLinks = [
  { label: 'What', href: '#what' },
  { label: 'Track', href: '#track' },
  { label: 'Charity', href: '#charity' },
  { label: 'Route', href: '#route' },
  { label: 'Riders', href: '#riders' },
  { label: 'Merch', href: '#merch' },
  { label: 'Donate', href: JUSTGIVING_URL, external: true },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-crimson shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-black uppercase text-white text-xl tracking-widest">
          SAD Cycling
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`font-bold uppercase text-sm tracking-widest transition-colors duration-200 ${
                active === link.href.replace('#', '')
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
