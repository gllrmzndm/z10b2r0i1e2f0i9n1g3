module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /./
    },
  ],
}
