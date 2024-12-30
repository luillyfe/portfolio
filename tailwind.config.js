/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
