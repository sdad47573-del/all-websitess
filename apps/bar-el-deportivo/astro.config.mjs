// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://scruzabogados.vercel.app",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  compressHTML: true,
  security: { checkOrigin: true },
});
