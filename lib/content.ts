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
    bio: 'In it for the food, the views, and the post-ride aperitivo. The cycling is just an inconvenience.',
    image: '/stefano.png',
  },
  {
    name: 'Aurelio',
    nickname: 'The Reluctant Martyr',
    bio: 'Does not like sport. This is grimly accurate. Will suffer more than anyone and complain least.',
    image: '/aurelio.jpeg',
  },
  {
    name: 'Mimmo',
    nickname: 'The Captain',
    displayNameNote: '(within graph)',
    bio: 'Organises everything, blames everyone else when it goes wrong. Keeps the wheels turning.',
    image: '/mimmo.jpeg',
  },
  {
    name: 'Julian',
    nickname: 'The Spoiled King',
    bio: 'Expects support vehicles, five-star hotels and a personal masseuse. Gets none of these.',
    image: '/julien.jpeg',
  },
  {
    name: 'Gigi',
    nickname: 'The Wajone',
    bio: 'Unexplainable energy. Unknown origin. Somehow always at the front.',
    image: '/gigi.heic',
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
