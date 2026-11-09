/**
 * Datos de Restaurante Casa Gonzalez (C. Tabladilla, 10, 41013 Sevilla).
 *
 * Todo lo que hay aquí sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre
 * de 2026 desde el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono,
 * categoría, valoración con número de reseñas, coordenadas y horario semanal.
 *
 * El negocio no tiene web propia ni perfiles de redes sociales localizables, así que no se enlaza
 * ninguno. No se publican precios, carta ni servicios que no estén verificados.
 */

export const business = {
	name: 'Restaurante Casa Gonzalez',
	shortName: 'Casa Gonzalez',
	streetAddress: 'C. Tabladilla, 10',
	postalCode: '41013',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 615 25 18 97',
	latitude: 37.363359,
	longitude: -5.980886,
	/** Valoración de la ficha en la fecha de consulta (4,8 con 290 reseñas). */
	rating: 4.8,
	reviewCount: 290,
	site: 'https://www.sur-digital.com/casa-gonzalez-sevilla',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Gonzalez/@37.363359,-5.980886,17z/data=!3m1!4b1!4m6!3m5!1s0xd126f50f75aeb5b:0x294ea85af8a2d75a!8m2!3d37.363359!4d-5.980886!16s%2Fg%2F11h_z8g915?authuser=0&hl=es';

export const phoneHref = 'tel:+34615251897';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal de la ficha, con los códigos de Google (`[[6],[17]]` = 6:00–17:00).
 *
 * El lunes que publicaba la ficha al consultarla estaba marcado como festivo (Fiesta Nacional de
 * España), así que no se puede afirmar si un lunes normal abre o cierra: se deja como dato a
 * confirmar por teléfono en lugar de inventarlo.
 */
export const hours = [
	{ day: 'Martes', service: '6:00 – 17:00', open: '06:00', close: '17:00', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '6:00 – 17:00', open: '06:00', close: '17:00', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '6:00 – 17:00', open: '06:00', close: '17:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '6:00 – 17:00', open: '06:00', close: '17:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Sunday' },
	{ day: 'Lunes', service: 'Por confirmar', open: null, close: null, dayOfWeek: 'Monday' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con datos publicados en la ficha.
 *
 * No hay carta verificada, así que ninguna respuesta habla de platos concretos.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Casa Gonzalez?',
		answer:
			'En la calle Tabladilla, 10, 41013 Sevilla. Está junto a la zona del Hospital Universitario. Puedes abrir la ubicación exacta en Google Maps o llamar al 615 25 18 97 antes de ir.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Casa Gonzalez?',
		answer:
			'De martes a viernes abre de 6:00 a 17:00. Sábado y domingo aparece cerrado. El lunes que publicaba la ficha al consultarla coincidía con un festivo nacional, así que conviene llamar al 615 25 18 97 para confirmar los lunes y los días festivos.',
	},
	{
		question: '¿Cómo se reserva mesa?',
		answer:
			'La ficha no ofrece reserva en línea ni web propia. La vía publicada es el teléfono 615 25 18 97.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como restaurante dentro de la categoría de restauración, con una valoración de 4,8 sobre 290 reseñas en la fecha de consulta de la ficha. No hay carta ni lista de servicios publicada, así que pregunta por teléfono.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la calle Tabladilla, 10, Sevilla (41013), junto a la zona del Hospital Universitario.',
	url: `${business.site}/`,
	image: `${business.site}/og.jpg`,
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
	acceptsReservations: false,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
	},
	openingHoursSpecification: hours
		.filter((item) => item.open && item.close)
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: item.open,
			closes: item.close,
		})),
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${business.site}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};
