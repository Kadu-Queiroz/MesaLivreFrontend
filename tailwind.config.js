/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E63946',       // Vermelho CTA
        secondary: '#2A9D8F',     // Verde de confirmação
        background: '#1A1A1A',    // Fundo escuro
        text: '#F8F9FA',          // Texto branco
        muted: '#495057',         // Cinza para elementos secundários
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['"Cormorant Garamond"', 'serif'],
      },
      zIndex: {
        menu: 40,
        tooltip: 50,
        modal: 60,
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};