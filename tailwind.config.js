/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': 'rgb(239, 242, 250)',
        'background': 'rgb(5, 5, 5)',
        'primary': 'rgb(26, 77, 244)',
        'secondary': 'rgb(18, 27, 59)',
        'accent': 'rgb(76, 235, 156)',
        'blue': {
          // 400: 'rgb(26, 77, 244)',
          50: 'rgb(233 246 255)',
          100: 'rgb(215 238 255)',
          200: 'rgb(183 223 255)',
          300: 'rgb(140 200 255)',
          400: 'rgb(95 161 255)',
          500: 'rgb(59 124 255)',
          600: 'rgb(25 82 255)',
          700: 'rgb(26 77 244)',
          800: 'rgb(15 60 196)',
          900: 'rgb(22 58 153)',
          950: 'rgb(13 32 89)',
        }
      }
    },
  },
  plugins: [],
}
