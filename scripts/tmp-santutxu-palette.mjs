import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/kebab-y-pizzeria-santutxu/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* Kebab y Pizzería Santutxu · hoja de estilos propia
 * Rojo de tomate, crema de masa y verde de orégano. Barlow Condensed para los
 * titulares y Karla para el texto; las franjas rojas y cremas recuerdan al
 * rótulo del local y a la caja de la pizza.
 */

:root {
	--paper: #fbf4ec;
	--paper-2: #f1e4d4;
	--card: #fffdf8;
	--ink: #251d18;
	--ink-soft: #5a4c43;
	--ink-faint: #8d7d72;
	--navy: #3c201a;
	--navy-dark: #2e1712;
	--navy-deep: #1c0d09;
	--navy-soft: #eee0cf;
	--maiz: #e0a33e;
	--maiz-soft: #f8e6c4;
	--coral: #b23026;
	--line: #e3d4c0;
	--display: 'Barlow Condensed', 'Trebuchet MS', system-ui, sans-serif;
	--sans: 'Karla', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--coral) 0 20px, #fbf4ec 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
