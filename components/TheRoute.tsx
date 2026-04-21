'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const routeDays = [
  {
    day: 1,
    date: 'Wed 20 May',
    from: 'Marseille',
    to: 'Saint-Raphaël',
    distance: '162 km',
    elevation: '1,479 m',
    note: 'Longest day. Big climb through the Estérel. Early start essential.',
  },
  {
    day: 2,
    date: 'Thu 21 May',
    from: 'Saint-Raphaël',
    to: 'Nice',
    distance: '72 km',
    elevation: '643 m',
    note: 'Shortest day. Enjoy the Riviera, arrive early, explore Nice.',
  },
  {
    day: 3,
    date: 'Fri 22 May',
    from: 'Nice',
    to: 'Alassio',
    distance: '106.2 km',
    elevation: '1,429 m',
    note: 'Into Italy via Monaco, Menton, San Remo.',
  },
  {
    day: 4,
    date: 'Sat 23 May',
    from: 'Alassio',
    to: 'Genoa',
    distance: '97.1 km',
    elevation: '826 m',
    note: 'Final push along the Ligurian coast. Celebratory dinner in Genoa.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: i * 0.12 },
  }),
}

export default function TheRoute() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  return (
    <section id="route" className="bg-[#F3ECE5] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.p
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-[#c21717] font-black uppercase tracking-widest text-sm mb-4"
        >
          The Journey · May 2026
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="section-heading text-[#11151C] mb-4"
        >
          The Route
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
          className="text-[#11151C]/70 text-lg font-semibold mb-12 max-w-2xl"
        >
          Marseille to Genoa. 4 days. 437 km. Around 4,377 m of climbing. Nobody asked if this was sensible.
        </motion.p>

        {/* Day-by-day cards */}
        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {routeDays.map((day, i) => (
            <motion.div
              key={day.day}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? 'visible' : 'hidden'}
              className="bg-[#11151C] border border-[#c21717]/40 p-6 hover:border-[#c21717] transition-colors cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#c21717] text-[#F3ECE5] font-black text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {day.day}
                </span>
                <span className="text-[#F3ECE5]/60 font-bold uppercase tracking-widest text-xs leading-tight">
                  {day.date}
                </span>
              </div>
              <div className="text-[#F3ECE5] font-black text-xl uppercase mb-1">
                {day.from}
              </div>
              <div className="text-[#F3ECE5]/60 font-bold text-sm uppercase tracking-widest mb-4">
                &rarr; {day.to}
              </div>
              <div className="flex gap-6 mb-4">
                <div>
                  <div className="text-[#F3ECE5] font-black text-2xl">{day.distance}</div>
                  <div className="text-[#F3ECE5]/50 text-xs uppercase tracking-widest font-bold">distance</div>
                </div>
                <div>
                  <div className="text-[#F3ECE5] font-black text-2xl">{day.elevation}</div>
                  <div className="text-[#F3ECE5]/50 text-xs uppercase tracking-widest font-bold">elev.</div>
                </div>
              </div>
              <p className="text-[#F3ECE5]/50 text-sm leading-relaxed">
                {day.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RideWithGPS embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          style={{ overflow: 'hidden', borderRadius: '4px' }}
        >
          <div className="h-[400px] md:h-[700px]">
            <iframe
              src="https://ridewithgps.com/embeds?type=route&id=54760267&metricUnits=true&sampleGraph=true"
              style={{ width: '1px', minWidth: '100%', height: '100%', border: 'none' }}
              scrolling="no"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
