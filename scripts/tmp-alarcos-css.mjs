import { readFileSync, writeFileSync } from 'node:fs';

const path = 'apps/comidas-caseras-para-llevar-alarcos/src/styles/global.css';
let css = readFileSync(path, 'utf8');

const oldHead = `/* Comidas para Llevar San Clemente · hoja de estilos propia
 * Azul marino del toldo, rojo tomate de la cazuela y miel del pan. Las ondas y
 * las rayas del mantel se repiten como motivos.
 */

:root {
	--paper: #f9f2e2;
	--paper-2: #f0e5cf;
	--card: #fffcf4;
	--ink: #1f2a33;
	--ink-soft: #5b5348;
	--ink-faint: #9a8c7c;
	--navy: #243b53;
	--navy-dark: #1a2c3e;
	--navy-deep: #0f1c29;
	--sage: #4a6b57;
	--sage-deep: #2b3f35;
	--honey: #e8b64c;
	--honey-soft: #f7e7c9;
	--tomato: #c8452f;
	--tomato-dark: #9e3320;
	--line: #e3d5bd;
	--display: 'Lora', Georgia, 'Times New Roman', serif;
	--sans: 'Nunito Sans', 'Segoe UI', system-ui, sans-serif;
	--script: 'Dancing Script', 'Segoe Script', cursive;
	--wrap: 76rem;
	--checker: repeating-linear-gradient(90deg, var(--navy) 0 22px, var(--honey) 22px 44px);
}`;

const newHead = `/* Comidas Caseras Alarcos · hoja de estilos propia
 * Verde oliva de la sierra, teja de la cazuela y dorado del pan. Las almenas
 * del castillo de Alarcos y las tejas se repiten como motivos.
 */

:root {
	--paper: #f7efe1;
	--paper-2: #efe3cd;
	--card: #fffcf4;
	--ink: #241c14;
	--ink-soft: #5c5145;
	--ink-faint: #998c7c;
	--navy: #3f4a2a;
	--navy-dark: #313a20;
	--navy-deep: #1f2614;
	--sage: #5d6b40;
	--sage-deep: #3c4729;
	--honey: #d9a441;
	--honey-soft: #f3e2c2;
	--tomato: #a9502f;
	--tomato-dark: #833c22;
	--line: #e2d3b8;
	--display: 'Bitter', Georgia, 'Times New Roman', serif;
	--sans: 'Work Sans', 'Segoe UI', system-ui, sans-serif;
	--script: 'Caveat', 'Segoe Script', cursive;
	--wrap: 76rem;
	--checker: repeating-linear-gradient(90deg, var(--navy) 0 22px, var(--honey) 22px 44px);
}`;

if (!css.includes(oldHead)) {
	console.log('AVISO: no se encontró la cabecera original');
	process.exit(1);
}
css = css.replace(oldHead, newHead);

const identityStart = css.indexOf('/* ---------- identidad');
if (identityStart === -1) {
	console.log('AVISO: no se encontró el bloque de identidad');
	process.exit(1);
}
css = css.slice(0, identityStart);

