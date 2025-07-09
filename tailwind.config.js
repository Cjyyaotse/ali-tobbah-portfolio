/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        accent: 'rgb(var(--color-accent))',
        background: 'rgb(var(--color-background))',
        surface: 'rgb(var(--color-surface))',
        text: 'rgb(var(--color-text))',
        'text-muted': 'rgb(var(--color-text-muted))',
        border: 'rgb(var(--color-border))'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        float: 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      }
    }
  },
  plugins: [
    // Glass morphism plugin only
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          '@apply backdrop-blur-md': {},
          'background': 'rgba(255, 255, 255, 0.15)',
          'border': '1px solid rgba(255, 255, 255, 0.2)'
        },
        '.dark .glass': {
          'background': 'rgba(30, 41, 59, 0.25)',
          'border': '1px solid rgba(129, 140, 248, 0.15)'
        }
      })
    }
  ]
}