import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, '../../packages/@assets');

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@assets': assetsDir,
		},
	},
	test: {
		environment: 'jsdom',
		include: ['src/**/*.test.{ts,tsx}'],
		setupFiles: ['./src/test/setup.ts'],
		globals: true, // Optional: enables global describe/it/expect
		env: {
			VITE_SUPABASE_URL: 'https://example.com',
			VITE_SUPABASE_ANON_KEY: 'test-key',
		},
	},
});
