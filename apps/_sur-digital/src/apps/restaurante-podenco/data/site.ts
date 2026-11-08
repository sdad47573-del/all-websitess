/**
 * Datos de Restaurante Podenco (Calle Tomillo, 1 · 13005 Ciudad Real).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-podenco',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Podenco',
	shortName: 'Podenco',
	/** Categoría que publica Google en esta ficha: «Restaurante de cocina española», la única. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	/**
	 * Dirección publicada en la ficha. Google la guarda como «en, Calle Tomillo, Carr. de
	 * Piedrabuena, 1, Local», con un «en» que es un artefacto de su propio campo; el local está en
	 * Calle Tomillo, 1, en la esquina con la Carretera de Piedrabuena (así consta también en su
	 * perfil público). El código postal 13005 y el municipio (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Tomillo, 1',
	postalCode: '13005',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 603 79 84 25',
	latitude: 38.9762405,
	longitude: -3.9455638,
	/** Plus code que publica la ficha. */
	plusCode: 'X3G3+FQ Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 101 reseñas). */
	rating: 4.6,
	reviewCount: 101,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni recortarlo.
 */
export const descripcionLocal =
	'En Restaurante Podenco creemos en la cocina hecha con tiempo, sabor y tradición. Apostamos por una experiencia gastronómica basada en el respeto al producto, los ingredientes de calidad y las recetas que evocan el auténtico sabor de siempre, con un toque cuidado y actual. Nuestro restaurante es un espacio donde disfrutar de buena comida, un ambiente acogedor y un servicio cercano, ideal para compartir momentos especiales en pareja, con amigos o en familia. Nos apasionan los productos de temporada, la cocina de tradición y los platos elaborados con cariño para sorprender en cada visita. Si buscas calidad gastronómica, sabor auténtico y una experiencia para recordar, Restaurante Podenco es tu mesa.';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Se admiten perros». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Se admiten perros';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Podenco/@38.9762405,-3.9455638,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc37581ed6317:0x9f579099c143fe4!8m2!3d38.9762405!4d-3.9455638!16s%2Fg%2F11tflr8k_l?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJF2PtgXXDaw0R5D8UnAl59Qk&hl=es';

export const phoneHref = 'tel:+34603798425';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local sirve
 * comidas de 13:00 a 16:30 todos los días que abre y añade cenas de 20:00 a 24:00 el viernes y el
 * sábado; el martes cierra todo el día.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
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
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Comidas de 13:00 a 16:30 y cenas de 20:00 a 24:00 el viernes y el sábado; el martes cierra';

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
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « », y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Lo único que no tenían pan sin gluten y cerveza 😢 Volveremos seguro.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Lo sorprendente, es que es mitad solomillo y mitad entrecot.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Primera visita y de 10 ✨🫶🏻 El camarero muy detallista con nosotros.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Podenco?',
		answer:
			'En la Calle Tomillo, 1, en la esquina con la Carretera de Piedrabuena, con código postal 13005, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3G3+FQ Ciudad Real y las coordenadas 38.9762405, -3.9455638.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Podenco?',
		answer:
			'La ficha publica un horario de comidas de 13:00 a 16:30 todos los días que abre, con cenas de 20:00 a 24:00 el viernes y el sábado. El martes cierra todo el día. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española. Tiene 4,6 sobre 5 con 101 reseñas, y en las reseñas que destaca se habla del pan sin gluten y la cerveza, de un plato que es mitad solomillo y mitad entrecot, y del detalle del servicio.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 603 79 84 25.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Tomillo, 1 y las coordenadas 38.9762405, -3.9455638. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3G3+FQ Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'Es el distintivo que Google muestra junto al nombre en la ficha: «Se admiten perros». Esta web lo recoge tal cual y no lo amplía ni lo interpreta: para saber si hay alguna condición, lo mejor es llamar al 603 79 84 25.',
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
		'Restaurante de cocina española y de tradición en la Calle Tomillo, 1 de Ciudad Real, con comidas de 13:00 a 16:30 y cenas el viernes y el sábado.',
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
	/* «Española» traduce la única categoría que publica Google: «Restaurante de cocina española». */
	servesCuisine: ['Española'],
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
