import { writeFileSync } from 'node:fs';

const url =
	'https://www.google.com/maps/place/El+Chef+a+Casa+El+Punto*/@37.3560645,-5.9844716,17z/data=!4m6!3m5!1s0xd126dd5966e1fa5:0x14067191aa178d06!8m2!3d37.3560645!4d-5.9844716!16s%2Fg%2F11gvf13jw6?authuser=0&hl=es&entry=ttu';

const res = await fetch(url, {
	headers: {
		'user-agent':
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		'accept-language': 'es-ES,es;q=0.9',
		cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
	},
});
const html = await res.text();
writeFileSync('scripts/tmp-punto.html', html);
console.log('status', res.status, 'len', html.length, 'final', res.url);
const urls = [...html.matchAll(/https:\\?\/\\?\/lh\d\.googleusercontent\.com\\?\/[^\s"'\\]+/g)].map((m) => m[0]);
console.log('cdn urls', urls.length);
console.log(urls.slice(0, 10).join('\n'));
const street = [...html.matchAll(/streetviewpixels[^"']+/g)].map((m) => m[0]);
console.log('streetview', street.length);
console.log(street.slice(0, 3).join('\n'));
