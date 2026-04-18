'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { merch } from '@/lib/content'

export default function Merch() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Only one product displayed — TODO: add real Printify product URL to lib/content.ts
  const product = merch[0]

  return (
    <section id="merch" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          Look the Part
        </p>
        <h2 className="section-heading text-crimson mb-16">
          Official Merch
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="max-w-xs"
        >
          <div className="group border-2 border-gray-200 hover:border-crimson transition-colors">
            {/* TODO: Replace with real product image from Printify */}
            <div className="aspect-square bg-off-white flex items-center justify-center border-b-2 border-gray-200 group-hover:border-crimson transition-colors">
              <div className="text-center text-gray-400">
                <p className="text-xs font-bold uppercase tracking-widest">Product image TBC</p>
              </div>
            </div>
            <div className="p-6">
              <div className="text-lg font-black uppercase text-gray-900 mb-1">{product.name}</div>
              <div className="text-gray-500 text-sm mb-4">{product.description}</div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-crimson">{product.price}</span>
                {/* TODO: Replace href with real Printify product URL */}
                <a
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-crimson text-white font-black uppercase tracking-widest px-4 py-2 text-sm hover:bg-[#6B0000] transition-colors"
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
