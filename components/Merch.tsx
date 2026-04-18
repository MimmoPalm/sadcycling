'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { merch } from '@/lib/content'

export default function Merch() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const product = merch[0]

  return (
    <section id="merch" className="bg-[#F3ECE5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <p className="text-[#855832] font-black uppercase tracking-widest text-xs mb-1">
              Look the Part
            </p>
            <h2 className="text-[#11151C] font-black uppercase text-3xl tracking-widest">
              Official Merch
            </h2>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="max-w-sm"
        >
          <div className="group border-2 border-[#11151C]/20 hover:border-[#855832] transition-colors flex gap-0 sm:gap-0">
            <div className="bg-[#11151C]/5 flex items-center justify-center p-8 min-w-[100px]">
              <div className="text-center text-[#11151C]/30">
                <p className="text-xs font-bold uppercase tracking-widest">Image TBC</p>
              </div>
            </div>
            <div className="p-5 flex flex-col justify-center">
              <div className="text-base font-black uppercase text-[#11151C] mb-1">{product.name}</div>
              <div className="text-[#11151C]/60 text-sm mb-3">{product.description}</div>
              <div className="flex items-center gap-4">
                <span className="text-xl font-black text-[#855832]">{product.price}</span>
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#11151C] text-[#F3ECE5] font-black uppercase tracking-widest px-4 py-2 text-xs hover:bg-[#855832] transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
