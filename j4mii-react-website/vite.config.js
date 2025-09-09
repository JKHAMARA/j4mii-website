import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {},
    screens: {
      sm: "640px",  // Mobile → Tablet
      md: "768px",  // Tablet → Small laptops
      lg: "1024px", // Laptops
      xl: "1280px", // Desktops
      "2xl": "1536px", // Large screens
    },
  },
})
