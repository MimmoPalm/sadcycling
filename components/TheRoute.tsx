'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, type Variants } from 'framer-motion'
import { RIDEWITHGPS_URL } from '@/lib/content'

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
    note: 'Shortest day. Enjoy the Riviera, arrive early, explore Nice in the evening.',
  },
  {
    day: 3,
    date: 'Fri 22 May',
    from: 'Nice',
    to: 'Alassio',
    distance: '106.2 km',
    elevation: '1,429 m',
    note: 'Crosses into Italy via Monaco, Menton, San Remo.',
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

// City positions as percentage along SVG viewport (800×300)
const cities = [
  { name: 'Marseille', x: 60, y: 140 },
  { name: 'Saint-Raphaël', x: 250, y: 115 },
  { name: 'Nice', x: 400, y: 100 },
  { name: 'Alassio', x: 560, y: 110 },
  { name: 'Genoa', x: 720, y: 90 },
]

// Smooth coastal path (cubic bezier curves between cities)
const pathD = `
  M 60,140
  C 120,138 180,120 250,115
  C 300,112 350,105 400,100
  C 450,96 510,106 560,110
  C 620,114 670,96 720,90
`

// Segment path data (approximate per-day sub-paths)
const segmentPaths = [
  'M 60,140 C 120,138 180,120 250,115',
  'M 250,115 C 300,112 350,105 400,100',
  'M 400,100 C 450,96 510,106 560,110',
  'M 560,110 C 620,114 670,96 720,90',
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
  const svgRef = useRef(null)
  const cardsRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: svgRef, offset: ['start end', 'end start'] })
  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  const [activeDay, setActiveDay] = useState<number | null>(null)
  const [activeCity, setActiveCity] = useState<string | null>(null)

  const activeDayData = activeDay !== null ? routeDays[activeDay - 1] : null

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

        {/* Interactive SVG Map */}
        <motion.div
          ref={svgRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="relative bg-[#11151C] border-2 border-[#11151C] mb-6 overflow-visible"
        >
          <svg
            viewBox="0 0 780 220"
            className="w-full"
            style={{ minHeight: '180px' }}
            aria-label="SAD Cycling 2026 route map — Marseille to Genoa"
          >
            {/* Background subtle grid */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff08" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="780" height="220" fill="#11151C" />
            <rect width="780" height="220" fill="url(#grid)" />

            {/* Ghost path (full route, dimmed) */}
            <path
              d={pathD}
              fill="none"
              stroke="#F3ECE540"
              strokeWidth="2"
              strokeDasharray="6 4"
            />

            {/* Animated main path on scroll */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#F3ECE5"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            {/* Directional arrow at mid-path */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <polygon
                points="330,98 322,104 326,101 318,101 326,101 322,98"
                fill="#c21717"
              />
            </motion.g>

            {/* Day segment highlights */}
            {segmentPaths.map((segD, i) => (
              <path
                key={i}
                d={segD}
                fill="none"
                stroke={activeDay === i + 1 ? '#c21717' : 'transparent'}
                strokeWidth="5"
                strokeLinecap="round"
                style={{ cursor: 'pointer', transition: 'stroke 0.2s' }}
                onMouseEnter={() => setActiveDay(i + 1)}
                onMouseLeave={() => setActiveDay(null)}
                onClick={() => setActiveDay(activeDay === i + 1 ? null : i + 1)}
              />
            ))}

            {/* City markers */}
            {cities.map((city, i) => (
              <g
                key={city.name}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => { setActiveCity(city.name); setActiveDay(i > 0 ? i : null) }}
                onMouseLeave={() => { setActiveCity(null); setActiveDay(null) }}
                onClick={() => setActiveDay(i > 0 ? i : 1)}
              >
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={activeCity === city.name ? 8 : 5}
                  fill={activeCity === city.name ? '#c21717' : '#F3ECE5'}
                  stroke="#11151C"
                  strokeWidth="1.5"
                  style={{ transition: 'r 0.2s, fill 0.2s' }}
                />
                <text
                  x={city.x}
                  y={city.y - 14}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="sans-serif"
                  fill={activeCity === city.name ? '#c21717' : '#F3ECE580'}
                  style={{ transition: 'fill 0.2s', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  {city.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Hover/tap day card */}
          {activeDayData && (
            <motion.div
              key={activeDayData.day}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              className="absolute bottom-4 right-4 bg-[#F3ECE5] text-[#11151C] p-4 max-w-xs shadow-xl border-2 border-[#c21717] z-10"
            >
              <div className="text-[#c21717] font-black uppercase tracking-widest text-xs mb-1">
                Day {activeDayData.day} — {activeDayData.date}
              </div>
              <div className="font-black text-lg uppercase mb-1">
                {activeDayData.from} &rarr; {activeDayData.to}
              </div>
              <div className="flex gap-4 text-sm font-bold mb-2">
                <span>{activeDayData.distance}</span>
                <span className="text-[#11151C]/50">{activeDayData.elevation} elev.</span>
              </div>
              <p className="text-[#11151C]/70 text-sm leading-relaxed">
                {activeDayData.note}
              </p>
            </motion.div>
          )}

          <p className="px-4 py-2 text-[#F3ECE5]/30 text-xs font-bold uppercase tracking-widest text-center">
            Hover or tap a segment to see day details &mdash;{' '}
            <a
              href={RIDEWITHGPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#F3ECE5]/60 transition-colors"
            >
              full route on RideWithGPS
            </a>
          </p>
        </motion.div>

        {/* Day-by-day cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {routeDays.map((day, i) => (
            <motion.div
              key={day.day}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? 'visible' : 'hidden'}
              className="bg-[#11151C] border border-[#c21717]/40 p-6 hover:border-[#c21717] transition-colors cursor-default"
              onMouseEnter={() => setActiveDay(day.day)}
              onMouseLeave={() => setActiveDay(null)}
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
      </div>
    </section>
  )
}
