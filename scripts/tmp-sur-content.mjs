// Ediciones puntuales en los ficheros existentes de Sur Digital.
// Los ficheros son CRLF, así que cada reemplazo se aplica en memoria y el
// fichero se reescribe con CRLF consistente. Cada reemplazo se verifica: si
// alguno no casa, el script falla en vez de dejar el fichero a medias.
import { readFileSync, writeFileSync } from 'node:fs';

const BASE = 'apps/_sur-digital/';
const edits = [];

const apply = (rel, replace) => {
	edits.push({ rel, replace });
};

/* ------------------------------------------------------------------ *
 * src/data/sectors.ts — fusionar SECTORS_EXTRA
 * ------------------------------------------------------------------ */
apply('src/data/sectors.ts', (src) => {
	const decl = 'export const SECTORS: SectorPage[] = [';
	if (!src.includes(decl)) throw new Error('sectors.ts: no encuentro la declaración');
	src = src.replace(
		decl,
		'import { SECTORS_EXTRA } from "./sectors-extra";\n\nexport const SECTORS_BASE: SectorPage[] = [',
	);
	// El `];` final del array: se busca el ÚLTIMO del fichero (hay más arrays
	// anidados que también cierran con `];`).
	const cut = src.lastIndexOf('];');
	if (cut === -1) throw new Error('sectors.ts: no encuentro el cierre del array');
	return (
		src.slice(0, cut) +
		'];\n\nexport const SECTORS: SectorPage[] = [...SECTORS_BASE, ...SECTORS_EXTRA];' +
		src.slice(cut + 2)
	);
});

/* ------------------------------------------------------------------ *
 * src/data/data.astro — sumar FAQ_EXTRA al array de preguntas
 * ------------------------------------------------------------------ */
apply('src/data/data.astro', (src) => {
	const imp = 'import { SECTORS } from "./sectors";';
	if (!src.includes(imp)) throw new Error('data.astro: no encuentro el import de SECTORS');
	src = src.replace(imp, `${imp}\nimport { FAQ_EXTRA } from "./faq-extra";`);

	const faq = '  faq: [';
	if (!src.includes(faq)) throw new Error('data.astro: no encuentro DATA.faq');
	// Spread al principio: las nuevas van primero para que se vean sin abrir
	// las nueve de siempre.
	src = src.replace(faq, '  faq: [\n    ...FAQ_EXTRA,');
	return src;
});

/* ------------------------------------------------------------------ *
 * src/components/Glosario.astro — sumar TERMINOS_EXTRA
 * ------------------------------------------------------------------ */
apply('src/components/Glosario.astro', (src) => {
	const first = '// Glosario "en cristiano": las palabras que se usan al vender una web,';
	if (!src.includes(first)) throw new Error('Glosario.astro: no encuentro el comentario inicial');
	src = src.replace(first, `import { TERMINOS_EXTRA } from "../data/glosario";\n\n${first}`);

	const cut = src.lastIndexOf('];');
	if (cut === -1) throw new Error('Glosario.astro: no encuentro el cierre del array');
	return src.slice(0, cut) + '  ...TERMINOS_EXTRA,\n];' + src.slice(cut + 2);
});

/* ------------------------------------------------------------------ *
 * src/pages/web-para-[sector].astro — guías relacionadas
 * ------------------------------------------------------------------ */
apply('src/pages/web-para-[sector].astro', (src) => {
	const imp = 'import { pageTitle } from "../lib/blog";';
	if (!src.includes(imp)) throw new Error('sector page: no encuentro el import de pageTitle');
	src = src.replace(imp, `${imp}\nimport { getCollection } from "astro:content";`);

	const props = 'const { sector } = Astro.props;';
	if (!src.includes(props)) throw new Error('sector page: no encuentro Astro.props');
	src = src.replace(
		props,
		`${props}

// Guías de otros sectores para reforzar el enlazado interno del cluster: cada
// landing empuja a tres artículos y todos empujan de vuelta a /especialidades/.
const relatedSectorPosts = (
  await getCollection("blog", ({ data }) => !data.draft && data.category === "Sectores")
)
  .filter((p) => \`/blog/\${p.id}/\` !== sector.blogPost)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 3);`,
	);

	const main = '  </main>';
	if (!src.includes(main)) throw new Error('sector page: no encuentro </main>');
	src = src.replace(
		main,
		`  <!-- Más guías: enlazado interno entre las landings por sector y el blog -->
    {
      relatedSectorPosts.length > 0 && (
        <section class="container mx-auto px-6 max-w-3xl mb-16" data-reveal>
          <h2 class="text-2xl md:text-3xl font-bold text-base-content mb-6 text-center">
            Más guías para negocios como el tuyo
          </h2>
          <ul data-reveal-group class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSectorPosts.map((p) => (
              <li class="card bg-base-100 shadow-md border border-base-300">
                <a href={\`/blog/\${p.id}/\`} class="card-body p-6 gap-2">
                  <span class="badge badge-sm badge-secondary badge-outline font-bold">
                    {p.data.category}
                  </span>
                  <h3 class="card-title text-base leading-snug">{p.data.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )
    }

${main}`,
	);
	return src;
});

/* ------------------------------------------------------------------ *
 * src/pages/index.astro — secciones nuevas en la home
 * ------------------------------------------------------------------ */
apply('src/pages/index.astro', (src) => {
	const imp = 'import LatestPosts from "../components/LatestPosts.astro";';
	if (!src.includes(imp)) throw new Error('index.astro: no encuentro el import de LatestPosts');
	src = src.replace(
		imp,
		`${imp}\nimport Extras from "../components/Extras.astro";\nimport Tecnologia from "../components/Tecnologia.astro";\nimport Medicion from "../components/Medicion.astro";`,
	);

	const pricing = '    <PricingLink />';
	if (!src.includes(pricing)) throw new Error('index.astro: no encuentro PricingLink');
	src = src.replace(pricing, `${pricing}\n    <Extras />`);

	const deliverables = '    <Deliverables />';
	if (!src.includes(deliverables)) throw new Error('index.astro: no encuentro Deliverables');
	src = src.replace(deliverables, `${deliverables}\n    <Tecnologia />\n    <Medicion />`);
	return src;
});

/* ------------------------------------------------------------------ */

let changed = 0;
for (const { rel, replace } of edits) {
	const path = BASE + rel;
	const before = readFileSync(path, 'utf8');
	const after = replace(before);
	if (after === before) throw new Error(`${rel}: el reemplazo no cambió nada`);
	// CRLF consistente: los bloques nuevos se escriben con \n y se normalizan.
	writeFileSync(path, after.replace(/\r?\n/g, '\r\n'));
	changed += 1;
	console.log(`ok  ${rel}`);
}
console.log(`\n${changed} ficheros actualizados.`);
