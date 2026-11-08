/**
 * Datos de Mamma Leone (Benidorm).
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0xd6205f9476b1d1b:0x87180362eb3c645c, 38.5388316, -0.1183222).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'Mamma Leone',
	fullName: 'Restaurante Pizzeria Mamma Leone',
	shortName: 'Mamma Leone',
	mark: 'ML',
	street: '',
	neighbourhood: '',
	city: 'Benidorm',
	cityAddress: '',
	region: 'Comunidad Valenciana',
	regionName: 'Comunidad Valenciana',
	postalCode: '',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 0,
	reviewsCount: 0,
	siteUrl: 'https://www.sur-digital.com/mamma-leone-benidorm',
	geo: { lat: 38.5388316, lng: -0.1183222 },
	featureId: '0xd6205f9476b1d1b:0x87180362eb3c645c',
	placeId: '',
	plusCode: '',
	category: 'Restaurante y pizzería',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Pizzeria+Mamma+Leone+benidorm/@38.5388316,-0.1183222,17z/data=!3m1!4b1!4m6!3m5!1s0xd6205f9476b1d1b:0x87180362eb3c645c!8m2!3d38.5388316!4d-0.1183222!16s%2Fg%2F11fpmcn5bt?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Restaurante+Pizzeria+Mamma+Leone+benidorm/@38.5388316,-0.1183222,17z/data=!3m1!4b1!4m6!3m5!1s0xd6205f9476b1d1b:0x87180362eb3c645c!8m2!3d38.5388316!4d-0.1183222!16s%2Fg%2F11fpmcn5bt?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5388316%2C-0.1183222',
	embed: 'https://maps.google.com/maps?q=38.5388316,-0.1183222&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.5388316,-0.1183222',
};

export const HOURS: { day: string; value: string }[] = [];

export const SERVICIOS: string[] = [];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
