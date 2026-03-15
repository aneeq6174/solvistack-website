import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import '../../styles/testimonials.css'

const testimonials = [
  {
    name: 'Wasiq Ali',
    title: 'CEO, Wavisol Labs',
    quote: 'Clear communication and delivery. The automation system was built to spec and has been running without issues.',
  },
  {
    name: 'Asher Mehmood Sheikh',
    title: 'CEO, Digiaxiom',
    quote: 'Professional engagement from scoping to deployment. We got a scalable solution that fits our workflow.',
  },
]

function getInitials(name) {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card">
      <svg className="testimonial-quote-icon text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <p className="testimonial-quote text-white">&quot;{item.quote}&quot;</p>
      <div className="testimonial-divider bg-[rgba(6,182,212,0.2)]" />
      <div className="testimonial-client">
        <div className="testimonial-avatar bg-[rgba(6,182,212,0.15)] text-accent-teal">{getInitials(item.name)}</div>
        <div className="testimonial-client-info">
          <p className="testimonial-client-name text-white">{item.name}</p>
          <p className="testimonial-client-title text-ink-secondary">{item.title}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section py-24 md:py-32">
      <div className="container relative z-10 max-w-4xl mx-auto">
        <ScrollReveal stagger={0.15}>
          <div className="mb-16 text-center">
            <SectionHeading
              variant="dark"
              title="What Clients Say"
              subtitle="From the teams we've built for."
            />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
