import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/kebab-byron/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* Kebab Byron · hoja de estilos propia
 * Brasa de carbón, pan de pita y rojo de guindilla. Oswald para los titulares
 * y DM Sans para el texto; las franjas oscuras y cremas recuerdan al asador
 * vertical y a la barra del local.
 */

:root {
	--paper: #fbf6ee;
	--paper-2: #efe6d9;
	--card: #ffffff;
	--ink: #221c17;
	--ink-soft: #59504a;
	--ink-faint: #8e837a;
	--navy: #2f1e15;
	--navy-dark: #24170f;
	--navy-deep: #150d08;
	--navy-soft: #ece0d2;
	--maiz: #dd9834;
	--maiz-soft: #f8e6c8;
	--coral: #b9392a;
	--line: #e2d6c6;
	--display: 'Oswald', 'Trebuchet MS', system-ui, sans-serif;
	--sans: 'DM Sans', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #fbf6ee 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
