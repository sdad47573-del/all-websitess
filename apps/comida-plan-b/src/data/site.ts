/**
 * Datos de Comida Plan B.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0xd62056ba3e412b5:0x5e89a6c64d673305, 38.5407752, -0.1331841).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'Comida Plan B',
	fullName: 'Comida Plan B',
	shortName: 'Comida Plan B',
	mark: 'PB',
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
	siteUrl: 'https://comida-plan-b.vercel.app',
	geo: { lat: 38.5407752, lng: -0.1331841 },
	featureId: '0xd62056ba3e412b5:0x5e89a6c64d673305',
	placeId: '',
	plusCode: '',
	category: '',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comida+Plan+B/@38.5407752,-0.1331841,17z/data=!3m1!4b1!4m6!3m5!1s0xd62056ba3e412b5:0x5e89a6c64d673305!8m2!3d38.5407752!4d-0.1331841!16s%2Fg%2F11fd3ffm69?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/Comida+Plan+B/@38.5407752,-0.1331841,17z/data=!3m1!4b1!4m6!3m5!1s0xd62056ba3e412b5:0x5e89a6c64d673305!8m2!3d38.5407752!4d-0.1331841!16s%2Fg%2F11fd3ffm69?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5407752%2C-0.1331841',
	embed: 'https://maps.google.com/maps?q=38.5407752,-0.1331841&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.5407752,-0.1331841',
};

export const HOURS: { day: string; value: string }[] = [];

export const SERVICIOS: string[] = [];

export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

export const FAQ: { q: string; a: string }[] = [];
