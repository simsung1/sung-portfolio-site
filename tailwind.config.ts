/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          samsung: 'var(--font-samsung-one)',
          sharpsans: 'var(--font-sharpsans)',
        },
      },
    },
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('tailwind-scrollbar-hide')
    ]
  }
  