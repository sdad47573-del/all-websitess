/**
 * Datos de Restaurante Neocantina — Av. de las Lagunas de Ruidera, 8, 13004 Ciudad Real.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 38.9796759,-3.9266019, feature
 *   0xd6bc3916748021f:0xb719ee99ce3f4854 y CID 13193838927716239444.
 * - Fotografías del perfil del establecimiento en Google Maps: de ahí salen los
 *   platos de la galería (arroz con sardinas, migas con huevo, morcilla con
 *   crema de garbanzos, carnes a la brasa, croquetas, hojaldres, churros con
 *   chocolate y la botella de Godello).
 * - Dirección y teléfono, contrastados con los directorios públicos donde figura
 *   el local (Páginas Amarillas, TripAdvisor, 10restaurantes, Cylex, Trip.com),
 *   que coinciden en la avenida de las Lagunas de Ruidera, 8 y en el 926 22 26 94.
 *
 * Lo que esta web no se inventa:
 * - Precios: no se publica ninguna carta con importes.
 * - Horario exacto: los directorios discrepan entre sí (unos dan 12:00–17:00 y
 *   20:00–23:45, otros 12:00–24:00), así que la web se queda con el marco en el
 *   que todos coinciden —lunes cerrado, mediodía y noche— y remite al teléfono.
 * - Valoración de Google: no se cita ninguna nota ni número de reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Neocantina',
	shortName: 'Neocantina',
	mark: 'N',
	street: 'Av. de las Lagunas de Ruidera, 8',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	neighbourhood: '13004 Ciudad Real',
	postalCode: '13004',
	country: 'ES',
	phone: '+34 926 22 26 94',
	phoneHref: '+34926222694',
	phoneSource: 'Teléfono del local en los directorios públicos',
	siteUrl: 'https://restaurante-neocantina.vercel.app',
	geo: { lat: 38.9796759, lng: -3.9266019 },
	featureId: '0xd6bc3916748021f:0xb719ee99ce3f4854',
	cid: '13193838927716239444',
	category: 'Restaurante de cocina manchega',
	categories: ['Restaurante', 'Cocina manchega', 'Tapas y raciones'],
	tagline: 'Cocina manchega, brasa y sobremesa',
	description:
		'Restaurante Neocantina, cocina manchega y de mercado en la avenida de las Lagunas de Ruidera, 8, 13004 Ciudad Real. Brasa, cuchara, raciones y churros con chocolate, con reservas en el 926 22 26 94.',
	/** Perfiles públicos del local. */
	instagram: 'https://www.instagram.com/neocantina/',
	facebook: 'https://www.facebook.com/neocantinaciudadreal/',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Neocantina/@38.9796759,-3.9266019,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3916748021f:0xb719ee99ce3f4854!8m2!3d38.9796759!4d-3.9266019!16s%2Fg%2F11ff2mb6w4?hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9796759%2C-3.9266019',
	embed: 'https://maps.google.com/maps?q=38.9796759,-3.9266019&z=17&hl=es&output=embed',
};

/**
 * Los directorios donde figura el local coinciden en el lunes cerrado y en el
 * servicio de mediodía y noche, pero no en los minutos exactos. La web no fija
 * una tabla horaria que no puede sostener: da el marco y remite al teléfono.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado' },
	{ day: 'Martes a domingo', value: 'Mediodía y noche' },
];

/** Lo que la casa ofrece según su perfil y los directorios donde aparece. */
export const SERVICIOS = [
	'Cocina manchega',
	'Brasa y parrilla',
	'Raciones y tapas',
	'Salón para eventos',
	'Churros con chocolate',
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Neocantina?',
		a: 'En la avenida de las Lagunas de Ruidera, 8, 13004 Ciudad Real. El mapa de esta página lleva al punto exacto de la ficha de Google y el botón «Cómo llegar» abre las indicaciones desde donde estés.',
	},
	{
		q: '¿Cómo se reserva mesa?',
		a: 'Por teléfono, en el 926 22 26 94. Es el número que figura en la ficha y en los directorios del local. Esta web no tiene formulario de reservas ni tramita ninguna: es informativa.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El local cierra los lunes y sirve mediodía y noche de martes a domingo. Los directorios donde aparece no coinciden en los minutos exactos —unos dan 12:00 a 17:00 y 20:00 a 23:45; otros, hasta medianoche—, así que conviene llamar al 926 22 26 94 antes de acercarse.',
	},
	{
		q: '¿Qué se come en Neocantina?',
		a: 'Cocina manchega y de mercado: migas con huevo frito, arroz con sardinas en sartén de hierro, morcilla sobre crema de garbanzos, croquetas, hojaldres de carne guisada, milhojas de calabacín y carnes a la brasa. En las fotos del local también aparecen hamburguesa con huevo y patatas, y churros con chocolate.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'El local no publica su carta ni un menú cerrado en las fuentes consultadas, y esta web no se inventa platos ni precios. Lo más rápido es preguntar por el menú del día al llamar al 926 22 26 94.',
	},
	{
		q: '¿Publica los precios?',
		a: 'No. Aquí no hay importes: una carta cambia de temporada y los precios se confirman en el local o por teléfono. La página nombra los platos que aparecen en el perfil público de Google, sin tarifas.',
	},
	{
		q: '¿Se puede celebrar un evento o ir con niños?',
		a: 'Los directorios del sector donde figura el restaurante anuncian salón y recinto para eventos y servicio de fiestas infantiles. La web no puede confirmar disponibilidad ni mínimos: se pregunta al 926 22 26 94.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Las fuentes públicas consultadas no detallan terraza ni número de mesas en el exterior, así que no hay nada que afirmar. Si es importante para la visita, pregúntalo al reservar.',
	},
	{
		q: '¿Dónde puedo ver más fotos y opiniones?',
		a: 'En la ficha de Google Maps del restaurante, que es donde está su galería completa y las reseñas de los clientes. Las fotos de esta página salen de ese mismo perfil público.',
	},
	{
		q: '¿El restaurante tiene redes sociales?',
		a: 'Sí: Instagram en @neocantina y una página de Facebook con el nombre Neocantina Ciudad Real. Esta web es informativa y no sustituye a sus canales oficiales ni a la ficha de Google.',
	},
];
