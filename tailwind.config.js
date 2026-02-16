/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#123D7A',
          'navy-light': '#1E4F9C',
          teal: '#17B3B0',
          dark: '#0B1C2D',
          'dark-lighter': '#0F2438',
          'dark-section': '#122A42',
        },
        /* Light section backgrounds - alternating */
        surface: {
          light: '#F8FAFC',
          'light-alt': '#F1F5F9',
          'light-muted': '#E2E8F0',
        },
        /* Accent palette - use sparingly for icons, highlights, CTAs */
        accent: {
          teal: '#17B3B0',
          blue: '#38BDF8',
          coral: '#FB7185',
          indigo: '#818CF8',
        },
        /* Text on light sections - ensure contrast */
        ink: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #123D7A, #17B3B0)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(23, 179, 176, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(18, 61, 122, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(23, 179, 176, 0.08) 0px, transparent 50%)',
        'gradient-blob': 'radial-gradient(ellipse 80% 80% at 50% 50%, var(--blob-color), transparent 70%)',
      },
      boxShadow: {
        'glow-teal': '0 0 40px -10px rgba(23, 179, 176, 0.4)',
        'glow-teal-sm': '0 0 20px -5px rgba(23, 179, 176, 0.3)',
        'glow-navy': '0 0 40px -10px rgba(18, 61, 122, 0.5)',
        'card-light': '0 4px 24px -4px rgba(15, 28, 45, 0.08)',
        'card-light-hover': '0 12px 40px -8px rgba(15, 28, 45, 0.12)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        'glow-border': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'glow-border': 'glow-border 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
