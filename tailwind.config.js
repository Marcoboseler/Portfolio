/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
            './src/**/*.vue',
            './components/**.{html, js, vue}',
            './components/*.vue',
            './components/**/*.vue',
            './src/components/**.vue',
            './src/components/**/*.vue',
            './src/components/*.vue'
],
  theme: {
    extend: {},
  },
  plugins: [],
}
