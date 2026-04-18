'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const riders = [
  {
    name: 'Stefano',
    displayName: 'Stefano',
    nickname: 'The Hedonist',
    bio: 'In it for the food, the views, and the post-ride Aperol Spritz. Has been known to scout restaurants before checking the elevation profile.',
    image: '/stefano.jpeg',
  },
  {
    name: 'Aurelio',
    displayName: 'Aurelio',
    nickname: 'The Reluctant Martyr',
    bio: 'Will suffer more than anyone. Won\'t complain — he\'s just quietly managing seventeen other life crises from his phone. He\'d honestly rather be on his couch in East London sorting them out.',
    image: '/aurelio.jpeg',
  },
  {
    name: 'Domenico',
    displayName: 'Domenico (aka Mimmo)',
    nickname: 'The Captain',
    bio: 'Planned the route, booked the hotels, and takes full responsibility for everything that goes right. When it goes wrong, he blames the weather, the GPS, and increasingly, artificial intelligence.',
    image: '/mimmo.jpeg',
  },
  {
    name: 'Julian',
    displayName: 'Julian',
    nickname: 'The Spoiled King',
    bio: 'Insists on a proper bed, a hot shower, and a functioning coffee machine. Has not yet explained why he keeps coming back.',
    image: '/julien.jpeg',
  },
  {
    name: 'Frezz',
    displayName: 'Frezz',
    nickname: 'The Wajone',
    bio: 'The youngest. From Naples. The nickname is untranslatable but everyone from Naples understands it. Our mascot. Don\'t tell him that.',
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
    <section id="riders" className="bg-[#11151C] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#855832] font-black uppercase tracking-widest text-sm mb-4">
          The Team
        </p>
        <h2 className="section-heading text-[#F3ECE5] mb-16">
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
                className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#855832]/20 border-2 border-[#F3ECE5]/20 mx-auto mb-4 overflow-hidden group-hover:border-[#855832] transition-colors flex-shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={rider.image}
                  alt={rider.displayName}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-[#F3ECE5] font-black uppercase text-base leading-tight mb-0.5">
                {rider.displayName}
              </div>
              <div className="text-[#855832] font-bold uppercase text-xs tracking-widest mb-3">
                &quot;{rider.nickname}&quot;
              </div>
              <div className="text-[#F3ECE5]/50 text-sm leading-relaxed">
                {rider.bio}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-[#F3ECE5]/30 text-xs italic text-center max-w-md mx-auto"
        >
          Wajone (n.) — Neapolitan. Untranslatable. Somewhere between &apos;kid&apos;, &apos;lad&apos;, and a term of affection you&apos;d only use with someone you&apos;d trust on a long ride.
        </motion.p>
      </div>
    </section>
  )
}
