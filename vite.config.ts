import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "./index.html",
    proxy: {
      "/api": "http://localhost:3001",
    },
  },

  esbuild: {
    // jsxInject: `import React from 'react'`,
  },
});
