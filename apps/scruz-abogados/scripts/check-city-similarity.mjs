// Higiene de contenido: similitud entre las landings de ciudad.
//
// Por qué existe: en sep 2026 las 25 páginas `/abogados-en-<ciudad>/` las generaba
// una única plantilla. El resultado fue Jaccard 0,978-0,987 entre páginas, con 0-6
// palabras exclusivas, y 25 páginas que para el buscador eran la misma. Ese
// defecto no se veía en el build: TypeScript compilaba y no había ningún error.
//
// Qué mide, y por qué el HTML: la primera versión de este script medía el texto
// del módulo de datos, y daba 0,508 con las páginas ya bastante genéricas. El
// motivo es que la página montaba las secciones y las FAQs con una fórmula
// común e **ignoraba** el contenido propio de cada plaza: lo que se publicaba
// era otra cosa. Medir el fichero de datos daba un número optimista sobre un
// texto que no se había enviado. Ahora se mide `dist/`, que es lo que se indexa.
//
// Se eliminan cabecera, pie y el resto de cromo del sitio: son comunes a todas
// las páginas por diseño y no deben penalizar. Lo que tiene que ser propio es el
// cuerpo.
//
// Uso: bun scripts/check-city-similarity.mjs (tras `bun run build`)
// Sale con código 1 si algún par supera el umbral.

import fs from 'node:fs';
import path from 'node:path';

/** Umbral de Jaccard entre dos plazas. El caso real fue 0,978-0,987. */
const MAX_JACCARD = 0.75;

/** Palabras que no aportan identidad al texto legal español. */
const STOPWORDS = new Set(
	`a al algo algunas alguno algunos ante antes aquel aquella aquellos aqui asi
	ayuda cada como con contra cual cuando de del desde donde dos el ella ellas
	ellos en entre era eran eres es esa esas ese eso esos esta estan estar estas
	este esto estos estoy fue fueron ha habia hace hacer hacia hay la las le les
	lo los mas me mi mis misma mismo mucha mucho muy nada ni no nos nuestra
	nuestro o os otra otras otro otros para pero poco por porque que quien se
	sea segun ser si sin sobre solo son su sus tambien tanto te tener tiene
	todo todos tras tu tus un una unas uno unos usted ustedes y ya yo`
		.split(/\s+/)
		.filter(Boolean),
);

const MIN_WORD_LENGTH = 4;

const words = (text) =>
	new Set(
		text
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.split(/[^\p{L}\p{N}]+/u)
			.filter((w) => w.length >= MIN_WORD_LENGTH && !STOPWORDS.has(w)),
	);

const jaccard = (a, b) => {
	if (a.size === 0 || b.size === 0) return 0;
	let shared = 0;
	for (const w of a) if (b.has(w)) shared += 1;
	return shared / (a.size + b.size - shared);
};

/** Texto visible del cuerpo de la página, sin cabecera ni pie. */
const bodyText = (file) => {
	const html = fs.readFileSync(file, 'utf8');
	const withoutChrome = html
		// Los comentarios van primero: si se quitan las etiquetas después, el
		// texto de un comentario se cuela en el cuerpo y aparece en todas las
		// páginas (el bloque de llms.txt con gptbot y companyanos, por ejemplo).
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<header[\s\S]*?<\/header>/g, ' ')
		.replace(/<footer[\s\S]*?<\/footer>/g, ' ')
		.replace(/<nav[\s\S]*?<\/nav>/g, ' ')
		.replace(/<script[\s\S]*?<\/script>/g, ' ')
		.replace(/<style[\s\S]*?<\/style>/g, ' ')
		.replace(/<svg[\s\S]*?<\/svg>/g, ' ');
	return withoutChrome
		.replace(/<[^>]+>/g, ' ')
		.replace(/&[a-z]+;/g, ' ')
		.replace(/\s+/g, ' ');
};

const dir = 'dist';
if (!fs.existsSync(dir)) {
	console.error('No existe dist/. Ejecuta `bun run build` antes de este script.');
	process.exit(1);
}

const files = fs
	.readdirSync(dir)
	.filter((d) => d.startsWith('abogados-en-'))
	.map((d) => path.join(dir, d, 'index.html'))
	.filter((f) => fs.existsSync(f))
	.sort();

if (files.length < 2) {
	console.log(`Solo ${files.length} landing(s) de ciudad en dist: no hay nada que comparar.`);
	process.exit(0);
}

const bags = new Map(files.map((f) => [f, words(bodyText(f))]));
const offenders = [];
let worst = { pair: '', value: 0 };

console.log(`=== SIMILITUD ENTRE LANDINGS DE CIUDAD (${files.length}, sobre el HTML) ===\n`);

for (let i = 0; i < files.length; i += 1) {
	for (let j = i + 1; j < files.length; j += 1) {
		const a = files[i].replace(`${dir}/`, '').replace('/index.html', '');
		const b = files[j].replace(`${dir}/`, '').replace('/index.html', '');
		const value = jaccard(bags.get(files[i]), bags.get(files[j]));
		if (value > worst.value) worst = { pair: `${a} / ${b}`, value };
		if (value > MAX_JACCARD) offenders.push({ a, b, value, files: [files[i], files[j]] });
	}
}

const sizes = [...bags.values()].map((s) => s.size);
console.log(`  Palabras distintas por plaza: min ${Math.min(...sizes)}, max ${Math.max(...sizes)}`);
console.log(`  Par más parecido: ${worst.pair} (Jaccard ${worst.value.toFixed(3)})`);
console.log(`  Umbral: ${MAX_JACCARD}`);

if (offenders.length > 0) {
	console.log(`\n=== ${offenders.length} PAR(ES) POR ENCIMA DEL UMBRAL ===`);
	for (const { a, b, value, files: [fa, fb] } of offenders) {
		const shared = [...bags.get(fa)].filter((w) => bags.get(fb).has(w));
		console.log(`  ${a} / ${b}: ${value.toFixed(3)}`);
		console.log(`    comparten: ${shared.slice(0, 15).join(', ')}`);
	}
	console.log(
		'\nEstas páginas dicen lo mismo con otras palabras. Mira qué bloque comparten\n' +
			'(las palabras de la lista) y llévalo a los datos de cada plaza: el tribunal,\n' +
			'los municipios de su partido, la distancia real y las preguntas frecuentes\n' +
			'propias. Si el bloque común está en `abogados-en-[city].astro`, no debe existir:\n' +
			'ahí solo va la maquetación.',
	);
	process.exit(1);
}

console.log('\nNinguna plaza por encima del umbral.');
