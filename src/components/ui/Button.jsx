import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-br from-brand-navy to-brand-teal text-white shadow-glow-teal-sm hover:shadow-glow-teal hover:brightness-110',
  outline: 'border border-brand-teal text-brand-teal bg-transparent hover:bg-brand-teal/10',
}

export function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-sm transition-all duration-300'
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
