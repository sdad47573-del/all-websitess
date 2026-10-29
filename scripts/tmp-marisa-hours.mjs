import { readFileSync } from 'node:fs';
const raw = readFileSync('tmp-marisa.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
info.forEach((v, i) => {
	const s = JSON.stringify(v);
	if (s && s.includes('lunes')) console.log(i, s.slice(0, 4000));
});
