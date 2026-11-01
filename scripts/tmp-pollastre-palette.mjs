import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/super-pollastre/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* Super Pollastre · hoja de estilos propia
 * Marrón de asador, crema de pan y naranja de brasa. Bricolage Grotesque para
 * los titulares y Outfit para el texto; las franjas marrones y cremas
 * recuerdan al pollo girando en el horno.
 */

:root {
	--paper: #fdf7ed;
	--paper-2: #f2e6d2;
	--card: #fffdf8;
	--ink: #2b2018;
	--ink-soft: #5d5045;
	--ink-faint: #8f8172;
	--navy: #3a2416;
	--navy-dark: #2c1a0f;
	--navy-deep: #1b0f08;
	--navy-soft: #eeddc8;
	--maiz: #e8a23c;
	--maiz-soft: #f9e6c4;
	--coral: #c2452c;
	--line: #e4d4bd;
	--display: 'Bricolage Grotesque', 'Trebuchet MS', system-ui, sans-serif;
	--sans: 'Outfit', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #fdf7ed 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
