import { readFileSync } from 'node:fs';
const raw = readFileSync('scripts/tmp-colorin.txt','utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
const hours = info[203][0];
console.log(JSON.stringify(hours, null, 1));
