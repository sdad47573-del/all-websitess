/**
 * Datos de Casa Domingo (Calle Melchor Cobo Medina, s/n · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 15 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, horario semanal, coordenadas y servicios de accesibilidad.
 *
 * La ficha **no publica descripción del titular, ni precios ni carta**, así que no se reproduce
 * ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta web no
 * cita ninguna y enlaza al listado completo.
 *
 * Lo que no viene de la ficha y se dice igual: que es una taberna clásica del casco viejo
 * (así la describen las guías de la ciudad) y el Solete Repsol de otoño de 2023 (guía Repsol).
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taberna-casa-domingo.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '15 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Casa Domingo',
	shortName: 'Casa Domingo',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Melchor Cobo Medina, s/n»:
	 * aquí se desarrolla la abreviatura a «Calle», como en el resto del repositorio (donde «C.»
	 * pasa a «Calle»). El código postal 23001 y el municipio (Jaén) se publican tal cual.
	 */
	streetAddress: 'Calle Melchor Cobo Medina, s/n',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 620 79 27 83',
	latitude: 37.767719,
	longitude: -3.785879,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 745 reseñas). */
	rating: 4.4,
	reviewCount: 745,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Casa+Domingo/@37.767719,-3.785879,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd775769b3209:0x337c6bed76f399c7!8m2!3d37.767719!4d-3.785879!16s%2Fg%2F12qfyglf1?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJCTKbdnXXbQ0Rx5nzdu1rfDM&hl=es';

export const phoneHref = 'tel:+34620792783';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha en la fecha de consulta.
 *
 * Lunes, martes, jueves, viernes y sábado abre a mediodía (13:00–17:00) y por la noche
 * (20:00–24:00); el miércoles solo a mediodía; el domingo cierra. Puede cambiar: ante la duda,
 * llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes y martes', hours: '13:00–17:00 y 20:00–24:00' },
	{ days: 'Miércoles', hours: '13:00–17:00' },
	{ days: 'Jueves a sábado', hours: '13:00–17:00 y 20:00–24:00' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Tres entradas figuran como disponibles (acceso, aseo y asientos adaptados para sillas de
 * ruedas) y una como no disponible (aparcamiento adaptado). La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 745 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 745 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha (más dos datos de guías
 * externas que se marcan como tales: el carácter de taberna clásica y el Solete Repsol).
 */
export const faqs = [
	{
		question: '¿Dónde está Casa Domingo?',
		answer:
			'En la Calle Melchor Cobo Medina, s/n, con código postal 23001, en Jaén (Andalucía), en pleno casco viejo. La ficha publica las coordenadas 37.767719, -3.785879.',
	},
	{
		question: '¿Cuál es el horario de Casa Domingo?',
		answer:
			'Según la ficha: lunes, martes, jueves, viernes y sábado de 13:00 a 17:00 y de 20:00 a 24:00; miércoles solo de 13:00 a 17:00; domingo cerrado. Puede cambiar, así que confirma por teléfono antes de salir: 620 79 27 83.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Restaurante», sin un tipo de cocina concreto. Tiene 4,4 sobre 5 con 745 reseñas. Las guías de la ciudad lo describen como taberna clásica de chacinas, quesos y cocina tradicional jienense. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 620 79 27 83.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Melchor Cobo Medina, s/n y las coordenadas 37.767719, -3.785879. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles; el aparcamiento adaptado figura como no disponible.',
	},
	{
		question: '¿Tiene algún reconocimiento?',
		answer:
			'La guía Repsol le dio un Solete en otoño de 2023, dentro de su selección de sitios para comer bien a buen precio en el centro de las ciudades españolas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 15 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Taberna clásica en la Calle Melchor Cobo Medina, s/n de Jaén (casco viejo), con 4,4 sobre 5 con 745 reseñas.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante», sin cocina concreta. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '13:00',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '20:00',
			closes: '24:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Wednesday',
			opens: '13:00',
			closes: '17:00',
		},
	],
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
