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
