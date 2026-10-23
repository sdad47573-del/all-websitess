import { readFileSync } from 'node:fs';
const raw = readFileSync('.tmp-rocio/place.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
const groups = info[100]?.[1] || [];
for (const g of groups) {
  console.log('##', g[1]);
  for (const a of g[2] || []) {
    const label = a[1];
    const value = a[2]?.[2]?.[1] ?? a[2]?.[0];
    const neg = a[3]?.[0] === 1 ? ' (no)' : '';
    console.log('  -', label, '=>', JSON.stringify(value), neg);
  }
}
console.log('\nprice/range info[4]:', JSON.stringify(info[4]));
console.log('\ninfo[34]?', JSON.stringify(info[34])?.slice(0, 300));
// busca textos utiles
const strings = new Set();
const re = /"(Reserv[^"]{0,60}|Aparcamiento[^"]{0,40}|Terraza[^"]{0,40}|Menú[^"]{0,40}|Para llevar[^"]{0,30})"/g;
let m; while ((m = re.exec(raw))) strings.add(m[1]);
console.log('\nmenciones:', [...strings].slice(0, 30).join(' | '));
