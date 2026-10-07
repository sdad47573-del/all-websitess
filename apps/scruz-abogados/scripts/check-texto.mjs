// Detecta texto corrupto en los literales de cadena de los archivos del proyecto.
//
// Por qué existe: el texto largo en castellano se redacta a veces con fragmentos
// de otros idiomas pegados dentro de una palabra ("laLEVITACIÓN", "conPoor",
// "el particular Totarkhn") o con un carácter de más al final de la línea. Casi
// siempre compila, así que el fallo llega a producción sin que nada lo delate.
// Este script es la red de seguridad: lo que no encuentra aquí no está, pero lo
// que encuentra estaba a punto de publicarse.
//
// No sustituye a leer el texto. Solo atrapa los fallos mecánicos.
//
// Lo que NO detecta: un fragmento sin sentido que conserve la caja correcta
// (por ejemplo "el particular Totarkhn"). No hay forma barata de saber que una
// palabra no existe, así que eso solo lo pillan los ojos de una persona.
//
// Uso: bun scripts/check-texto.mjs [rutas...]
//      sin rutas, revisa src/data y src/@astro-components.
import fs from 'node:fs';
import path from 'node:path';

/** Tipos y APIs que salen dentro de los literales y no son prosa. */
const TECNICO = new Set(
	'SeoArticle SeoArticleFaq SeoArticleSection SeoArticleServiceLink'.split(' '),
);

const SUSTITUIDO = /\uFFFD/; // el texto ya venía roto de origen
const CJK = /[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]/;
// Minúscula pegada a mayúscula: "laLEVITACIÓN", "conPoor", "deClosed". El rango
// tiene que incluir las mayúsculas ASCII (A-Z), no solo las acentuadas.
const CAMEL = /[a-záéíóúüñ][A-ZÁÉÍÓÚÑ\u00c0-\u00dd]/g;

/**
 * ¿El literal es prosa? Solo se revisan los largos: los identificadores
 * ("qrCode", "es-ES") y las etiquetas cortas no son fuente de estos fallos, y
 * metidos en la comprobación solo generaban ruido.
 */
const esProsa = (v) => v.length > 40 && v.includes(' ');

/**
 * Palabras que rompen el patrón "minúscula pegada a mayúscula" pero son
 * correctas. Sin esta lista el detector acusa a "WhatsApp" en cada artículo
 * que lo menciona.
 */
const CONOCIDAS = new Set(['WhatsApp', 'YouTube', 'iPhone', 'eBay', 'PayPal']);

/**
 * Saca los literales de una línea, saltándose los que son rutas o selectores.
 */
function literales(linea) {
	const out = [];
	const re = /(['"])((?:(?!\1)[^\\\n]|\\.)*)\1/g;
	let m;
	while ((m = re.exec(linea)) !== null) {
		const valor = m[2];
		if (!valor || valor.startsWith('/')) continue;
		out.push(valor);
	}
	return out;
}

/**
 * Balance acumulado de corchetes y llaves sobre el archivo entero.
 *
 * El código usa un objeto literal por línea, así que una comprobación por línea
 * no sirve: casi todo el archivo está "desbalanceado" por diseño. Lo que sí
 * delata un fallo real es que la profundidad termine distinta de cero, o que se
 * cierre un contenedor por debajo del nivel en el que se abrió.
 */
function estructura(lineas) {
	const fallos = [];
	let nivel = 0;
	for (const [i, linea] of lineas.entries()) {
		// sin literales ni comentarios: solo la estructura
		const limpio = linea
			.replace(/\/\/.*$/, '')
			.replace(/(['"`])(?:(?!\1)[^\\\n])*\1/g, '""');
		for (const c of limpio) {
			if (c === '{' || c === '[') nivel++;
			else if (c === '}' || c === ']') {
				nivel--;
				if (nivel < 0) {
					fallos.push({ n: i + 1, tipo: 'cierre-sobrante', detalle: linea.trim().slice(0, 90) });
					nivel = 0;
				}
			}
		}
	}
	if (nivel !== 0) {
		fallos.push({
			n: lineas.length,
			tipo: nivel > 0 ? 'faltan-cierres' : 'cierran-de-mas',
			detalle: `nivel final ${nivel} (quedan ${nivel} abiertos)`,
		});
	}
	return fallos;
}

function revisar(file) {
	const texto = fs.readFileSync(file, 'utf8');
	const lineas = texto.split(/\r?\n/);
	// El balance estructural solo se hace en JS/TS. Los .astro mezclan HTML con
	// expresiones {…}, condicionales y literales de plantilla, y un limpiador
	// ingenuo se equivoca más de lo que acierta ahí.
	const esJs = /\.(ts|mjs|js)$/.test(file);
	const fallos = esJs ? estructura(lineas) : [];

	lineas.forEach((linea, i) => {
		for (const valor of literales(linea)) {
			const en = { n: i + 1, detalle: valor.slice(0, 90) };
			// Estos dos aplican a cualquier literal, corto o largo.
			if (SUSTITUIDO.test(valor)) fallos.push({ ...en, tipo: 'caracter-sustituido' });
			if (CJK.test(valor)) fallos.push({ ...en, tipo: 'otro-idioma' });
			if (!esProsa(valor)) continue;
			for (const m of valor.matchAll(CAMEL)) {
				// El regex solo captura el solape ("sA" dentro de "WhatsApp"),
				// así que hay que mirar la palabra completa que lo contiene.
				const antes = valor.slice(0, m.index);
				const desde = (antes.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/) || [''])[0];
				const hasta = valor.slice(m.index + m[0].length);
				const fin = (hasta.match(/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/) || [''])[0];
				const palabra = desde + m[0] + fin;
				if (TECNICO.has(palabra) || CONOCIDAS.has(palabra)) continue;
				fallos.push({
					...en,
					tipo: 'palabra-cortada',
					detalle: `${palabra} — ${valor.slice(0, 80)}`,
				});
			}
		}
	});

	return fallos;
}

function recoger(dir, acc = []) {
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) recoger(p, acc);
		else if (/\.(ts|astro|mjs)$/.test(e.name)) acc.push(p);
	}
	return acc;
}

const args = process.argv.slice(2);
const archivos = args.length
	? args
	: [...recoger('src/data'), ...recoger('src/@astro-components')];

let total = 0;
for (const f of archivos) {
	if (!fs.existsSync(f)) {
		console.error(`✖ no existe: ${f}`);
		process.exit(1);
	}
	const fallos = revisar(f);
	if (fallos.length) {
		total += fallos.length;
		console.log(`\n✖ ${f}`);
		for (const x of fallos) console.log(`   L${x.n} [${x.tipo}] ${x.detalle}`);
	}
}

if (total) {
	console.log(`\n${total} posible(s) defecto(s). Revísalos antes de publicar.`);
	process.exit(1);
}
console.log(`✔ Texto sin defectos mecánicos (${archivos.length} archivo(s)).`);
