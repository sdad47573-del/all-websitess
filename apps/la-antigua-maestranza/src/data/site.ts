/**
 * Datos de La Antigua Maestranza (C. Real, 50 · 30201 Cartagena, Murcia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el titular y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguna de esas cosas.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://la-antigua-maestranza.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Antigua Maestranza',
	shortName: 'La Maestranza',
	/** Categoría principal que publica Google en esta ficha: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante', 'Cafetería', 'Restaurante mediterráneo', 'Restaurante de cocina española'],
	/** Dirección publicada en la ficha (Google la abrevia como «C. Real, 50»). */
	streetAddress: 'C. Real, 50',
	postalCode: '30201',
	city: 'Cartagena',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 968 50 02 35',
	latitude: 37.6032548,
	longitude: -0.9900209,
	/** Plus code que publica la ficha. */
	plusCode: 'J235+8X Cartagena',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 1.055 reseñas). */
	rating: 4.4,
	reviewCount: 1055,
	/** Identificador de lugar de Google, del que se compone el enlace de reseñas. */
	placeId: 'ChIJmaYFZSVCYw0RDBj1oyXp83o',
	/** Identificador de canal (el `/g/…` que aparece al final del enlace de Maps). */
	channel: '/g/1tg_yfcl',
	site: site.siteUrl,
} as const;

/**
 * Descripción que publica el titular en la ficha, citada literal (sin corregir su redacción, su
 * puntuación ni el espacio que deja antes de la coma). Es el único texto descriptivo que firma el
 * propio local.
 */
export const descripcion =
	'Restaurante de comida y mediterránea.\nElaboración casera con productos de calidad.\nCarta variada , menús cerrados para grupo y menú diario en días laborables.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Antigua+Maestranza/@37.6032548,-0.9900209,17z/data=!3m1!4b1!4m6!3m5!1s0xd6342256505a699:0x7af3e925a3f5180c!8m2!3d37.6032548!4d-0.9900209!16s%2Fg%2F1tg_yfcl?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl = `https://search.google.com/local/reviews?placeid=${business.placeId}&hl=es`;

export const phoneHref = 'tel:+34968500235';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local cierra
 * los lunes y el resto de la semana trabaja el mediodía; viernes y sábado abren además por la noche.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente
 * (la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla).
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 16:00',
		shifts: [{ open: '08:30', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 16:00',
		shifts: [{ open: '08:30', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 16:00',
		shifts: [{ open: '08:30', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 16:00 · 20:00 – 23:00',
		shifts: [
			{ open: '08:30', close: '16:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 16:00 · 20:00 – 23:00',
		shifts: [
			{ open: '09:00', close: '16:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 16:00',
		shifts: [{ open: '09:30', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Cerrado los lunes; de martes a jueves de 8:30 a 16:00, viernes y sábado con mediodía y noche, y domingos de 9:30 a 16:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/** Distintivo que destaca la ficha además de las categorías. */
export const distintivo = 'Brunch';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Una es de 5 sobre 5 y dos de 4
 * sobre 5.
 */
export const reviews = [
	{
		text: 'He probado el Cachopo y el solomillo con salsa de trufa y estaba todo muy bueno.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy recomendable la pata de pulpo frito y el rollito de bacalao.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Enhorabuena por el buen servicio de sus camareros y su buen hacer en cocina.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta con precios ni web propia, así que ninguna respuesta los menciona más
 * allá de lo que el titular describe.
 */
export const faqs = [
	{
		question: '¿Dónde está La Antigua Maestranza?',
		answer:
			'En la C. Real, 50, con código postal 30201, en Cartagena (Murcia). La ficha publica el plus code J235+8X Cartagena y las coordenadas 37.6032548, -0.9900209.',
	},
	{
		question: '¿Cuál es el horario de La Antigua Maestranza?',
		answer:
			'La ficha lo da cerrado los lunes. De martes a jueves abre de 8:30 a 16:00; los viernes, de 8:30 a 16:00 y de 20:00 a 23:00; los sábados, de 9:00 a 16:00 y de 20:00 a 23:00; y los domingos, de 9:30 a 16:00. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, cafetería, restaurante mediterráneo y de cocina española. Su descripción habla de elaboración casera con productos de calidad, carta variada, menús cerrados para grupos y menú diario en días laborables. Tiene 4,4 sobre 5 con 1.055 reseñas y en las que destaca se mencionan el cachopo, el solomillo con salsa de trufa, la pata de pulpo frito y el rollito de bacalao.',
	},
	{
		question: '¿Se puede reservar y hay menú para grupos?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. Sí menciona, en la descripción del propio local, menús cerrados para grupos, así que para eso lo más directo es llamar al 968 50 02 35.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Real, 50 y las coordenadas 37.6032548, -0.9900209, en Cartagena. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code J235+8X Cartagena.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 9 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante mediterráneo y de cocina española en la C. Real, 50 de Cartagena, con elaboración casera, menú diario y menús cerrados para grupos.',
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
	servesCuisine: ['Mediterránea', 'Cocina española'],
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
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
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
