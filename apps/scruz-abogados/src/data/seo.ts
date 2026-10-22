/**
 * Datos SEO centralizados — NAP (Name, Address, Phone), identidades sociales,
 * áreas servidas, franjas horarias, emails y constructores de Schema.org.
 *
 * Toda la información procede de fuentes verificadas del despacho:
 * - src/data/UBICACIONES.ts        → oficinas reales (Málaga + Lucena)
 * - src/pages/aviso-legal.astro     → NIF, fiscal name, dirección postal
 * - src/pages/politica-de-privacidad.astro → datos del responsable
 *
 * Mantener este archivo como SINGLE SOURCE OF TRUTH para SEO local.
 */

// Imagen social dedicada 1200x630 (generada desde 9.webp con sharp): las
// tarjetas de WhatsApp/Twitter/Facebook recortan y degradan imágenes más
// pequeñas; el anterior default (794x530) salía recortado en WhatsApp.
import defaultOgImage from '@assets/OG-DEFAULT-1200x630.webp';
import logoImg from '@assets/Recurso-2@0.5x.png';
import { SHOWN_REVIEWS } from './REVIEWS';
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_LOCALE } from './site';

export { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_LOCALE };

// ─────────────────────────────────────────────────────────────────────────
// Identidad del titular (NAP canónico)
// ─────────────────────────────────────────────────────────────────────────
export const NAP = {
	legalName: 'Sergio Cruz Chacón',
	brandName: SITE_NAME,
	taxId: '52489740Z',
	email: 'info@scruzabogados.es',
	phoneMobile: '+34 666 329 155',
	phoneMobileRaw: '+34666329155',
	phoneLandline: '+34 957 118 195',
	address: {
		streetAddress: 'Calle El Agua, 19, 1º Izq.',
		addressLocality: 'Lucena',
		addressRegion: 'Córdoba',
		postalCode: '14900',
		addressCountry: 'ES',
	},
	geo: {
		latitude: 37.4075406,
		longitude: -4.4874247,
	},
	foundingDate: '2005',
	priceRange: '€€',
} as const;

// ─────────────────────────────────────────────────────────────────────────
// Oficinas reales (deben coincidir con src/data/UBICACIONES.ts)
// ─────────────────────────────────────────────────────────────────────────
export const OFFICES = [
	{
		city: 'Málaga',
		region: 'Málaga, Andalucía',
		streetAddress: 'Av. de Gregorio Prieto, 27, Teatinos-Universidad',
		postalCode: '29190',
		geo: { latitude: 36.7157171, longitude: -4.4655941 },
		isMain: false,
	},
	{
		city: 'Lucena',
		region: 'Córdoba, Andalucía',
		streetAddress: 'Calle El Agua, 19, 1º Izq.',
		postalCode: '14900',
		geo: { latitude: 37.4075406, longitude: -4.4874247 },
		isMain: true,
	},
] as const;

// ─────────────────────────────────────────────────────────────────────────
// Perfiles sociales (sameAs para Schema.org)
// ─────────────────────────────────────────────────────────────────────────
// Solo los perfiles que el despacho mantiene de verdad. Facebook e Instagram
// existen pero están sin actividad (Instagram: 3 publicaciones), así que
// declararlos como identidad oficial del despacho restaba credibilidad al
// schema en vez de sumar. Si se retoman, reañadirlos aquí y en Topbar1/Footer3.
export const SOCIAL_PROFILES = [
	'https://www.linkedin.com/in/sergio-cruz-chac%C3%B3n-75ba7a26',
	// Fichas de directorio que rankean en top 1-3 de "abogado X lucena" —
	// consolidan la entidad local (Google asocia el NAP con la misma persona).
	'https://www.elabogado.com/abogados/sergio-cruz-chacon/',
	'https://www.melendos.es/perfil-profesional/t4jiaa618t/sergio-cruz-chacon',
] as const;

// ─────────────────────────────────────────────────────────────────────────
// Horarios semanales (formato schema.org OpeningHoursSpecification)
// ─────────────────────────────────────────────────────────────────────────
export const OPENING_HOURS = [
	{ dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
	{ dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
	{ dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
	{ dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
	{ dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
] as const;

export const AREA_SERVED = [
	{ '@type': 'City', name: 'Lucena' },
	{ '@type': 'City', name: 'Córdoba' },
	{ '@type': 'City', name: 'Málaga' },
	{ '@type': 'City', name: 'Granada' },
	{ '@type': 'AdministrativeArea', name: 'Andalucía' },
	{ '@type': 'Country', name: 'España' },
];

// ─────────────────────────────────────────────────────────────────────────
// Imágenes sociales — OG/Twitter square + landscape
// ─────────────────────────────────────────────────────────────────────────
// Importar el asset evita hardcodear el hash generado por Astro, que cambia en cada build.
export const OG_IMAGE_DEFAULT = defaultOgImage.src;
export const OG_IMAGE_WIDTH = defaultOgImage.width;
export const OG_IMAGE_HEIGHT = defaultOgImage.height;
export const OG_IMAGE_ALT =
	'Scruz Abogados – Despacho jurídico en Lucena, Córdoba y Málaga';

// ─────────────────────────────────────────────────────────────────────────
// Logo de marca — NO es la imagen social
// ─────────────────────────────────────────────────────────────────────────
// `logo` e `image` cumplen funciones distintas en Schema.org: Google usa `logo`
// para el panel de conocimiento y `image` para el contenido. Antes ambos
// apuntaban a la foto del hero, así que el sitio declaraba una foto como su
// logotipo. Es el mismo asset que usa el sitio (`src/data/data.ts`) para que
// Google vea exactamente la marca que ve el usuario.
// Nota: Google recomienda un logo cuadrado de ≥112x112 para el panel; este
// wordmark es 213x76, así que conviene exportar una versión cuadrada si el
// despacho quiere que el panel de conocimiento lo muestre.
// Ruta relativa del asset; se absolutiza con absUrl() dentro de buildBaseGraph
// (aquí aún no está inicializada: es una const declarada más abajo en el módulo).
export const LOGO_PATH = logoImg.src;
export const LOGO_WIDTH = logoImg.width;
export const LOGO_HEIGHT = logoImg.height;

export const AUTHOR_NAME = 'Sergio Cruz Chacón';
export const DEVELOPER_NAME = 'Jose Aguilar';
export const DEVELOPER_URL = 'https://www.linkedin.com/in/jose-antonio-aguilar-granados/';

// ─────────────────────────────────────────────────────────────────────────
// IDs canónicos de entidades (@id) — evita repetir `${SITE_URL}#...` en 15 sitios
// ─────────────────────────────────────────────────────────────────────────
export const ORG_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;
export const PERSON_ID = `${SITE_URL}#sergio-cruz-chacon`;
export const OFFICE_MALAGA_ID = `${SITE_URL}#office-malaga`;

// ─────────────────────────────────────────────────────────────────────────
// Canonical helpers — single source para normalizar rutas → URL absoluta
// ─────────────────────────────────────────────────────────────────────────
export const normalizePath = (pathname: string): string => {
	if (!pathname || pathname === '/') return '/';
	return pathname.endsWith('/') ? pathname : `${pathname.replace(/\/+$/, '')}/`;
};
export const canonicalFor = (pathname: string): string => `${SITE_URL}${normalizePath(pathname)}`;
export const absUrl = (path: string): string =>
	path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;

// ─────────────────────────────────────────────────────────────────────────
// Convierte un objeto en JSON-LD listo para inyectar
// ─────────────────────────────────────────────────────────────────────────
export const toJsonLd = (data: Record<string, unknown> | Record<string, unknown>[]) =>
	JSON.stringify(data).replace(/</g, '\\u003c');

// ─────────────────────────────────────────────────────────────────────────
// Reseñas (alimentan LegalService.review)
// ─────────────────────────────────────────────────────────────────────────
// El `aggregateRating` se declaró aquí hasta sep 2026 y se ha retirado: Google
// ignora las estrellas auto-declaradas en LocalService/LocalBusiness (su
// política de "self-serving reviews" solo admite las que vienen de la ficha de
// Google Business), así que no rendía nada en el SERP. Con una única reseña
// publicada, además, el bloque solo daba una señal de baja confianza.
//
// Lo que sí se mantiene es el marcado `review` de las reseñas REALES y
// visibles, que es honesto y válido: el contenido del JSON-LD coincide con lo
// que la página pinta (GoogleReviews.astro) y no se inventa nada.
//
// La media y el total se calculan desde src/data/REVIEWS.ts (fuente única
// compartida con las tarjetas visibles de la portada), de modo que el schema no
// puede desincronizarse de lo que la web muestra. Si en algún momento la ficha
// de Google Business llega a las 10+ reseñas, el aggregateRating se puede
// declarar sobre `Organization` (no sobre el LocalService) sin riesgo de
// penalización.

// Solo se marcan las reseñas que la página muestra (SHOWN_REVIEWS): el contenido
// del JSON-LD tiene que ser visible para el usuario.
export const REVIEWS = SHOWN_REVIEWS.map(({ author, rating, text, date }) => ({
	'@type': 'Review',
	author: { '@type': 'Person', name: author },
	reviewBody: text,
	reviewRating: { '@type': 'Rating', ratingValue: rating, bestRating: 5 },
	...(date ? { datePublished: date } : {}),
}));

// ─────────────────────────────────────────────────────────────────────────
// Persona individual (letrado titular) — mejora Knowledge Panel
// ─────────────────────────────────────────────────────────────────────────
export const PERSON = {
	'@type': 'Person',
	'@id': PERSON_ID,
	name: NAP.legalName,
	jobTitle: 'Abogado',
	// Perfil propio como URL principal de la entidad; LinkedIn y los directorios
	// quedan en sameAs. Google usa `memberOf` y `knowsAbout` para asociar al
	// letrado con su colegio y sus materias (señal de experiencia en YMYL legal).
	description:
		'Abogado colegiado en el Ilustre Colegio de Abogados de Lucena y titular de Scruz Abogados, con más de 20 años de experiencia en derecho civil, familia, sucesiones, penal, laboral y mercantil.',
	url: `${SITE_URL}/blog/sergio-cruz-chacon-abogado/`,
	// `image` debe ser absoluta en JSON-LD: `OG_IMAGE_DEFAULT` es la ruta emitida
	// por Astro (/_astro/...), así que se resuelve contra SITE_URL.
	image: absUrl(OG_IMAGE_DEFAULT),
	worksFor: { '@id': ORG_ID },
	memberOf: {
		'@type': 'Organization',
		name: 'Ilustre Colegio de Abogados de Lucena',
	},
	knowsAbout: [
		'Derecho civil',
		'Derecho de familia',
		'Herencias y sucesiones',
		'Derecho penal',
		'Derecho laboral',
		'Derecho mercantil',
		'Derecho administrativo',
		'Extranjería',
		'Seguridad Social',
	],
	sameAs: [...SOCIAL_PROFILES],
	knowsLanguage: ['es-ES', 'en'],
} as const;

// ─────────────────────────────────────────────────────────────────────────
// Schema @graph base: LegalService + WebSite + WebPage
// LegalService es el tipo específico del despacho y ya pertenece a la jerarquía LocalBusiness.
// ─────────────────────────────────────────────────────────────────────────
export interface OfferCatalogEntry {
	name: string;
	description: string;
	url: string;
	serviceType?: string;
}

export const buildBaseGraph = (
	canonical: string,
	ogImage: string,
	pageTitle: string,
	pageDescription: string,
	offerCatalog?: OfferCatalogEntry[],
) => {
	const legalService: Record<string, unknown> = {
		'@type': 'LegalService',
		'@id': ORG_ID,
		name: NAP.legalName,
		alternateName: SITE_NAME,
		url: `${SITE_URL}/`,
		logo: {
			'@type': 'ImageObject',
			url: absUrl(LOGO_PATH),
			width: LOGO_WIDTH,
			height: LOGO_HEIGHT,
		},
		image: ogImage,
		description:
			'Despacho jurídico con más de 20 años de experiencia. Especialistas en Derecho Civil, Penal, Laboral, Familia y Mercantil en Lucena, Córdoba y Málaga.',
		telephone: NAP.phoneMobile,
		email: NAP.email,
		priceRange: NAP.priceRange,
		foundingDate: NAP.foundingDate,
		sameAs: [...SOCIAL_PROFILES],
		areaServed: AREA_SERVED,
		knowsLanguage: ['es-ES', 'en'],
		// Solo `review` (dato real y visible), sin `aggregateRating`: ver el bloque
		// de comentarios sobre REVIEWS. Sin reseñas no se declara nada, porque un
		// review vacío tampoco es válido para Google.
		...(SHOWN_REVIEWS.length > 0 ? { review: REVIEWS } : {}),
		address: {
			'@type': 'PostalAddress',
			...NAP.address,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: NAP.geo.latitude,
			longitude: NAP.geo.longitude,
		},
		openingHoursSpecification: OPENING_HOURS.map((h) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: h.dayOfWeek,
			opens: h.opens,
			closes: h.closes,
		})),
		// El copy de la home promete atención "las 24 horas durante los 7 días"
		// mientras openingHoursSpecification solo declara la oficina (L-V 9-18).
		// Inflar el horario del despacho sería falso (a las 3 de la mañana no hay
		// oficina abierta), así que se declara la disponibilidad real del teléfono
		// de urgencias con ContactPoint.hoursAvailable: es lo que el sitio promete
		// y es coherente con el schema.
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: NAP.phoneMobile,
				contactType: 'Urgencias 24 horas',
				areaServed: 'ES',
				availableLanguage: ['es', 'en'],
				hoursAvailable: {
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					],
					opens: '00:00',
					closes: '23:59',
				},
			},
			{
				'@type': 'ContactPoint',
				telephone: NAP.phoneLandline,
				contactType: 'Oficina',
				areaServed: 'ES',
				availableLanguage: ['es', 'en'],
				hoursAvailable: OPENING_HOURS.map((h) => ({
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: h.dayOfWeek,
					opens: h.opens,
					closes: h.closes,
				})),
			},
		],
		founder: { '@id': PERSON_ID },
		department: { '@id': OFFICE_MALAGA_ID },
	};

	// Catálogo de servicios (refuerza la relevancia tópica de la home para
	// las queries "abogado X lucena" documentadas en Search Console).
	if (offerCatalog && offerCatalog.length > 0) {
		legalService.hasOfferCatalog = {
			'@type': 'OfferCatalog',
			name: 'Servicios jurídicos en Lucena, Córdoba y Málaga',
			itemListElement: offerCatalog.map((entry) => ({
				'@type': 'Service',
				name: entry.name,
				description: entry.description,
				url: absUrl(entry.url),
				serviceType: entry.serviceType ?? 'LegalService',
				provider: { '@id': ORG_ID },
				areaServed: AREA_SERVED.filter((a) => a['@type'] === 'City'),
			})),
		};
	}

	const malagaOffice = OFFICES.find((office) => office.city === 'Málaga');

	return {
		'@context': 'https://schema.org',
		'@graph': [
			legalService,
			{
				'@type': 'WebSite',
				'@id': WEBSITE_ID,
				url: `${SITE_URL}/`,
				name: SITE_NAME,
				inLanguage: SITE_LOCALE,
				publisher: { '@id': ORG_ID },
				// Sitelinks searchbox: requiere una página de búsqueda interna real.
				potentialAction: {
					'@type': 'SearchAction',
					target: {
						'@type': 'EntryPoint',
						urlTemplate: `${SITE_URL}/buscar/?q={search_term_string}`,
					},
					'query-input': 'required name=search_term_string',
				},
			},
			PERSON,
			// Segunda oficina (Málaga) como LegalService hijo — Google puede
			// vincular fichas multi-oficina en el Knowledge Panel.
			...(malagaOffice
				? [
						{
							'@type': 'LegalService',
							'@id': OFFICE_MALAGA_ID,
							name: `${SITE_NAME} Málaga`,
							url: `${SITE_URL}/ubicaciones/`,
							telephone: NAP.phoneMobile,
							email: NAP.email,
							parentOrganization: { '@id': ORG_ID },
							address: {
								'@type': 'PostalAddress',
								streetAddress: malagaOffice.streetAddress,
								addressLocality: 'Málaga',
								addressRegion: 'Málaga, Andalucía',
								postalCode: malagaOffice.postalCode,
								addressCountry: 'ES',
							},
							geo: {
								'@type': 'GeoCoordinates',
								latitude: malagaOffice.geo.latitude,
								longitude: malagaOffice.geo.longitude,
							},
							areaServed: [{ '@type': 'City', name: 'Málaga' }],
						},
					]
				: []),
			{
				'@type': 'WebPage',
				'@id': `${canonical}#webpage`,
				url: canonical,
				name: pageTitle,
				description: pageDescription,
				isPartOf: { '@id': WEBSITE_ID },
				about: { '@id': ORG_ID },
				inLanguage: SITE_LOCALE,
				primaryImageOfPage: { '@type': 'ImageObject', url: ogImage },
			},
		],
	};
};

