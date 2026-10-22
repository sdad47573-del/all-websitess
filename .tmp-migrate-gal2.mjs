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

function insertAfterImports(src, block) {
	const fmEnd = frontmatterEnd(src);
	const fm = src.slice(0, fmEnd);
	const lastImport = fm.lastIndexOf('\nimport ');
	if (lastImport === -1) {
		const at = src.indexOf('\n') + 1;
		return `${src.slice(0, at)}${block}\n${src.slice(at)}`;
	}
	const nl = fm.indexOf('\n', lastImport + 1);
	const at = nl === -1 ? fmEnd : nl + 1;
	return `${src.slice(0, at)}${block}\n${src.slice(at)}`;
}

const report = { apps: [], deleted: 0, skipped: [] };

for (const app of apps) {
	const srcDir = `apps/${app}/src`;
	const comp = path.join(srcDir, 'components', 'Galeria.astro');
	const page = path.join(srcDir, 'pages', 'index.astro');
	if (!fs.existsSync(page)) {
		report.skipped.push(app);
		continue;
	}

	const raw = fs.readFileSync(page, 'utf8');
	const crlf = raw.includes('\r\n');
	let src = raw.replace(/\r\n/g, '\n');
	const before = src;

	const importRe = /import Galeria from '\.\.\/components\/Galeria\.astro';(?:\n|(?=---))/;
	if (importRe.test(src)) {
		src = src.replace(importRe, "import { LocalGaleria } from '@astro-components';\n");
		const typeImport = /ImageMetadata/.test(src) ? '' : "import type { ImageMetadata } from 'astro';\n";
		const glob = `${typeImport}const fotosGaleria = import.meta.glob<ImageMetadata>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {\n\teager: true,\n\timport: 'default',\n});`;
		src = insertAfterImports(src, glob);
		src = src.replace(/<Galeria\b/g, '<LocalGaleria fotos={fotosGaleria}');
	}

	if (src !== before) {
		report.apps.push(app);
		if (!DRY) fs.writeFileSync(page, crlf ? src.replace(/\n/g, '\r\n') : src);
	}

	if (fs.existsSync(comp)) {
		const still = walkAstro(srcDir).some((f) => {
			const content = f === page ? src : fs.readFileSync(f, 'utf8');
			return /components\/Galeria\.astro/.test(content);
		});
		if (still) report.skipped.push(`${app} (aún importado)`);
		else {
			if (!DRY) fs.unlinkSync(comp);
			report.deleted++;
		}
	}
}

console.log(DRY ? '--- DRY RUN ---' : '--- APLICADO ---');
console.log('páginas migradas:', report.apps.length, '| componentes borrados:', report.deleted);
console.log('omitidas:', report.skipped);
