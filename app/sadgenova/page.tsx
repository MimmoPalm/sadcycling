'use client'

import { useEffect, useRef } from 'react'

const stops = [
  {
    number: 1,
    name: 'Basilica della Santissima Annunziata del Vastato',
    tag: 'Churches',
    note: "Start here — one of the most spectacular Baroque interiors in Italy. Many say it beats San Lorenzo. Free entry, opens 7:30am.",
    coords: '44.41416,8.928363',
  },
  {
    number: 2,
    name: 'Via del Campo',
    tag: 'Caruggi',
    note: "Legendary street immortalised by Fabrizio De André. Soak up the caruggi atmosphere. A Genova classic.",
    coords: '44.412476,8.928153',
  },
  {
    number: 3,
    name: 'Spianata di Castelletto',
    tag: 'Views',
    note: "Best panoramic view over the city and port. Take the Ascensore Castelletto Levante (lift) up — don't walk it.",
    coords: '44.413348,8.933036',
  },
  {
    number: 4,
    name: 'Via Garibaldi — Musei di Strada Nuova (Palazzo Rosso)',
    tag: 'Museums',
    note: "UNESCO-listed street of palaces. Palazzo Rosso has Van Dyck, Veronese and a rooftop terrace with sea views. Closed Mondays.",
    coords: '44.411133,8.932106',
  },
  {
    number: 5,
    name: 'Palazzo Spinola National Gallery',
    tag: 'Museums',
    note: "A nobleman's palace frozen in time — frescoed ceilings, antique furniture, great art collection. Closed Mon & Sun.",
    coords: '44.410868,8.930216',
  },
  {
    number: 6,
    name: 'Cattedrale di San Lorenzo',
    tag: 'Churches',
    note: "Genova's cathedral with its iconic black and white marble stripes. Free entry. Home of the relics of St John the Baptist.",
    coords: '44.407837,8.931084',
  },
  {
    number: 7,
    name: 'Palazzo San Giorgio',
    tag: 'History',
    note: "One of the oldest banks in the world, right by the water. Beautiful frescoed facade — a must-see near the port.",
    coords: '44.409099,8.928607',
  },
  {
    number: 8,
    name: 'Porto Antico',
    tag: 'Waterfront',
    note: "Renzo Piano-designed waterfront. Great spot for lunch — plenty of options along the port. Take a breather here.",
    coords: '44.40975,8.928329',
  },
  {
    number: 9,
    name: 'Acquario di Genova',
    tag: 'Optional',
    note: "One of Europe's largest aquariums — optional if you have time. Book online in advance. Open from 10am.",
    coords: '44.41025,8.926672',
  },
  {
    number: 10,
    name: 'Piazza Matteotti & Palazzo Ducale',
    tag: 'Piazzas',
    note: "The Doge's Palace — former seat of Genoese power, now a cultural venue. Walk through the arcade for free.",
    coords: '44.407515,8.933251',
  },
  {
    number: 11,
    name: 'Piazza De Ferrari',
    tag: 'Piazzas',
    note: "The beating heart of Genova — iconic fountain, grand architecture. Perfect afternoon coffee stop.",
    coords: '44.407181,8.934036',
  },
  {
    number: 12,
    name: 'Teatro Carlo Felice & Galleria Mazzini',
    tag: 'Culture',
    note: "Genova's opera house next to a beautiful 19th-century arcade. Perfect for a pre-dinner stroll.",
    coords: '44.408029,8.934748',
  },
  {
    number: 13,
    name: "Chiesa del Gesù (Sant'Ambrogio e Andrea)",
    tag: 'Churches',
    note: "A Jesuit Baroque gem with two Rubens paintings. Note the skeleton-tile floor. Open afternoons from 4pm.",
    coords: '44.406664,8.933015',
  },
  {
    number: 14,
    name: 'Porta Soprana',
    tag: 'History',
    note: "12th-century medieval gate near Columbus's house. Great photo stop as the light goes golden in the afternoon.",
    coords: '44.405563,8.934505',
  },
]

