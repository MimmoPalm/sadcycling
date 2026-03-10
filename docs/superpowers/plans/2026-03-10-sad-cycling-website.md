# SAD Cycling Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full single-page scrolling marketing website for SAD Cycling charity ride — 10 sections, Next.js App Router, Tailwind CSS, Vercel-ready.

**Architecture:** Static Next.js App Router site with all content centralised in `/lib/content.js`. Each section is an isolated React component. No backend — all data is static/placeholder. Nav uses IntersectionObserver for scroll-based active link highlighting.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS v3, Google Fonts (Barlow Condensed), Vercel deployment.

---

## Chunk 1: Project Scaffolding & Design System

### Task 1: Initialise Next.js project

**Files:**
- Create: `package.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.js`, `app/globals.css`, `app/layout.js`, `app/page.js`

- [ ] **Step 1: Scaffold Next.js with Tailwind**

```bash
cd ~/sadcycling
npx create-next-app@latest . --app --tailwind --eslint --src-dir=no --import-alias="@/*" --yes 2>&1 | tail -20
```

- [ ] **Step 2: Verify dev server starts**

```bash
cd ~/sadcycling && npm run dev &
sleep 5 && curl -s http://localhost:3000 | head -20
pkill -f "next dev"
```
Expected: HTML response from Next.js default page

- [ ] **Step 3: Commit baseline scaffold**

```bash
cd ~/sadcycling
git add -A
git commit -m "chore: scaffold Next.js + Tailwind project"
```

---

### Task 2: Configure Tailwind design system & global styles

**Files:**
- Modify: `tailwind.config.js`
- Modify: `app/globals.css`

- [ ] **Step 1: Extend Tailwind config with brand colours and fonts**

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#8B0000',
        'crimson-dark': '#6B0000',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Set up global CSS**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Barlow Condensed', sans-serif;
}

