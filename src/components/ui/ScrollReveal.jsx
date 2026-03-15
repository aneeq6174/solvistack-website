import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollReveal({ children, className = '', stagger = 0.1, delay = 0 }) {
  const container = useRef(null)

  useGSAP(() => {
    const elements = container.current.children
    let mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%', // trigger when top of element hits 85% of viewport
          toggleActions: 'play none none reverse'
        }
      })
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(elements, { y: 0, opacity: 1 })
    })

    return () => mm.revert()
  }, { scope: container })

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  )
}
