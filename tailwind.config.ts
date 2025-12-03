import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0891B2',
        'primary-dark': '#0E7490',
        'primary-light': '#06B6D4',
      },
    },
  },
  plugins: [],
}
export default config


