'use client'

import { useState, useEffect } from 'react'
import { JUSTGIVING_URL } from '@/lib/content'

const navLinks = [
  { label: 'What', href: '#what' },
  { label: 'Charity', href: '#charity' },
  { label: 'Track', href: '#track' },
  { label: 'Route', href: '#route' },
  { label: 'Riders', href: '#riders' },
  { label: 'Donate', href: JUSTGIVING_URL, external: true },
]

export default function Nav() {
  const [active, setActive] = useState('')

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
    <div className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Announcement banner */}
      <div className="w-full bg-[#11151C] text-white text-center py-2.5 px-4">
        <p className="font-black uppercase tracking-widest text-xs md:text-sm">
          UPDATE: We made it to Genova.{' '}
          <a href="#genova" className="underline underline-offset-4 text-[#c21717] hover:text-white transition-colors">
            Read the full report &darr;
          </a>
        </p>
      </div>
      {/* Nav bar */}
      <nav className="bg-[#c21717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-text-only.png"
              alt="SAD Cycling"
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
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
    </div>
  )
}
