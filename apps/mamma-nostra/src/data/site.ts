/**
 * Datos de Mamma Nostra.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0x129dfe3b368bb265:0x8135026326f18dfe, 38.6422165, 0.0499679).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'Mamma Nostra',
	fullName: 'Restaurante Pizzería Mamma Nostra',
	shortName: 'Mamma Nostra',
	mark: 'MN',
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
	siteUrl: 'https://mamma-nostra.vercel.app',
	geo: { lat: 38.6422165, lng: 0.0499679 },
	featureId: '0x129dfe3b368bb265:0x8135026326f18dfe',
	placeId: '',
	plusCode: '',
	category: 'Restaurante y pizzería',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/RESTAURANTE-PIZZER%C3%8DA+MAMMA+NOSTRA/@38.6422165,0.0499679,17z/data=!3m1!4b1!4m6!3m5!1s0x129dfe3b368bb265:0x8135026326f18dfe!8m2!3d38.6422165!4d0.0499679!16s%2Fg%2F11c45p9lsl?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/RESTAURANTE-PIZZER%C3%8DA+MAMMA+NOSTRA/@38.6422165,0.0499679,17z/data=!3m1!4b1!4m6!3m5!1s0x129dfe3b368bb265:0x8135026326f18dfe!8m2!3d38.6422165!4d0.0499679!16s%2Fg%2F11c45p9lsl?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6422165%2C0.0499679',
	embed: 'https://maps.google.com/maps?q=38.6422165,0.0499679&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6422165,0.0499679',
};

export const HOURS: { day: string; value: string }[] = [];

export const SERVICIOS: string[] = [];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
