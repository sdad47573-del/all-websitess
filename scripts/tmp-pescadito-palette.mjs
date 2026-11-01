import { readFileSync, writeFileSync } from 'node:fs';
const p = 'apps/el-pescadito/src/styles/global.css';
let s = readFileSync(p, 'utf8');
const start = s.indexOf('/* Atalaya');
const end = s.indexOf('}', s.indexOf(':root {')) + 1;
const block = `/* El Pescadito · hoja de estilos propia
 * Verde de agua marina, blanco de mesa y amarillo de limón. Sora para los
 * titulares y Nunito Sans para el texto; las franjas azules y blancas
 * recuerdan al toldo del chiringuito.
 */

:root {
	--paper: #f6f9f8;
	--paper-2: #e7f0ef;
	--card: #ffffff;
	--ink: #10262b;
	--ink-soft: #4d6569;
	--ink-faint: #8aa0a2;
	--navy: #0e3f4a;
	--navy-dark: #0a2f38;
	--navy-deep: #062026;
	--navy-soft: #ddecec;
	--maiz: #e8b33f;
	--maiz-soft: #f9ecc9;
	--coral: #d1583f;
	--line: #cfe0de;
	--display: 'Sora', 'Trebuchet MS', system-ui, sans-serif;
	--sans: 'Nunito Sans', 'Segoe UI', system-ui, sans-serif;
	--wrap: 76rem;
	--awning: repeating-linear-gradient(90deg, var(--navy) 0 20px, #f6f9f8 20px 40px);
}`;
writeFileSync(p, s.slice(0, start) + block + s.slice(end));
console.log('PALETTE_OK');
