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
        "orbit-mars": "orbitMars 10s linear infinite",
        "orbit-venus": "orbitVenus 10s linear infinite",
        "orbit-jupiter": "orbitJupiter 10s linear infinite",
        "orbit-Saturn": "orbitSaturn 10s linear infinite",
        "orbit-1": "orbit1 10s linear infinite",
        "orbit-2": "orbit2 10s linear infinite",
        "orbit-3": "orbit3 10s linear infinite",
        "orbit-4": "orbit4 10s linear infinite",
        "gradient-text": "gradient-text 2s ease infinite",
        mob1: "mob1 10s linear infinite",
        mob2: "mob2 14s linear infinite",
        mob3: "mob3 18s linear infinite",
        mob4: "mob4 25s linear infinite",
        mob5: "mob5 10s linear infinite",
        mob6: "mob6 14s linear infinite",
        mob7: "mob7 18s linear infinite",
        mob8: "mob8 25s linear infinite",
        mob9: "mob9 30s linear infinite",
      },
      keyframes: {
        // mob1: {
        //   "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
        //   },
        // },
        // mob2: {
        //   "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
        //   },
        // },
        // mob3: {
        //   "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
        //   },
        // },
        // mob4: {
        //   "0%": { transform: "rotate(0deg) translateX(4rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(5rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(6.5rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(6rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(4rem) rotate(-360deg)",
        //   },
        // },
        // mob5: {
        //   "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
        //   },
        // },
        // mob6: {
        //   "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
        //   },
        // },
        // mob7: {
        //   "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
        //   },
        // },
        // mob8: {
        //   "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
        //   },
        // },
        // mob9: {
        //   "0%": { transform: "rotate(0deg) translateX(7rem) rotate(0deg)" },
        //   "25%": {
        //     transform: "rotate(90deg) translateX(8rem) rotate(-90deg)",
        //   },
        //   "50%": {
        //     transform: "rotate(180deg) translateX(9rem) rotate(-180deg)",
        //   },
        //   "75%": {
        //     transform: "rotate(270deg) translateX(9rem) rotate(-270deg)",
        //   },
        //   "100%": {
        //     transform: "rotate(360deg) translateX(7rem) rotate(-360deg)",
        //   },
        // },
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
          "0%": { transform: "rotate(82deg) translateX(11rem) rotate(-82deg)" },
          "25%": {
            transform: "rotate(172deg) translateX(14rem) rotate(-172deg)",
          },
          "50%": {
            transform: "rotate(262deg) translateX(14rem) rotate(-262deg)",
          },
          "75%": {
            transform: "rotate(352deg) translateX(11.5rem) rotate(-352deg)",
          },
          "100%": {
            transform: "rotate(442deg) translateX(11rem) rotate(-442deg)",
          },
        },
        orbitVenus: {
          "0%": {
            transform: "rotate(154deg) translateX(12.5rem) rotate(-154deg)",
          },
          "25%": {
            transform: "rotate(244deg) translateX(14rem) rotate(-244deg)",
          },
          "50%": {
            transform: "rotate(334deg) translateX(12.5rem) rotate(-334deg)",
          },
          "75%": {
            transform: "rotate(424deg) translateX(11rem) rotate(-424deg)",
          },
          "100%": {
            transform: "rotate(514deg) translateX(12.5rem) rotate(-514deg)",
          },
        },
        orbitJupiter: {
          "0%": {
            transform: "rotate(240deg) translateX(14rem) rotate(-240deg)",
          },
          "25%": {
            transform: "rotate(330deg) translateX(13rem) rotate(-330deg)",
          },
          "50%": {
            transform: "rotate(420deg) translateX(11rem) rotate(-420deg)",
          },
          "75%": {
            transform: "rotate(510deg) translateX(12rem) rotate(-510deg)",
          },
          "100%": {
            transform: "rotate(600deg) translateX(14rem) rotate(-600deg)",
          },
        },
        orbit1: {
          "0%": { transform: "rotate(40deg) translateX(14rem) rotate(-40deg)" },
          "25%": {
            transform: "rotate(130deg) translateX(14.5rem) rotate(-130deg)",
          },
          "50%": {
            transform: "rotate(220deg) translateX(17rem) rotate(-220deg)",
          },
          "75%": {
            transform: "rotate(310deg) translateX(16rem) rotate(-310deg)",
          },
          "100%": {
            transform: "rotate(400deg) translateX(14rem) rotate(-400deg)",
          },
        },
        orbit2: {
          "0%": {
            transform: "rotate(120deg) translateX(15.5rem) rotate(-120deg)",
          },
          "25%": {
            transform: "rotate(210deg) translateX(18rem) rotate(-210deg)",
          },
          "50%": {
            transform: "rotate(300deg) translateX(16rem) rotate(-300deg)",
          },
          "75%": {
            transform: "rotate(390deg) translateX(14rem) rotate(-390deg)",
          },
          "100%": {
            transform: "rotate(480deg) translateX(15rem) rotate(-480deg)",
          },
        },
        orbit3: {
          "0%": {
            transform: "rotate(190deg) translateX(16.5rem) rotate(-190deg)",
          },
          "25%": {
            transform: "rotate(280deg) translateX(16.5rem) rotate(-280deg)",
          },
          "50%": {
            transform: "rotate(370deg) translateX(14.5rem) rotate(-370deg)",
          },
          "75%": {
            transform: "rotate(460deg) translateX(14rem) rotate(-460deg)",
          },
          "100%": {
            transform: "rotate(550deg) translateX(16.5rem) rotate(-550deg)",
          },
        },
        orbit4: {
          "0%": {
            transform: "rotate(300deg) translateX(15rem) rotate(-300deg)",
          },
          "25%": {
            transform: "rotate(390deg) translateX(14rem) rotate(-390deg)",
          },
          "50%": {
            transform: "rotate(480deg) translateX(15rem) rotate(-480deg)",
          },
          "75%": {
            transform: "rotate(570deg) translateX(18rem) rotate(-570deg)",
          },
          "100%": {
            transform: "rotate(660deg) translateX(15rem) rotate(-660deg)",
          },
        },
      },
      backgroundImage: {
        "multi-color-gradient":
          "linear-gradient(to right, #ff7eb3, #ff65a3, #7afcff, #feff9c, #fff740, #ff00a7, #00d2ff, #ff5f00, #ff00c8, #00ffeb)",
      },
    },
  },
  plugins: [require("daisyui")],
};
