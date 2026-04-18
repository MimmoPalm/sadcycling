'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function WhatIsSad() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="text-crimson font-black uppercase tracking-widest text-sm mb-4"
          >
            The Concept
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="section-heading text-crimson mb-8"
          >
            What is<br />SAD Cycling?
          </motion.h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <motion.p variants={itemVariants} className="font-bold text-crimson text-xl">
              SAD stands for Stefano, Aurelio, Domenico.
            </motion.p>
            <motion.p variants={itemVariants}>
              A bunch of friends. A number of days. Several hundred kilometres of coastal roads, headwinds, and roadside cafe stops that take far longer than planned.
            </motion.p>
            <motion.p variants={itemVariants}>
              This is not a race. Nobody is winning. The only competition is who complains most convincingly. It is more about pubs and roadside cafes than performance.
            </motion.p>
            <motion.p variants={itemVariants}>
              Most importantly: the whole thing raises money for a genuinely excellent cause. Because suffering is more bearable when it means something.
            </motion.p>
            <motion.p variants={itemVariants} className="font-bold text-crimson">
              All proceeds go to Great Ormond Street Hospital.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
        >
          <div className="aspect-square bg-off-white border-2 border-gray-200 flex items-center justify-center overflow-hidden">
            {/* Map image as section visual */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/map.png"
              alt="SAD Cycling 2026 route map"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-crimson -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
