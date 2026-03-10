# SAD Cycling Website

Marketing and tracking website for the SAD Cycling charity ride, May 2025.

Built with **Next.js 16 (App Router)** + **Tailwind CSS v4**, deployed to **Vercel**.

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
│   ├── layout.tsx       # Root layout — fonts, metadata
│   ├── page.tsx         # Main page — imports all section components
│   └── globals.css      # Tailwind directives + global component classes
├── components/
│   ├── Nav.tsx          # Sticky nav with scroll-aware active links
│   ├── Hero.tsx         # Full-screen hero
│   ├── WhatIsSad.tsx    # Two-column explainer
│   ├── TheRoute.tsx     # Map embed + day cards
│   ├── SleepTracker.tsx # Accommodation timeline
│   ├── LiveTracking.tsx # GPS tracker CTA
│   ├── TheCharity.tsx   # Charity info + fundraising stats
│   ├── MeetTheRiders.tsx# Rider grid
│   ├── Merch.tsx        # Product cards
│   ├── Dispatches.tsx   # Blog/update cards
│   └── Footer.tsx       # Footer
├── lib/
│   └── content.ts       # ⭐ All editable content lives here
├── public/              # Static assets (images, fonts)
└── vercel.json          # Vercel deployment config
```

---

## Swapping Content

All site content is centralised in **`lib/content.ts`**. Edit this file to update:

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
2. Update `lib/content.ts` — set `image: '/riders/rider-one.jpg'` for each rider
3. In `components/MeetTheRiders.tsx`, replace the placeholder `<div>` with:
   ```tsx
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

- [ ] Replace donation URL in `lib/content.ts` (`donateUrl`)
- [ ] Add charity name and description (`charityName`)
- [ ] Add GPS tracker share URL (`trackerUrl`)
- [ ] Add shop URL (`shopUrl`)
- [ ] Add social media URLs (`socialInstagram`, `socialStrava`)
- [ ] Add rider photos to `public/riders/`
- [ ] Embed real Komoot/Google Maps iframe in `TheRoute.tsx`
- [ ] Update fundraising total (`currentTotal`) — or connect to live API
- [ ] Connect Dispatches to a CMS or markdown files
- [ ] Add product images for merch section
