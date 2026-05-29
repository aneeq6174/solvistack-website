import { motion } from 'framer-motion'

const CALENDLY_URL = 'https://calendly.com/aneeqijaz99/30min'

export default function ClosingCTA() {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#EFF6FF]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-display font-bold text-3xl md:text-5xl text-brand-ink leading-tight mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Have a process that is eating your team's time?
        </motion.h2>

        <motion.p
          className="text-brand-slate text-lg md:text-xl mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Let's talk. 15 minutes. No sales pitch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold text-lg px-8 py-4 rounded-xl shadow-cta"
            whileHover={{ y: -2, boxShadow: '0 8px 25px 0 rgba(26, 86, 219, 0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Free 15-Min Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
