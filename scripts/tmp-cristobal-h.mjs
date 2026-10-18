import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-cristobal.txt', 'utf8');
const clean = raw.replaceAll('\\u003d', '=').replaceAll('\\u0026', '&');

const tail = clean.slice(clean.indexOf('FJ9C+2C'));
const badges = [...tail.matchAll(/\["2ahUKE[^,"]+",\["([^"]+)"\]/g)].map((m) => m[1]);
console.log('BADGES:', JSON.stringify([...new Set(badges)], null, 1));

const urls = [...clean.matchAll(/https?:\/\/([^"\\\s/]{4,80})/g)].map((m) => m[1]);
const uniq = [...new Set(urls)].filter(
	(h) => !h.includes('google') && !h.includes('gstatic') && !h.includes('googleusercontent'),
);
console.log('NON-GOOGLE HOSTS:', JSON.stringify(uniq, null, 1));
