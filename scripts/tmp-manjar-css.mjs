import { readFileSync, writeFileSync } from 'node:fs';

const path = 'apps/el-manjar-cr/src/styles/global.css';
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

const newHead = `/* El manjar Cr · hoja de estilos propia
 * Ciruela del mantel, crema del flan y albaricoque del postre. Las capas de la
 * tarta de galletas y los puntos de la galleta se repiten como motivos.
 */

:root {
	--paper: #fbf3ea;
	--paper-2: #f3e6d8;
	--card: #fffdf8;
	--ink: #2a1c22;
	--ink-soft: #5d4b52;
	--ink-faint: #9c8a90;
	--navy: #46263c;
	--navy-dark: #35182c;
	--navy-deep: #24101d;
	--sage: #6f7d5c;
	--sage-deep: #47523a;
	--honey: #e6a95e;
	--honey-soft: #f6e3c9;
	--tomato: #b0475f;
	--tomato-dark: #8c3149;
	--line: #e6d6c6;
	--display: 'Prata', Georgia, 'Times New Roman', serif;
	--sans: 'Mulish', 'Segoe UI', system-ui, sans-serif;
	--script: 'Reenie Beanie', 'Segoe Script', cursive;
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

css += `/* ---------- identidad El manjar Cr ---------- */

/* Puntos de galleta en la cenefa superior. */
.topbar::after {
	height: 10px;
	background-image: radial-gradient(circle, var(--tomato) 3px, transparent 3.5px);
	background-size: 18px 10px;
	background-repeat: repeat-x;
}

/* Capas de tarta de galletas, como motivo de la esquina. */
.hero::before {
	inset: 1.1rem -7% auto auto;
	width: 37%;
	height: 150px;
	background-color: transparent;
	background-image:
		repeating-linear-gradient(0deg, transparent 0 22px, rgba(70, 38, 60, 0.4) 22px 26px),
		radial-gradient(circle at 18px 12px, rgba(176, 71, 95, 0.45) 3px, transparent 3.5px),
		radial-gradient(circle at 44px 12px, rgba(230, 169, 94, 0.5) 3px, transparent 3.5px);
	background-size:
		100% 26px,
		56px 26px,
		56px 26px;
	opacity: 0.55;
	transform: rotate(-2deg);
	border-radius: 0.3rem;
}

.brand-mark {
	background: var(--navy);
	color: var(--honey);
	border-color: var(--navy-deep);
	box-shadow: 3px 3px 0 var(--tomato);
	font-family: var(--script);
	font-size: 1.35rem;
}

.brand-name {
	font-family: var(--script);
	font-size: 2.5rem;
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
	background: repeating-linear-gradient(90deg, var(--tomato) 0 10px, #c46b82 10px 20px);
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
	background: #2d1a27;
}

.highlights li:nth-child(even) {
	background: var(--sage-deep);
}

.highlights {
	background: rgba(251, 243, 234, 0.2);
	border-color: rgba(251, 243, 234, 0.2);
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
	box-shadow: 0.8rem 0.8rem 0 -1px rgba(230, 169, 94, 0.45);
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
