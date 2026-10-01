/**
 * Datos del negocio contrastados con la ficha pública de Google Maps de Asador La Granja
 * (Las Lagunas de Mijas) y con directorios gastronómicos públicos.
 *
 * Coordenadas, teléfono, dirección, valoración y horario proceden de esas fichas públicas.
 * Los horarios y la disponibilidad pueden cambiar: la web invita a confirmar por teléfono.
 */
export const business = {
	name: 'Asador La Granja',
	shortName: 'La Granja',
	streetAddress: 'Camino de la Ponderosa, 9, local 7',
	postalCode: '29649',
	neighborhood: 'Las Lagunas de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 73 59 16',
	latitude: 36.5203362,
	longitude: -4.6324849,
	placeId: '0xd72e302628feadf:0x5af519ac0ff9011b',
	plusCode: 'G9C9+42',
	site: 'https://asador-la-granja.vercel.app',
	ratingValue: 4.6,
	reviewCount: 107,
	priceRange: '€€',
} as const;

export const phoneHref = 'tel:+34952735916';
export const mapsUrl =
	'https://www.google.com/maps/place/Asador+la+granja/@36.5203362,-4.6324849,17z/data=!3m1!4b1!4m6!3m5!1s0xd72e302628feadf:0x5af519ac0ff9011b!8m2!3d36.5203362!4d-4.6324849!16s%2Fg%2F11f9_sbc95';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;
/**
 * Formulario de reseña de Google resuelto a partir del Place ID: al pulsar el enlace se abre
 * la hoja de reseñas de la ficha sin pasar por una búsqueda ni por la cuenta del visitante.
 */
export const reviewUrl = `https://search.google.com/local/writereview?placeid=${business.placeId}`;

/**
 * La ficha de Google Maps de este negocio solo publica un teléfono fijo y ninguna acción de
 * WhatsApp, así que no hay un número de WhatsApp que verificar. Se deja vacío a propósito:
 * cuando el titular confirme su móvil, basta con escribirlo aquí (formato internacional, solo
 * cifras) y el botón flotante de WhatsApp aparece sin tocar ningún otro fichero.
 */
export const whatsappNumber = '';
export const whatsappUrl = whatsappNumber
	? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
			`Hola, os escribo desde la web de ${business.name}. Quisiera reservar una mesa.`,
		)}`
	: null;

/**
 * Datos que la LOPDGDD obliga a publicar en el aviso legal, la política de privacidad y la de
 * cookies. No aparecen en ninguna ficha pública, así que se dejan marcados para que los
 * complete el titular antes de publicar. El README recuerda cuáles son.
 */
export const legal = {
	owner: '[pendiente de completar]',
	ownerAddress: '[pendiente de completar]',
	taxId: '[pendiente de completar]',
	email: '[pendiente de completar]',
	hosting: '[pendiente de completar]',
	hostingAddress: '[pendiente de completar]',
	lastUpdated: '1 de octubre de 2026',
} as const;

/**
 * Fotografías descargadas de la ficha de Google Maps del propio establecimiento
 * (galería del perfil del negocio). Se sirven desde `public/fotos/` con `width`/`height`
 * para evitar saltos de maquetación.
 */
export const photos = {
	hero: {
		src: '/fotos/asador-la-granja-las-lagunas-de-mijas.jpg',
		width: 1200,
		height: 676,
	},
	gallery: [
		{ src: '/fotos/asador-la-granja-las-lagunas-de-mijas-foto-1.jpg', width: 900, height: 507 },
		{ src: '/fotos/asador-la-granja-las-lagunas-de-mijas-foto-2.jpg', width: 900, height: 974 },
		{ src: '/fotos/asador-la-granja-las-lagunas-de-mijas-foto-3.jpg', width: 900, height: 1200 },
		{ src: '/fotos/asador-la-granja-las-lagunas-de-mijas-foto-4.jpg', width: 900, height: 507 },
		{ src: '/fotos/asador-la-granja-las-lagunas-de-mijas-foto-5.jpg', width: 900, height: 1200 },
		{ src: '/fotos/asador-la-granja-las-lagunas-de-mijas-foto-6.jpg', width: 900, height: 1600 },
	],
} as const;

/** Horario publicado por el propio local: todos los días, de 13:00 a 23:00. */
export const openingHours = [
	{
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '13:00',
		closes: '23:00',
	},
];

/** Crea el JSON-LD `Restaurant` con la descripción del idioma que corresponda. */
export function createRestaurantSchema(description: string) {
	const base = business.site;
	return {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		'@id': `${base}/#restaurante`,
		name: business.name,
		alternateName: business.shortName,
		description,
		url: `${base}/`,
		telephone: business.phone,
		priceRange: business.priceRange,
		currenciesAccepted: 'EUR',
		paymentAccepted: 'Efectivo, tarjeta de crédito',
		servesCuisine: ['Argentina', 'Parrilla', 'Carnes a la brasa', 'Asador'],
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.streetAddress,
			addressLocality: business.neighborhood,
			addressRegion: business.region,
			postalCode: business.postalCode,
			addressCountry: business.country,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: business.latitude,
			longitude: business.longitude,
		},
		hasMap: mapsUrl,
		// La ficha no publica redes sociales del negocio, así que `sameAs` solo recoge las
		// páginas legales de esta misma web.
		sameAs: [`${base}/aviso-legal/`, `${base}/privacidad/`, `${base}/cookies/`],
		acceptsReservations: 'True',
		image: [
			`${base}${photos.hero.src}`,
			...photos.gallery.map((photo) => `${base}${photo.src}`),
		],
		openingHoursSpecification: openingHours,
		amenityFeature: [
			{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Accesible para sillas de ruedas', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Comida para llevar', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Reserva de mesa', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Aparcamiento gratuito', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Admite perros en la terraza', value: true },
		],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.ratingValue,
			reviewCount: business.reviewCount,
			bestRating: 5,
		},
	};
}
