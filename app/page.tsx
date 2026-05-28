import Nav from '@/components/Nav'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Hero from '@/components/Hero'
import WhatIsSad from '@/components/WhatIsSad'
import TheCharity from '@/components/TheCharity'
import WeMadeIt from '@/components/WeMadeIt'
import LiveTracking from '@/components/LiveTracking'
import TheRoute from '@/components/TheRoute'
import MeetTheRiders from '@/components/MeetTheRiders'
import PastRides from '@/components/PastRides'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Nav />
      <main>
        <Hero />
        <WhatIsSad />
        <TheCharity />
        <WeMadeIt />
        <LiveTracking />
        <TheRoute />
        <MeetTheRiders />
        <PastRides />
      </main>
      <Footer />
    </>
  )
}
