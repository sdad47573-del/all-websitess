/**
 * Datos de Mesón Antonio's (Calle las Bernardas, 8 · 23001 Jaén).
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
	siteUrl: 'https://www.sur-digital.com/meson-antonios',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "Mesón Antonio's",
	shortName: 'Mesón Antonio',
	/**
	 * Categorías que publica Google, en su orden. La primera es la principal («Restaurante»); se
	 * recogen las tres sin añadir ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Taberna', 'Restaurante de cocina española'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. las Bernardas, 8»: aquí se
	 * desarrolla la abreviatura a «Calle», como en el resto del repositorio.
	 */
	streetAddress: 'Calle las Bernardas, 8',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 23 51 30',
	latitude: 37.7665817,
	longitude: -3.7855658,
	/** Plus code que publica la ficha. */
	plusCode: 'Q687+JQ Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 617 reseñas). */
	rating: 4.3,
	reviewCount: 617,
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
	"https://www.google.com/maps/place/Mes%C3%B3n+Antonio's/@37.7665817,-3.7855658,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd775779e03d5:0xe139e4cc9787f1bc!8m2!3d37.7665817!4d-3.7855658!16s%2Fg%2F1tycx_k1?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ1QOed3XXbQ0RvPGHl8zkOeE&hl=es';

export const phoneHref = 'tel:+34953235130';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * cierra lunes y martes y abre de miércoles a domingo con dos turnos: mediodía de 13:00 a 17:00 y
 * cena de 20:30 a la 1:00.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Ese día ya cierra por descanso semanal, así que el aviso se recoge en el
 * texto de la sección de horario y no en la tabla.
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
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De miércoles a domingo · mediodía desde las 13:00 y cena desde las 20:30 · lunes y martes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres están disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. En esta ficha las tres son de 5;
 * la tercera va sin puntuación y se reproduce igual.
 */
export const reviews = [
	{
		text: 'Atención exquisita, solomillo al Jerez y flamenquin al roquefort delicioso.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos cebolletas fritas y gambas al ajillo, muy ricos los dos platos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena comida Raciones gigantes buen ambiente',
		rating: 5,
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
		question: "¿Dónde está Mesón Antonio's?",
		answer:
			'En la calle las Bernardas, 8, con código postal 23001, en Jaén (Andalucía). La ficha publica el plus code Q687+JQ Jaén y las coordenadas 37.7665817, -3.7855658.',
	},
	{
		question: "¿Cuál es el horario de Mesón Antonio's?",
		answer:
			'Cierra los lunes y los martes. De miércoles a domingo abre al mediodía de 13:00 a 17:00 y por la noche de 20:30 a la 1:00. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; como ese día ya cierra por descanso semanal, conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como restaurante, taberna y restaurante de cocina española. Tiene 4,3 sobre 5 con 617 reseñas, y en las tres reseñas que destaca se habla del solomillo al Jerez y un flamenquín al roquefort, de las cebolletas fritas y las gambas al ajillo, y de las raciones y el ambiente.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 23 51 30.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle las Bernardas, 8 y las coordenadas 37.7665817, -3.7855658. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q687+JQ Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas: son las tres entradas de accesibilidad que publica, y ninguna está marcada como no disponible.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 23 51 30.',
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
		'Restaurante y taberna de cocina española en la calle las Bernardas, 8 de Jaén, con mediodía y cena de miércoles a domingo; cierra lunes y martes.',
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
	/* `servesCuisine` traduce la categoría «Restaurante de cocina española» que publica Google. */
	servesCuisine: ['Cocina española'],
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
