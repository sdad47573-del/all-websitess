/**
 * Datos de La Isla, Tacos, Kebab & Grill.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0xd6201059ef95aa7:0x7cdb82a28bc7b410, 38.6033005, -0.0455965).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'La Isla',
	fullName: 'La Isla, Tacos, Kebab & Grill',
	shortName: 'La Isla',
	mark: 'LI',
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
	siteUrl: 'https://la-isla-tacos-kebab.vercel.app',
	geo: { lat: 38.6033005, lng: -0.0455965 },
	featureId: '0xd6201059ef95aa7:0x7cdb82a28bc7b410',
	placeId: '',
	plusCode: '',
	category: 'Tacos, kebab y grill',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Isla,+Tacos,+Kebab+%26+Grill/@38.6033005,-0.0455965,17z/data=!3m1!4b1!4m6!3m5!1s0xd6201059ef95aa7:0x7cdb82a28bc7b410!8m2!3d38.6033005!4d-0.0455965!16s%2Fg%2F11g6j8f4x1?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/La+Isla,+Tacos,+Kebab+%26+Grill/@38.6033005,-0.0455965,17z/data=!3m1!4b1!4m6!3m5!1s0xd6201059ef95aa7:0x7cdb82a28bc7b410!8m2!3d38.6033005!4d-0.0455965!16s%2Fg%2F11g6j8f4x1?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6033005%2C-0.0455965',
	embed: 'https://maps.google.com/maps?q=38.6033005,-0.0455965&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6033005,-0.0455965',
};

export const HOURS: { day: string; value: string }[] = [];

export const SERVICIOS: string[] = [];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
