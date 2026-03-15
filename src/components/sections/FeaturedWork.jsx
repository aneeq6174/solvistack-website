import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import '../../styles/featured-work.css'

export function FeaturedWork() {
  return (
    <section id="case-study" className="featured-work-section">
      <div className="container relative z-10">
        <ScrollReveal stagger={0.2} className="w-full">
          <div className="featured-work-header text-center mb-16">
            <span className="featured-work-badge mt-10">Case Study</span>
            <SectionHeading
              variant="dark"
              title="Real Build. Real Result."
              subtitle="Delivered 3 weeks ago. Still running without a single manual input."
            />
          </div>

          <div className="featured-work-grid" style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1.5fr)' }}>
            <div className="featured-work-card">
              <div className="featured-work-content">
                <div style={{ marginBottom: '2rem' }}>
                  <p className="featured-work-tag text-accent-cyan" style={{ display: 'inline-block' }}>
                    THE CHALLENGE
                  </p>
                  <p className="featured-work-description text-ink-secondary" style={{ marginTop: '0.75rem' }}>
                    A retail business in Lahore was running entirely on handwritten notebooks. No billing software. No
                    stock tracking. Complete operational chaos at end of every day. Every off-the-shelf SaaS product
                    failed their requirement — they needed fully offline, single-device operation.
                  </p>
                </div>

                <div>
                  <p className="featured-work-tag text-accent-teal" style={{ display: 'inline-block' }}>
                    WHAT WE BUILT
                  </p>
                  <p className="featured-work-description text-white" style={{ marginTop: '0.75rem' }}>
                    A fully offline Billing and Inventory Management System — handling cash and online payments
                    simultaneously, tracking exactly how much each customer still owes on split payments, automatically
                    updating stock when items are returned, and generating end-of-day consolidated reports. Built from
                    scratch. Personalized to their exact workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="featured-work-card">
              <div className="featured-work-content">
                <h3 className="featured-work-title text-white">Results</h3>
                <div className="featured-work-tags" style={{ marginTop: '1.5rem', gap: '1rem' }}>
                  <div className="featured-work-tag bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)]">
                    <div className="text-accent-teal" style={{ fontWeight: 700, fontSize: '1.25rem' }}>3 Weeks</div>
                    <div className="text-ink-secondary" style={{ fontSize: '0.85rem' }}>From first call to live system</div>
                  </div>
                  <div className="featured-work-tag bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)]">
                    <div className="text-accent-teal" style={{ fontWeight: 700, fontSize: '1.25rem' }}>100%</div>
                    <div className="text-ink-secondary" style={{ fontSize: '0.85rem' }}>Offline — zero internet dependency</div>
                  </div>
                  <div className="featured-work-tag bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)]">
                    <div className="text-accent-teal" style={{ fontWeight: 700, fontSize: '1.25rem' }}>0</div>
                    <div className="text-ink-secondary" style={{ fontSize: '0.85rem' }}>Manual reports generated since launch</div>
                  </div>
                  <div className="featured-work-tag bg-[rgba(6,182,212,0.1)] border-[rgba(6,182,212,0.2)]">
                    <div className="text-accent-teal" style={{ fontWeight: 700, fontSize: '1.25rem' }}>1</div>
                    <div className="text-ink-secondary" style={{ fontSize: '0.85rem' }}>Very happy client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="featured-work-view-all text-center mt-12 mx-auto max-w-4xl">
            <div className="featured-work-view-all-link text-ink-secondary leading-relaxed inline-block rounded-2xl bg-[rgba(10,17,40,0.55)] backdrop-blur-md px-8 py-5">
              If we can eliminate manual chaos for a complex retail operation in 3 weeks — we can automate your clinic&apos;s
              patient follow-up before you&apos;d finish interviewing VA candidates.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
