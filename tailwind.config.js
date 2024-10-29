/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FA8900",
        secondary: "",
      },
      animation: {
        "orbit-earth": "orbitEarth 10s linear infinite",
        "orbit-mars": "orbitMars 12s linear infinite",
        "orbit-venus": "orbitVenus 14s linear infinite",
        "orbit-jupiter": "orbitJupiter 17s linear infinite",
        "orbit-Saturn": "orbitSaturn 10s linear infinite",
        "orbit-1": "orbit1 12s linear infinite",
        "orbit-2": "orbit2 14s linear infinite",
        "orbit-3": "orbit3 16s linear infinite",
        "orbit-4": "orbit4 18s linear infinite",
        'gradient-text': 'gradient-text 2s ease infinite',
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orbitEarth: {
          "0%": { transform: "rotate(0deg) translateX(11rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(11rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(14rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(14rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(11rem) rotate(-360deg)",
          },
        },
        orbitMars: {
          "0%": { transform: "rotate(0deg) translateX(11rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(11rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(14rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(14rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(11rem) rotate(-360deg)",
          },
        },
        orbitVenus: {
          "0%": { transform: "rotate(0deg) translateX(11rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(11rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(14rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(14rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(11rem) rotate(-360deg)",
          },
        },
        orbitJupiter: {
          "0%": { transform: "rotate(0deg) translateX(11rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(11rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(14rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(14rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(11rem) rotate(-360deg)",
          },
        },
        orbitSaturn: {
          "0%": { transform: "rotate(0deg) translateX(14rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(14rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(18rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(18rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(14rem) rotate(-360deg)",
          },
        },
        orbit1: {
          "0%": { transform: "rotate(0deg) translateX(14rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(14rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(18rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(18rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(14rem) rotate(-360deg)",
          },
        },
        orbit2: {
          "0%": { transform: "rotate(0deg) translateX(14rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(14rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(18rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(18rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(14rem) rotate(-360deg)",
          },
        },
        orbit3: {
          "0%": { transform: "rotate(0deg) translateX(14rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(14rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(18rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(18rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(14rem) rotate(-360deg)",
          },
        },
        orbit4: {
          "0%": { transform: "rotate(0deg) translateX(14rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(14rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(18rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(18rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(14rem) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
