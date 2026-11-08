/**
 * Datos de Panadería El Ayo - Pastelería — C. Sondalezas, 2
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería El Ayo - Pastelería,
 *   36.7219588,-4.4401731, feature 0xd72f70ac0c8df23:0x116cff4d64003aad.
 * - Dirección, categoría, teléfono, valoración, reseñas y horario: ficha
 *   pública de Google (octubre de 2026).
 * - Perfil de Instagram de la casa (@panaderiaelayo): pan, tartas, pasteles,
 *   salados y encargos para celebraciones, además del correo de contacto.
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni métodos de
 * pago. El mostrador recoge solo lo que la casa anuncia en su perfil, sin
 * importes ni productos que no estén publicados.
 */

export const BUSINESS = {
	name: 'Panadería El Ayo - Pastelería',
	shortName: 'El Ayo',
	mark: 'A',
	street: 'C. Sondalezas, 2',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '636 76 09 70',
	phoneHref: 'tel:+34636760970',
	email: 'panaderiaelayo@gmail.com',
	rating: 4.8,
	reviewsCount: 45,
	siteUrl: 'https://www.sur-digital.com/panaderia-el-ayo-pasteleria',
	geo: { lat: 36.7219588, lng: -4.4401731 },
	featureId: '0xd72f70ac0c8df23:0x116cff4d64003aad',
	placeId: 'ChIJI9_IwAr3cg0RrToAZE3_bBE',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería de barrio en Bailén-Miraflores',
	description:
		'Panadería El Ayo - Pastelería, en C. Sondalezas, 2 (Bailén-Miraflores, 29010 Málaga). Pan, tartas, pasteles y salados, con encargos para celebraciones. Teléfono 636 76 09 70. 4,8 sobre 5 en Google.',
	hoursSummary: 'L–V 7:30–20:00 · S y D 7:30–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+El+Ayo+-+Pasteler%C3%ADa/@36.7219588,-4.4401731,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70ac0c8df23:0x116cff4d64003aad!8m2!3d36.7219588!4d-4.4401731!16s%2Fg%2F11clw347fd?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=1255659103984827053',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7219588%2C-4.4401731',
	embed: 'https://maps.google.com/maps?q=36.7219588,-4.4401731&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7219588,-4.4401731',
	instagram: 'https://www.instagram.com/panaderiaelayo/',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–20:00' },
	{ day: 'Sábado', value: '7:30–14:00' },
	{ day: 'Domingo', value: '7:30–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría ser diferente; conviene llamar antes de ir.';

/**
 * Comentario publicado en la ficha de Google que resume el carácter del
 * local. No se reproduce ninguna reseña más porque la ficha no las publica
 * completas de forma accesible.
 */
export const REVIEW_QUOTE =
	'Panadería El Ayo, en la calle Sondalezas, es una panadería de barrio de las de toda la vida en Bailén-Miraflores.';

/** Lo que la casa anuncia en su perfil público y en el escaparate. */
export const SERVICIOS = [
	'Pan',
	'Tartas',
	'Pasteles',
	'Bollería',
	'Empanadas',
	'Encargos para celebraciones',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'Las estanterías de dentro reúnen hogazas, barras, baguettes y panecillos, además de pan envasado para llevar a casa.',
	},
	{
		title: 'La vitrina',
		text: 'En el mostrador de cristal caben porciones de tarta, tartas de fruta, pasteles de chocolate y dulces de confitería.',
	},
	{
		title: 'Los encargos',
		text: 'El escaparate y el perfil de la casa anuncian tartas, empanadas, bollería y encargos para celebraciones.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Hogazas, barras y baguettes',
				note: 'En las estanterías del local, junto a panecillos y pan redondo.',
			},
			{
				name: 'Pan envasado',
				note: 'Barras y hogazas en bolsa, para llevar; también pan de molde y tostadas.',
			},
			{
				name: 'Bollería',
				note: 'La palabra aparece en los vinilos del escaparate, junto a empanadas y tartas.',
			},
		],
	},
	{
		title: 'La vitrina',
		items: [
			{
				name: 'Tartas y pasteles',
				note: 'Porciones de tarta, tartas de fruta y pasteles de chocolate en el mostrador de cristal.',
			},
			{
				name: 'Confitería',
				note: 'Dulces pequeños y pastas, como los que se ven en las bandejas.',
			},
			{
				name: 'Roscos de reyes y buñuelos',
				note: 'Anunciados en el escaparate; su disponibilidad depende de la temporada.',
			},
		],
	},
	{
		title: 'Salados y encargos',
		items: [
			{
				name: 'Empanadas',
				note: 'El escaparate las anuncia junto a la bollería. La ficha no publica surtido ni precios.',
			},
			{
				name: 'Encargos para celebraciones',
				note: 'La casa los anuncia en su perfil público; se concretan por teléfono o correo.',
			},
			{
				name: 'Tartas por encargo',
				note: 'El perfil de la casa menciona tartas y encargos para celebraciones en la misma frase.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería El Ayo?',
		a: 'En la calle Sondalezas, 2, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 20:00. El sábado y el domingo abre de 7:30 a 14:00. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La casa se presenta como panadería y pastelería y anuncia pan, tartas, pasteles, salados y encargos para celebraciones. En el escaparate figuran además bollería, empanadas, confitería y roscos de reyes. La ficha de Google no publica carta ni precios.',
	},
	{
		q: '¿Se pueden encargar tartas o pasteles para una celebración?',
		a: 'Sí. La casa anuncia encargos para celebraciones en su perfil público. Para concretar el encargo, llama al 636 76 09 70 o escribe a panaderiaelayo@gmail.com.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 636 76 09 70 o por correo electrónico en panaderiaelayo@gmail.com. La ficha no publica página web propia; el perfil de Instagram es @panaderiaelayo.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que no hay aparcamiento adaptado para sillas de ruedas. No publica información sobre la entrada, el mostrador o el aseo, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,8 sobre 5 con 45 reseñas en Google. Una de ellas describe el local como «una panadería de barrio de las de toda la vida en Bailén-Miraflores».',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. Los encargos se atienden por teléfono o correo y se recogen en la panadería.',
	},
];
