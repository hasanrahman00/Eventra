/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1240px' },
    },
    extend: {
      colors: {
        ink: { DEFAULT: '#1c1745', muted: '#6a6592' },
        night: { DEFAULT: '#120e2e', soft: '#1b1640' },
        brand: {
          50: '#f1f0fe',
          100: '#e6e3fd',
          200: '#d2ccfb',
          300: '#b4abf7',
          400: '#9484f2',
          500: '#6d5bf0',
          600: '#5b46e4',
          700: '#4b37c7',
          800: '#3f30a1',
          900: '#372c7f',
        },
        accent: { DEFAULT: '#f59e0b', soft: '#fcd34d', deep: '#b45309' },
        surface: { DEFAULT: '#ffffff', subtle: '#f7f6fd', muted: '#e9e7f8' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(28,23,69,0.04), 0 10px 30px -16px rgba(28,23,69,0.22)',
        lift: '0 30px 70px -32px rgba(45,33,120,0.42)',
        glow: '0 0 0 1px rgba(109,91,240,0.18), 0 22px 56px -22px rgba(109,91,240,0.55)',
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(120% 120% at 50% 0%, rgba(109,91,240,0.22) 0%, rgba(109,91,240,0) 55%)',
        'brand-gradient': 'linear-gradient(100deg, #6d5bf0, #8b5cf6, #f59e0b)',
        'grid-faint':
          'linear-gradient(to right, rgba(28,23,69,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,23,69,0.05) 1px, transparent 1px)',
        'grid-glow':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 34s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'spin-slow': 'spin-slow 38s linear infinite',
      },
    },
  },
  plugins: [],
}
