import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/gym-project/",
  plugins: [react()],
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}],
  },
})
