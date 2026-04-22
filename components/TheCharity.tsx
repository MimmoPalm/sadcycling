'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { JUSTGIVING_URL } from '@/lib/content'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function TheCharity() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="charity" className="bg-[#c21717] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-white/60 font-black uppercase tracking-widest text-sm mb-4"
          >
            Why We Ride
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="section-heading text-white mb-8"
          >
            Great Ormond Street<br />Hospital
          </motion.h2>

          {/* GOSH Logo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-10"
          >
            <div className="bg-white p-6 inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gosh-logo.svg"
                alt="Great Ormond Street Hospital logo"
                className="h-20 w-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            <p>
              We&apos;ve been supporting Great Ormond Street Hospital for a couple of years now.
              This year we&apos;re doing it again.
            </p>
            <p>
              GOSH is a place that brings hope to children facing cancer and their families —
              through expert care, world-class research, and incredible support. As a group,
              we aim to raise £1,000. Every kilometre we pedal from Marseille to Genoa,
              every hill we suffer through, is dedicated to making life better for those children.
            </p>
            <p>
              Your donation, however small, makes a real difference. And it makes our legs
              hurt slightly less, psychologically.
            </p>
          </motion.div>

          {/* Goal display */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-block border-2 border-white/40 px-10 py-6 mb-6">
              <div className="text-white/60 font-black uppercase tracking-widest text-xs mb-2">
                Our Goal
              </div>
              <div className="text-white font-black text-5xl mb-2">
                £1,000
              </div>
              <div className="text-white/70 text-sm mb-4">
                Every pound goes directly to Great Ormond Street Hospital
              </div>
              
                href={JUSTGIVING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm font-bold hover:text-white transition-colors underline underline-offset-4"
              >
                See how much we&apos;ve raised so far &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            
              href={JUSTGIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#c21717] font-black uppercase tracking-widest px-10 py-5 text-lg border-2 border-white hover:bg-[#c21717] hover:text-white transition-all duration-200"
            >
              Donate Now
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
