import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// Cliente Solid. La API y las vistas previas las sirve `server.ts` con Bun: en
// desarrollo Vite reenvía /api y /preview al puerto del servidor para que el
// navegador vea un solo origen (sin esto, /preview cae en el index.html del CMS).
export default defineConfig({
	plugins: [solid()],
	server: {
		// `bun run dev` anuncia 127.0.0.1: este host explícito evita que Vite
		// escuche solo en ::1 y el navegador se quede esperando la API.
		host: "127.0.0.1",
		port: 4401,
		strictPort: true,
		proxy: {
			"/api": "http://127.0.0.1:4400",
			"/preview": "http://127.0.0.1:4400",
		},
	},
	build: {
		outDir: "dist",
	},
});
