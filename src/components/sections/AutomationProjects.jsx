import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { AUTOMATION_PROJECTS } from '../../data/automationProjects'
import '../../styles/automation.css'

function AutomationCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="automation-card"
    >
      <div className="automation-card-header">
        <div className="automation-card-number">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div>
          <h3 className="automation-card-title">{item.title}</h3>
          <p className="automation-card-description">{item.description}</p>
        </div>
      </div>
    </motion.article>
  )
}

export function AutomationProjects() {
  return (
    <section id="automation-projects" className="automation-section">
      <div className="container">
        <div className="automation-header">
          <span className="automation-badge">Automation Builds</span>
          <SectionHeading
            variant="light"
            title="Flagship Automation Systems"
            subtitle="Flagship automation systems and intelligent workflows we design and deploy."
          />
        </div>
        <div className="automation-grid">
          {AUTOMATION_PROJECTS.map((item, i) => (
            <AutomationCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
