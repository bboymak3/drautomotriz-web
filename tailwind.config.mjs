/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta AZUL NEÓN - DRAUTOMOTRIZ
        neon: {
          50: '#e6fbff',
          100: '#ccf7ff',
          200: '#99efff',
          300: '#66e6ff',
          400: '#33deff',
          500: '#00d4ff', // Azul neón principal
          600: '#00a8cc',
          700: '#007d99',
          800: '#005266',
          900: '#002633',
        },
        // Paleta NARANJA NEÓN - Solo para servicio especial Revisión Técnica
        orange: {
          50: '#fff5e6',
          100: '#ffebcc',
          200: '#ffd699',
          300: '#ffbf66',
          400: '#ffa833',
          500: '#ff8a00', // Naranja neón principal
          600: '#cc6e00',
          700: '#995300',
          800: '#663700',
          900: '#331c00',
        },
        dark: {
          50: '#1a1a1a',
          100: '#141414',
          200: '#0f0f0f',
          300: '#0a0a0a',
          400: '#050505',
          500: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Orbitron', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px #00d4ff, 0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-lg': '0 0 10px #00d4ff, 0 0 40px rgba(0, 212, 255, 0.7), 0 0 80px rgba(0, 212, 255, 0.3)',
        'neon-sm': '0 0 3px #00d4ff, 0 0 10px rgba(0, 212, 255, 0.5)',
        'orange-neon': '0 0 5px #ff8a00, 0 0 20px rgba(255, 138, 0, 0.6)',
        'orange-neon-lg': '0 0 10px #ff8a00, 0 0 40px rgba(255, 138, 0, 0.8), 0 0 80px rgba(255, 138, 0, 0.4)',
        'orange-neon-sm': '0 0 3px #ff8a00, 0 0 10px rgba(255, 138, 0, 0.6)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-orange': 'pulse-orange 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 5px #00d4ff, 0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px #00d4ff, 0 0 60px rgba(0, 212, 255, 0.8)' },
        },
        'pulse-orange': {
          '0%, 100%': { boxShadow: '0 0 5px #ff8a00, 0 0 20px rgba(255, 138, 0, 0.6)' },
          '50%': { boxShadow: '0 0 20px #ff8a00, 0 0 60px rgba(255, 138, 0, 0.9)' },
        },
        'glow': {
          'from': { textShadow: '0 0 10px #00d4ff, 0 0 20px rgba(0, 212, 255, 0.5)' },
          'to': { textShadow: '0 0 20px #00d4ff, 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-neon': 'linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)',
        'gradient-neon': 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 50%, #007d99 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff8a00 0%, #cc6e00 50%, #995300 100%)',
      },
    },
  },
  plugins: [],
};
