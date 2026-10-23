import { readFileSync } from 'node:fs';
const raw = readFileSync('.tmp-rocio/place.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
console.log('name:', info[11]);
console.log('address:', JSON.stringify(info[2]));
console.log('geo:', JSON.stringify(info[9]));
console.log('fid:', info[10]);
console.log('cats:', JSON.stringify(info[13]));
console.log('rating:', info[4]?.[7], 'reviews:', info[4]?.[8]);
console.log('desc:', JSON.stringify(info[154]));
console.log('phone[178]:', JSON.stringify(info[178]));
console.log('pluscode[183]:', JSON.stringify(info[183]));
console.log('website? searching...');
const s = raw.match(/"(https?:\/\/(?!www\.google)[^"]{5,120})"/g) || [];
console.log([...new Set(s)].slice(0, 10).join('\n'));
console.log('\n=== hours info[203] ===');
try { for (const d of info[203][0]) console.log(d[0], JSON.stringify(d[3])); } catch (e) { console.log('err', e.message); }
console.log('\n=== reviews info[31][1] ===');
try { for (const r of info[31][1]) console.log('---', r[9], '|', (r[1] || '').replace(/\s+/g, ' ').slice(0, 260)); } catch (e) { console.log('err', e.message); }
console.log('\n=== photos?', /googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw), 'count', (raw.match(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//g) || []).length);
console.log('\n=== attributes info[100] ===');
try { console.log(JSON.stringify(info[100], null, 1).slice(0, 4000)); } catch (e) { console.log('err', e.message); }
