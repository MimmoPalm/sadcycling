// ============================================================
// SAD CYCLING — CENTRAL CONTENT FILE
// Edit this file to update all site content.
// ============================================================

export const WAHOO_TRACKING_URL = 'https://www.wahooligan.com/users/live/-3Hy8dbaWidt3w4Qaoze2w'
export const JUSTGIVING_URL = 'https://www.justgiving.com/page/sadcycle-2026-for-gosh'
export const STRAVA_URL = 'https://strava.app.link/Fp4l1sjSr2b'
export const RIDEWITHGPS_URL = 'https://ridewithgps.com/collections/6160629'
export const YEAR_STARTED = '2024'

export const siteConfig = {
  name: 'SAD Cycling',
  tagline: 'Suffering for a good cause since 2024',
  charityName: 'Great Ormond Street Hospital',
  charityUrl: 'https://www.gosh.nhs.uk/',
  donateUrl: JUSTGIVING_URL,
  shopUrl: '#', // TODO: Replace with Printify or merch shop URL
  trackerUrl: WAHOO_TRACKING_URL,
  socialStrava: STRAVA_URL,
  fundraisingGoal: '£10,000',
  currentTotal: '£3,420', // TODO: Replace with live figure or embed
  numberOfRiders: 5,
}

export const routeDays = [
  {
    day: 1,
    date: 'Wed 20 May',
    start: 'Marseille',
    end: 'Saint-Raphaël',
    distance: 162,
    elevation: 1479,
    note: 'Longest and hardest day. Big climb through the Estérel. Early start essential.',
  },
  {
    day: 2,
    date: 'Thu 21 May',
    start: 'Saint-Raphaël',
    end: 'Nice',
    distance: 72,
    elevation: 643,
    note: 'Shortest day — enjoy the Riviera, arrive early, explore Nice in the evening.',
  },
  {
    day: 3,
    date: 'Fri 22 May',
    start: 'Nice',
    end: 'Alassio',
    distance: 106.2,
    elevation: 1429,
    note: 'Crosses into Italy via Monaco, Menton, San Remo.',
  },
  {
    day: 4,
    date: 'Sat 23 May',
    start: 'Alassio',
    end: 'Genoa',
    distance: 97.1,
    elevation: 826,
    note: 'Final push along the Ligurian coast. Celebratory dinner in Genoa!',
  },
]

export const riders = [
  {
    name: 'Stefano',
    nickname: 'The Hedonist',
    bio: 'In it for the food, the views, and the post-ride Aperol Spritz. Has been known to scout restaurants before checking the elevation profile.',
    image: '/stefano.jpeg',
  },
  {
    name: 'Aurelio',
    nickname: 'The Reluctant Martyr',
    bio: "Has had more encounters with tarmac than any one person should. Shows up every year anyway — slightly patched up — and keeps us entertained with his existential questions.",
    image: '/aurelio.jpeg',
  },
  {
    name: 'Domenico',
    displayName: 'Domenico (aka Mimmo)',
    nickname: 'The Captain',
    bio: 'Planned the route, booked the hotels, and takes full responsibility for everything that goes right. When it goes wrong, he blames the weather, the GPS, and increasingly, artificial intelligence.',
    image: '/mimmo.jpeg',
  },
  {
    name: 'Julien',
    nickname: 'The Spoiled King',
    bio: "Requires a comfortable bed, double mains, and loads of espresso before 8am. He's also a teddy bear and will give you the warmest hug at the finish line.",
    image: '/julien.jpeg',
  },
  {
    name: 'Frezz',
    nickname: 'The Ride Jockey',
    bio: "The youngest of the crew. From Naples. When he's not on a bike he's behind the decks — and he brings the same energy to both. Our unofficial mascot.",
    image: '/frezz.png',
  },
]

export const merch = [
  {
    name: 'SAD Cycling Jersey',
    price: '£65',
    description: 'Full-zip race cut. Look fast, go slow.',
    image: null,
    shopUrl: '#', // TODO: Replace with real Printify product URL
  },
]

export const pastRides = [
  {
    city: 'London to Paris',
    year: 2024,
    image: '/paris.jpeg',
    flavour:
      'Four hundred kilometres through the English and French countryside, following the Avenue Verte. The roads were quiet. The legs were not. Paris, as always, was worth every kilometre.',
    link: 'https://strava.app.link/Fp4l1sjSr2b',
  },
  {
    city: 'London to Amsterdam',
    year: 2025,
    image: '/amsterdam.jpeg',
    flavour:
      'Nearly 500 kilometres through four countries — the UK, France, Belgium, and the Netherlands. It rained every single day. Nobody stopped. Amsterdam welcomed us the only way it knows how.',
    link: 'https://strava.app.link/Fp4l1sjSr2b',
  },
]
