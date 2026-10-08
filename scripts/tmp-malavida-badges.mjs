import { readFileSync } from 'node:fs';
const raw = readFileSync('scripts/tmp-malavida.txt', 'utf8');
const set = new Set();
const re = /\["([^"]{2,45})","SearchResult\.TYPE_RESTAURANT"/g;
let m;
while ((m = re.exec(raw))) set.add(m[1]);
console.log('badges:', [...set].join(' | ') || '(ninguno)');
for (const k of ['Brunch','Terraza','Para llevar','Se admiten perros','Reservas','Aparcamiento','Comer en el local','Bueno para grupos']) {
  console.log(k, raw.includes(`["${k}","SearchResult.TYPE_RESTAURANT"`));
}
