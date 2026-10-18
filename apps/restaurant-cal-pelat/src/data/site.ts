/**
 * Datos de Restaurant Cal Pelat
 * (Carrer Tarragona, 2 · 43713 Sant Jaume dels Domenys, Tarragona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, descripción del titular y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta ni precios, así que aquí no se reproducen. Los textos de
 * las reseñas y la descripción se copian literalmente y se citan como tales; la ficha no publica
 * el nombre de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen
 * a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurant-cal-pelat.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Cal Pelat',
	shortName: 'Cal Pelat',
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer Tarragona, 2',
	district: 'Sant Jaume dels Domenys',
	postalCode: '43713',
	city: 'Sant Jaume dels Domenys',
	province: 'Tarragona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 977 15 21 15',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '977 15 21 15',
	latitude: 41.2860237,
	longitude: 1.5609728,
	/** Plus code que publica la ficha (completo: 8FH37HP6+C9). */
	plusCode: '7HP6+C9 Sant Jaume dels Domenys',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 139 reseñas). */
	rating: 4.7,
	reviewCount: 139,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Cal+Pelat/@41.2860237,1.5609728,17z/data=!3m1!4b1!4m6!3m5!1s0x12a475b642347073:0x56daefd5e188d3de!8m2!3d41.2860237!4d1.5609728!16s%2Fg%2F11md1qn2zv?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJc3A0QrZ1pBIR3tOI4dXv2lY&hl=es';

export const phoneHref = 'tel:+34977152115';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal =
	'Restaurante con brasa. Desayunos de tenedor de martes a domingo. Menú diario de martes a viernes. Menú festivo sábado y domingo. Tapas sábado y domingo.';

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. De martes a viernes abre de 7:00 a 16:00; sábado y domingo abre de 8:00 a 16:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '7:00 – 16:00',
		shifts: [{ open: '7:00', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 16:00',
		shifts: [{ open: '7:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 16:00',
		shifts: [{ open: '7:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 16:00',
		shifts: [{ open: '7:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 16:00',
		shifts: [{ open: '8:00', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 16:00',
		shifts: [{ open: '8:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes cerrado; martes a viernes de 7:00 a 16:00; sábado y domingo de 8:00 a 16:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Martes a domingo · lunes cerrado';

/**
 * Accesibilidad que publica la ficha.
 *
 * Asientos, aseo y aparcamiento adaptados disponibles.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Hemos venido a comer arroz y nos a sorprendido mucho la calidad !',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Salmorejo con atún y huevo duro.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Menú de medio día a un precio razonable y comida casera',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant Cal Pelat?',
		answer:
			'En el Carrer Tarragona, 2, con código postal 43713, en Sant Jaume dels Domenys, Tarragona. Publica el plus code 7HP6+C9 Sant Jaume dels Domenys y las coordenadas 41.2860237, 1.5609728.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que el lunes cierra; de martes a viernes abre de 7:00 a 16:00; sábado y domingo abre de 8:00 a 16:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica únicamente como restaurante. Su descripción dice: restaurante con brasa, desayunos de tenedor de martes a domingo, menú diario de martes a viernes, menú festivo sábado y domingo, y tapas sábado y domingo. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 977 15 21 15. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Tarragona, 2, en Sant Jaume dels Domenys, y las coordenadas 41.2860237, 1.5609728. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica asientos, aseo y aparcamiento adaptados para sillas de ruedas como disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 139 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante con brasa en Sant Jaume dels Domenys (Tarragona): desayunos de tenedor, menú diario y tapas. Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange` ni `menu`: la ficha no publica precios ni carta. */
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
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
