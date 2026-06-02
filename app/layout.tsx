import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sadcycling.com'),
  title: 'SAD Cycling — Marseille to Genoa | May 2026',
  description: '437 km. 4,377 m of climbing. 5 riders. 4 days along the French and Italian Riviera — raising money for Great Ormond Street Hospital.',
  icons: {
    icon: '/logo-item.png',
    shortcut: '/logo-item.png',
    apple: '/logo-item.png',
  },
  alternates: {
    canonical: 'https://sadcycling.com/',
  },
  openGraph: {
    title: 'SAD Cycling — Marseille to Genoa | May 2026',
    description: '437 km. 4,377 m of climbing. 5 riders. 4 days along the French and Italian Riviera — raising money for Great Ormond Street Hospital.',
    url: 'https://sadcycling.com',
    siteName: 'SAD Cycling',
    type: 'website',
    images: [
      {
        url: '/logo-item.png',
        width: 1200,
        height: 630,
        alt: 'SAD Cycling — Marseille to Genoa 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAD Cycling — Marseille to Genoa | May 2026',
    description: '437 km. 4,377 m of climbing. 5 riders. 4 days along the French and Italian Riviera — raising money for Great Ormond Street Hospital.',
    images: ['/logo-item.png'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SAD Cycling',
  url: 'https://sadcycling.com',
  description: '437 km. 4,377 m of climbing. 5 riders cycling from Marseille to Genoa in May 2026 for Great Ormond Street Hospital.',
  publisher: {
    '@type': 'Organization',
    name: 'SAD Cycling',
    url: 'https://sadcycling.com',
  },
  inLanguage: 'en',
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SAD Cycling',
  alternateName: 'Stefano Aurelio Domenico Cycling',
  url: 'https://sadcycling.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sadcycling.com/logo-item.png',
    contentUrl: 'https://sadcycling.com/logo-item.png',
  },
  description: 'Three Italian Londoners — Stefano, Aurelio, and Domenico — who ride long-distance charity cycling expeditions every May. Past rides: London to Paris (2024), London to Amsterdam (2025).',
  foundingDate: '2024',
  member: [
    { '@type': 'Person', name: 'Stefano' },
    { '@type': 'Person', name: 'Aurelio' },
    { '@type': 'Person', name: 'Domenico', alternateName: 'Mimmo' },
    { '@type': 'Person', name: 'Julien' },
    { '@type': 'Person', name: 'Frezz' },
  ],
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'SAD Cycling 2026 — Marseille to Genoa',
  description: 'A 4-day charity cycling expedition from Marseille to Genoa along the French and Italian Riviera. 437 km, 4,377 m of climbing. Raising funds for Great Ormond Street Hospital.',
  url: 'https://sadcycling.com',
  startDate: '2026-05-20',
  endDate: '2026-05-23',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: [
    {
      '@type': 'Place',
      name: 'Marseille (Start)',
      address: { '@type': 'PostalAddress', addressLocality: 'Marseille', addressCountry: 'FR' },
      geo: { '@type': 'GeoCoordinates', latitude: 43.2965, longitude: 5.3698 },
    },
    {
      '@type': 'Place',
      name: 'Genoa (Finish)',
      address: { '@type': 'PostalAddress', addressLocality: 'Genoa', addressCountry: 'IT' },
      geo: { '@type': 'GeoCoordinates', latitude: 44.4056, longitude: 8.9463 },
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'SAD Cycling',
    url: 'https://sadcycling.com',
  },
  performer: [
    { '@type': 'Person', name: 'Stefano', description: 'The Hedonist' },
    { '@type': 'Person', name: 'Aurelio', description: 'The Phoenix' },
    { '@type': 'Person', name: 'Domenico', alternateName: 'Mimmo', description: 'The Captain' },
    { '@type': 'Person', name: 'Julien', description: 'The Two Mains King' },
    { '@type': 'Person', name: 'Frezz', description: 'The Ride Jockey' },
  ],
  sport: 'Cycling',
  image: 'https://sadcycling.com/logo-item.png',
  isAccessibleForFree: true,
  potentialAction: {
    '@type': 'DonateAction',
    name: 'Donate to Great Ormond Street Hospital',
    recipient: {
      '@type': 'NGO',
      name: "Great Ormond Street Hospital Children's Charity",
      url: 'https://www.gosh.org/',
      identifier: '235825',
    },
  },
  subEvent: [
    {
      '@type': 'SportsEvent',
      name: 'Day 1 — Marseille to Saint-Raphaël',
      startDate: '2026-05-20',
      endDate: '2026-05-20',
      sport: 'Cycling',
      description: '162 km, 1,479 m elevation. Longest day, through the Estérel massif.',
    },
    {
      '@type': 'SportsEvent',
      name: 'Day 2 — Saint-Raphaël to Nice',
      startDate: '2026-05-21',
      endDate: '2026-05-21',
      sport: 'Cycling',
      description: "72 km, 643 m elevation. Shortest day along the Côte d'Azur.",
    },
    {
      '@type': 'SportsEvent',
      name: 'Day 3 — Nice to Alassio',
      startDate: '2026-05-22',
      endDate: '2026-05-22',
      sport: 'Cycling',
      description: '106.2 km, 1,429 m elevation. Into Italy via Monaco, Menton, and San Remo.',
    },
    {
      '@type': 'SportsEvent',
      name: 'Day 4 — Alassio to Genoa',
      startDate: '2026-05-23',
      endDate: '2026-05-23',
      sport: 'Cycling',
      description: '97.1 km, 826 m elevation. Final push along the Ligurian coast.',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </head>
      <body className={`${barlow.className} antialiased`}>
        <AnnouncementBanner />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
