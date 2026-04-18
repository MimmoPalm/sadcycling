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
    <section id="charity" className="bg-[#11151C] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-[#F3ECE5]/60 font-black uppercase tracking-widest text-sm mb-4"
          >
            Why We Ride
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="section-heading text-[#F3ECE5] mb-8"
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
            className="space-y-4 text-[#F3ECE5]/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            <p>
              We&apos;ve been supporting Great Ormond Street Hospital for a couple of years now. This year we&apos;re doing it again.
            </p>
            <p>
              GOSH does genuinely important work — world-class care for children with the most complex conditions. Every kilometre we suffer is a kilometre ridden in their name.
            </p>
            <p>
              Your donation, however small, makes a real difference. And it makes our legs hurt slightly less, psychologically.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href={JUSTGIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#855832] text-[#F3ECE5] font-black uppercase tracking-widest px-10 py-5 text-lg border-2 border-[#855832] hover:bg-[#F3ECE5] hover:text-[#855832] transition-all duration-200"
            >
              Donate Now
            </a>
          </motion.div>
        </motion.div>

        {/* JustGiving Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
          className="w-full"
        >
          {/* JustGiving iframe widget — attempt embed */}
          {/* TODO: If widget fails to render, replace with static donation total placeholder */}
          <iframe
            src="https://widgets.justgiving.com/fundraisingpage/sadcycle-2026-for-gosh"
            title="JustGiving fundraising page"
            width="100%"
            height="200"
            className="border-0 w-full"
            allowFullScreen
          />
          <p className="text-center text-[#F3ECE5]/30 text-xs font-bold uppercase tracking-widest mt-4">
            Live total updated daily
          </p>
        </motion.div>
      </div>
    </section>
  )
}
