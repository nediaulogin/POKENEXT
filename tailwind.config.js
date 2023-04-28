/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      margin: {
        'left-.5em': '.5em',
        'left-1.5em': '1.5em',
        'right-.5em': '.5em',
        'right-1.5em': '1.5em',
        'top-2em': '2em',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      minHeight: {
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
