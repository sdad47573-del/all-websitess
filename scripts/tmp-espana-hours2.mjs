import { readFileSync } from 'node:fs';
const raw = readFileSync('scripts/tmp-espana.txt', 'utf8');
const info = JSON.parse(raw.slice(raw.indexOf('[')))[6];
console.log('=== info[203] completo ===');
console.log(JSON.stringify(info[203], null, 1).slice(0, 7000));
