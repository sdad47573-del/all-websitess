import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const lines = execSync('git status --porcelain apps', { encoding: 'utf8' })
	.split('\n')
	.filter(Boolean);

let n = 0;
for (const line of lines) {
	const status = line.slice(0, 2).trim();
	const file = line.slice(3).trim().replace(/^"|"$/g, '');
	if (status !== 'M' && status !== 'D') continue;
	const buf = execSync(`git show HEAD:${file}`, { encoding: 'buffer', maxBuffer: 1e8 });
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, buf);
	n++;
}
console.log('restaurados', n);
