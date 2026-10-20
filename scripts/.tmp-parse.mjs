import { readFileSync } from 'node:fs';
const raw = readFileSync('scripts/.tmp-tio-malo.txt', 'utf8');
const txt = raw.replace(/^\)\]\}'\n?/, '');
let data;
try { data = JSON.parse(txt); } catch (e) { console.error('parse fail', e.message); process.exit(1); }
const strings = [];
const walk = (v, path = '') => {
  if (typeof v === 'string') strings.push([path, v]);
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
};
walk(data);
console.log('strings', strings.length);
for (const [p, s] of strings) {
  if (/Tío|Avenida|619|956|Sanlúcar|horario|cocina|venta|Venta/i.test(s) && s.length < 300) console.log(p, JSON.stringify(s));
}
