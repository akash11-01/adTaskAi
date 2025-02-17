/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
        rotate: "rotate 7s linear infinite",
        "spin-slow": "spin 5s linear infinite",
        "text-shadow-fade": "textShadowFade 8s ease-in-out forwards",
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
        textShadowFade: {
          "0%": {
            textShadow: "0 0 0px white",
          },
          "20%": {
            textShadow: "0 0 15px white",
          },
          "100%": {
            textShadow: "0 0 0px transparent",
          },
        },
      },
    },
  },
  plugins: [],
};
