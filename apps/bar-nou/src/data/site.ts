/**
 * Datos de Bar Nou — Av. Dr. Mitjavila, 10, AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.5096757, 1.5311149, feature
 *   0x12a58adae310eb89:0x65155ba6a3ca6ebd (nombre, dirección, categoría, horario,
 *   teléfono, valoración y atributos de accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps.
 *
 * La ficha no publica descripción del negocio, web propia ni carta con precios:
 * esta web no inventa ni descripciones ni importes.
 */

export const BUSINESS = {
	name: 'Bar Nou',
	fullName: 'BAR NOU',
	mark: 'BN',
	street: 'Av. Dr. Mitjavila, 10',
	city: 'Andorra la Vella',
	parish: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://bar-nou.vercel.app',
	geo: { lat: 42.5096757, lng: 1.5311149 },
	featureId: '0x12a58adae310eb89:0x65155ba6a3ca6ebd',
	placeId: 'ChIJiesQ49qKpRIRvW7Ko6ZbFWU',
	channel: '/g/11c5h2k96l',
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	phone: '+376 863 117',
	phoneHref: 'tel:+376863117',
	tagline: 'Bar restaurante en la avenida Mitjavila, Andorra la Vella',
	description:
		'Bar Nou, bar restaurante en la avenida Doctor Mitjavila, 10, en Andorra la Vella. Abre de lunes a viernes de 7:00 a 1:00 y los domingos de 8:00 a 1:00, con terraza, entrada y asientos adaptados para sillas de ruedas. La ficha de Google le da 4 sobre 5 con 89 reseñas.',
	hasPublicWebsite: false,
	/** Lo que anuncia el escaparate del local, visible en la foto de la fachada. */
	windowSign: 'Menú turístic · Plats combinats · Tapes',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Nou/@42.5096757,1.5311149,17z/data=!4m6!3m5!1s0x12a58adae310eb89:0x65155ba6a3ca6ebd!8m2!3d42.5096757!4d1.5311149!16s%2Fg%2F11c5h2k96l',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5096757%2C1.5311149',
	embed: 'https://maps.google.com/maps?q=42.5096757,1.5311149&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4,
	count: 89,
	label: '4,0',
};

/** Horario que publica la ficha: sábado cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–1:00' },
	{ day: 'Martes', value: '7:00–1:00' },
	{ day: 'Miércoles', value: '7:00–1:00' },
	{ day: 'Jueves', value: '7:00–1:00' },
	{ day: 'Viernes', value: '7:00–1:00' },
	{ day: 'Sábado', value: 'Cerrado' },
	{ day: 'Domingo', value: '8:00–1:00' },
];

/** Lo que sí consta en la ficha de Google. */
export const SERVICIOS = [
	'Bar restaurante',
	'Terraza',
	'Abierto desde las 7:00',
	'Cierra a la 1:00',
	'Acceso adaptado',
	'Asientos adaptados',
];

/** Lo que muestran las fotos y anuncia el escaparate, sin precios. */
export const CARTA: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'Para picar',
		items: [
			{
				name: 'Patatas bravas',
				note: 'dados de patata frita con salsa brava, servidos en cuenco de barro en la terraza',
			},
			{
				name: 'Calamares a la plancha',
				note: 'con cebolla en juliana, aceitunas negras y un hilo de aceite de oliva',
			},
			{
				name: 'Champiñones al ajillo',
				note: 'salteados en aceite de oliva con ajos laminados, en la misma bandeja que el calamar',
			},
		],
	},
	{
		title: 'Platos combinados',
		items: [
			{
				name: 'Huevos fritos con patatas',
				note: 'dos huevos sobre patatas fritas con salsa de tomate, con cesta de pan y vino tinto',
			},
			{
				name: 'Plats combinats',
				note: 'lo que anuncia el escaparate del local, junto al menú turístico',
			},
			{
				name: 'Menú turístic',
				note: 'rotulado en el cristal del bar; la ficha de Google no publica su contenido ni su precio',
			},
		],
	},
	{
		title: 'Barra',
		items: [
			{
				name: 'Cerveza de barril',
				note: 'servida en copa Estrella Damm, también en la terraza',
			},
			{
				name: 'Vino tinto',
				note: 'copa servida con los platos combinados',
			},
			{
				name: 'Café',
				note: 'Delta Cafés, la marca que anuncia el toldo de la fachada',
			},
		],
	},
];

export const CARTA_NOTE =
	'La ficha de Google no publica la carta ni los precios. Lo que aparece aquí es lo que muestran las fotografías del perfil y lo que anuncia el escaparate del local; para conocer la oferta completa y los importes, llama al +376 863 117.';

export const FAQ = [
	{
		q: '¿Dónde está Bar Nou?',
		a: 'En la avenida Doctor Mitjavila, 10, en Andorra la Vella (AD500), a pocos pasos del río Valira. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 1:00, el domingo de 8:00 a 1:00 y el sábado permanece cerrado. Es el horario que publica la ficha de Google; en festivos puede cambiar.',
	},
	{
		q: '¿Cierra a mediodía?',
		a: 'No. La ficha marca un horario continuo de 7:00 a 1:00 de lunes a viernes y de 8:00 a 1:00 los domingos, sin pausa entre comidas y cena.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza con mesas y sillas blancas marcadas con las letras «NOU», junto a la barandilla del río y con luces colgadas por encima.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'El escaparate anuncia «Menú turístic», «Plats combinats» y «Tapes». En las fotos aparecen patatas bravas, calamares a la plancha con cebolla y aceitunas, champiñones al ajillo y un plato combinado de huevos fritos con patatas. La ficha no publica la carta completa.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no la publica, así que esta página no da importes. Los precios y el contenido del menú se consultan en el local o por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados, así que la entrada y la zona de mesas están adaptadas según esos datos. Si necesitas una condición concreta, conviene llamar antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No consta un sistema de reservas ni una web propia. La ficha solo publica el teléfono +376 863 117, que es la vía para preguntar por mesa.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha de Google no publica métodos de pago, así que esta página no lo afirma. En la fachada se ve una máquina expendedora de tabaco de la marca Fortuna, pero eso no indica nada sobre el pago en barra.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4 sobre 5 con 89 reseñas en el momento de consultarla (noviembre de 2026).',
	},
];
