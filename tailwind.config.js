/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0A1128',
          blue: '#1E3A8A',
          teal: '#06B6D4',
          'teal-dark': '#0F766E',
          dark: '#050814',
          'dark-lighter': '#0A1128',
          'dark-section': '#070C1D',
        },
        surface: {
          light: '#F8FAFC',
          'light-alt': '#F1F5F9',
          'light-muted': '#E2E8F0',
          glass: 'rgba(10, 17, 40, 0.65)',
          'glass-light': 'rgba(255, 255, 255, 0.05)',
        },
        accent: {
          teal: '#06B6D4',
          blue: '#1E3A8A',
          cyan: '#22d3ee',
          glow: '#06B6D4',
        },
        ink: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1E3A8A, #06B6D4)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(30, 58, 138, 0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.08) 0px, transparent 50%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
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
