import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, '../../packages/@assets');

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		host: true,
		port: 5173,
		strictPort: true,
		hmr: {
			clientPort: 5173,
		},
	},
	resolve: {
		alias: {
			'@assets': assetsDir,
			'@': path.resolve(__dirname, './src'),
		},
	},
});
