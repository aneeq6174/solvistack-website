/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#F8F9FA',
          surface: '#FFFFFF',
          blue: '#1A56DB',
          'blue-light': '#EFF6FF',
          slate: '#475569',
          ink: '#0F172A',
          border: '#E2E8F0',
          'border-light': '#F1F5F9',
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 4px 10px -6px rgba(0, 0, 0, 0.04)',
        'nav': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'cta': '0 4px 14px 0 rgba(26, 86, 219, 0.35)',
        'cta-hover': '0 8px 25px 0 rgba(26, 86, 219, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
