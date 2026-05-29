import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: '15 minutes. I understand your exact problem and what a working solution looks like.',
  },
  {
    number: '02',
    title: 'System Map',
    description: 'I map out exactly what I will build and show it to you before writing a single line of code.',
  },
  {
    number: '03',
    title: 'Build & Test',
    description: 'I build the system and test it against real data from your operation.',
  },
  {
    number: '04',
    title: 'Live Delivery',
    description: 'I hand it over live and working. Usually within 2 weeks.',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow + headline */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-blue font-medium mb-4 block">
            Process
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-ink leading-tight">
            Simple. Fast. No surprises.
          </h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-brand-border" aria-hidden="true" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative pt-14"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Number circle */}
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-sm">
                    <span className="font-mono text-sm font-medium text-brand-blue">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-5"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Number + vertical line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center shadow-sm shrink-0">
                  <span className="font-mono text-xs font-medium text-brand-blue">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-brand-border mt-2" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className="pb-4">
                <h3 className="font-display font-bold text-lg text-brand-ink mb-1">
                  {step.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
