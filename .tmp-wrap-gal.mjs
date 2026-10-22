import fs from 'node:fs';
import path from 'node:path';

const apps = JSON.parse(fs.readFileSync('/tmp/gal.json', 'utf8'));
const DRY = process.argv.includes('--dry');

const WRAPPER = `---
/**
 * Galería de fotos de la ficha de Google Maps.
 *
 * El marcado, los estilos y el visor viven en \`LocalGaleria\`
 * (@astro-components), que es el mismo en todas las webs. Aquí solo queda el
 * \`import.meta.glob\`: tiene que escribirse dentro de la app porque Vite lo
 * resuelve respecto a este fichero y las fotos están en \`src/assets/fotos\`.
 */
import { LocalGaleria } from '@astro-components';
import type { ImageMetadata } from 'astro';

export interface Props {
	nombre: string;
	titulo?: string;
	intro?: string;
	nota?: string;
	mapsUrl?: string;
	locale?: 'es' | 'en';
	id?: string;
	limite?: number;
}

const fotos = import.meta.glob<ImageMetadata>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
	eager: true,
	import: 'default',
});
---

<LocalGaleria fotos={fotos} {...Astro.props} />
`;

let wrappers = 0;
const deps = [];

for (const app of apps) {
	const file = `apps/${app}/src/components/Galeria.astro`;
	if (!fs.existsSync(file)) {
		console.log('falta', file);
		continue;
	}
	const crlf = fs.readFileSync(file, 'utf8').includes('\r\n');
	if (!DRY) fs.writeFileSync(file, crlf ? WRAPPER.replace(/\n/g, '\r\n') : WRAPPER);
	wrappers++;

	const pkgFile = `apps/${app}/package.json`;
	const raw = fs.readFileSync(pkgFile, 'utf8');
	const pkg = JSON.parse(raw);
	const all = { ...pkg.dependencies, ...pkg.devDependencies };
	if (!all['@astro-components']) {
		pkg.devDependencies = { ...pkg.devDependencies, '@astro-components': 'workspace:*' };
		const eol = raw.includes('\r\n') ? '\r\n' : '\n';
		if (!DRY) fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2).replace(/\n/g, eol) + eol);
		deps.push(app);
	}
}

console.log(DRY ? '--- DRY RUN ---' : '--- APLICADO ---');
console.log('wrappers:', wrappers, '| deps añadidas:', deps.length, deps);
