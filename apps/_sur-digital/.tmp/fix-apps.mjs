// Mejora sistémica de src/apps:
//  A) CSS que importa el Tailwind compartido (source(none)) y no declara @source:
//     Tailwind no genera utilidades y la web se ve sin maquetar → añade @source.
//  B) <nav class="legal-links"> fuera del footer cuando el footer ya pinta
//     <nav class="sur-legal"> → elimina el bloque duplicado.
import fs from "node:fs";
import path from "node:path";

const DRY = !process.argv.includes("--write");
const root = path.resolve("src/apps");
const apps = fs
	.readdirSync(root, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name);

const walk = (dir) => {
	const out = [];
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...walk(p));
		else out.push(p);
	}
	return out;
};

const isTw = (s) => /@astro-config\/index\.css|["']tailwindcss["']|@import\s+["']tailwindcss/.test(s);

const sourceFixed = [];
const legalRemoved = [];

for (const slug of apps) {
	const dir = path.join(root, slug);
	for (const file of walk(dir)) {
		if (file.endsWith(".css")) {
			const src = fs.readFileSync(file, "utf8");
			if (!isTw(src) || src.includes("@source")) continue;
			const rel = path.relative(dir, path.dirname(file));
			const depth = rel ? rel.split(path.sep).length : 0;
			const target = depth === 0 ? "./" : "../".repeat(depth);
			const lines = src.split(/\r?\n/);
			const idx = lines.findIndex((l) => /@import/.test(l) && isTw(l));
			lines.splice(idx + 1, 0, `@source '${target}';`);
			if (!DRY) fs.writeFileSync(file, lines.join("\n"));
			sourceFixed.push(`${slug}/${path.relative(dir, file)} → @source '${target}'`);
		}
		if (file.endsWith(".astro")) {
			const src = fs.readFileSync(file, "utf8");
			if (!src.includes("sur-legal")) continue;
			const re = /[ \t]*<nav[^>]*class="[^"]*\blegal-links\b[^"]*"[^>]*>[\s\S]*?<\/nav>\r?\n?/;
			if (!re.test(src)) continue;
			const out = src.replace(re, "");
			if (!DRY) fs.writeFileSync(file, out);
			legalRemoved.push(`${slug}/${path.relative(dir, file)}`);
		}
	}
}

console.log(
	JSON.stringify(
		{
			mode: DRY ? "dry-run" : "write",
			sourceFixed: sourceFixed.length,
			legalRemoved: legalRemoved.length,
			sampleSource: sourceFixed.slice(0, 6),
			sampleLegal: legalRemoved.slice(0, 6),
		},
		null,
		2,
	),
);
