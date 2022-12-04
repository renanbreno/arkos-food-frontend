/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      transparent: "transparent",
      black: "#000000",

      brand: {
        "p-1": "#283253",
        "p0": "#112152",
        "p+1": "#07102B",
      },
      secondary: {
        "s-1": "#6F8AEC",
        "s0": "#4B6EEC",
        "s+1": "#3655C7"
      },
      gray: {
        "p-1": "#303030",
        "p0": "#1C2025"
      },
      white: {
        "s-1": "#EDEFF2",
        "s0": "#E0E5F2",
        "s+1": "#D4D9E5",
      },
      complementar: {
        "c-1": "#FF7D7D",
        "c0": "#FF5757",
        "c+1": "#D94A4A",
      },
      helpers: {
        "success": "#5BB25F",
        "error": "#E8403C",
        "warning": "#ECBF1F",
        "info": "#1F3DDE",
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
