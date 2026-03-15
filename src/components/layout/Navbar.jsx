import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, ROUTES } from '../../constants/sections'
import { CONTACT } from '../../constants/contact'
import '../../styles/nav.css'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function NavLink({ link, className = '', onNavigate }) {
  const location = useLocation()
  const isHome = location.pathname === ROUTES.HOME
  const href = isHome ? `#${link.id}` : `/#${link.id}`

  const handleClick = (e) => {
    if (link.id === 'cta') return
    if (isHome) {
      e.preventDefault()
      scrollToSection(link.id)
    }
    onNavigate?.()
  }

  if (link.id === 'cta') {
    return (
      <a
        href="#calendly"
        className={`nav-link ${className}`.trim()}
        aria-label="Book a free call"
        onClick={onNavigate}
      >
        {link.label}
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`nav-link ${className}`.trim()}
    >
      {link.label}
    </a>
  )
}

/* Center nav: all links except Contact (Contact is a CTA on the right) */
const CENTER_LINKS = NAV_LINKS.filter((link) => link.id !== 'cta')

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === ROUTES.HOME

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="nav-header"
    >
      <div className="nav-inner">
        {/* LEFT: Logo */}
        <div className="nav-left">
          <Link
            to="/"
            className="nav-logo"
            aria-label="SolviStack Home"
          >
            <img
              src="/Solvistack_logo.png"
              alt="SolviStack Technologies"
              className="nav-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling?.classList.remove('hidden')
              }}
            />
            <span className="nav-logo-fallback hidden">SolviStack</span>
          </Link>
        </div>

        {/* CENTER: Navigation links (hidden on mobile) */}
        <nav className="nav-center" aria-label="Main navigation">
          {CENTER_LINKS.map((link) => (
            <NavLink key={link.id} link={link} />
          ))}
        </nav>

        {/* RIGHT: CTA button (hidden on mobile) */}
        <div className="nav-right">
          <a
            href="#calendly"
            className="nav-cta nav-cta-primary"
            aria-label="Book a free call"
          >
            Book Free Call
          </a>
        </div>

        {/* Mobile: Hamburger toggle */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="nav-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu (prepared for later implementation) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="nav-mobile-panel"
            aria-label="Mobile menu"
          >
            <div className="nav-mobile-inner">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  link={link}
                  className="nav-mobile-link"
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
