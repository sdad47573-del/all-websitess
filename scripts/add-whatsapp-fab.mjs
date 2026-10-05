/**
 * Añade el botón flotante de WhatsApp a las webs de negocio que tienen un móvil inequívoco.
 *
 * Decisiones que explica el código:
 *
 *  - **El número no se duplica.** El componente recibe el teléfono que ya publica la web
 *    (`tel:+34…`) y él solo le quita los signos para construir el enlace `wa.me`. Si un día
 *    cambia el teléfono en el fichero de datos, el botón cambia con él.
 *  - **Importación con espacio de nombres** (`import * as datos`) para no chocar con los
 *    imports que ya tenga cada página: si el fichero ya importa `business`, añadir un segundo
 *    import del mismo módulo sería un error de sintaxis.
 *  - **Sin dependencias nuevas.** El icono va en línea y los estilos en el propio componente,
 *    así que funciona igual en las webs con Tailwind que en las que no lo usan, y no hay que
 *    tocar `package.json` ni el lockfile.
 *  - **Solo páginas de contenido.** Se inyecta en el layout o en las `index.astro`, nunca en
 *    las páginas legales, donde un botón de contacto no aporta nada.
 *
 * Es idempotente: si el componente ya está importado, no toca nada.
 *
 * Uso: node scripts/add-whatsapp-fab.mjs [--dry-run]
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const ROOT = process.cwd();
const APPS = join(ROOT, 'apps');
const DRY = process.argv.includes('--dry-run');

/**
 * Móvil español (6xx/7xx) y teléfono fijo (9xx), solo dentro de contextos de contacto: un
 * barrido de cualquier cifra encuentra números dentro de SVG, CSS o coordenadas, que no son
 * teléfonos de nadie.
 */
