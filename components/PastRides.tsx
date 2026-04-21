'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
const pastRides = [
  {
    city: 'London to Paris',
    year: '2024',
    image: '/paris.jpeg',
    flavour:
      'Four hundred kilometres through the English and French countryside, following the Avenue Verte. The roads were quiet. The legs were not. Paris, as always, was worth every kilometre.',
    link: 'https://strava.app.link/Fp4l1sjSr2b',
  },
  {
    city: 'London to Amsterdam',
    year: '2025',
    image: '/amsterdam.jpeg',
    flavour:
      'Nearly 500 kilometres through four countries — the UK, France, Belgium, and the Netherlands. It rained every single day. Nobody stopped. Amsterdam welcomed us the only way it knows how.',
    link: 'https://strava.app.link/Fp4l1sjSr2b',
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
    <section id="past-rides" className="bg-[#F3ECE5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#11151C]/50 font-black uppercase tracking-widest text-sm mb-4">
          Where We&apos;ve Been
        </p>
        <h2 className="section-heading text-[#11151C] mb-16">
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
              className="group block relative overflow-hidden border-2 border-[#11151C]/20 hover:border-[#11151C] transition-colors"
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
                <div className="absolute top-4 left-4 bg-[#c21717] text-white font-black uppercase tracking-widest text-sm px-3 py-1">
                  {ride.year}
                </div>
              </div>
              <div className="p-8 bg-[#11151C]">
                <div className="flex items-baseline gap-4 mb-3">
                  <div className="text-[#F3ECE5] font-black uppercase text-3xl">
                    {ride.city}
                  </div>
                  <div className="text-[#c21717] font-black text-lg">
                    {ride.year}
                  </div>
                </div>
                <p className="text-[#F3ECE5]/60 text-base leading-relaxed mb-6">
                  {ride.flavour}
                </p>
                <span className="text-[#c21717] font-black uppercase tracking-widest text-xs border-b-2 border-[#c21717] pb-0.5 group-hover:text-[#F3ECE5] group-hover:border-[#F3ECE5] transition-colors">
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