@layer components {
  .section-heading {
    @apply text-5xl md:text-7xl font-black uppercase tracking-tight leading-none;
  }
  .btn-primary {
    @apply inline-block bg-crimson text-white font-black uppercase tracking-widest px-8 py-4 text-lg border-2 border-crimson hover:bg-white hover:text-crimson transition-all duration-200;
  }
  .btn-outline {
    @apply inline-block bg-transparent text-white font-black uppercase tracking-widest px-8 py-4 text-lg border-2 border-white hover:bg-white hover:text-crimson transition-all duration-200;
  }
}
```

- [ ] **Step 3: Update root layout with Google Fonts and metadata**

Replace `app/layout.js` with:

```js
import { Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata = {
  title: 'SAD Cycling — May 2025',
  description: 'A charity cycling adventure. Follow the route, support the cause.',
  openGraph: {
    title: 'SAD Cycling — May 2025',
    description: 'A charity cycling adventure. Follow the route, support the cause.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className={`${barlow.className} antialiased`}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 4: Commit design system**

```bash
cd ~/sadcycling
git add -A
git commit -m "feat: design system — brand colours, fonts, global styles"
```

---

### Task 3: Create content layer

**Files:**
- Create: `lib/content.js`

- [ ] **Step 1: Write centralised content file**

Create `lib/content.js`:

```js
// ============================================================
// SAD CYCLING — CENTRAL CONTENT FILE
// Edit this file to update all site content.
// ============================================================

export const siteConfig = {
  name: 'SAD Cycling',
  tagline: 'Suffering for a good cause since 2025',
  // TODO: Update with real charity details
  charityName: 'Charity Name TBC',
  charityUrl: '#', // TODO: Replace with real donation URL
  donateUrl: '#',  // TODO: Replace with JustGiving / fundraising URL
  shopUrl: '#',    // TODO: Replace with Printify or merch shop URL
  trackerUrl: '#', // TODO: Replace with Garmin/Wahoo live share URL
  socialInstagram: '#', // TODO: Add Instagram URL
  socialStrava: '#',    // TODO: Add Strava club URL
  fundraisingGoal: '£10,000',
  currentTotal: '£3,420',   // TODO: Replace with live figure or embed
  numberOfRiders: 5,
}

export const routeDays = [
  { day: 1, start: 'London', end: 'Brighton', distance: 85, elevation: 1200 },
  { day: 2, start: 'Brighton', end: 'Eastbourne', distance: 72, elevation: 980 },
  { day: 3, start: 'Eastbourne', end: 'Hastings', distance: 60, elevation: 1100 },
  { day: 4, start: 'Hastings', end: 'Folkestone', distance: 78, elevation: 1350 },
  { day: 5, start: 'Folkestone', end: 'Dover', distance: 45, elevation: 650 },
  { day: 6, start: 'Dover', end: 'Finish Line', distance: 95, elevation: 1500 },
]

export const sleepTracker = [
  { night: 1, date: '12 May 2025', location: 'Brighton', accommodation: 'The Seasider Inn', status: 'CONFIRMED' },
  { night: 2, date: '13 May 2025', location: 'Eastbourne', accommodation: 'Grand Hotel Eastbourne', status: 'CONFIRMED' },
  { night: 3, date: '14 May 2025', location: 'Hastings', accommodation: 'TBC', status: 'TBC' },
  { night: 4, date: '15 May 2025', location: 'Folkestone', accommodation: 'Channel View B&B', status: 'CONFIRMED' },
  { night: 5, date: '16 May 2025', location: 'Dover', accommodation: 'TBC', status: 'TBC' },
  { night: 6, date: '17 May 2025', location: 'Finish', accommodation: 'Home', status: 'CONFIRMED' },
]

export const riders = [
  { name: 'Rider One', nickname: 'The Sufferer', bio: 'Has never finished a sportive but owns 6 bikes', image: null },
  { name: 'Rider Two', nickname: 'The Climber', bio: 'Claims to love hills. Has never seen a hill.', image: null },
  { name: 'Rider Three', nickname: 'The Navigator', bio: 'Once got lost on a turbo trainer', image: null },
  { name: 'Rider Four', nickname: 'The Mechanic', bio: 'Fixes everyone else\'s bikes. Walks everywhere.', image: null },
  { name: 'Rider Five', nickname: 'The Domestique', bio: 'Carries everyone\'s snacks. Eats them too.', image: null },
]

export const merch = [
  { name: 'SAD Cycling Jersey', price: '£65', description: 'Full-zip race cut. Look fast, go slow.', image: null },
  { name: 'Suffer More Cap', price: '£22', description: 'Cycling cap. One size. No excuses.', image: null },
  { name: 'Bib Shorts', price: '£80', description: 'Because chamois matters. Trust us.', image: null },
  { name: 'Water Bottle', price: '£15', description: '750ml. Holds water. Sometimes wine.', image: null },
]

export const dispatches = [
  {
    date: '1 March 2025',
    title: 'Why Are We Doing This?',
    excerpt: 'A question we ask ourselves daily. The honest answer: no one really knows. But the bikes are bought and the legs are (vaguely) trained.',
    slug: '#', // TODO: Link to blog post or CMS entry
  },
  {
    date: '10 February 2025',
    title: 'Training Diary: Week 4',
    excerpt: 'Four weeks in. One abandoned ride, two punctures and a very public fall in a car park. Progress.',
    slug: '#',
  },
  {
    date: '20 January 2025',
    title: 'Route Revealed',
    excerpt: 'We\'ve mapped the route. It\'s longer than planned. There are more hills than we hoped. We\'re doing it anyway.',
    slug: '#',
  },
]
```

- [ ] **Step 2: Commit content layer**

```bash
cd ~/sadcycling
git add lib/content.js
git commit -m "feat: centralised content layer in lib/content.js"
```

---

## Chunk 2: Navigation & Hero

### Task 4: Sticky Nav component

**Files:**
- Create: `components/Nav.js`

- [ ] **Step 1: Create Nav with IntersectionObserver scroll tracking**

Create `components/Nav.js`:

```js
'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/lib/content'

const navLinks = [
  { label: 'What', href: '#what' },
  { label: 'Route', href: '#route' },
  { label: 'Sleep', href: '#sleep' },
  { label: 'Track', href: '#track' },
  { label: 'Charity', href: '#charity' },
  { label: 'Riders', href: '#riders' },
  { label: 'Merch', href: '#merch' },
  { label: 'Donate', href: siteConfig.donateUrl },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-crimson shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-black uppercase text-white text-xl tracking-widest">
          SAD Cycling
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-bold uppercase text-sm tracking-widest transition-colors duration-200 ${
                active === link.href.replace('#', '')
                  ? 'text-white border-b-2 border-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Commit Nav**

```bash
cd ~/sadcycling
git add components/Nav.js
git commit -m "feat: sticky nav with scroll-based active link highlighting"
```

---

### Task 5: Hero section

**Files:**
- Create: `components/Hero.js`

- [ ] **Step 1: Create Hero component**

Create `components/Hero.js`:

```js
import { siteConfig } from '@/lib/content'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-crimson flex flex-col items-center justify-center text-white text-center px-4">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="font-black uppercase tracking-[0.3em] text-white/60 text-sm md:text-base mb-4">
          May 2025 · Charity Cycling Expedition
        </p>
        <h1 className="section-heading text-7xl md:text-[10rem] leading-none mb-6">
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
```

- [ ] **Step 2: Commit Hero**

```bash
cd ~/sadcycling
git add components/Hero.js
git commit -m "feat: hero section — full screen with CTAs"
```

---

## Chunk 3: Content Sections 2–5

### Task 6: What Is SAD Cycling? section

**Files:**
- Create: `components/WhatIsSad.js`

- [ ] **Step 1: Create two-column section**

Create `components/WhatIsSad.js`:

```js
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
              SAD stands for nothing. That's the joke. Actually, it stands for several things, depending on who you ask and how many miles into the ride they are.
            </p>
            <p>
              Five friends. Six days. Several hundred kilometres of coastal roads, headwinds, and roadside café stops that take far longer than planned. This is not a race. Nobody is winning. The only competition is who can complain most convincingly.
            </p>
            <p>
              Oh, and we're raising money for an excellent cause along the way. Because suffering is more bearable when it means something.
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
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/WhatIsSad.js
git commit -m "feat: what is sad cycling section — two-column layout"
```

---

### Task 7: The Route section

**Files:**
- Create: `components/TheRoute.js`

- [ ] **Step 1: Create route section with map embed and day cards**

Create `components/TheRoute.js`:

```js
import { routeDays } from '@/lib/content'

export default function TheRoute() {
  return (
    <section id="route" className="bg-crimson py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-4">
          The Journey
        </p>
        <h2 className="section-heading text-white mb-12">
          The Route
        </h2>

        {/* Map embed placeholder */}
        {/* TODO: Replace with real Komoot or Google Maps embed */}
        <div className="w-full h-96 bg-crimson-dark border-2 border-white/20 flex items-center justify-center mb-16">
          <div className="text-center text-white/50">
            <p className="font-black uppercase tracking-widest text-lg mb-2">Map Embed TBC</p>
            <p className="text-sm">
              Replace this div with a Komoot or Google Maps iframe.<br />
              Example: &lt;iframe src="https://www.komoot.com/tour/..." /&gt;
            </p>
          </div>
        </div>

        {/* Day-by-day cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routeDays.map((day) => (
            <div key={day.day} className="bg-white/10 border border-white/20 p-6 hover:bg-white/15 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white text-crimson font-black text-2xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {day.day}
                </span>
                <span className="text-white/60 font-bold uppercase tracking-widest text-xs">Day {day.day}</span>
              </div>
              <div className="text-white font-black text-xl uppercase mb-1">
                {day.start}
              </div>
              <div className="text-white/60 font-bold text-sm uppercase tracking-widest mb-4">
                → {day.end}
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="text-white font-black text-2xl">{day.distance}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-bold">km</div>
                </div>
                <div>
                  <div className="text-white font-black text-2xl">{day.elevation}</div>
                  <div className="text-white/50 text-xs uppercase tracking-widest font-bold">m elev.</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/TheRoute.js
git commit -m "feat: route section — map placeholder + day-by-day cards"
```

---

### Task 8: Sleep Tracker section

**Files:**
- Create: `components/SleepTracker.js`

- [ ] **Step 1: Create sleep tracker timeline**

Create `components/SleepTracker.js`:

```js
import { sleepTracker } from '@/lib/content'

const statusStyles = {
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
                  <span className={`inline-block px-4 py-2 text-xs font-black uppercase tracking-widest self-start sm:self-center flex-shrink-0 ${statusStyles[night.status] || 'bg-gray-200 text-gray-700'}`}>
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
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/SleepTracker.js
git commit -m "feat: sleep tracker section — timeline with status badges"
```

---

### Task 9: Live Tracking section

**Files:**
- Create: `components/LiveTracking.js`

- [ ] **Step 1: Create live tracking CTA section**

Create `components/LiveTracking.js`:

```js
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
          Track us in real time during the ride. Watch our progress, see where we've ground to a halt, and judge us for our pace accordingly.
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
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/LiveTracking.js
git commit -m "feat: live tracking section — GPS CTA with placeholder URL"
```

---

## Chunk 4: Content Sections 6–10 & Assembly

### Task 10: The Charity section

**Files:**
- Create: `components/TheCharity.js`

- [ ] **Step 1: Create charity section with fundraising stats**

Create `components/TheCharity.js`:

```js
import { siteConfig } from '@/lib/content'

export default function TheCharity() {
  return (
    <section id="charity" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
              Why We Ride
            </p>
            {/* TODO: Update charity name */}
            <h2 className="section-heading text-crimson mb-8">
              {siteConfig.charityName}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-10">
              <p>
                {/* TODO: Replace with real charity description */}
                We're riding in support of an organisation doing genuinely important work in the community. Every kilometre we suffer is a kilometre ridden in their name.
              </p>
              <p>
                Your donation — however small — directly funds programmes that make a real difference. And it makes our legs hurt slightly less, psychologically.
              </p>
            </div>
            {/* TODO: Replace href with real donation URL */}
            <a href={siteConfig.donateUrl} className="btn-primary">
              Donate Now
            </a>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-crimson p-8 text-center">
              <div className="text-6xl font-black text-crimson mb-2">{siteConfig.fundraisingGoal}</div>
              <div className="text-gray-500 font-black uppercase tracking-widest text-sm">Target</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-off-white p-6 text-center">
                <div className="text-4xl font-black text-crimson mb-2">{siteConfig.currentTotal}</div>
                <div className="text-gray-500 font-black uppercase tracking-widest text-xs">Raised so far</div>
                {/* TODO: Connect to live fundraising total via API or embed */}
              </div>
              <div className="bg-off-white p-6 text-center">
                <div className="text-4xl font-black text-crimson mb-2">{siteConfig.numberOfRiders}</div>
                <div className="text-gray-500 font-black uppercase tracking-widest text-xs">Riders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/TheCharity.js
git commit -m "feat: charity section — stats and donation CTA"
```

---

### Task 11: Meet the Riders section

**Files:**
- Create: `components/MeetTheRiders.js`

- [ ] **Step 1: Create riders grid**

Create `components/MeetTheRiders.js`:

```js
import { riders } from '@/lib/content'

export default function MeetTheRiders() {
  return (
    <section id="riders" className="bg-crimson py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-white/60 font-black uppercase tracking-widest text-sm mb-4">
          The Team
        </p>
        <h2 className="section-heading text-white mb-16">
          Meet the<br />Riders
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {riders.map((rider) => (
            <div key={rider.name} className="text-center group">
              {/* TODO: Replace with real rider photo — recommended 400×400px circular crop */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/10 border-2 border-white/30 mx-auto mb-4 flex items-center justify-center group-hover:border-white transition-colors">
                <span className="text-4xl">🚴</span>
              </div>
              <div className="text-white font-black uppercase text-lg leading-tight mb-1">
                {rider.name}
              </div>
              <div className="text-white/60 font-bold uppercase text-xs tracking-widest mb-3">
                "{rider.nickname}"
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                {rider.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/MeetTheRiders.js
git commit -m "feat: riders section — circular photo grid with bios"
```

---

### Task 12: Merch section

**Files:**
- Create: `components/Merch.js`

- [ ] **Step 1: Create merch product cards**

Create `components/Merch.js`:

```js
import { merch, siteConfig } from '@/lib/content'

export default function Merch() {
  return (
    <section id="merch" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          Look the Part
        </p>
        <h2 className="section-heading text-crimson mb-16">
          Official Merch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merch.map((item) => (
            <div key={item.name} className="group border-2 border-gray-200 hover:border-crimson transition-colors">
              {/* TODO: Replace with real product images from Printify/shop */}
              <div className="aspect-square bg-off-white flex items-center justify-center border-b-2 border-gray-200 group-hover:border-crimson transition-colors">
                <div className="text-center text-gray-400">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-xs font-bold uppercase tracking-widest">Product image TBC</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-lg font-black uppercase text-gray-900 mb-1">{item.name}</div>
                <div className="text-gray-500 text-sm mb-4">{item.description}</div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-crimson">{item.price}</span>
                  {/* TODO: Replace href with real shop URL (Printify, Shopify, etc.) */}
                  <a
                    href={siteConfig.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-crimson text-white font-black uppercase tracking-widest px-4 py-2 text-sm hover:bg-crimson-dark transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/Merch.js
git commit -m "feat: merch section — product cards with buy buttons"
```

---

### Task 13: Dispatches section

**Files:**
- Create: `components/Dispatches.js`

- [ ] **Step 1: Create dispatches/blog cards**

Create `components/Dispatches.js`:

```js
import { dispatches } from '@/lib/content'

export default function Dispatches() {
  return (
    <section id="dispatches" className="bg-gray-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-crimson font-black uppercase tracking-widest text-sm mb-4">
          From the Road
        </p>
        <h2 className="section-heading text-white mb-4">
          Dispatches
        </h2>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-16">
          {/* TODO: Connect to CMS (Contentful, Sanity, Notion, or local markdown) */}
          Updates, dispatches and training diaries · Content via [CMS TBC]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dispatches.map((post) => (
            <article key={post.title} className="border border-white/10 p-8 hover:border-white/30 transition-colors group">
              <div className="text-crimson font-black uppercase tracking-widest text-xs mb-3">
                {post.date}
              </div>
              <h3 className="text-white font-black uppercase text-xl md:text-2xl mb-4 leading-tight group-hover:text-crimson transition-colors">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              {/* TODO: Replace href with real post URL */}
              <a
                href={post.slug}
                className="text-white font-black uppercase tracking-widest text-xs border-b-2 border-crimson pb-0.5 hover:text-crimson transition-colors"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/Dispatches.js
git commit -m "feat: dispatches section — blog cards with placeholders"
```

---

### Task 14: Footer

**Files:**
- Create: `components/Footer.js`

- [ ] **Step 1: Create footer**

Create `components/Footer.js`:

```js
import { siteConfig } from '@/lib/content'

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

          {/* Social links */}
          <div>
            <div className="font-black uppercase text-white/60 tracking-widest text-xs mb-4">
              Follow the Suffering
            </div>
            <div className="space-y-2">
              {/* TODO: Add real social URLs */}
              <a href={siteConfig.socialInstagram} className="block text-white font-bold uppercase tracking-widest text-sm hover:text-white/60 transition-colors">
                Instagram
              </a>
              <a href={siteConfig.socialStrava} className="block text-white font-bold uppercase tracking-widest text-sm hover:text-white/60 transition-colors">
                Strava
              </a>
            </div>
          </div>

          {/* Donate CTA */}
          <div>
            <div className="font-black uppercase text-white/60 tracking-widest text-xs mb-4">
              Support the Cause
            </div>
            {/* TODO: Replace href with real donation URL */}
            <a href={siteConfig.donateUrl} className="btn-outline inline-block">
              Donate Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
            © 2025 SAD Cycling. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-bold">
            Built with ❤️ and sore legs
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add components/Footer.js
git commit -m "feat: footer — wordmark, social links, donation CTA"
```

---

### Task 15: Assemble main page

**Files:**
- Modify: `app/page.js`

- [ ] **Step 1: Import and compose all sections**

Replace `app/page.js` with:

```js
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatIsSad from '@/components/WhatIsSad'
import TheRoute from '@/components/TheRoute'
import SleepTracker from '@/components/SleepTracker'
import LiveTracking from '@/components/LiveTracking'
import TheCharity from '@/components/TheCharity'
import MeetTheRiders from '@/components/MeetTheRiders'
import Merch from '@/components/Merch'
import Dispatches from '@/components/Dispatches'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIsSad />
        <TheRoute />
        <SleepTracker />
        <LiveTracking />
        <TheCharity />
        <MeetTheRiders />
        <Merch />
        <Dispatches />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify build succeeds**

```bash
cd ~/sadcycling && npm run build 2>&1 | tail -30
```
Expected: `✓ Compiled successfully` with no errors

- [ ] **Step 3: Commit page assembly**

```bash
cd ~/sadcycling
git add app/page.js
git commit -m "feat: assemble all sections into main page"
```

---

## Chunk 5: Vercel Config, README & Final Push

### Task 16: Vercel configuration

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Create vercel.json**

Create `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/sadcycling
git add vercel.json
git commit -m "chore: add vercel.json for deployment config"
```

---

### Task 17: README

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write README**

Create `README.md` with these sections (full content):

```markdown
# SAD Cycling Website

Marketing and tracking website for the SAD Cycling charity ride, May 2025.

Built with **Next.js 14 (App Router)** + **Tailwind CSS**, deployed to **Vercel**.

---

## Running Locally

**Prerequisites:** Node.js 18+, npm

```bash
git clone https://github.com/MimmoPalm/sadcycling.git
cd sadcycling
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
sadcycling/
├── app/
│   ├── layout.js        # Root layout — fonts, metadata
│   ├── page.js          # Main page — imports all section components
│   └── globals.css      # Tailwind directives + global component classes
├── components/
│   ├── Nav.js           # Sticky nav with scroll-aware active links
│   ├── Hero.js          # Full-screen hero
│   ├── WhatIsSad.js     # Two-column explainer
│   ├── TheRoute.js      # Map embed + day cards
│   ├── SleepTracker.js  # Accommodation timeline
│   ├── LiveTracking.js  # GPS tracker CTA
│   ├── TheCharity.js    # Charity info + fundraising stats
│   ├── MeetTheRiders.js # Rider grid
│   ├── Merch.js         # Product cards
│   ├── Dispatches.js    # Blog/update cards
│   └── Footer.js        # Footer
├── lib/
│   └── content.js       # ⭐ All editable content lives here
├── public/              # Static assets (images, fonts)
└── vercel.json          # Vercel deployment config
```

---

## Swapping Content

All site content is centralised in **`lib/content.js`**. Edit this file to update:

- Charity name and donation URL
- Rider names, nicknames, bios, and photos
- Route day data (start, end, distance, elevation)
- Sleep tracker locations and accommodation
- Live tracker URL
- Shop/merch URLs
- Dispatches/blog posts
- Social media links
- Fundraising goal and current total

Search for `// TODO` comments throughout the codebase for items that need real URLs, images, or copy.

---

## Adding Rider Photos

1. Add image files to `public/riders/` (e.g. `public/riders/rider-one.jpg`)
2. Update `lib/content.js` — set `image: '/riders/rider-one.jpg'` for each rider
3. In `components/MeetTheRiders.js`, replace the placeholder `<div>` with:
   ```jsx
   import Image from 'next/image'
   // ...
   <Image src={rider.image} alt={rider.name} width={144} height={144} className="rounded-full object-cover" />
   ```

---

## Deploying to Vercel

### First Deploy

1. Push the repo to GitHub (already done at `https://github.com/MimmoPalm/sadcycling`)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the `sadcycling` GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

Vercel will auto-deploy on every push to `main`.

### Custom Domain Setup

**Via Vercel Dashboard:**

1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g. `sadcycling.cc`)
3. Vercel provides two options:

**Option A — CNAME (recommended for subdomains like `www`):**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
```

**Option B — A record (for apex/root domain):**
```
Type:  A
Name:  @
Value: 76.76.21.21
```

Add both to point both `sadcycling.cc` and `www.sadcycling.cc` to Vercel.

DNS changes can take up to 48 hours to propagate. Vercel auto-provisions an SSL certificate once DNS is verified.

---

## Key TODOs Before Launch

- [ ] Replace donation URL in `lib/content.js` (`donateUrl`)
- [ ] Add charity name and description (`charityName`)
- [ ] Add GPS tracker share URL (`trackerUrl`)
- [ ] Add shop URL (`shopUrl`)
- [ ] Add social media URLs (`socialInstagram`, `socialStrava`)
- [ ] Add rider photos to `public/riders/`
- [ ] Embed real Komoot/Google Maps iframe in `TheRoute.js`
- [ ] Update fundraising total (`currentTotal`) — or connect to live API
- [ ] Connect Dispatches to a CMS or markdown files
- [ ] Add product images for merch section
```

- [ ] **Step 2: Commit README**

```bash
cd ~/sadcycling
git add README.md
git commit -m "docs: README with setup, structure, content guide and deploy steps"
```

---

### Task 18: Final build check & push

- [ ] **Step 1: Run final build**

```bash
cd ~/sadcycling && npm run build 2>&1
```
Expected: Build succeeds with no errors or type warnings.

- [ ] **Step 2: Push to GitHub**

```bash
cd ~/sadcycling && git push origin main
```

- [ ] **Step 3: Confirm remote**

```bash
cd ~/sadcycling && git log --oneline -15
```
Expected: 15+ commits showing all features built progressively.