// ─────────────────────────────────────────────────────────────────────────
// Schema para FAQPage (consume src/data/FAQ.ts)
// ─────────────────────────────────────────────────────────────────────────
export interface FAQQuestionInput {
	title: string;
	answer: string;
}

export const buildFAQPage = (
	url: string,
	title: string,
	categories: { title: string; questions: FAQQuestionInput[] }[],
) => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${url}#faq`,
	url,
	name: title,
	mainEntity: categories.flatMap((cat) =>
		cat.questions.map((q) => ({
			'@type': 'Question',
			name: q.title,
			acceptedAnswer: {
				'@type': 'Answer',
				text: q.answer,
			},
		})),
	),
});

// ─────────────────────────────────────────────────────────────────────────
// Schema BreadcrumbList a partir de items [{name, url}]
// ─────────────────────────────────────────────────────────────────────────
export const buildBreadcrumb = (
	items: { name: string; url: string }[],
) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	// Caller should pass absolute URLs (absUrl). Not re-encoded here to avoid double prefix.
	itemListElement: items.map((it, idx) => ({
		'@type': 'ListItem',
		position: idx + 1,
		name: it.name,
		item: it.url,
	})),
});

// ─────────────────────────────────────────────────────────────────────────
// Schema Service (una página de servicio específico)
// ─────────────────────────────────────────────────────────────────────────
export const buildService = (service: {
	url: string;
	name: string;
	description: string;
	serviceType: string;
	areaServed?: string[];
}) => ({
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': `${service.url}#service`,
	url: service.url,
	name: service.name,
	description: service.description,
	serviceType: service.serviceType,
	provider: { '@id': ORG_ID },
	areaServed: (service.areaServed ?? ['Lucena', 'Córdoba', 'Málaga']).map(
		(name) => ({ '@type': 'City', name }),
	),
	offers: {
		'@type': 'Offer',
		availability: 'https://schema.org/InStock',
		priceCurrency: 'EUR',
		description: 'Consulta orientativa gratuita',
	},
});

// ─────────────────────────────────────────────────────────────────────────
// Defaults de SEO por ruta (usado por CustomLayout cuando la página no
// define title/description explícitos)
// ─────────────────────────────────────────────────────────────────────────
export const ROUTE_DEFAULTS: Record<
	string,
	{ title: string; description: string; keywords: string }
