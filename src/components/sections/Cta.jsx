import { ScrollReveal } from '../ui/ScrollReveal'
import '../../styles/contact.css'
import { CONTACT } from '../../constants/contact'

export function Cta() {
  return (
    <section id="cta" className="contact-section relative py-24 md:py-32 overflow-hidden border-t border-[rgba(6,182,212,0.15)] bg-transparent">
      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal stagger={0.15}>
          <div className="contact-inner bg-[rgba(10,17,40,0.65)] backdrop-blur-xl border border-[rgba(6,182,212,0.25)] rounded-3xl p-10 md:p-16 shadow-glow-teal max-w-3xl mx-auto">
            <h2 className="contact-left-heading text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Stop Losing Patients?
            </h2>
            <p className="contact-left-description text-lg md:text-xl text-ink-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
              Book a free 15-minute discovery call. We&apos;ll look at your current follow-up process and show you exactly
              what an automation system looks like for your practice. No pitch. No pressure. Just clarity.
            </p>

            <div className="contact-form-actions flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#calendly" className="contact-form-submit inline-flex items-center justify-center gap-3 bg-brand-teal text-brand-navy font-bold text-lg px-8 py-4 rounded-xl shadow-glow-teal-sm transition-transform hover:scale-105">
                Book My Free Call
                <svg fill="none" className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-link text-white font-medium flex items-center gap-2 hover:text-accent-cyan transition-colors"
                style={{ marginLeft: 0 }}
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            <p className="contact-meta mt-10 text-sm text-[rgba(255,255,255,0.5)] tracking-wide uppercase font-semibold">
              Typically live within 2 weeks. Costs less than one month of a VA&apos;s salary.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
