import { riders } from '@/lib/content'

export default function MeetTheRiders() {
  return (
    <section id="riders" className="bg-crimson py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-4">
          The Team
        </p>
        <h2 className="section-heading text-white mb-16">
          Meet the<br />Riders
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {riders.map((rider) => (
            <div key={rider.name} className="text-center group">
              {/* TODO: Replace with real rider photo — recommended 400×400px circular crop */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/10 border-2 border-white/30 mx-auto mb-4 flex items-center justify-center group-hover:border-white transition-colors">
                <span className="text-4xl">🚴</span>
              </div>
              <div className="text-white font-black uppercase text-lg leading-tight mb-1">
                {rider.name}
              </div>
              <div className="text-white/60 font-bold uppercase text-xs tracking-widest mb-3">
                &quot;{rider.nickname}&quot;
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                {rider.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
