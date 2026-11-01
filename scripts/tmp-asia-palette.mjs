import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/restaurante-asia/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* Restaurante Asia · hoja de estilos propia
 * Rojo lacado, crema de té y dorado de laca. Cormorant Garamond para los
 * titulares y Rubik para el texto; las franjas rojas y cremas recuerdan al
 * toldo de la fachada y a los farolillos del comedor.
 */

:root {
	--paper: #f8f2e7;
	--paper-2: #eee2cf;
	--card: #fffdf8;
	--ink: #2b1f1b;
	--ink-soft: #5d4c45;
	--ink-faint: #8f7d74;
	--navy: #5c1a1b;
	--navy-dark: #481314;
	--navy-deep: #2a0b0c;
	--navy-soft: #ecdccf;
	--maiz: #c9a24a;
	--maiz-soft: #f5e6c2;
	--coral: #b8462b;
	--line: #e2d5c0;
	--display: 'Cormorant Garamond', 'Georgia', serif;
	--sans: 'Rubik', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #f8f2e7 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
