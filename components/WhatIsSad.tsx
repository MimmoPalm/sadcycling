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
    <section id="what" className="bg-[#F3ECE5] py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="text-[#c21717] font-black uppercase tracking-widest text-sm mb-4"
          >
            The Concept
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="section-heading text-[#11151C] mb-8"
          >
            What is<br />SAD Cycling?
          </motion.h2>
          <div className="space-y-5 text-[#11151C]/80 text-lg leading-relaxed">
            <motion.p variants={itemVariants} className="font-bold text-[#11151C] text-xl">
              We are the SAD. Which sounds worse than it is.
            </motion.p>
            <motion.p variants={itemVariants}>
              Stefano, Aurelio, Domenico — three Italian Londoners who one day decided that the best way
              to spend a May bank holiday was to get on bikes and suffer for charity. Every year since.
            </motion.p>
            <motion.p variants={itemVariants}>
              This is not a race. Nobody is winning. The only real competition is who complains the most —
              and that race, we are all equally qualified for. It is more about roadside cafe stops that
              take far longer than planned, headwinds that were definitely not in the forecast, and coastal
              roads that make every kilometre worth it.
            </motion.p>
            <motion.p variants={itemVariants}>
              Every year, in May, we ride. And every year, we raise money for a charity that matters.
              This year we are riding Marseille to Genoa — several hundred kilometres down the French and
              Italian Riviera — to support Great Ormond Street Hospital.
            </motion.p>
            <motion.p variants={itemVariants} className="font-bold text-[#c21717]">
              Because suffering is more bearable when it means something.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-no-bg.png"
            alt="SAD Cycling — Pedal fast chase joy"
            className="w-full max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}
