import { Hero } from '../components/sections/Hero'
import { Problem } from '../components/sections/Problem'
import { Services } from '../components/sections/Services'
import { AutomationProjects } from '../components/sections/AutomationProjects'
import { AutomationFlow } from '../components/sections/AutomationFlow'
import { FeaturedWork } from '../components/sections/FeaturedWork'

import { Testimonials } from '../components/sections/Testimonials'
import { Process } from '../components/sections/Process'
import { TechStack } from '../components/sections/TechStack'
import { Cta } from '../components/sections/Cta'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <AutomationProjects />
      <AutomationFlow />
      <FeaturedWork />

      <Testimonials />
      <Process />
      <TechStack />
      <Cta />
    </main>
  )
}
