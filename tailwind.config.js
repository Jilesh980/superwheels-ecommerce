/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Bebas Neue',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), 
            require('@tailwindcss/forms')
  ],
}

