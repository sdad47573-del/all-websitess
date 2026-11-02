/**
 * Datos de La Cocina de JB — Calle Prof. Manuel Clavero Arévalo, 41020 Sevilla.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 37.4022755,-5.919011, feature
 *   0xd126f0045069bbf:0x9ddbf8ba39c3d4ee, place id «ChIJv5sGRQBvEg0R7tTDObr4250»
 *   y CID 11374958762571060462.
 * - Fotografías del perfil del establecimiento en Google Maps: de ahí salen el
 *   teléfono de pedidos (rótulo de la fachada y cristal del escaparate), la banda
 *   de especialidades del rótulo («Pollo Asado · Arroz Guiso · Comida Casera ·
 *   Pescado · Freiduría») y los platos de la carta fotografiada.
 *
 * Lo que la ficha NO publica y esta web no inventa:
 * - El horario: la respuesta de la ficha no trae ningún bloque de días.
 * - El número de la calle: solo publica la vía, sin portal.
 * - Los precios de la carta: existen en la foto del menú, pero la web no los
 *   publica para no fijar importes que el local puede haber cambiado.
 * - La descripción del negocio (su campo de descripción en Google es «Q»).
 * La web que enlaza la ficha (sites.google.com/view/la-cocina-de-jb-sevilla) es
 * una página de Google Sites sin contenido.
 */

export const BUSINESS = {
	name: 'La Cocina de JB',
	shortName: 'La Cocina de JB',
	mark: 'JB',
	/** La ficha no publica número de portal: solo la vía. */
	street: 'Calle Prof. Manuel Clavero Arévalo',
	streetNote: 'La ficha de Google no publica el número de portal.',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: '41020 Sevilla',
	postalCode: '41020',
	country: 'ES',
	/** Teléfono del rótulo de la fachada y del escaparate, en las fotos del perfil. */
	phone: '+34 646 59 41 55',
	phoneHref: '+34646594155',
	phoneSource: 'Teléfono de pedidos del rótulo de la fachada',
	rating: 5,
	reviewsCount: 10,
	siteUrl: 'https://la-cocina-de-jb.vercel.app',
	geo: { lat: 37.4022755, lng: -5.919011 },
	featureId: '0xd126f0045069bbf:0x9ddbf8ba39c3d4ee',
	placeId: 'ChIJv5sGRQBvEg0R7tTDObr4250',
	cid: '11374958762571060462',
	category: 'Comida casera para llevar',
	categories: ['Restaurante de comida para llevar', 'Establecimiento de comida preparada'],
	tagline: 'Pollo asado, guisos y freiduría',
	description:
		'La Cocina de JB, comida casera para llevar en la calle Prof. Manuel Clavero Arévalo, 41020 Sevilla. Pollo asado, arroz guiso, pescado y freiduría, con pedidos en el 646 59 41 55.',
	/** Banda de especialidades que anuncia el rótulo del local. */
	signSpecials: ['Pollo Asado', 'Arroz Guiso', 'Comida Casera', 'Pescado', 'Freiduría'],
	/** Web enlazada desde la ficha: una página de Google Sites sin contenido. */
	web: 'https://sites.google.com/view/la-cocina-de-jb-sevilla',
	webLabel: 'Web de la ficha (Google Sites)',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cocina+de+JB/@37.4022755,-5.919011,17z/data=!4m6!3m5!1s0xd126f0045069bbf:0x9ddbf8ba39c3d4ee!8m2!3d37.4022755!4d-5.919011!16s%2Fg%2F11ldkt_m2t',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.4022755%2C-5.919011',
	embed: 'https://maps.google.com/maps?q=37.4022755,-5.919011&z=17&hl=es&output=embed',
};

/**
 * La ficha no publica horario: su respuesta no trae ningún bloque de días, así
 * que la web lo dice en vez de rellenar una tabla inventada.
 */
export const HOURS = [{ day: 'Horario', value: 'Sin publicar en la ficha' }];

/** Lo que declara el rótulo, la carta fotografiada y las reseñas. */
export const SERVICIOS = [
	'Pollo asado',
	'Arroz guiso',
	'Comida casera',
	'Pescado y freiduría',
	'Para llevar',
];

/** Las dos únicas reseñas destacadas en la ficha pública. */
export const REVIEWS = [
	{
		quote: 'Pedimos unas hamburguesas para llevar y la verdad que estaban muy buenas.',
		rating: 5,
	},
	{
		quote: 'Comida deliciosa y trato exquisito.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cocina de JB?',
		a: 'En la calle Prof. Manuel Clavero Arévalo, 41020 Sevilla. La ficha de Google publica la vía pero no el número de portal, así que no lo inventamos: el mapa de esta página lleva al punto exacto de la ficha y el botón «Cómo llegar» abre las indicaciones.',
	},
	{
		q: '¿Cómo se pide?',
		a: 'Por teléfono, en el 646 59 41 55. Es el número que el local pinta en el rótulo de su fachada y en el cristal del escaparate, en las fotos de su perfil de Google. La ficha no lo rellena como campo de contacto, pero el cartel es del propio negocio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha no publica horario: no aparece ningún bloque de días. Esta web no anuncia uno, así que conviene llamar al 646 59 41 55 antes de acercarse.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'El rótulo anuncia pollo asado, arroz guiso, comida casera, pescado y freiduría. En la carta fotografiada del perfil aparecen serranitos, baguettes, combos de pollo, fritos como chocos, boquerones, adobo y puntillitas, croquetas, alitas, hamburguesas y ensaladillas.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'La ficha lo clasifica como restaurante de comida para llevar y establecimiento de comida preparada, y las reseñas que la destacan hablan de pedir «para llevar». La foto de la fachada enseña una mesa alta en la puerta, pero el servicio que anuncia el local es de recogida.',
	},
	{
		q: '¿Publica los precios?',
		a: 'El local tiene una carta con precios y una foto de ella en su perfil de Google. Esta web no copia esos importes: un menú fotografiado puede quedar desfasado y preferimos no fijar precios que no controlamos. Se confirman al llamar.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha enlaza una web en Google Sites, pero ahora mismo solo muestra «Alta WEB COMERCIAL para su ficha de Google»: no hay carta, horario ni contacto. Esta página es informativa y tampoco es un canal oficial de pedidos.',
	},
	{
		q: '¿Hace reparto a domicilio?',
		a: 'La ficha no lo marca como comida a domicilio ni enlaza ninguna plataforma de reparto. El canal que anuncia el local es el teléfono de pedidos, así que lo mejor es preguntar al llamar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha no publica datos de accesibilidad (ni acceso adaptado ni aparcamiento adaptado), así que no hay nada que afirmar al respecto. En la foto de la fachada la entrada está a pie de calle, sin escalón visible.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cinco sobre cinco con 10 reseñas, una ficha joven. Las dos reseñas que Google destaca son de cinco estrellas y hablan de las hamburguesas y del trato.',
	},
];
