import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/el-leon-de-oro/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* El León de Oro · hoja de estilos propia
 * Marrón de barra, crema de papel y dorado de grifo. Libre Baskerville para
 * los titulares y Work Sans para el texto; las franjas marrones y cremas
 * recuerdan al toldo y a la chapa dorada del local.
 */

:root {
	--paper: #faf4e8;
	--paper-2: #efe3ce;
	--card: #fffdf6;
	--ink: #2a2118;
	--ink-soft: #5d5043;
	--ink-faint: #8d806e;
	--navy: #3b2a1e;
	--navy-dark: #2d2017;
	--navy-deep: #1b120c;
	--navy-soft: #ece0cd;
	--maiz: #c6a147;
	--maiz-soft: #f4e5bd;
	--coral: #a8452c;
	--line: #e0d3bc;
	--display: 'Libre Baskerville', 'Georgia', serif;
	--sans: 'Work Sans', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #faf4e8 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
