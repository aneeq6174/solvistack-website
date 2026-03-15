import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { AUTOMATION_PROJECTS } from '../../data/automationProjects'
import '../../styles/automation.css'

function AutomationCard({ item, index }) {
  return (
    <article className="automation-card">
      <div className="automation-card-header">
        <div className="automation-card-number">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div>
          <h3 className="automation-card-title">{item.title}</h3>
          <p className="automation-card-description">{item.description}</p>
        </div>
      </div>
    </article>
  )
}

export function AutomationProjects() {
  return (
    <section id="automation-projects" className="automation-section">
      <div className="container relative z-10">
        <ScrollReveal stagger={0.1}>
          <div className="automation-header">
            <span className="automation-badge">Automation Builds</span>
            <SectionHeading
              variant="dark"
              title="Flagship Automation Systems"
              subtitle="Flagship automation systems and intelligent workflows we design and deploy."
            />
          </div>
          <div className="automation-grid">
            {AUTOMATION_PROJECTS.map((item, i) => (
              <AutomationCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
