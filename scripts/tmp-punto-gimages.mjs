import { writeFileSync } from 'node:fs';

const q = 'El Chef a Casa El Punto Alcalá de Guadaíra restaurante';
const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}&hl=es&gl=es`;

const res = await fetch(url, {
	headers: {
		'user-agent':
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		'accept-language': 'es-ES,es;q=0.9',
		cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
	},
});
const html = await res.text();
writeFileSync('scripts/tmp-punto-images.html', html);
console.log('status', res.status, 'len', html.length);
const urls = [...html.matchAll(/https:\\?\/\\?\/[^"'\s]+?\.(?:jpg|jpeg|png|webp)/gi)].map((m) => m[0].replaceAll('\\/', '/').replaceAll('\\u003d', '='));
const uniq = [...new Set(urls)];
console.log('image urls', uniq.length);
console.log(uniq.slice(0, 30).join('\n'));
