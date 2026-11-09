/**
 * Datos de Alentejo (Moreanes · Mértola, Portugal).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha, el mismo que usa `scripts/fetch-maps-photos.mjs`:
 * nombre, dirección, categoría, teléfono, valoración con número de reseñas, coordenadas, plus code,
 * horario semanal y los servicios de accesibilidad.
 *
 * La ficha **no publica descripción del titular, carta, precios, web propia, distintivo ni reseñas
 * destacadas**, así que no se reproduce ninguno de ellos y no se inventa ninguno. La dirección llega
 * sin calle ni código postal: la ficha solo escribe la aldea («Moreanes») y el municipio.
 *
 * Este fichero no contiene texto visible: el de cada idioma está en `src/data/textos.ts`.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-alentejo',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Alentejo',
	shortName: 'Alentejo',
	/** Única categoría que publica Google. */
	category: 'Restaurante portugués',
	categories: ['Restaurante portugués'],
	/**
	 * Dirección publicada en la ficha. Google no da ni calle ni número postal: solo la aldea
	 * («Moreanes») y el municipio («Mértola»), así que `postalCode` no existe en este fichero.
	 */
	streetAddress: 'Moreanes',
	city: 'Mértola',
	region: 'Alentejo',
	country: 'PT',
	countryName: 'Portugal',
	/** Teléfono publicado en la ficha, en formato portugués. */
	phone: '+351 286 655 133',
	latitude: 37.6466409,
	longitude: -7.5610064,
	/** Plus code que publica la ficha. */
	plusCode: 'JCWQ+MH Mértola, Portugal',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 1.273 reseñas). */
	rating: 4.5,
	reviewCount: 1273,
	site: site.siteUrl,
} as const;

/** Dirección en una línea, como la escribe la ficha: aldea, municipio y país. */
export const addressLine = `${business.streetAddress} · ${business.city}, ${business.countryName}`;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Alentejo/@37.6466409,-7.5610064,17z/data=!3m1!4b1!4m6!3m5!1s0xd10647966821e57:0xf0af7fc5ea95230f!8m2!3d37.6466409!4d-7.5610064!16s%2Fg%2F11bx5q6w1p?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJVx6CZnlkEA0RDyOV6sV_r_A&hl=es';

export const phoneHref = 'tel:+351286655133';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=15&output=embed`;

/**
 * Horario semanal que publica la ficha, en orden de lunes a domingo.
 *
 * La ficha escribe los tramos tal cual: `11:30 – 2:00` de martes a sábado, `11:30 – 15:00` el
 * domingo y **«Cerrado» el lunes**. No aclara si las 2:00 son de la madrugada siguiente, así que los
 * tramos se reproducen sin interpretarlos: en los datos estructurados el cierre se declara como
 * `02:00`, que es como lo lee Google en el resto de fichas del repositorio.
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado.
 */
export const hours = [
	{ dayOfWeek: 'Monday', shifts: [] },
	{ dayOfWeek: 'Tuesday', shifts: [{ open: '11:30', close: '02:00' }] },
	{ dayOfWeek: 'Wednesday', shifts: [{ open: '11:30', close: '02:00' }] },
	{ dayOfWeek: 'Thursday', shifts: [{ open: '11:30', close: '02:00' }] },
	{ dayOfWeek: 'Friday', shifts: [{ open: '11:30', close: '02:00' }] },
	{ dayOfWeek: 'Saturday', shifts: [{ open: '11:30', close: '02:00' }] },
	{ dayOfWeek: 'Sunday', shifts: [{ open: '11:30', close: '15:00' }] },
] as const;

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica cuatro y los cuatro figuran como disponibles: acceso, aparcamiento, aseo y asientos
 * adaptados para sillas de ruedas. Es más de lo que publican otras fichas del repositorio y aquí se
 * reproduce entero. Las etiquetas de cada idioma están en `textos.ts`, bajo `accesibilidad`.
 */
export const accesibilidad = [
	{ key: 'entrance', disponible: true },
	{ key: 'parking', disponible: true },
	{ key: 'restroom', disponible: true },
	{ key: 'seating', disponible: true },
] as const;

/** Idiomas de la web. `es` es el que se sirve en la raíz y `pt` el de `/pt/`. */
export const idiomas = ['es', 'pt'] as const;
export type Idioma = (typeof idiomas)[number];

/** Ruta de cada idioma: el español vive en la raíz y el portugués bajo `/pt/`. */
export const prefijo = (lang: Idioma) => (lang === 'es' ? '' : '/restaurante-alentejo/pt');

/**
 * Locale para `Intl` (números y fechas), que exige la forma BCP-47 con guion («es-ES»).
 *
 * No sirve el `locale` de los textos («es_ES», con guion bajo), que es el que espera `og:locale`:
 * pasárselo a `Intl` lanza «Incorrect locale information provided» en pleno build.
 */
export const localeIntl = (lang: Idioma) => (lang === 'es' ? 'es-ES' : 'pt-PT');

/** Enlace a la otra versión de la misma página, para el conmutador de idioma. */
export const otraVersion = (lang: Idioma, page: 'inicio' | 'legal' = 'inicio') => {
	const base = prefijo(lang === 'es' ? 'pt' : 'es');
	return page === 'inicio' ? `${base}/` : `${base}/aviso-legal/`;
};

/** Datos estructurados del restaurante, con los textos del idioma que recibe. */
export function restaurantSchema(
	lang: Idioma,
	textos: {
		schemaDescription: string;
		cocina: string;
		accesibilidad: Record<(typeof accesibilidad)[number]['key'], string>;
	},
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		'@id': `${site.siteUrl}/#restaurante`,
		/* El mismo negocio en dos idiomas: un solo `@id` y `inLanguage` distinto. */
		inLanguage: lang === 'es' ? 'es-ES' : 'pt-PT',
		name: business.name,
		description: textos.schemaDescription,
		url: `${site.siteUrl}${prefijo(lang)}/`,
		image: `${site.siteUrl}/og.jpg`,
		telephone: business.phone,
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.streetAddress,
			addressLocality: business.city,
			addressRegion: business.region,
			addressCountry: business.country,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: business.latitude,
			longitude: business.longitude,
		},
		hasMap: mapsUrl,
		/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
		acceptsReservations: true,
		/* «Restaurante portugués» declara una cocina, así que se declara. */
		servesCuisine: [textos.cocina],
		/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
		/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.rating,
			reviewCount: business.reviewCount,
			bestRating: 5,
		},
		/* Sin `review`: la ficha no destaca ninguna reseña con texto. */
		openingHoursSpecification: hours.flatMap((item) =>
			item.shifts.map((shift) => ({
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: item.dayOfWeek,
				opens: shift.open,
				closes: shift.close,
			})),
		),
		amenityFeature: accesibilidad.map((item) => ({
			'@type': 'LocationFeatureSpecification',
			/* El nombre va en el idioma de la página, que es lo que lee quien la visita. */
			name: textos.accesibilidad[item.key],
			value: item.disponible,
		})),
	};
}

/** Datos estructurados de las preguntas frecuentes del idioma que recibe. */
export function faqSchema(lang: Idioma, faqs: readonly { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		'@id': `${site.siteUrl}${prefijo(lang)}/#faq`,
		inLanguage: lang === 'es' ? 'es-ES' : 'pt-PT',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: { '@type': 'Answer', text: faq.a },
		})),
	};
}

/**
 * Datos legales del titular (LSSI-CE en la versión española y RGPD en las dos).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de las dos páginas legales sigue visible. El teléfono publicado en la ficha ya consta
 * arriba, así que el canal que hay que rellenar es el correo.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
} as const;
