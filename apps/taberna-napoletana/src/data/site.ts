/**
 * Datos de Taberna Napoletana (Calle Lanza, 9 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taberna-napoletana.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Taberna Napoletana',
	shortName: 'Taberna Napoletana',
	/** Primera categoría que publica Google: «Restaurante napolitano». */
	category: 'Restaurante napolitano',
	/** Las cuatro categorías que publica la ficha, en su orden. */
	categories: [
		'Restaurante napolitano',
		'Restaurante italiano',
		'Restaurante mediterráneo',
		'Pizzería',
	],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Lanza, 9»: aquí se desarrolla la
	 * abreviatura a «Calle», como en el resto del repositorio. El código postal 13004 y el municipio
	 * (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Lanza, 9',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 926 70 98 62',
	latitude: 38.9849367,
	longitude: -3.9256736,
	/** Plus code que publica la ficha. */
	plusCode: 'X3MF+XP Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 1196 reseñas). */
	rating: 4.3,
	reviewCount: 1196,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal. Aquí es una sola línea.
 */
export const descripcionLocal = 'Restaurante italiano y pizzería';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+Napoletana/@38.9849367,-3.9256736,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3400de725b1:0x97f564d859fd63d3!8m2!3d38.9849367!4d-3.9256736!16s%2Fg%2F11c3ww9ljt?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJsSXnDUDDaw0R02P9Wdhk9Zc&hl=es';

export const phoneHref = 'tel:+34926709862';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días menos el lunes y el martes, con dos turnos: comidas de 12:30 a 16:30 y cenas de
 * 20:00 a 24:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De miércoles a domingo, comidas de 12:30 a 16:30 y cenas de 20:00 a 24:00; lunes y martes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el acceso y el aseo adaptados figuran como disponibles, y el aparcamiento
 * adaptado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera escribe «economico»
 * sin tilde). Dos son de 4 sobre 5 y una de 5 sobre 5. Google guarda cada extracto entre comillas
 * dobles; aquí se quitan, porque la web ya presenta cada reseña entre « ».
 */
export const reviews = [
	{
		text: 'Un buen sitio para comer comida italiana pizzas y pastas y precio economico.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las pizzas ricas de masa, hechas al horno, quizá algo escasos los ingredientes.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Precios asequibles salvo las cervezas que me han parecido caras.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni carta, así que ninguna respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Taberna Napoletana?',
		answer:
			'En la Calle Lanza, 9, con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3MF+XP Ciudad Real y las coordenadas 38.9849367, -3.9256736.',
	},
	{
		question: '¿Cuál es el horario de Taberna Napoletana?',
		answer:
			'La ficha publica dos turnos de miércoles a domingo: comidas de 12:30 a 16:30 y cenas de 20:00 a 24:00. El lunes y el martes cierra. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como restaurante napolitano, restaurante italiano, restaurante mediterráneo y pizzería, y el propio local se describe en la ficha como restaurante italiano y pizzería. Tiene 4,3 sobre 5 con 1196 reseñas, y en las que destaca se habla de pizzas y pastas a buen precio y de la masa de las pizzas hecha al horno.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 926 70 98 62.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Lanza, 9 y las coordenadas 38.9849367, -3.9256736. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3MF+XP Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso y el aseo adaptados figuran como disponibles, y el aparcamiento adaptado para sillas de ruedas como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Cuál es el teléfono de Taberna Napoletana?',
		answer:
			'La ficha publica el 926 70 98 62, un teléfono fijo. Es el único número que aparece y esta web no añade ningún otro.',
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
		'Pizzería y restaurante napolitano en la Calle Lanza, 9 de Ciudad Real, con comidas y cenas de miércoles a domingo.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
	/** Traduce a cocina las categorías que publican una: napolitana, italiana y mediterránea. */
	servesCuisine: ['Napolitana', 'Italiana', 'Mediterránea'],
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
