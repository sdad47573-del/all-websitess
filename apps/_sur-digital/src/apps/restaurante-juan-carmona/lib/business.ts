import galleryPhoto1 from '../assets/fotos/restaurante-juan-carmona-torremolinos-foto-1.jpg';
import galleryPhoto2 from '../assets/fotos/restaurante-juan-carmona-torremolinos-foto-2.jpg';
import galleryPhoto3 from '../assets/fotos/restaurante-juan-carmona-torremolinos-foto-3.jpg';
import galleryPhoto4 from '../assets/fotos/restaurante-juan-carmona-torremolinos-foto-4.jpg';
import galleryPhoto5 from '../assets/fotos/restaurante-juan-carmona-torremolinos-foto-5.jpg';
import galleryPhoto6 from '../assets/fotos/restaurante-juan-carmona-torremolinos-foto-6.jpg';
import heroPhoto from '../assets/fotos/restaurante-juan-carmona-torremolinos.jpg';

/**
 * Datos del negocio contrastados con la ficha pública de Google Maps de Restaurante Juan Carmona
 * (La Carihuela, Torremolinos) y con sus perfiles públicos de Instagram y Facebook.
 *
 * Coordenadas, teléfono, dirección, valoración y horario proceden de esas fichas públicas.
 * Los horarios y la disponibilidad pueden cambiar: la web invita a confirmar por teléfono.
 */
export const business = {
	name: 'Restaurante Juan Carmona',
	shortName: 'Juan Carmona',
	streetAddress: 'Calle Mar, 25',
	postalCode: '29620',
	neighborhood: 'La Carihuela',
	city: 'Torremolinos',
	region: 'Málaga, Andalucía',
	country: 'ES',
	phone: '+34 952 38 25 96',
	latitude: 36.6123657,
	longitude: -4.5018596,
	placeId: '0xd72fb8ae9f5332d:0x9fff2bcf8ccdabe9',
	plusCode: 'JF6X+W7',
	site: 'https://www.sur-digital.com/restaurante-juan-carmona',
	ratingValue: 4.5,
	reviewCount: 651,
	priceRange: '€€',
} as const;

export const phoneHref = 'tel:+34952382596';
export const instagramUrl = 'https://www.instagram.com/restaurantejuancarmona/';
export const facebookUrl = 'https://www.facebook.com/p/Restaurante-Juan-Carmona-100063679291768/';
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Juan+Carmona/@36.6123657,-4.5018596,17z/data=!3m1!4b1!4m6!3m5!1s0xd72fb8ae9f5332d:0x9fff2bcf8ccdabe9!8m2!3d36.6123657!4d-4.5018596!16s%2Fg%2F1ts_7z6q';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&hl=es&output=embed`;
/**
 * Formulario de reseña de Google resuelto a partir del Place ID: al pulsar el enlace se abre
 * la hoja de reseñas de la ficha sin pasar por una búsqueda ni por la cuenta del visitante.
 */
export const reviewUrl = `https://search.google.com/local/writereview?placeid=${business.placeId}`;

/**
 * La ficha de Google Maps de este negocio publica un teléfono fijo y ninguna acción de
 * WhatsApp, así que no hay un número de WhatsApp que verificar. Se deja vacío a propósito:
 * cuando el titular confirme su móvil, basta con escribirlo aquí (formato internacional, solo
 * cifras) y el botón flotante de WhatsApp aparece en la web sin tocar ningún otro fichero.
 */
export const whatsappNumber = '';
export const whatsappUrl = whatsappNumber
	? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
			`Hola, os escribo desde la web de ${business.name}. Quisiera reservar una mesa.`,
		)}`
	: null;

/**
 * Datos que la LOPDGDD obliga a publicar en el aviso legal, la política de privacidad y la de
 * cookies. La ficha pública de Google Maps no los contiene, así que se dejan marcados para que
 * los complete el titular antes de publicar. El README recuerda cuáles son.
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
 * (galería del perfil del negocio). Viven en `src/assets/fotos/` y las resuelve
 * `astro:assets`, que genera AVIF y `srcset` por tamaño para servirlas optimizadas.
 */
export const photos = {
	hero: heroPhoto,
	gallery: [galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5, galleryPhoto6],
};

/**
 * Horario publicado por el propio establecimiento en su ficha de Google Maps:
 * de martes a domingo, comidas de 13:00 a 16:00 y cenas de 19:30 a 23:00. Los miércoles
 * el servicio es continuo de 13:00 a 23:00 y los lunes permanece cerrado.
 */
export const openingHours = [
	{
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '13:00',
		closes: '16:00',
	},
	{
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '19:30',
		closes: '23:00',
	},
	{
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Wednesday'],
		opens: '13:00',
		closes: '23:00',
	},
];

/**
 * Perfiles públicos del negocio en otras plataformas. `sameAs` es exactamente para esto:
 * enlazar las páginas legales de la propia web aquí sería incorrecto, porque schema.org
 * espera identidades equivalentes del mismo negocio, no sus subpáginas.
 */
const sameAsLinks = [instagramUrl, facebookUrl].filter(Boolean);

/** Zonas que cubre el negocio, para el mapa y los datos locales. */
export const areaServed = [business.neighborhood, business.city, 'Málaga'];

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
		servesCuisine: ['Mariscos', 'Pescado y marisco', 'Mediterránea', 'Andaluza'],
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.streetAddress,
			// La localidad es la ciudad; el barrio va en su propio campo. Poner «La Carihuela»
			// como localidad hacía que Google situeras el negocio en un municipio inexistente.
			addressLocality: business.city,
			addressNeighborhood: business.neighborhood,
			addressRegion: 'Málaga',
			postalCode: business.postalCode,
			addressCountry: business.country,
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: business.latitude,
			longitude: business.longitude,
		},
		hasMap: mapsUrl,
		// La carta viva del restaurante está en su ficha de Google Maps: es el destino útil
		// para quien busca «carta de Juan Carmona».
		hasMenu: mapsUrl,
		areaServed,
		sameAs: sameAsLinks,
		acceptsReservations: 'True',
		image: [
			`${base}${photos.hero.src}`,
			...photos.gallery.map((photo) => `${base}${photo.src}`),
		],
		openingHoursSpecification: openingHours,
		amenityFeature: [
			{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Accesible para sillas de ruedas', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Reserva de mesa', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Comida para llevar', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Entrega a domicilio', value: true },
		],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.ratingValue,
			reviewCount: business.reviewCount,
			bestRating: 5,
		},
	};
}
