/**
 * Datos de Panaceite Centro. (C. Bernabé Soriano, 1 · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno. Sí están publicados la web
 * oficial del grupo y sus perfiles sociales, que se enlazan tal cual.
 *
 * Nota sobre el horario: la web oficial del grupo publica otro rango (07:00 a 01:00, con cocina
 * ininterrumpida desde las 10:00). La web mantiene el horario de la ficha como fuente principal y
 * avisa de la diferencia.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://panaceite-centro.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Panaceite Centro',
	shortName: 'Panaceite',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Taberna',
	categories: ['Taberna', 'Restaurante de cocina española'],
	/** Dirección publicada en la ficha, con la abreviatura «C.» que usa Google. */
	streetAddress: 'C. Bernabé Soriano, 1',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 953 24 06 30',
	latitude: 37.7662513,
	longitude: -3.7887956,
	/** Plus code que publica la ficha. */
	plusCode: 'Q686+GF Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 5.589 reseñas). */
	rating: 4.4,
	reviewCount: 5589,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Panaceite+Centro/@37.7662513,-3.7887956,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd7747b70fbad:0x5a68d4077d479aae!8m2!3d37.7662513!4d-3.7887956!16s%2Fg%2F1q6cfdwl9?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJrftwe3TXbQ0RrppHfQfUaFo&hl=es';

/** Web y perfiles publicados por el propio grupo. */
export const webOficialUrl = 'https://panaceite.com/panaceite-centro/';
export const instagramUrl = 'https://www.instagram.com/panaceitetabernas/';
export const facebookUrl = 'https://www.facebook.com/TabernasPanaceite1/';

export const phoneHref = 'tel:+34953240630';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre y publica
 * todos los días un tramo que cruza la medianoche: abre a las 6:00 (8:00 el sábado y el domingo) y
 * cierra a las 2:00 de la madrugada siguiente. El lunes 12, Fiesta Nacional de España, mantiene su
 * horario con el aviso de que podría ser diferente.
 *
 * El propio grupo publica en su web oficial otro rango (07:00 a 01:00, con cocina ininterrumpida
 * desde las 10:00), así que la web avisa de la diferencia y recomienda confirmar por teléfono.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 2:00',
		shifts: [{ open: '08:00', close: '02:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 2:00',
		shifts: [{ open: '08:00', close: '02:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto todos los días · de 6:00 a 2:00 (desde las 8:00 el fin de semana)';

/**
 * Servicios de accesibilidad que publica la ficha: los tres primeros están disponibles y el
 * aparcamiento adaptado, marcado como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado', disponible: true },
	{ label: 'Asientos adaptados', disponible: true },
	{ label: 'Aparcamiento adaptado', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y se citan tal cual, sin
 * corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Buen sitio para comer y tapear, cerveza fresquita y muy buena atención.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Chupitos de caldito como el de la abuela, las medias raciones son generosas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos jamón de reserva con pan de pueblo, queso frito y lingote de cochinillo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta habla de precios; del jamón o el
 * AOVE solo se dice lo que citan las reseñas y lo que publica la web oficial del grupo.
 */
export const faqs = [
	{
		question: '¿Dónde está Panaceite Centro?',
		answer:
			'En la C. Bernabé Soriano, 1, con código postal 23001, en el centro de Jaén (Andalucía), junto a la Catedral. La ficha publica el plus code Q686+GF Jaén y las coordenadas 37.7662513, -3.7887956.',
	},
	{
		question: '¿Cuál es el horario de Panaceite Centro?',
		answer:
			'La ficha publica un horario que cruza la medianoche: abre a las 6:00 de lunes a viernes y a las 8:00 el sábado y el domingo, y cierra a las 2:00 de la madrugada. Es el horario consultado el 7 de octubre de 2026. La web oficial del grupo publica otro rango, de 7:00 a 1:00 con cocina ininterrumpida desde las 10:00, así que conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como taberna y restaurante de cocina española, con 4,4 sobre 5 y 5.589 reseñas. La ficha no publica la carta, pero en las reseñas que destaca se habla de tapeo, de cerveza, de raciones generosas y de jamón con pan de pueblo.',
	},
	{
		question: '¿Abre todos los días?',
		answer:
			'En el horario que publica la ficha, sí: los siete días de la semana. La diferencia está en la apertura, a las 6:00 de lunes a viernes y a las 8:00 el sábado y el domingo.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Bernabé Soriano, 1 y las coordenadas 37.7662513, -3.7887956. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q686+GF Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Taberna y restaurante de cocina española en la C. Bernabé Soriano, 1 de Jaén, junto a la Catedral, abierto todos los días con un horario que cruza la medianoche.',
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
	sameAs: [webOficialUrl, instagramUrl, facebookUrl],
	acceptsReservations: true,
	/** Traduce a cocinas las categorías que publica Google. No se declara ninguna otra. */
	servesCuisine: ['Española'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
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
