import { LOGO_ALT, LOGO_SRC } from '../constants/brand'

const CALENDLY_URL = 'https://calendly.com/aneeqijaz99/30min'
const LINKEDIN_URL = '{LINKEDIN_URL}'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <img
              src={LOGO_SRC}
              alt={LOGO_ALT}
              className="h-10 w-auto object-contain"
              width={170}
              height={40}
            />
            <span className="text-xs text-brand-slate">
              Lahore, Pakistan
            </span>
          </div>

          {/* Center — Copyright */}
          <p className="text-xs text-brand-slate order-last md:order-none">
            © 2025 Aneeq Ur Rehman Ijaz
          </p>

          {/* Right — Social icons */}
          <div className="flex items-center gap-4">
            {/* Calendly */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-slate hover:text-brand-teal transition-colors duration-200"
              aria-label="Book a call on Calendly"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 1v4M14 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="7" cy="12" r="1" fill="currentColor" />
                <circle cx="10" cy="12" r="1" fill="currentColor" />
                <circle cx="13" cy="12" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-slate hover:text-brand-teal transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 9v5M6 6.5v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 14v-3.5c0-1.1.9-2 2-2s2 .9 2 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
