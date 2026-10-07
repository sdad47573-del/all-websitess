/**
 * Hubs de categoría del blog (`/blog/categoria/<slug>/`).
 *
 * La lista de categorías se DERIVA de BLOG_POSTS (fuente única): no hay un
 * registro aparte que mantener, así que publicar un artículo actualiza su
 * categoría sola, y en cuanto una categoría llega a HUB_MIN_POSTS guías estrena
 * página. Con 1-2 artículos la página sería un índice casi vacío —contenido
 * pobre y sin nada que no haga ya /blog/—, así que se espera a tener material.
 *
 * Lo que SÍ es curado (y por eso vive aquí, junto a la categoría) es el copy de
 * cada hub: title, description e intro. No está repartido en ROUTE_DEFAULTS para
 * que añadir una categoría sea una sola edición y no tres sitios que se olvidan.
 */
import { BLOG_POSTS, type BlogPost } from './BLOG_POSTS';

/** Guías mínimas para que una categoría tenga página propia. */
export const HUB_MIN_POSTS = 3;

export interface BlogCategoryHub {
	/** Nombre tal y como aparece en BLOG_POSTS (etiqueta visible). */
	name: string;
	/** Slug de la URL, sin acentos ni mayúsculas. */
	slug: string;
	href: string;
	title: string;
	description: string;
	intro: string;
	/** Artículos de la categoría, en el orden de BLOG_POSTS (más reciente primero). */
	posts: BlogPost[];
}

/** Normaliza el nombre de la categoría a slug de URL: "Accidentes de tráfico" → "accidentes-de-trafico". */
export const categorySlug = (name: string): string =>
	name
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

/**
 * Copy curado de las categorías con volumen suficiente para tener hub. Si una
 * categoría llega a HUB_MIN_POSTS y no está aquí, se queda SIN página (y se
 * lista como texto): así una categoría nueva no publica una página a medias.
 */
