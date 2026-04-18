'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { STRAVA_URL } from '@/lib/content'

const pastRides = [
  {
    city: 'Paris',
    year: '2024',
    image: '/paris.jpeg',
    flavour:
      'Tired legs. Questionable decisions. A finish line that kept moving. We made it anyway, and the croissants were worth every climb.',
    link: STRAVA_URL,
  },
  {
    city: 'Amsterdam',
    year: '2025',
    image: '/amsterdam.jpeg',
    flavour:
      'Flat roads, strong headwinds, and the collective delusion that cycling to Amsterdam was somehow a good idea. It was.',
    link: STRAVA_URL,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function PastRides() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="past-rides" className="bg-[#855832] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#F3ECE5]/60 font-black uppercase tracking-widest text-sm mb-4">
          Where We&apos;ve Been
        </p>
        <h2 className="section-heading text-[#F3ECE5] mb-16">
          Past Rides
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {pastRides.map((ride) => (
            <motion.a
              key={ride.city}
              variants={cardVariants}
              href={ride.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden border-2 border-[#F3ECE5]/20 hover:border-[#F3ECE5] transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="aspect-video relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ride.image}
                  alt={`SAD Cycling — ${ride.city} ${ride.year}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/30 to-transparent" />
                {/* Year badge */}
                <div className="absolute top-4 left-4 bg-[#855832] text-[#F3ECE5] font-black uppercase tracking-widest text-sm px-3 py-1">
                  {ride.year}
                </div>
              </div>
              <div className="p-8 bg-[#11151C]">
                <div className="flex items-baseline gap-4 mb-3">
                  <div className="text-[#F3ECE5] font-black uppercase text-3xl">
                    {ride.city}
                  </div>
                  <div className="text-[#855832] font-black text-lg">
                    {ride.year}
                  </div>
                </div>
                <p className="text-[#F3ECE5]/60 text-base leading-relaxed mb-6">
                  {ride.flavour}
                </p>
                <span className="text-[#855832] font-black uppercase tracking-widest text-xs border-b-2 border-[#855832] pb-0.5 group-hover:text-[#F3ECE5] group-hover:border-[#F3ECE5] transition-colors">
                  View on Strava &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
