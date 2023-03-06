/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
