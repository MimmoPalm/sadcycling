'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WAHOO_TRACKING_URL } from '@/lib/content'

export default function LiveTracking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="track" className="bg-[#11151C] py-24 px-4 text-center">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-[#855832] font-black uppercase tracking-widest text-sm mb-4"
        >
          GPS Live
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          className="section-heading text-[#F3ECE5] mb-6"
        >
          Live Tracking
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="text-[#F3ECE5]/60 text-lg font-semibold mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Track us in real time during the ride. Watch our progress, see where we&apos;ve ground to a halt, and judge us for our pace accordingly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          className="relative inline-block"
        >
          {/* Pulse ring — infinite animation behind button */}
          <motion.span
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-[#855832] pointer-events-none"
            aria-hidden="true"
          />
          <motion.a
            href={WAHOO_TRACKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative inline-block bg-[#855832] text-[#F3ECE5] font-black uppercase tracking-widest px-14 py-6 text-2xl border-2 border-[#855832] hover:bg-[#F3ECE5] hover:text-[#855832] transition-colors duration-200 z-10"
          >
            Open Live Tracker
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[#F3ECE5]/30 text-xs font-bold uppercase tracking-widest mt-8"
        >
          Live from May 2026 · Wahoo GPS Tracking
        </motion.p>
      </div>
    </section>
  )
}
