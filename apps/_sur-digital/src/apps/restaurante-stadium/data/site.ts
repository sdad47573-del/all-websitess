/**
 * Datos del Restaurante Stadium (Plaza Troyano Salaverry, 3Z · 23008 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-stadium',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Stadium',
	shortName: 'Stadium',
	/**
	 * Categorías que publica Google, en su orden. La primera es la principal («Restaurante»); se
	 * recogen las dos sin añadir ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Pl. Troyano Salaverry, 3Z»: aquí se
	 * desarrolla la abreviatura a «Plaza», como en el resto del repositorio. El número que publica
	 * la ficha es «3Z».
	 */
	streetAddress: 'Plaza Troyano Salaverry, 3Z',
	postalCode: '23008',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 25 76 08',
	latitude: 37.7742119,
	longitude: -3.7865724,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6F7+M9 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 787 reseñas). */
	rating: 4.3,
	reviewCount: 787,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Stadium/@37.7742119,-3.7865724,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70bd3c73643:0x7ce2dd852ac09e14!8m2!3d37.7742119!4d-3.7865724!16s%2Fg%2F1tg2fv5w?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJQzbH0wvXbQ0RFJ7AKoXd4nw&hl=es';

export const phoneHref = 'tel:+34953257608';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * todos los días al mediodía de 12:00 a 17:00 y por la noche de 20:00 a 0:30, con dos excepciones:
 * el martes solo sirve el mediodía y el miércoles cierra todo el día.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Ese día el local abre con su horario habitual, así que el aviso se recoge
 * en el texto de la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de 12:00 a 17:00 y cena de 20:00 a 0:30; el martes solo abre al mediodía y el miércoles cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: el acceso, el aseo y los asientos adaptados están disponibles, y el
 * aparcamiento adaptado está marcado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y la tercera
 * de 4 sobre 5, y se reproducen igual.
 */
export const reviews = [
	{
		text: 'Buena cocina exquisita forma de comer pescado en Jaen',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos pulpo 🐙, ceviche, bacalao, presa ibérica y chuletitas de cordero.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen restaurante y mejor sitio para raciones y tapeo',
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
		question: '¿Dónde está el Restaurante Stadium?',
		answer:
			'En la plaza Troyano Salaverry, 3Z, con código postal 23008, en Jaén (Andalucía). La ficha publica el plus code Q6F7+M9 Jaén y las coordenadas 37.7742119, -3.7865724.',
	},
	{
		question: '¿Cuál es el horario del Restaurante Stadium?',
		answer:
			'Abre todos los días al mediodía de 12:00 a 17:00 y por la noche de 20:00 a 0:30, con dos excepciones: el martes solo sirve el mediodía y el miércoles cierra todo el día. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como restaurante y restaurante mediterráneo. Tiene 4,3 sobre 5 con 787 reseñas, y en las tres reseñas que destaca se habla del pescado, de un pedido con pulpo, ceviche, bacalao, presa ibérica y chuletitas de cordero, y de las raciones y el tapeo.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 25 76 08.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaza Troyano Salaverry, 3Z y las coordenadas 37.7742119, -3.7865724. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6F7+M9 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y marca como no disponible el aparcamiento adaptado. Son las cuatro entradas de accesibilidad que publica.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 25 76 08.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante mediterráneo en la plaza Troyano Salaverry, 3Z de Jaén, con mediodía y cena; el martes solo abre al mediodía y el miércoles cierra.',
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
	/* `servesCuisine` traduce la categoría «Restaurante mediterráneo» que publica Google. */
	servesCuisine: ['Cocina mediterránea'],
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
