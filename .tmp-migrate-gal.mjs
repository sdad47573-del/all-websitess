import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry');
const apps = JSON.parse(fs.readFileSync('/tmp/gal.json', 'utf8'));

const walkAstro = (dir, out = []) => {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === 'assets' || entry.name === 'components') continue;
			walkAstro(p, out);
		} else if (entry.name.endsWith('.astro')) out.push(p);
	}
	return out;
};

const frontmatterEnd = (src) => src.indexOf('\n---');

const report = { apps: [], files: 0, deleted: 0, skipped: [] };

for (const app of apps) {
	const srcDir = `apps/${app}/src`;
	const comp = `${srcDir}/components/Galeria.astro`;
	const page = path.join(srcDir, 'pages', 'index.astro');
	if (!fs.existsSync(page)) {
		report.skipped.push(`${app} (sin index)`);
		continue;
	}

	const raw = fs.readFileSync(page, 'utf8');
	const crlf = raw.includes('\r\n');
	let src = raw.replace(/\r\n/g, '\n');
	const before = src;
	const importRe = /import Galeria from '\.\.\/components\/Galeria\.astro';(\n|(?=---))/;
	const hasImport = importRe.test(src);

	if (hasImport) {
		src = src.replace(
			importRe,
			"import { LocalGaleria } from '@astro-components';\n",
		);
		// El tipo del glob tiene que venir del propio fichero que lo escribe.
		if (!/ImageMetadata/.test(src)) {
			const fmEnd = frontmatterEnd(src);
			src = `${src.slice(0, fmEnd)}\nimport type { ImageMetadata } from 'astro';${src.slice(fmEnd)}`;
		}
		const fmEnd = frontmatterEnd(src);
		const glob =
			"const fotosGaleria = import.meta.glob<ImageMetadata>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {\n\teager: true,\n\timport: 'default',\n});";
		src = `${src.slice(0, fmEnd)}\n${glob}${src.slice(fmEnd)}`;
		src = src.replace(/<Galeria\b/g, '<LocalGaleria fotos={fotosGaleria}');
	}

	if (src !== before) {
		report.files++;
		report.apps.push(app);
		if (!DRY) fs.writeFileSync(page, crlf ? src.replace(/\n/g, '\r\n') : src);
	}

	if (fs.existsSync(comp)) {
		const still = walkAstro(srcDir).some((f) => {
			const content = f === page ? src : fs.readFileSync(f, 'utf8');
			return /components\/Galeria\.astro/.test(content);
		});
		if (still) {
			report.skipped.push(`${app} (aún importado)`);
		} else {
			if (!DRY) fs.unlinkSync(comp);
			report.deleted++;
		}
	}
}

console.log(DRY ? '--- DRY RUN ---' : '--- APLICADO ---');
console.log('apps con página migrada:', report.apps.length, '| componentes borrados:', report.deleted);
console.log('omitidas:', report.skipped);
