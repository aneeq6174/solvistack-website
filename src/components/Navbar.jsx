import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CALENDLY_URL = 'https://calendly.com/aneeqijaz99/30min'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-lg shadow-nav border-b border-brand-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-display font-bold text-xl text-brand-ink tracking-tight">
          Solvistack
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-brand-slate hover:text-brand-ink transition-colors duration-200">
            Services
          </a>
          <a href="#case-study" className="text-sm text-brand-slate hover:text-brand-ink transition-colors duration-200">
            Work
          </a>
          <a href="#process" className="text-sm text-brand-slate hover:text-brand-ink transition-colors duration-200">
            Process
          </a>
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white text-sm font-bold px-5 py-2.5 rounded-xl"
            whileHover={{ y: -2, boxShadow: '0 8px 25px 0 rgba(26, 86, 219, 0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Call
          </motion.a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-brand-ink rounded-full origin-center"
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-brand-ink rounded-full"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-brand-ink rounded-full origin-center"
            animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-b border-brand-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="text-base text-brand-slate hover:text-brand-ink transition-colors"
              >
                Services
              </a>
              <a
                href="#case-study"
                onClick={() => setMobileOpen(false)}
                className="text-base text-brand-slate hover:text-brand-ink transition-colors"
              >
                Work
              </a>
              <a
                href="#process"
                onClick={() => setMobileOpen(false)}
                className="text-base text-brand-slate hover:text-brand-ink transition-colors"
              >
                Process
              </a>
              <motion.a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue text-white text-base font-bold px-6 py-3 rounded-xl text-center mt-2"
                whileTap={{ scale: 0.97 }}
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
