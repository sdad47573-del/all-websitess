import { readFileSync } from 'node:fs';

const json = JSON.parse(readFileSync('.tmp-benfis/place.txt', 'utf8').replace(/^\)\]\}'/, ''));
const place = json[6];

const strings = [];
(function walk(node) {
	if (typeof node === 'string') strings.push(node);
	else if (Array.isArray(node)) node.forEach(walk);
})(json);

const unique = (list) => [...new Set(list)];

console.log('=== nombre / direccion ===');
console.log(unique(strings.filter((v) => /benfis/i.test(v) && v.length < 120)).join('\n'));

console.log('\n=== ubicacion ===');
console.log(unique(strings.filter((v) => /murcia|ceut[ií]|calle|c\/|avenida|avda/i.test(v) && v.length < 90)).slice(0, 12).join('\n'));

console.log('\n=== telefono ===');
console.log(unique(strings.filter((v) => /\+\d{2} \d{3} \d{2} \d{2} \d{2}/.test(v) || /^\+34\d{9}$/.test(v))).join('\n'));

console.log('\n=== nota y resenas [6][4] ===');
console.log(JSON.stringify(place[4]).slice(0, 400));

console.log('\n=== categorias ===');
console.log(unique(strings.filter((v) => /restaurante|bar|cafeter|arrocer|tapas|asador|mes[oó]n|pizzer|marisquer|cocina/i.test(v) && v.length < 55)).join('\n'));

console.log('\n=== horario [6][203] ===');
console.log(JSON.stringify(place[203]).slice(0, 1100));

console.log('\n=== resenas ===');
for (const [index, review] of (place[31]?.[1] ?? []).entries()) {
	console.log(`  ${index}: ${JSON.stringify(review[1])}`);
}

console.log('\n=== atributos [6][100] ===');
const attrs = [];
(function collect(node) {
	if (typeof node === 'string') attrs.push(node);
	else if (Array.isArray(node)) node.forEach(collect);
})(place[100]);
console.log(unique(attrs).filter((v) => !v.startsWith('/')).join('\n'));
