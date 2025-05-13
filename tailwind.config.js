/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matrix: {
          green: '#00ff41',
          dark: '#1a1f2c',
          darker: '#0a0f18',
        },
        minimal: {
          primary: '#6366f1',
          surface: '#ffffff',
          muted: '#64748b',
          accent: '#818cf8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 255, 65, 0.3)',
        'minimal': '0 0 15px rgba(99, 102, 241, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};