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
      name: "order",
      filename: "order-app.js",
      remotes: {},
      exposes: {
        "./OrderApp": "./src/App.tsx",
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
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
