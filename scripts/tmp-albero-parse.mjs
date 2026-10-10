import { readFileSync } from 'node:fs';

const text = readFileSync('scripts/tmp-albero.txt', 'utf8').replace(/^\)\]\}'\n/, '');
const data = JSON.parse(text);

console.log('addr[2]:', JSON.stringify(data[6][2]));
console.log('addr[18]:', JSON.stringify(data[6][18]));
console.log('distintivo [88]:', JSON.stringify(data[6][88]).slice(0, 200));
console.log('rating [6][4]:', JSON.stringify(data[6][4]));
console.log('categorias [6][13]:', JSON.stringify(data[6][13]));
console.log('descripcion [6][154]:', JSON.stringify(data[6][154]).slice(0, 1200));
console.log('phone [6][178]:', JSON.stringify(data[6][178]).slice(0, 600));
console.log('pluscode [6][183][2]:', JSON.stringify(data[6][183][2]).slice(0, 300));
console.log('hours [6][203][0]:', JSON.stringify(data[6][203][0]).slice(0, 4000));
console.log('features [6][100]:', JSON.stringify(data[6][100]).slice(0, 3000));
console.log('reviews [6][31]:', JSON.stringify(data[6][31]).slice(0, 6000));

const strings = [];
const walk = (node, path) => {
	if (typeof node === 'string') strings.push({ path, value: node });
	else if (Array.isArray(node)) node.forEach((c, i) => walk(c, `${path}[${i}]`));
};
walk(data, '');
console.log('\nchannel/reviews url:');
for (const s of strings)
	if (s.value.includes('local/reviews') || s.value.includes('/g/11gdy_yrk2')) console.log(s.path, s.value.slice(0, 160));
