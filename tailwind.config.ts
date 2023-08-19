import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr', // min(18)=>16x18, max(20)=>16x20 
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        mario: '#8257e6'
      }
    },
  },
  plugins: [],
}
export default config
