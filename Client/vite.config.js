import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // import "@/components/..." gibi
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild", // Tersine tersine "terser" dersen daha küçük olur ama yavaş
    cssCodeSplit: true, // CSS’i parçalara ayır
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // tüm node_modules için ayrı bundle
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
