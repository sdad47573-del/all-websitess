/**
 * Datos de DAIVEL.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0xd6204d2bcb2ef21:0x228d7fd3789b73f7, 38.5367542, -0.1490919).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: 'DAIVEL',
	fullName: 'DAIVEL',
	shortName: 'DAIVEL',
	mark: 'DV',
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
	siteUrl: 'https://www.sur-digital.com/daivel',
	geo: { lat: 38.5367542, lng: -0.1490919 },
	featureId: '0xd6204d2bcb2ef21:0x228d7fd3789b73f7',
	placeId: '',
	plusCode: '',
	category: '',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/DAIVEL/@38.5367542,-0.1490919,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204d2bcb2ef21:0x228d7fd3789b73f7!8m2!3d38.5367542!4d-0.1490919!16s%2Fg%2F11dxdm6hwp?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/DAIVEL/@38.5367542,-0.1490919,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204d2bcb2ef21:0x228d7fd3789b73f7!8m2!3d38.5367542!4d-0.1490919!16s%2Fg%2F11dxdm6hwp?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5367542%2C-0.1490919',
	embed: 'https://maps.google.com/maps?q=38.5367542,-0.1490919&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.5367542,-0.1490919',
};

/** Pendiente: horario de la ficha. Vacío hasta confirmarlo. */
export const HOURS: { day: string; value: string }[] = [];

/** Pendiente: servicios confirmados en la ficha. */
export const SERVICIOS: string[] = [];

/** Pendiente: carta confirmada. */
export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

/** Pendiente: preguntas basadas en datos confirmados. */
export const FAQ: { q: string; a: string }[] = [];
