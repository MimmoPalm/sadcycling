export default function WhatIsSad() {
  return (
    <section id="what" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
            The Concept
          </p>
          <h2 className="section-heading text-crimson mb-8">
            What is<br />SAD Cycling?
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              SAD stands for nothing. That&apos;s the joke. Actually, it stands for several things, depending on who you ask and how many miles into the ride they are.
            </p>
            <p>
              Five friends. Six days. Several hundred kilometres of coastal roads, headwinds, and roadside café stops that take far longer than planned. This is not a race. Nobody is winning. The only competition is who can complain most convincingly.
            </p>
            <p>
              Oh, and we&apos;re raising money for an excellent cause along the way. Because suffering is more bearable when it means something.
            </p>
            <p className="font-bold text-crimson">
              {/* TODO: Add charity name once confirmed */}
              All proceeds go to [Charity Name TBC].
            </p>
          </div>
        </div>
        <div className="relative">
          {/* TODO: Replace with real photo of riders */}
          <div className="aspect-square bg-off-white border-2 border-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">🚴</div>
              <p className="font-bold uppercase tracking-widest text-sm">Rider photo TBC</p>
              <p className="text-xs mt-1">Recommended: 800×800px action shot</p>
            </div>
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-crimson -z-10" />
        </div>
      </div>
    </section>
  )
}
