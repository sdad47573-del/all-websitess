/**
 * Datos de Floristerías Alfredo
 * (Pl. de Venecia · 28028 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 17 de octubre de 2026:
 * nombre, dirección, distrito, teléfono, categorías, descripción del titular, coordenadas, plus
 * code, horario semanal y accesibilidad.
 *
 * La ficha no publica valoración, reseñas, web propia ni precios, así que aquí no se reproducen:
 * no se inventa una nota ni se atribuyen opiniones. La descripción del titular se reproduce
 * literalmente, con sus emojis y su puntuación, y se cita como tal.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristerias-alfredo',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristerías Alfredo - Floristeria en Madrid',
	shortName: 'Floristerías Alfredo',
	categories: ['Floristería', 'Entrega de flores', 'Tienda de regalos'],
	category: 'Floristería',
	/** Dirección publicada en la ficha: la plaza, sin número. */
	streetAddress: 'Pl. de Venecia',
	district: 'Salamanca',
	postalCode: '28028',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	phone: '+34 633 69 77 43',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '633 69 77 43',
	/** Número de WhatsApp que indica la descripción del titular. */
	whatsapp: '633697743',
	latitude: 40.441009,
	longitude: -3.6626336,
	/** Plus code que publica la ficha (completo: 8CGRC8RP+CW). */
	plusCode: 'C8RP+CW Madrid',
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADas+Alfredo+-+Floristeria+en+Madrid/@40.441009,-3.6626336,17z/data=!3m1!4b1!4m6!3m5!1s0xd42293e3177dc1f:0x2b15503233a1a0e!8m2!3d40.441009!4d-3.6626336!16s%2Fg%2F11zbp90085?hl=es';

export const phoneHref = 'tel:+34633697743';

/** Enlace de WhatsApp con el número publicado en la descripción del titular. */
export const whatsappUrl = `https://wa.me/34${business.whatsapp}?text=${encodeURIComponent(
	'Hola, quería hacer una consulta sobre flores.',
)}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus emojis, viñetas y saltos de línea. El último párrafo incluye
 * el número de WhatsApp al que el propio negocio pide los pedidos.
 */
export const descripcionLocal =
	'En Floristerías Alfredo llevamos años ofreciendo flores frescas, ramos personalizados y arreglos florales para todo tipo de ocasiones en Madrid. Trabajamos con flores naturales de alta calidad para cumpleaños, aniversarios, bodas, funerales, eventos y regalos especiales.\n\nRealizamos preparación rápida de ramos y atención personalizada directamente por WhatsApp para que puedas hacer tu pedido de forma fácil y cómoda.\n\n💐 Nuestros servicios incluyen:\n• Ramos de flores naturales\n• Rosas, tulipanes, lirios y flores de temporada\n• Centros florales y decoración\n• Flores para eventos y celebraciones\n• Ramos personalizados\n• Atención rápida y cercana\n\n📲 Pedidos y consultas por WhatsApp:\n+34 633 697 743';

/** Párrafos de la descripción, ya separados para pintarlos con comodidad. */
export const descripcionParrafos = descripcionLocal.split('\n\n');

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a sábado abre de 9:30 a 19:30; el domingo, de 9:00 a 14:30.
 */
export const hours = [
	{ day: 'Lunes', service: '9:30 – 19:30', shifts: [{ open: '9:30', close: '19:30' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:30 – 19:30', shifts: [{ open: '9:30', close: '19:30' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:30 – 19:30', shifts: [{ open: '9:30', close: '19:30' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:30 – 19:30', shifts: [{ open: '9:30', close: '19:30' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:30 – 19:30', shifts: [{ open: '9:30', close: '19:30' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:30 – 19:30', shifts: [{ open: '9:30', close: '19:30' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '9:00 – 14:30', shifts: [{ open: '9:00', close: '14:30' }], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes a sábado de 9:30 a 19:30; domingo de 9:00 a 14:30';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cinco entradas y las cinco figuran como no disponibles: acceso, aparcamiento, aseo,
 * asientos adaptados y bucle magnético. Se reproducen tal cual, sin maquillar el dato.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: false },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Valoración y reseñas.
 *
 * La ficha consultada no publica ninguna nota ni ningún texto de reseña, así que quedan vacíos y
 * la web lo dice expresamente en lugar de inventar una valoración.
 */
export const reviews = [] as const;
export const rating = null;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Floristerías Alfredo?',
		answer:
			'En la Pl. de Venecia, en el distrito de Salamanca, con código postal 28028, Madrid. La ficha publica el plus code C8RP+CW Madrid y las coordenadas 40.441009, -3.6626336.',
	},
	{
		question: '¿Cuál es el horario de Floristerías Alfredo?',
		answer:
			'La ficha publica que de lunes a sábado abre de 9:30 a 19:30 y el domingo de 9:00 a 14:30. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmarlo antes de ir.',
	},
	{
		question: '¿Qué servicios ofrece?',
		answer:
			'La ficha lo clasifica como floristería, entrega de flores y tienda de regalos. Su descripción enumera ramos de flores naturales, rosas, tulipanes, lirios y flores de temporada, centros florales y decoración, flores para eventos y celebraciones, y ramos personalizados.',
	},
	{
		question: '¿Cómo se hacen los pedidos?',
		answer:
			'El propio negocio indica en su descripción que atiende los pedidos y consultas por WhatsApp en el +34 633 697 743. Esta web enlaza directamente a ese WhatsApp y al teléfono 633 69 77 43.',
	},
	{
		question: '¿Se puede comprar en esta web?',
		answer:
			'No. Esta web es informativa y no es la web oficial del local; no tiene carrito ni pago online. Los pedidos se gestionan por WhatsApp o por teléfono.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Pl. de Venecia, en el distrito de Salamanca, Madrid, y las coordenadas 40.441009, -3.6626336. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cinco entradas de accesibilidad y las cinco figuran como no disponibles: acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado, asientos adaptados y bucle magnético. Se reproduce el dato tal cual.',
	},
	{
		question: '¿Qué valoración tiene en Google?',
		answer:
			'La ficha consultada el 17 de octubre de 2026 no publica ninguna nota ni ningún texto de reseña, así que esta web no muestra valoración. Puedes comprobar el estado actual en el enlace a la ficha de Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.shortName,
	description:
		'Floristería, entrega de flores y tienda de regalos en la Pl. de Venecia, distrito de Salamanca, Madrid.',
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
	/* Sin `aggregateRating` ni `review`: la ficha no publica nota ni reseñas. */
	/* Sin `priceRange` ni `sameAs`: la ficha no publica precios, web ni perfiles. */
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
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
