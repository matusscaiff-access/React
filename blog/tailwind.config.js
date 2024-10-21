/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{ //tailwind screen sizes so that you can adjust the colours for different screen sizes
      sm:"480",
      sml:"768",
      md:"834",
      mdl:"1024",
      lg:"1280",
      xl:"1440",
    },
    extend: {
      fontFamily:{ // importing fonts and naming them
        heading:["Fjalla One","serif"],
        body:["Oswald", "sand-serif"],
      },
      colors:{ // colours and their hex codes, you can name each colour so that it is easy to reuse later

        teal:{
          100: "hsl(184, 30, 60)",
          200: "hsl(184, 30, 50)",
          300: "hsl(184, 30, 40)",
          400: "hsl(184, 30, 30)",
          500: "hsl(184, 30, 20)",
        },
        tiffany:{
          100: "hsl(178, 43, 96)",
          200: "hsl(178, 43, 86)",
          300: "hsl(178, 43, 76)",
          400: "hsl(178, 43, 66)",
          500: "hsl(178, 43, 56)",
        },
        onyx: {
          100: "hsl(193, 8%, 43%)",
          200: "hsl(193, 8%, 33%)",
          300: "hsl(193, 8%, 23%)",
          400: "hsl(193, 8%, 13%)",
          500: "hsl(193, 8%, 3%)",
        }
      }
    },
  },
  plugins: [],
}