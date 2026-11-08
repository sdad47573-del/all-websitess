/**
 * Datos de 28 Soul Food.
 *
 * Fuente: enlace de Google Maps aportado por el usuario
 * (feature 0xd62051b18336ded:0xae24db7b64656ea7, 38.5384217, -0.1180383).
 *
 * PENDIENTE de confirmar con la ficha: dirección, teléfono, horario,
 * valoración, carta y descripción. Hasta entonces, estos campos están vacíos
 * y la página no los inventa.
 */

export const BUSINESS = {
	name: '28 Soul Food',
	fullName: '28 Soul Food',
	shortName: '28 Soul Food',
	mark: '28',
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
	siteUrl: 'https://www.sur-digital.com/28-soul-food',
	geo: { lat: 38.5384217, lng: -0.1180383 },
	featureId: '0xd62051b18336ded:0xae24db7b64656ea7',
	placeId: '',
	plusCode: '',
	category: '',
	tagline: '',
	description: '',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/28+Soul+Food/@38.5384217,-0.1180383,17z/data=!3m1!4b1!4m6!3m5!1s0xd62051b18336ded:0xae24db7b64656ea7!8m2!3d38.5384217!4d-0.1180383!16s%2Fg%2F11kj227tr9?authuser=0&hl=es&entry=ttu',
	reviews:
		'https://www.google.com/maps/place/28+Soul+Food/@38.5384217,-0.1180383,17z/data=!3m1!4b1!4m6!3m5!1s0xd62051b18336ded:0xae24db7b64656ea7!8m2!3d38.5384217!4d-0.1180383!16s%2Fg%2F11kj227tr9?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.5384217%2C-0.1180383',
	embed: 'https://maps.google.com/maps?q=38.5384217,-0.1180383&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.5384217,-0.1180383',
};

/** Pendiente: horario de la ficha. Vacío hasta confirmarlo. */
export const HOURS: { day: string; value: string }[] = [];

/** Pendiente: servicios confirmados en la ficha. */
export const SERVICIOS: string[] = [];

/** Pendiente: carta confirmada. */
export const MENU: { title: string; items: { name: string; note: string; price?: string }[] }[] = [];

/** Pendiente: preguntas basadas en datos confirmados. */
export const FAQ: { q: string; a: string }[] = [];
