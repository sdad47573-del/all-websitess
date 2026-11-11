// Integra en el pie de cada web los enlaces legales (aviso legal, privacidad,
// cookies) y el crédito «Web creada por Sur Digital».
//
// Uso:
//   node scripts/sync-footer-legal.mjs                      # informa de lo que falta
//   node scripts/sync-footer-legal.mjs --write              # aplica los cambios
//   node scripts/sync-footer-legal.mjs --write app1 app2    # solo esas apps
//
// Solo toca los pies de página reales (los que llevan copyright o son largos),
// no los pies pequeños de tarjetas o reseñas. Si el pie ya tiene una fila con
// enlaces legales, añade ahí lo que falte; si no, crea una fila propia al final
// del pie.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const APPS = join(ROOT, 'apps');
const WRITE = process.argv.includes('--write');
// `_sur-digital` es la web de la propia agencia: su pie es de otro diseño y no
// lleva crédito de Sur Digital.
const ONLY = process.argv.slice(2).filter((arg) => !arg.startsWith('--') && arg !== '_sur-digital');

const LEGAL = { label: 'Aviso legal', href: '/aviso-legal' };
const PRIVACY = { label: 'Privacidad', href: '/aviso-legal#privacidad' };
const COOKIES = { label: 'Cookies', href: '/aviso-legal#cookies' };
const CREDIT_URL = 'https://www.sur-digital.com/';

const WALK_SKIP = new Set(['node_modules', 'dist', '.astro', '.turbo', '.vercel']);

function walk(dir, out = []) {
	for (const entry of readdirSync(dir)) {
		if (WALK_SKIP.has(entry)) continue;
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) walk(path, out);
		else if (path.endsWith('.astro')) out.push(path);
	}
	return out;
}

/** Bloques <footer>…</footer> con sus índices en el texto. */
function footerBlocks(text) {
	const blocks = [];
	const open = /<footer\b[^>]*>/gi;
	let match;
	while ((match = open.exec(text))) {
		const close = text.toLowerCase().indexOf('</footer>', match.index + match[0].length);
		if (close === -1) continue;
		blocks.push({ start: match.index, end: close + '</footer>'.length });
	}
	return blocks;
}

// Los pies de las tarjetas de reseña también son <footer>, pero son cortos y no
// llevan copyright ni crédito: así se distinguen del pie del sitio.
const isSiteFooter = (html) =>
	/©|&copy;|copyright/i.test(html) ||
	/sur[\s-]?digital|creado por|creada por|dise[ñn]ad[oa] por|desarrollad[oa] por/i.test(html);

const hasLegal = (html) => /aviso[\s-]?legal/i.test(html);
const hasPrivacy = (html) => /privacidad/i.test(html);
const hasCookies = (html) => /cookies?/i.test(html);
const hasCredit = (html) =>
	/sur[\s-]?digital|creado por|creada por|dise[ñn]ad[oa] por|desarrollad[oa] por/i.test(html);

/** Primer enlace del pie cuyo texto es «Aviso legal…», para colgar ahí el resto. */
const LEGAL_ANCHOR = /<a\b[^>]*>(?:(?!<\/a>)[^]){0,80}?aviso[\s-]?legal(?:(?!<\/a>)[^]){0,40}?<\/a>/i;

const inlineLink = (link) =>
	`<a href="${link.href}" style="color:inherit;text-decoration:underline;text-underline-offset:2px">${link.label}</a>`;

const creditSpan = `<span>Web creada por <a href="${CREDIT_URL}" rel="noopener" style="color:inherit;text-decoration:underline;text-underline-offset:2px">Sur Digital</a></span>`;

function filler(missing) {
	return [...missing.links.map(inlineLink), missing.credit ? creditSpan : null].filter(Boolean);
}

function row(missing, indent) {
	const inner = `${indent}\t`;
	const items = filler(missing).join(`\n${inner}`);
	return `${indent}<nav class="sur-legal" aria-label="Información legal y créditos" style="box-sizing:border-box;flex:0 0 100%;width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.35rem 1.1rem;margin:1.2rem 0 0;padding:0 1.25rem;font-size:.8rem;line-height:1.7;text-align:center;opacity:.85">\n${inner}${items}\n${indent}</nav>\n`;
}

const apps = readdirSync(APPS).filter((name) => {
	const dir = join(APPS, name);
	if (name === '_sur-digital' || (ONLY.length && !ONLY.includes(name))) return false;
	return statSync(dir).isDirectory() && existsSync(join(dir, 'src', 'pages'));
});

const touched = [];
const withoutFooter = [];
let alreadyOk = 0;

for (const app of apps) {
	const files = walk(join(APPS, app, 'src'));
	let changed = false;

	for (const file of files) {
		const text = readFileSync(file, 'utf8');
		const blocks = footerBlocks(text).filter((b) => isSiteFooter(text.slice(b.start, b.end)));
		if (!blocks.length) continue;

		let output = text;
		for (const block of [...blocks].reverse()) {
			const html = output.slice(block.start, block.end);
			const missing = {
				links: [
					hasLegal(html) ? null : LEGAL,
					hasPrivacy(html) ? null : PRIVACY,
					hasCookies(html) ? null : COOKIES,
				].filter(Boolean),
				credit: !hasCredit(html),
			};
			if (!missing.links.length && !missing.credit) continue;

			const anchor = LEGAL_ANCHOR.exec(html);
			if (anchor) {
				// Ya hay una fila de enlaces legales: se completa en la misma línea.
				const at = block.start + anchor.index + anchor[0].length;
				output = `${output.slice(0, at)} ${filler(missing).join(' · ')} ${output.slice(at)}`;
			} else {
				const closeAt = output.lastIndexOf('</footer>', block.end);
				const lineStart = output.lastIndexOf('\n', closeAt) + 1;
				const indent = /^[ \t]*/.exec(output.slice(lineStart, closeAt))[0];
				output = output.slice(0, lineStart) + row(missing, indent) + output.slice(lineStart);
			}
			changed = true;
		}

		if (output !== text && WRITE) writeFileSync(file, output, 'utf8');
		if (output !== text) changed = true;
	}

	if (changed) touched.push(app);
	else if (files.length) alreadyOk += 1;
	else withoutFooter.push(app);
}

console.log(`apps: ${apps.length}`);
console.log(`con el pie completo: ${alreadyOk}`);
console.log(`${WRITE ? 'actualizadas' : 'por actualizar'}: ${touched.length}`);
console.log(touched.join(', ') || '—');
if (withoutFooter.length) console.log(`sin fuentes Astro: ${withoutFooter.join(', ')}`);
