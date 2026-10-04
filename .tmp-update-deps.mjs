import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
if (existsSync('package.json')) files.push('package.json');
for (const dir of ['apps', 'packages']) {
	if (!existsSync(dir)) continue;
	for (const name of readdirSync(dir)) {
		const p = join(dir, name, 'package.json');
		if (existsSync(p)) files.push(p);
	}
}

const SECTIONS = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
const SKIP = /^(workspace:|file:|link:|catalog:|npm:|https?:|git|\*)/;
const pkgs = files.map((f) => ({ file: f, json: JSON.parse(readFileSync(f, 'utf8')) }));

const names = new Set();
for (const { json } of pkgs) {
	for (const s of SECTIONS) {
		for (const [k, v] of Object.entries(json[s] || {})) {
			if (!SKIP.test(String(v))) names.add(k);
		}
	}
}
console.log('unique deps:', names.size);

async function latest(name) {
	try {
		const res = await fetch(`https://registry.npmjs.org/${name}/latest`, {
			headers: { accept: 'application/json' },
		});
		if (!res.ok) return null;
		const json = await res.json();
		return json.version || null;
	} catch {
		return null;
	}
}

const list = [...names];
const versions = {};
let cursor = 0;
await Promise.all(
	Array.from({ length: 16 }, async () => {
		while (cursor < list.length) {
			const name = list[cursor++];
			versions[name] = await latest(name);
		}
	}),
);

const resolved = Object.entries(versions).filter(([, v]) => v);
console.log('resolved:', resolved.length, 'of', list.length);

for (const { file, json } of pkgs) {
	for (const s of SECTIONS) {
		const sec = json[s];
		if (!sec) continue;
		for (const [k, v] of Object.entries(sec)) {
			if (SKIP.test(String(v))) continue;
			const next = versions[k];
			if (!next) continue;
			const prefix = String(v).startsWith('^') ? '^' : String(v).startsWith('~') ? '~' : '';
			sec[k] = prefix + next;
		}
	}
	if (json.resolutions) {
		for (const [k, v] of Object.entries(json.resolutions)) {
			const next = versions[k];
			if (!next) continue;
			const prefix = String(v).startsWith('^') ? '^' : String(v).startsWith('~') ? '~' : '';
			json.resolutions[k] = prefix + next;
		}
	}
	const raw = readFileSync(file, 'utf8');
	const eol = raw.includes('\r\n') ? '\r\n' : '\n';
	writeFileSync(file, JSON.stringify(json, null, 2).replace(/\n/g, eol) + eol);
}
console.log('files updated:', pkgs.length);
