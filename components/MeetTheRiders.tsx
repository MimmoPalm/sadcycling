'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const riders = [
  {
    name: 'Stefano',
    displayName: 'Stefano',
    nickname: 'The Hedonist',
    bio: "In it for the views, the food, and whatever's cold and alcoholic at the finish line and on the routes. Known to strike fear into every hotel breakfast buffet he's ever encountered.",
    image: '/stefano.jpeg',
  },
  {
    name: 'Aurelio',
    displayName: 'Aurelio',
    nickname: 'The Phoenix',
    bio: 'Has had more encounters with tarmac than any one person should. Shows up every year anyway — slightly patched up — and keep everyone entertained with his existential questions.',
    image: '/aurelio.jpeg',
  },
  {
    name: 'Domenico',
    displayName: 'Domenico (aka Mimmo)',
    nickname: 'The Captain',
    bio: 'Planned the route, booked the hotels, the restaurants, and takes credit for everything that goes right. Blames the GPS, the wind, or AI when it doesn\'t.',
    image: '/mimmo.jpeg',
  },
  {
    name: 'Julien',
    displayName: 'Julien',
    nickname: 'The Two Mains King',
    bio: 'Requires a comfortable bed, double mains, and loads of espresso before 8am. He\'s also a teddy bear and will give you the warmest hug at the finish line.',
    image: '/julien.jpeg',
  },
  {
    name: 'Frezz',
    displayName: 'Frezz',
    nickname: 'The Ride Jockey',
    bio: 'The youngest of the crew. When he\'s not on a bike he\'s behind the decks — and he brings the same energy to both. Our unofficial mascot.',
    image: '/frezz.png',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

export default function MeetTheRiders() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="riders" className="bg-[#c21717] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-4">
          The Team
        </p>
        <h2 className="section-heading text-white mb-16">
          The 2026 Team
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {riders.map((rider) => (
            <motion.div
              key={rider.name}
              variants={cardVariants}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/20 border-2 border-white/20 mx-auto mb-4 overflow-hidden group-hover:border-white transition-colors flex-shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rider.image}
                  alt={rider.displayName}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-white font-black uppercase text-base leading-tight mb-0.5">
                {rider.displayName}
              </div>
              <div className="text-white/70 font-bold uppercase text-xs tracking-widest mb-3">
                &quot;{rider.nickname}&quot;
              </div>
              <div className="text-white/70 text-sm leading-relaxed">
                {rider.bio}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
