/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*{html,js}', 'index.html', './test/**/*{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#ecf0f1',
        second: '#fafeff',
        dark: '#252525',
        heroMain: '#7f8c8d',
        nav: '#95a5a6',
        darkCard: '#34495e',
        deepSea: '#31304D',
        extraDark: '#000000'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        firaCode: ['Fira Code', 'monospace']
      },
      animation: {
        typing: "typed 700ms ease-in-out infinite alternate 0.5s"
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        typed: {
          "0%" : { opacity: "0" },
          "50%" : { opacity: "1" },
          "100%" : { opacity: "0" }
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

