/**
 * Datos de Descanso del icue (Calle Jabonerías, 9 · 30201 Cartagena).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el titular y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://descanso-del-icue.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (con «icue» en minúscula). */
	name: 'Descanso del icue',
	shortName: 'El Descanso',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa como
	 * categoría principal), «Restaurante mediterráneo» y «Restaurante de cocina española».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo', 'Restaurante de cocina española'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Calle Jabonerías, 9',
	postalCode: '30201',
	city: 'Cartagena',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 968 00 36 43',
	latitude: 37.6030025,
	longitude: -0.9885086,
	/** Plus code que publica la ficha. */
	plusCode: 'J236+6H Cartagena',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 1.031 reseñas). */
	rating: 4.1,
	reviewCount: 1031,
	site: site.siteUrl,
} as const;

/**
 * Descripción que publica el titular en la ficha, citada literal (sin corregir sus tildes ni su
 * puntuación). Es el único texto descriptivo que firma el propio local.
 */
export const descripcion =
	'El nuevo descanso del icue mantiene la esencia del meson clasico de toda la vida con nuestro toque modernizado y sobre todo una carta basada en productos a la brasa y de mucha calidad';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Descanso+del+icue/@37.6030025,-0.9885086,17z/data=!3m1!4b1!4m6!3m5!1s0xd6342258f217e07:0x50895e0f7a981012!8m2!3d37.6030025!4d-0.9885086!16s%2Fg%2F11bytqlkss?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJB34hjyVCYw0REhCYeg9eiVA&hl=es';

export const phoneHref = 'tel:+34968003643';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días: de 11:00 a 16:00 (los domingos hasta las 17:00) y, de lunes a sábado, también de
 * noche, de 19:00 a 24:00. El domingo no hay turno de noche.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 16:00 · 19:00 – 24:00',
		shifts: [
			{ open: '11:00', close: '16:00' },
			{ open: '19:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 17:00',
		shifts: [{ open: '11:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abierto todos los días; mediodía de 11:00 a 16:00 (domingos hasta las 17:00) y noches de lunes a sábado de 19:00 a 24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el acceso y los asientos adaptados figuran como disponibles, y el aparcamiento
 * adaptado como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Una es de 5 sobre 5, otra de 4 y
 * otra de 3.
 */
export const reviews = [
	{
		text: 'Los camareros son muy amables y las raciones que pedimos estaban muy ricas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Comida correcta, croquetas y calamares muy ricos, la tosta bastante escasa.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La tapa de tortilla de setas y trufa muy rica.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Descanso del icue?',
		answer:
			'En la Calle Jabonerías, 9, con código postal 30201, en Cartagena (Murcia). La ficha publica el plus code J236+6H Cartagena y las coordenadas 37.6030025, -0.9885086.',
	},
	{
		question: '¿Cuál es el horario de Descanso del icue?',
		answer:
			'La ficha lo da abierto todos los días. De mediodía, de 11:00 a 16:00, y los domingos hasta las 17:00. Por la noche abre de lunes a sábado, de 19:00 a 24:00; el domingo no hay turno de noche. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como restaurante, restaurante mediterráneo y restaurante de cocina española. Su descripción habla de mantener la esencia del mesón clásico con una carta basada en productos a la brasa. Tiene 4,1 sobre 5 con 1.031 reseñas, y en las que destaca se habla de la amabilidad del servicio, de las raciones y de platos como las croquetas, los calamares o la tapa de tortilla de setas y trufa.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 968 00 36 43.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Jabonerías, 9 y las coordenadas 37.6030025, -0.9885086, en el centro de Cartagena. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code J236+6H Cartagena.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado para sillas de ruedas como no disponible.',
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
		'Restaurante de brasa y cocina mediterránea en la Calle Jabonerías, 9 de Cartagena, abierto todos los días y con cenas de lunes a sábado.',
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
	servesCuisine: ['Mediterránea', 'Española'],
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
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
