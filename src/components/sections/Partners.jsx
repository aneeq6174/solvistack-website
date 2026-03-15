import { ScrollReveal } from '../ui/ScrollReveal'

export function Partners() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-transparent relative z-10 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <ScrollReveal stagger={0}>
          <p className="text-ink-secondary font-medium tracking-wide text-lg md:text-xl leading-relaxed">
            SolviStack operates with its own expert in-house team and strategically collaborates with established development partners when required to deliver scalable, enterprise-ready digital solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
