import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionBgBlobs } from '../ui/SectionBgBlobs'
import '../../styles/services.css'

const packages = [
  {
    name: 'PatientPulse',
    subtitle: 'The Follow-Up System',
    badge: 'Most Popular',
    price: '$900 setup / $350 per month',
    bullets: [
      'Instant auto-response to new inquiries',
      '3-touch no-show re-engagement sequence',
      'After-hours inquiry handling',
      'Live in 5–7 days',
    ],
  },
  {
    name: 'ClinicFlow',
    subtitle: 'The Full Admin Automation',
    price: '$1,500 setup / $500 per month',
    bullets: [
      'Everything in PatientPulse',
      'Appointment reminder sequences (SMS + email)',
      'New patient intake automation',
      'Internal team notifications',
      'Live in 7–10 days',
    ],
  },
  {
    name: 'ClinicOS',
    subtitle: 'The Complete System',
    price: '$4,000 setup / $1,200 per month',
    bullets: [
      'Everything in ClinicFlow',
      'CRM integration and management',
      'Custom reporting dashboard',
      'Full workflow audit and optimization',
      'Priority support',
      'Live in 2 weeks',
    ],
  },
]

function ServiceCard({ item }) {
  return (
    <div className="services-card">
      <div className="services-card-icon-wrapper">
        {item.badge && (
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-primary">
            {item.badge}
          </span>
        )}
      </div>

      <div className="services-card-content">
        <div>
          <h3 className="services-card-title">{item.name}</h3>
          <p className="services-card-description" style={{ marginBottom: '0.5rem' }}>
            {item.subtitle}
          </p>
          <p className="services-card-description text-accent-teal" style={{ fontWeight: 600 }}>
            {item.price}
          </p>
        </div>
        <ul className="services-card-bullets" style={{ paddingLeft: '1.1rem', marginTop: '0.75rem', listStyleType: 'disc' }}>
          {item.bullets.map((bullet) => (
            <li key={bullet} style={{ marginBottom: '0.4rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
              {bullet}
            </li>
          ))}
        </ul>
        <div style={{ flexGrow: 1 }} />
        <a
          href="https://calendly.com/aneeqijaz99/30min"
          className="services-card-link"
          aria-label={`Get started with ${item.name}`}
        >
          Get Started
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container relative z-10">
        <ScrollReveal stagger={0.15}>
          <div className="services-header">
            <span className="services-badge">For Healthcare Practices</span>
            <div className="inline-block rounded-2xl bg-[rgba(10,17,40,0.55)] backdrop-blur-md px-8 py-5">
              <h2 className="services-title">What We Build For Your Practice</h2>
              <p className="services-subtitle">
                Three systems. One goal: zero patients lost to slow follow-up.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {packages.map((item) => (
              <ServiceCard key={item.name} item={item} />
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center', fontSize: '1rem' }} className="text-ink-secondary">
            <p style={{ marginBottom: '0.75rem' }}>Not sure which fits your practice?</p>
            <a href="https://calendly.com/aneeqijaz99/30min" className="services-card-link justify-center text-accent-cyan">
              Book a free call — we&apos;ll tell you in 15 minutes
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
