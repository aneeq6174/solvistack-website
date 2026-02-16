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
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`nav-link ${className}`.trim()}
        aria-label="Contact us on WhatsApp"
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
  const getStartedHref = isHome ? '#cta' : `/#cta`

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
              src="/logo.png"
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
          <Link to={ROUTES.PROJECTS} className="nav-link">
            Projects
          </Link>
        </nav>

        {/* RIGHT: CTA buttons (hidden on mobile) */}
        <div className="nav-right">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta nav-cta-ghost"
            aria-label="Contact us on WhatsApp"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={getStartedHref}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                scrollToSection('cta')
              }
            }}
            className="nav-cta nav-cta-primary"
            aria-label="Get started - go to contact section"
          >
            Get Started
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
              <Link
                to={ROUTES.PROJECTS}
                className="nav-mobile-link"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-mobile-link"
                onClick={() => setOpen(false)}
                aria-label="Contact us on WhatsApp"
              >
                WhatsApp
              </a>
              <a
                href={getStartedHref}
                className="nav-mobile-link"
                onClick={(e) => {
                  setOpen(false)
                  if (isHome) {
                    e.preventDefault()
                    scrollToSection('cta')
                  }
                }}
                aria-label="Get started"
              >
                Get Started
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
