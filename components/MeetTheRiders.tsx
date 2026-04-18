'use client'

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { riders } from '@/lib/content'

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
    <section id="riders" className="bg-crimson py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-4">
          The Team
        </p>
        <h2 className="section-heading text-white mb-16">
          Meet the<br />Riders
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
                className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/10 border-2 border-white/30 mx-auto mb-4 overflow-hidden group-hover:border-white transition-colors flex-shrink-0"
              >
                {rider.image && !rider.image.endsWith('.heic') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={rider.image}
                    alt={rider.name}
                    className="w-full h-full object-cover"
                  />
                ) : rider.image && rider.image.endsWith('.heic') ? (
                  /* Gigi — .heic may not render in browsers; show placeholder with name */
                  <div className="w-full h-full flex items-center justify-center bg-white/10">
                    <span className="text-white font-black text-xl uppercase">G</span>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/10">
                    <span className="text-white font-black text-xl uppercase">{rider.name[0]}</span>
                  </div>
                )}
              </motion.div>
              <div className="text-white font-black uppercase text-lg leading-tight mb-0.5">
                {rider.name}
              </div>
              {'displayNameNote' in rider && rider.displayNameNote && (
                <div className="text-white/40 text-xs font-bold mb-1">
                  {rider.displayNameNote as string}
                </div>
              )}
              <div className="text-white/60 font-bold uppercase text-xs tracking-widest mb-3">
                &quot;{rider.nickname}&quot;
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                {rider.bio}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
