import { merch, siteConfig } from '@/lib/content'

export default function Merch() {
  return (
    <section id="merch" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          Look the Part
        </p>
        <h2 className="section-heading text-crimson mb-16">
          Official Merch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merch.map((item) => (
            <div key={item.name} className="group border-2 border-gray-200 hover:border-crimson transition-colors">
              {/* TODO: Replace with real product images from Printify/shop */}
              <div className="aspect-square bg-off-white flex items-center justify-center border-b-2 border-gray-200 group-hover:border-crimson transition-colors">
                <div className="text-center text-gray-400">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-xs font-bold uppercase tracking-widest">Product image TBC</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-lg font-black uppercase text-gray-900 mb-1">{item.name}</div>
                <div className="text-gray-500 text-sm mb-4">{item.description}</div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-crimson">{item.price}</span>
                  {/* TODO: Replace href with real shop URL (Printify, Shopify, etc.) */}
                  <a
                    href={siteConfig.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-crimson text-white font-black uppercase tracking-widest px-4 py-2 text-sm hover:bg-[#6B0000] transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
