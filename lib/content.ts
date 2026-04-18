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
    bio: "Will suffer more than anyone. Won't complain — he's just quietly managing seventeen other life crises from his phone. He'd honestly rather be on his couch in East London sorting them out.",
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
    bio: 'Insists on a proper bed, a hot shower, and a functioning coffee machine. Has not yet explained why he keeps coming back.',
    image: '/julien.jpeg',
  },
  {
    name: 'Frezz',
    nickname: 'The Wajone',
    bio: "The youngest. From Naples. The nickname is untranslatable but everyone from Naples understands it. Our mascot. Don't tell him that.",
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
    city: 'Paris',
    image: '/paris.jpeg',
    flavour:
      'Tired legs. Questionable decisions. A finish line that kept moving. We made it anyway, and the croissants were worth every climb.',
    link: STRAVA_URL,
  },
  {
    city: 'Amsterdam',
    image: '/amsterdam.jpeg',
    flavour:
      'Flat roads, strong headwinds, and the collective delusion that cycling to Amsterdam was somehow a good idea. It was.',
    link: STRAVA_URL,
  },
]
