import { motion } from 'framer-motion'

/**
 * @param {'dark' | 'light'} variant - dark: light text (for dark sections). light: dark text (for light sections).
 */
export function SectionHeading({ title, subtitle, variant = 'dark', className = '' }) {
  const isLight = variant === 'light'
  const titleCls = isLight
    ? 'text-3xl md:text-4xl font-semibold text-ink-primary tracking-tight'
    : 'text-3xl md:text-4xl font-semibold text-white tracking-tight'
  const subtitleCls = isLight
    ? 'mt-3 text-ink-secondary max-w-xl mx-auto font-medium text-base md:text-lg leading-relaxed'
    : 'mt-3 text-white/70 max-w-xl mx-auto font-medium text-base md:text-lg leading-relaxed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <h2 className={titleCls}>{title}</h2>
      {subtitle && <p className={subtitleCls}>{subtitle}</p>}
    </motion.div>
  )
}
