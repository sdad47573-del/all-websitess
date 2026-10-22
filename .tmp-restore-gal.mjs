import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const apps = JSON.parse(fs.readFileSync('/tmp/gal.json', 'utf8'));
let n = 0;
for (const app of apps) {
	for (const rel of ['src/pages/index.astro', 'src/components/Galeria.astro']) {
		const file = `apps/${app}/${rel}`;
		try {
			const buf = execSync(`git show HEAD:${file}`, { encoding: 'buffer', maxBuffer: 1e8 });
			fs.mkdirSync(path.dirname(file), { recursive: true });
			fs.writeFileSync(file, buf);
			n++;
		} catch {
			// El fichero no existía en HEAD (no debería pasar en este grupo).
			console.log('sin HEAD:', file);
		}
	}
}
console.log('restaurados', n);
