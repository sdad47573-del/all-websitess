import { readFileSync } from 'node:fs';

const text = readFileSync('scripts/tmp-marco.txt', 'utf8').replace(/^\)\]\}'\n?/, '');
const data = JSON.parse(text);
const p = data[6];

console.log('name:', p[11]);
console.log('categories:', JSON.stringify(p[13]));
console.log('rating:', p[4][7], 'count:', p[4][8]);
console.log('address:', JSON.stringify(p[18]));
console.log('phone:', JSON.stringify(p[178]));

let i = text.indexOf('merchantdescription');
console.log(
	'description:',
	i === -1 ? '(sin descripción)' : JSON.stringify(text.slice(Math.max(0, i - 900), i + 40)),
);

const start = text.indexOf('[["domingo"');
console.log('hours:', start === -1 ? '(sin horario)' : text.slice(start, start + 1400));

const reviews = p[31]?.[1] ?? [];
console.log('\nreseñas:', reviews.length);
for (const r of reviews) console.log('·', JSON.stringify(r[1]));

console.log('\nattr:', [...new Set([...text.matchAll(/"(\/geo\/type\/[^"]*)"/g)].map((m) => m[1]))].join('\n'));
