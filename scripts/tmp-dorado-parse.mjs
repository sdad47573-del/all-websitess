import { readFileSync } from 'node:fs';

const text = readFileSync('scripts/tmp-dorado.txt', 'utf8');
const show = (label, re, n = 1) => {
	const m = text.match(re);
	console.log(label, m ? JSON.stringify(m.slice(0, n + 1)) : 'NO');
};

show('name', /"(Alimentación Preparada El Dorado[^"]*)"/);
show('street', /"(C\. [^"]*\d+[^"]*)"/);
show('city', /"(\d{5} [^"]+)"/);
show('phone', /"(\d{3} \d{2} \d{2} \d{2})"/);
show('rating', /(\d\.\d),(?:\d+)?/);
show('cats', /"(Restaurante[^"]*|Tienda[^"]*|Establecimiento[^"]*|Comida[^"]*)"/);
show('placeId', /"(ChIJ[A-Za-z0-9_-]+)"/);
show('geo', /(40\.\d+),(-3\.\d+)/);
console.log('days:', [...text.matchAll(/"(lunes|martes|miércoles|jueves|viernes|sábado|domingo)"/g)].map((m) => m[1]).join(','));
console.log('hours:', [...text.matchAll(/"(\d{1,2}:\d{2}[^"]{0,12})"/g)].slice(0, 20).map((m) => m[1]).join(' | '));
console.log('reviews:', [...text.matchAll(/rating (\d)/g)].map((m) => m[1]).join(','));
