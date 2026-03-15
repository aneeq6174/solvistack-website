import { ScrollReveal } from '../ui/ScrollReveal'
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

function TechItem({ name }) {
  return (
    <div className="tech-item bg-[rgba(10,17,40,0.4)] border border-[rgba(255,255,255,0.05)] text-ink-secondary py-2 px-4 rounded-lg flex items-center gap-3 transition-colors hover:bg-[rgba(6,182,212,0.15)] hover:text-white hover:border-accent-teal">
      <div className="tech-item-icon bg-transparent" aria-hidden="true">
        <span className="text-sm font-semibold text-accent-cyan">{name.charAt(0)}</span>
      </div>
      <span className="tech-item-name font-medium">{name}</span>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="tech" className="tech-section py-24 md:py-32 relative bg-transparent">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <ScrollReveal stagger={0.15}>
          <div className="tech-header text-center mb-16">
            <SectionHeading
              variant="dark"
              title="Automation & Systems Infrastructure"
              subtitle="We build on automation-first infrastructure, then scale with proven web and API stacks."
            />
          </div>
          <div className="tech-grid grid gap-6 md:grid-cols-3">
            {TECH_CATEGORIES.map((category) => (
              <div key={category.name} className="tech-card bg-[rgba(10,17,40,0.65)] backdrop-blur-md rounded-2xl p-8 border border-[rgba(6,182,212,0.15)] shadow-card-light transition-all hover:-translate-y-2 hover:border-accent-teal hover:shadow-glow-teal">
                <h3 className="tech-card-title text-xl font-display font-semibold text-white mb-2">{category.name}</h3>
                <p className="tech-card-subtitle text-sm text-ink-secondary mb-6 leading-relaxed bg-transparent">{category.description}</p>
                <div className="tech-item-list flex flex-col gap-3">
                  {category.items.map((name) => (
                    <TechItem key={name} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
