module.exports = {
  content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
     ],
    theme: {
        extend: {
                screens: {
                    'sm': '175px',
                    'md': '475px',
            },
        },
    },
  plugins: [],
}
