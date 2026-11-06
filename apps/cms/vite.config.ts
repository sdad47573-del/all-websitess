import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// Cliente Solid. La API la sirve `server.ts` con Bun: en desarrollo Vite
// reenvía /api al puerto del servidor para que el navegador vea un solo origen.
export default defineConfig({
	plugins: [solid()],
	server: {
		port: 4401,
		strictPort: true,
		proxy: {
			"/api": "http://127.0.0.1:4400",
		},
	},
	build: {
		outDir: "dist",
	},
});
