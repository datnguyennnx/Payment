module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}