/**
 * Datos del negocio contrastados con la ficha pública de Google Maps de Taberna Casa Pino
 * (La Cala de Mijas) y con su perfil de Instagram (@casapinolacala).
 *
 * Coordenadas, teléfono, dirección, valoración y horario proceden de esas fichas públicas.
 * Los horarios y la disponibilidad pueden cambiar: la web invita a confirmar por teléfono.
 */
export const business = {
	name: 'Taberna Casa Pino',
	shortName: 'Casa Pino',
	streetAddress: 'Calle Cártama',
	postalCode: '29649',
	neighborhood: 'La Cala de Mijas',
	city: 'Mijas',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 602 09 50 07',
	latitude: 36.5025709,
	longitude: -4.6819303,
	placeId: '0xd731f003a17676f:0xe336e7ea7fd8e15f',
	plusCode: 'G839+26',
	site: 'https://taberna-casa-pino.vercel.app',
	ratingValue: 4.5,
	reviewCount: 159,
	priceRange: '€€',
} as const;

export const phoneHref = 'tel:+34602095007';
export const instagramUrl = 'https://www.instagram.com/casapinolacala/';
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+Casa+Pino/@36.5025709,-4.6819303,17z/data=!3m1!4b1!4m6!3m5!1s0xd731f003a17676f:0xe336e7ea7fd8e15f!8m2!3d36.5025709!4d-4.6819303!16s%2Fg%2F11mckpr6bm';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;
/**
 * Formulario de reseña de Google resuelto a partir del Place ID: al pulsar el enlace se abre
 * la hoja de reseñas de la ficha sin pasar por una búsqueda ni por la cuenta del visitante.
 */
export const reviewUrl = `https://search.google.com/local/writereview?placeid=${business.placeId}`;

/**
 * La ficha de Google Maps publica un móvil, pero no una acción de WhatsApp, así que no hay un
 * número de WhatsApp verificado. Se deja vacío a propósito: cuando el titular confirme su
 * móvil, basta con escribirlo aquí (formato internacional, solo cifras) y el botón flotante de
 * WhatsApp aparece sin tocar ningún otro fichero.
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
 * (galería del perfil del negocio). Se sirven desde `public/fotos/` tal cual, sin
 * recompresión, con `width`/`height` para evitar saltos de maquetación.
 */
export const photos = {
	hero: {
		src: '/fotos/taberna-casa-pino-la-cala-de-mijas.jpg',
		width: 1200,
		height: 1600,
	},
	gallery: [
		{ src: '/fotos/taberna-casa-pino-la-cala-de-mijas-foto-1.jpg', width: 900, height: 1200 },
		{ src: '/fotos/taberna-casa-pino-la-cala-de-mijas-foto-2.jpg', width: 900, height: 1200 },
		{ src: '/fotos/taberna-casa-pino-la-cala-de-mijas-foto-3.jpg', width: 900, height: 900 },
		{ src: '/fotos/taberna-casa-pino-la-cala-de-mijas-foto-4.jpg', width: 900, height: 1200 },
		{ src: '/fotos/taberna-casa-pino-la-cala-de-mijas-foto-5.jpg', width: 900, height: 1200 },
		{ src: '/fotos/taberna-casa-pino-la-cala-de-mijas-foto-6.jpg', width: 900, height: 900 },
	],
} as const;

/** Horario publicado por el propio local: de miércoles a domingo, de 12:00 a 23:30. */
export const openingHours = [
	{
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '12:00',
		closes: '23:30',
	},
];

/** Crea el JSON-LD `Restaurant` con la descripción del idioma que corresponda. */
/** Perfiles públicos del negocio, en el orden en que aparecen en la web. */
const sameAsLinks = [instagramUrl].filter(Boolean);

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
		servesCuisine: ['Cocina española', 'Andaluza', 'Tapas', 'Mediterránea'],
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
		sameAs: [
			...sameAsLinks,
			`${base}/aviso-legal/`,
			`${base}/privacidad/`,
			`${base}/cookies/`,
		],
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
			{ '@type': 'LocationFeatureSpecification', name: 'Música en directo', value: true },
		],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.ratingValue,
			reviewCount: business.reviewCount,
			bestRating: 5,
		},
	};
}
