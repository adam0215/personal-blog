/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'ui-sans-serif', 'system-ui'],
        mona: ['Mona Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        tropicalblue: {
          200: 'rgb(81 140 184 / <alpha-value>)',
          500: 'rgb(17 78 123 / <alpha-value>)',
          700: 'rgb(5 32 51 / <alpha-value>)',
        },
        beige: {
          500: 'rgb(220 238 222 / <alpha-value>)',
        },
        sand: {
          500: 'rgb(255 187 105 / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
