import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-alentejo.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== info[2] direccion ===');
console.log(JSON.stringify(info[2], null, 1));
console.log('=== info[18] ===');
console.log(JSON.stringify(info[18]));
console.log('=== info[11] nombre / info[39] ===');
console.log(JSON.stringify(info[11]), JSON.stringify(info[39]));

console.log('\n=== info[100] grupos ===');
for (const group of info[100]?.[1] ?? []) {
	console.log(`\n# ${group[0]} · ${group[1]}`);
	for (const item of group[2] ?? []) console.log('   -', item[1], '| valor[2][0]:', JSON.stringify(item[2]?.[0]));
	console.log('   otros campos:', JSON.stringify(group[3] ?? null).slice(0, 300));
}

console.log('\n=== info[4] completo ===');
console.log(JSON.stringify(info[4], null, 1).slice(0, 3000));

console.log('\n=== precios / menu ===');
const strings = [];
const walk = (node, path) => {
	if (typeof node === 'string') strings.push({ path, value: node });
	else if (Array.isArray(node)) node.forEach((c, i) => walk(c, `${path}[${i}]`));
};
walk(j, '');
for (const s of strings) {
	if (/€|euros|precio medio|menu|carta|Cardápio|ementa/i.test(s.value) && !/gstatic|google\.com|support/i.test(s.value))
		console.log(s.path, JSON.stringify(s.value).slice(0, 200));
}

console.log('\n=== textos largos (posibles reseñas/avisos) ===');
for (const s of strings) {
	if (s.value.length > 60 && !/google|gstatic|http/i.test(s.value))
		console.log(s.path, JSON.stringify(s.value).slice(0, 260));
}

console.log('\n=== indices con reseñas: busca arrays con rating+texto ===');
for (let i = 0; i < info.length; i++) {
	const node = info[i];
	if (!Array.isArray(node)) continue;
	const txt = JSON.stringify(node);
	if (/reseña|review|Reseña/i.test(txt) && txt.length > 200) console.log('info[' + i + '] len', txt.length, txt.slice(0, 200));
}
