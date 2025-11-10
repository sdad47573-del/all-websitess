// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://sergiocruzchacon.vercel.app",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@lib": path.resolve("./src/lib"),
        "@mocks": path.resolve("./src/mocks"),
        "@pages": path.resolve("./src/pages"),
        "@styles": path.resolve("./src/styles"),
      },
    },
  },
  output: "static",
  compressHTML: true,
  security: { checkOrigin: true },
});
