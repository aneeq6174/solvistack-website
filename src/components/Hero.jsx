import { motion } from 'framer-motion'

const CALENDLY_URL = 'https://calendly.com/aneeqijaz99/30min'

const headline = 'I build automated systems that eliminate manual work for your business.'
const words = headline.split(' ')

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const techBadges = [
  { label: 'N8N', x: -280, y: -120, delay: 1.8 },
  { label: 'OpenAI', x: 260, y: -100, delay: 2.0 },
  { label: 'React', x: -320, y: 60, delay: 2.2 },
  { label: 'Automation', x: 300, y: 80, delay: 2.4 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center pt-16">
        {/* Word-by-word headline — Syne to match all headings */}
        <motion.h1
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-ink leading-[1.1] tracking-[-0.02em] mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.28em]"
              style={{ willChange: 'transform, opacity' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="font-sans text-lg sm:text-xl text-brand-slate max-w-[540px] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          N8N + AI automation and custom web systems. Delivered fast. Built to actually work.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold text-lg px-8 py-4 rounded-xl shadow-cta"
            whileHover={{ y: -2, boxShadow: '0 8px 25px 0 rgba(26, 86, 219, 0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Free Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Floating tech badges — desktop only */}
        <div className="hidden lg:block relative" aria-hidden="true">
          {techBadges.map((badge, i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-0 font-mono text-xs text-brand-slate/50 border border-brand-border bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full select-none"
              style={{ willChange: 'transform' }}
              initial={{ opacity: 0, x: badge.x, y: badge.y }}
              animate={{
                opacity: [0, 0.55, 0.55, 0],
                y: [badge.y, badge.y - 12, badge.y + 12, badge.y],
              }}
              transition={{
                delay: badge.delay,
                duration: 8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              {badge.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
