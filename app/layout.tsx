import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'SAD Cycling — May 2025',
  description: 'A charity cycling adventure. Follow the route, support the cause.',
  openGraph: {
    title: 'SAD Cycling — May 2025',
    description: 'A charity cycling adventure. Follow the route, support the cause.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className={`${barlow.className} antialiased`}>{children}</body>
    </html>
  )
}
