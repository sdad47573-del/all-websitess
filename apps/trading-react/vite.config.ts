import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dns from 'node:dns';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  server: {
    host: true,
    allowedHosts: ['localhost']
  }
});
