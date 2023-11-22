import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '390px',
      'sm-2': '600px',
      md: '810px',
      lg: '1080px',
      xl: '1500px',
      '2xl': '100%'
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '2000px'
      }
    },
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
