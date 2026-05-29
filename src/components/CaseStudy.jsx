import { motion } from 'framer-motion'

const stats = [
  { value: '< 3 weeks', label: 'Delivery time' },
  { value: '0', label: 'Support calls since launch' },
  { value: '100%', label: 'Offline capable' },
]

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow + headline */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-blue font-medium mb-4 block">
            Case Study
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-ink leading-tight">
            One real project. No invented results.
          </h2>
        </motion.div>

        {/* Case study card */}
        <motion.div
          className="bg-white border border-brand-border rounded-3xl shadow-card p-8 md:p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Project title */}
          <h3 className="font-display font-bold text-xl md:text-2xl text-brand-ink mb-8 pb-6 border-b border-brand-border">
            Billing and Inventory System for Multi-Vendor Retail Operation
          </h3>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">
            {/* Problem */}
            <div>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-blue font-medium mb-3 block">
                Problem
              </span>
              <p className="text-brand-slate text-sm leading-relaxed">
                A business owner in Lahore was running all daily operations through handwritten notebooks. No billing software, no stock tracking — total chaos at end of day. Errors were costing time and money every single shift.
              </p>
            </div>

            {/* What I Built */}
            <div>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-blue font-medium mb-3 block">
                What I Built
              </span>
              <p className="text-brand-slate text-sm leading-relaxed">
                A fully offline React application handling invoicing with split payment tracking, automatic stock deduction on sale, consolidated daily reports, and a clean operator UI. Zero internet dependency. Runs entirely in-browser with local data persistence.
              </p>
            </div>

            {/* Result */}
            <div>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-brand-blue font-medium mb-3 block">
                Result
              </span>
              <p className="text-brand-slate text-sm leading-relaxed">
                Delivered in under 3 weeks. Running daily with zero issues since deployment. The client has not needed a single support call.
              </p>
            </div>
          </div>

          {/* Stat blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-brand-border">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center sm:text-left bg-brand-bg rounded-xl px-6 py-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-brand-ink mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-brand-slate tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
