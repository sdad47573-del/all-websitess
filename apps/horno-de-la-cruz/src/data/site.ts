/**
 * Datos de Horno de la Cruz — Centro, 14002 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Horno de la Cruz, Calle Góngora, 2,
 *   37.8860957,-4.7796623, feature 0xd6cdf634c61af0b:0x4c099949217325ae.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, web propia,
 * correo, redes, carta, precios, métodos de pago ni reparto. El surtido se
 * describe solo con lo que dicen las reseñas y lo que muestran las fotos:
 * escaparate, vitrinas, empanadas, flores, borrachuelos y dulces.
 */

export const BUSINESS = {
	name: 'Horno de la Cruz',
	shortName: 'Horno de la Cruz',
	mark: 'H',
	street: 'Calle Góngora, 2',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14002',
	country: 'ES',
	phone: '957 49 16 29',
	phoneHref: 'tel:+34957491629',
	rating: 4.5,
	reviewsCount: 169,
	siteUrl: 'https://horno-de-la-cruz.vercel.app',
	geo: { lat: 37.8860957, lng: -4.7796623 },
	featureId: '0xd6cdf634c61af0b:0x4c099949217325ae',
	placeId: 'ChIJC69hTGPfbA0RriVzIUmZCUw',
	googleCategory: 'Panadería',
	tagline: 'Horno y confitería artesana desde 1850',
	description:
		'Horno de la Cruz, en Calle Góngora, 2 (Centro, 14002 Córdoba). Horno y confitería artesana desde 1850: pan del día, empanadas, pastel cordobés, flores, borrachuelos con gloria y tortas de aceite. De lunes a viernes de 9:00 a 14:30 y de 17:00 a 21:00; sábados de 9:00 a 14:30; domingo cerrado. 4,5 sobre 5 con 169 reseñas. Teléfono 957 49 16 29.',
	hoursSummary: 'L–V 9:00–14:30 y 17:00–21:00 · S 9:00–14:30 · domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Horno+de+la+Cruz/@37.8860957,-4.7796623,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf634c61af0b:0x4c099949217325ae!8m2!3d37.8860957!4d-4.7796623!16s%2Fg%2F1tdq2gxy?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJC69hTGPfbA0RriVzIUmZCUw',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8860957%2C-4.7796623',
	embed: 'https://maps.google.com/maps?q=37.8860957,-4.7796623&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8860957,-4.7796623',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '9:00–14:30 · 17:00–21:00' },
	{ day: 'Sábado', value: '9:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. De lunes a viernes abre en dos turnos (9:00–14:30 y 17:00–21:00); el sábado solo por la mañana y el domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Artesanos desde 1850',
	'Pan del día',
	'Empanadas',
	'Pastel cordobés',
	'Flores',
	'Borrachuelos',
];

export const HIGHLIGHTS = [
	{
		title: 'Artesanos desde 1850',
		text: 'Junto a la puerta hay una placa ovalada con el lema «Artesanos desde 1850». Dentro, el cartel de la pared añade: «Más de un siglo a su servicio».',
	},
	{
		title: 'Pastel cordobés y tortas de aceite',
		text: '«Compré unas tortas de aceite y un pastel cordobés y estaban deliciosos», cuenta una de las reseñas de Google.',
	},
	{
		title: 'Empanadas y hoja fina',
		text: '«Empanadas exquisitas, pan y dulces muy bien elaborados» y «buenísima la hoja fina», dicen otras dos de las 169 reseñas.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El horno',
		items: [
			{
				name: 'Pan del día',
				note: 'Es la categoría con la que Google clasifica el local. «Pan y dulces muy bien elaborados», resume una reseña.',
			},
			{
				name: 'Empanadas',
				note: 'En las fotos del perfil se ve una empanada de jamón partida por la mitad. «Empanadas exquisitas», dice una reseña.',
			},
			{
				name: 'Empanadas para llevar',
				note: 'La ficha no publica sabores, formatos ni precios: se pregunta en el mostrador.',
			},
		],
	},
	{
		title: 'La confitería',
		items: [
			{
				name: 'Pastel cordobés',
				note: 'Citado en una reseña junto a las tortas de aceite: «estaban deliciosos».',
			},
			{
				name: 'Flores con nueces',
				note: 'En la vitrina hay un cartel de «FLORES con nueces», sobre las bandejas de dulces.',
			},
			{
				name: 'Hoja fina',
				note: '«Buenísima la hoja fina», dice otra de las reseñas. La ficha no publica carta ni precios.',
			},
		],
	},
	{
		title: 'Dulces de siempre',
		items: [
			{
				name: 'Borrachuelos con gloria',
				note: 'La vitrina anuncia «BORRACHUELO CON GLORIA» a 0,85 € la unidad; el precio es el de la foto y puede cambiar.',
			},
			{
				name: 'Cabello de ángel',
				note: '«Buenísimo el cabello de ángel, suave y poca azúcar», cuenta otra de las opiniones.',
			},
			{
				name: 'Tortas de aceite',
				note: 'Una reseña las compró junto al pastel cordobés. La ficha no publica formatos ni precios.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Horno de la Cruz?',
		a: 'En Calle Góngora, 2, en el distrito Centro de Córdoba (14002). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, de lunes a viernes abre de 9:00 a 14:30 y de 17:00 a 21:00; el sábado, de 9:00 a 14:30, y el domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 957 49 16 29. No figuran web propia, correo ni redes sociales.',
	},
	{
		q: '¿Desde cuándo existe el horno?',
		a: 'La placa de la fachada dice «Artesanos desde 1850» y el cartel del interior, «Más de un siglo a su servicio». La ficha de Google no publica más datos históricos, así que esta página no añade otros.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, empanadas y dulces de confitería. Las reseñas de Google mencionan el pastel cordobés, la hoja fina, el cabello de ángel y las tortas de aceite; en la vitrina de las fotos aparecen flores con nueces y borrachuelos con gloria. La ficha no publica carta, catálogo ni precios.',
	},
	{
		q: '¿Hacen pastel cordobés?',
		a: 'Sí, según una reseña que lo compró junto a unas tortas de aceite. La ficha no publica ingredientes, tamaños ni precios; conviene confirmarlo en el obrador.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No. La ficha de Google marca el domingo como cerrado; de lunes a viernes abre en dos turnos y el sábado solo por la mañana.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 169 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el pan, las empanadas y los dulces.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
