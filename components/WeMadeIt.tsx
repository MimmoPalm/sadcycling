'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const rides = [
  {
    label: 'Day 1',
    distance: '162.51 km',
    elevation: '1,304 m',
    link: 'https://www.strava.com/activities/18584748946',
  },
  {
    label: 'Day 2',
    distance: '72.40 km',
    elevation: '487 m',
    link: 'https://www.strava.com/activities/18597097514',
  },
  {
    label: 'Day 3',
    distance: '107.26 km',
    elevation: '911 m',
    link: 'https://www.strava.com/activities/18610914277',
  },
  {
    label: 'Day 4',
    distance: '97.62 km',
    elevation: '390 m',
    link: 'https://www.strava.com/activities/18623396912',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function WeMadeIt() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="genova" className="bg-[#F3ECE5] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="text-[#11151C]/50 font-black uppercase tracking-widest text-sm mb-4"
          >
            Marseille &rarr; Genova &middot; May 2026
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="section-heading text-[#11151C] mb-10"
          >
            We Made It.
          </motion.h2>

          {/* Hero image */}
          <motion.div variants={itemVariants} className="mb-16 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/genova.jpeg"
              alt="SAD Cycling team arriving in Genova"
              className="w-full max-w-2xl mx-auto block object-contain"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-[#11151C] mb-16"
          >
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#11151C] text-center">
              <div className="text-[#c21717] font-black text-4xl mb-1">439.8</div>
              <div className="text-[#11151C]/60 font-black uppercase tracking-widest text-xs">km total</div>
            </div>
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#11151C] text-center">
              <div className="text-[#c21717] font-black text-4xl mb-1">3,092</div>
              <div className="text-[#11151C]/60 font-black uppercase tracking-widest text-xs">metres climbed</div>
            </div>
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#11151C] text-center">
              <div className="text-[#c21717] font-black text-4xl mb-1">~20k</div>
              <div className="text-[#11151C]/60 font-black uppercase tracking-widest text-xs">calories each</div>
            </div>

          </motion.div>

          {/* Ride breakdown */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-[#11151C]/50 font-black uppercase tracking-widest text-sm mb-6">
              The Rides
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {rides.map((ride) => (
                <a
                  key={ride.label}
                  href={ride.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-2 border-[#11151C]/20 hover:border-[#11151C] p-6 transition-colors"
                >
                  <div className="text-[#c21717] font-black uppercase tracking-widest text-xs mb-3">
                    {ride.label}
                  </div>
                  <div className="text-[#11151C] font-black text-2xl mb-1">{ride.distance}</div>
                  <div className="text-[#11151C]/50 text-sm mb-4">{ride.elevation} elevation</div>
                  <span className="text-[#c21717] font-black uppercase tracking-widest text-xs border-b border-[#c21717] pb-0.5 group-hover:text-[#11151C] group-hover:border-[#11151C] transition-colors">
                    View on Strava &rarr;
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Thank you note */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl"
          >
            <p className="text-[#11151C]/50 font-black uppercase tracking-widest text-sm mb-4">
              Thank You
            </p>
            <p className="text-[#11151C] text-lg leading-relaxed mb-4">
              To everyone who followed the journey, donated, sent a message of support, or simply kept tabs on the tracker — thank you. It meant more than you know, especially on Day 1 when the legs were already questioning everything.
            </p>
            <p className="text-[#11151C]/70 text-base leading-relaxed">
              Five riders. Four days. Nearly 440 kilometres of French and Italian coast. Around 100,000 calories burnt between us. And one very tired, very happy team rolling into Genova.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