const tagColors: Record<string, string> = {
  Churches: 'bg-white/20 text-white',
  Museums: 'bg-white/20 text-white',
  Views: 'bg-white/20 text-white',
  Caruggi: 'bg-white/20 text-white',
  Waterfront: 'bg-white/20 text-white',
  History: 'bg-white/20 text-white',
  Piazzas: 'bg-white/20 text-white',
  Culture: 'bg-white/20 text-white',
  Optional: 'bg-white/10 text-white/60',
}

export default function SadGenovaPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = document.querySelectorAll('.stop-card')
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Dynamically load Leaflet
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload = () => {
      const L = (window as any).L
      if (!L || (document.getElementById('genova-map') as any)?._leaflet_id) return

      const map = L.map('genova-map', { zoomControl: true }).setView([44.409, 8.931], 15)

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        maxZoom: 19,
      }).addTo(map)

      const stopCoords = [
        { n: 1,  name: 'Basilica della Santissima Annunziata del Vastato', lat: 44.41416,  lng: 8.928363 },
        { n: 2,  name: 'Via del Campo',                                     lat: 44.412476, lng: 8.928153 },
        { n: 3,  name: 'Spianata di Castelletto',                           lat: 44.413348, lng: 8.933036 },
        { n: 4,  name: 'Via Garibaldi — Musei di Strada Nuova',             lat: 44.411133, lng: 8.932106 },
        { n: 5,  name: 'Palazzo Spinola National Gallery',                  lat: 44.410868, lng: 8.930216 },
        { n: 6,  name: 'Cattedrale di San Lorenzo',                         lat: 44.407837, lng: 8.931084 },
        { n: 7,  name: 'Palazzo San Giorgio',                               lat: 44.409099, lng: 8.928607 },
        { n: 8,  name: 'Porto Antico',                                      lat: 44.40975,  lng: 8.928329 },
        { n: 9,  name: 'Acquario di Genova',                                lat: 44.41025,  lng: 8.926672 },
        { n: 10, name: 'Piazza Matteotti & Palazzo Ducale',                 lat: 44.407515, lng: 8.933251 },
        { n: 11, name: 'Piazza De Ferrari',                                 lat: 44.407181, lng: 8.934036 },
        { n: 12, name: 'Teatro Carlo Felice & Galleria Mazzini',            lat: 44.408029, lng: 8.934748 },
        { n: 13, name: "Chiesa del Gesù (Sant'Ambrogio e Andrea)",          lat: 44.406664, lng: 8.933015 },
        { n: 14, name: 'Porta Soprana',                                     lat: 44.405563, lng: 8.934505 },
      ]

      // Draw route polyline
      const latlngs = stopCoords.map(s => [s.lat, s.lng] as [number, number])
      L.polyline(latlngs, { color: '#c21717', weight: 3, opacity: 0.8, dashArray: '6, 6' }).addTo(map)

      // Add numbered markers
      stopCoords.forEach((stop) => {
        const icon = L.divIcon({
          className: '',
          html: `<div style="background:#c21717;color:#fff;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:13px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.5)">${stop.n}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        })
        L.marker([stop.lat, stop.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong style="font-family:sans-serif;font-size:13px">${stop.n}. ${stop.name}</strong>`)
      })
    }
    document.head.appendChild(script)

    return () => {
      // cleanup on unmount
      const mapEl = document.getElementById('genova-map') as any
      if (mapEl && mapEl._leaflet_id) {
        const L = (window as any).L
        if (L) L.map('genova-map').remove()
      }
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#c21717] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-text-only.png"
              alt="SAD Cycling"
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="/#what" className="text-white/70 hover:text-white font-bold uppercase text-sm tracking-widest transition-colors">What</a>
            <a href="/#charity" className="text-white/70 hover:text-white font-bold uppercase text-sm tracking-widest transition-colors">Charity</a>
            <a href="/#riders" className="text-white/70 hover:text-white font-bold uppercase text-sm tracking-widest transition-colors">Riders</a>
            <a
              href="https://www.justgiving.com/page/sadcycle-2026-for-gosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-black uppercase text-sm tracking-widest border-b-2 border-white"
            >
              Donate
            </a>
          </div>
          <a href="/" className="md:hidden text-white/70 font-bold uppercase text-xs tracking-widest">← Back</a>
        </div>
      </nav>

      <main className="pt-16">
        {/* HERO */}
        <section className="relative bg-[#c21717] py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-3">
                  SAD Cycling · May 2026 · Genova
                </p>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tight text-white leading-none">
                  SAD<br />Genova
                </h1>
                <p className="text-white/80 font-bold uppercase tracking-widest text-lg mt-4">
                  Walking Tour — Centro Storico & Porto
                </p>
              </div>
              <div className="text-right">
                <div className="text-white/40 font-black uppercase text-xs tracking-widest mb-1">Starting from</div>
                <div className="text-white font-black uppercase text-xl tracking-wide">Manena Hostel</div>
                <div className="text-white/60 font-bold text-sm">Vico della Chiesa della Maddalena</div>
                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Manena+Hostel+Genova"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#c21717] font-black uppercase tracking-widest px-6 py-3 text-sm border-2 border-white hover:bg-[#c21717] hover:text-white transition-all duration-200"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 border-t border-white/20 pt-8">
              <div>
                <div className="text-4xl font-black text-white">14</div>
                <div className="text-white/60 font-bold uppercase tracking-widest text-xs">Stops</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">~6km</div>
                <div className="text-white/60 font-bold uppercase tracking-widest text-xs">On foot</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">1 day</div>
                <div className="text-white/60 font-bold uppercase tracking-widest text-xs">Full tour</div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="bg-[#111]">
          <div className="w-full h-[60vh] md:h-[70vh]" id="genova-map" />
          <div className="py-4 px-4 text-center">
            <a
              href="https://www.google.com/maps/dir/44.41416,8.928363/44.412476,8.928153/44.413348,8.933036/44.411133,8.932106/44.410868,8.930216/44.407837,8.931084/44.409099,8.928607/44.40975,8.928329/44.41025,8.926672/44.407515,8.933251/44.407181,8.934036/44.408029,8.934748/44.406664,8.933015/44.405563,8.934505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/60 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
            >
              Open full route in Google Maps →
            </a>
          </div>
        </section>

        {/* STOPS LIST */}
        <section ref={sectionRef} className="bg-[#0a0a0a] py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4">
                The Stops
              </h2>
              <p className="text-white/50 font-bold uppercase tracking-widest text-sm">
                Centro Storico · Porto Antico · Starting from Manena Hostel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stops.map((stop, i) => (
                <div
                  key={stop.number}
                  className={`stop-card opacity-0 translate-y-8 transition-all duration-500 group border border-white/10 bg-white/5 hover:bg-[#c21717]/20 hover:border-[#c21717]/60 p-6`}
                  style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#c21717] flex items-center justify-center">
                      <span className="text-white font-black text-sm">{stop.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-white font-black uppercase tracking-tight text-base leading-tight">
                          {stop.name}
                        </h3>
                        <span className={`text-xs font-black uppercase tracking-widest px-2 py-0.5 ${tagColors[stop.tag] || 'bg-white/10 text-white/60'}`}>
                          {stop.tag}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{stop.note}</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${stop.coords}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-[#c21717] group-hover:text-white/80 font-black uppercase text-xs tracking-widest transition-colors"
                      >
                        View on Maps →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical tips */}
            <div className="mt-16 border border-[#c21717]/40 bg-[#c21717]/10 p-8">
              <h3 className="text-white font-black uppercase tracking-tight text-2xl mb-6">
                Practical Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-[#c21717] font-black uppercase tracking-widest text-xs mb-2">Closed Mondays</div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Palazzo Rosso and Palazzo Spinola are both closed on Mondays. Plan accordingly.
                  </p>
                </div>
                <div>
                  <div className="text-[#c21717] font-black uppercase tracking-widest text-xs mb-2">Chiesa del Gesù</div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Opens afternoons only from 4pm. Time this stop for your return loop toward Porta Soprana.
                  </p>
                </div>
                <div>
                  <div className="text-[#c21717] font-black uppercase tracking-widest text-xs mb-2">Castelletto Lift</div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Take the Ascensore Castelletto Levante up to the Spianata. Do not walk it. You have already cycled from Marseille.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#c21717] py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/" className="text-white/70 hover:text-white font-black uppercase tracking-widest text-sm transition-colors">
              ← Back to SAD Cycling
            </a>
            <p className="text-white/60 text-xs font-bold">
              Built with ❤️ and sore legs · © 2026 SAD Cycling
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
