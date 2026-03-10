import { routeDays } from '@/lib/content'

export default function TheRoute() {
  return (
    <section id="route" className="bg-crimson py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-4">
          The Journey
        </p>
        <h2 className="section-heading text-white mb-12">
          The Route
        </h2>

        {/* Map embed placeholder */}
        {/* TODO: Replace with real Komoot or Google Maps embed */}
        <div className="w-full h-96 bg-[#6B0000] border-2 border-white/20 flex items-center justify-center mb-16">
          <div className="text-center text-white/50">
            <p className="font-black uppercase tracking-widest text-lg mb-2">Map Embed TBC</p>
            <p className="text-sm">
              Replace this div with a Komoot or Google Maps iframe.<br />
              Example: &lt;iframe src=&quot;https://www.komoot.com/tour/...&quot; /&gt;
            </p>
          </div>
        </div>

        {/* Day-by-day cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routeDays.map((day) => (
            <div key={day.day} className="bg-white/10 border border-white/20 p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white text-crimson font-black text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {day.day}
                </span>
                <span className="text-white/60 font-bold uppercase tracking-widest text-xs">Day {day.day}</span>
              </div>
              <div className="text-white font-black text-xl uppercase mb-1">
                {day.start}
              </div>
              <div className="text-white/60 font-bold text-sm uppercase tracking-widest mb-4">
                → {day.end}
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="text-white font-black text-2xl">{day.distance}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-bold">km</div>
                </div>
                <div>
                  <div className="text-white font-black text-2xl">{day.elevation}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-bold">m elev.</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
