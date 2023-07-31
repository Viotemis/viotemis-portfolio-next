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
      }
    },
  },
  plugins: [],
}
