export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("@heroui/react").heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#9500ffff",
              foreground: "#000000",
            },
            background: "#0a0a0a",
            foreground: "#ededed",
          },
        },
      },
    }),
  ],
};
