/**
 * audit-gaps.mjs — mide los huecos que quedan tras la primera pasada de mejoras.
 * Solo informa: no modifica nada.
 *
 *   node scripts/audit-gaps.mjs
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const APPS = 'apps';
const apps = readdirSync(APPS, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.filter((a) => existsSync(join(APPS, a, 'src/pages/index.astro')));

const walk = (dir) => {
	let out = [];
	for (const d of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, d.name);
		if (d.isDirectory()) out = out.concat(walk(p));
		else if (/\.(astro|ts|tsx|js|jsx)$/.test(d.name)) out.push(p);
	}
	return out;
};

const rows = [];
for (const app of apps) {
	const root = join(APPS, app);
	const src = walk(join(root, 'src'));
	const all = src.map((p) => readFileSync(p, 'utf8')).join('\n');
	const headFile = src.find((p) => /<head[\s>]/.test(readFileSync(p, 'utf8'))) ?? src[0];
	const head = readFileSync(headFile, 'utf8');
	const config = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
	const siteUrl = (config.match(/site:\s*['"`]([^'"`]+)['"`]/) || [])[1] || null;

	// Teléfono: enlace real, variable phoneHref/tel, o un número escrito a mano.
	const telHref = /href="tel:|href=\{phoneHref\}|href=\{.*phone.*\}/i.test(all);
	const phoneText = (all.match(/\+?34[\s]?[\d]{3}[\s.-]?[\d]{2}[\s.-]?[\d]{2}[\s.-]?[\d]{2}/) || [])[0] || null;
	const hasMaps = /google\.(com|co\.[a-z]+)\/maps|maps\.google/i.test(all);
	const coords = (all.match(/latitude:\s*(-?[\d.]+)/) || [])[1] || null;

	rows.push({
		app,
		siteUrl,
		telHref,
		phoneText,
		hasMaps,
		coords,
		hasGeo: /name="geo\.region"/.test(all),
		hasOg: /property="og:image"/.test(all),
		ogAsset: ['og.svg', 'og.png', 'og.jpg', 'og.jpeg', 'og.webp'].some((f) => existsSync(join(root, 'public', f))),
		hasJsonLd: /application\/ld\+json/.test(all),
		hasDescription: /<meta\s+name="description"/.test(head),
		hasCanonical: /rel="canonical"/.test(head),
	});
}

const total = rows.length;
const count = (fn) => rows.filter(fn).length;
const pct = (n) => `${String(n).padStart(3)}/${total} (${Math.round((n / total) * 100)}%)`;

console.log(`Apps con web: ${total}\n`);
console.log('CONVERSIÓN');
console.log('  con enlace tel:            ', pct(count((r) => r.telHref)));
console.log('  con teléfono pero SIN tel:', pct(count((r) => !r.telHref && r.phoneText)));
console.log('  sin teléfono localizable: ', pct(count((r) => !r.phoneText)));
console.log('  con enlace Google Maps:   ', pct(count((r) => r.hasMaps)));
console.log('  con coordenadas en datos: ', pct(count((r) => r.coords)));
console.log('\nSEO');
console.log('  con og:image:             ', pct(count((r) => r.hasOg)));
console.log('  con asset og pero sin tag:', pct(count((r) => !r.hasOg && r.ogAsset)));
console.log('  sin asset ni tag og:      ', pct(count((r) => !r.hasOg && !r.ogAsset)));
console.log('  con geo.region:           ', pct(count((r) => r.hasGeo)));
console.log('  con coords pero SIN geo:  ', pct(count((r) => r.coords && !r.hasGeo)));
console.log('  con JSON-LD:              ', pct(count((r) => r.hasJsonLd)));
console.log('  con meta description:     ', pct(count((r) => r.hasDescription)));
console.log('  con canonical:            ', pct(count((r) => r.hasCanonical)));
console.log('  con site en astro.config: ', pct(count((r) => r.siteUrl)));

const noTel = rows.filter((r) => !r.telHref && r.phoneText);
console.log(`\nSIN tel: pero con teléfono (${noTel.length})`);
console.log('  ' + noTel.map((r) => r.app).join(', '));

const needOg = rows.filter((r) => !r.hasOg && !r.ogAsset);
console.log(`\nSIN imagen og (${needOg.length})`);
console.log('  ' + needOg.map((r) => r.app).join(', '));

const needGeo = rows.filter((r) => r.coords && !r.hasGeo);
console.log(`\nCON coords pero SIN geo (${needGeo.length})`);
console.log('  ' + needGeo.map((r) => r.app).join(', '));

const needCan = rows.filter((r) => r.siteUrl && !r.hasCanonical);
console.log(`\nCON site pero SIN canonical (${needCan.length})`);
console.log('  ' + needCan.map((r) => r.app).join(', '));
