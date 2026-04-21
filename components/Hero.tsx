import { JUSTGIVING_URL } from '@/lib/content'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] bg-crimson flex flex-col items-center justify-center text-white text-center px-4">
      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="font-black uppercase tracking-[0.3em] text-white/60 text-sm md:text-base mb-8">
          May 2026 · Charity Cycling Expedition
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-item.png"
          alt="SAD Cycling"
          className="w-48 md:w-64 mx-auto mb-10"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={JUSTGIVING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
