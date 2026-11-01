import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/face-wok/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* Face Wok · hoja de estilos propia
 * Grafito de plancha, crema de arroz y naranja de wok. Archivo para los
 * titulares e Inter para el texto; las franjas oscuras y naranjas recuerdan
 * al rótulo del local y al fuego del wok.
 */

:root {
	--paper: #fbf7f1;
	--paper-2: #efe9e0;
	--card: #ffffff;
	--ink: #1f2226;
	--ink-soft: #545a61;
	--ink-faint: #8b9199;
	--navy: #24262b;
	--navy-dark: #1b1d21;
	--navy-deep: #101215;
	--navy-soft: #e9e4dc;
	--maiz: #e2852f;
	--maiz-soft: #f8e3cc;
	--coral: #c2372a;
	--line: #ddd5c9;
	--display: 'Archivo', 'Trebuchet MS', system-ui, sans-serif;
	--sans: 'Inter', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #fbf7f1 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
