/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/reactWorkshop/",
  plugins: [react()],
  test:{
    global:true,
    css:true,
    environment:"jsdom",
    setupFiles: "./src/test/setup.js"
  },
})
