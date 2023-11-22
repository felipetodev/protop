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
          tang: '#003F9C',
          space: '#16172E',
          lavander: '#C9D2E4',
          seasalt: '#F7F7F7'
        }
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(180deg, #0066FF 0%, #015FEA 100%)',
        'gray-gradient': 'linear-gradient(180deg, #C9D2E4 0%, #F7F7F7 100%)'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 120s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll 120s linear infinite reverse'
      },
      keyframes: {
        'infinite-scroll': {
          to: { transform: 'translate(calc(-50% - 2.5rem))' }
        }
      }
    }
  },
  plugins: []
}
export default config
