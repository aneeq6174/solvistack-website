import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CONTACT } from '../../constants/contact'
import '../../styles/hero.css'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (hasAnimated || !startOnView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const startValue = 0

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(startValue + (end - startValue) * easeOutQuart)
            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated, startOnView])

  return [count, ref]
}

export function Hero() {
  const ref = useRef(null)
  const [projectsCount, projectsRef] = useCounter(50)
  const [satisfactionCount, satisfactionRef] = useCounter(98)

  return (
    <section ref={ref} id="hero" className="hero">
      <div className="hero-content">
        {/* Badge/Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hero-badge">
            ⚡ Automation-First Software House
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-headline"
        >
          AI-Powered Automation & Custom Web Systems for{' '}
          <span className="hero-headline-gradient">Scaling Businesses</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-description"
        >
          We design intelligent automation systems and high-performance web applications that help SMEs and international businesses operate smarter and scale faster.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hero-tagline"
        >
          Automation-first. Web development supports automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hero-ctas"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta hero-cta-primary"
            aria-label="Get started - Chat on WhatsApp"
          >
            Get Started
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('cta')
            }}
            className="hero-cta hero-cta-secondary"
            aria-label="Learn more - View contact section"
          >
            Learn More
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-trust"
        >
          <div className="hero-stats">
            <div className="hero-stat" ref={projectsRef}>
              <div className="hero-stat-number">{projectsCount}+</div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div className="hero-stat" ref={satisfactionRef}>
              <div className="hero-stat-number">{satisfactionCount}%</div>
              <div className="hero-stat-label">Satisfaction</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">24/7</div>
              <div className="hero-stat-label">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
