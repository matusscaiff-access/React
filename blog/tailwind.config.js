/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{ //tailwind screen sizes so that you can adjust the colours for different screen sizes
      sm:"400px",
    },
    extend: {
      fontFamily:{ // importing fonts and naming them
        heading:["Fjalla One","serif"],
        body:["Oswald", "sand-serif"],
      },
      colors:{ // colours and their hex codes, you can name each colour so that it is easy to reuse later
        teal: "#488286",
        tiffany: "#A8DCDA",
        onyx: "#373E40"
      }
    },
  },
  plugins: [],
}