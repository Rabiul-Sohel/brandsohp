/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-gradient": "linear-gradient(to bottom, #3366ff 0%, #ff0066 100%)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

