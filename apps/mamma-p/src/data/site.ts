/**
 * Datos de Restaurante Mamma P (Carrer Pau Casals, 10 · 03581 L'Alfàs del Pi, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * Es la primera web del grupo que no está en Benidorm: L'Alfàs del Pi. La provincia sigue siendo
 * Alicante, así que `geo.region` mantiene el código `ES-A`.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://mamma-p.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Mamma P',
	shortName: 'Mamma P',
	/** Categoría que publica Google en esta ficha: «Restaurante italiano», la única. */
	category: 'Restaurante italiano',
	categories: ['Restaurante italiano'],
	/** Dirección publicada en la ficha: Carrer Pau Casals, 10 (03581 L'Alfàs del Pi). */
	streetAddress: 'Carrer Pau Casals, 10',
	postalCode: '03581',
	city: "L'Alfàs del Pi",
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 865 88 54 27',
	latitude: 38.5758798,
	longitude: -0.0675672,
	/** Plus code que publica la ficha (Google lo escribe «Alfaz del Pi», sin apóstrofo). */
	plusCode: 'HWGJ+9X Alfaz del Pi',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 753 reseñas). */
	rating: 4.7,
	reviewCount: 753,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo. Aquí es una sola frase, en italiano.
 */
export const descripcionLocal = 'Un italiano vero';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Mamma+P/@38.5758798,-0.0675672,17z/data=!3m1!4b1!4m6!3m5!1s0xd6201134b22626d:0xf32e5f0971711a0f!8m2!3d38.5758798!4d-0.0675672!16s%2Fg%2F11t4_msb26?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJbWIiSxMBYg0RDxpxcQlfLvM&hl=es';

export const phoneHref = 'tel:+34865885427';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre y trae
 * los siete días. El local mantiene un tramo continuo de 13:00 a 23:00 todos los días menos el
 * miércoles, que cierra.
 *
 * La ficha trae dos marcas de festivo, y ambas son avisos de que el horario podría ser diferente:
 * el viernes 9, «Día de la Comunidad Valenciana», y el lunes 12, «Fiesta Nacional de España».
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
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
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 13:00 a 23:00 todos los días menos el miércoles, que cierra';

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
 * Se citan tal cual, sin corregir su redacción ni su puntuación, y con la nota que publica cada
 * una. Aquí la ficha mezcla dos de 5 sobre 5 con una de 3 sobre 5: es la primera web del grupo con
 * una reseña destacada de tres estrellas, y se muestra con su nota real, sin omitirla ni
 * redondearla. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya
 * presenta cada reseña entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Pizzas y pasta estupendas y un servicio excelente.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos una pizza con trufa y habia tomate en la pizza y no saboreaba bien.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las pizzas increíbles, la pasta impresionante, la carne buenísima.',
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
		question: '¿Dónde está Restaurante Mamma P?',
		answer:
			"En el Carrer Pau Casals, 10, con código postal 03581, en L'Alfàs del Pi (Alicante). La ficha publica el plus code HWGJ+9X Alfaz del Pi y las coordenadas 38.5758798, -0.0675672.",
	},
	{
		question: '¿Cuál es el horario de Restaurante Mamma P?',
		answer:
			'La ficha publica un tramo continuo de 13:00 a 23:00 todos los días menos el miércoles, que cierra. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, ambas con el aviso de que el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante italiano. Tiene 4,7 sobre 5 con 753 reseñas, y el propio local describe su cocina con una sola frase en italiano: «Un italiano vero». En las reseñas que destaca se habla de las pizzas y la pasta, de la carne y del servicio; una de ellas, de 3 sobre 5, es una queja por una pizza con trufa.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios, así que esta web no reproduce ninguno. Para saber el menú y el precio de hoy hay que llamar al 865 88 54 27.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 865 88 54 27.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Carrer Pau Casals, 10 y las coordenadas 38.5758798, -0.0675672. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HWGJ+9X, en L'Alfàs del Pi.",
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
		"Restaurante italiano en el Carrer Pau Casals, 10 de L'Alfàs del Pi, con pizzas, pasta y carnes, y horario de 13:00 a 23:00 todos los días menos el miércoles.",
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
	/* `servesCuisine` traduce la única categoría que publica Google, «Restaurante italiano». */
	servesCuisine: ['Italiana'],
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
