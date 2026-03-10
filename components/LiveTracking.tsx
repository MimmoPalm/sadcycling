import { siteConfig } from '@/lib/content'

export default function LiveTracking() {
  return (
    <section id="track" className="bg-gray-950 py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          GPS Live
        </p>
        <h2 className="section-heading text-white mb-6">
          Live Tracking
        </h2>
        <p className="text-white/60 text-lg font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
          Track us in real time during the ride. Watch our progress, see where we&apos;ve ground to a halt, and judge us for our pace accordingly.
        </p>

        {/* TODO: Replace href with real Garmin/Wahoo/Komoot share link */}
        <a
          href={siteConfig.trackerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-crimson font-black uppercase tracking-widest px-12 py-5 text-xl border-2 border-white hover:bg-crimson hover:text-white transition-all duration-200"
        >
          Open Live Tracker
        </a>

        <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-6">
          {/* TODO: Specify GPS tracker platform (Garmin, Wahoo, Komoot, etc.) once confirmed */}
          Live from May 2025 · GPS tracker TBC
        </p>
      </div>
    </section>
  )
}
