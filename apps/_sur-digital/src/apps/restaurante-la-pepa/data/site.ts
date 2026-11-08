/**
 * Datos de Restaurante La_Pepa (Pl. Resolana, 2 · 21570 Santa Bárbara de Casa, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, distintivo, valoración con número de reseñas, coordenadas, plus code,
 * horario semanal, los servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-pepa',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con su guion bajo. */
	name: 'Restaurante La_Pepa',
	shortName: 'La_Pepa',
	/** Única categoría que publica Google: el tipo genérico de establecimiento. */
	category: 'Restaurante',
	/** Las categorías de la ficha, en su orden: aquí solo hay una. */
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Pl. Resolana, 2',
	postalCode: '21570',
	city: 'Santa Bárbara de Casa',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 616 53 42 15',
	latitude: 37.796557,
	longitude: -7.1881817,
	/** Plus code que publica la ficha. */
	plusCode: 'QRW6+JP Santa Bárbara de Casa',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 30 reseñas). */
	rating: 4.8,
	reviewCount: 30,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, sin corregir su redacción ni su puntuación (incluido «andevalo»
 * escrito sin tilde, que es como lo publica la ficha). Va atribuida a la ficha y es el único
 * texto de este tipo que publica.
 */
export const descripcionLocal =
	'Establecimiento con carta de la mejor carne ibérica del andevalo y pescado directo de lonja comprado semanalmente, menús para grupos o quedadas de empresa y organización de alguna que otra fiesta ya que nuestro local cuenta con todas las comodidades tanto para un público específico, como para otro público más joven.';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Se admiten perros». Es el mismo distintivo que aparece en las fichas de `daivel`
 * y `la-talega`. Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Se admiten perros';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La_Pepa/@37.796557,-7.1881817,17z/data=!3m1!4b1!4m6!3m5!1s0xd10f92797bf05b3:0x6e546d1a3c466de6!8m2!3d37.796557!4d-7.1881817!16s%2Fg%2F11y1d1k602?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJswW_lyf5EA0R5m1GPBptVG4&hl=es';

export const phoneHref = 'tel:+34616534215';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * **solo abre viernes, sábado y domingo**, con **dos turnos**: de 9:00 a 17:00 y de 20:00 a 1:00.
 * De lunes a jueves figura como cerrado.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, **el horario podría ser
 * diferente**, aunque ese día la propia ficha lo da como cerrado: se recoge el aviso porque la
 * ficha lo publica, sin deducir de él ninguna apertura.
 *
 * El turno de noche se cierra a la 1:00, es decir, ya del día siguiente; la ficha lo escribe
 * «1:00» y en los datos estructurados se normaliza a `01:00`, como en `abaceria-tinta-de-toro`
 * con su cierre a las 02:00.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 17:00 · 20:00 – 1:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '20:00', close: '01:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 17:00 · 20:00 – 1:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '20:00', close: '01:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 17:00 · 20:00 – 1:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '20:00', close: '01:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Viernes, sábado y domingo, de 9:00 a 17:00 y de 20:00 a 1:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son tres y se citan tal cual, sin corregir su redacción ni su puntuación. Google las guarda
 * entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se
 * reproducen. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buenisima comida, buenos precios y sobre todo un servicio fantástico.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Super buen trato, comida riquísima 100% recomendable, super amables',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buenísima la comida y el trato.',
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
		question: '¿Dónde está Restaurante La_Pepa?',
		answer:
			'En la Pl. Resolana, 2, con código postal 21570, en Santa Bárbara de Casa (Huelva). La ficha publica el plus code QRW6+JP Santa Bárbara de Casa y las coordenadas 37.796557, -7.1881817.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La_Pepa?',
		answer:
			'La ficha publica que el local abre solo viernes, sábado y domingo, con dos turnos: de 9:00 a 17:00 y de 20:00 a 1:00 del día siguiente. De lunes a jueves figura como cerrado. El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente, aunque ese día la ficha lo da como cerrado. Es el horario publicado en la ficha consultada el 10 de octubre de 2026 y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google solo publica la categoría genérica «Restaurante». El titular describe la ficha como establecimiento «con carta de la mejor carne ibérica del andevalo y pescado directo de lonja comprado semanalmente», además de menús para grupos o quedadas de empresa. En las tres reseñas que destaca la ficha se habla de la comida, los precios y el trato. La ficha no publica carta ni precios, así que la web no los reproduce.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha muestra junto al nombre el distintivo «Se admiten perros». Esta web lo recoge tal cual y no lo amplía ni lo interpreta: para saber si hay alguna condición, lo mejor es llamar al 616 53 42 15.',
	},
	{
		question: '¿Se pueden reservar menús para grupos?',
		answer:
			'Es lo que publica el titular en su propia descripción: «menús para grupos o quedadas de empresa». La ficha no publica ni precios ni un sistema de reservas, y esta web no permite reservar: para concretarlo hay que llamar al 616 53 42 15.',
	},
	{
		question: '¿Es accesible para sillas de ruedas?',
		answer:
			'La ficha publica tres servicios de accesibilidad y los tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ningún otro dato de accesibilidad y esta web no añade ninguno.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Pl. Resolana, 2 de Santa Bárbara de Casa, abierto viernes, sábado y domingo con turnos de 9:00 a 17:00 y de 20:00 a 1:00.',
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
	/*
	 * Sin `servesCuisine`: la única categoría que publica Google es «Restaurante», el tipo genérico
	 * de establecimiento, que no declara ninguna cocina concreta y no se inventa.
	 */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
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
