import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/el-raco-de-l-arros/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* El Racó de l'Arròs · hoja de estilos propia
 * Verde de olivo, crema de arroz y azafrán. Marcellus para los titulares y
 * Mulish para el texto; las franjas verdes y cremas recuerdan al mantel
 * de cuadros y a la paellera.
 */

:root {
	--paper: #faf6ec;
	--paper-2: #eee6d4;
	--card: #fffdf7;
	--ink: #26231a;
	--ink-soft: #5b564a;
	--ink-faint: #8d8778;
	--navy: #1f3b34;
	--navy-dark: #17302a;
	--navy-deep: #0e1f1b;
	--navy-soft: #e0e8dc;
	--maiz: #d9a13b;
	--maiz-soft: #f7e8c4;
	--coral: #b0452f;
	--line: #ded4bf;
	--display: 'Marcellus', 'Georgia', serif;
	--sans: 'Mulish', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #faf6ec 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
