module.exports = {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        listStyleType: {
          none: 'none',
          disc: 'disc',
          decimal: 'decimal',
          square: 'square',
          roman: 'upper-roman',
        },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
    ],
  }