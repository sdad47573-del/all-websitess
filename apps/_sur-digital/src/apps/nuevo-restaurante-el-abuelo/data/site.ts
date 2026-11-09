/**
 * Datos de Nuevo Restaurante El Abuelo (Ctra. de Carrión, 94 · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno, y tampoco publica descripción del
 * titular, así que no se reproduce ninguna.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/nuevo-restaurante-el-abuelo',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps.
	 *
	 * Google lo escribe todo en mayúsculas menos la primera palabra y con un punto final:
	 * «Nuevo RESTAURANTE EL ABUELO.». Se reproduce literal, como el «A JALAR» de `a-jalar` o el
	 * «Restaurante AjoNegro - OPCIONES SIN GLUTEN» de `restaurante-ajonegro`.
	 */
	name: 'Nuevo RESTAURANTE EL ABUELO.',
	/** Forma corta para la cabecera y el texto corrido, donde el punto final no encaja. */
	shortName: 'El Abuelo',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha: «Ctra. de Carrión, 94». */
	streetAddress: 'Ctra. de Carrión, 94',
	postalCode: '13005',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 664 85 81 90',
	latitude: 38.9890774,
	longitude: -3.9083095,
	/** Plus code que publica la ficha. */
	plusCode: 'X3QR+JM Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 593 reseñas). */
	rating: 4.1,
	reviewCount: 593,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo: no se
 * afirma nada sobre días, horario ni contenido de ese servicio.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Nuevo+RESTAURANTE+EL+ABUELO./@38.9890774,-3.9083095,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc34b73a58ad9:0x5351838fb866e40f!8m2!3d38.9890774!4d-3.9083095!16s%2Fg%2F11cmg18qpr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ2Yqlc0vDaw0RD-RmuI-DUVM&hl=es';

export const phoneHref = 'tel:+34664858190';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre. El
 * local mantiene un horario continuado de 7:30 a 18:00 de lunes a viernes, abre de 9:00 a 16:00 el
 * sábado y cierra el domingo.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:30 – 18:00',
		shifts: [{ open: '07:30', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:30 – 18:00',
		shifts: [{ open: '07:30', close: '18:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:30 – 18:00',
		shifts: [{ open: '07:30', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:30 – 18:00',
		shifts: [{ open: '07:30', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:30 – 18:00',
		shifts: [{ open: '07:30', close: '18:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
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
export const hoursSummary =
	'De 7:30 a 18:00 de lunes a viernes, el sábado de 9:00 a 16:00 y el domingo cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas. Es la única ficha de este grupo de webs que publica
 * la entrada del aparcamiento. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación: la segunda conserva el espacio que
 * Google publica antes del punto («rabas .»). Las tres son de 5 sobre 5. Google guarda cada extracto
 * entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « » y no forman
 * parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Bocadillos muy buenos, grandes, cerveza bien fría.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Arroz con bogavante, boquerones fritos, lenguado empanado, rabas .',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buenos bocatas para desayunar nueva gerencia trato amable y atentos volveré',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni descripción del titular, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Nuevo Restaurante El Abuelo?',
		answer:
			'En la Ctra. de Carrión, 94, con código postal 13005, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3QR+JM Ciudad Real y las coordenadas 38.9890774, -3.9083095.',
	},
	{
		question: '¿Cuál es el horario de Nuevo Restaurante El Abuelo?',
		answer:
			'La ficha publica un horario continuado de 7:30 a 18:00 de lunes a viernes, de 9:00 a 16:00 el sábado y el domingo cerrado. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Restaurante», sin declarar ninguna cocina concreta. Tiene 4,1 sobre 5 con 593 reseñas, y en las reseñas que destaca se habla de bocadillos grandes para desayunar, de arroz con bogavante, boquerones fritos, lenguado empanado y rabas, y del cambio de gerencia con un trato amable.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch»?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: no se afirma en qué días, en qué franja horaria ni con qué contenido se sirve. Para saberlo, hay que llamar al 664 85 81 90.',
	},
	{
		question: '¿Publica el local una descripción propia?',
		answer:
			'No: a diferencia de otras fichas, esta no incluye descripción del titular, así que esta web no reproduce ninguna y no la inventa. Lo que sí publica son las tres reseñas que Google destaca y las cuatro entradas de accesibilidad.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 664 85 81 90.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Ctra. de Carrión, 94 y las coordenadas 38.9890774, -3.9083095. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3QR+JM Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante de barra y bocadillos en la Ctra. de Carrión, 94 de Ciudad Real, con horario continuado de 7:30 a 18:00 de lunes a viernes y cerrado los domingos.',
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
	/* Sin `servesCuisine`: la única categoría que publica Google es «Restaurante», que no declara cocina. */
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
