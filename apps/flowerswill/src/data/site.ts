/**
 * Datos de Flowerswill (Carrer de Laforja, 25 · Sarrià-Sant Gervasi, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, web propia, categoría,
 * valoración con número de reseñas y 3 extractos destacados, descripción del titular, coordenadas
 * y plus code.
 *
 * La ficha no publica horario, así que no se reproduce ninguno. La descripción del titular y
 * los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://flowerswill.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Flowerswill',
	shortName: 'Flowerswill',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Flowerswill, Carrer de Laforja, 25,
	 * Sarrià-Sant Gervasi, 08006 Barcelona». «Sarrià-Sant Gervasi» es el distrito y se
	 * conserva aparte.
	 */
	streetAddress: 'Carrer de Laforja, 25',
	district: 'Sarrià-Sant Gervasi',
	postalCode: '08006',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 655 47 63 69',
	latitude: 41.3986631,
	longitude: 2.1492232,
	/** Plus code que publica la ficha (corto; el completo es 8FH394XX+FM). */
	plusCode: '94XX+FM Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 53 reseñas). */
	rating: 4.4,
	reviewCount: 53,
	site: site.siteUrl,
} as const;

/** Web propia publicada en la ficha, tal cual la publica (con http). */
export const website = 'http://www.flowerswill.com/';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Flowerswill/@41.3986631,2.1492232,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a29ed871bd6b:0xc87f0259df01dbfa!8m2!3d41.3986631!4d2.1492232!16s%2Fg%2F11bwnd18vt?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJa71x2J6ipBIR-tsB31kCf8g&hl=es';

export const phoneHref = 'tel:+34655476369';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 *
 * Está escrita en inglés y se reproduce tal cual.
 */
export const ownerDescription =
	'Sending flowers from far and wide to the nice people of Barcelona City. Also a Flowers and Plant Shop. Better call us before coming. We are often in and out delivering or working for you. For other important things please contact us: projects@flowerswill.com';

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
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: '¡Fantástico trato y un arreglo floral muy bonito!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'He recibido un trato encantador por parte de la dueña del local.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El amor por las cosas bonitas se percibe en todos los detalles.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario ni precios, así que ninguna respuesta los menciona
 * como propios: el horario se declara ausente.
 */
export const faqs = [
	{
		question: '¿Dónde está esta floristería?',
		answer:
			'En el Carrer de Laforja, 25, con código postal 08006, en Barcelona, en Sarrià-Sant Gervasi. Publica el plus code 94XX+FM Barcelona y las coordenadas 41.3986631, 2.1492232.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha no publica ningún horario (consultada el 18 de octubre de 2026). Su propia descripción pide llamar antes de ir porque a menudo están fuera repartiendo. El teléfono que publica la ficha es el 655 47 63 69.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción, escrita en inglés, dice literalmente que envían flores a la gente de Barcelona, que también son tienda de flores y plantas, y que es mejor llamar antes de ir porque a menudo están fuera repartiendo o trabajando.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 655 47 63 69. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Tienen web propia?',
		answer:
			'Sí: la ficha publica http://www.flowerswill.com/ como web del negocio. Los botones de esta web enlazan a ella como web oficial.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Laforja, 25, en Sarrià-Sant Gervasi de Barcelona, y las coordenadas 41.3986631, 2.1492232. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 94XX+FM Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 53 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de un trato fantástico con un arreglo floral muy bonito, de un trato encantador por parte de la dueña del local, y del amor por las cosas bonitas en todos los detalles. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial: la suya es http://www.flowerswill.com/ y aquí se enlaza como tal.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en el Carrer de Laforja de Barcelona, en Sarrià-Sant Gervasi. Tienda de flores y plantas con reparto a domicilio.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	sameAs: [website, mapsUrl],
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
