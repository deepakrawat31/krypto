/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      fontFamily: {
         space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
         resinblack: "#252323",
         eggshell: "#E4E3D3",
         bittersweet: "#E26D5C",
         periwink: "#ACACDE",
         emerald: "#24D988",
         night: "#1C1C1C",
      },
   },
   plugins: [],
};
