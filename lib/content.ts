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
