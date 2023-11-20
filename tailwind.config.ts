import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        protop: {
          'light-blue': '#0066FF',
          space: '#16172E',
          lavander: '#C9D2E4',
          seasalt: '#F7F7F7'
        }
      }
    }
  },
  plugins: []
}
export default config
