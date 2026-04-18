import { siteConfig, WAHOO_TRACKING_URL, STRAVA_URL, JUSTGIVING_URL } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-crimson py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Wordmark */}
          <div>
            <div className="font-black uppercase text-white text-3xl tracking-widest mb-4">
              SAD Cycling
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
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
                className="block text-white font-bold uppercase tracking-widest text-sm hover:text-white/60 transition-colors"
              >
                Strava
              </a>
              <a
                href={WAHOO_TRACKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-bold uppercase tracking-widest text-sm hover:text-white/60 transition-colors"
              >
                Live Tracking
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
              className="btn-outline inline-block"
            >
              Donate Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
            &copy; 2024 SAD Cycling. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-bold">
            Built with sore legs
          </p>
        </div>
      </div>
    </footer>
  )
}
