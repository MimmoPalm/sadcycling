'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { routeDays, RIDEWITHGPS_URL } from '@/lib/content'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: i * 0.12 },
  }),
}

export default function TheRoute() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mapRef = useRef(null)
  const mapInView = useInView(mapRef, { once: true, margin: '-40px' })

  return (
    <section id="route" className="bg-crimson py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-white/60 font-black uppercase tracking-widest text-sm mb-4"
        >
          The Journey · May 2026
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="section-heading text-white mb-4"
        >
          The Route
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
          className="text-white/70 text-lg font-semibold mb-12 max-w-2xl"
        >
          Marseille to Genoa. 4 days. 437 km. Around 4,377 m of climbing. Nobody asked if this was sensible.
        </motion.p>

        {/* RideWithGPS embed or map fallback */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 40 }}
          animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="w-full mb-16"
        >
          {/* Try RideWithGPS collection embed — if this iframe fails to load, map.png fallback is shown below */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://ridewithgps.com/collections/6160629/embed"
              title="SAD Cycling 2026 route — RideWithGPS"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
          {/* Map image as fallback context */}
          <div className="mt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/map.png"
              alt="SAD Cycling 2026 route map — Marseille to Genoa"
              className="w-full object-contain max-h-96"
            />
          </div>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-3 text-center">
            Full route on{' '}
            <a
              href={RIDEWITHGPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              RideWithGPS
            </a>
          </p>
        </motion.div>

        {/* Day-by-day cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routeDays.map((day, i) => (
            <motion.div
              key={day.day}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="bg-white/10 border border-white/20 p-6 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white text-crimson font-black text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {day.day}
                </span>
                <span className="text-white/60 font-bold uppercase tracking-widest text-xs leading-tight">
                  {day.date}
                </span>
              </div>
              <div className="text-white font-black text-xl uppercase mb-1">
                {day.start}
              </div>
              <div className="text-white/60 font-bold text-sm uppercase tracking-widest mb-4">
                &rarr; {day.end}
              </div>
              <div className="flex gap-6 mb-4">
                <div>
                  <div className="text-white font-black text-2xl">{day.distance}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-bold">km</div>
                </div>
                <div>
                  <div className="text-white font-black text-2xl">{day.elevation}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-bold">m elev.</div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {day.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
