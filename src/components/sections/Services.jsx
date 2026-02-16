import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionBgBlobs } from '../ui/SectionBgBlobs'
import '../../styles/services.css'

function ServiceIcon({ name }) {
  const icons = {
    ai: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    workflow: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 6a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1v-5a1 1 0 00-1-1H4z" />,
    web: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    cms: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    api: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    wordpress: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
    shopify: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
  }
  return (
    <svg className="services-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {icons[name] || icons.web}
    </svg>
  )
}

const services = [
  { title: 'AI Automation Systems', description: 'Deploy intelligent workflows that reduce manual effort and errors, so your team can focus on high-value work.', icon: 'ai' },
  { title: 'Workflow Automation', description: 'Connect your tools and data with custom automations that streamline operations and cut costs.', icon: 'workflow' },
  { title: 'Custom Web Applications (MERN Stack)', description: 'Full-stack web apps built for scale: from dashboards to SaaS products, delivered with clean architecture.', icon: 'web' },
  { title: 'Business Websites & CMS Solutions', description: 'Authoritative, fast websites with easy content management so you can update without developers.', icon: 'cms' },
  { title: 'API & System Integrations', description: 'Seamless connections between your apps, CRMs, and third-party services for a unified workflow.', icon: 'api' },
  { title: 'WordPress Development', description: 'Custom themes, performance optimization, and scalable CMS builds for business websites that grow with you.', icon: 'wordpress' },
  { title: 'Shopify Development', description: 'Conversion-focused storefronts, custom integrations, and automation-ready setups with performance built in.', icon: 'shopify' },
]

function ServiceCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="services-card"
    >
      {/* Icon at top */}
      <div className="services-card-icon-wrapper">
        <ServiceIcon name={item.icon} />
      </div>

      {/* Content */}
      <div className="services-card-content">
        <h3 className="services-card-title">{item.title}</h3>
        <p className="services-card-description">{item.description}</p>
        <a
          href="#cta"
          className="services-card-link"
          onClick={(e) => {
            e.preventDefault()
            const el = document.getElementById('cta')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          aria-label={`Learn more about ${item.title}`}
        >
          Learn More
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="services-section">
      <SectionBgBlobs variant="light" />
      <div className="container">
        {/* Section header with badge */}
        <div className="services-header">
          <span className="services-badge">What We Do</span>
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Outcome-focused solutions to help your business scale.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
