/**
 * Datos de Panadería Yoli — C. Tr.ª del Ciprés (Cruz de Humilladero, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: PANADERIA YOLI,
 *   36.7238733,-4.4481511, feature 0xd72f7acea996051:0x184c91e4e54798a5.
 * - Nombre, dirección y categoría: ficha pública de Google (octubre de 2026).
 * - Imágenes: panorama de Google Street View que la ficha asocia al negocio
 *   (captura de julio de 2026). La ficha no tiene galería de fotos propia.
 *
 * Lo que la web NO inventa: la ficha no publica valoración, reseñas, horario,
 * teléfono, descripción, web, redes, accesibilidad, carta ni precios. No hay
 * números de portal. La página no rellena ninguno de esos huecos.
 */

export const BUSINESS = {
	name: 'Panadería Yoli',
	shortName: 'Yoli',
	mark: 'Y',
	street: 'C. Tr.ª del Ciprés',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://panaderia-yoli.vercel.app',
	geo: { lat: 36.7238733, lng: -4.4481511 },
	featureId: '0xd72f7acea996051:0x184c91e4e54798a5',
	placeId: 'ChIJUWCZ6qz3cg0RpZhH5eSRTBg',
	plusCode: '8C8QPHF2+GP',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en la Travesía del Ciprés',
	description:
		'Panadería Yoli en la Travesía del Ciprés (Cruz de Humilladero, 29010 Málaga). Panadería de barrio; la ficha de Google no publica horario, teléfono ni valoración. Mapa y vistas de la calle.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/PANADERIA+YOLI/@36.7238733,-4.4481511,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7acea996051:0x184c91e4e54798a5!8m2!3d36.7238733!4d-4.4481511!16s%2Fg%2F11wpnr40vj?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=1749193056732519332',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7238733%2C-4.4481511',
	embed: 'https://maps.google.com/maps?q=36.7238733,-4.4481511&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7238733,-4.4481511',
};

/** Panorama de Google Street View que la ficha asocia al negocio. */
export const STREET_VIEW = {
	panoid: 'boh1JPvQ10TdN8JGNbOW_Q',
	date: 'julio de 2026',
};

/** Lo único que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Panadería',
	'Cruz de Humilladero',
	'Travesía del Ciprés',
	'Ficha sin horario publicado',
	'Sin teléfono publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'Una panadería de barrio',
		text: 'Google la clasifica como panadería y la sitúa en la Travesía del Ciprés, en Cruz de Humilladero, sin número de portal en la dirección.',
	},
	{
		title: 'Sin horario en la ficha',
		text: 'La ficha no publica horario, así que esta página no lo afirma. Antes de ir conviene comprobar el letrero del local o pasar a preguntar.',
	},
	{
		title: 'Sin reseñas todavía',
		text: 'La ficha no tiene valoración ni reseñas publicadas. No hay teléfono, web ni redes: la atención es en la propia tienda.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Yoli?',
		a: 'En la Travesía del Ciprés, en el barrio de Cruz de Humilladero (29010 Málaga). La ficha de Google no incluye número de portal; el mapa de esta página abre las coordenadas exactas y «Cómo llegar» lanza la ruta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha pública de Google no publica horario. Esta página no inventa uno: lo mejor es comprobar el letrero del local o pasar a preguntar.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'La ficha no publica ningún teléfono, así que esta página no ofrece número. La atención es en el propio establecimiento.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no publica página web, perfiles de redes sociales ni descripción del negocio, y esta página no enlaza nada que no aparezca en ella.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha no tiene valoración ni reseñas publicadas en el momento de consultarla (octubre de 2026), así que no hay media que mostrar.',
	},
	{
		q: '¿Qué se vende?',
		a: 'El nombre y la categoría de Google indican que es una panadería. La ficha no publica surtido, carta ni precios, así que esta página no los concreta.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre accesibilidad del local, así que esta página no la afirma.',
	},
	{
		q: '¿Las fotos son del interior?',
		a: 'No. La ficha no tiene fotos del perfil. Las imágenes de esta página son tres vistas de Google Street View de la calle donde está el local, identificadas como tales y con su fecha.',
	},
];
