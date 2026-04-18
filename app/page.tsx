import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatIsSad from '@/components/WhatIsSad'
import LiveTracking from '@/components/LiveTracking'
import TheCharity from '@/components/TheCharity'
import TheRoute from '@/components/TheRoute'
import MeetTheRiders from '@/components/MeetTheRiders'
import Merch from '@/components/Merch'
import PastRides from '@/components/PastRides'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIsSad />
        <TheCharity />
        <LiveTracking />
        <TheRoute />
        <MeetTheRiders />
        <Merch />
        <PastRides />
      </main>
      <Footer />
    </>
  )
}
