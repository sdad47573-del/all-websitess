/**
 * Datos de Restaurante La Abadia de calatrava (Calle de Calatrava, 39 · 13003 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-la-abadia-de-calatrava.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps. Google lo escribe con «Abadia» sin tilde y
	 * «calatrava» en minúscula; se reproduce literal (el propio local lo escribe con tilde y
	 * mayúscula en su descripción, que es la forma que usa `shortName`).
	 */
	name: 'Restaurante La Abadia de calatrava',
	shortName: 'La Abadía de Calatrava',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Restaurante» (la primera, que se usa
	 * como categoría principal), «Parrilla», «Restaurante de carnes asadas», «Restaurante de platos
	 * de carne» y «Restaurante de cocina española».
	 */
	category: 'Restaurante',
	categories: [
		'Restaurante',
		'Parrilla',
		'Restaurante de carnes asadas',
		'Restaurante de platos de carne',
		'Restaurante de cocina española',
	],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. de Calatrava, 39»: aquí se desarrolla
	 * a «Calle de Calatrava, 39», como en el resto del repositorio.
	 */
	streetAddress: 'Calle de Calatrava, 39',
	postalCode: '13003',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 683 54 42 44',
	latitude: 38.9899357,
	longitude: -3.9247905,
	/** Plus code que publica la ficha. */
	plusCode: 'X3QG+X3 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 569 reseñas). */
	rating: 4.6,
	reviewCount: 569,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal. En él el local se llama a sí mismo «La Abadía de Calatrava», con tilde y mayúscula, a
 * diferencia del nombre de la ficha.
 */
export const descripcionLocal =
	'En pleno Ciudad Real, La Abadía de Calatrava es un restaurante de cocina manchega tradicional donde la carta convive con el menú del día. Trabajamos carnes de la zona a la parrilla, platos de cuchara de los de siempre y vinos seleccionados de la tierra, con menú ejecutivo entre semana y menú especial de fin de semana. Tenemos salones propios para comidas de empresa, celebraciones familiares y grupos, con servicio profesional en sala. Si buscas dónde comer en Ciudad Real y quieres cocina de siempre bien hecha, reserva tu mesa o pásate a mediodía.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Abadia+de+calatrava/@38.9899357,-3.9247905,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3d030ddbf7b:0x73266bfc01a0b53d!8m2!3d38.9899357!4d-3.9247905!16s%2Fg%2F11vyrgt6y5?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJe7_dMNDDaw0RPbWgAfxrJnM&hl=es';

export const phoneHref = 'tel:+34683544244';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * sirve dos turnos de miércoles a sábado —mediodía de 12:30 a 16:30 y noche de 20:00 a 24:00—, el
 * domingo solo al mediodía (12:30 a 16:30) y cierra el martes.
 *
 * El lunes la ficha no publica el horario habitual, sino el de la Fiesta Nacional de España
 * (12:30 – 17:00), y así se recoge: es el horario de ese festivo, no el de un lunes cualquiera.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
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
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 16:30',
		shifts: [{ open: '12:30', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de 12:30 a 16:30 y cenas de 20:00 a 24:00 (el domingo solo al mediodía); el martes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos salmorejo, croquetas muy muy buenas, unas migas manchegas y fritura.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pude tomar una ensalada deliciosa de frutos rojos y un arroz riquísimo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hemos pasado muy buen rato cenando, el camarero Gabriel nos ha tratado de diez.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante La Abadia de calatrava?',
		answer:
			'En la Calle de Calatrava, 39, con código postal 13003, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3QG+X3 Ciudad Real y las coordenadas 38.9899357, -3.9247905.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La Abadia de calatrava?',
		answer:
			'La ficha publica dos turnos de miércoles a sábado: mediodía de 12:30 a 16:30 y noche de 20:00 a 24:00. El domingo abre solo al mediodía, de 12:30 a 16:30, y el martes cierra. El lunes publica el horario de la Fiesta Nacional de España, de 12:30 a 17:00. Es el horario de la ficha consultada el 8 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, parrilla, restaurante de carnes asadas, restaurante de platos de carne y restaurante de cocina española. Tiene 4,6 sobre 5 con 569 reseñas, y en las reseñas que destaca se habla del salmorejo, de unas croquetas, de unas migas manchegas y de una fritura, de una ensalada de frutos rojos y un arroz, y del trato del personal en la cena.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 683 54 42 44.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Calatrava, 39 y las coordenadas 38.9899357, -3.9247905. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3QG+X3 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina manchega en la Calle de Calatrava, 39 de Ciudad Real, con menú del día y carnes a la parrilla.',
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
	/**
	 * `servesCuisine` traduce las cuatro categorías que publican una comida, sin añadir ninguna otra:
	 * «Parrilla», «Restaurante de carnes asadas», «Restaurante de platos de carne» y «Restaurante de
	 * cocina española». «Restaurante» es un tipo de establecimiento y no se declara.
	 */
	servesCuisine: ['Parrilla', 'Carnes asadas', 'Platos de carne', 'Cocina española'],
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