const HUB_COPY: Record<string, { title: string; description: string; intro: string }> = {
	'Seguridad Social': {
		title: `Pensiones, jubilación e incapacidad: guías`,
		description:
			'Guías sobre pensiones y jubilación, incapacidad permanente, complementos y prestaciones: requisitos, plazos y cómo reclamar ante el INSS.',
		intro:
			'Pensiones y jubilación, incapacidad permanente, complementos familiares y prestaciones: qué exige la ley, cuándo se solicita cada una y qué hacer cuando la resolución es denegatoria.',
	},
	'Derecho Laboral': {
		title: `Despidos, jornada y prevención de riesgos: guías`,
		description:
			'Guías laborales: despidos e indemnizaciones, jornada y registro horario, accidentes de trabajo, prevención de riesgos y salarios, con los plazos reales.',
		intro:
			'Despido, jornada y registro horario, accidentes de trabajo, prevención de riesgos y salarios: los plazos que no se pueden perder, qué documentar desde el primer día y cómo se reclama cada pretensión.',
	},
	'Derecho de Familia': {
		title: `Divorcios, custodia y pensión de alimentos: guías`,
		description:
			'Guías de familia: divorcio de mutuo acuerdo y contencioso, custodia compartida, pensión de alimentos y régimen de visitas, con plazos y costes.',
		intro:
			'Divorcio, custodia, pensión de alimentos y régimen de visitas: cómo valora el juez cada medida, qué documentación se aporta y en qué orden se deciden los procedimientos.',
	},
	'Derecho Civil': {
		title: `Alquiler, contratos y deudas: guías de Derecho Civil`,
		description:
			'Guías de Derecho Civil: alquiler y derechos del inquilino, zonas tensionadas, desahucios, revisión de contratos y reclamación de deudas.',
		intro:
			'Contratos y arrendamientos, desahucios, negociación previa obligatoria (MASC) y reclamaciones de cantidad: qué conviene revisar antes de firmar, qué ocurre cuando la otra parte incumple y por qué vía se reclama.',
	},
	Herencias: {
		title: `Herencias y sucesiones: guías, plazos e impuestos`,
		description:
			'Guías de herencias: quién hereda sin testamento, reparto entre hermanos, testamento con validez legal e impuesto de sucesiones en Andalucía.',
		intro:
			'Quién hereda, en qué proporción y con qué impuestos: sucesión intestada, testamento, partición entre herederos y fiscalidad de la herencia en Andalucía.',
	},
	'Accidentes de tráfico': {
		title: `Indemnización por accidente de tráfico: guías y baremo`,
		description:
			'Guías para reclamar la indemnización por accidente de tráfico: baremo de lesiones 2026, días impeditivos y secuelas, y los errores que bajan la oferta.',
		intro:
			'Cómo se calcula una indemnización, qué baremo se aplica y qué hay que hacer en las primeras horas y días tras el siniestro para no perder derechos.',
	},
	Empresas: {
		title: `Empresas y autónomos: guías mercantiles y fiscales`,
		description:
			'Guías para empresas y autónomos: constituir una sociedad, facturación electrónica y Verifactu, y responsabilidad de los administradores de una SL.',
		intro:
			'Constituir una sociedad, cumplir con la facturación electrónica y evitar responder con el patrimonio personal: las decisiones que se toman al empezar y se pagan años después.',
	},
	// Categoría fruto de la fusión de 'Consumo' + 'Derecho bancario' (una sola
	// guía): revolving, cláusulas suelo e IRPH son reclamaciones al banco, y el
	// consumidor es el mismo. Formaba dos hubs de 3 y 1 guías.
	'Consumo y banca': {
		title: `Garantías y reclamaciones bancarias: guías de consumo`,
		description:
			'Guías de consumo y banca: garantías y desistimiento, tarjetas revolving con intereses usurarios, cláusulas suelo, IRPH y gastos hipotecarios.',
		intro:
			'Garantías, desistimiento, intereses usurarios, cláusulas suelo o IRPH: reclamaciones frente a comercios y bancos, con los plazos y la vía adecuada para cada una.',
	},
	// Fusión de 'Derecho de seguros' + 'Seguros agrarios': comparten problemática
	// real (art. 20 LCS, peritaje contradictorio, infraseguro).
	Seguros: {
		title: `Agroseguros y seguro de hogar: cómo reclamar`,
		description:
			'Guías para reclamar a la aseguradora: seguro de cultivos y Agroseguro (pedrisco, helada, infraseguro) y seguro de hogar (daños por agua, robo o incendio).',
		intro:
			'Qué cubre cada póliza, cómo se comunica el siniestro, qué es el peritaje contradictorio y con qué intereses responde la aseguradora cuando se retrasa.',
	},
	Extranjería: {
		title: `Nacionalidad, residencia y renovaciones: guías`,
		description:
			'Guías de extranjería: nacionalidad española por residencia y examen CCSE, renovaciones del TIE, prórroga de estancia y denegaciones.',
		intro:
			'Residencia y nacionalidad, renovaciones de tarjeta y prórrogas de estancia: qué plazos protegen tu situación, qué se justifica en cada renovación y qué recursos caben cuando el expediente se deniega o se queda sin respuesta.',
	},
	'Derecho Penal': {
		title: `Detenciones, denuncias falsas y condenas: guías`,
		description:
			'Guías de derecho penal: derechos del detenido, defensa frente a denuncias falsas y cómo funcionan la multa penal y la suspensión de condenas.',
		intro:
			'La detención y sus derechos, la defensa frente a denuncias falsas y la ejecución de las condenas — multas por cuotas diarias, suspensiones y sus condiciones: qué cabe pedir y qué se pierde si se incumple.',
	},
	'Recursos administrativos': {
		title: `Recursos y silencio administrativo: guías`,
		description:
			'Guías para pleitear con la Administración: cómo recurrir un acto, el silencio administrativo y la responsabilidad patrimonial.',
		intro:
			'Recursos contra actos y sanciones, silencio administrativo positivo y negativo, y responsabilidad patrimonial de la Administración: qué plazos corren, qué se acredita y en qué orden se mueve cada expediente.',
	},
	Urbanismo: {
		title: `Licencias, suelo rústico y disciplina urbanística: guías`,
		description:
			'Guías de urbanismo en Andalucía: licencia de obra menor, declaración responsable, prescripción de obras y suelo rústico en Córdoba.',
		intro:
			'Licencias y declaraciones responsables, obras sin título y sus plazos de prescripción, vivienda vinculada a la explotación y segregaciones en suelo rústico: qué admite el LISTA y el planeamiento, qué relojes corren y cómo se defiende cada expediente.',
	},
	'Violencia de género': {
		title: `Denuncia, orden de protección y recursos: guías`,
		description:
			'Guías para víctimas de violencia de género: cómo poner la denuncia, la orden de protección, la asistencia jurídica gratuita y el 016.',
		intro:
			'Denunciar, pedir la orden de protección, asegurar a los hijos y la vivienda y acceder a la asistencia jurídica gratuita: qué pasos existen, en qué orden se dan y con qué recursos públicos cuentas.',
	},
};

const postsByCategory = (() => {
	const byCategory = new Map<string, BlogPost[]>();
	for (const post of BLOG_POSTS) {
		const posts = byCategory.get(post.category);
		if (posts) posts.push(post);
		else byCategory.set(post.category, [post]);
	}
	return byCategory;
})();

export const BLOG_CATEGORY_HUBS: BlogCategoryHub[] = (() => {
	const hubs: BlogCategoryHub[] = [];
	for (const [name, posts] of postsByCategory) {
		const copy = HUB_COPY[name];
		if (posts.length < HUB_MIN_POSTS || !copy) continue;
		const slug = categorySlug(name);
		hubs.push({ name, slug, href: `/blog/categoria/${slug}/`, posts, ...copy });
	}
	// Más guías primero: el orden del índice de áreas también es una decisión SEO
	// (lo que más pesa, primero) y empata por nombre para que sea determinista.
	return hubs.sort((a, b) => b.posts.length - a.posts.length || a.name.localeCompare(b.name));
})();

/**
 * href del hub de una categoría, o `null` si todavía no tiene página propia.
 * Lo usan el índice del blog y RelatedServices para enlazar desde cada artículo.
 */
export const categoryHubHref = (category: string): string | null =>
	BLOG_CATEGORY_HUBS.find((hub) => hub.name === category)?.href ?? null;

/** Categorías sin página propia (1-2 guías): se listan como texto, sin enlace. */
export const BLOG_CATEGORIES_WITHOUT_HUB = [...postsByCategory.keys()].filter(
	(name) => (postsByCategory.get(name)?.length ?? 0) < HUB_MIN_POSTS,
);
