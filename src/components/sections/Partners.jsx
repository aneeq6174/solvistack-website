import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Partners() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <section id="partners" ref={ref} className="py-16 md:py-20 bg-surface-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-ink-secondary font-normal text-base md:text-lg leading-relaxed"
        >
          SolviStack operates with its own expert in-house team and strategically collaborates with established development partners when required to deliver scalable, enterprise-ready digital solutions.
        </motion.p>
      </div>
    </section>
  )
}
