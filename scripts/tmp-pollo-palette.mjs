import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/pollo-de-casa/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* Pollo de Casa · hoja de estilos propia
 * Berenjena de mantel, crema de papel y dorado de piel de pollo. DM Serif Display
 * para los titulares y Manrope para el texto; las franjas moradas y cremas
 * recuerdan a los manteles del comedor.
 */

:root {
	--paper: #fbf7ef;
	--paper-2: #efe8dc;
	--card: #fffdf8;
	--ink: #241d26;
	--ink-soft: #5d5560;
	--ink-faint: #8e8691;
	--navy: #3b2b47;
	--navy-dark: #2d2038;
	--navy-deep: #1e1526;
	--navy-soft: #ece4f0;
	--maiz: #d9a13b;
	--maiz-soft: #f7e8c4;
	--coral: #b1663a;
	--line: #e0d6c6;
	--display: 'DM Serif Display', 'Georgia', serif;
	--sans: 'Manrope', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #fbf7ef 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
