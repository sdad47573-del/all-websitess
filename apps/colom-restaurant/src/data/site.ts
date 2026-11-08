/**
 * Datos de Colom Restaurant
 * (Carrer dels Escudellers, 33 · 08002 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 17 de octubre de 2026:
 * nombre, dirección, distrito, teléfono, categorías, valoración con número de reseñas,
 * coordenadas, plus code, horario semanal, accesibilidad, la etiqueta con la que Google lo resume
 * y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios ni datos de reserva,
 * así que aquí no se reproducen. Los textos de las reseñas se copian literalmente, con su
 * puntuación original, y se citan como tales; la ficha no publica el nombre de quienes las
 * firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://colom-restaurant.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Colom Restaurant',
	shortName: 'Colom',
	/** Primera categoría que publica Google; el resto va en `categories`. */
	category: 'Restaurante mediterráneo',
	categories: [
		'Restaurante mediterráneo',
		'Marisquería',
		'Restaurante de cocina española',
		'Restaurante especializado en tapas',
	],
	/** Resumen editorial con el que Google presenta el local en su ficha. */
	tagline: 'Restaurante sencillo de cocina tradicional',
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer dels Escudellers, 33',
	district: 'Ciutat Vella',
	postalCode: '08002',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 933 01 85 29',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '933 01 85 29',
	latitude: 41.3798528,
	longitude: 2.1765,
	/** Plus code que publica la ficha (completo: 8FH495HG+WJ). */
	plusCode: '95HG+WJ Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 37.554 reseñas). */
	rating: 4.7,
	reviewCount: 37554,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Colom+Restaurant/@41.3798528,2.1765,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a257ced5616f:0x6146064f21d2deb1!8m2!3d41.3798528!4d2.1765!16s%2Fg%2F11cfjclkz?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJb2HVzleipBIRsd7SIU8GRmE&hl=es';

export const phoneHref = 'tel:+34933018529';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 12:30 a 24:00, sin turno de noche ni cierre distinto en ningún día.
 * Es el horario de la ficha consultada el 17 de octubre de 2026.
 */
export const hours = [
	{ day: 'Lunes', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '12:30 – 24:00', shifts: [{ open: '12:30', close: '24:00' }], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 12:30 a 24:00';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas: acceso, aseo y asientos adaptados figuran como disponibles y el
 * aparcamiento adaptado, como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Paella deliciosa, muy buena atención de Mamegor, pasamos un buen rato.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Excelente servicio, meseros muy amables, arroz y sangría deliciosos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Pero el trato fue increible, que pasada de camareros !!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Colom Restaurant?',
		answer:
			'En el Carrer dels Escudellers, 33, con código postal 08002, en el distrito de Ciutat Vella, Barcelona. Publica el plus code 95HG+WJ Barcelona y las coordenadas 41.3798528, 2.1765.',
	},
	{
		question: '¿Cuál es el horario de Colom Restaurant?',
		answer:
			'La ficha publica un horario continuo de 12:30 a 24:00 todos los días de la semana. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo, marisquería, restaurante de cocina española y restaurante especializado en tapas. Su resumen editorial lo describe como «Restaurante sencillo de cocina tradicional». La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 933 01 85 29. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer dels Escudellers, 33, en el distrito de Ciutat Vella, Barcelona, y las coordenadas 41.3798528, 2.1765. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: acceso para sillas de ruedas, aseo adaptado y asientos adaptados, que figuran como disponibles, y aparcamiento adaptado, que figura como no disponible.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 37.554 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿Se puede reservar o ver la carta en esta web?',
		answer:
			'No. La ficha no publica web propia, carta, precios ni un sistema de reservas, así que esta web no reproduce ninguno de esos datos. Para resolver cualquier duda, lo más rápido es llamar al 933 01 85 29.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las etiquetas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: `${business.tagline}. Restaurante mediterráneo y marisquería en el Carrer dels Escudellers, Ciutat Vella, Barcelona.`,
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
	servesCuisine: ['Mediterránea', 'Española', 'Marisco', 'Tapas'],
	/* Sin `priceRange`, `menu` ni `acceptsReservations`: la ficha no publica ninguno de los tres. */
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