> = {
	// La home es la URL que Google elige para las consultas de cabecera
	// (`abogado` 5,5 · `abogado civil` 3,5 · `abogado testamentos lucena` 1,71 ·
	// `sergio abogado` 6,25), no las landings de servicio. Por eso su title tiene que
	// llevar los términos de esas consultas: hasta sep 2026 ponía el nombre completo
	// en lugar de "Herencias", así que en `abogado testamentos lucena` aparecía en
	// el puesto 1,71 mostrando un title sin la palabra "testamentos" y sin un solo
	// clic. La marca se queda abreviada ("Scruz"), que es lo primero que Google
	// recorta por la derecha: el site name ya se ve en el SERP y en la description.
	'/': {
		title: `Abogado en Lucena | Civil, Herencias y Testamentos | Scruz`,
		description: `¿Buscas abogado en Lucena? Primera consulta gratuita y urgencias 24 h. Herencias y testamentos, divorcios, civil, penal y laboral: 666 329 155.`,
		keywords:
			'abogado, abogado Lucena, abogado en Lucena, abogados en Lucena, abogado Córdoba, abogado Málaga, abogado civil Lucena, abogado herencias Lucena, abogado testamentos Lucena, abogado sucesiones Lucena, abogado divorcios Lucena, abogado familia Lucena, abogado penalista Lucena, abogado contratos Lucena, abogado consumo Lucena, abogado 24 horas, consulta gratuita, despacho jurídico Lucena, derecho civil, derecho de familia, derecho penal, derecho laboral',
	},
	'/derecho-civil/': {
		title: `Abogado Civil en Lucena | Contratos y Responsabilidad Civil`,
		description: `Contratos, responsabilidad civil, consumo y seguros: reclamamos lo que te deben en Lucena y Córdoba. Consulta gratuita hoy: 666 329 155.`,
		keywords:
			'abogado civil Lucena, abogado responsabilidad civil Lucena, abogado consumo Lucena, abogado seguros en Lucena, abogado urbanismo Lucena, abogado contratos Lucena, abogado testamentos Lucena, reclamación de cantidad, derecho civil Córdoba',
	},
	'/buscar/': {
		title: `Buscar | ${SITE_NAME} - Encuentra tu servicio jurídico`,
		description: `Busca entre todos los servicios jurídicos del despacho Scruz Abogados en Lucena, Córdoba y Málaga: divorcios, herencias, despidos, accidentes de tráfico y más.`,
		keywords: 'buscar abogado, servicios jurídicos, Scruz Abogados',
	},
	'/servicios/': {
		title: `Asesoría Jurídica en Lucena, Córdoba y Málaga | ${SITE_NAME}`,
		description: `Asesoría jurídica general en Lucena, Córdoba y Málaga: civil, familia, herencias, mercantil, penal y laboral. Consulta gratuita: 666 329 155.`,
		keywords:
			'servicios jurídicos Lucena, abogado civil Córdoba, derecho familia Málaga, abogado mercantil, abogado penal, abogado laboral, Scruz Abogados',
	},
	'/guarda-custodia/': {
		title: `Abogado de Guarda y Custodia en Lucena | ${SITE_NAME}`,
		description: `Abogado de guarda y custodia en Lucena: medidas paterno-filiales, custodia de hijos, régimen de visitas y pensión de alimentos. Consulta gratuita: 666 329 155.`,
		keywords:
			'abogado guarda y custodia Lucena, medidas paterno filiales Córdoba, custodia compartida Málaga, régimen de visitas, pensión de alimentos, abogado reclamación de pensión Lucena',
	},
	'/recursos-administrativos/': {
		title: `Abogado de Recursos Administrativos en Lucena | ${SITE_NAME}`,
		description: `¿Multa o acto administrativo injusto? Los plazos son de 14 días y 1 mes. Revisamos tu caso hoy: abogado de recursos administrativos en Lucena: 666 329 155.`,
		keywords:
			'abogado recursos administrativos Lucena, procedimiento sancionador Córdoba, recurso alzada Málaga, recurso reposición, responsabilidad patrimonial administración, contencioso administrativo',
	},
	'/urbanismo/': {
		title: `Abogado de Urbanismo en Lucena y Córdoba | ${SITE_NAME}`,
		description: `Abogado de urbanismo en Lucena y Córdoba: licencias de obra y ocupación, disciplina urbanística, sanciones, suelo rústico y órdenes de demolición. Consulta gratuita: 666 329 155.`,
		keywords:
			'abogado urbanismo Lucena, abogado urbanismo Córdoba, licencia de obra Lucena, disciplina urbanística Andalucía, orden de demolición, sanción urbanística, suelo rústico Lucena, segregación de fincas, LISTA Ley 7/2021, Ayuntamiento de Lucena',
	},
	'/seguros-agrarios/': {
		title: `Abogado de Seguros Agrarios y Agroseguro en Lucena`,
		description: `¿Peritaje bajo o indemnización denegada? Reclamamos tu indemnización íntegra por pedrisco, helada o sequía. Lucena y Córdoba: 666 329 155.`,
		keywords:
			'abogado seguros agrarios Lucena, reclamación seguros agrarios Córdoba, seguro agrario combinado, peritaje contradictorio, indemnización siniestro agrario, artículo 20 LCS',
	},
	'/empresas/': {
		title: `Abogado de Empresas y Autónomos en Lucena | Cuota Mensual`,
		description: `Departamento jurídico externo para empresas y autónomos en Lucena, Córdoba y Málaga: laboral, contratos, datos e impagos, con cuota mensual o precio cerrado. 666 329 155.`,
		keywords:
			'abogado empresas Lucena, abogado mercantil Lucena, asesoría empresas autónomos Córdoba, abogado autónomos Lucena, cuota mensual asesoría empresas, constitución sociedades Málaga, abogado sociedades Lucena, departamento jurídico empresas',
	},
	// Ficha hija de /empresas/ para la consulta "constitución de sociedades / crear una SL":
	// title, description y keywords propios para no canibalizar al hub.
	'/empresas/constitucion-sociedades/': {
		title: `Constitución de Sociedades en Lucena | ${SITE_NAME}`,
		description: `Constituimos tu SL, SLU o sociedad agraria en Lucena, Córdoba y Málaga: escritura, estatutos, pactos de socios, NIF y alta censal. Presupuesto cerrado: 666 329 155.`,
		keywords:
			'constitución de sociedades Lucena, crear una SL Córdoba, cuánto cuesta constituir una sociedad, abogado constitución empresas Lucena, pactos de socios, SL o autónomo, sociedad limitada online Andalucía, estatutos tipos Ley 14/2013',
	},
	// Fichas hijas de /empresas/. Cada una responde a una consulta distinta, así
	// que llevan title, description y keywords propios para no canibalizar al hub.
	'/empresas/derecho-laboral/': {
		title: `Abogado Laboral para Empresas en Lucena | ${SITE_NAME}`,
		description: `Asesoría laboral para empresas en Lucena, Córdoba y Málaga: despidos, ERTE, contratos, convenios, inspección de trabajo y reclamaciones de cantidad. Consulta gratuita: 666 329 155.`,
		keywords:
			'abogado laboral empresas Lucena, asesoría laboral Córdoba, despido procedente empresa, ERTE, inspección de trabajo, reclamación de cantidad, convenio colectivo, registro horario',
	},
	'/empresas/proteccion-de-datos/': {
		title: `Protección de Datos y RGPD para Empresas | ${SITE_NAME}`,
		description: `Adaptación al RGPD y a la LOPDGDD para empresas en Lucena, Córdoba y Málaga: registro de actividades, contratos con encargados, brechas de seguridad y sanción de la AEPD. Consulta gratuita: 666 329 155.`,
		keywords:
			'rgpd empresas Lucena, protección de datos Córdoba, AEPD sanción, registro de actividades de tratamiento, encargado del tratamiento, delegado de protección de datos, política de cookies',
	},
	'/empresas/contratos-mercantiles/': {
		title: `Contratos Mercantiles para Empresas en Lucena | ${SITE_NAME}`,
		description: `Redacción y revisión de contratos mercantiles en Lucena, Córdoba y Málaga: compraventa, distribución, prestación de servicios, cláusula penal y reclamación del incumplimiento. Consulta gratuita: 666 329 155.`,
		keywords:
			'contratos mercantiles Lucena, redacción de contratos Córdoba, incumplimiento de contrato empresa, cláusula penal, contrato de distribución, condiciones generales, contratos entre empresas',
	},
	'/ubicaciones/': {
		title: `Nuestras Oficinas en Lucena y Málaga | ${SITE_NAME}`,
		description: `Dos oficinas en Andalucía: Lucena (Córdoba) y Málaga. Atención presencial y online, con despachos bajo demanda en toda España.`,
		keywords:
			'oficinas abogados Málaga, despacho Lucena, abogados Córdoba, dirección Scruz Abogados',
	},
	'/trayectoria/': {
		title: `Nuestra Trayectoria | 20+ Años Defendiendo tus Derechos | ${SITE_NAME}`,
		description: `Más de dos décadas de experiencia jurídica en Andalucía. Conoce la trayectoria del despacho Scruz Abogados y nuestros valores: integridad, cercanía, excelencia y compromiso.`,
		keywords:
			'trayectoria Scruz Abogados, experiencia despacho, valores abogados, 20 años experiencia, Lucena, Córdoba, Málaga',
	},
	'/quienes-somos/': {
		title: `Sobre Nosotros | ${SITE_NAME} - Más de 20 Años de Experiencia Legal`,
		description: `Conoce a ${SITE_NAME}: más de 20 años ofreciendo asesoramiento legal integral en Lucena, Córdoba y Málaga. Equipo multidisciplinar especializado en todas las áreas del Derecho.`,
		keywords:
			'sobre Scruz Abogados, equipo abogados multidisciplinar, experiencia legal, despacho Lucena, despacho Córdoba, despacho Málaga',
	},
	'/faq/': {
		title: `Preguntas Frecuentes | ${SITE_NAME} - Respuestas a tus Dudas Legales`,
		description: `Resuelve tus dudas legales con nuestras preguntas frecuentes: honorarios, plazos, procedimientos, divorcios, herencias, despidos y más. Consulta gratuita.`,
		keywords:
			'preguntas frecuentes abogados, FAQ legal, dudas legales, honorarios abogado, plazos divorcio, despido improcedente',
	},
	'/blog/': {
		title: `Blog Jurídico | ${SITE_NAME} - Guías y consejos legales`,
		description: `Guías y artículos jurídicos del despacho Scruz Abogados: divorcios, herencias, accidentes de tráfico y más, explicados para Lucena, Córdoba, Málaga y toda Andalucía.`,
		keywords:
			'blog abogados Lucena, guías legales Córdoba, divorcio mutuo acuerdo, herencia sin testamento, indemnización accidente tráfico',
	},
	'/blog/divorcio-mutuo-acuerdo/': {
		title: `Divorcio de mutuo acuerdo en Córdoba | ${SITE_NAME}`,
		description: `Divorcio de mutuo acuerdo en Córdoba: convenio regulador, papeles, plazos reales y precio cerrado. Primera consulta gratuita: 666 329 155.`,
		keywords: 'divorcio mutuo acuerdo, divorcio express Córdoba, convenio regulador, abogado divorcios Lucena',
	},
	'/blog/herencia-sin-testamento/': {
		title: `Herencia sin testamento en Córdoba: quién hereda | ${SITE_NAME}`,
		description: `Guía de la sucesión intestada: orden de herederos, documentos, declaración de herederos abintestato, impuesto de sucesiones en Andalucía y plazos.`,
		keywords: 'herencia sin testamento, sucesión intestada, declaración de herederos, impuesto sucesiones Andalucía',
	},
	'/blog/indemnizacion-accidente-trafico/': {
		title: `Cómo reclamar la indemnización por accidente de tráfico | ${SITE_NAME}`,
		description: `Guía para reclamar la indemnización por accidente de tráfico en 2026: baremo de lesiones, plazos de la aseguradora y consejos antes de firmar.`,
		keywords: 'reclamar indemnización accidente de tráfico, baremo 2026, abogado accidentes de tráfico, reclamación a la aseguradora',
	},
	'/blog/procedimiento-sancionador/': {
		title: `Procedimiento sancionador: fases, plazos y cómo defenderse`,
		description: `Las 3 fases del expediente sancionador, plazos de caducidad y garantías: cómo recurrir tu multa a tiempo. Consulta gratuita: 666 329 155.`,
		keywords:
			'procedimiento sancionador fases, expediente sancionador plazos, caducidad procedimiento sancionador, cómo defenderse de una multa, alegaciones expediente sancionador, proporcionalidad sanción administrativa, procedimiento sancionador Lucena, abogado recursos administrativos Córdoba',
	},
	'/blog/liquidacion-gananciales-paso-a-paso/': {
		title: `Liquidación de gananciales: guía paso a paso | ${SITE_NAME}`,
		description: `Cómo se liquida la sociedad de gananciales: qué es privativo y qué ganancial, el inventario, la valoración de la casa y las deudas, la disolución por divorcio o muerte, los impuestos y el contencioso cuando no hay acuerdo.`,
		keywords:
			'liquidación de gananciales, qué es ganancial y qué privativo, cómo se liquida gananciales divorcio, disolución gananciales por muerte, impuestos liquidación gananciales, adjudicación vivienda divorcio, reembolso privativo cuenta común, abogado gananciales Lucena Córdoba',
	},
	'/blog/medidas-paterno-filiales/': {
		title: `Medidas paterno-filiales: procedimiento sin divorcio`,
		description: `Guía del procedimiento de medidas paterno-filiales: cuándo cabe sin divorcio, la intervención del Ministerio Fiscal, guarda y custodia, alimentos y visitas para hijos no matrimoniales o parejas no casadas.`,
		keywords:
			'medidas paterno filiales, medidas paternofiliales procedimiento, guarda y custodia sin estar casados, medidas hijos no matrimoniales, Ministerio Fiscal medidas hijos, medidas paterno filiales Lucena, abogado familia Lucena Córdoba',
	},
	'/blog/reclamacion-pension-seguridad-social/': {
		title: `Reclamar pensión a la Seguridad Social: plazos y atrasos`,
		description: `La reclamación previa al INSS, el silencio negativo a los 3 meses, las prestaciones reclamables y los atrasos que se pierden al esperar. Consulta gratuita.`,
		keywords:
			'reclamación pensión seguridad social, INSS no responde silencio administrativo, cómo reclamar pensión jubilación, pensión viudedad reclamación, prestaciones seguridad social denegadas, atrasos pensión seguridad social, reclamación previa INSS, abogado pensiones Lucena Córdoba',
	},
	'/blog/multas-penales-suspension-condenas/': {
		title: `Multa penal: cuánto se paga y cómo suspender la condena`,
		description: `Cuánto cuesta una multa penal: cuotas diarias, qué pasa si no pagas y cuándo el juez suspende la condena. Consulta gratuita: 666 329 155.`,
		keywords:
			'multa penal cuotas diarias, cómo se calcula multa penal España, pagar multa penal plazos fraccionar, suspensión de la pena requisitos, sustitución pena multa trabajo comunitario, impago multa penal consecuencias, multa penal vs administrativa, abogado penalista Lucena Córdoba',
	},
	'/blog/prorroga-estancia-y-renovacion/': {
		title: `Renovación del TIE: plazos y prórroga de estancia`,
		description: `Renovación del TIE y prórroga de estancia: cuándo presentar (60 días antes), el silencio negativo y cómo no perder la residencia. Consulta gratuita.`,
		keywords:
			'prórroga de estancia 90 días España, renovación tarjeta TIE plazo, renovar residencia cuándo presentar, silencio administrativo extranjería, renovación residencia justificación económica, autorización de retorno, tarjeta roja renovación, abogado extranjería Lucena Córdoba',
	},
	'/blog/silencio-administrativo-positivo-negativo/': {
		title: `Silencio administrativo positivo y negativo: qué hacer`,
		description: `Cuándo el silencio es positivo y cuándo negativo, los plazos de la Administración, cómo acreditarlo y qué hacer después: ejecutar o recurrir. Consulta gratuita.`,
		keywords:
			'silencio administrativo positivo, silencio administrativo negativo, plazo resolver administración 3 meses, certificado silencio administrativo, silencio positivo licencia, cómo reclamar si la administración no contesta, abogado recursos administrativos Lucena Córdoba',
	},
	'/blog/resolucion-contrato-incumplimiento/': {
		title: `Resolución de contrato por incumplimiento: guía y plazos`,
		description: `Cómo resolver un contrato por incumplimiento: el art. 1124 CC, el requerimiento fehaciente, la resolución extrajudicial y sus riesgos, la restitución de lo recibido y los daños del art. 1101. Lucena y Córdoba.`,
		keywords:
			'resolución de contrato incumplimiento, art 1124 código civil, resolución contrato art 1101, requerimiento fehaciente resolución, incumplimiento esencial contrato, contrato resuelto qué devolver, arras penitenciales resolución, abogado contratos Lucena Córdoba',
	},
	'/blog/reclamacion-responsabilidad-patrimonial/': {
		title: `Reclamación de responsabilidad patrimonial a la Administración`,
		description: `Cómo reclamar a la Administración los daños que causa: requisitos del daño indemnizable, plazo de 1 año, la reclamación previa con silencio a los 6 meses y cómo se cuantifica la indemnización. Lucena y Córdoba.`,
		keywords:
			'reclamación responsabilidad patrimonial Administración, indemnización daño Ayuntamiento plazo, Ley 40/2015 responsabilidad patrimonial, caída vía pública reclamación ayuntamiento, daño anormal funcionamiento servicio público, silencio administrativo reclamación previa 6 meses, responsabilidad patrimonial Lucena, abogado recursos administrativos Córdoba',
	},
	'/blog/danos-y-perjuicios-reclamacion/': {
		title: `Daños y perjuicios: cómo reclamar una indemnización civil`,
		description: `Cómo reclamar daños y perjuicios: los requisitos del art. 1902 CC, quién responde realmente, la prueba del daño y la culpa, la prescripción de 1 y 5 años, la pericial y las vías de reclamación. Lucena y Córdoba.`,
		keywords:
			'reclamar daños y perjuicios, responsabilidad civil art 1902, indemnización por daños culpa o negligencia, prescripción reclamación daños 1 año 5 años, pericial daños reclamación, daños por obras al vecino, infiltraciones responsabilidad, abogado responsabilidad civil Lucena Córdoba',
	},
	'/blog/mutualidades-alternativas-reta/': {
		title: `Mutualidades alternativas al RETA: la reforma de la Ley 2/2026`,
		description: `Mutualidades de previsión social alternativas al RETA: quién puede salir, qué exige la reforma de la Ley 2/2026, las prestaciones equivalentes y la comparación con el RETA de rendimientos reales en 2027.`,
		keywords:
			'mutualidades alternativas al RETA, salir del RETA mutualidad colegio profesional, Ley 2/2026 mutualidades, prestaciones equivalentes mutualidad, cuotas RETA 2027, mutualidad de previsión social autónomos, exención RETA abogados arquitectos, abogado empresas Lucena',
	},
	'/blog/legalizacion-obras/': {
		title: `Legalización de obras paso a paso: la licencia de legalización`,
		description: `Cómo legalizar una obra hecha sin licencia: qué obras son legalizables, la licencia de legalización, la sanción que la acompaña, el régimen de fuera de ordenación y qué pasa si no es compatible con el planeamiento.`,
		keywords:
			'legalizar obra sin licencia, licencia de legalización Andalucía, regularizar obra terminada, legalización fuera de ordenación, sanción legalización obra, plazo licencia de legalización, abogado urbanismo Lucena Córdoba',
	},
	'/blog/okupas-ley-y-bulos/': {
		title: `Okupas: qué se puede hacer de verdad y en cuánto tiempo`,
		description: `Ley y bulos sobre okupación: allanamiento o usurpación, qué cabe en las primeras 48 horas, los plazos reales y cómo recuperar tu vivienda. Consulta gratuita.`,
		keywords:
			'okupas qué hacer legalmente, allanamiento de morada vs usurpación, recuperar piso okupado plazo, desahucio usurpación 2027, denuncia okupación primeros 48 horas, acaballera reclamación vivienda, abogado okupas Lucena Córdoba',
	},
	'/blog/bajas-laborales-2026-2027/': {
		title: `Baja laboral 2026-2027: cuánto se cobra y cuánto dura`,
		description: `Guía de la baja por incapacidad temporal: cobro por días (60/75 %), plazo máximo de 365+180 días, la reserva del puesto de trabajo, cómo impugnar el alta médica en 4 días y qué pasa si te despiden estando de baja.`,
		keywords:
			'baja laboral cuánto se cobra, incapacidad temporal plazos, impugnar alta médica mutua, reserva puesto de trabajo baja, baja por contingencia común 75, fin de baja impugnación 4 días, despido estando de baja, laboralista Lucena Córdoba',
	},
	'/blog/obra-sin-licencia-prescripcion/': {
		title: `Obra sin licencia: cuándo prescribe y cuándo toca demoler`,
		description: `¿Te han notificado un expediente por una obra sin licencia? Prescripción del restablecimiento (6 años), ejecución de la demolición (5 más), legalización, sanciones y defensa del expediente en Lucena y Córdoba.`,
		keywords:
			'obra sin licencia prescripción, plazo demolición obra ilegal, legalizar obra sin licencia Andalucía, orden de demolición plazo, restablecimiento legalidad urbanística LISTA, disciplina urbanística Lucena, expediente urbanístico defensa, abogado urbanismo Córdoba',
	},
	'/blog/suelo-rustico-cordoba/': {
		title: `Construir en suelo rústico en Córdoba: qué se puede y qué no`,
		description: `Suelo no urbanizable en Córdoba: viviendas vinculadas a la explotación, naves agrícolas, balsas y cerramientos, y las segregaciones prohibidas. Consulta gratuita.`,
		keywords:
			'construir en suelo rústico Córdoba, suelo no urbanizable Lucena, vivienda vinculada a explotación agraria, nave agrícola autorización Junta Andalucía, balsa riego autorización, segregación finca rústica mínima, construir en olivar, abogado suelo rústico Córdoba',
	},
	'/blog/traspaso-de-bar-paso-a-paso/': {
		title: `Traspaso de un bar: contrato, licencias e impuestos`,
		description: `Valoración, due diligence, consentimiento del casero, subrogación laboral y cambio de licencia: el traspaso paso a paso en Andalucía. Consulta gratuita.`,
		keywords:
			'traspaso de bar, cómo traspasar un bar, contrato de traspaso de bar, compraventa de negocio hostelería, subrogación traspaso empresa trabajadores, cambio titularidad licencia actividad, impuestos traspaso bar Andalucía, abogado traspasos Lucena Córdoba',
	},
	'/blog/alquilar-local-comercial-contrato/': {
		title: `Alquilar un local comercial: contrato y riesgos`,
		description: `Guía para alquilar un local comercial en Lucena y Córdoba: cláusulas del contrato de arrendamiento de negocio, obras, garantías, qué pasa si cierras y cómo afecta la venta del local al inquilino.`,
		keywords:
			'contrato alquiler local comercial, arrendamiento local de negocio, cláusulas contrato local comercial, obras en local alquilado quien paga, subrogación arrendamiento local comprador, renta actualización IPC local comercial, fianza local comercial, abogado arrendamientos Lucena Córdoba',
	},
	'/blog/pactos-de-socios-sl/': {
		title: `Pacto de socios de una SL: qué cláusulas no pueden faltar`,
		description: `Qué debe regular un pacto de socios antes de firmar: decisiones, dividendos, salida y valoración de las participaciones, y qué pasa si no existe el pacto.`,
		keywords:
			'pacto de socios SL, cláusulas pacto de socios, pacto de socios ejemplo, salida de socio sociedad limitada, venta participaciones socios, derecho adquisición preferente, valoración de participaciones, abogado societario Lucena',
	},
	'/blog/impagos-entre-empresas/': {
		title: `Impagos entre empresas: cómo reclamar facturas`,
		description: `Cómo reclamar facturas impagadas entre empresas: prueba y burofax, intereses y costes de la Ley 3/2004, procedimiento monitorio paso a paso y qué hacer si el deudor entra en concurso.`,
		keywords:
			'impago facturas empresas, reclamar factura impagada, procedimiento monitorio empresas, Ley 3/2004 morosidad intereses, burofax reclamación deuda, plazo reclamación factura, concurso de acreedores acreedor, abogado impagos Lucena Córdoba',
	},
	'/blog/cuanto-cuesta-constituir-sl-2026/': {
		title: `Cuánto cuesta constituir una SL en 2026 | ${SITE_NAME}`,
		description: `Cuánto cuesta constituir una SL en 2026: notaría, Registro, vía telemática y capital desde 1 €. Presupuesto cerrado: 666 329 155.`,
		keywords:
			'cuánto cuesta constituir una SL, coste constituir sociedad limitada 2026, crear una sociedad limitada Lucena, notaría constitución SL Córdoba, capital social SL 1 euro, estatutos tipo Ley Crea y Crece, constitución telemática SL',
	},
	'/blog/seguro-cultivos-agroseguro/': {
		title: `Agroseguro: qué cubre el seguro de cultivos en 2026`,
		description: `Agroseguro, el seguro agrario combinado: qué cubre en olivar, cereal o viña, franquicias, plazos y cómo reclamar si pagan de menos. Consulta gratuita.`,
		keywords:
			'agroseguro, seguro de cultivos, seguro agrario combinado, agroseguro qué cubre, pedir siniestro agroseguro, tasación pericial contradictoria, indemnización pedrisco helada, sequía olivar seguro, abogado seguros agrarios Córdoba Lucena',
	},
	'/blog/reclamar-agroseguro/': {
		title: `Agroseguro: cómo reclamar por pedrisco, helada o sequía`,
		description: `Pedrisco, helada o sequía: plazos para comunicar a Agroseguro, peritaje contradictorio y qué hacer si pagan de menos. Consulta gratuita: 666 329 155.`,
		keywords:
			'reclamar a Agroseguro, pedrisco olivar Lucena, helada cosecha, seguro agrario combinado, peritaje contradictorio, artículo 20 LCS, abogado seguros agrarios',
	},
	'/blog/recuperar-coche-embargado/': {
		title: `Coche embargado: cómo recuperarlo antes de su venta`,
		description: `Te han embargado el coche: qué deuda lo causa, cómo levantar el embargo, qué hacer si es de un familiar y cómo frenar la venta. Consulta gratuita.`,
		keywords:
			'coche embargado cómo recuperarlo, levantar embargo vehículo, embargo coche venta forzada, embargo coche de un familiar, abogado deudas Lucena Córdoba',
	},
	'/blog/reclamaciones-consumo-lucena/': {
		title: `Cláusulas suelo y tarjetas revolving en Lucena: cómo reclamar | ${SITE_NAME}`,
		description: `Guía de reclamaciones de consumo en Lucena y Córdoba: cláusulas suelo, tarjetas revolving con intereses usurarios, garantías y arbitraje de consumo.`,
		keywords:
			'cláusula suelo Lucena, tarjeta revolving intereses usurarios, reclamación consumo Córdoba, arbitraje de consumo, garantía producto, abogado consumidores Andalucía',
	},
	'/blog/testamento-online-cordoba/': {
		title: `Testamento en Córdoba: tipos, notaría y precio (2026)`,
		description: `Testamento abierto, cerrado, ológrafo u online en Córdoba: qué exige cada uno, cuánto cuesta y por qué el mancomunado no cabe en Andalucía. Consulta gratuita.`,
		keywords:
			'tipos de testamento, testamento cerrado córdoba, testamento ológrafo, testamento abierto notarial, testamento mancomunado Andalucía, testamento online córdoba, notario para testamentos en córdoba, precio testamento córdoba, abogado testamentos Lucena',
	},
	'/blog/asistencia-violencia-genero/': {
		title: `Defensa de víctimas de violencia de género en Córdoba`,
		description: `Orden de protección en 72 horas, abogado de oficio gratuito, teléfono 016 y cada paso del proceso explicado para víctimas en Córdoba y Lucena.`,
		keywords:
			'asistencia legal mujeres maltratadas córdoba, orden de protección lucena, abogado violencia de género, asistencia jurídica gratuita víctimas, teléfono 016, recursos violencia género Andalucía',
	},
	'/blog/licencia-obra-menor-declaracion-responsable/': {
		title: `Licencia de obra menor o declaración responsable en Lucena`,
		description: `Qué obras se resuelven con declaración responsable y cuáles siguen necesitando licencia urbanística en Andalucía (LISTA): supuestos, documentación y qué pasa si te equivocas de vía.`,
		keywords:
			'licencia de obra menor Andalucía, declaración responsable obra, comunicación previa urbanística, LISTA Ley 7/2021, obras de escasa entidad constructiva, licencia de ocupación, abogado urbanismo Lucena',
	},
	'/blog/denuncia-violencia-genero/': {
		title: `Denunciar violencia de género: pasos, juez y qué pasa después`,
		description: `Cómo se denuncia (Guardia Civil, juzgado o 016), qué declaras ante el juez y qué medidas de protección se aprueban en 72 horas. Consulta gratuita.`,
		keywords:
			'denuncia violencia de género, cómo denunciar violencia machista, denuncia malos tratos Lucena, juicio rápido violencia de género, declaración víctima violencia de género, abogado violencia de género Córdoba',
	},
	'/blog/verifactu-facturacion-electronica/': {
		title: `Verifactu 2027: quién está obligado y cómo evitar multas`,
		description: `Verifactu será obligatorio el 1 de julio de 2027. Qué software necesitas, quién está exento, las sanciones de hasta 50.000 € y cómo prepararte a tiempo.`,
		keywords:
			'verifactu, verifactu 2027, facturación electrónica obligatoria autónomos, software facturación certificado, ley antifraude 11/2021, sanciones verifactu, factura electrónica pymes, abogado empresas Córdoba',
	},
	'/blog/sanidad-extranjeros-sin-residencia/': {
		title: `Sanidad para extranjeros sin residencia legal (RD 180/2026) | ${SITE_NAME}`,
		description: `Desde marzo de 2026 las personas sin residencia legal pueden acceder a la sanidad pública: declaración responsable, documentos alternativos al padrón, plazos y silencio positivo. Consulta gratuita.`,
		keywords:
			'asistencia sanitaria extranjeros sin residencia legal, tarjeta sanitaria sin papeles, RD 180/2026, derecho a la salud inmigrantes, sanidad pública universal, abogado extranjería Lucena',
	},
	'/blog/nueva-ley-prevencion-riesgos-laborales/': {
		title: `Nueva Ley de Prevención de Riesgos Laborales 2027 | ${SITE_NAME}`,
		description: `La reforma de la Ley 31/1995, en vigor el 2 de enero de 2027: umbrales del servicio propio, riesgos psicosociales obligatorios, clima, desconexión digital y formación con solvencia acreditada. Consulta gratuita.`,
		keywords:
			'nueva ley prevención riesgos laborales 2027, reforma ley PRL 31/1995, servicio prevención propio 300 trabajadores, riesgos psicosociales obligatorios, estrés térmico protocolo, desconexión digital ley, abogado laboralista Lucena',
	},
	'/blog/reforma-discapacidad-dependencia/': {
		title: `Reforma de discapacidad y dependencia 2026-2027 | ${SITE_NAME}`,
		description: `El Senado aprobó la mayor reforma social del siglo: Estado al 50% de financiación, discapacidad automática con la dependencia, atención temprana, teleasistencia y plazos a la mitad. Consulta gratuita.`,
		keywords:
			'reforma ley discapacidad dependencia 2026, discapacidad vs dependencia vs incapacidad permanente, reconocimiento automático 33% discapacidad, financiación estatal 50% dependencia, atención temprana derecho subjetivo, teleasistencia derecho subjetivo, abogado incapacidad Lucena',
	},
	'/blog/jornada-375-horas/': {
		title: `Jornada de 37,5 horas: estado real de la reforma | ${SITE_NAME}`,
		description: `La jornada de 37,5 horas NO está en vigor: el Congreso tumbó el proyecto en septiembre de 2025. Lo que sí puedes reclamar hoy: registro de jornada obligatorio, horas extra y despido nulo por represalia. Consulta gratuita.`,
		keywords:
			'jornada 37,5 horas España 2026, reducción jornada laboral rechazada Congreso, registro de jornada obligatorio, registro horario digital 2026, reclamar horas extra, despido por reclamar horas nulo, abogado laboralista Lucena',
	},
	'/blog/jubilacion-2027/': {
		title: `Tabla de jubilación 2027: edad por años cotizados`,
		description: `65 con 38,5 años cotizados; 67 sin ellos. Tabla 2027, anticipada, parcial y complemento por hijos. Consulta gratuita: 666 329 155.`,
		keywords:
			'tabla de jubilación por años cotizados, tabla edad jubilación 2027, jubilación 2027 edad 67 años, jubilación 65 años 38 años 6 meses cotizados, fin periodo transitorio pensiones 2027, jubilación anticipada 2027, complemento brecha de género jubilación, abogado seguridad social Lucena',
	},
	'/blog/transparencia-retributiva/': {
		title: `Transparencia retributiva 2026: cómo reclamar tu salario`,
		description: `Registro retributivo obligatorio y Directiva UE 2023/970: cómo pedir la información salarial de tu puesto, las bandas y qué hacer si tu empresa no cumple.`,
		keywords:
			'transparencia retributiva, registro retributivo obligatorio, directiva transparencia salarial 2026, derecho información salarial, brecha salarial, igualdad retributiva, abogado laboralista Lucena',
	},
	'/blog/novedades-pensiones-2027/': {
		title: `Subida de pensiones 2027: cuánto y desde cuándo`,
		description: `La subida de pensiones 2027, por IPC: 2,7 % en 2026 y cerca del 3,2 % en 2027, mínimas, brecha de género y qué revisar en tu incapacidad. Consulta gratuita.`,
		keywords:
			'novedades pensiones 2027, subida pensiones 2026, revalorización IPC, pensión incapacidad permanente, complemento brecha género, pensión mínima, abogado pensiones Lucena',
	},
	'/blog/zonas-tensionadas-alquiler/': {
		title: `Zonas tensionadas de alquiler: topes y subidas 2026`,
		description: `Andalucía no ha declarado ninguna zona tensionada, pero el IRAV sí topa tu subida anual. Cómo reclamar en Lucena y Córdoba. Consulta gratuita: 666 329 155.`,
		keywords:
			'zonas tensionadas alquiler, contención rentas alquiler, ley vivienda 12/2023, IRAV actualización renta, alquiler lucena, reducción IRPF arrendadores',
	},
	'/blog/masc-negociacion-obligatoria/': {
		title: `El MASC: la negociación previa obligatoria antes de demandar | ${SITE_NAME}`,
		description: `Desde 2025, intentar una negociación (MASC) es obligatorio antes de la mayoría de demandas civiles y mercantiles. Cómo acreditar el intento y qué pasa si no se hace. Consulta gratuita.`,
		keywords:
			'masc obligatorio, negociación previa obligatoria demanda, ley eficiencia procesal, requisito procedibilidad, conciliación previa juicio, abogado reclamaciones Lucena',
	},
	'/blog/novedades-laborales-2026/': {
		title: `Novedades laborales 2026: despido nulo, registro y permisos`,
		description: `Qué cambia en 2026: despido nulo si tu empresa recibe ayudas (RDL 7/2026), registro horario digital y permisos ampliados. Cómo reclamar si no cumplen.`,
		keywords:
			'novedades laborales 2026, despido nulo empresas con ayudas, real decreto ley 7/2026, registro de jornada digital, permisos retribuidos, abogado laboralista Lucena',
	},
	'/blog/reforma-ley-consumidores/': {
		title: `La reforma de la Ley de consumidores: más derechos al comprar | ${SITE_NAME}`,
		description: `La reforma del texto refundido de consumidores refuerza la información previa, el derecho de desistimiento (14 días, ampliable a 12 meses) y las garantías de 3 años. Consulta gratuita.`,
		keywords:
			'reforma ley consumidores, derechos consumidor 2026, derecho de desistimiento, información precontractual, garantía productos, abogado consumo Lucena',
	},
	'/blog/reclamacion-deudas-monitorio/': {
		title: `Reclamación de deudas y procedimiento monitorio | ${SITE_NAME}`,
		description: `Guía para reclamar deudas impagadas en Lucena y Córdoba: el burofax previo, el procedimiento monitorio paso a paso, la oposición del deudor y el embargo. Consulta gratuita.`,
		keywords:
			'reclamación de cantidad lucena, procedimiento monitorio, reclamar deuda impagada, burofax reclamación, embargo deudor, abogado cobro deudas Córdoba',
	},
	'/blog/desahucio-por-impago-lucena/': {
		title: `Desahucio por impago en Lucena: plazos y cómo defenderte | ${SITE_NAME}`,
		description: `Guía del desahucio por impago de alquiler en Lucena y Córdoba: plazos del juicio verbal, la enervación (pagar y evitarlo), el lanzamiento y cómo defenderte. Consulta gratuita.`,
		keywords:
			'desahucio por impago lucena, desahucio alquiler córdoba, enervación desahucio, juicio verbal desahucio plazos, lanzamiento inquilino, abogado arrendamientos Lucena',
	},
	'/blog/custodia-compartida-cordoba/': {
		title: `Custodia compartida en Córdoba: cuándo se concede`,
		description: `Custodia compartida en Córdoba y Lucena: los criterios que aplican los juzgados, el reparto de tiempo típico y cómo solicitarla. Consulta gratuita.`,
		keywords:
			'custodia compartida córdoba, custodia compartida cuándo se concede, juzgados familia córdoba, reparto tiempo custodia, pensión alimentos custodia compartida, abogado guarda custodia Lucena',
	},
	'/blog/incapacidad-permanente/': {
		title: `Incapacidad permanente: grados y cómo reclamarla`,
		description: `Los 4 grados de incapacidad en Córdoba y Lucena: requisitos, tribunal médico y cómo reclamar si el INSS la deniega. Consulta gratuita: 666 329 155.`,
		keywords:
			'incapacidad permanente grados, incapacidad total 55%, incapacidad absoluta, gran invalidez, solicitar incapacidad permanente, tribunal médico EVI, reclamar negativa INSS, abogado incapacidad Lucena',
	},
	'/blog/tarjetas-revolving-usura/': {
		title: `Tarjetas revolving y usura: cuándo reclamar | ${SITE_NAME}`,
		description: `Cómo reclamar tu tarjeta revolving por intereses usurarios: la Ley de Usura de 1908, la doctrina del Tribunal Supremo, cuánto puedes recuperar y cómo hacerlo. Consulta gratuita.`,
		keywords:
			'tarjeta revolving usura, intereses usurarios tarjeta, reclamar tarjeta revolving, Ley de Usura 1908, nulidad contrato revolving, abogado consumo Lucena',
	},
	'/blog/denuncias-falsas/': {
		title: `Abogados especialistas en denuncias falsas: defiéndete`,
		description: `Defensa ante una denuncia falsa en Lucena y Córdoba: derechos del investigado y querella por acusación falsa (art. 456 CP). Urgencias 24 h: 666 329 155.`,
		keywords:
			'abogados especialistas en denuncias falsas, denuncia falsa defensa, acusación y denuncia falsa art 456, cómo defenderte de una denuncia falsa, derechos del investigado, querella por denuncia falsa, abogado penalista Lucena',
	},
	'/blog/crear-empresa-andalucia/': {
		title: `Cuánto cuesta constituir una empresa en Andalucía`,
		description: `Autónomo o SL, los trámites en orden, los costes reales y los plazos en Lucena y Córdoba. Primera consulta gratuita: 666 329 155.`,
		keywords:
			'crear empresa andalucía, autónomo o SL, constituir sociedad limitada, pasos crear empresa lucena, coste constituir SL, abogado empresas Córdoba',
	},
	'/blog/clausula-suelo-irph/': {
		title: `Cláusula suelo e IRPH en Lucena y Córdoba: cómo reclamar | ${SITE_NAME}`,
		description: `Qué son la cláusula suelo y el IRPH, por qué la jurisprudencia los considera reclamables, cuánto puedes recuperar y cómo reclamar los gastos hipotecarios. Consulta gratuita.`,
		keywords:
			'cláusula suelo córdoba, reclamar cláusula suelo, IRPH nulidad, gastos hipotecarios devolución, abogado reclamaciones bancarias Lucena, hipoteca abusiva',
	},
	'/blog/herencias-entre-hermanos/': {
		title: `Herencias entre hermanos: cómo repartir sin conflictos`,
		description: `Reparto de herencia entre hermanos: la legítima, las donaciones en vida, el cuaderno particional y cuándo conviene la vía judicial. Consulta gratuita.`,
		keywords:
			'herencia entre hermanos, conflicto herencia hermanos, reparto herencia, legítima, tercio de mejora, colación donaciones, cuaderno particional, mediación familiar herencia, división judicial herencia, abogado herencias Lucena',
	},
	'/blog/baremo-lesiones-2026/': {
		title: `Baremo 2026: calcula tu indemnización por accidente`,
		description: `Cómo se calcula tu indemnización con el baremo 2026: días de baja, secuelas y lo que paga la aseguradora. Primera consulta gratuita: 666 329 155.`,
		keywords:
			'baremo lesiones 2026, calcular indemnización accidente de tráfico, baremo tráfico, indemnización secuelas, días impeditivos, reclamación aseguradora, abogado accidentes de tráfico Lucena',
	},
	'/blog/impuesto-sucesiones-andalucia/': {
		title: `Impuesto de sucesiones en Andalucía: bonificación del 99 %`,
		description: `Quién paga el 99 % bonificado, el plazo de 6 meses para no perderlo y las reducciones por vivienda habitual y empresa familiar. Guía con casos.`,
		keywords:
			'impuesto de sucesiones andalucía, bonificación 99% sucesiones, plazo impuesto sucesiones, reducción vivienda habitual herencia, empresa familiar reducción, modelo 650, abogado herencias Lucena',
	},
	'/blog/accidente-laboral-cordoba/': {
		title: `Accidente laboral en Córdoba: pasos y prestaciones | ${SITE_NAME}`,
		description: `Accidente laboral en Córdoba y Lucena: qué hacer en las primeras 24 horas, prestaciones de la mutua, recargo e indemnización. Urgencias: 666 329 155.`,
		keywords:
			'accidente laboral córdoba, accidente de trabajo, prestaciones mutua, recargo de prestaciones, enfermedad profesional, parte de accidente, abogado accidente laboral Lucena',
	},
	'/blog/despido-improcedente/': {
		title: `Despido improcedente en Lucena: derechos y plazos | ${SITE_NAME}`,
		description: `Guía del despido improcedente en Lucena y Córdoba: el plazo de 20 días hábiles, tipos de despido, indemnización, papeleta de conciliación y demanda. Consulta gratuita.`,
		keywords:
			'despido improcedente lucena, reclamar despido, plazo 20 días despido, indemnización despido, abogado laboralista Lucena, papeleta conciliación Córdoba',
	},
	'/blog/cuanto-cuesta-un-divorcio/': {
		title: `Cuánto cuesta un divorcio en Lucena | ${SITE_NAME}`,
		description: `Cuánto cuesta un divorcio en Lucena y Córdoba: honorarios de abogado y procurador, mutuo acuerdo vs contencioso y plazos reales. Presupuesto cerrado y consulta gratuita.`,
		keywords:
			'cuánto cuesta un divorcio en lucena, precio divorcio mutuo acuerdo, divorcio contencioso coste, abogado divorcios Lucena, convenio regulador Córdoba',
	},
	'/blog/contratos-lucena/': {
		title: `Contratos en Lucena: qué revisar antes de firmar | ${SITE_NAME}`,
		description: `Guía de contratos en Lucena y Córdoba: qué cláusulas revisar antes de firmar (compraventas, alquileres, servicios, mercantiles), cómo actuar ante un incumplimiento y plazos. Consulta gratuita.`,
		keywords:
			'abogado contratos lucena, revisión de contratos abogado, contrato compraventa cláusulas, incumplimiento de contrato, contratos mercantiles Córdoba, cláusulas abusivas contrato',
	},
	'/blog/pension-de-alimentos/': {
		title: `Pensión de alimentos: cuánto se paga y hasta cuándo`,
		description: `Cómo se calcula la pensión de alimentos de los hijos, hasta qué edad se paga, cómo se modifica y qué hacer si el otro progenitor deja de pagar. Consulta gratuita.`,
		keywords:
			'abogado reclamación de pensión lucena, pensión de alimentos hijos, impago pensión de alimentos, modificación pensión alimentos, cuánto pagar pensión hijos, abogado familia Córdoba',
	},
	'/blog/sergio-cruz-chacon-abogado/': {
		title: `Sergio Cruz Chacón: abogado en Lucena desde 2005`,
		description: `Más de 20 años defendiendo casos en Lucena, Córdoba y Málaga: civil, familia, laboral, penal y seguros. Consulta gratuita: 666 329 155.`,
		keywords:
			'sergio abogado, abogado sergio, sergio cruz abogado, abogado cruz, abogado sergio cruz chacon, abogado en lucena, despacho scruz abogados',
	},
	'/blog/reclamaciones-seguro-hogar/': {
		title: `Reclamar al seguro de hogar en Lucena y Córdoba | ${SITE_NAME}`,
		description: `Guía para reclamar a tu aseguradora de hogar en Lucena y Córdoba: daños por agua, incendio, robo o vicios ocultos, plazos de comunicación, peritaje e intereses del artículo 20 LCS.`,
		keywords:
			'reclamaciones seguro de hogar lucena, reclamar a la aseguradora hogar, peritaje daños vivienda, artículo 20 LCS seguro hogar, abogado seguros Córdoba, vicios ocultos vivienda',
	},
	'/blog/regimen-de-visitas/': {
		title: `Régimen de visitas en Lucena y Córdoba | ${SITE_NAME}`,
		description: `Guía del régimen de visitas en Lucena y Córdoba: qué dice la ley, cómo se fija, cómo se modifica y qué hacer si el otro progenitor incumple. Primera consulta gratuita.`,
		keywords:
			'régimen de visitas lucena, derecho de visitas hijos, abogado familia Lucena, modificación régimen de visitas, incumplimiento régimen visitas, custodia compartida Córdoba',
	},
	// Aracena (Huelva): unica landing de la provincia. Se creo en sep 2026 porque
	// `abogado en aracena` acumula 78 impresiones en la posicion 24,3 (GSC) sin
	// pagina que las attendiera. El title no promete oficina en Aracena porque no
	// la hay: el despacho esta en Lucena y Malaga, y la landing lo dice de frente.
	'/abogados-en-aracena/': {
		title: `Abogado en Aracena (Huelva) | Sierra de Aracena | Scruz`,
		description: `Abogado para clientes de Aracena y la Sierra de Aracena y Picos de Aroche. Sin oficina en Huelva: consulta por videollamada y análisis del juzgado que corresponde. 666 329 155.`,
		keywords:
			'abogado en Aracena, abogados en Aracena, abogado Aracena Huelva, Sierra de Aracena y Picos de Aroche, abogado Alájar, abogado Cortegana, abogado Aroche, abogado Almonaster la Real, abogado Higuera de la Sierra, abogado Encinasola, abogado Los Marines, partido judicial Aracena, Tribunal de Instancia de Aracena, abogado Huelva provincia',
	},
	// Landings de la Costa del Sol Occidental rehechas en sep 2026 con contenido
	// propio por plaza (tribunal verificado, municipios de su partido, distancia
	// real desde la oficina de Málaga). Ver `src/data/CITY_LANDINGS.ts`: los
	// textos viven alli, no aquí, para que no se puedan desincronizar.
	'/abogados-en-marbella/': {
		title: `Abogado en Marbella | Inmobiliaria, propiedad horizontal y NIE | Scruz`,
		description: `Abogados para clientes de Marbella y San Pedro de Alcántara: compraventas, comunidades de propietarios, NIE y laboral de hostelería. Oficina en Málaga, a 50 minutos.`,
		keywords: `abogado en Marbella, abogados en Marbella, abogado San Pedro de Alcántara, propiedad horizontal Marbella, abogado NIE Marbella`,
	},
	'/abogados-en-fuengirola/': {
		title: `Abogado en Fuengirola y Mijas | Laboral y propiedad horizontal | Scruz`,
		description: `Abogados para clientes de Fuengirola y Mijas: laboral de hostelería, comunidades de propietarios, NIE, familia y penal. Oficina de Málaga a 20 minutos. Primera consulta gratuita.`,
		keywords: `abogado en Fuengirola, abogados en Fuengirola, abogado en Mijas, Fuengirola laboral, propiedad horizontal Fuengirola, abogado NIE Fuengirola`,
	},
	'/abogados-en-torremolinos/': {
		title: `Abogado en Torremolinos | Propiedad horizontal y laboral | Scruz`,
		description: `Abogados para clientes de Torremolinos: propiedad horizontal, laboral de hostelería, NIE, familia y penal. A 10 minutos por la A-7 desde la oficina de Málaga. Consulta gratuita.`,
		keywords: `abogado en Torremolinos, abogados en Torremolinos, propiedad horizontal Torremolinos, comunidades de propietarios Torremolinos, abogado laboral Torremolinos`,
	},
	'/abogados-en-benalmadena/': {
		title: `Abogado en Benalmádena y Puerto Banús | Scruz`,
		description: `Abogados para clientes de Benalmádena y Puerto Banús: propiedad horizontal, arrendamientos, laboral, NIE y familia. A 15 minutos desde Málaga. Primera consulta gratuita.`,
		keywords: `abogado en Benalmádena, abogados en Benalmádena, abogado Puerto Banús, propiedad horizontal Benalmádena, alquiler Benalmádena, abogado NIE Benalmádena`,
	},
	'/abogados-en-estepona/': {
		title: `Abogado en Estepona | Inmobiliario, urbanismo y laboral agrario | Scruz`,
		description: `Abogados para clientes de Estepona, Casares y Manilva: compraventas, urbanismo, laboral agrario, familia y herencias. Oficina de Málaga. Primera consulta gratuita.`,
		keywords: `abogado en Estepona, abogados en Estepona, abogado Casares, abogado Manilva, urbanismo Estepona, laboral agrario Estepona, abogado NIE Estepona`,
	},
	'/que-juzgado-me-corresponde/': {
		title: `¿Qué juzgado me corresponde? | Partidos judiciales de Andalucía | Scruz`,
		description: `Busca tu municipio y comprueba a qué partido judicial pertenece y dónde se tramita tu caso, incluido el juicio social, que va a la capital de provincia. 416 municipios verificados.`,
		keywords: `qué juzgado me corresponde, partido judicial, qué juzgado me toca, búsqueda de partido judicial, buscar partido judicial Andalucía`,
	},
	'/calculadora-tasa-judicial/': {
		title: `Calculadora de tasa judicial | Scruz`,
		description: `Cuánto se paga de tasa judicial según el tipo de proceso, con la Ley 10/2012 y la sentencia del TC 140/2016 al lado. Las personas físicas están exentas: la cuota variable también se anuló.`,
		keywords: `tasa judicial, calculadora tasa judicial, cuánto paga la tasa judicial, personas físicas exentas tasa, modelos de pago, cuota fija tasa judicial, STC 140/2016`,
	},
	'/impuestos-herencia/': {
		title: `ITPF de una herencia: plazo y bonificación | Scruz`,
		description: `Cuándo hay que declarar el impuesto de sucesiones (seis meses), qué bonificación se pierde por presentar tarde y qué reducciones hay antes de calcular en Andalucía.`,
		keywords: `ITPF herencia, impuesto de sucesiones plazo, bonificación 20% ITPF, autoliquidación sucesiones, plazo declarar herencia, reducción ITPF vivienda habitual, impuesto hereditario`,
	},
	'/donde-atendemos/': {
		title: `Dónde atendemos y en qué materias | Scruz`,
		description: `Las plazas que cubrimos en Málaga, Córdoba, Cádiz, Granada, Jaén y Huelva, con las materias que se consultan en cada una, el despacho que las lleva y el tiempo real de desplazamiento.`,
		keywords: `abogados en Andalucía, cobertura de plazas, plaza jurídica, qué plazas atendemos, consulta por videollamada, donde atendemos abogados`,
	},
	'/reparto-herencia/': {
		title: `Reparto de herencia y legítima: cómo se calcula | Scruz`,
		description: `Cuánto es la legítima según haya hijos o no, cómo se reparte entre cónyuge e hijos, qué parte se puede dejar en testamento y qué límites tienen los nietos. Con el artículo del Código Civil en cada caso.`,
		keywords: `reparto de herencia, legítima, cálculo de legítima, heredar-testamento, parte disponible, repartir-herencia, codigo civil legítima`,
	},
	'/calculadora-plazos/': {
		title: `Calculadora de plazos legales | Scruz`,
		description: `Calcula la fecha de vencimiento de los plazos más habituales: recursos administrativos, herencias, laboral y prescripción. Cada plazo con su artículo y su fecha de inicio.`,
		keywords: `calculadora de plazos, plazos recursos administrativos, plazo recurso de reposición, plazo recurso contencioso, plazo aceptar herencia, prescripción laboral, plazos legales`,
	},
	'/partidos-judiciales/': {
		title: `Partidos judiciales: qué se tramita en cada uno | Scruz`,
		description: `Los 48 partidos judiciales de Málaga, Córdoba, Cádiz, Granada y Huelva con sus municipios, qué materia lleva cada uno, dónde va el juicio social y desde qué despacho se atiende cada plaza.`,
		keywords: `partidos judiciales, partidos judiciales Andalucía, partido judicial Málaga, partido judicial Córdoba, partido judicial Cádiz, partido judicial Granada, partido judicial Huelva, número de partido judicial`,
	},
	'/abogados-en-rute/': {
		title: `Abogado en Rute (Córdoba) | Sergio Cruz Chacón`,
		description: `Abogado en Rute (Córdoba): Sergio Cruz Chacón, con oficina en Lucena a 15 minutos, atiende en Rute con cita previa. Primera consulta gratuita: 666 329 155.`,
		keywords:
			'abogado en rute, abogados en rute córdoba, abogado partido judicial lucena, asesoría jurídica rute, despacho abogados subbética',
	},
	'/abogados-en-lucena/': {
		title: `Abogados en Lucena | Despacho Civil, Familia, Penal y Laboral`,
		description: `¿Buscas abogada o abogado en Lucena? Oficina en C. El Agua 19 y urgencias 24 h para particulares y empresas. Primera consulta gratuita: 666 329 155.`,
		keywords:
			'despacho de abogados en lucena, abogados en lucena, abogado en lucena, asesoría jurídica lucena, abogados lucena córdoba',
	},
	'/abogados-en-malaga/': {
		title: `Abogados en Málaga (Teatinos-Universidad) | ${SITE_NAME}`,
		description: `Abogados en Málaga, en Teatinos-Universidad: divorcios, accidentes, despidos, herencias, penal y empresas. Primera consulta gratuita y videollamada.`,
		keywords:
			'abogados en Málaga, abogado Teatinos, abogado cerca Universidad Málaga, despacho abogados Málaga, abogado Costa del Sol',
	},
	'/divorcios-separaciones/': {
		title: `Abogado de Divorcios en Lucena | Consulta Gratuita Hoy`,
		description: `Divorcio de mutuo acuerdo o contencioso, custodia y pensiones, con presupuesto cerrado desde la primera llamada. Abogado de familia en Lucena: 666 329 155.`,
		keywords:
			'abogado divorcios Lucena, divorcio Córdoba, separación Málaga, custodia hijos, pensión alimenticia, liquidación gananciales, mutuo acuerdo, contencioso',
	},
	'/liquidacion-gananciales/': {
		title: `Abogado de Liquidación de Gananciales en Lucena`,
		description: `Abogado de liquidación de gananciales en Lucena, Córdoba y Málaga: inventario, adjudicación de bienes y reparto tras el divorcio. Consulta gratuita: 666 329 155.`,
		keywords:
			'abogado liquidación de gananciales Lucena, liquidación de sociedad de gananciales, inventario ganancial, adjudicación de bienes divorcio, cuaderno particional, capitulaciones matrimoniales, abogado familia Córdoba, abogado divorcios Málaga',
	},
	'/herencias-testamentos/': {
		title: `Abogado de Testamentos y Herencias en Lucena`,
		description: `Herencias con o sin testamento, declaración de herederos e impuesto de sucesiones en Andalucía. Primera consulta gratuita: 666 329 155.`,
		keywords:
			'abogado herencias Lucena, testamento Córdoba, sucesiones Málaga, herencia intestada, aceptación herencia, impuesto sucesiones, declaración herederos',
	},
	'/testamentos-cordoba/': {
		title: `Abogado de Testamentos en Córdoba | Precio y Notaría`,
		description: `Haz tu testamento en Córdoba con abogado: revisamos legítimas y bienes, preparamos el borrador y te acompañamos a la notaría. Consulta gratuita.`,
		keywords:
			'abogado testamentos Córdoba, hacer testamento en Córdoba, precio testamento Córdoba, testamento notaría Córdoba, testamento ante notario Lucena, testamento cerrado Córdoba, legítima Andalucía, revisión testamento',
	},
	'/despidos/': {
		title: `Abogado Laboralista en Lucena | Despidos e Indemnizaciones`,
		description: `Abogado laboralista en Lucena, Córdoba y Málaga: despido improcedente, acoso laboral y reclamación de indemnización. Primera consulta gratuita: 666 329 155.`,
		keywords:
			'abogado despidos Lucena, despido improcedente Córdoba, indemnización despido Málaga, reclamación salarial, abogado laboralista',
	},
	'/indemnizaciones-trafico/': {
		title: `Abogado de Accidentes de Tráfico en Lucena | ${SITE_NAME}`,
		description: `Abogado de accidentes de tráfico en Lucena, Córdoba y Málaga. Reclamamos tu indemnización por lesiones, secuelas y daños. Consulta gratuita: 666 329 155.`,
		keywords:
			'indemnización accidente tráfico Málaga, abogado accidentes Córdoba, reclamación Lucena, baremo lesiones, daños materiales, lesiones permanentes',
	},
	'/accidente-laboral/': {
		title: `Abogado de Accidentes Laborales en Lucena | ${SITE_NAME}`,
		description: `Abogado de accidentes laborales en Lucena, Córdoba y Málaga: prestaciones de la mutua, recargo e indemnizaciones. Consulta gratuita: 666 329 155.`,
		keywords:
			'accidente laboral Lucena, abogado accidentes trabajo Córdoba, incapacidad Málaga, prestaciones mutua, responsabilidad empresarial',
	},
	'/derecho-penal/': {
		title: `Abogado Penalista Lucena: detenidos y urgencias 24 h`,
		description: `Detenciones, denuncias falsas y acusación particular. Si es urgente, te atendemos ahora: abogado penalista en Lucena. Teléfono 24 h: 666 329 155.`,
		keywords:
			'abogado penalista Lucena, defensa penal Córdoba, delitos Málaga, violencia género penal, abogado urgencias penales',
	},
	'/cobro-deudas-impagos/': {
		title: `Abogado de Cobro de Deudas e Impagos en Lucena`,
		description: `Abogado de cobro de deudas e impagos en Lucena, Córdoba y Málaga: reclamación de cantidad, procedimiento monitorio y ejecución. Consulta gratuita: 666 329 155.`,
		keywords:
			'cobro deudas Lucena, reclamación impagos Córdoba, monitorio Málaga, embargo ejecutivo, abogado deudas',
	},
	'/reclamaciones-bancarias/': {
		title: `Abogado de Reclamaciones Bancarias en Lucena | ${SITE_NAME}`,
		description: `Abogado de reclamaciones bancarias en Lucena, Córdoba y Málaga: cláusulas suelo, tarjetas revolving e hipotecas. Consulta gratuita: 666 329 155.`,
		keywords:
			'reclamación cláusulas suelo Lucena, hipoteca multidivisa Córdoba, tarjeta revolving Málaga, cláusulas abusivas, gastos hipotecarios',
	},
	'/consumo/': {
		title: `Abogado de Consumo en Lucena | ${SITE_NAME}`,
		description: `Abogado de consumo en Lucena, Córdoba y Málaga: cláusulas suelo, tarjetas revolving, garantías y arbitraje de consumo. Consulta gratuita: 666 329 155.`,
		keywords:
			'abogado consumo Lucena, reclamación consumo Córdoba, cláusula suelo, tarjeta revolving, garantía producto, arbitraje consumo Andalucía, abogado consumidores Málaga, publicidad engañosa, hoja de reclamaciones',
	},
	'/incapacidad-permanente/': {
		title: `Abogado de Incapacidad Permanente en Lucena | ${SITE_NAME}`,
		description: `Abogado de incapacidad permanente en Lucena, Córdoba y Málaga: solicitamos y reclamamos tu pensión ante el INSS. Consulta gratuita: 666 329 155.`,
		keywords:
			'incapacidad permanente Lucena, pensión invalidez Córdoba, abogado INSS Málaga, incapacidad absoluta, total, Gran Invalidez',
	},
	'/complemento-paternidad-maternidad/': {
		title: `Reclamar el complemento de paternidad y maternidad`,
		description: `Abogado del complemento de paternidad o maternidad en Lucena, Córdoba y Málaga: aumentamos tu pensión de jubilación. Consulta gratuita: 666 329 155.`,
		keywords:
			'complemento maternidad pensión Lucena, complemento paternidad Córdoba, jubilación Málaga, Seguridad Social',
	},
	'/nacionalidad-extranjeria/': {
		title: `Abogado de Extranjería en Lucena | Nacionalidad y arraigo`,
		description: `Residencia, arraigo, visados, reagrupación y nacionalidad española en Lucena, Córdoba y Málaga. Consulta gratuita: 666 329 155.`,
		keywords:
			'nacionalidad española Lucena, residencia Córdoba, visado trabajo Málaga, reagrupación familiar, abogado extranjería',
	},
	'/violencia-genero/': {
		title: `Abogado de Violencia de Género en Lucena | Atención 24 h`,
		description: `Atención confidencial para víctimas, también de urgencia y por videollamada: denuncia, orden de protección y recursos. Llama ahora: 666 329 155.`,
		keywords:
			'abogado violencia género Lucena, víctima Málaga, denuncia Córdoba, orden protección, asistencia juridique urgente',
	},
	'/compraventas-empresas/': {
		title: `Abogado de Compraventa de Empresas en Lucena | ${SITE_NAME}`,
		description: `Abogado de compraventa de empresas en Lucena, Córdoba y Málaga: due diligence, negociación y cierre de operaciones. Consulta gratuita: 666 329 155.`,
		keywords:
			'compra venta empresa Lucena, M&A Córdoba, due diligence Málaga, fusiones adquisiciones, asesoría mercantil',
	},
	'/aviso-legal/': {
		title: `Aviso Legal | ${SITE_NAME} - Información del Sitio Web`,
		description: `Aviso legal e información general del sitio web de ${SITE_NAME} según la LSSI-CE. Nombre fiscal, NIF, domicilio y condiciones de uso.`,
		keywords: 'aviso legal, LSSI-CE, información legal sitio web, Scruz Abogados',
	},
	'/politica-de-privacidad/': {
		title: `Política de Privacidad | ${SITE_NAME} - RGPD`,
		description: `Política de privacidad y protección de datos personales según el RGPD de ${SITE_NAME}. Derechos del usuario, finalidad y conservación de datos.`,
		keywords:
			'política privacidad, RGPD, protección datos, derechos ARCO, Scruz Abogados',
	},
	'/abogados-en-antequera/': {
		title: `Abogado en Antequera | Laboral agrario, urbanismo y expropiaciones | Scruz`,
		description: `Abogados para clientes de Antequera y su comarca: laboral agrario, urbanismo, expropiaciones, familia y herencias. Tribunal de Instancia de Antequera. Consulta gratuita.`,
		keywords: `abogado en Antequera, abogados en Antequera, laboral agrario Antequera, urbanismo Antequera, expropiaciones Antequera, abogado Campillos, abogado Teba, herencias Antequera`,
	},
	'/abogados-en-ronda/': {
		title: `Abogado en Ronda | Herencias, fincas rústicas y laboral ganadero | Scruz`,
		description: `Abogados para clientes de Ronda y la Serranía: herencias, fincas rústicas, laboral ganadero y familia. Tribunal de Instancia de Ronda. Primera consulta gratuita.`,
		keywords: `abogado en Ronda, abogados en Ronda, herencias Serranía de Ronda, finca rústica Ronda, laboral ganadero Ronda, abogado Benaoján, abogado Gaucín, Serranía malagueña abogado`,
	},
	'/abogados-en-alhaurin-de-la-torre/': {
		title: `Abogado en Alhaurín de la Torre | Urbanismo y propiedad horizontal | Scruz`,
		description: `Abogados para clientes de Alhaurín de la Torre: urbanismo y licencias, propiedad horizontal, laboral, familia y herencias. A 25 minutos desde Málaga. Consulta gratuita.`,
		keywords: `abogado en Alhaurín de la Torre, abogados Alhaurín de la Torre, urbanismo Alhaurín de la Torre, licencia de obra Alhaurín, propiedad horizontal Alhaurín, abogado laboral Alhaurín`,
	},
	'/abogados-en-torrox/': {
		title: `Abogado en Torrox | Laboral agrario y propiedad horizontal | Scruz`,
		description: `Abogados para clientes de Torrox y la Axarquía: laboral agrario, propiedad horizontal, familia, herencias y recursos. A 60 minutos desde Málaga. Consulta gratuita.`,
		keywords: `abogado en Torrox, abogados en Torrox, laboral agrario Torrox, propiedad horizontal Torrox, herencias Torrox, abogado Frigiliana, Sayalonga abogado, Axarquía Torrox`,
	},
	'/abogados-en-nerja/': {
		title: `Abogado en Nerja | Laboral estacional y propiedad horizontal | Scruz`,
		description: `Abogados para clientes de Nerja: laboral estacional, propiedad horizontal, familia, herencias y vivienda. A 70 minutos desde Málaga. Primera consulta gratuita.`,
		keywords: `abogado en Nerja, abogados en Nerja, laboral Nerja, propiedad horizontal Nerja, herencias Nerja, abogado Nerja vivienda, alquiler Nerja, Axarquía Nerja`,
	},
	'/abogados-en-puente-genil/': {
		title: `Abogado en Puente Genil | Laboral agrario y herencias | Scruz`,
		description: `Abogados para clientes de Puente Genil: laboral agrario, familia, herencias, civil y concursal. A 35 minutos de Lucena. Primera consulta gratuita.`,
		keywords: `abogado en Puente Genil, abogados Puente Genil, laboral agrario Puente Genil, herencias Puente Genil, familia Puente Genil, abogado concursal Puente Genil`,
	},
	'/abogados-en-chiclana-de-la-frontera/': {
		title: `Abogado en Chiclana de la Frontera | Laboral y propiedad horizontal | Scruz`,
		description: `Abogados para clientes de Chiclana de la Frontera: laboral estacional, propiedad horizontal, familia, herencias y multas. Primera consulta gratuita.`,
		keywords: `abogado en Chiclana de la Frontera, abogados Chiclana, laboral estacional Chiclana, propiedad horizontal Chiclana, herencias Chiclana, multas Chiclana, Bahía de Cádiz abogado`,
	},
	'/abogados-en-san-fernando/': {
		title: `Abogado en San Fernando (Cádiz) | Laboral, familia y contencioso | Scruz`,
		description: `Abogados para clientes de San Fernando: laboral, familia, herencias, contencioso-administrativo y penal. Primera consulta gratuita por videollamada.`,
		keywords: `abogado en San Fernando Cádiz, abogados San Fernando, laboral San Fernando Cádiz, familia San Fernando, herencias San Fernando, contencioso administrativo San Fernando, Bahía de Cádiz abogado`,
	},
	'/abogados-en-el-puerto-de-santa-maria/': {
		title: `Abogado en El Puerto de Santa María | Turismo y propiedad horizontal | Scruz`,
		description: `Abogados para clientes de El Puerto de Santa María: propiedad horizontal, laboral estacional, familia, herencias y multas. Primera consulta gratuita.`,
		keywords: `abogado El Puerto de Santa María, abogados El Puerto de Santa María, propiedad horizontal El Puerto, laboral El Puerto de Santa María, herencias El Puerto, turismo El Puerto de Santa María`,
	},
	'/abogados-en-arcos-de-la-frontera/': {
		title: `Abogado en Arcos de la Frontera | Laboral agrario y herencias | Scruz`,
		description: `Abogados para clientes de Arcos de la Frontera y la Sierra de Cádiz: laboral agrario, herencias de fincas, familia y recursos. Primera consulta gratuita.`,
		keywords: `abogado en Arcos de la Frontera, abogados Arcos de la Frontera, laboral agrario Arcos, herencias Sierra de Cádiz, fincas Arcos de la Frontera, familias Arcos`,
	},
	'/abogados-en-santa-fe/': {
		title: `Abogado en Santa Fe (Granada) | Laboral agrario y urbanismo | Scruz`,
		description: `Abogados para clientes de Santa Fe y la Vega de Granada: laboral agrario, urbanismo, propiedad horizontal, familia y herencias. Primera consulta gratuita.`,
		keywords: `abogado en Santa Fe Granada, abogados Santa Fe, laboral agrario Santa Fe, urbanismo Santa Fe, propiedad horizontal Santa Fe, herencias Santa Fe, Vega de Granada abogado`,
	},
	'/abogados-en-ogijares/': {
		title: `Abogado en Ogíjares y el Valle de Lecrín | Scruz`,
		description: `Abogados para clientes de Ogíjares y el Valle de Lecrín: laboral estacional, propiedad horizontal, familia y herencias. Ogíjares depende del partido de Granada. Consulta gratuita.`,
		keywords: `abogado en Ogíjares, abogados Ogíjares, Valle de Lecrín abogado, laboral Ogíjares, propiedad horizontal Ogíjares, herencias Valle de Lecrín, Alhambra abogado Ogíjares`,
	},
	'/abogados-en-loja/': {
		title: `Abogado en Loja (Granada) | Laboral agrario y herencias de fincas | Scruz`,
		description: `Abogados para clientes de Loja y la Vega granadina: laboral agrario, herencias de fincas, familia y recursos. A 1h20 de Lucena. Primera consulta gratuita.`,
		keywords: `abogado en Loja Granada, abogados Loja, laboral agrario Loja, herencias Loja, olivar Loja, familia Loja, Vega de Loja abogado`,
	},
	'/abogados-en-baza/': {
		title: `Abogado en Baza (Granada) | Laboral ganadero y herencias | Scruz`,
		description: `Abogados para clientes de Baza y la Alpujarra granadina: laboral ganadero, herencias de fincas, familia y recursos. Primera consulta gratuita por videollamada.`,
		keywords: `abogado en Baza Granada, abogados Baza, laboral ganadero Baza, herencias Baza, Alpujarra granadina abogado, Zújar abogado, Caniles abogado, Baza familia abogado`,
	},
	'/abogados-en-huescar/': {
		title: `Abogado en Huéscar (Granada) | Ganadería y herencias de fincas | Scruz`,
		description: `Abogados para clientes de Huéscar y el altiplano granadino: laboral ganadero, herencias de fincas, familia y recursos. Primera consulta gratuita.`,
		keywords: `abogado en Huéscar, abogados Huéscar, ganadería Huéscar, herencias Huéscar, altiplano granadino abogado, Castril abogado, Orce abogado, Puebla de Don Fadrique abogado`,
	},
	'/abogados-en-motril/': {
		title: `Abogado en Motril (Granada) | Laboral estacional y familia | Scruz`,
		description: `Abogados para clientes de Motril y la Costa Tropical: laboral estacional, familia, herencias, urbanismo y multas. A 1h15 de Málaga. Consulta gratuita.`,
		keywords: `abogado en Motril, abogados Motril, laboral Motril, familia Motril, herencias Motril, Costa Tropical abogado, Salobreña abogado, urbanismo Motril`,
	},
	'/abogados-en-almunecar/': {
		title: `Abogado en Almuñécar | Alquiler, vivienda y laboral | Scruz`,
		description: `Abogados para clientes de Almuñécar y la Costa Tropical: alquiler y vivienda, laboral estacional, propiedad horizontal, familia y multas. Consulta gratuita.`,
		keywords: `abogado en Almuñécar, abogados Almuñécar, alquiler Almuñécar, laboral Almuñécar, propiedad horizontal Almuñécar, familia Almuñécar, Costa Tropical abogado, vivienda Almuñécar`,
	},
	'/abogados-en-guadix/': {
		title: `Abogado en Guadix (Granada) | Laboral, familia y empresas | Scruz`,
		description: `Abogados para clientes de Guadix y la Vega alta: laboral, familia, herencias, mercantil y procedimientos administrativos. Primera consulta gratuita.`,
		keywords: `abogado en Guadix, abogados Guadix, laboral Guadix, familia Guadix, herencias Guadix, empresas Guadix, La Calahorra abogado, Vega alta abogado, Marquesado de Zenete abogado`,
	},
	'/abogados-en-cordoba/': {
		title: `Abogado en Córdoba capital | Familia, laboral y contencioso | Scruz`,
		description: `Abogados para clientes de Córdoba capital: familia, civil, laboral, contencioso-administrativo, mercantil y penal. A una hora de Lucena. Consulta gratuita.`,
		keywords: `abogado en Córdoba capital, abogados Córdoba, familia Córdoba, laboral Córdoba, contencioso administrativo Córdoba, mercantil Córdoba, abogado testamentos Córdoba, penal Córdoba`,
	},
	'/abogados-en-villacarrillo/': {
		title: `Abogado en Villacarrillo y la Sierra de Segura | Laboral agrario y herencias | Scruz`,
		description: `Abogados para clientes de Villacarrillo y la Sierra de Segura (Jaén): laboral agrario, herencias de fincas, familia y recursos. Primera consulta gratuita.`,
		keywords: `abogado en Villacarrillo, abogados Villacarrillo, Sierra de Segura abogado, laboral agrario Villacarrillo, herencias Villacarrillo, Beas de Segura abogado, Segura de la Sierra abogado, olivar Villacarrillo`,
	},
	'/declaracion-de-accesibilidad/': {
		title: `Declaración de Accesibilidad | ${SITE_NAME} - RD 1112/2018`,
		description: `Declaración de accesibilidad del sitio web de ${SITE_NAME} conforme al RD 1112/2018. Compromiso con la inclusión digital.`,
		keywords:
			'accesibilidad web, RD 1112/2018, WCAG, inclusión digital, Scruz Abogados',
	},
};

export function routeDefaults(pathname: string) {
	// Normaliza: añade trailing slash si falta
	const key = pathname.endsWith('/') ? pathname : `${pathname}/`;
	return (
		ROUTE_DEFAULTS[key] ??
		ROUTE_DEFAULTS[pathname] ?? {
			title: `${SITE_NAME} | ${SITE_TAGLINE}`,
			description: `${SITE_NAME}: despacho jurídico en Lucena, Córdoba y Málaga con más de 20 años de experiencia en todas las áreas del derecho.`,
			keywords:
				'abogado Lucena, abogados Córdoba, abogados Málaga, Scruz Abogados, despacho jurídico',
		}
	);
}
