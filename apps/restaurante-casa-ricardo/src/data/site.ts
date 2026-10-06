/**
 * Datos de Restaurante Casa Ricardo (C. Tiziano, 6, 04700 El Ejido, Almería).
 *
 * Todo lo que hay aquí sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre
 * de 2026 desde el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono,
 * categoría, valoración con número de reseñas, coordenadas, horario semanal, leyendas de sus fotos
 * y extractos de sus reseñas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://casa-ricardo-ejido.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	name: 'Restaurante Casa Ricardo',
	shortName: 'Casa Ricardo',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Restaurante de cocina española',
	streetAddress: 'C. Tiziano, 6',
	postalCode: '04700',
	city: 'El Ejido',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 48 58 89',
	latitude: 36.7674807,
	longitude: -2.8021447,
	/** Valoración de la ficha en la fecha de consulta (4,6 con 564 reseñas). */
	rating: 4.6,
	reviewCount: 564,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Ricardo/@36.7674807,-2.8021447,17z/data=!3m1!4b1!4m6!3m5!1s0xd7042c1719e27fd:0x11ad1bed2d0e4e58!8m2!3d36.7674807!4d-2.8021447!16s%2Fg%2F1tddtk1k?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ_SeeccFCcA0RWE4OLe0brRE&hl=es';

export const phoneHref = 'tel:+34950485889';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Al consultarla, el lunes (12 de octubre de 2026) estaba marcado como festivo nacional
 * («Fiesta Nacional de España: el horario podría ser diferente»), así que se avisa de ello en vez
 * de dar ese día por seguro.
 */
export const hours = [
	{ day: 'Lunes', service: '8:00 – 17:00', open: '08:00', close: '17:00', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '8:00 – 17:00', open: '08:00', close: '17:00', dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '8:00 – 17:00',
		open: '08:00',
		close: '17:00',
		dayOfWeek: 'Wednesday',
	},
	{ day: 'Jueves', service: '8:00 – 17:00', open: '08:00', close: '17:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '8:00 – 17:00', open: '08:00', close: '17:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '8:00 – 17:00', open: '08:00', close: '17:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'De 8:00 a 17:00, sábado cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual y sin recortar frases a medias: no hay ninguna reseña inventada ni parafraseada.
 */
export const reviews = [
	{
		text: 'Menús caseros buena cocina buena atención del servicio, totalmente recomendable',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Comida casera muy rica y raciones generosas.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Buen sitio para pasar un buen rato entre amigos buena comida y buenas tapas',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Casa Ricardo?',
		answer:
			'En la calle Tiziano, 6, en El Ejido (Almería), código postal 04700. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 48 58 89 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica de 8:00 a 17:00 de lunes a domingo, con el sábado cerrado. El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional con aviso de que el horario podía variar, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española, con 4,6 sobre 5 y 564 reseñas. Las reseñas publicadas en la ficha hablan de menús caseros, comida casera y raciones generosas. No hay carta publicada, así que para saber el menú del día lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa o pedir para llevar?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 48 58 89.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es la web oficial del establecimiento y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: `Restaurante de cocina española en la calle Tiziano, 6, El Ejido (Almería).`,
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	priceRange: '€',
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
	acceptsReservations: false,
	servesCuisine: ['Cocina española', 'Cocina casera'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours
		.filter((item) => item.open && item.close)
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: item.open,
			closes: item.close,
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
