import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import '../../styles/tech.css'

const TECH_CATEGORIES = [
  {
    name: 'Frontend',
    description: 'Modern, performant interfaces built for usability and speed.',
    items: ['React', 'Shopify', 'WordPress', 'WIX Studio'],
  },
  {
    name: 'Backend',
    description: 'Scalable APIs and data layers built for reliability.',
    items: ['Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'Automation & Infrastructure',
    description: 'Automation-first infrastructure that connects your tools.',
    items: ['n8n', 'Zapier', 'OpenAI API'],
  },
]

function TechItem({ name, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="tech-item"
    >
      <div className="tech-item-icon" aria-hidden="true">
        <span className="text-sm font-semibold">{name.charAt(0)}</span>
      </div>
      <span className="tech-item-name">{name}</span>
    </motion.div>
  )
}

export function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section id="tech" ref={ref} className="tech-section">
      <div className="container">
        <div className="tech-header">
          <SectionHeading
            variant="light"
            title="Automation & Systems Infrastructure"
            subtitle="We build on automation-first infrastructure, then scale with proven web and API stacks."
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="tech-grid"
        >
          {TECH_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.name} className="tech-card">
              <h3 className="tech-card-title">{category.name}</h3>
              <p className="tech-card-subtitle">{category.description}</p>
              <div className="tech-item-list">
                {category.items.map((name, i) => (
                  <TechItem key={name} name={name} index={categoryIndex * 3 + i} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
