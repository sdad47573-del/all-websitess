/**
 * Datos de Cocina popular comidas para llevar - La Vega — C. Cronista Carlos
 * Valcárcel, 1, 1ºA, 30008 Murcia.
 *
 * Todo lo de esta ficha viene de la respuesta pública de Google Maps del
 * feature 0xd6383000d3e2813:0xef134d0dcd37dd4. Es una ficha muy escasa, y esta
 * web no rellena sus huecos con invenciones:
 * - No publica horario (la respuesta no trae ningún bloque de días).
 * - No publica teléfono, web ni descripción del negocio.
 * - No publica carta ni precios: solo la categoría «restaurante de comida para
 *   llevar».
 * - La valoración es 2,2 sobre 5 con 5 reseñas, y las dos que Google destaca
 *   son de una estrella. Se publican tal cual, sin maquillar.
 */

export const BUSINESS = {
	name: 'Cocina popular comidas para llevar - La Vega',
	shortName: 'Cocina popular La Vega',
	mark: 'CP',
	street: 'C. Cronista Carlos Valcárcel, 1, 1ºA',
	city: 'Murcia',
	region: 'Región de Murcia',
	regionName: 'Región de Murcia',
	neighbourhood: 'La Vega',
	postalCode: '30008',
	country: 'ES',
	/** La ficha no publica teléfono. */
	phone: null,
	phoneHref: null,
	rating: 2.2,
	reviewsCount: 5,
	siteUrl: 'https://cocina-popular-la-vega.vercel.app',
	geo: { lat: 37.9922347, lng: -1.1339395 },
	featureId: '0xd6383000d3e2813:0xef134d0dcd37dd4',
	placeId: 'ChIJEyg-DQCDYw0R1H3T3NA08Q4',
	cid: '1076699857580948948',
	category: 'Comida para llevar',
	categories: ['Restaurante de comida para llevar'],
	tagline: 'Comida para llevar en Murcia',
	description:
		'Cocina popular comidas para llevar - La Vega, en la calle Cronista Carlos Valcárcel 1, 1ºA, 30008 Murcia. Restaurante de comida para llevar: la ficha de Google no publica carta, horario ni teléfono.',
	hasPublicWebsite: false,
	hasPhone: false,
	hasHours: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cocina+popular+comidas+para+llevar+-+La+Vega/@37.9922347,-1.1339395,17z/data=!4m6!3m5!1s0xd6383000d3e2813:0xef134d0dcd37dd4!8m2!3d37.9922347!4d-1.1339395!16s%2Fg%2F11ywl8l9v4',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9922347%2C-1.1339395',
	embed: 'https://maps.google.com/maps?q=37.9922347,-1.1339395&z=17&hl=es&output=embed',
};

/** La ficha no publica horario: se dice, no se rellena. */
export const HOURS = [{ day: 'Horario', value: 'Sin publicar en la ficha' }];

/** Lo único que declara la ficha, por categoría y accesibilidad. */
export const SERVICIOS = ['Comida para llevar', 'Restaurante', 'Murcia', 'Acceso para sillas de ruedas'];

/** Las dos reseñas destacadas de la ficha, ambas de una estrella. */
export const REVIEWS = [
	{
		quote: 'Compré caldero y probar y tirarlo a la basura!!!!!',
		rating: 1,
	},
	{
		quote: 'En la app pone: bolsa y recipiente INCLUIDOS.',
		rating: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cocina popular comidas para llevar - La Vega?',
		a: 'En la calle Cronista Carlos Valcárcel 1, 1ºA, 30008 Murcia. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha no publica horario: no aparece ningún bloque de días. Esta web no anuncia uno, así que conviene comprobarlo en la ficha de Google o al ir al local.',
	},
	{
		q: '¿Cómo se contacta?',
		a: 'La ficha no publica teléfono ni web. El único canal público que consta es la propia ficha de Google Maps, desde donde se ve la dirección, las reseñas y las pocas fotos que hay.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Google la clasifica como restaurante de comida para llevar, y no hay más: ni carta publicada, ni precios, ni listado de platos. Una reseña menciona el caldero, un guiso murciano, pero no hay forma de confirmar la carta desde la ficha.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Dos coma dos sobre cinco con 5 reseñas. Es una nota baja: las dos reseñas que Google destaca son de una estrella y hablan de un caldero que no gustó y de lo que anuncia la app sobre bolsa y recipiente. Las demás están en la ficha, también las que puntúan mejor.',
	},
	{
		q: '¿Hace reparto a domicilio?',
		a: 'La ficha no lo marca como comida a domicilio ni enlaza ninguna plataforma de reparto. Una de las reseñas menciona «la app», pero esta web no puede confirmar por dónde se pide ni las condiciones del envase.',
	},
	{
		q: '¿Es un local para comer allí?',
		a: 'No consta. La categoría que publica Google es «restaurante de comida para llevar» y el propio nombre del negocio lo dice: comidas para llevar. La ficha no anuncia mesas ni servicio de sala.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica datos sobre aparcamiento adaptado ni asientos adaptados.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha no enlaza ninguna web del negocio. Esta página es informativa, no es un canal oficial de pedidos y no gestiona encargos.',
	},
	{
		q: '¿Por qué la web es tan corta?',
		a: 'Porque la ficha no da más de sí: no hay carta, horario, teléfono ni descripción, y solo hay tres fotos en el perfil. Preferimos una página corta y cierta que una larga con datos inventados.',
	},
];
