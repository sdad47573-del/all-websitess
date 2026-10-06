// Temporal: extrae las reseñas destacadas y comprobaciones del payload de Tango.
import { readFileSync } from 'node:fs';

const t = readFileSync('scripts/tmp-tango.txt', 'utf8');

const idxs = [];
let i = -1;
while ((i = t.indexOf('maps/contrib/', i + 1)) !== -1) idxs.push(i);
console.log('contrib blocks:', idxs.length);

for (const ix of idxs) {
	const seg = t.slice(ix, ix + 1500);
	const autor = /contrib\/(\d+)/.exec(seg)?.[1];
	// El texto viene como \"\"texto\"\" dentro del JSON escapado de Google.
	const txt = /\\"((?:\\.|[^"\\]){10,800}?)\\"/.exec(seg)?.[1];
	// La valoración numérica va justo después del texto, antes del id de la reseña.
	const resto = txt ? seg.slice(seg.indexOf(txt) + txt.length) : seg;
	const rating = /^\],(\d),"ChZ/.exec(resto)?.[1] ?? /\],(\d),"Ch/.exec(resto)?.[1];
	console.log('---', autor);
	console.log('texto:', JSON.stringify(txt));
	console.log('rating:', rating);
}

// Comprobaciones globales
console.log('rating+count:', /\],(\d\.\d),(\d+)\]/.exec(t)?.slice(1));
console.log('phone:', t.match(/950 65 11 08/)?.[0]);
console.log('days:', ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'].filter((d) => t.includes(`"${d}"`)).length);
