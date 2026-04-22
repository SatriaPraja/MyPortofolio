import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Wajib ada ini
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tambahkan variabel warna jika ingin lebih fleksibel
      }
    },
  },
  plugins: [],
};
export default config;