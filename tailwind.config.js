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
        // text: white on dark, with a muted gray
        ink: { DEFAULT: '#ffffff', muted: '#9aa6b6' },
        // primary page background (charcoal) + alt band + borders
        surface: { DEFAULT: '#2C2C2C', subtle: '#242424', muted: '#3a4150' },
        // navy used for cards, navbar, footer, form panel, FAQ items
        navy: { DEFAULT: '#000E20', soft: '#1D2530' },
        card: '#000E20',
        night: { DEFAULT: '#000E20', soft: '#1D2530' },
        // blue accent (section heading bars, primary buttons)
        brand: {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
          500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a',
        },
        // green accent (icons, form borders, submit, active nav underline)
        accent: { DEFAULT: '#2ECC40', soft: '#57e06a', deep: '#23a634' },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.3), 0 12px 30px -16px rgba(0,0,0,0.55)',
        lift: '0 30px 70px -28px rgba(0,0,0,0.7)',
        glow: '0 0 0 1px rgba(46,204,64,0.25), 0 18px 50px -22px rgba(46,204,64,0.45)',
      },
      backgroundImage: {
        'brand-radial': 'radial-gradient(120% 120% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 55%)',
        'green-radial': 'radial-gradient(120% 120% at 50% 0%, rgba(46,204,64,0.16) 0%, rgba(46,204,64,0) 55%)',
        'grid-glow':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 34s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 38s linear infinite',
      },
    },
  },
  plugins: [],
}
