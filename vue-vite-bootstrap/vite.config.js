import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/": {
        target: "https://apiv1-phi.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
});
