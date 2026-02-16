import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { AutomationProjects } from '../components/sections/AutomationProjects'
import { AutomationFlow } from '../components/sections/AutomationFlow'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { Partners } from '../components/sections/Partners'
import { Testimonials } from '../components/sections/Testimonials'
import { Process } from '../components/sections/Process'
import { TechStack } from '../components/sections/TechStack'
import { Cta } from '../components/sections/Cta'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <AutomationProjects />
      <AutomationFlow />
      <FeaturedWork />
      <Partners />
      <Testimonials />
      <Process />
      <TechStack />
      <Cta />
    </main>
  )
}
