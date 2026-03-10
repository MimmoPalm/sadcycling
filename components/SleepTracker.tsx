import { sleepTracker } from '@/lib/content'

const statusStyles: Record<string, string> = {
  CONFIRMED: 'bg-green-600 text-white',
  TBC: 'bg-yellow-500 text-black',
}

export default function SleepTracker() {
  return (
    <section id="sleep" className="bg-off-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          Accommodation
        </p>
        <h2 className="section-heading text-crimson mb-4">
          Sleep Tracker
        </h2>
        <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm mb-12">
          During the ride, this section becomes a live progress log.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-crimson/20" />

          <div className="space-y-6">
            {sleepTracker.map((night) => (
              <div key={night.night} className="flex gap-8 items-start relative">
                {/* Night number bubble */}
                <div className="w-12 h-12 rounded-full bg-crimson text-white font-black text-lg flex items-center justify-center flex-shrink-0 relative z-10">
                  {night.night}
                </div>

                <div className="flex-1 bg-white border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-crimson mb-1">
                      {night.date}
                    </div>
                    <div className="text-xl font-black uppercase text-gray-900">
                      {night.location}
                    </div>
                    <div className="text-gray-500 font-semibold text-sm mt-1">
                      {night.accommodation}
                    </div>
                  </div>
                  <span className={`inline-block px-4 py-2 text-xs font-black uppercase tracking-widest self-start sm:self-center flex-shrink-0 ${statusStyles[night.status] ?? 'bg-gray-200 text-gray-700'}`}>
                    {night.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
