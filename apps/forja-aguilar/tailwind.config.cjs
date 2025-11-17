import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
		// 👇 MUY IMPORTANTE: incluir paquetes compartidos
		join(process.cwd(), '../../packages/**/*.{js,ts,jsx,tsx,astro}'),
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
