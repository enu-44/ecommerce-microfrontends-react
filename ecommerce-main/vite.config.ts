import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import federation from "@originjs/vite-plugin-federation"
const { dependencies } = require("./package.json")
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "Ecommerce",
      remotes: {
        order: "http://localhost:5174/assets/order-app.js",
        product: "http://localhost:5173/assets/product-app.js"
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          version: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        }
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  }
})
