/**
 * Soft abstract gradient blobs for hero and key sections. Low opacity, non-distracting.
 */
export function SectionBgBlobs({ variant = 'dark' }) {
  const isDark = variant === 'dark'
  const opacity = isDark ? 'opacity-30' : 'opacity-20'
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={`absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl bg-brand-teal/20 ${opacity} animate-float`}
        style={{ animationDuration: '8s' }}
      />
      <div
        className={`absolute top-1/2 -left-32 w-80 h-80 rounded-full blur-3xl bg-brand-navy/25 ${opacity}`}
        style={{ animationDelay: '1s', animationDuration: '10s' }}
      />
      <div
        className={`absolute bottom-0 right-1/3 w-72 h-72 rounded-full blur-3xl bg-accent-blue/15 ${opacity}`}
        style={{ animationDelay: '2s', animationDuration: '9s' }}
      />
    </div>
  )
}
