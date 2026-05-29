import { useEffect } from 'react'
import Lenis from 'lenis'
import BackgroundAnimation from './components/BackgroundAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIBuild from './components/WhatIBuild'
import CaseStudy from './components/CaseStudy'
import HowItWorks from './components/HowItWorks'
import ClosingCTA from './components/ClosingCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <WhatIBuild />
          <CaseStudy />
          <HowItWorks />
          <ClosingCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
