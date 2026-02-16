import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionBgBlobs } from '../ui/SectionBgBlobs'
import '../../styles/process.css'

const steps = [
  { title: 'Requirement & Strategy', description: 'We align on goals, scope, and success metrics so the solution fits your business.' },
  { title: 'System Architecture Planning', description: 'Technical design and stack decisions documented for clarity and future scaling.' },
  { title: 'Agile Development', description: 'Iterative builds with regular demos and feedback so you stay in control.' },
  { title: 'Deployment & Optimization', description: 'Launch, monitoring, and continuous improvement so performance stays high.' },
]

function Step({ item, index, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add('is-visible')
    }
  }, [inView])

  return (
    <motion.div ref={ref} className="process-step">
      <div className="process-step-number-wrapper">
        <div className="process-step-number">
          {String(index + 1).padStart(2, '0')}
        </div>
        {!isLast && <div className="process-step-line" />}
      </div>
      <div className="process-step-content">
        <h3 className="process-step-title">{item.title}</h3>
        <p className="process-step-description">{item.description}</p>
      </div>
    </motion.div>
  )
}

export function Process() {
  return (
    <section id="process" className="process-section">
      <SectionBgBlobs variant="light" />
      <div className="container">
        <div className="process-inner">
          <div className="mb-7">
          <SectionHeading variant="light" title="How We Work" subtitle="A clear process from idea to deployment." />
          </div>
          <div className="process-timeline">
            {steps.map((item, i) => (
              <Step key={item.title} item={item} index={i} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
