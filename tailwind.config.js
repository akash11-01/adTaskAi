/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        rotate: "rotate 7s linear infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(100)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(360deg) scale(10)" },
        },
        move: {
          "0%": { transform: "translateX(100)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
