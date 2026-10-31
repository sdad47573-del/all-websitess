/**
 * Datos de Pollo Tío Pepe.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0xd620152687f8e55:0x962037fb787ccd29, 38.5721568, -0.0664934).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'Pollo Tío Pepe',
	fullName: 'Pollo Tío Pepe',
	shortName: 'Pollo Tío Pepe',
	mark: 'PT',
	street: '',
	neighbourhood: '',
	city: '',
	cityAddress: '',
	region: 'Comunidad Valenciana',
	regionName: 'Comunidad Valenciana',
	postalCode: '',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 0,
	reviewsCount: 0,
	siteUrl: 'https://pollo-tio-pepe.vercel.app',
	geo: { lat: 38.5721568, lng: -0.0664934 },
	featureId: '0xd620152687f8e55:0x962037fb787ccd29',
	placeId: '',
	plusCode: '',
	category: 'Pollo asado',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pollo+T%C3%ADo+Pepe/@38.5721568,-0.0664934,17z/data=!3m1!4b1!4m6!3m5!1s0xd620152687f8e55:0x962037fb787ccd29!8m2!3d38.5721568!4d-0.0664934!16s%2Fg%2F1tgmxm72?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Pollo+T%C3%ADo+Pepe/@38.5721568,-0.0664934,17z/data=!3m1!4b1!4m6!3m5!1s0xd620152687f8e55:0x962037fb787ccd29!8m2!3d38.5721568!4d-0.0664934!16s%2Fg%2F1tgmxm72?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5721568%2C-0.0664934',
	embed: 'https://maps.google.com/maps?q=38.5721568,-0.0664934&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.5721568,-0.0664934',
};

export const HOURS: { day: string; value: string }[] = [];

export const SERVICIOS: string[] = [];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
