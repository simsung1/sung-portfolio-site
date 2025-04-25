/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          samsung: ['SamsungOne', 'sans-serif'],
          sharpsans: ['SamsungSharpSans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  