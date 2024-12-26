/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray1':"#4D4D4D",
        'custom-gray2':"#8A8A8A",
        'custom-orange1':"#FA7C54",
        'custom-orange2':"#EB5231",
        'custom-indigo':"#571FCF",
        'custom-light-green':"#42BB4E",
      },
      backgroundImage: {
        'custom-image': "url('/src/assets/Images/BG Vector.png')",
        'custom-gradient':"linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(141deg, #EB5231 -29.15%, #571FCF 151.64%)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:
  {
    theme: true,
    darkTheme: "business"
  }
}

