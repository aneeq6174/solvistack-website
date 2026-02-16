import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionBgBlobs } from '../ui/SectionBgBlobs'

const INPUTS = ['Forms', 'Emails', 'Shopify', 'APIs']
const OUTPUTS = ['CRM', 'Email Sequences', 'Reports', 'Notifications']

function FlowNode({ children, variant = 'default', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const isCenter = variant === 'center'
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`
        rounded-xl border px-4 py-3 text-center text-sm font-medium
        ${isCenter
          ? 'bg-accent-teal/15 border-accent-teal/40 text-ink-primary shadow-card-light'
          : 'bg-white border-slate-200/80 text-ink-secondary shadow-card-light'
        }
      `}
    >
      {children}
    </motion.div>
  )
}

export function AutomationFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="automation-flow" ref={ref} className="relative py-20 md:py-28 bg-surface-light-alt">
      <SectionBgBlobs variant="light" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-16">
          <SectionHeading
            variant="light"
            title="How Automation Flows Through Your Business"
            subtitle="From inputs to engine to outcomes — a clear path."
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:flex-1 lg:max-w-[180px]">
            {INPUTS.map((label, i) => (
              <FlowNode key={label} delay={i * 0.06}>
                {label}
              </FlowNode>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative"
            >
              <div className="hidden lg:block absolute -left-24 top-1/2 w-24 h-px bg-gradient-to-r from-transparent to-accent-teal/40" />
              <div className="hidden lg:block absolute -right-24 top-1/2 left-[100%] w-24 h-px bg-gradient-to-l from-transparent to-accent-teal/40" />
              <FlowNode variant="center" delay={0.2}>
                Automation Engine
              </FlowNode>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="h-8 w-px bg-gradient-to-b from-accent-teal/30 to-transparent lg:hidden"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:flex-col lg:flex-1 lg:max-w-[180px] lg:items-end">
            {OUTPUTS.map((label, i) => (
              <FlowNode key={label} delay={0.3 + i * 0.06}>
                {label}
              </FlowNode>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-px h-4 bg-gradient-to-b from-accent-teal/20 to-accent-teal/40" />
            <div className="w-px h-4 bg-accent-teal/30" />
            <div className="w-px h-4 bg-gradient-to-t from-accent-teal/20 to-accent-teal/40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
