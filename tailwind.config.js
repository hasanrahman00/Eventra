/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b1020',
          soft: '#1b2236',
          muted: '#5b6478',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          DEFAULT: '#f5a524',
          soft: '#fcd34d',
          deep: '#b45309',
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#f7f8fc',
          muted: '#eef0f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,16,32,0.04), 0 8px 24px -12px rgba(11,16,32,0.18)',
        lift: '0 24px 60px -28px rgba(31,27,90,0.45)',
        glow: '0 0 0 1px rgba(124,58,237,0.18), 0 18px 50px -20px rgba(124,58,237,0.55)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(11,16,32,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,16,32,0.045) 1px, transparent 1px)',
        'brand-radial':
          'radial-gradient(120% 120% at 50% 0%, rgba(124,58,237,0.20) 0%, rgba(124,58,237,0) 55%)',
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
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
