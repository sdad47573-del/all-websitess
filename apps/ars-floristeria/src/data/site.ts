/**
 * Datos de Ars Floristeria
 * (Calle de Antonio López, 154 · 28026 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 17 de octubre de 2026:
 * nombre, dirección, distrito, teléfono, categoría, valoración con número de reseñas,
 * coordenadas, plus code, horario semanal y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, catálogo, precios, accesibilidad ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian literalmente,
 * con su puntuación original, y se citan como tales; la ficha no publica el nombre de quienes las
 * firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://ars-floristeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Ars Floristeria',
	shortName: 'Ars',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Calle de Antonio López, 154',
	district: 'Usera',
	postalCode: '28026',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	phone: '+34 611 20 91 81',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '611 20 91 81',
	latitude: 40.3897449,
	longitude: -3.7015345,
	/** Plus code que publica la ficha (completo: 8CGR97QX+V9). */
	plusCode: '97QX+V9 Madrid',
	/** Valoración de la ficha en la fecha de consulta (4 sobre 5 con 25 reseñas). */
	rating: 4,
	reviewCount: 25,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Ars+Floristeria/@40.3897449,-3.7015345,17z/data=!3m1!4b1!4m6!3m5!1s0xd42264b1f375dd9:0x332387d536532dd3!8m2!3d40.3897449!4d-3.7015345!16s%2Fg%2F11rjr7h290?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ2V03H0smQg0R0y1TNtWHIzM&hl=es';

export const phoneHref = 'tel:+34611209181';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 9:30 a 21:30, sin cierre a mediodía ni excepción en ningún día.
 * Es el horario de la ficha consultada el 17 de octubre de 2026.
 */
export const hours = [
	{ day: 'Lunes', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '9:30 – 21:30', shifts: [{ open: '9:30', close: '21:30' }], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 9:30 a 21:30';

/**
 * Accesibilidad publicada en la ficha.
 *
 * La ficha no publica ninguna entrada de accesibilidad, así que la lista queda vacía y la web lo
 * dice expresamente en lugar de rellenarla con suposiciones.
 */
export const accesibilidad = [] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Buena atención y buena calidad de sus flores y plantas',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Muy buenos precios y sobre todo la amabilidad con la que atiende !!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Soy clienta asidua, floristería bien surtida, y atención personal excelente.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Ars Floristeria?',
		answer:
			'En la Calle de Antonio López, 154, con código postal 28026, en el distrito de Usera, Madrid. Publica el plus code 97QX+V9 Madrid y las coordenadas 40.3897449, -3.7015345.',
	},
	{
		question: '¿Cuál es el horario de Ars Floristeria?',
		answer:
			'La ficha publica un horario continuo de 9:30 a 21:30 todos los días de la semana. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende Ars Floristeria?',
		answer:
			'Google la clasifica únicamente como floristería. La ficha no publica descripción del titular, catálogo ni precios, así que esta web no enumera productos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 611 20 91 81. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Antonio López, 154, en el distrito de Usera, Madrid, y las coordenadas 40.3897449, -3.7015345. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica ningún dato de accesibilidad, así que esta web no puede confirmar si el local dispone de acceso, aseo o asientos adaptados. Lo mejor es preguntar por teléfono.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4 sobre 5 con 25 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿Hacen envíos o se puede comprar por esta web?',
		answer:
			'No se puede comprar aquí: esta web es informativa y no es la web oficial del local. La ficha no publica web propia ni condiciones de envío, así que para encargar flores lo más rápido es llamar al 611 20 91 81.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle de Antonio López, 154, Usera, Madrid. Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange`, `sameAs` ni `hasMenu`: la ficha no publica precios, web ni catálogo. */
	/* Sin `amenityFeature`: la ficha no publica datos de accesibilidad. */
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
