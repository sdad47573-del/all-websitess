import { readFileSync } from 'node:fs';
const data = JSON.parse(readFileSync('scripts/.tmp-tio-malo.txt', 'utf8').replace(/^\)\]\}'\n?/, ''));
const p = data[6];
console.log('place keys count', p.length);
p.forEach((v, i) => {
  if (v === null || v === undefined) return;
  const s = JSON.stringify(v);
  if (s.length < 500) console.log(i, s);
  else console.log(i, s.slice(0, 500) + '...');
});
