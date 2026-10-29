/**
 * Datos de «El Buen Gusto» Panadería — Poniente Sur, 14004 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: "El Buen Gusto" Panaderia,
 *   C. Naranjal de Almagro, 37.87554,-4.7929309,
 *   feature 0xd6d20a3d6d2c99f:0x8d8d9ad339207f9f.
 * - Nombre, dirección, categoría y valoración: ficha pública de Google
 *   (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica horario, teléfono, web propia,
 * correo, redes, descripción, carta, precios, métodos de pago ni reparto.
 * Google ofrece en la propia ficha las opciones «Añadir horario», «Añadir
 * número de teléfono» y «Añadir sitio web», así que esta página no rellena
 * esos datos. Lo que se describe sale de la ficha y de sus fotos.
 */

export const BUSINESS = {
	name: '«El Buen Gusto» Panadería',
	shortName: 'El Buen Gusto',
	mark: 'B',
	street: 'C. Naranjal de Almagro',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14004',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.7,
	reviewsCount: 7,
	siteUrl: 'https://el-buen-gusto-panaderia.vercel.app',
	geo: { lat: 37.87554, lng: -4.7929309 },
	featureId: '0xd6d20a3d6d2c99f:0x8d8d9ad339207f9f',
	placeId: 'ChIJn8nS1qMgbQ0Rn38gOdOajY0',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en Poniente Sur',
	description:
		'«El Buen Gusto» Panadería, en la calle Naranjal de Almagro (Poniente Sur, 14004 Córdoba). Panadería de barrio en una esquina, con el rótulo de panadería en la fachada y mesas en la acera. 4,7 sobre 5 con 7 reseñas en Google. La ficha no publica horario, teléfono ni catálogo.',
	hoursSummary: '',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/%22El+Buen+Gusto%22+Panaderia/@37.87554,-4.7929309,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20a3d6d2c99f:0x8d8d9ad339207f9f!8m2!3d37.87554!4d-4.7929309!16s%2Fg%2F11cmg1bn38?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJn8nS1qMgbQ0Rn38gOdOajY0',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.87554%2C-4.7929309',
	embed: 'https://maps.google.com/maps?q=37.87554,-4.7929309&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.87554,-4.7929309',
};

/** La ficha no tiene horario cargado. La tabla se deja vacía a propósito. */
export const HOURS: { day: string; value: string; closed?: boolean }[] = [];

export const HOURS_NOTE =
	'La ficha de Google no tiene horario publicado: en la propia ficha aparece la opción «Añadir horario». Esta web no lo inventa, así que conviene consultar Google Maps o pasarse por el local antes de ir.';

export const HIGHLIGHTS = [
	{
		title: 'Una esquina con rótulo',
		text: 'En la fachada se lee «Panadería» junto a los rótulos de cafetería. El local ocupa la esquina de la calle Naranjal de Almagro, en Poniente Sur.',
	},
	{
		title: 'Mesas en la acera',
		text: 'En las fotos del perfil se ven mesas y sillas en la acera, con clientes sentados y platos servidos en la terraza.',
	},
	{
		title: '4,7 sobre 5',
		text: 'Siete reseñas en Google le dan 4,7 sobre 5. En esta consulta la ficha solo muestra la nota media, sin los textos de las opiniones.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está «El Buen Gusto» Panadería?',
		a: 'En la calle Naranjal de Almagro, en el distrito Poniente Sur de Córdoba (14004). La ficha no publica número, así que el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no tiene horario publicado: en la propia ficha aparece la opción de añadirlo. Esta página no lo inventa; conviene consultar Google Maps o el propio local antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, web propia, correo ni redes sociales; Google ofrece la opción de añadir el teléfono y la web. El contacto es en el propio local o a través de la ficha de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Google la clasifica como panadería, pero la ficha no publica carta, catálogo ni precios, así que esta página no detalla productos. Se pregunta en el mostrador.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'En las fotos del perfil se ven mesas y sillas en la acera, con clientes sentados y platos servidos. La ficha no detalla el servicio de terraza, así que no se puede confirmar más.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento accesible para sillas de ruedas. No publica datos sobre el acceso al local ni sobre el aseo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 7 reseñas en Google, que la clasifica como panadería. En esta consulta la ficha muestra la nota media, pero no los textos de las reseñas.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No consta. La ficha no publica horario, así que esta página no puede confirmar los días de apertura.',
	},
];
