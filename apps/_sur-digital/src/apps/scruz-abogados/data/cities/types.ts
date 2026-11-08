/**
 * Tipos de las landings de ciudad.
 *
 * Cada plaza vive en su propio archivo dentro de `src/data/cities/`, y este
 * archivo solo agrega. El motivo es práctico además de aesthetic: un array
 * gigante obliga a reescribir una región enorme para añadir una entrada, y
 * cualquier error de edición afecta a las demás. Con un archivo por plaza, una
 * escritura nueva no puede tocar el contenido de otra ciudad.
 *
 * Estructura compartida, texto propio: lo que se repite entre plazas es el
 * esqueleto de la página (`abogados-en-[city].astro`), no lo que se ha escrito
 * para cada una. `scripts/check-city-similarity.mjs` mide el Jaccard del texto
 * propio y falla por encima de 0,75.
 *
 * Los datos judiciales están verificados contra el reparto de partidos
 * judiciales de Andalucía tras la Ley Orgánica 1/2025. No escribir aquí un
 * órgano que no se haya comprobado.
 */

export interface CitySection {
	title: string;
	content: string;
	points?: string[];
}

export interface CityLink {
	label: string;
	href: string;
	description: string;
}

export interface CityLanding {
	city: string;
	slug: string;
	province: string;
	area: string;
	/** Órgano de primera instancia que sirve a la plaza. Verificado. */
	tribunal: string;
	/** Municipios que cuelgan de ese mismo órgano. */
	municipios: string;
	/** Despacho desde el que se atiende de verdad. */
	office: 'malaga' | 'lucena';
	/** Distancia y tiempo reales por carretera. */
	travel: string;
	/** Sectores económicos reales: de dónde salen los casos. */
	sectors: string;
	/** Materias que más se acumulan en consulta. */
	matters: string;
	/** Páginas hermanas, para repartir enlaces y evitar huérfanas. */
	links: CityLink[];
	title: string;
	description: string;
	keywords: string;
	eyebrow: string;
	headline: string;
	intro: string;
	highlights: string[];
	sections: CitySection[];
	faqs: Array<{ question: string; answer: string }>;
}
