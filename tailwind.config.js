module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["UBUNTU", "regular"],
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