css += `/* ---------- identidad Comidas Caseras Alarcos ---------- */

/* Almenas del castillo: oliva y dorado. */
.topbar::after {
	height: 10px;
	background-image:
		repeating-linear-gradient(90deg, var(--navy) 0 16px, transparent 16px 32px),
		linear-gradient(var(--honey), var(--honey));
	background-size:
		32px 10px,
		100% 4px;
	background-position:
		0 0,
		0 0;
	background-repeat: repeat-x, no-repeat;
}

/* Filas de tejas árabes, como motivo de la esquina. */
.hero::before {
	inset: 1.1rem -7% auto auto;
	width: 37%;
	height: 148px;
	background-color: transparent;
	background-image:
		repeating-radial-gradient(circle at 50% 0, transparent 0 17px, rgba(63, 74, 42, 0.4) 17px 20px, transparent 20px 38px),
		repeating-linear-gradient(0deg, transparent 0 26px, rgba(169, 80, 47, 0.3) 26px 28px);
	opacity: 0.5;
	transform: rotate(-2deg);
	border-radius: 0.3rem;
}

.brand-mark {
	background: var(--navy);
	color: var(--honey);
	border-color: var(--navy-deep);
	box-shadow: 3px 3px 0 var(--tomato);
}

.brand-name {
	font-family: var(--script);
	font-size: 2.35rem;
}

.hero h1 {
	color: var(--navy-dark);
}

.hero h1 em {
	color: var(--tomato);
}

.hero-photo {
	border-color: var(--navy);
	box-shadow: 0.9rem 0.9rem 0 -1px var(--honey-soft);
}

.hero-photo::before {
	background: repeating-linear-gradient(90deg, var(--tomato) 0 10px, #c0714f 10px 20px);
}

.hero-photo::after {
	background: var(--honey);
}

.hero-tag {
	background: var(--tomato);
}

.hero-facts li::before {
	background: var(--honey);
	border-color: var(--navy);
}

.hero-facts b {
	color: var(--navy-dark);
}

.button {
	border-radius: 0.3rem;
}

.button-primary {
	background: var(--navy);
	border-color: var(--navy);
	color: var(--paper);
}

.button-primary:hover {
	background: var(--tomato);
	border-color: var(--tomato);
}

.button-ghost {
	border-color: var(--navy);
	color: var(--navy-dark);
}

.button-ghost:hover {
	background: var(--honey-soft);
	border-color: var(--navy);
}

.topbar-phone {
	border-radius: 0.3rem;
	border-color: var(--navy);
	color: var(--navy-dark);
}

.topbar-phone:hover {
	background: var(--navy);
	color: var(--paper);
}

.chips li {
	background: var(--honey-soft);
	color: var(--navy-deep);
	border-color: color-mix(in srgb, var(--navy) 26%, transparent);
}

.chips li::before {
	background: var(--tomato);
}

.about h2 {
	color: var(--navy-dark);
}

.about-note {
	border-left-color: var(--tomato);
	background: var(--honey-soft);
}

.simple-link {
	color: var(--tomato-dark);
}

.simple-link:hover {
	color: var(--navy-dark);
}

.highlight-strip {
	background: var(--navy-dark);
}

.visit {
	background: var(--navy-deep);
}

.highlights li {
	background: #273018;
}

.highlights li:nth-child(even) {
	background: var(--sage-deep);
}

.highlights {
	background: rgba(247, 239, 225, 0.2);
	border-color: rgba(247, 239, 225, 0.2);
}

.menu {
	background: var(--paper-2);
}

.menu-head h2 {
	color: var(--navy-dark);
}

.menu-group {
	border-top-color: var(--tomato);
}

.menu-group h3 {
	color: var(--navy);
}

.dish-price {
	color: var(--navy-deep);
	background: var(--honey);
}

.rating-section {
	background: var(--honey-soft);
}

.rating-copy h2 {
	color: var(--navy-dark);
}

.rating-badge {
	background: var(--navy);
	box-shadow: 0.7rem 0.7rem 0 -1px var(--tomato);
}

.map-frame {
	box-shadow: 0.8rem 0.8rem 0 -1px rgba(217, 164, 65, 0.45);
}

.map-label {
	background: var(--navy-deep);
}

.faq summary {
	color: var(--navy-dark);
}

.faq summary::after {
	color: var(--tomato);
}

.footer-brand .brand-mark {
	background: var(--honey);
	color: var(--navy-deep);
	border-color: var(--paper);
}

.mobile-call {
	background: var(--tomato);
	color: var(--paper);
}

.mobile-call span {
	color: var(--honey-soft);
}

@media (min-width: 781px) {
	.mobile-call {
		display: none;
	}
}
`;

writeFileSync(path, css);
console.log('css actualizado:', css.split('\n').length, 'líneas');
