/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 30px 70px 0px #0005271A',
        custom2:'0px 16px 32px -16px #31BF5C52;',
      },
    },
  },
  plugins: [],
};
