import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
          'gray': '#636B74',
          'midnight': '#051423',
        }
    },
  },
  plugins: [],
}
export default config
