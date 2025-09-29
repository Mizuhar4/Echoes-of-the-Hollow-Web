/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos de src
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#1a1a1a",
        primary: "#7c3aed", // púrpura neón
      },
    },
  },
  plugins: [],
};
