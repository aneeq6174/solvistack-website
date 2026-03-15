import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const INPUTS = ['Forms', 'Emails', 'Shopify', 'APIs']
const OUTPUTS = ['CRM', 'Email Sequences', 'Reports', 'Notifications']

function FlowNode({ children, variant = 'default' }) {
  const isCenter = variant === 'center'
  return (
    <div
      className={`
        rounded-xl border px-4 py-3 text-center text-[15px] font-medium backdrop-blur-md transition-all duration-300 hover:scale-105
        ${isCenter
          ? 'bg-[rgba(6,182,212,0.15)] border-accent-teal text-white shadow-glow-teal'
          : 'bg-[rgba(10,17,40,0.65)] border-[rgba(255,255,255,0.1)] text-ink-secondary shadow-card-light'
        }
      `}
    >
      {children}
    </div>
  )
}

export function AutomationFlow() {
  return (
    <section id="automation-flow" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container relative z-10 max-w-5xl">
        <ScrollReveal stagger={0.15}>
          <div className="mb-16 md:mb-20 text-center">
            <SectionHeading
              variant="dark"
              title="How Automation Flows Through Your Business"
              subtitle="From inputs to engine to outcomes — a clear path."
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
            <div className="flex flex-wrap justify-center gap-4 lg:flex-col lg:flex-1 lg:max-w-[200px]">
              {INPUTS.map((label) => (
                <FlowNode key={label}>
                  {label}
                </FlowNode>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6 flex-shrink-0 relative">
              <div className="hidden lg:block absolute -left-28 top-1/2 w-28 h-px bg-gradient-to-r from-transparent to-[rgba(6,182,212,0.6)]" />
              <div className="hidden lg:block absolute -right-28 top-1/2 left-[100%] w-28 h-px bg-gradient-to-l from-transparent to-[rgba(6,182,212,0.6)]" />
              
              <FlowNode variant="center">
                <span className="text-xl px-4 py-2 block font-display tracking-wide">Automation Engine</span>
              </FlowNode>
              
              <div className="h-10 w-px bg-gradient-to-b from-[rgba(6,182,212,0.6)] to-transparent lg:hidden" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:flex-col lg:flex-1 lg:max-w-[200px] lg:items-end">
              {OUTPUTS.map((label) => (
                <FlowNode key={label}>
                  {label}
                </FlowNode>
              ))}
            </div>
          </div>

          <div className="lg:hidden mt-8 flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-5 bg-gradient-to-b from-[rgba(6,182,212,0.2)] to-[rgba(6,182,212,0.6)]" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-glow-teal-sm" />
              <div className="w-px h-5 bg-gradient-to-t from-[rgba(6,182,212,0.2)] to-[rgba(6,182,212,0.6)]" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
