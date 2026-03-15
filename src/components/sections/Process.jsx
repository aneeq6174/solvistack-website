import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import '../../styles/process.css'

const steps = [
  {
    title: 'Discovery Call (15 min)',
    description:
      'We understand your current follow-up process, your tools, and where patients are falling through the cracks.',
  },
  {
    title: 'System Design',
    description:
      'We map your exact workflow and design an automation system built specifically for your practice — not a generic template.',
  },
  {
    title: 'Build & Test',
    description:
      'We build and test everything with your real systems. You see it working before it goes live. No surprises.',
  },
  {
    title: 'Go Live in 2 Weeks',
    description:
      'Your system launches. Leads get instant responses. No-shows get re-engaged. Your team focuses on patients — not admin.',
  },
]

function Step({ item, index, isLast }) {
  return (
    <div className="process-step">
      <div className="process-step-number-wrapper">
        <div className="process-step-number">{String(index + 1).padStart(2, '0')}</div>
        {!isLast && <div className="process-step-line" />}
      </div>
      <div className="process-step-content bg-[rgba(10,17,40,0.65)] backdrop-blur-md border border-[rgba(6,182,212,0.15)] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent-teal hover:shadow-glow-teal hover:-translate-y-1">
        <h3 className="process-step-title text-white">{item.title}</h3>
        <p className="process-step-description text-ink-secondary">{item.description}</p>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section id="how-it-works" className="process-section relative py-24 md:py-32">
      <div className="container relative z-10">
        <ScrollReveal stagger={0.15}>
          <div className="process-inner max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <SectionHeading
                variant="dark"
                title="How It Works"
                subtitle="A clear 4-step path from first call to live automation."
              />
            </div>
            <div className="process-timeline">
              {steps.map((item, i) => (
                <Step key={item.title} item={item} index={i} isLast={i === steps.length - 1} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
