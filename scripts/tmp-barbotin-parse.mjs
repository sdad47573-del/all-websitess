import { readFileSync } from 'node:fs';
const t = readFileSync('scripts/tmp-barbotin.txt', 'utf8');
const info = JSON.parse(t.slice(5))[6];
console.log('info length', info.length);
info.forEach((v, i) => {
  if (v === null || v === undefined) return;
  const s = JSON.stringify(v);
  if (s.length > 400) return;
  console.log(i, s);
});
console.log('=== HOURS (203) ==='); console.log(JSON.stringify(info[203]?.[0]));
console.log('=== ACCESIBILIDAD (100) ==='); console.log(JSON.stringify(info[100]));
console.log('=== DESCRIPCIÓN (154) ==='); console.log(JSON.stringify(info[154]));
console.log('=== RESEÑAS ===');
(info[31]?.[1]||[]).forEach((x,i)=>console.log(i, '| rating', x[9], '|', JSON.stringify(x[1])));
