'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WAHOO_TRACKING_URL } from '@/lib/content'

export default function LiveTracking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="track" className="bg-white py-12 px-4">
      <div ref={ref} className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="text-[#11151C]/50 font-black uppercase tracking-widest text-xs mb-2"
          >
            GPS Live · May 2026
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.08 }}
            className="text-[#11151C] font-black uppercase text-2xl sm:text-3xl tracking-widest mb-2"
          >
            Track us live
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.16 }}
            className="text-[#11151C]/60 text-base font-semibold max-w-sm"
          >
            Watch our progress in real time. Judge our pace accordingly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.24 }}
          className="relative inline-block flex-shrink-0"
        >
          <motion.span
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-[#c21717] pointer-events-none"
            aria-hidden="true"
          />
          <motion.a
            href={WAHOO_TRACKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative inline-block bg-[#c21717] text-white font-black uppercase tracking-widest px-10 py-4 text-base border-2 border-[#c21717] hover:bg-white hover:text-[#c21717] transition-colors duration-200 z-10"
          >
            Open Live Tracker
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
