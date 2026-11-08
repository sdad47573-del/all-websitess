/**
 * Datos de Cuina de Dos.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0x129e01132e9d8123:0xfce567263e45e801, 38.7155316, 0.0493814).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'Cuina de Dos',
	fullName: 'Cuina de Dos',
	shortName: 'Cuina de Dos',
	mark: 'CD',
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
	siteUrl: 'https://www.sur-digital.com/cuina-de-dos',
	geo: { lat: 38.7155316, lng: 0.0493814 },
	featureId: '0x129e01132e9d8123:0xfce567263e45e801',
	placeId: '',
	plusCode: '',
	category: '',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cuina+de+Dos/@38.7155316,0.0493814,17z/data=!3m1!4b1!4m6!3m5!1s0x129e01132e9d8123:0xfce567263e45e801!8m2!3d38.7155316!4d0.0493814!16s%2Fg%2F11c1q7rjzk?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Cuina+de+Dos/@38.7155316,0.0493814,17z/data=!3m1!4b1!4m6!3m5!1s0x129e01132e9d8123:0xfce567263e45e801!8m2!3d38.7155316!4d0.0493814!16s%2Fg%2F11c1q7rjzk?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7155316%2C0.0493814',
	embed: 'https://maps.google.com/maps?q=38.7155316,0.0493814&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.7155316,0.0493814',
};

export const HOURS: { day: string; value: string }[] = [];

export const SERVICIOS: string[] = [];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
