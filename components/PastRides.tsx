'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { pastRides } from '@/lib/content'

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
    <section id="past-rides" className="bg-[#11151C] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#855832] font-black uppercase tracking-widest text-sm mb-4">
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
              className="group block relative overflow-hidden border-2 border-white/10 hover:border-[#855832] transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="aspect-video relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ride.image}
                  alt={`SAD Cycling — ${ride.city}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/30 to-transparent" />
              </div>
              <div className="p-8">
                <div className="text-[#F3ECE5] font-black uppercase text-3xl mb-3">
                  {ride.city}
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
