import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

function ProblemCard({ icon, title, body }) {
  return (
    <div className="rounded-2xl border border-[rgba(6,182,212,0.15)] bg-surface-glass p-8 shadow-card-light backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-accent-teal hover:shadow-glow-teal group">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(6,182,212,0.1)] text-accent-teal transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-display font-semibold text-ink-primary">{title}</h3>
      <p className="text-base leading-relaxed text-ink-secondary">{body}</p>
    </div>
  )
}

export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="container" style={{ maxWidth: '1100px' }}>
        <ScrollReveal stagger={0.15}>
          <div className="mb-16 md:mb-20 text-center">
            <SectionHeading
              variant="dark"
              title="Sound Familiar?"
              subtitle="These are the three moments clinics lose patients every single day."
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <ProblemCard
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              }
              title="After-Hours Inquiries Go Unanswered"
              body="A potential patient calls at 7pm. Your team is gone. By morning, they've booked with the clinic that replied at 7:01pm."
            />
            <ProblemCard
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path strokeLinecap="round" d="M3 10h18" />
                  <path strokeLinecap="round" d="M8 2v4M16 2v4" />
                  <path strokeLinecap="round" d="M9 16l6-6" />
                </svg>
              }
              title="No-Shows Never Get Re-Engaged"
              body="A patient misses their appointment. Nobody follows up. That slot — and that revenue — disappears permanently."
            />
            <ProblemCard
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 18c.7-1.8 2.4-3 4.5-3H13a4 4 0 013.9 3.2"
                  />
                </svg>
              }
              title="Manual Follow-Up Drains Your Team"
              body="Calling leads back. Sending reminders. Re-booking cancellations. All manual. All stealing time from actual patient care."
            />
          </div>

          <div className="mt-12 mx-auto max-w-2xl rounded-xl border border-[rgba(6,182,212,0.2)] bg-[rgba(6,182,212,0.05)] px-6 py-4 text-center text-sm font-medium text-accent-cyan md:text-base backdrop-blur-sm shadow-glow-teal-sm">
            You don't need more staff. You need a system that does this automatically.
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

