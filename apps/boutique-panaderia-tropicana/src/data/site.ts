/**
 * Datos de Boutique de La Panadería Tropicana Pastelería — Bailén-Miraflores,
 * 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Boutique de La Panadería Tropicana
 *   Pastelería, 36.7229709,-4.4429194, feature
 *   0xd72f70b7231039d:0x3d9fbdf07cb6585d.
 * - Categoría, valoración, reseñas, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica la calle ni el número, ni
 * teléfono, web, correo, redes, carta ni precios. El mapa y las indicaciones
 * llevan al punto exacto. El mostrador recoge solo lo que muestran las fotos y
 * lo que cuentan las reseñas, sin importes.
 */

export const BUSINESS = {
	name: 'Boutique de La Panadería Tropicana Pastelería',
	shortName: 'Tropicana',
	mark: 'T',
	/** La ficha no publica la calle: solo el barrio y el código postal. */
	street: 'Bailén-Miraflores',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.4,
	reviewsCount: 63,
	siteUrl: 'https://boutique-panaderia-tropicana.vercel.app',
	geo: { lat: 36.7229709, lng: -4.4429194 },
	featureId: '0xd72f70b7231039d:0x3d9fbdf07cb6585d',
	placeId: 'ChIJnQMxcgv3cg0RXVi2fPC9nz0',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería en Bailén-Miraflores',
	description:
		'Boutique de La Panadería Tropicana Pastelería, en Bailén-Miraflores (29010 Málaga). Pan, bollería y pastelería. Abierta todos los días de 7:30 a 20:30. 4,4 sobre 5 en Google.',
	hoursSummary: 'Todos los días 7:30–20:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Boutique+de+La+Panader%C3%ADa+Tropicana+Pasteler%C3%ADa/@36.7229709,-4.4429194,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70b7231039d:0x3d9fbdf07cb6585d!8m2!3d36.7229709!4d-4.4429194!16s%2Fg%2F11cmg1dcww?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4440476598192724061',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7229709%2C-4.4429194',
	embed: 'https://maps.google.com/maps?q=36.7229709,-4.4429194&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7229709,-4.4429194',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [{ day: 'Lunes a domingo', value: '7:30–20:30' }];

export const HOURS_NOTE =
	'Horario de la ficha de Google, igual todos los días. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene pasarse o mirar la ficha antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Bollería',
	'Palmeras rellenas',
	'Dulces de vitrina',
	'Productos envasados',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y pastelería',
		text: 'El rótulo de la fachada anuncia «Tropicana · Panadería Pastelería». La ficha de Google clasifica el negocio como panadería.',
	},
	{
		title: 'Abierta todo el día',
		text: 'Abre de 7:30 a 20:30 los siete días de la semana, así que hay pan y bollería por la mañana y también por la tarde.',
	},
	{
		title: 'La bandeja de bollería',
		text: 'En las fotos del perfil se ven napolitanas de chocolate, palmeras, dulces de nata y una pieza con etiqueta «Kinder».',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Bollería',
		items: [
			{
				name: 'Napolitana de chocolate',
				note: 'En la bandeja del perfil, cubierta de chocolate por encima.',
			},
			{
				name: 'Palmeras rellenas',
				note: '«Ricas, bastante grandes y baratas», según una de las reseñas de Google.',
			},
			{
				name: 'Dulces de nata',
				note: 'Barras de hojaldre rellenas de nata, junto a las napolitanas.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Pieza «Kinder»',
				note: 'En la bandeja, con la etiqueta «Kinder» sobre el hojaldre.',
			},
			{
				name: 'Pasteles de vitrina',
				note: 'En el mostrador, junto a la bollería y los dulces del día.',
			},
			{
				name: 'Dulces para llevar',
				note: 'La ficha no publica surtido ni precios; cambia a lo largo del día.',
			},
		],
	},
	{
		title: 'La tienda',
		items: [
			{
				name: 'Pan del día',
				note: '«Muy buen pan y unos dulces exquisitos», dicen las reseñas del perfil.',
			},
			{
				name: 'Productos envasados',
				note: 'Estanterías y torres de paquetes junto al mostrador, en las fotos del local.',
			},
			{
				name: 'Aperitivos y bebidas',
				note: 'Bolsas de aperitivos y botellas en la tienda, según las fotos del perfil.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Boutique de La Panadería Tropicana?',
		a: 'En Bailén-Miraflores, 29010 Málaga. La ficha de Google no detalla la calle ni el número, así que el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 7:30 a 20:30, de lunes a domingo, en jornada continua. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, página web, correo ni redes sociales. El contacto es en el propio local; para la ubicación exacta, usa el mapa de esta página o el enlace a Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería y pastelería. En las fotos del perfil aparecen napolitanas de chocolate, palmeras, dulces de nata, una pieza con etiqueta «Kinder» y las vitrinas del local con pan y dulces. También hay estanterías con productos envasados y aperitivos.',
	},
	{
		q: '¿Venden palmeras rellenas?',
		a: 'Sí. Una de las reseñas de Google las describe como «ricas, bastante grandes y baratas». La ficha no publica precios, así que esta web no los indica.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 63 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Es la panadería Tropicana original?',
		a: 'Esta ficha corresponde a la «Boutique de La Panadería Tropicana Pastelería» de Bailén-Miraflores. La ficha no menciona otros locales, así que aquí solo se describe este.',
	},
];
