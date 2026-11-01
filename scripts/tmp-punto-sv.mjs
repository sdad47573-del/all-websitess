import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-punto.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
const s = JSON.stringify(info[51]);
console.log('len', s.length);
console.log(s.slice(0, 6000));
