/**
 * Datos de Bar de Esteban (Calle Xauen, 27 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-de-esteban',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar de Esteban',
	shortName: 'Bar de Esteban',
	/** Categoría que publica Google en esta ficha: «Restaurante de cocina castellana», la única. */
	category: 'Restaurante de cocina castellana',
	categories: ['Restaurante de cocina castellana'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Xauen, 27»: aquí se desarrolla la
	 * abreviatura a «Calle», como en el resto del repositorio. El código postal 13004 y el municipio
	 * (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Xauen, 27',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 653 77 45 46',
	latitude: 38.9773179,
	longitude: -3.9265927,
	/** Plus code que publica la ficha. */
	plusCode: 'X3GF+W9 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 149 reseñas). */
	rating: 4.6,
	reviewCount: 149,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, incluso sin tildes en «menu» y con el símbolo «€» tal cual lo escribió el local. La
 * ficha la guarda en seis líneas, que se conservan con `\n` y se muestran como tales
 * (`.descripcion` usa `white-space: pre-line`).
 */
export const descripcionLocal =
	'Bar casa Esteban\ncomidas caseras manchegas. potajes, cocido\nmenu semanal 10€\nmenu fin de semana y fiestas 14€\nraciones variadas\ncomidas de encargo hechas en puchero y a fuego de leña';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+de+Esteban/@38.9773179,-3.9265927,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3e096a19e63:0x116c8f986d826286!8m2!3d38.9773179!4d-3.9265927!16s%2Fg%2F11gxmv2xmr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJY56hluDDaw0RhmKCbZiPbBE&hl=es';

export const phoneHref = 'tel:+34653774546';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * de forma continua de 8:00 a 24:00 todos los días salvo el martes, que cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
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
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 8:00 a 24:00 todos los días salvo el martes, que cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
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
		text: 'Excelente cocido, cerveza muy fría y las empanadillas picantes riquísimas',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tiene un menú variado con producto de la tierra y opciones de pescado.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Está todo buenísimo y los dueños encantadores',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios cerrados ni carta, así que ninguna respuesta los reproduce más allá
 * de los menús que el propio local anota en su descripción.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar de Esteban?',
		answer:
			'En la Calle Xauen, 27, con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3GF+W9 Ciudad Real y las coordenadas 38.9773179, -3.9265927.',
	},
	{
		question: '¿Cuál es el horario de Bar de Esteban?',
		answer:
			'La ficha publica un horario continuo de 8:00 a 24:00 todos los días salvo el martes, que cierra. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina castellana. Tiene 4,6 sobre 5 con 149 reseñas, y el propio local escribe en su ficha que hace comidas caseras manchegas, potajes y cocido, con un menú semanal y otro de fin de semana y fiestas, raciones variadas y comidas de encargo hechas en puchero y a fuego de leña.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 653 77 45 46.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Xauen, 27 y las coordenadas 38.9773179, -3.9265927. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3GF+W9 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 653 77 45 46.',
	},
	{
		question: '¿Cuál es el teléfono de Bar de Esteban?',
		answer:
			'La ficha publica el 653 77 45 46, un teléfono móvil. Es el único número que aparece y esta web no añade ningún otro.',
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
		'Bar de comida casera manchega en la Calle Xauen, 27 de Ciudad Real, con servicio continuo de 8:00 a 24:00 y cerrado los martes.',
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
	/** Traduce a cocina la única categoría que publica Google: «cocina castellana». */
	servesCuisine: ['Castellana'],
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
