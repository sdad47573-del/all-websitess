/**
 * Datos de Floret Flowers
 * (Carrer de Muntaner, 94 · 08036 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code,
 * horario semanal y accesibilidad.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. Los 3 extractos de reseñas se
 * reproducen literalmente y se citan como tales en la web. La ficha no publica precios, así que no
 * se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floret-flowers',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floret Flowers',
	shortName: 'Floret',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer de Muntaner, 94, Eixample, 08036
	 * Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de Muntaner, 94',
	district: 'Eixample',
	postalCode: '08036',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 930 06 88 52',
	latitude: 41.3885375,
	longitude: 2.1571659,
	/** Plus code que publica la ficha (completo: 8FH495Q4+CV). */
	plusCode: '95Q4+CV Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 44 reseñas). */
	rating: 4.8,
	reviewCount: 44,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Floristería acogedora y con encanto, especializada en arreglos florales elegantes y personalizables para cualquier ocasión. Ofrecemos una excelente relación calidad-precio y una cuidada selección de plantas verdes. ¡Visítanos y descubre nuestras creaciones!';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floret+Flowers/@41.3885375,2.1571659,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3bd6b7419a5:0x581eb0ec13b98c8b!8m2!3d41.3885375!4d2.1571659!16s%2Fg%2F11x2gv2kg6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJpRl0a72jpBIRi4y5E-ywHlg&hl=es';

export const phoneHref = 'tel:+34930068852';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días salvo el martes en dos turnos: mañana y tarde de 16:00 a 20:00. La
 * mañana abre a las 10:30 el domingo y el sábado, a las 11:00 de lunes a viernes salvo el
 * martes, y cierra a las 15:00; el martes cierra todo el día.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 15:00 · 16:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '15:00' },
			{ open: '16:00', close: '20:00' },
		],
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
		service: '11:00 – 15:00 · 16:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '15:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 15:00 · 16:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '15:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 15:00 · 16:00 – 20:00',
		shifts: [
			{ open: '11:00', close: '15:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:30 – 15:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '15:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:30 – 15:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '15:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos todos los días salvo el martes (mañana hasta las 15:00 y tarde de 16:00 a 20:00); martes cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Una atención exquisita, muy amables y atentas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Siempre me sorprende con arreglos florales de una elegancia única.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Trato inmejorable desde el primer momento.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floret Flowers?',
		answer:
			'En el Carrer de Muntaner, 94, con código postal 08036, en Barcelona, en Eixample. Publica el plus code 95Q4+CV Barcelona y las coordenadas 41.3885375, 2.1571659.',
	},
	{
		question: '¿Cuál es el horario de Floret Flowers?',
		answer:
			'La ficha publica dos turnos todos los días salvo el martes: mañana hasta las 15:00 (10:30 el fin de semana, 11:00 entre semana) y tarde de 16:00 a 20:00. El martes cierra. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice: «Floristería acogedora y con encanto, especializada en arreglos florales elegantes y personalizables para cualquier ocasión. Ofrecemos una excelente relación calidad-precio y una cuidada selección de plantas verdes. ¡Visítanos y descubre nuestras creaciones!»',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 930 06 88 52. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Muntaner, 94, en Eixample de Barcelona, y las coordenadas 41.3885375, 2.1571659. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95Q4+CV Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 44 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de atención exquisita, de arreglos florales de elegancia única y de trato inmejorable desde el primer momento. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el Carrer de Muntaner de Barcelona, en Eixample. Arreglos florales elegantes y personalizables, según su ficha.',
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
