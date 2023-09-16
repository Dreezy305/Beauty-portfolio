/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1500px",
    },
    fontFamily: {
      LotaBold: "LotaBold",
      LotaBlack: "LotaBlack",
      LotaSemiBold: "LotaSemiBold",
      LotaRegular: "LotaRegular",
      LotaThin: "LotaThin",
      LotaThinItalic: "LotaThinItalic",
      SofiaBlack: "SofiaBlack",
      SofiaBold: "SofiaBold",
      SofiaSemiBold: "SofiaSemiBold",
      SofiaMedium: "SofiaMedium",
      SofiaRegular: "SofiaRegular",
      SofiaLight: "SofiaLight",
      SofiaExtraLight: "SofiaExtraLight",
      SofiaUltraLight: "SofiaUltraLight",
      GraphikBold: "GraphikBold",
      GraphikRegular: "GraphikRegular",
      GraphikMedium: "GraphikMedium",
      GraphikBlack: "GraphikBlack",
      GraphikLight: "GraphikLight"
    },
    extend: {
      colors: {
        BeautyLightBlue: "#00F0FF",
        BeautyLightYellow: "#FFCE00",
        BeautyLightBrown: "#F25F11",
        BeautyWhite: "#FFFFFF",
        BeautyBlack: "#000000",
        BeautyDeepBlue: "#4A47FF",
        BeautyDeepGreen: "#AEDC93",
        BeautyDeepGrey: "#2A95AB",
        BeautyDeepPurple: "#D85EEC",
        BeautyDarkPurple: "#1D1E2C",
        BeautyGrey: "#9AA9B180",
        BeautyDark: "#070B0D",
        BeautyLightGrey: "#292d32",
        BeautyCream: "#E5E9F2",
        BeautyGold: "#E29547",
        BeautyDeepPurple: "#4436AC",
        BeautyUnista: "#D70900",
        BeautyUplandsCream: "#FFCF81",
        BeautyDeepBlue: "#002C79",
        BeautyDeepGreen: "#089156"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
