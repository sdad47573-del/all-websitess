/**
 * Datos de Floristeria Serrano des de 1971 (Carrer de Pablo Iglesias, 8 · Nou Barris, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, descripción del titular, coordenadas y plus code.
 *
 * La ficha no publica horario ni web propia, así que no se reproduce ninguno de ellos.
 * La descripción del titular y los 3 extractos de reseñas se reproducen literalmente y se citan
 * como tales en la web. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-serrano.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Serrano des de 1971',
	shortName: 'Serrano',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristeria Serrano des de 1971,
	 * Carrer de Pablo Iglesias, 8, Nou Barris, 08016 Barcelona». «Nou Barris» es el
	 * distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Pablo Iglesias, 8',
	district: 'Nou Barris',
	postalCode: '08016',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 933 54 44 30',
	latitude: 41.442367,
	longitude: 2.1808611,
	/** Plus code que publica la ficha (corto; el completo es 8FH3C5RJ+W8). */
	plusCode: 'C5RJ+W8 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (3,5 sobre 5 con 137 reseñas). */
	rating: 3.5,
	reviewCount: 137,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Serrano+des+de+1971/@41.442367,2.1808611,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4bd1f171c09e7:0x8c36fc5721489950!8m2!3d41.442367!4d2.1808611!16s%2Fg%2F1tcwzp39?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5wkcFx-9pBIRUJlIIVf8Now&hl=es';

export const phoneHref = 'tel:+34933544430';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription = 'Floristería familiar creada en el año 1971';

/**
 * Horario semanal que publica la ficha.
 *
 * La ficha no publica ningún horario, así que la lista queda vacía y la web lo dice tal cual.
 */
export const hours: readonly {
	day: string;
	service: string;
	shifts: readonly { open: string; close: string }[];
	dayOfWeek: string;
}[] = [];

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'La ficha no publica horario';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha solo publica una entrada: no hay aparcamiento adaptado para sillas de ruedas.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web, incluida la reseña de 1 sobre 5. El endpoint no trae el nombre del autor,
 * así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Buena atención, buen trabajo con las plantas que venden y a precios asequibles.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Solo decir que me encanta su profesionalidad y buen hacer, amables y cordiales.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Fui a floresteria esperando un buen producto y el servicio fue lamentable.',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario, web ni precios, así que ninguna respuesta los menciona
 * como propios: el horario se declara ausente.
 */
export const faqs = [
	{
		question: '¿Dónde está esta floristería?',
		answer:
			'En el Carrer de Pablo Iglesias, 8, con código postal 08016, en Barcelona, en Nou Barris. Publica el plus code C5RJ+W8 Barcelona y las coordenadas 41.442367, 2.1808611.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha no publica ningún horario (consultada el 18 de octubre de 2026). Antes de ir, lo más seguro es llamar al 933 54 44 30 y preguntar.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente: «Floristería familiar creada en el año 1971». Las reseñas que destaca hablan de buena atención con buen trabajo en plantas a precios asequibles, de profesionalidad con trato amable y cordial, y también hay una de 1 sobre 5 que cuenta una mala experiencia con el servicio.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 933 54 44 30. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Pablo Iglesias, 8, en Nou Barris de Barcelona, y las coordenadas 41.442367, 2.1808611. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C5RJ+W8 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 3,5 sobre 5 con 137 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: dos de 5 sobre 5 que hablan de buena atención con plantas a precios asequibles y de profesionalidad amable y cordial, y uno de 1 sobre 5 que cuenta una mala experiencia con el servicio. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería familiar creada en el año 1971, en el Carrer de Pablo Iglesias de Barcelona, en Nou Barris.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.province,
		postalCode: business.postalCode,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	/* Sin `openingHoursSpecification`: la ficha no publica horario y no se inventa uno. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${site.siteUrl}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};

/**
 * Datos legales del titular (LSSI-CE).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
