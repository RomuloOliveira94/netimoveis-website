import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED672B",
        secondary: "#8224CB",
        body: "#555555",
      },
      backgroundImage: {
        "hero-desktop": "url('/hero-desktop.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "property-1": "url('/properties-options/01 - Sol da Manhã.png')",
        "property-2": "url('/properties-options/02 - Aceita Pet.png')",
        "property-3": "url('/properties-options/03 - Boa Internet.png')",
        "property-4": "url('/properties-options/04 - Tem Varanda.png')",
        "property-5": "url('/properties-options/05 - Tem Quintal.png')",
        "property-6": "url('/properties-options/06 - Ônibus Perto.png')",
        "portugal": "url('/4,1 - Portugal.png')",
        "presentation": "url('/5 - Apresentação.png')",
      },
      container: {
        center: true,
        padding: "6rem",
      },
    },
  },
  plugins: [],
};
export default config;
