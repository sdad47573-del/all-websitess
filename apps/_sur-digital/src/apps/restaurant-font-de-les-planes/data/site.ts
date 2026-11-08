/**
 * Datos de Restaurant Font de Les Planes
 * (BV-1462, Carrer Vallvidrera a Sant Cugat, Km. 6.5 · 08017 Barcelona, Sarrià-Sant Gervasi).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, descripción del titular y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta ni precios, así que aquí no se reproducen. Los textos de
 * las reseñas y la descripción se copian literalmente y se citan como tales; la ficha no publica
 * el nombre de quienes firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-font-de-les-planes',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Font de Les Planes',
	shortName: 'Font de Les Planes',
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'BV-1462, Carrer Vallvidrera a Sant Cugat, Km. 6.5',
	district: 'Sarrià-Sant Gervasi',
	postalCode: '08017',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 625 96 52 52',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '625 96 52 52',
	latitude: 41.4281844,
	longitude: 2.0879982,
	/** Plus code que publica la ficha (completo: 8FH2C3HQ+75). */
	plusCode: 'C3HQ+75 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 3926 reseñas). */
	rating: 4.2,
	reviewCount: 3926,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Font+de+Les+Planes/@41.4281844,2.0879982,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49767219378c1:0x17eb2f496a0d8f43!8m2!3d41.4281844!4d2.0879982!16s%2Fg%2F11bwkdz_d7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJwXiTIWeXpBIRQ48Nakkv6xc&hl=es';

export const phoneHref = 'tel:+34625965252';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha.
 */
export const descripcionLocal =
	'Restaurante de cocina catalana de tipo chalet: cocina catalana y paellas en un restaurante de tipo chalet, con terraza y vistas al bosque.';

/**
 * Horario semanal que publica la ficha.
 *
 * El martes cierra. Domingo, lunes, miércoles, jueves, viernes y sábado abre de 9:00 a 19:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 19:00',
		shifts: [{ open: '9:00', close: '19:00' }],
		dayOfWeek: 'Monday',
	},
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '9:00 – 19:00',
		shifts: [{ open: '9:00', close: '19:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 19:00',
		shifts: [{ open: '9:00', close: '19:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 19:00',
		shifts: [{ open: '9:00', close: '19:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 19:00',
		shifts: [{ open: '9:00', close: '19:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 19:00',
		shifts: [{ open: '9:00', close: '19:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Martes cerrado; domingo, lunes, miércoles, jueves, viernes y sábado de 9:00 a 19:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días menos martes · 9:00 a 19:00';

/**
 * Accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Comida increible y un trato excelente volveremos sin dudarlo, muchas gracias!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Comimos torradas de pa de pagès con allioli, ensalada y entrecot a la brasa.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Calçots y Alcachofas riquisimas, conejito lechal igual, precio contenido.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Font de Les Planes?',
		answer:
			'En BV-1462, Carrer Vallvidrera a Sant Cugat, Km. 6.5, con código postal 08017, en Barcelona, en Sarrià-Sant Gervasi. Publica el plus code C3HQ+75 Barcelona y las coordenadas 41.4281844, 2.0879982.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que el martes cierra; domingo, lunes, miércoles, jueves, viernes y sábado abre de 9:00 a 19:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica únicamente como restaurante. Su descripción dice: restaurante de cocina catalana de tipo chalet, con cocina catalana y paellas, terraza y vistas al bosque. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 625 96 52 52. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección BV-1462, Carrer Vallvidrera a Sant Cugat, Km. 6.5, en Barcelona, y las coordenadas 41.4281844, 2.0879982. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica aparcamiento y aseo adaptados para sillas de ruedas como disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 3926 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina catalana tipo chalet en Barcelona: paellas, terraza y vistas al bosque. Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange` ni `menu`: la ficha no publica precios ni carta. */
	servesCuisine: ['Catalana', 'Paellas'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
