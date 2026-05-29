import { motion } from 'framer-motion'

const cards = [
  {
    title: 'AI Automation Workflows',
    body: 'Lead capture, follow-up sequences, instant response systems, and appointment reminders — all built on N8N and OpenAI. I connect your tools and eliminate the manual handoffs between them.',
    tags: ['N8N', 'OpenAI', 'Webhooks'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="16" width="8" height="8" rx="2" stroke="#1A56DB" strokeWidth="1.5" />
        <rect x="28" y="8" width="8" height="8" rx="2" stroke="#1A56DB" strokeWidth="1.5" />
        <rect x="28" y="24" width="8" height="8" rx="2" stroke="#1A56DB" strokeWidth="1.5" />
        <path d="M12 20h6m0 0l4-8h6m-10 8l4 8h6" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="20" r="2" fill="#1A56DB" fillOpacity="0.2" stroke="#1A56DB" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Custom Web Systems',
    body: 'Offline-capable business tools built to your exact requirements. Billing systems, inventory management, reporting dashboards — custom-built software, not templates.',
    tags: ['React', 'IndexedDB', 'PWA'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="32" height="24" rx="3" stroke="#1A56DB" strokeWidth="1.5" />
        <path d="M4 14h32" stroke="#1A56DB" strokeWidth="1.5" />
        <circle cx="8" cy="10" r="1.5" fill="#1A56DB" fillOpacity="0.3" />
        <circle cx="12" cy="10" r="1.5" fill="#1A56DB" fillOpacity="0.3" />
        <circle cx="16" cy="10" r="1.5" fill="#1A56DB" fillOpacity="0.3" />
        <rect x="8" y="18" width="10" height="3" rx="1" fill="#1A56DB" fillOpacity="0.15" />
        <rect x="8" y="23" width="14" height="3" rx="1" fill="#1A56DB" fillOpacity="0.1" />
        <path d="M14 34h12" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 30v4" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Business Process Automation',
    body: 'Any manual process your team repeats more than ten times a week, I can likely automate it. If it follows a pattern, it can be a system.',
    tags: ['Zapier', 'N8N', 'Custom Scripts'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#1A56DB" strokeWidth="1.5" />
        <path d="M20 10v4m0 12v4m-10-10h4m12 0h4" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" stroke="#1A56DB" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="1.5" fill="#1A56DB" fillOpacity="0.4" />
        <path d="M13 13l2.5 2.5m9 9l2.5 2.5m0-14l-2.5 2.5m-9 9l-2.5 2.5" stroke="#1A56DB" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function WhatIBuild() {
  return (
    <section id="services" className="py-16 md:py-28 px-6">
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
            What I Build
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-ink leading-tight">
            Systems that solve real operational problems.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 10px -6px rgba(0,0,0,0.04)' }}
              className="bg-white border border-brand-border rounded-2xl p-8 shadow-card transition-colors duration-200 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-brand-blue/5 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-brand-ink mb-3">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-brand-slate text-sm leading-relaxed mb-6 flex-1">
                {card.body}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-brand-blue/70 bg-brand-blue/5 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
