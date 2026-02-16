import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

/**
 * Wraps a button/link with a subtle magnetic pull toward the cursor on hover.
 * Strength is in pixels (e.g. 8 = very subtle).
 */
export function MagneticButton({ children, strength = 8, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / rect.width
    const dy = (e.clientY - cy) / rect.height
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const transform = useMotionTemplate`translate(${x}px, ${y}px)`

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}
