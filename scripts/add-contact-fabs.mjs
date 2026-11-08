/**
 * Añade a las webs que publican un teléfono pero no lo enlazan un botón flotante de llamada
 * (`tel:`) y otro de WhatsApp (`wa.me`), cada uno solo si falta.
 *
 * ## Qué considera «no lo enlazan»
 *
 * Se lee el código de la app, no sus datos:
 *
 *  - llamada: no hay `href="tel:"`, ni `href={phoneHref}`, ni se pasa `phoneHref` a un componente
 *    (la cabecera y el pie compartidos pintan el `tel:` con esa prop), ni `LocalPhoneFab`;
 *  - WhatsApp: no hay `wa.me` ni `LocalWhatsappFab`.
 *
 * El número no se duplica: el enlace de WhatsApp se monta con los dígitos del teléfono que la
 * web ya publica, así que si el teléfono cambia, los dos botones cambian con él.
 *
 * ## Por qué un bloque autocontenido
 *
 * Las landings simples no importan `@astro-components` (ni daisyUI), así que el botón se inserta
 * con su propio CSS y su propio SVG antes de `</body>`. No toca dependencias, no necesita
 * `bun install` y se ve igual en las webs con Tailwind que en las que solo tienen estilos en
 * línea. Las webs que ya tienen un botón flotante (`LocalMapFab`, `LocalPhoneFab`,
 * `LocalWhatsappFab`) se saltan para no apilar dos FAB en la misma esquina.
 *
 * Es idempotente: si la app ya lleva el bloque (`<!-- contacto-rapido -->`), no se toca.
 *
 * Uso:
 *   node scripts/add-contact-fabs.mjs --dry           enseña qué haría
 *   node scripts/add-contact-fabs.mjs                 lo aplica
 *   node scripts/add-contact-fabs.mjs --dry a-jalar   solo esa app
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dry = process.argv.includes('--dry');
const only = process.argv.slice(2).filter((arg) => !arg.startsWith('-'));
const APPS_DIR = 'apps';
const MARKER = '<!-- contacto-rapido -->';

const walk = (dir) => {
	let out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const file = join(dir, entry.name);
		if (entry.isDirectory()) out = out.concat(walk(file));
		else if (/\.(astro|ts|tsx|js|jsx|json)$/.test(entry.name)) out.push(file);
	}
	return out;
};

const text = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');

const titleCase = (app) => {
	const value = app.replace(/^_/, '').replace(/-/g, ' ');
	return value.charAt(0).toUpperCase() + value.slice(1);
};

/** Nombre del negocio: solo del frontmatter y de los ficheros de datos, nunca del marcado. */
const businessName = (source, files) => {
	const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
	const data = [
		frontmatter,
		...files.filter((file) => /\.(ts|js|json)$/.test(file)).map((file) => text(file)),
	].join('\n');
	const match = data.match(/\b(?:fullName|name)\s*[:=]\s*['"`]([^'"`]+)['"`]/);
	return match ? match[1].trim() : null;
};

/** `tel:+34 644 67 80 99` → `+34644678099`; 9 dígitos sueltos → `+34` delante. */
const normalizeTel = (raw) => {
	const digits = String(raw).replace(/\D/g, '');
	if (!digits) return null;
	const international = digits.length === 9 ? `34${digits}` : digits;
	return `+${international}`;
};

/** El teléfono visible, para anunciarlo en el nombre accesible del enlace. */
const readablePhone = (raw) => {
	const value = String(raw).replace(/^tel:/, '').trim();
	return value.startsWith('+') ? value : `+34 ${value}`;
};

const escapeHtml = (value) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CALL_ICON =
	'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/></svg>';

const WHATSAPP_ICON =
	'<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="currentColor" d="M24 4a20 20 0 0 0-17.1 30.2L4 44l10.1-2.8A20 20 0 1 0 24 4Zm0 36.4a16.4 16.4 0 0 1-8.4-2.3l-.6-.4-6 1.7 1.6-5.9-.4-.6A16.4 16.4 0 1 1 24 40.4Zm9.1-12.3c-.5-.3-3-1.5-3.4-1.6-.5-.2-.8-.2-1.1.2-.3.5-1.3 1.6-1.6 2-.3.3-.6.4-1.1.1a13.4 13.4 0 0 1-3.9-2.4 14.7 14.7 0 0 1-2.7-3.4c-.3-.5 0-.8.2-1.1l.8-.9c.2-.3.3-.5.5-.9.1-.3 0-.6-.1-.9l-1.5-3.4c-.4-.9-.8-.8-1.1-.8h-1c-.3 0-.9.1-1.3.6-.5.5-1.7 1.7-1.7 4.1 0 2.4 1.8 4.7 2 5 .2.3 3.4 5.2 8.2 7.2 1.1.5 2 .8 2.7 1 1.2.4 2.2.3 3 .2.9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5Z"/></svg>';

const STYLE = `<style>
	.contact-fabs { position: fixed; right: clamp(1rem, 4vw, 1.75rem); bottom: clamp(1rem, 4vw, 1.75rem); z-index: 60; display: flex; flex-direction: column; gap: 0.65rem; }
	.contact-fabs a { display: grid; place-items: center; width: 3.5rem; height: 3.5rem; border-radius: 50%; color: #fff; text-decoration: none; box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24); transition: transform 0.18s ease; }
	.contact-fabs a:hover, .contact-fabs a:focus-visible { transform: scale(1.06); }
	.contact-fabs a:focus-visible { outline: 3px solid #1f1f1f; outline-offset: 3px; }
	.contact-fabs .fab-call { background: #c2410c; }
	.contact-fabs .fab-wa { background: #25d366; }
	.contact-fabs svg { width: 1.7rem; height: 1.7rem; }
	@media (prefers-reduced-motion: reduce) { .contact-fabs a { transition: none; } }
	/* En móvil casi todas estas webs llevan una barra de llamada o de menú abajo. El botón sube
	   siempre: si no hay barra queda algo más alto, y si la hay no se queda tapado. */
	@media (max-width: 680px) { .contact-fabs { bottom: 5rem; } }
	/* Con otro botón flotante en la esquina (el de "cómo llegar"), el bloque se apila encima.
	   Ese botón se oculta a partir de lg, así que en escritorio no hace falta desplazar. */
	.contact-fabs.is-stacked { bottom: 5.75rem; }
	@media (max-width: 680px) { .contact-fabs.is-stacked { bottom: 6.25rem; } }
	@media (min-width: 1024px) { .contact-fabs.is-stacked { bottom: clamp(1rem, 4vw, 1.75rem); } }
</style>`;

/**
 * Inserta el bloque antes del cierre de la página: `</body>` en las landings sueltas o la
 * etiqueta de cierre del layout (`</Layout>`) en las que delegan el documento. Devuelve `null`
 * si no encuentra dónde.
 */
const insertInto = (source, snippet) => {
	const body = source.lastIndexOf('</body>');
	if (body !== -1) return `${source.slice(0, body)}${snippet}\n\t${source.slice(body)}`;

	const layout = source.match(/\n[ \t]*<\/[A-Z][A-Za-z0-9]*>\s*$/);
	if (layout) {
		const at = source.lastIndexOf(layout[0]);
		return `${source.slice(0, at)}\n${snippet}${source.slice(at)}`;
	}

	return null;
};

/** Bloque de botones con solo las piezas que faltan en esa web. */
const block = ({ name, tel, call, whatsapp, stacked }) => {
	const label = escapeHtml(name);
	const human = escapeHtml(readablePhone(tel));
	const digits = normalizeTel(tel).replace(/^\+/, '');
	const message = encodeURIComponent(`Hola, os escribo desde la web de ${name}.`);

	const links = [];
	if (call) {
		links.push(
			`\t<a class="fab-call" href="tel:${normalizeTel(tel)}" aria-label="Llamar a ${label} al ${human}">${CALL_ICON}</a>`,
		);
	}
	if (whatsapp) {
		links.push(
			`\t<a class="fab-wa" href="https://wa.me/${digits}?text=${message}" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp a ${label}">${WHATSAPP_ICON}</a>`,
		);
	}

	return `${MARKER}\n${STYLE}\n<nav class="contact-fabs${stacked ? ' is-stacked' : ''}" aria-label="Contacto rápido">\n${links.join('\n')}\n</nav>`;
};

const apps = readdirSync(APPS_DIR, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((app) => only.length === 0 || only.includes(app))
	.filter((app) => existsSync(join(APPS_DIR, app, 'src/pages/index.astro')));

const results = [];
let written = 0;

for (const app of apps) {
	const index = join(APPS_DIR, app, 'src/pages/index.astro');
	const source = text(index);
	const files = walk(join(APPS_DIR, app, 'src'));
	// El bloque ya insertado no cuenta como fuente: si no, al actualizar se leería el teléfono
	// del propio botón en vez del que publica la web.
	const all = files
		.map((file) => text(file))
		.join('\n')
		.replace(/<!-- contacto-rapido -->[\s\S]*?<\/nav>/g, '');

	// Un bloque ya insertado se reemplaza por el actual: así un cambio en el CSS o en los
	// iconos llega a las webs que ya lo tenían, sin duplicarlo.
	const existing = /<!-- contacto-rapido -->[\s\S]*?<\/nav>/;
	if (existing.test(source)) {
		const telExisting =
			all.match(/tel:(\+?[0-9][0-9\s.-]{7,})/)?.[1] ??
			all.match(/\bphone\s*:\s*['"]([^'"]{9,})['"]/)?.[1];
		const nameExisting = businessName(source, files) ?? titleCase(app);
		const hasCall = /class="fab-call"/.test(source);
		const hasWhatsapp = /class="fab-wa"/.test(source);
		if (!telExisting) {
			results.push({ app, status: 'ya tenía los botones' });
			continue;
		}
		const next = source.replace(
			existing,
			block({
				name: nameExisting,
				tel: telExisting,
				call: hasCall,
				whatsapp: hasWhatsapp,
				stacked: source.includes('contact-fabs is-stacked'),
			}),
		);
		if (next === source) {
			results.push({ app, status: 'ya tenía los botones' });
			continue;
		}
		if (!dry) writeFileSync(index, next);
		written += 1;
		results.push({ app, status: dry ? 'a actualizar' : 'actualizado' });
		continue;
	}

	const tel =
		all.match(/tel:(\+?[0-9][0-9\s.-]{7,})/)?.[1] ??
		all.match(/\bphone\s*:\s*['"]([^'"]{9,})['"]/)?.[1];
	if (!tel) continue;

	// Un `phoneHref` en los datos no basta: muchas webs lo declaran y luego no lo pintan (su
	// HTML acaba sin `tel:`). Hay que ver el enlace renderizado, ya sea un `href` en la app o
	// una prop de los componentes compartidos que lo pintan (`LocalTopbar`, `LocalFooter`,
	// `LocalPhoneFab`).
	// Los componentes compartidos reciben el negocio entero (`<LocalContact business={BUSINESS}>`)
	// y sacan el `tel:` de ahí, así que en el código de la app no aparece ningún `href`.
	const hasCall =
		/href=["']tel:/.test(all) ||
		/href=\{[^}]*phoneHref[^}]*\}/.test(all) ||
		/<Local(?:Topbar|Footer|Contact|PhoneFab)\b[^>]*(?:phone|phoneHref|business)=/s.test(all) ||
		/mobile-call/.test(all);
	// Un `wa.me` suelto en los datos tampoco cuenta: tiene que llegar a un `href`.
	const hasWhatsapp = /href=[^>]*wa\.me/i.test(all) || /LocalWhatsappFab/.test(all);
	if (hasCall && hasWhatsapp) {
		results.push({ app, status: 'ya enlazaba teléfono y WhatsApp' });
		continue;
	}

	// Un FAB propio en la misma esquina que el de "cómo llegar" o el de llamada quedaría encima.
	const floating = /LocalMapFab|LocalPhoneFab|LocalWhatsappFab/.test(all);

	const name = businessName(source, files) ?? titleCase(app);
	const snippet = block({
		name,
		tel,
		call: !hasCall,
		whatsapp: !hasWhatsapp,
		stacked: floating,
	});
	if (!snippet.includes('href=')) {
		results.push({ app, status: 'no se puede montar (teléfono inválido)' });
		continue;
	}

	const next = insertInto(source, snippet);
	if (!next) {
		results.push({ app, status: 'sin cierre donde insertar' });
		continue;
	}

	if (!dry) writeFileSync(index, next);
	written += 1;
	results.push({
		app,
		status: dry ? 'a escribir' : 'escrito',
		added: [!hasCall && 'tel', !hasWhatsapp && !floating && 'WhatsApp'].filter(Boolean).join(' + '),
	});
}

const out = (line) => process.stdout.write(`${line}\n`);

for (const result of results) {
	out(`${result.app.padEnd(42)} ${result.status}${result.added ? ` · ${result.added}` : ''}`);
}
out(
	`\n${dry ? '[dry] ' : ''}${written} app(s) ${dry ? 'por escribir' : 'escritas'} de ${results.length} con teléfono`,
);
