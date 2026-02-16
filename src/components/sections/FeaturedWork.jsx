import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { FEATURED_WORK } from '../../data/featuredWork'
import '../../styles/featured-work.css'

function getHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

function WebWorkCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const domain = getHostname(item.url)
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="featured-work-card"
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <div className="featured-work-image">
          <div className="featured-work-image-placeholder">{domain}</div>
          <span className="featured-work-badge-overlay">{item.category}</span>
        </div>
        <div className="featured-work-content">
          <h3 className="featured-work-title">{item.title}</h3>
          <p className="featured-work-description">{item.description}</p>
          <div className="featured-work-tags">
            <span className="featured-work-tag">{item.category}</span>
          </div>
          <span className="featured-work-link">
            View Project
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </a>
    </motion.article>
  )
}

function AIWorkCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="featured-work-card"
    >
      <div className="featured-work-image">
        <div className="featured-work-image-placeholder">AI Automation</div>
        <span className="featured-work-badge-overlay">{item.category}</span>
      </div>
      <div className="featured-work-content">
        <h3 className="featured-work-title">{item.title}</h3>
        <p className="featured-work-description">{item.description}</p>
        <div className="featured-work-tags">
          <span className="featured-work-tag">{item.category}</span>
          <span className="featured-work-tag">n8n</span>
          <span className="featured-work-tag">OpenAI</span>
        </div>
        <p className="featured-work-impact">{item.impact}</p>
        <Link to="/projects" className="featured-work-link">
          View on Projects
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

export function FeaturedWork() {
  return (
    <section id="featured-work" className="featured-work-section">
      <div className="container">
        <div className="featured-work-header">
          <span className="featured-work-badge">Our Work</span>
          <SectionHeading
            variant="light"
            title="Featured Projects"
            subtitle="AI automation and intelligent systems first; premium web development when it matters."
          />
        </div>
        <div className="featured-work-grid">
          {FEATURED_WORK.map((item, i) =>
            item.type === 'ai' ? (
              <AIWorkCard key={item.title} item={item} index={i} />
            ) : (
              <WebWorkCard key={item.url} item={item} index={i} />
            )
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="featured-work-view-all"
        >
          <Link to="/projects" className="featured-work-view-all-link">
            View all projects
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
