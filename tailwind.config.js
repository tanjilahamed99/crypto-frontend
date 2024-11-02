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
        "gradient-text": "gradient-text 2s ease infinite",
        "mob1": "mob1 10s linear infinite",
        "mob2": "mob2 14s linear infinite",
        "mob3": "mob3 18s linear infinite",
        "mob4": "mob4 25s linear infinite",
        "mob5": "mob5 10s linear infinite",
        "mob6": "mob6 14s linear infinite",
        "mob7": "mob7 18s linear infinite",
        "mob8": "mob8 25s linear infinite",
        "mob9": "mob9 30s linear infinite",
      },
      keyframes: {
        mob1: {
          "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
          },
        },
        mob2: {
          "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
          },
        },
        mob3: {
          "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
          },
        },
        mob4: {
          "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
          },
        },
        mob5: {
          "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
          },
        },
        mob6: {
          "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
          },
        },
        mob7: {
          "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
          },
        },
        mob8: {
          "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
          },
        },
        mob9: {
          "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
          "25%": {
            transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
          },
          "75%": {
            transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
          },
        },
        "gradient-text": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
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
