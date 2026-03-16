import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import '../../styles/hero.css'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.from('.hero-badge', { y: 30, opacity: 0, duration: 0.8, delay: 0.2 })
      .from('.hero-headline', { y: 40, opacity: 0, duration: 1 }, "-=0.6")
      .from('.hero-description', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.hero-trust', { opacity: 0, duration: 1 }, "-=0.4")
  }, { scope: container })

  return (
    <section ref={container} id="hero" className="hero">
      <div className="hero-content">
        {/* Badge/Pill */}
        <div className="hero-badge-container">
          <span className="hero-badge">AI Automation for Healthcare</span>
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Your Clinic Is Losing Patients
          <br />
          <span className="hero-headline-gradient">Every Night at 7pm.</span>
        </h1>

        {/* Description */}
        <p className="hero-description">
          We build AI-powered follow-up systems that respond to new inquiries instantly, re-engage no-shows
          automatically, and run 24/7 — so you never lose a patient to slow response times again.
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas">
          <a
            href="https://calendly.com/aneeqijaz99/30min"
            className="hero-cta hero-cta-primary"
            aria-label="Book a free 15-minute call"
          >
            Book a Free 15-Min Call
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('how-it-works')
            }}
            className="hero-cta hero-cta-secondary"
            aria-label="See how it works"
          >
            See How It Works
          </a>
        </div>

        {/* Stats Bar */}
        <div className="hero-trust">
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">2 Weeks</div>
              <div className="hero-stat-label">Average time to go live</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">24/7</div>
              <div className="hero-stat-label">System runs without staff</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">&lt; VA Cost</div>
              <div className="hero-stat-label">Costs less than one hire</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
