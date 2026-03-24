/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#7AC843",
        pureBlack: "#000000",
        pageBg: "#F7F7F7",
        bodyText: "#595959",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ['"Century Gothic"', "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "cyan-grad": "linear-gradient(270deg, #57C9D8 0%, #3EA7B5 100%)",
        "gold-grad": "linear-gradient(270deg, #F5DD7D 0%, #DDB863 100%)",
        "green-grad": "linear-gradient(270deg, #7EC147 0%, #000000 100%)",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
}

export default config

