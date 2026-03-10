import { dispatches } from '@/lib/content'

export default function Dispatches() {
  return (
    <section id="dispatches" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          From the Road
        </p>
        <h2 className="section-heading text-white mb-4">
          Dispatches
        </h2>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-16">
          {/* TODO: Connect to CMS (Contentful, Sanity, Notion, or local markdown) */}
          Updates, dispatches and training diaries · Content via [CMS TBC]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dispatches.map((post) => (
            <article key={post.title} className="border border-white/10 p-8 hover:border-white/30 transition-colors group">
              <div className="text-crimson font-black uppercase tracking-widest text-xs mb-3">
                {post.date}
              </div>
              <h3 className="text-white font-black uppercase text-xl md:text-2xl mb-4 leading-tight group-hover:text-crimson transition-colors">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              {/* TODO: Replace href with real post URL */}
              <a
                href={post.slug}
                className="text-white font-black uppercase tracking-widest text-xs border-b-2 border-crimson pb-0.5 hover:text-crimson transition-colors"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
