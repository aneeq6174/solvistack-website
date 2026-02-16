import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ALL_PROJECTS, PROJECT_CATEGORIES } from '../data/allProjects'
import { AI_AUTOMATION_PROJECTS } from '../data/aiAutomationProjects'
import '../styles/projects.css'

function FilterTabs({ active, onChange }) {
  return (
    <div className="projects-filter-tabs">
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          type="button"
          onClick={() => onChange(cat.key)}
          className={`projects-filter-tab ${active === cat.key ? 'active' : ''}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

function WebProjectCard({ item, index }) {
  const domain = item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="project-card"
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div className="project-card-image">
          <div className="project-card-image-placeholder">{domain}</div>
          <span className="project-card-badge">{item.category}</span>
        </div>
        <div className="project-card-content">
          <h3 className="project-card-title">{item.title}</h3>
          <p className="project-card-description">
            {item.category === 'WordPress' && 'Premium WordPress website with performance optimization and scalable CMS.'}
            {item.category === 'Shopify' && 'Conversion-focused Shopify storefront with custom integrations.'}
            {item.category === 'MERN' && 'Full-stack MERN application built for scale and performance.'}
          </p>
          <div className="project-card-tech">
            <span className="project-card-tech-tag">{item.category}</span>
          </div>
          <span className="project-card-link">
            View Live Site
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </a>
    </motion.article>
  )
}

function AIProjectCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="project-card"
    >
      <div className="project-card-image">
        <div className="project-card-image-placeholder">AI Automation</div>
        <span className="project-card-badge">AI Automation</span>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{item.title}</h3>
        <p className="project-card-description">{item.description}</p>
        <div className="project-card-tech">
          {item.technologies.map((tech) => (
            <span key={tech} className="project-card-tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <p className="project-card-impact">{item.impact}</p>
      </div>
    </motion.article>
  )
}

export function ProjectsPage() {
  const [filter, setFilter] = useState('all')

  const filteredWeb = useMemo(() => {
    if (filter === 'all') return ALL_PROJECTS
    return ALL_PROJECTS.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div className="projects-page">
      <div className="container">
        {/* Page Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="projects-hero"
        >
          <nav style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 var(--space-2)' }}>›</span>
            <span>Projects</span>
          </nav>
          <h1 className="projects-hero-title">Our Projects</h1>
          <p className="projects-hero-description">
            AI automation and web development solutions for growing companies.
          </p>
        </motion.div>

        {/* AI Automation & Intelligent Systems */}
        <section className="projects-section">
          <h2 className="projects-section-title">AI Automation & Intelligent Systems</h2>
          <p className="projects-section-description">
            Automation and AI solutions we design and deploy for operations, sales, and support.
          </p>
          <div className="projects-grid">
            {AI_AUTOMATION_PROJECTS.map((item, i) => (
              <AIProjectCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* Web Development */}
        <section className="projects-section">
          <h2 className="projects-section-title">Web Development</h2>
          <p className="projects-section-description">
            WordPress websites, Shopify stores, and custom MERN applications.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <FilterTabs active={filter} onChange={setFilter} />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="projects-grid"
            >
              {filteredWeb.map((item, i) => (
                <WebProjectCard key={item.url} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredWeb.length === 0 && (
            <p className="projects-empty">No projects in this category.</p>
          )}
        </section>
      </div>
    </div>
  )
}
