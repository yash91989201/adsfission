/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "560px",
        xxs: "380px",
      },
      colors: {
        primary: {
          25: "#f5faff",
          50: "#e7eefb",
          75: "#9bbbf0",
          100: "#729fea",
          200: "#3575e1",
          300: "#0c59db",
          400: "#083e99",
          500: "#073686",
          600: "#002249",
          700: "#00152e",
        },
      },
      gridTemplateColumns: {
        "fit-services": "repeat(auto-fit, minmax(240px, 1fr))",
        "fit-features": "repeat(auto-fit, minmax(320px, 1fr))",
        "fit-contact": "repeat(auto-fit, minmax(160px, 1fr))",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero_banner_bg.jpg')",
        "dot-pattern": "url('/service_dot.png')",
        "contact-pattern": "url('/contact_us.png')",
      },
      aspectRatio: {
        "service-ratio": "3 / 2",
      },
    },
  },
  plugins: [],
};
