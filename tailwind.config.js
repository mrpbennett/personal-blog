/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        'dracula-bg-darker': '#191A21',
        'dracula-bg': '#282A36',
        'dracula-fg': '#F8F8F2',
        'dracula-cyan': '#8BE9FD',
        'dracula-green': '#50FA7B',
      },
      typography: {
        DEFAULT: {
          css: {
            h3: {
              'margin-bottom': 0,
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