const CONTACT = /(phone|telefono|tlf|tel)(["'\s:=]{1,12})(\+?34)?[\s.-]?([67]\d{2}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2})/gi;

const COMPONENT = `---
/**
 * Botón flotante de WhatsApp.
 *
 * Recibe el teléfono que ya publica la web en un \`tel:\` y le quita los signos para montar el
 * enlace \`wa.me\`, así que el número no queda duplicado en el código. Si el teléfono cambia en
 * el fichero de datos, este botón cambia con él.
 */
interface Props {
	/** Teléfono de la web en formato \`tel:\`, por ejemplo \`tel:+34626406825\`. */
	phone: string;
	/** Nombre del negocio, para el mensaje y para el nombre accesible del enlace. */
	name?: string;
	/** Texto del mensaje inicial. Por defecto, uno neutro que sirve para cualquier negocio. */
	message?: string;
}

const { phone, name, message } = Astro.props;

// \`wa.me\` necesita el número internacional sin espacios ni signos: \`tel:+34…\` → \`34…\`.
const numero = String(phone).replace(/\\D/g, '');
const texto = message ?? \`Hola, os escribo desde la web\${name ? \` de \${name}\` : ''}. ¿Me confirmáis disponibilidad?\`;
const url = \`https://wa.me/\${numero}?text=\${encodeURIComponent(texto)}\`;
---

<a
	class="wa-fab"
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={\`Escríbenos por WhatsApp\${name ? \` a \${name}\` : ''}\`}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">
		<path
			fill="#fff"
			d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177,0.001-6.3,0.798-9.073,2.311L4.868,43.303z"
		></path>
		<path
			fill="#40c351"
			d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
		></path>
		<path
			fill="#fff"
			fill-rule="evenodd"
			d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
			clip-rule="evenodd"
		></path>
	</svg>
</a>

<style>
	.wa-fab {
		position: fixed;
		right: clamp(1rem, 4vw, 1.75rem);
		/* Por debajo de la barra de llamada, que en móvil ocupa unos 60 px. Las webs con una
		   barra más alta (o con una hoja inferior) suben \`--wa-fab-bottom\` en su CSS. */
		bottom: var(--wa-fab-bottom, clamp(1rem, 4vw, 1.75rem));
		z-index: 60;
		display: grid;
		place-items: center;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background: #25d366;
		box-shadow: 0 10px 26px rgba(37, 211, 102, 0.42);
		transition:
			transform 0.18s ease,
			box-shadow 0.18s ease;
	}

	.wa-fab:hover {
		transform: scale(1.06);
		box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5);
	}

	.wa-fab:focus-visible {
		outline: 3px solid #0b3d2c;
		outline-offset: 3px;
	}

	.wa-fab svg {
		width: 2.1rem;
		height: 2.1rem;
	}

	/* En móvil casi todas estas webs fijan una barra de llamada o de menú abajo: el botón tiene
	   que subir para no quedar medio tapado por ella. */
	@media (max-width: 680px) {
		.wa-fab {
			bottom: var(--wa-fab-bottom-mobile, 4.5rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.wa-fab {
			transition: none;
		}
	}
</style>
`;

const walk = (dir, out = []) => {
	for (const entry of readdirSync(dir)) {
		if (entry === 'node_modules' || entry === 'dist' || entry === '.astro') continue;
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
};

const posix = (value) => value.replaceAll('\\', '/');

/** Ruta de importación desde el fichero destino hasta la carpeta `src` de su app. */
const toSrc = (dir, file) => {
	const rel = posix(relative(dirname(file), join(dir, 'src')));
	return rel.startsWith('.') ? rel : `./${rel}`;
};

/**
 * Deduce de dónde sacar el teléfono y el nombre en esta app concreta, en vez de asumir una
 * estructura que no todas comparten.
 */
function resolveSource(dir, files) {
	const businessFile = join(dir, 'src', 'lib', 'business.ts');
	const siteFile = join(dir, 'src', 'data', 'site.ts');

	if (existsSync(businessFile)) {
		const text = readFileSync(businessFile, 'utf8');
		if (/export const phoneHrefs\b/.test(text)) {
			return {
				archivo: businessFile,
				telefono: 'datos.phoneHrefs[0]',
				nombre: 'datos.business?.name',
				donde: 'src/lib/business.ts',
			};
		}
		if (/export const phoneHref\b/.test(text)) {
			return {
				archivo: businessFile,
				telefono: 'datos.phoneHref',
				nombre: 'datos.business?.name',
				donde: 'src/lib/business.ts',
			};
		}
	}

	if (existsSync(siteFile)) {
		const text = readFileSync(siteFile, 'utf8');
		if (/phoneHref/.test(text)) {
			return {
				archivo: siteFile,
				telefono: 'datos.BUSINESS.phoneHref',
				nombre: 'datos.BUSINESS?.name',
				donde: 'src/data/site.ts',
			};
		}
	}

	// Último recurso: la propia página, donde ya hay un `tel:` declarado.
	for (const file of files) {
		const text = readFileSync(file, 'utf8');
		if (/\bconst \w*[Pp]hone\w*\s*=\s*'tel:\+?34/.test(text)) {
			return { archivo: null, telefono: null, nombre: null, donde: posix(relative(dir, file)) };
		}
	}
	return null;
}

/**
 * El archivo que cierra el documento. Va en este orden: el layout (si hay uno, cubre todas las
 * páginas de golpe), la portada compartida `Landing.astro` (que en varias webs sirve a la vez
 * al español y al inglés) y, como último recurso, cada `index.astro`.
 */
function resolveTargets(dir, files) {
	const layouts = files.filter((f) => /src\/layouts\/[^/]+\.astro$/.test(posix(f)));
	const conBody = (list) => list.filter((f) => readFileSync(f, 'utf8').includes('</body>'));
	if (layouts.length) {
		const utiles = conBody(layouts);
		if (utiles.length) return [utiles[0]];
	}
	const landing = files.filter((f) => /src\/components\/Landing\.astro$/.test(posix(f)));
	const landingUtiles = conBody(landing);
	if (landingUtiles.length) return [landingUtiles[0]];
	return conBody(files.filter((f) => /pages\/(en\/)?index\.astro$/.test(posix(f))));
}

const resultados = [];
const saltados = [];

for (const name of readdirSync(APPS)) {
	const dir = join(APPS, name);
	if (!statSync(dir).isDirectory() || !existsSync(join(dir, 'src'))) continue;
	const files = walk(join(dir, 'src'));
	const joined = files.map((f) => readFileSync(f, 'utf8')).join('\n');
	if (joined.includes('wa.me')) continue;

	// Un solo móvil inequívoco: con dos, no se sabe cuál es el del negocio.
	const moviles = new Set();
	for (const match of joined.matchAll(CONTACT)) {
		const digits = match[4].replace(/\D/g, '');
		moviles.add(`34${digits}`);
	}
	if (moviles.size !== 1) {
		if (moviles.size > 1) saltados.push(`${name}: ${moviles.size} móviles, hay que decidir`);
		continue;
	}

	const source = resolveSource(dir, files);
	if (!source) {
		saltados.push(`${name}: no se localiza el teléfono`);
		continue;
	}

	// ¿Dónde se inyecta? Se busca el archivo que contiene el cierre `</body>`, que es el que
	// se renderiza siempre: el layout si lo hay, la portada compartida si existe y, si no,
	// cada `index.astro` (en ese caso habría que repetirlo por idioma).
	const targets = resolveTargets(dir, files);

	if (targets.length === 0) {
		saltados.push(`${name}: sin páginas donde inyectar`);
		continue;
	}

	const componentPath = join(dir, 'src', 'components', 'WhatsappFab.astro');
	const yaExiste = existsSync(componentPath);
	if (!yaExiste && !DRY) {
		mkdirSync(dirname(componentPath), { recursive: true });
		writeFileSync(componentPath, COMPONENT, 'utf8');
	}

	for (const target of targets) {
		let text = readFileSync(target, 'utf8');
		if (text.includes('WhatsappFab')) continue;

		const cierre = text.lastIndexOf('</body>') !== -1 ? '</body>' : null;
		if (!cierre) {
			saltados.push(`${name}: ${posix(relative(dir, target))} no cierra </body>`);
			continue;
		}

		const raiz = toSrc(dir, target);
		const imports = [`import WhatsappFab from '${raiz}/components/WhatsappFab.astro';`];
		const props = source.archivo ? `phone={${source.telefono}} name={${source.nombre}}` : '';
		let uso = `<WhatsappFab ${props} />`;
		if (source.archivo) {
			const modulo = posix(relative(dirname(target), source.archivo)).replace(/\.ts$/, '');
			imports.push(`import * as datos from '${modulo.startsWith('.') ? modulo : `./${modulo}`}';`);
		} else {
			// Sin módulo compartido: se reutiliza la constante de teléfono de la propia página.
			const match = text.match(/\bconst (\w*[Pp]hone\w*)\s*=\s*'tel:\+?34/) || text.match(/\bconst (\w*[Pp]hone\w*)\s*=\s*'tel:/);
			if (!match) {
				saltados.push(`${name}: no se localiza la constante de teléfono`);
				continue;
			}
			uso = `<WhatsappFab phone={${match[1]}} />`;
		}

		// Los imports van justo después de abrir el frontmatter, que es donde los pone el resto
		// del repositorio; insertarlos al final los dejaría mezclados con el código.
		if (!text.startsWith('---')) {
			saltados.push(`${name}: sin frontmatter en ${posix(relative(dir, target))}`);
			continue;
		}
		const bloque = `\n${imports.join('\n')}\n`;
		text = text.replace(/^---\r?\n/, `---${bloque}`);

		// Se inserta justo antes de la línea que cierra el cuerpo, respetando su sangría, para
		// no reformatear el fichero entero.
		const pos = text.lastIndexOf(cierre);
		const inicioLinea = text.lastIndexOf('\n', pos) + 1;
		const sangria = text.slice(inicioLinea, pos).match(/^[ \t]*/)?.[0] ?? '\t\t';
		text = text.slice(0, inicioLinea) + `${sangria}${uso}\n` + text.slice(inicioLinea);
		if (!DRY) writeFileSync(target, text, 'utf8');
	}

	resultados.push({
		app: name,
		numero: [...moviles][0],
		desde: source.donde,
		paginas: targets.map((t) => posix(relative(dir, t))).join(' '),
		componenteNuevo: !yaExiste,
	});
}

console.log(`${DRY ? '[SIMULACIÓN] ' : ''}${resultados.length} webs con botón de WhatsApp:\n`);
for (const r of resultados.sort((a, b) => a.app.localeCompare(b.app))) {
	console.log(
		`  ${r.app.padEnd(38)} ${r.numero}  ${r.desde.padEnd(22)} ${r.paginas}`,
	);
}
if (saltados.length) {
	console.log(`\n${saltados.length} saltadas (no se tocan):`);
	for (const s of saltados) console.log(`  ${s}`);
}