import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // PERF: Build optimizations for production
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // PERF: Separate vendor chunks for better caching
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "framer-motion": ["framer-motion"],
          "ui-vendor": [
            "lucide-react",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
    // PERF: Use esbuild for minification (faster than terser)
    minify: "esbuild",
    // PERF: Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
}));
