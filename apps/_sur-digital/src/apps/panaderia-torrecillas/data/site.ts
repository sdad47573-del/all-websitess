/**
 * Datos de Panadería Torrecillas — Av. del Arroyo de los Ángeles, 120
 * (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Torrecillas,
 *   36.73168,-4.4364769, feature 0xd72f7a7d5dd014d:0x384c6641a98a4496.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Publicación del Distrito 4 de Málaga (15 de mayo de 2025) sobre la casa:
 *   pan artesanal con recetas de toda la vida, ingredientes naturales y masa
 *   madre, además del horario.
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web ni
 * métodos de pago. El mostrador recoge lo que la casa anuncia y lo que
 * muestran las fotos del perfil, sin importes.
 */

export const BUSINESS = {
	name: 'Panadería Torrecillas',
	shortName: 'Torrecillas',
	mark: 'T',
	street: 'Av. del Arroyo de los Ángeles, 120',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '951 99 41 95',
	phoneHref: 'tel:+34951994195',
	rating: 4.7,
	reviewsCount: 57,
	siteUrl: 'https://www.sur-digital.com/panaderia-torrecillas',
	geo: { lat: 36.73168, lng: -4.4364769 },
	featureId: '0xd72f7a7d5dd014d:0x384c6641a98a4496',
	placeId: 'ChIJTQHd1af3cg0RlkSKqUFmTDg',
	googleCategory: 'Panadería',
	tagline: 'Panadería artesanal en Bailén-Miraflores',
	description:
		'Panadería Torrecillas, en Av. del Arroyo de los Ángeles, 120 (Bailén-Miraflores, 29011 Málaga). Pan artesanal, dulces y bollería. Teléfono 951 99 41 95. 4,7 sobre 5 en Google.',
	hoursSummary: 'L–V 7:30–15:00 · S 8:00–14:30 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Torrecillas/@36.73168,-4.4364769,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a7d5dd014d:0x384c6641a98a4496!8m2!3d36.73168!4d-4.4364769!16s%2Fg%2F11b806w85j?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4056729796557292694',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.73168%2C-4.4364769',
	embed: 'https://maps.google.com/maps?q=36.73168,-4.4364769&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.73168,-4.4364769',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–15:00' },
	{ day: 'Sábado', value: '8:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) podría ser diferente; conviene llamar antes de ir.';

/** Comentario publicado en la ficha de Google. */
export const REVIEW_QUOTE = 'Hemos comprado unos dulces de fresa, otro de coco y otro de fruta.';

/** Lo que anuncia el rótulo de la fachada y muestra el local. */
export const SERVICIOS = [
	'Pan del día',
	'Confitería',
	'Bocatería',
	'Charcutería',
	'Elaboración propia',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'Chapatas, barras vienas, molletes, pitifos, malagueñas y pan multi cereales, en las estanterías de madera del local.',
	},
	{
		title: 'La confitería',
		text: 'El mostrador de cristal reúne napolitanas, donuts, pasteles de chocolate, tartas y dulces para llevar.',
	},
	{
		title: 'Bocatería y charcutería',
		text: 'El rótulo de la puerta anuncia bocatería y charcutería junto a la panadería y la confitería, todo de elaboración propia.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Chapata',
				note: 'Grande, mediana y chica, en las estanterías del local.',
			},
			{
				name: 'Barra viena',
				note: 'Junto al pan por cuartos y medios kilos y a la barra de viena.',
			},
			{
				name: 'Pitifos y malagueñas',
				note: 'También en versión integral y mantequilla, según los carteles de las estanterías.',
			},
			{
				name: 'Molletes, albardillas y pulguitas',
				note: 'El surtido de panecillos que aparece en los carteles del obrador.',
			},
			{
				name: 'Pan multi cereales',
				note: 'En las estanterías, junto al pan integral.',
			},
		],
	},
	{
		title: 'La confitería',
		items: [
			{
				name: 'Napolitanas y pasteles',
				note: 'En el mostrador de cristal, junto a los donuts y los pasteles de chocolate.',
			},
			{
				name: 'Tartas',
				note: 'Tartas y porciones en el mostrador; la ficha no publica surtido ni precios.',
			},
			{
				name: 'Dulces para llevar',
				note: 'Dulces pequeños, como los de fresa, coco y fruta que cita una reseña.',
			},
		],
	},
	{
		title: 'Bocatería y charcutería',
		items: [
			{
				name: 'Bocadillos',
				note: 'El rótulo de la fachada anuncia bocatería. La ficha no publica carta ni precios.',
			},
			{
				name: 'Charcutería',
				note: 'También en el rótulo de la puerta, junto a la panadería y la confitería.',
			},
			{
				name: 'Elaboración propia',
				note: 'Lo dice el letrero de la fachada, junto al nombre de la casa.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Torrecillas?',
		a: 'En la avenida del Arroyo de los Ángeles, 120, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 15:00. El sábado abre de 8:00 a 14:30 y el domingo cierra. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La casa se presenta como panadería, confitería, bocatería y charcutería, todo de elaboración propia. En las estanterías hay chapatas, barras vienas, molletes, pitifos, malagueñas y pan multi cereales; en el mostrador, napolitanas, donuts, pasteles y tartas. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Hacen bocadillos?',
		a: 'El rótulo de la fachada anuncia bocatería junto a la panadería y la confitería. La ficha de Google no detalla el surtido ni los precios, así que conviene preguntar en el mostrador.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 951 99 41 95. La ficha de Google no publica página web, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, pero no aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 57 reseñas en Google. Una de ellas cuenta que compraron «unos dulces de fresa, otro de coco y otro de fruta».',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
