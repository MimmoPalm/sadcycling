import { siteConfig } from '@/lib/content'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-crimson flex flex-col items-center justify-center text-white text-center px-4">
      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="font-black uppercase tracking-[0.3em] text-white/60 text-sm md:text-base mb-4">
          May 2025 · Charity Cycling Expedition
        </p>
        <h1 className="font-black uppercase tracking-tight leading-none text-7xl md:text-[10rem] mb-6">
          SAD<br />CYCLING
        </h1>
        <p className="text-xl md:text-2xl font-semibold uppercase tracking-widest text-white/80 mb-10 max-w-2xl mx-auto">
          {siteConfig.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* TODO: Replace href with real donation URL */}
          <a href={siteConfig.donateUrl} className="btn-primary">
            Donate Now
          </a>
          <a href="#route" className="btn-outline">
            Follow the Route
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}
