import { readFileSync } from 'node:fs';
const data = JSON.parse(readFileSync('scripts/.tmp-tio-malo.txt', 'utf8').replace(/^\)\]\}'\n?/, ''));
const p = data[6];
// attributes
const walkAttr = (v, out = []) => {
  if (Array.isArray(v)) {
    if (typeof v[0] === 'string' && v[0].includes('/geo/type/')) out.push(v);
    else v.forEach((x) => walkAttr(x, out));
  }
  return out;
};
for (const a of walkAttr(p[100])) {
  try { console.log('ATTR', a[0], '=>', JSON.stringify(a[1]), JSON.stringify(a[2]?.[0]?.[0] ?? a[2])); } catch {}
}
console.log('--- reviews');
const revs = p[4]?.[3] ?? [];
console.log(JSON.stringify(revs).slice(0, 500));
for (const r of p[4] ?? []) {
  if (Array.isArray(r) && r.length > 2) console.log(JSON.stringify(r).slice(0, 600));
}
console.log('--- photo entries');
const photoBlock = p[51];
for (const [i, entry] of photoBlock.entries()) {
  try {
    console.log(i, 'id', entry[0], 'author', entry[13], 'dims', entry[3], 'url', String(entry[6]?.[0] ?? entry[0]).slice(0, 120));
  } catch (e) { console.log(i, 'err'); }
}
