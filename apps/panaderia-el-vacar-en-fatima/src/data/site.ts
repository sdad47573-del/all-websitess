/**
 * Datos de Panadería el Vacar en Fátima — C. Guaraní, 8, Levante, 14014 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería el Vacar en Fátima,
 *   37.898711,-4.763156, feature 0xd6cdf9ead0596ff:0x8773455a6dad225f.
 * - Categoría, valoración, reseñas, teléfono, horario, accesibilidad y
 *   descripción del negocio: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago ni reparto. El surtido se describe con la
 * descripción del negocio, las fotos del perfil y las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería el Vacar en Fátima',
	shortName: 'El Vacar en Fátima',
	mark: 'V',
	street: 'C. Guaraní, 8',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14014',
	country: 'ES',
	phone: '957 44 02 54',
	phoneHref: 'tel:+34957440254',
	rating: 4.5,
	reviewsCount: 406,
	siteUrl: 'https://panaderia-el-vacar-en-fatima.vercel.app',
	geo: { lat: 37.898711, lng: -4.763156 },
	featureId: '0xd6cdf9ead0596ff:0x8773455a6dad225f',
	placeId: 'ChIJ_5YFrZ7fbA0RXyKtbVpFc4c',
	googleCategory: 'Panadería',
	tagline: 'Pan de masa madre, ibéricos y dulces de la tierra',
	description:
		'Panadería el Vacar en Fátima, en la calle Guaraní, 8 (Levante, 14014 Córdoba). Pan tradicional de masa madre, ibéricos de la zona, dulces tradicionales y cafetería. Abre de lunes a viernes de 7:30 a 15:00 y de 17:00 a 21:00, y fines de semana de 8:00 a 15:00. 4,5 sobre 5 con 406 reseñas en Google.',
	hoursSummary: 'L–V 7:30–15:00 y 17:00–21:00 · sábados y domingos 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+el+Vacar+en+F%C3%A1tima/@37.898711,-4.763156,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf9ead0596ff:0x8773455a6dad225f!8m2!3d37.898711!4d-4.763156!16s%2Fg%2F11xc0q3vc?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=9760221072131433055',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.898711%2C-4.763156',
	embed: 'https://maps.google.com/maps?q=37.898711,-4.763156&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.898711,-4.763156',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–15:00 · 17:00–21:00' },
	{ day: 'Sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre todos los días por la mañana y, de lunes a viernes, vuelve por la tarde. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería artesana',
	'Pan de masa madre',
	'Ibéricos',
	'Dulces tradicionales',
	'Bollería',
	'Cafetería',
	'Tostados',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan de masa madre',
		text: 'La ficha del negocio lo explica así: pan tradicional «elaborado con masa madre de cultivo», integral, multsemillas, centeno, espelta, maíz y más modelos.',
	},
	{
		title: 'Ibéricos de la zona',
		text: '«Nuestros ibéricos provienen de distintos pueblos cordobeses», dice la descripción: Fuente Obejuna, Zuheros, Villaviciosa y Espejo.',
	},
	{
		title: 'Dulces de antaño',
		text: 'Bollería con la crema de naranja «de toda la vida» y sabores modernos como Kinder y Nocilla, según la ficha. «Dulces muy buenos para merendar», añade una reseña.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan de masa madre',
				note: 'Elaborado con masa madre de cultivo, según la descripción del negocio en Google.',
			},
			{
				name: 'Integral, multsemillas, centeno, espelta y maíz',
				note: 'Los modelos que la ficha detalla, «y muchos más». No publica precios.',
			},
		],
	},
	{
		title: 'Dulces y bollería',
		items: [
			{
				name: 'Bollería con crema de naranja',
				note: '«La crema naranja de toda la vida», en palabras de la ficha.',
			},
			{
				name: 'Dulces con sabores modernos',
				note: 'Kinder y Nocilla, según la descripción del negocio.',
			},
		],
	},
	{
		title: 'Ibéricos y cafetería',
		items: [
			{
				name: 'Ibéricos de la tierra',
				note: 'De Fuente Obejuna, Zuheros, Villaviciosa y Espejo, según la ficha.',
			},
			{
				name: 'Tostados y tapitas',
				note: '«Buen sitio para desayunar, tomar cerveza y tapitas», dice una reseña; otra habla de «cualquier tostado o pastelería».',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería el Vacar en Fátima?',
		a: 'En la calle Guaraní, 8, en el distrito Levante de Córdoba (14014). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 15:00 y de 17:00 a 21:00. Sábados y domingos abre solo por la mañana, de 8:00 a 15:00. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 44 02 54. No enlaza web propia, correo ni redes, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan tradicional de masa madre en varios modelos, dulces y bollería, ibéricos de la provincia y cafetería con tostados, según la descripción del negocio y las reseñas. La ficha no publica precios.',
	},
	{
		q: '¿Qué panes tienen?',
		a: 'La ficha detalla integral, multsemillas, centeno, espelta y maíz, «y muchos más», todos con masa madre de cultivo. No publica formatos ni precios.',
	},
	{
		q: '¿Venden productos de la tierra?',
		a: 'Sí. La ficha explica que apuestan «por lo natural y lo mejor de cada zona», con ibéricos de Fuente Obejuna, Zuheros, Villaviciosa y Espejo, y dulces de sabores tradicionales cordobeses.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y aseo adaptado. Indica que no hay aparcamiento accesible.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 406 reseñas en Google, que la clasifica como panadería. Las reseñas destacan los tostados, la pastelería, los ibéricos y el desayuno.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí, solo por la mañana: los sábados y los domingos abre de 8:00 a 15:00, según la ficha de Google.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
