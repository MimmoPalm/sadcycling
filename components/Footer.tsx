import { WAHOO_TRACKING_URL, STRAVA_URL, JUSTGIVING_URL } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-[#c21717] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-no-bg.png"
              alt="SAD Cycling — Pedal fast chase joy"
              className="h-14 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Links */}
          <div>
            <div className="font-black uppercase text-white/60 tracking-widest text-xs mb-4">
              Follow the Suffering
            </div>
            <div className="space-y-2">
              <a
                href={STRAVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-bold uppercase tracking-widest text-sm hover:text-white/70 transition-colors"
              >
                Strava
              </a>
              <a
                href={WAHOO_TRACKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-bold uppercase tracking-widest text-sm hover:text-white/70 transition-colors"
              >
                Track us live
              </a>
            </div>
          </div>

          {/* Donate CTA */}
          <div>
            <div className="font-black uppercase text-white/60 tracking-widest text-xs mb-4">
              Support the Cause
            </div>
            <a
              href={JUSTGIVING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#c21717] font-black uppercase tracking-widest px-8 py-4 text-sm border-2 border-white hover:bg-[#c21717] hover:text-white hover:border-white/60 transition-all duration-200"
            >
              Donate Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs uppercase tracking-widest font-bold">
            &copy; 2024 SAD Cycling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
