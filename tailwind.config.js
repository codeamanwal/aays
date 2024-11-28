module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      width: {
        '68': '17rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
