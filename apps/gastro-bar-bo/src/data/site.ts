/**
 * Datos de Gastro Bar Bo (Av. de la Marina Baixa, 3, local 13 · 03502 Benidorm, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y la
 * descripción del titular.
 *
 * Es la segunda web del grupo que reproduce una descripción del titular, y esta viene con emoji y
 * con dos saltos de línea: se reproduce literal, tal cual la escribe el negocio.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://gastro-bar-bo.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Gastro Bar Bo',
	shortName: 'Bo',
	/** Categoría que publica Google en esta ficha: «Restaurante familiar», la única. */
	category: 'Restaurante familiar',
	categories: ['Restaurante familiar'],
	/**
	 * Dirección publicada en la ficha: Av. de la Marina Baixa, 3, local 13 (03502 Benidorm).
	 *
	 * La dirección formateada que publica Google es «Cala de, Av. de la Marina Baixa, 3, local 13,
	 * 03502 Benidorm, Alicante». El componente «Cala de» no forma parte de la calle: se recoge
	 * aparte y se advierte en las preguntas frecuentes, sin meterlo dentro de la dirección.
	 */
	streetAddress: 'Av. de la Marina Baixa, 3, local 13',
	/** Componente de zona que Google guarda en los datos del lugar, fuera de la dirección formateada. */
	barrio: 'Cala de',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha: es un fijo de Benidorm. */
	phone: '+34 965 21 49 87',
	latitude: 38.5269155,
	longitude: -0.166096,
	/** Plus code que publica la ficha. */
	plusCode: 'GRGM+QH Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 307 reseñas). */
	rating: 4.9,
	reviewCount: 307,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo y conservando sus tres líneas y el emoji. La portada lo pinta respetando
 * los saltos de línea con `white-space: pre-line`.
 */
export const descripcionLocal =
	'🌿 Gastro Bar Bo 🌿\nUn lugar creado con amor, donde cada plato cuenta nuestra historia. Sabor, pasión y un ambiente que te hace sentir en casa.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Gastro+Bar+Bo/@38.5269155,-0.166096,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b9d238047ad:0xa37a22ddecf7d24b!8m2!3d38.5269155!4d-0.166096!16s%2Fg%2F11td8hrnj0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJrUeAI50bYg0RS9L37N0ieqM&hl=es';

/** Es un fijo de Benidorm (965), y así se publica el enlace de llamada. */
export const phoneHref = 'tel:+34965214987';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre y trae
 * los siete días. El local abre en dos turnos, de 10:00 a 16:00 y de 19:00 a 22:00, todos los días
 * menos el lunes, que cierra.
 *
 * La ficha trae dos marcas de festivo, y ambas son avisos de que el horario podría ser diferente:
 * el viernes 9, «Día de la Comunidad Valenciana», y el lunes 12, «Fiesta Nacional de España».
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
		service: '10:00 – 16:00 y 19:00 – 22:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '19:00', close: '22:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 16:00 y 19:00 – 22:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '19:00', close: '22:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 16:00 y 19:00 – 22:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '19:00', close: '22:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 16:00 y 19:00 – 22:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '19:00', close: '22:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 16:00 y 19:00 – 22:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '19:00', close: '22:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 16:00 y 19:00 – 22:00',
		shifts: [
			{ open: '10:00', close: '16:00' },
			{ open: '19:00', close: '22:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 10:00 a 16:00 y de 19:00 a 22:00 todos los días menos el lunes, que cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Raciones abundantes y de buena calidad',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un lugar tranquilo con muy buena comida y muy buen servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hemos comido de tapeo y estaba buenísimo todo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta inventa una tarifa ni un menú.
 */
export const faqs = [
	{
		question: '¿Dónde está Gastro Bar Bo?',
		answer:
			'En la Av. de la Marina Baixa, 3, local 13, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GRGM+QH Benidorm y las coordenadas 38.5269155, -0.166096. Los datos del lugar guardan además un componente «Cala de» que no forma parte de la calle; conviene confirmarlo con el local.',
	},
	{
		question: '¿Cuál es el horario de Gastro Bar Bo?',
		answer:
			'La ficha publica dos turnos, de 10:00 a 16:00 y de 19:00 a 22:00, todos los días menos el lunes, que cierra. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, ambas con el aviso de que el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Restaurante familiar» y no declara una cocina concreta. Tiene 4,9 sobre 5 con 307 reseñas, y el propio local describe un lugar creado con amor, donde cada plato cuenta su historia, con sabor, pasión y un ambiente que hace sentir en casa. En las reseñas que destaca se habla de raciones abundantes, de buena comida y de un servicio muy bueno.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios, así que esta web no reproduce ninguno. Para saber el menú y el precio de hoy hay que llamar al 965 21 49 87.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 965 21 49 87.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de la Marina Baixa, 3, local 13 y las coordenadas 38.5269155, -0.166096. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRGM+QH Benidorm.',
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
		'Restaurante familiar en la Av. de la Marina Baixa, 3, local 13 de Benidorm, con dos turnos de 10:00 a 16:00 y de 19:00 a 22:00 todos los días menos el lunes.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante familiar», sin cocina. */
	/* Sin `priceRange`: la ficha no publica carta ni precios. */
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
