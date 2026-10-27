import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/School/",
  server: {
    proxy: {
      "/school": {
        // target: "http://localhost:8080",
        target: "https://login-3pvf.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
