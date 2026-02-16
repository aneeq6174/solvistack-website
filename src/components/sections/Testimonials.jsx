import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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

function TestimonialCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="testimonial-card"
    >
      <svg className="testimonial-quote-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <p className="testimonial-quote">&quot;{item.quote}&quot;</p>
      <div className="testimonial-divider" />
      <div className="testimonial-client">
        <div className="testimonial-avatar">{getInitials(item.name)}</div>
        <div className="testimonial-client-info">
          <p className="testimonial-client-name">{item.name}</p>
          <p className="testimonial-client-title">{item.title}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="mb-7">
          <SectionHeading
            variant="light"
            title="What Clients Say"
            subtitle="Concise feedback from teams we work with."
          />
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
