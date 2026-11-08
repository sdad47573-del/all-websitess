/**
 * Datos del Restaurante Montserrah Los Llanos (Calle de los Herreros, 29 · 23170 Jaén).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-montserrah-los-llanos',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Montserrah Los Llanos',
	shortName: 'Montserrah Los Llanos',
	/**
	 * Categorías que publica Google, en su orden. La única es «Bar restaurante», que se usa como
	 * `category` y se recoge igual en `categories`, sin añadir ninguna otra.
	 */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. de los Herreros, 29»: aquí se
	 * desarrolla la abreviatura a «Calle», como en el resto del repositorio.
	 */
	streetAddress: 'Calle de los Herreros, 29',
	postalCode: '23170',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 88 24 83',
	latitude: 37.7788644,
	longitude: -3.7593618,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6HR+G7 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 137 reseñas). */
	rating: 4.4,
	reviewCount: 137,
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
	'https://www.google.com/maps/place/Restaurante+Montserrah+Los+Llanos/@37.7788644,-3.7593618,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd7fec8abd16b:0x5561d20f515ee99!8m2!3d37.7788644!4d-3.7593618!16s%2Fg%2F11qr35prc0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJa9GryP7XbQ0Rme4V9SAdVgU&hl=es';

export const phoneHref = 'tel:+34953882483';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * un solo turno, de 6:30 a 16:00, de lunes a sábado, y cierra todo el domingo.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Ese día el local abre con su horario habitual, así que el aviso se recoge
 * en el texto de la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:30 – 16:00',
		shifts: [{ open: '06:30', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:30 – 16:00',
		shifts: [{ open: '06:30', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:30 – 16:00',
		shifts: [{ open: '06:30', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:30 – 16:00',
		shifts: [{ open: '06:30', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:30 – 16:00',
		shifts: [{ open: '06:30', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:30 – 16:00',
		shifts: [{ open: '06:30', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a sábado, de 6:30 a 16:00 en un solo turno; los domingos cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos están disponibles: el aseo y los asientos adaptados para sillas de
 * ruedas. La ficha no publica ni el acceso ni el aparcamiento adaptados, así que no se declaran.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5 y se
 * reproducen igual.
 */
export const reviews = [
	{
		text: 'Buen sitio para bocadillos y para comer,y para tomar café,y buen ambiente.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Camareros encantadores y bocatas buenísimos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'De lujo, las tostadas aceite tomate riquisima.',
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
		question: '¿Dónde está el Restaurante Montserrah Los Llanos?',
		answer:
			'En la calle de los Herreros, 29, con código postal 23170, en Jaén (Andalucía). La ficha publica el plus code Q6HR+G7 Jaén y las coordenadas 37.7788644, -3.7593618.',
	},
	{
		question: '¿Cuál es el horario del Restaurante Montserrah Los Llanos?',
		answer:
			'Abre de lunes a sábado en un solo turno, de 6:30 a 16:00, y cierra los domingos. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica solo como bar restaurante, sin un tipo de cocina concreto. Tiene 4,4 sobre 5 con 137 reseñas, y en las tres reseñas que destaca se habla de los bocadillos, del café y el ambiente, de los camareros y los bocatas, y de las tostadas de aceite y tomate.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 88 24 83.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de los Herreros, 29 y las coordenadas 37.7788644, -3.7593618. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6HR+G7 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el aseo y los asientos adaptados para sillas de ruedas: son las dos únicas entradas de accesibilidad que publica, y ninguna está marcada como no disponible.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 88 24 83.',
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
		'Bar restaurante en la calle de los Herreros, 29 de Jaén, abierto de 6:30 a 16:00 de lunes a sábado y cerrado los domingos.',
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
	/* Sin `servesCuisine`: Google publica la categoría «Bar restaurante», que no declara cocina. */
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
