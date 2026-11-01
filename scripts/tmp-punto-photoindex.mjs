import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-ajonegro.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
const found = [];
info.forEach((v, i) => {
	const s = JSON.stringify(v);
	if (s && s.includes('gps-cs-s')) found.push([i, s.length]);
});
console.log('indices with photos:', found);
for (const [i] of found.slice(0, 2)) {
	const s = JSON.stringify(info[i]);
	console.log(`\n[${i}]`, s.slice(0, 1200));
}
