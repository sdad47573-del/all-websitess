import { vlyPlugin } from "@vly-ai/integrations";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vlyPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Force a single copy of React across all packages (including vlyPlugin).
    // Without this, @vly-ai/integrations can resolve its own React copy, which
    // triggers "Invalid hook call" errors at runtime.
    dedupe: ["react", "react/jsx-runtime", "react-dom", "react-dom/client"],
  },
  build: {
    // Enable source maps for better debugging (disable in production if needed)
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and lazy loading
        manualChunks(id) {
      if (!id.includes('node_modules')) return undefined;
      if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router/')) return 'react-vendor';
      if (id.includes('node_modules/@radix-ui/react-accordion/') || id.includes('node_modules/@radix-ui/react-alert-dialog/') || id.includes('node_modules/@radix-ui/react-avatar/') || id.includes('node_modules/@radix-ui/react-checkbox/') || id.includes('node_modules/@radix-ui/react-collapsible/') || id.includes('node_modules/@radix-ui/react-context-menu/') || id.includes('node_modules/@radix-ui/react-dialog/') || id.includes('node_modules/@radix-ui/react-dropdown-menu/') || id.includes('node_modules/@radix-ui/react-hover-card/') || id.includes('node_modules/@radix-ui/react-label/') || id.includes('node_modules/@radix-ui/react-menubar/') || id.includes('node_modules/@radix-ui/react-navigation-menu/') || id.includes('node_modules/@radix-ui/react-popover/') || id.includes('node_modules/@radix-ui/react-progress/') || id.includes('node_modules/@radix-ui/react-radio-group/') || id.includes('node_modules/@radix-ui/react-scroll-area/') || id.includes('node_modules/@radix-ui/react-select/') || id.includes('node_modules/@radix-ui/react-separator/') || id.includes('node_modules/@radix-ui/react-slider/') || id.includes('node_modules/@radix-ui/react-switch/') || id.includes('node_modules/@radix-ui/react-tabs/') || id.includes('node_modules/@radix-ui/react-toggle/') || id.includes('node_modules/@radix-ui/react-toggle-group/') || id.includes('node_modules/@radix-ui/react-tooltip/')) return 'radix-ui';
      if (id.includes('node_modules/framer-motion/')) return 'framer-motion';
      if (id.includes('node_modules/recharts/')) return 'charts';
      if (id.includes('node_modules/react-hook-form/') || id.includes('node_modules/@hookform/resolvers/') || id.includes('node_modules/zod/')) return 'forms';
      return undefined;
    },
        // Optimize chunk size
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Increase chunk size warning limit for better chunking
    chunkSizeWarningLimit: 1000,
    // Target modern browsers for better optimization
    target: 'esnext',
    // Minify options - using esbuild (faster than terser)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    // Only scan the app entry HTML; avoids crawling unrelated *.html files
    // if a legacy snapshot accidentally contains leaked package folders.
    entries: ['index.html'],
    include: [
      'react',
      'react/jsx-runtime',
      'react-dom',
      'react-dom/client',
      'react-router',
      'framer-motion',
      // vlyPlugin() injects this import at serve time, so the dep scanner
      // never sees it. Without it here the first page load discovers it,
      // re-optimizes and full-reloads the preview mid-screenshot.
      '@vly-ai/integrations',
    ],
  },
  // Performance hints
  server: { allowedHosts: true,
    // Bind to all interfaces so the browser runtime's server-ready event fires.
    host: true,
    port: 5173,
    // The Hono API runs on its own port in development. Proxying it here keeps
    // the browser on a single origin, so the app can use relative URLs and
    // does not need CORS in production.
    proxy: {
      '/api': {
        target: process.env.API_URL ?? 'http://localhost:8787',
        changeOrigin: true,
      },
    },
    // Keep HMR on, but disable full-screen error overlay
    hmr: {
      overlay: false,
    },
  },
});
